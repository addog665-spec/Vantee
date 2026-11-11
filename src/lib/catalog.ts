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

export type CollectionSlug = "chapter-01" | "essentials" | "advantage-club" | "signature" | "bloom" | "after-dark";

export type Collection = {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  /** Wide banner for the collection page when the card image is too tall to crop well. */
  heroImage?: string;
  /** Standalone releases, featured together on the homepage. */
  drop?: boolean;
};

export const collections: Collection[] = [
  { slug: "chapter-01", name: "Chapter 01", tagline: "Where the story begins.", image: "/images/official/campaign/campaign-harbor-01.jpg", imageAlt: "VANTE Chapter 01 campaign at the harbor" },
  { slug: "essentials", name: "Essentials", tagline: "The pieces you reach for first.", image: "/images/official/campaign/campaign-harbor-03.jpg", imageAlt: "VANTE Essentials campaign at the harbor" },
  { slug: "advantage-club", name: "Advantage Club", tagline: "A postcard from St. Vänté, worn on a ringer tee.", image: "/images/official/drops/advantage-club-tee-front.jpg", heroImage: "/images/official/drops/advantage-club-hero.jpg", imageAlt: "The St. Vänté Advantage Club Tee and its seaside window graphic", drop: true },
  { slug: "signature", name: "Signature", tagline: "The VANTE name, in black on white rib.", image: "/images/official/drops/signature-crop-tank.jpg", imageAlt: "The Signature Crop Tank worn with denim", drop: true },
  { slug: "bloom", name: "Bloom", tagline: "Script and flowers on white and burgundy.", image: "/images/official/drops/bloom-raglan-tee.jpg", imageAlt: "Bloom Raglan Tees laid out in the sun", drop: true },
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
  {
    id: "v-05",
    slug: "advantage-club-tee",
    name: "St. Vänté Advantage Club Tee",
    collection: "advantage-club",
    price: 85,
    color: "Cream",
    colorHex: "#ece4d6",
    images: [
      { src: photo("drops/advantage-club-tee-front"), alt: "Front of the St. Vänté Advantage Club Tee with its seaside window graphic" },
      { src: photo("drops/advantage-club-tee-back"), alt: "Back of the St. Vänté Advantage Club Tee with the VANTE figure emblem" },
    ],
    description: "A cream ringer tee with an open window onto the sea: blue shutters, bougainvillea, and a table set for two at St. Vänté.",
    details: ["Cream body with blue ringer collar and cuffs", "St. Vänté Advantage Club window graphic on the front", "VANTE figure emblem below the back collar"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "New drop",
  },
  {
    id: "v-06",
    slug: "signature-crop-tank",
    name: "Signature Crop Tank",
    collection: "signature",
    price: 60,
    color: "White",
    colorHex: "#f4f2ee",
    images: [{ src: photo("drops/signature-crop-tank"), alt: "Signature Crop Tank in white rib with the VANTE script and figure emblem" }],
    description: "A cropped, close-fitting tank in white rib, with the VANTE script and figure emblem in black at the chest.",
    details: ["White ribbed knit", "Cropped, close fit", "VANTE script and figure emblem in black at the chest", "Black floral detail at the hem"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    edition: "New drop",
  },
  {
    id: "v-07",
    slug: "bloom-raglan-tee",
    name: "Bloom Raglan Tee",
    collection: "bloom",
    price: 75,
    color: "White / Burgundy",
    colorHex: "#7a1f3d",
    images: [
      { src: photo("drops/bloom-raglan-tee"), alt: "Bloom Raglan Tees in white with burgundy sleeves, laid out in the sun" },
      { src: photo("drops/bloom-raglan-tee-yellow-bloom"), alt: "Vänte script and yellow flower print on the Bloom Raglan Tee" },
      { src: photo("drops/bloom-raglan-tee-black-bloom"), alt: "Vänte script and black flower print on the Bloom Raglan Tee" },
    ],
    description: "A white raglan tee with burgundy sleeves, the Vänte script across the body, and a hand-drawn flower in full bloom.",
    details: ["White body with burgundy raglan sleeves", "Vänte script across the body", "Floral print"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "New drop",
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
