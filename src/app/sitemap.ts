import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const PAGES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/experience", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
