import type { MetadataRoute } from "next";
import { BLOG_ENABLED } from "@/lib/site-config";

const BASE = "https://roderickfanou.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog/1`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/blog/2`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/blog/3`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/blog/4`, changeFrequency: "yearly", priority: 0.8 },
  ];

  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1.0 },
    ...(BLOG_ENABLED ? blogUrls : []),
    { url: `${BASE}/publications`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
