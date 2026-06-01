import { ArticleBrowser } from "@/components/sections/article-browser";
import { BlogLayout } from "@/components/sections/blog-layout";
import { getAllArticles } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Articles and Learning Hub",
  description:
    "AI learning notes by Jamshaid Amjad on neural networks, transformers, healthcare AI, data science, and AI products.",
  path: "/ai-articles",
});

export default function AiArticlesPage() {
  return (
    <BlogLayout
      title="AI Articles and Learning Hub"
      description="Polished starter notes for Applied AI learning, practical product thinking, and founder reflection."
    >
      <ArticleBrowser articles={getAllArticles()} />
    </BlogLayout>
  );
}
