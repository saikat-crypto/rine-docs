import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://docs.rine.studio",
      lastModified: new Date("2026-09-26"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
