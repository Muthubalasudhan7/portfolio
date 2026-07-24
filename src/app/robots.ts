import type { MetadataRoute } from "next";

// TODO: replace with your deployed domain.
const baseUrl = "https://muthu-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
