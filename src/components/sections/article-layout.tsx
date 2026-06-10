import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { ArticleCard } from "@/components/sections/article-card";
import { BlogCover } from "@/components/sections/blog-cover";
import { BookingCTA } from "@/components/sections/booking-cta";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import type { Article, ArticleMeta } from "@/lib/articles";
import { markdownToHtml } from "@/lib/articles";

export function ArticleLayout({
  article,
  related,
}: {
  article: Article;
  related: ArticleMeta[];
}) {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <Link
          href="/ai-articles"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          All articles
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Tag>{article.category}</Tag>
          <span className="text-sm text-zinc-500">{article.readingTime}</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>
        <div className="mt-8">
          <BlogCover label={article.category} />
        </div>
        {article.keyTakeaways.length > 0 ? (
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {article.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        <article
          className="article-body mt-12"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
        />
        <div className="mt-14 flex items-start gap-5 rounded-2xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-zinc-950 text-base font-bold text-white dark:bg-white dark:text-zinc-950">
            JA
          </span>
          <div>
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Written by Jamshaid Amjad
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              AI student, founder of Codexier AB, and builder of Forare. I document practical
              AI learning and founder decisions in public.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <NewsletterSignup compact />
        </div>
        <div className="mt-12">
          <BookingCTA />
        </div>
      </Container>
      {related.length > 0 ? (
        <Container className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Keep <span className="font-display font-normal italic">reading</span>.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      ) : null}
    </main>
  );
}
