import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const imageUrl = absoluteUrl(image, siteConfig.url);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
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
