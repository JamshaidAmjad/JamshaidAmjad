import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  related: string[];
  seoTitle?: string;
  seoDescription?: string;
  readingTime: string;
  keyTakeaways: string[];
};

export type Article = ArticleMeta & {
  content: string;
};

function asArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

function toArticle(slug: string, raw: string): Article {
  const parsed = matter(raw);
  const data = parsed.data;

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString()),
    category: String(data.category ?? "AI Learning Notes"),
    tags: asArray(data.tags),
    related: asArray(data.related),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    keyTakeaways: asArray(data.keyTakeaways),
    readingTime: readingTime(parsed.content).text,
    content: parsed.content.trim(),
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(articlesDirectory, file), "utf8");
      const { content: _content, ...meta } = toArticle(slug, raw);
      return meta;
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getArticleBySlug(slug: string): Article | null {
  const file = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(file)) {
    return null;
  }

  return toArticle(slug, fs.readFileSync(file, "utf8"));
}

export function getRelatedArticles(article: Article, limit = 3) {
  const allArticles = getAllArticles().filter((item) => item.slug !== article.slug);
  const explicit = article.related
    .map((slug) => allArticles.find((item) => item.slug === slug))
    .filter((item): item is ArticleMeta => Boolean(item));

  const categoryMatches = allArticles.filter(
    (item) =>
      item.category === article.category &&
      !explicit.some((related) => related.slug === item.slug),
  );

  return [...explicit, ...categoryMatches].slice(0, limit);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function markdownToHtml(markdown: string) {
  const blocks: string[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push(`<ul>${listItems.join("")}</ul>`);
      listItems = [];
    }
  }

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      blocks.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      blocks.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      continue;
    }

    flushList();
    blocks.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  flushList();
  return blocks.join("\n");
}
