import { ImageResponse } from "next/og";

import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export const alt = "Article cover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = article?.category ?? "AI Articles";
  const title = article?.title ?? "Jamshaid Amjad";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "white",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#a1a1aa" }}>
          {category}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#a1a1aa" }}>
          <span>Jamshaid Amjad</span>
          <span>Jimzzz</span>
        </div>
      </div>
    ),
    size,
  );
}
