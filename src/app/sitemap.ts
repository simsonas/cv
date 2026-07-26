import type { MetadataRoute } from "next";
// Add these two lines at the top of src/app/sitemap.ts
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://simsonas.github.io/cv";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
