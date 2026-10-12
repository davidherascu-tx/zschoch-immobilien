import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.web, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${site.web}/leistungen/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.web}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.web}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
