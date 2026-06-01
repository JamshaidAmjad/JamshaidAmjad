import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/sections/article-layout";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return createMetadata({
      title: "Article not found",
      description: "This article could not be found.",
      path: `/articles/${slug}`,
    });
  }

  return createMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.description,
    path: `/articles/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticleLayout article={article} related={getRelatedArticles(article)} />;
}
