import type { MetadataRoute } from "next";

// TODO: replace with your deployed domain.
const baseUrl = "https://muthu-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
