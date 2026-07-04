#!/usr/bin/env node
// Publishes one approved article from the committed editorial CSV.
// The local workbook remains the editing source; the repo tracks published articles by slug.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamshaidamjad.com";
const TIME_ZONE = process.env.PUBLISH_TIME_ZONE ?? "Europe/Stockholm";
const TARGET_HOUR = Number(process.env.PUBLISH_HOUR ?? "22");
const FORCE_PUBLISH = ["1", "true", "yes"].includes(
  String(process.env.FORCE_PUBLISH ?? "").toLowerCase(),
);
const CSV_URL = process.env.EDITORIAL_SHEET_CSV_URL;
const CSV_PATH = path.resolve(
  process.env.EDITORIAL_CSV_PATH ?? path.join(process.cwd(), "content/editorial/articles.csv"),
);

const REQUIRED_COLUMNS = [
  "status",
  "publish_date",
  "slug",
  "title",
  "description",
  "category",
  "tags",
  "seo_title",
  "seo_description",
  "key_takeaways",
  "body",
  "related_slugs",
];

function output(name, value) {
  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput) {
    fs.appendFileSync(githubOutput, `${name}=${String(value).replaceAll("\n", " ")}\n`);
  }
  console.log(`${name}=${value}`);
}

function getStockholmParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    date: `${map.year}-${map.month}-${map.day}`,
    hour: Number(map.hour),
  };
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function normalizeHeader(value) {
  return String(value).trim().toLowerCase().replace(/\s+/g, "_");
}

function rowsToObjects(rows) {
  const headers = rows[0]?.map(normalizeHeader) ?? [];
  const missing = REQUIRED_COLUMNS.filter((column) => !headers.includes(column));
  if (missing.length > 0) {
    throw new Error(`Editorial sheet is missing columns: ${missing.join(", ")}`);
  }

  return rows.slice(1).map((row, rowIndex) => {
    const record = { rowNumber: rowIndex + 2 };
    headers.forEach((header, index) => {
      record[header] = String(row[index] ?? "").trim();
    });
    return record;
  });
}

function splitList(value) {
  return String(value ?? "")
    .split(/\r?\n|\||,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function yamlList(items) {
  return items.map((item) => `  - ${JSON.stringify(item)}`).join("\n");
}

function buildMdx(article, today) {
  const title = article.title;
  const description = article.description;
  const category = article.category || "AI Learning Notes";
  const tags = splitList(article.tags);
  const related = splitList(article.related_slugs);
  const seoTitle = article.seo_title || title;
  const seoDescription = article.seo_description || description;
  const keyTakeaways = splitList(article.key_takeaways);
  const body = article.body.startsWith("## ")
    ? article.body
    : `## ${title}\n\n${article.body}`;

  if (!title) throw new Error(`Row ${article.rowNumber}: title is required.`);
  if (!description) throw new Error(`Row ${article.rowNumber}: description is required.`);
  if (!body.trim()) throw new Error(`Row ${article.rowNumber}: body is required.`);
  if (tags.length === 0) throw new Error(`Row ${article.rowNumber}: tags are required.`);
  if (keyTakeaways.length === 0) {
    throw new Error(`Row ${article.rowNumber}: key_takeaways are required.`);
  }

  const publishDate = article.publish_date || today;
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `date: ${JSON.stringify(publishDate)}`,
    `category: ${JSON.stringify(category)}`,
    "tags:",
    yamlList(tags),
    "related:",
    yamlList(related),
    `seoTitle: ${JSON.stringify(seoTitle)}`,
    `seoDescription: ${JSON.stringify(seoDescription)}`,
    "keyTakeaways:",
    yamlList(keyTakeaways),
    "---",
    "",
    body.trim(),
    "",
  ];

  const mdx = frontmatter.join("\n");
  const parsed = matter(mdx);
  if (!parsed.data.title || !parsed.content.trim()) {
    throw new Error(`Row ${article.rowNumber}: generated MDX failed validation.`);
  }
  return mdx;
}

function dueOnOrBefore(article, today) {
  if (!article.publish_date) return true;
  return article.publish_date <= today;
}

function fileExists(slug) {
  return fs.existsSync(path.join(ARTICLES_DIR, `${slug}.mdx`));
}

async function main() {
  const stockholm = getStockholmParts();
  if (!FORCE_PUBLISH && stockholm.hour !== TARGET_HOUR) {
    output("published", "false");
    output("reason", `not_publish_hour_${stockholm.hour}`);
    return;
  }

  let csv;
  if (CSV_URL) {
    csv = CSV_URL.startsWith("file://")
      ? fs.readFileSync(new URL(CSV_URL), "utf8")
      : await fetch(CSV_URL).then(async (response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch editorial sheet CSV: ${response.status} ${response.statusText}`,
          );
        }
        return response.text();
      });
  } else if (fs.existsSync(CSV_PATH)) {
    csv = fs.readFileSync(CSV_PATH, "utf8");
  } else {
    throw new Error(`No editorial CSV source found. Expected ${CSV_PATH}`);
  }

  const rows = parseCsv(csv);
  const articles = rowsToObjects(rows);

  const eligible = articles.filter((article) => {
    const status = String(article.status ?? "").toLowerCase();
    return status === "ready" && dueOnOrBefore(article, stockholm.date);
  });

  for (const article of eligible) {
    const slug = slugify(article.slug || article.title);
    if (!slug) {
      throw new Error(`Row ${article.rowNumber}: slug could not be generated.`);
    }

    if (fileExists(slug)) {
      console.log(`Skipping row ${article.rowNumber}; ${slug}.mdx already exists.`);
      continue;
    }

    const mdx = buildMdx(article, stockholm.date);
    if (!fs.existsSync(ARTICLES_DIR)) fs.mkdirSync(ARTICLES_DIR, { recursive: true });

    const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
    fs.writeFileSync(filePath, mdx, "utf8");

    output("published", "true");
    output("slug", slug);
    output("title", article.title);
    output("file", filePath);
    output("article_url", `${SITE_URL}/articles/${slug}`);
    return;
  }

  output("published", "false");
  output("reason", "no_ready_due_article");
}

main().catch((error) => {
  console.error(error);
  output("published", "false");
  output("reason", "error");
  process.exit(1);
});
