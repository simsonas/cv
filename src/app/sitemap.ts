import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cv.simsonas.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
