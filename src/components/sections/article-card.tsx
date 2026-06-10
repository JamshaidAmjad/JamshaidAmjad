import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25 dark:hover:shadow-black/40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>{article.category}</Tag>
          <span className="text-xs text-zinc-500">{article.readingTime}</span>
        </div>
        <ArrowUpRight className="size-4 text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-950 dark:group-hover:text-white" />
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-snug text-zinc-950 dark:text-white">
        <Link href={`/articles/${article.slug}`}>
          <span className="absolute inset-0" aria-hidden="true" />
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{article.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-zinc-500">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
