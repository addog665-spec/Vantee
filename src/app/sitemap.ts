import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/catalog";
import { journalEntries } from "@/lib/journal";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/collections", "/lookbook", "/story", "/materials", "/journal", "/members", "/support", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...collections.map((c) => ({ url: `${siteUrl}/collections/${c.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((p) => ({ url: `${siteUrl}/products/${p.slug}`, changeFrequency: "weekly" as const, priority: 0.9, images: [`${siteUrl}${p.images[0].src}`] })),
    ...journalEntries.map((e) => ({ url: `${siteUrl}/journal/${e.slug}`, lastModified: e.isoDate, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
