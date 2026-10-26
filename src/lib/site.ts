const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export const site = {
  name: "VANTE",
  title: "VANTE | Quiet Confidence",
  description: "A modern luxury wardrobe, designed with quiet confidence.",
  ogImage: "/images/official/hero/hero-main.jpg",
};
