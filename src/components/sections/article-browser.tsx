"use client";

import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/sections/article-card";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleBrowser({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((article) => article.category)))],
    [articles],
  );

  const filtered = articles.filter((article) => {
    const haystack = `${article.title} ${article.description} ${article.tags.join(" ")}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesCategory = category === "All" || article.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-zinc-950 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:focus:border-white"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-zinc-950 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:focus:border-white"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-white/15">
          No articles match that search yet.
        </div>
      )}
    </div>
  );
}
