const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export const site = {
  name: "VÄNTÉ",
  title: "VÄNTÉ | Wear Your Advantage",
  description: "VÄNTÉ is more than fashion. It is the art of turning adversity into advantage. Luxury meets streetwear.",
  ogImage: "/images/official/hero/hero-main.jpg",
};
