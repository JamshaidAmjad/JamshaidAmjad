"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/sections/article-card";
import type { ArticleMeta } from "@/lib/articles";
import { cn } from "@/lib/utils";

export function ArticleBrowser({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(
    () => Array.from(new Set(articles.map((article) => article.category))),
    [articles],
  );

  const categoryCounts = useMemo(
    () =>
      categories.reduce<Record<string, number>>((counts, category) => {
        counts[category] = articles.filter((article) => article.category === category).length;
        return counts;
      }, {}),
    [articles, categories],
  );

  function toggleCategory(category: string) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  const filtered = articles.filter((article) => {
    const haystack = `${article.title} ${article.description} ${article.tags.join(" ")}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(article.category);
    return matchesQuery && matchesCategory;
  });

  const hasActiveFilters = query.length > 0 || selectedCategories.length > 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:items-start">
      <aside className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03] lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Filters
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {filtered.length} of {articles.length} articles
            </p>
          </div>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedCategories([]);
              }}
              className="grid size-9 place-items-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-zinc-950 dark:border-white/10 dark:hover:border-white/30 dark:hover:text-white"
              aria-label="Clear filters"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Categories
          </p>
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition",
                  selectedCategories.includes(category)
                    ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                    : "border-zinc-200 text-zinc-700 hover:border-zinc-400 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/30",
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="size-4 rounded border-zinc-300 accent-zinc-950 dark:accent-white"
                />
                <span className="min-w-0 flex-1">{category}</span>
                <span className="text-xs opacity-70">{categoryCounts[category]}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      <section className="space-y-8">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="min-h-12 w-full rounded-full border border-zinc-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-zinc-950 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:focus:border-white"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-300 p-12 text-center dark:border-white/15">
            <p className="font-display text-2xl italic text-zinc-400 dark:text-zinc-600">
              Nothing here yet.
            </p>
            <p className="mt-2 text-sm text-zinc-500">No articles match those filters.</p>
          </div>
        )}
      </section>
    </div>
  );
}
