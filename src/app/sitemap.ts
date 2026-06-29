import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { siteUrl } from "@/lib/site-url";

const PUBLIC_ROUTES = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/cookies",
  "/disclaimer",
  "/example-report",
  "/faq",
  "/how-it-works",
  "/pricing",
  "/privacy",
  "/terms",
  "/upload",
];

const toLastModified = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/upload" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/upload" ? 0.9 : route === "/blog" ? 0.85 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = Object.entries(BLOG_POSTS).map(([slug, post]) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: toLastModified(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
