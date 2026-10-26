export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: CollectionSlug;
  price: number;
  color: string;
  colorHex: string;
  images: { src: string; alt: string }[];
  description: string;
  details: string[];
  sizes: string[];
  inStock: boolean;
  edition?: string;
};

export type CollectionSlug = "chapter-01" | "essentials" | "after-dark";

export type Collection = {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
};

export const collections: Collection[] = [
  { slug: "chapter-01", name: "Chapter 01", tagline: "A study in tailored form.", image: "/images/official/campaign/campaign-harbor-01.jpg", imageAlt: "VANTE Chapter 01 campaign at the harbor" },
  { slug: "essentials", name: "Essentials", tagline: "The pieces you reach for first.", image: "/images/official/campaign/campaign-harbor-03.jpg", imageAlt: "VANTE Essentials campaign at the harbor" },
  { slug: "after-dark", name: "After Dark", tagline: "A considered evening uniform.", image: "/images/official/hero/hero-secondary.jpg", imageAlt: "VANTE campaign portrait at the red mailboxes" },
];

const gallery = (name: string, first: { src: string; alt: string }) => [
  first,
  ...["duffel-01", "duffel-02", "duffel-03", "duffel-04"]
    .map((file) => `/images/official/products/${file}.jpg`)
    .filter((src) => src !== first.src)
    .map((src, i) => ({ src, alt: `${name}, view ${i + 2}` })),
];

export const products: Product[] = [
  {
    id: "v-01",
    slug: "object-001-coat",
    name: "Object 001 Coat",
    collection: "chapter-01",
    price: 890,
    color: "Black",
    colorHex: "#111111",
    images: gallery("Object 001 Coat", { src: "/images/official/products/duffel-01.jpg", alt: "VANTE campaign image of a black polo and leather duffel" }),
    description: "A precisely cut wool coat with a softened shoulder and a long, uninterrupted line.",
    details: ["Italian wool shell", "Cupro half lining", "Two internal pockets", "Made in Portugal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "Limited run",
  },
  {
    id: "v-02",
    slug: "sable-knit",
    name: "Sable Knit",
    collection: "essentials",
    price: 320,
    color: "Stone",
    colorHex: "#a69f92",
    images: gallery("Sable Knit", { src: "/images/official/products/duffel-02.jpg", alt: "VANTE campaign image of a leather duffel at a vehicle" }),
    description: "A compact merino layer designed for a quiet, lived-in silhouette.",
    details: ["Extra-fine merino", "Fully fashioned seams", "Sourced in Italy", "Made in Portugal"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
  },
  {
    id: "v-03",
    slug: "arc-trouser",
    name: "Arc Trouser",
    collection: "chapter-01",
    price: 410,
    color: "Ink",
    colorHex: "#26272a",
    images: gallery("Arc Trouser", { src: "/images/official/products/duffel-03.jpg", alt: "VANTE campaign image of a leather duffel and travel look" }),
    description: "A straight, generous trouser balancing architectural drape with ease of movement.",
    details: ["Dry wool twill", "Adjustable side tabs", "Relaxed straight leg", "Made in Portugal"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
  },
  {
    id: "v-04",
    slug: "form-shirt",
    name: "Form Shirt",
    collection: "essentials",
    price: 260,
    color: "Chalk",
    colorHex: "#e2ddd3",
    images: gallery("Form Shirt", { src: "/images/official/products/duffel-04.jpg", alt: "VANTE campaign image of a leather travel duffel" }),
    description: "A crisp poplin shirt scaled for a measured, unforced proportion.",
    details: ["Organic cotton poplin", "Mother-of-pearl buttons", "Curved hem", "Made in Portugal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
];

export const FREE_DELIVERY_THRESHOLD = 400;

export const sizeAndFit =
  "Designed for a relaxed, clean line. Take your usual size for the intended shape; choose one size down for a closer fit.";
export const deliveryAndReturns =
  "Complimentary delivery on orders over $400. Returns are accepted within 14 days of delivery, in original condition.";

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const productsIn = (slug: CollectionSlug) => products.filter((p) => p.collection === slug);
export const collectionName = (slug: CollectionSlug) => getCollection(slug)?.name ?? "";

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
