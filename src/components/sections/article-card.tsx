import Link from "next/link";

import { Tag } from "@/components/ui/tag";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/30">
      <div className="flex flex-wrap items-center gap-3">
        <Tag>{article.category}</Tag>
        <span className="text-xs text-zinc-500">{article.readingTime}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{article.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-zinc-500">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
