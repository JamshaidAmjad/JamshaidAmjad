#!/usr/bin/env node
// Generates one new AI article per run and writes it to src/content/articles/.
// Designed to be called from .github/workflows/daily-article.yml on a daily cron.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ARTICLE_MODEL ?? "claude-sonnet-4-6";

const CATEGORIES = [
  "AI Learning Notes",
  "Deep Learning",
  "Neural Networks",
  "Transformers",
  "AI in Healthcare",
  "Data Science Programming",
  "Business with AI",
  "Founder Notes",
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function readExistingArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, title: String(data.title ?? slug), category: String(data.category ?? "") };
    });
}

function pickCategory(existing) {
  const lastUsed = existing
    .slice()
    .sort((a, b) => existing.indexOf(b) - existing.indexOf(a))[0]?.category;
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c, 0]));
  for (const article of existing) {
    if (counts[article.category] !== undefined) counts[article.category] += 1;
  }
  const candidates = CATEGORIES.filter((c) => c !== lastUsed);
  candidates.sort((a, b) => counts[a] - counts[b]);
  return candidates[0] ?? CATEGORIES[0];
}

function uniqueSlug(base, existing) {
  const taken = new Set(existing.map((a) => a.slug));
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}-${i}`)) i += 1;
  return `${base}-${i}`;
}

function buildPrompt(category, existing) {
  const recentTitles = existing
    .slice(-12)
    .map((a) => `- ${a.title}`)
    .join("\n");

  return `You are writing one short article for Jamshaid Amjad's personal AI/builder blog, in the "${category}" category.

Voice: a Master's-in-Applied-AI student and founder (Codexier AB, Forare) writing practical, first-person, no-hype notes for builders, founders, and students. Confident but plain language. No fluff intros, no "in conclusion."

Do NOT reuse any of these existing titles or their exact angle:
${recentTitles || "(none yet)"}

Output ONLY a single JSON object (no markdown fences, no commentary) with this exact shape:
{
  "title": "string, under 60 chars",
  "description": "string, 1 sentence, under 140 chars",
  "tags": ["3-5 short lowercase tags"],
  "seoTitle": "string, under 60 chars",
  "seoDescription": "string, under 155 chars",
  "keyTakeaways": ["3 short bullet sentences"],
  "body": "markdown string"
}

Rules for "body":
- 250-450 words.
- Use only "## " and "### " headings and "- " bullet list lines and plain paragraphs.
- You may use **bold** and \`inline code\`, but NEVER use markdown links (no "[text](url)").
- Start directly with a "## " heading, no title line (the title is in frontmatter already).
- 2-4 sections total.`;
}

async function callClaude(prompt) {
  if (!ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const text = data.content?.map((block) => block.text ?? "").join("") ?? "";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Could not find JSON in model response: ${text}`);
  }
  return JSON.parse(jsonMatch[0]);
}

function toYamlList(items) {
  return items.map((item) => `  - ${JSON.stringify(item)}`).join("\n");
}

function buildMdx({ title, description, date, category, tags, seoTitle, seoDescription, keyTakeaways, related, body }) {
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `date: ${JSON.stringify(date)}`,
    `category: ${JSON.stringify(category)}`,
    "tags:",
    toYamlList(tags),
    "related:",
    toYamlList(related),
    `seoTitle: ${JSON.stringify(seoTitle)}`,
    `seoDescription: ${JSON.stringify(seoDescription)}`,
    "keyTakeaways:",
    toYamlList(keyTakeaways),
    "---",
    "",
    body.trim(),
    "",
  ];
  return frontmatter.join("\n");
}

async function main() {
  const existing = readExistingArticles();
  const category = pickCategory(existing);
  const prompt = buildPrompt(category, existing);
  const generated = await callClaude(prompt);

  const slug = uniqueSlug(slugify(generated.title), existing);
  const related = existing
    .filter((a) => a.category === category)
    .slice(-2)
    .map((a) => a.slug);
  const date = new Date().toISOString().slice(0, 10);

  const mdx = buildMdx({
    title: generated.title,
    description: generated.description,
    date,
    category,
    tags: generated.tags,
    seoTitle: generated.seoTitle,
    seoDescription: generated.seoDescription,
    keyTakeaways: generated.keyTakeaways,
    related,
    body: generated.body,
  });

  // Validate before writing: must parse as proper frontmatter + non-empty body.
  const parsed = matter(mdx);
  if (!parsed.data.title || !parsed.content.trim()) {
    throw new Error("Generated article failed validation (missing title or body)");
  }

  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  fs.writeFileSync(filePath, mdx, "utf8");

  console.log(`Wrote ${filePath}`);

  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput) {
    fs.appendFileSync(githubOutput, `slug=${slug}\ntitle=${generated.title}\n`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
