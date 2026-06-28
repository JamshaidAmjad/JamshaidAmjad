import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const imageUrl = absoluteUrl(image, siteConfig.url);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph:
      type === "article"
        ? {
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
            locale: "en_US",
            type: "article",
            publishedTime,
            modifiedTime,
            authors,
            tags: keywords,
          }
        : {
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
            locale: "en_US",
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
