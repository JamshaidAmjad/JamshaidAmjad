"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/sections/article-card";
import type { ArticleMeta } from "@/lib/articles";
import { cn } from "@/lib/utils";

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
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          className="min-h-12 w-full rounded-full border border-zinc-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-zinc-950 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:focus:border-white"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition",
              category === item
                ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                : "border-zinc-300 text-zinc-600 hover:border-zinc-500 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/35",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-300 p-12 text-center dark:border-white/15">
          <p className="font-display text-2xl italic text-zinc-400 dark:text-zinc-600">
            Nothing here yet.
          </p>
          <p className="mt-2 text-sm text-zinc-500">No articles match that search.</p>
        </div>
      )}
    </div>
  );
}
