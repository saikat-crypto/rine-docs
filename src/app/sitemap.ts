import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://docs.rine.studio";
  const now = new Date("2026-09-25");

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/overview", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/quickstart", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/authentication", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/extract", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/convert", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/supported-formats", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/rine-ir", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rine-ir/v3", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rine-ir/v3/entities", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/rine-ir/v3/structure", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/rine-ir/v3/coordinates", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/rine-ir/v3/diagnostics", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/diagnostics", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/known-limitations", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/service-status", priority: 0.7, changeFrequency: "daily" as const },
    { path: "/help", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/api-reference", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/api-reference/health", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/api-reference/extract", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/api-reference/convert", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/api-reference/schemas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/changelog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/developer-preview", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
