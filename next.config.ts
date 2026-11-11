import type { NextConfig } from "next";
import { retiredProductSlugs } from "./src/lib/catalog";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...Object.entries(retiredProductSlugs).map(([from, to]) => ({
        source: `/products/${from}`,
        destination: `/products/${to}`,
        permanent: true,
      })),
      { source: "/journal/:path*", destination: "/story", permanent: true },
      { source: "/materials", destination: "/story", permanent: true },
      { source: "/members", destination: "/", permanent: true },
      { source: "/account", destination: "/", permanent: true },
      { source: "/lookbook", destination: "/collections/chapter-01", permanent: true },
      { source: "/collections/essentials", destination: "/collections/chapter-01", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
