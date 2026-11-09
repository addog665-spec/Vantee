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
  { slug: "chapter-01", name: "Chapter 01", tagline: "Where the story begins.", image: "/images/official/campaign/campaign-harbor-01.jpg", imageAlt: "VANTE Chapter 01 campaign at the harbor" },
  { slug: "essentials", name: "Essentials", tagline: "The pieces you reach for first.", image: "/images/official/campaign/campaign-harbor-03.jpg", imageAlt: "VANTE Essentials campaign at the harbor" },
  { slug: "after-dark", name: "After Dark", tagline: "A considered evening uniform.", image: "/images/official/hero/hero-secondary.jpg", imageAlt: "VANTE campaign portrait at the red mailboxes" },
];

const photo = (file: string) => `/images/official/${file}.jpg`;

export const products: Product[] = [
  {
    id: "v-01",
    slug: "once-upon-a-time-jersey",
    name: "Once Upon a Time Jersey",
    collection: "chapter-01",
    price: 140,
    color: "Black",
    colorHex: "#111111",
    images: [
      { src: photo("products/duffel-01"), alt: "Once Upon a Time Jersey in black, worn with light-wash denim" },
      { src: photo("products/duffel-04"), alt: "Back of the Once Upon a Time Jersey showing the script graphic" },
      { src: photo("editorial/editorial-architecture-01"), alt: "Once Upon a Time Jersey worn beneath a street sign" },
      { src: photo("editorial/editorial-staircase-02"), alt: "Once Upon a Time Jersey worn on a stairwell" },
    ],
    description: "Our signature jersey in black, with a crisp white collar and the story that started VANTE written across the back.",
    details: ["Contrast white collar", "White piping at the sleeves", "VANTE crest at the chest", "“Once upon a time” script graphic on the back"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "Limited run",
  },
  {
    id: "v-02",
    slug: "crest-jersey-burgundy",
    name: "Crest Jersey",
    collection: "chapter-01",
    price: 140,
    color: "Burgundy",
    colorHex: "#6b1f2a",
    images: [
      { src: photo("editorial/editorial-red-02"), alt: "Crest Jersey in burgundy, seated against the red mailboxes" },
      { src: photo("backgrounds/campaign-boat-02"), alt: "Crest Jersey in burgundy at the harbor" },
      { src: photo("backgrounds/campaign-boat-01"), alt: "Crest Jersey in burgundy, full look at the harbor" },
      { src: photo("editorial/editorial-red-01"), alt: "Crest Jersey in burgundy beside the Weekend Duffel" },
    ],
    description: "A deep burgundy jersey finished with a white collar, fine piping, and the VANTE crest.",
    details: ["Contrast white collar", "White piping along the sleeves and seams", "VANTE crest at the chest"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "v-03",
    slug: "motif-denim-short",
    name: "Motif Denim Short",
    collection: "essentials",
    price: 180,
    color: "Light wash",
    colorHex: "#9fb0c4",
    images: [
      { src: photo("hero/hero-secondary"), alt: "Motif Denim Short in light wash, showing the red motif on the front" },
      { src: photo("editorial/editorial-architecture-02"), alt: "Motif Denim Short worn beneath a street sign" },
      { src: photo("hero/hero-editorial"), alt: "Motif Denim Short with the black jersey at the red mailboxes" },
      { src: photo("editorial/editorial-staircase-01"), alt: "Motif Denim Short worn on the stairwell" },
    ],
    description: "A relaxed, knee-length short in light-wash denim, marked with our red motif across the front.",
    details: ["Light-wash denim", "Red VANTE motif across the front leg", "Relaxed, knee-length cut"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
  },
  {
    id: "v-04",
    slug: "weekend-duffel",
    name: "Weekend Duffel",
    collection: "essentials",
    price: 420,
    color: "Brown",
    colorHex: "#4a2c22",
    images: [
      { src: photo("products/duffel-03"), alt: "Weekend Duffel in brown, carried over the shoulder" },
      { src: photo("products/duffel-02"), alt: "Weekend Duffel in brown, carried from a car" },
      { src: photo("editorial/editorial-staircase-02"), alt: "Weekend Duffel in brown, set down on a stairwell" },
      { src: photo("editorial/editorial-red-01"), alt: "Weekend Duffel in brown beside the red mailboxes" },
    ],
    description: "A generous brown holdall, sized for a weekend away and built to be carried often.",
    details: ["Brown grained finish", "Twin carry handles", "Sized for a weekend away"],
    sizes: ["One size"],
    inStock: true,
  },
];

/** Product URLs from the previous catalog, kept so old links and bookmarks still land somewhere useful. */
export const retiredProductSlugs: Record<string, string> = {
  "object-001-coat": "once-upon-a-time-jersey",
  "sable-knit": "crest-jersey-burgundy",
  "arc-trouser": "motif-denim-short",
  "form-shirt": "weekend-duffel",
};

export const FREE_DELIVERY_THRESHOLD = 400;

export const sizeAndFit =
  "Cut for a relaxed, easy fit. Take your usual size for the intended shape; choose one size down for a closer fit.";
export const deliveryAndReturns =
  "Complimentary delivery on orders over $400. Returns are accepted within 14 days of delivery, in original condition.";

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const productsIn = (slug: CollectionSlug) => products.filter((p) => p.collection === slug);
export const collectionName = (slug: CollectionSlug) => getCollection(slug)?.name ?? "";

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
