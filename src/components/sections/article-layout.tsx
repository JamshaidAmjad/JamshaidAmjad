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
        <div className="flex flex-wrap items-center gap-3">
          <Tag>{article.category}</Tag>
          <span className="text-sm text-zinc-500">{article.readingTime}</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>
        <div className="mt-8">
          <BlogCover label={article.category} />
        </div>
        {article.keyTakeaways.length > 0 ? (
          <aside className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {article.keyTakeaways.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </aside>
        ) : null}
        <article
          className="prose prose-zinc mt-10 max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-8 prose-li:leading-7"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
        />
        <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
          <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">About the author</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Jamshaid Amjad is an AI student, founder of Codexier AB, and builder of Forare.
            He documents practical AI learning and founder decisions in public.
          </p>
        </div>
        <div className="mt-8">
          <NewsletterSignup compact />
        </div>
        <div className="mt-8">
          <BookingCTA />
        </div>
      </Container>
      {related.length > 0 ? (
        <Container className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Related articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      ) : null}
    </main>
  );
}
