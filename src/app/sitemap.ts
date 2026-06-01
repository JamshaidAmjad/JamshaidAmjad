import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { getAllArticles } from "@/lib/articles";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/ai-articles",
  "/articles",
  "/work-with-me",
  "/book",
  "/newsletter",
  "/contact",
  "/now",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...getAllArticles().map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
