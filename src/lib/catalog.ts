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

export type CollectionSlug = "chapter-01" | "advantage-club" | "signature" | "bloom" | "after-dark";

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
  /** A short muted clip from the drop, looped on its page and homepage tile. */
  video?: { src: string; poster: string };
  /** Photos from the drop's shoot, shown under its pieces. */
  gallery?: { src: string; alt: string }[];
};

export const collections: Collection[] = [
  { slug: "chapter-01", name: "Chapter 01", tagline: "Where the story begins.", image: "/images/official/campaign/campaign-harbor-01.jpg", imageAlt: "VÄNTÉ Chapter 01 campaign at the harbor" },
  {
    slug: "advantage-club",
    name: "Advantage Club",
    tagline: "A postcard from St. Vänté, worn on a ringer tee.",
    image: "/images/official/drops/advantage-club-tile.jpg",
    heroImage: "/images/official/drops/advantage-club-banner.jpg",
    imageAlt: "Three friends in the St. Vänté Advantage Club Tee around a red chair",
    drop: true,
    gallery: [
      { src: "/images/official/drops/advantage-club-group-chair.jpg", alt: "Three friends in the St. Vänté Advantage Club Tee around a red chair" },
      { src: "/images/official/drops/advantage-club-group-lounge.jpg", alt: "The St. Vänté Advantage Club Tee worn three ways on the landing" },
      { src: "/images/official/drops/advantage-club-solo-seated.jpg", alt: "The St. Vänté Advantage Club Tee with denim shorts and heels" },
      { src: "/images/official/drops/advantage-club-reclined-01.jpg", alt: "The St. Vänté Advantage Club Tee with wide-leg jeans in the red chair" },
      { src: "/images/official/drops/advantage-club-reclined-02.jpg", alt: "Lounging in the red chair in the St. Vänté Advantage Club Tee" },
    ],
  },
  {
    slug: "signature",
    name: "Signature",
    tagline: "The VÄNTÉ name, in black on white rib.",
    image: "/images/official/drops/signature-look-park-4x5.jpg",
    heroImage: "/images/official/drops/signature-banner.jpg",
    imageAlt: "The Signature Rib Tank cropped, with the Signature Snap Short",
    drop: true,
    video: { src: "/videos/signature-drop.mp4", poster: "/images/official/drops/signature-video-poster.jpg" },
    gallery: [
      { src: "/images/official/drops/signature-look-park.jpg", alt: "The Signature Rib Tank cropped, with the Signature Snap Short and heels" },
      { src: "/images/official/drops/signature-look-plaza.jpg", alt: "The Signature Rib Tank and Signature Snap Short with white socks and trainers" },
      { src: "/images/official/drops/signature-crop-tank.jpg", alt: "The VÄNTÉ script and figure emblem on the Signature Rib Tank" },
    ],
  },
  { slug: "bloom", name: "Bloom", tagline: "Script and flowers on white and burgundy.", image: "/images/official/drops/bloom-raglan-tee.jpg", imageAlt: "Bloom Raglan Tees laid out in the sun", drop: true },
  { slug: "after-dark", name: "After Dark", tagline: "A considered evening uniform.", image: "/images/official/hero/hero-secondary.jpg", imageAlt: "VÄNTÉ campaign portrait at the red mailboxes" },
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
    description: "Our signature jersey in black, with a crisp white collar and the story that started VÄNTÉ written across the back.",
    details: ["Contrast white collar", "White piping at the sleeves", "VÄNTÉ crest at the chest", "“Once upon a time” script graphic on the back"],
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
    description: "A deep burgundy jersey finished with a white collar, fine piping, and the VÄNTÉ crest.",
    details: ["Contrast white collar", "White piping along the sleeves and seams", "VÄNTÉ crest at the chest"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "v-03",
    slug: "motif-denim-short",
    name: "Motif Denim Short",
    collection: "chapter-01",
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
    details: ["Light-wash denim", "Red VÄNTÉ motif across the front leg", "Relaxed, knee-length cut"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
  },
  {
    id: "v-04",
    slug: "weekend-duffel",
    name: "Weekend Duffel",
    collection: "chapter-01",
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
      { src: photo("drops/advantage-club-solo-seated"), alt: "The St. Vänté Advantage Club Tee worn with denim shorts" },
      { src: photo("drops/advantage-club-tee-back"), alt: "Back of the St. Vänté Advantage Club Tee with the VÄNTÉ figure emblem" },
      { src: photo("drops/advantage-club-group-chair"), alt: "Three friends in the St. Vänté Advantage Club Tee" },
      { src: photo("drops/advantage-club-group-lounge"), alt: "The St. Vänté Advantage Club Tee worn three ways" },
      { src: photo("drops/advantage-club-reclined-01"), alt: "The St. Vänté Advantage Club Tee with wide-leg jeans" },
    ],
    description: "A cream ringer tee with an open window onto the sea: blue shutters, bougainvillea, and a table set for two at St. Vänté.",
    details: ["Cream body with blue ringer collar and cuffs", "St. Vänté Advantage Club window graphic on the front", "VÄNTÉ figure emblem below the back collar"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "New drop",
  },
  {
    id: "v-06",
    slug: "signature-rib-tank",
    name: "Signature Rib Tank",
    collection: "signature",
    price: 60,
    color: "White",
    colorHex: "#f4f2ee",
    images: [
      { src: photo("drops/signature-tank-worn"), alt: "Signature Rib Tank in white with the VÄNTÉ script, figure emblem and black flower" },
      { src: photo("drops/signature-crop-tank"), alt: "Close-up of the VÄNTÉ script and figure emblem on the Signature Rib Tank" },
      { src: photo("drops/signature-look-park-4x5"), alt: "The Signature Rib Tank worn cropped with the Signature Snap Short" },
      { src: photo("drops/signature-look-plaza-4x5"), alt: "The Signature Rib Tank and Signature Snap Short, full look" },
    ],
    description: "A close-fitting tank in white rib, with the VÄNTÉ script and figure emblem in black at the chest and a black flower at the side.",
    details: ["White ribbed knit", "Close, body-skimming fit", "VÄNTÉ script and figure emblem in black at the chest", "Black floral print at the side"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "New drop",
  },
  {
    id: "v-08",
    slug: "signature-snap-short",
    name: "Signature Snap Short",
    collection: "signature",
    price: 90,
    color: "Heather grey",
    colorHex: "#bdbdbb",
    images: [
      { src: photo("drops/signature-snap-short-worn"), alt: "Signature Snap Short in heather grey with black side snaps" },
      { src: photo("drops/signature-look-plaza-4x5"), alt: "The Signature Snap Short with the Signature Rib Tank" },
      { src: photo("drops/signature-look-park-4x5"), alt: "The Signature Snap Short worn with heels" },
    ],
    description: "A relaxed, knee-length short in heather grey, with a drawstring waist and a line of black snap buttons down the side.",
    details: ["Heather grey sweat fabric", "Elasticated drawstring waist", "Black snap buttons down the side", "VÄNTÉ figure emblem at the front"],
    sizes: ["XS", "S", "M", "L", "XL"],
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
      { src: photo("drops/bloom-raglan-tee-yellow-bloom"), alt: "Vänté script and yellow flower print on the Bloom Raglan Tee" },
      { src: photo("drops/bloom-raglan-tee-black-bloom"), alt: "Vänté script and black flower print on the Bloom Raglan Tee" },
    ],
    description: "A white raglan tee with burgundy sleeves, the Vänté script across the body, and a hand-drawn flower in full bloom.",
    details: ["White body with burgundy raglan sleeves", "Vänté script across the body", "Floral print"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    edition: "New drop",
  },
];

export type Look = { slug: string; title: string; image: string; imageAlt: string; pieces: string[] };

/** Campaign photos that show several catalog pieces worn together. */
export const looks: Look[] = [
  {
    slug: "out-of-town",
    title: "Out of town",
    image: photo("products/duffel-01"),
    imageAlt: "The Once Upon a Time Jersey and Motif Denim Short, with the Weekend Duffel",
    pieces: ["once-upon-a-time-jersey", "motif-denim-short", "weekend-duffel"],
  },
  {
    slug: "signature-head-to-toe",
    title: "Head to toe",
    image: photo("drops/signature-look-park-4x5"),
    imageAlt: "The Signature Rib Tank and Signature Snap Short worn together",
    pieces: ["signature-rib-tank", "signature-snap-short"],
  },
  {
    slug: "at-the-mailboxes",
    title: "At the mailboxes",
    image: photo("editorial/editorial-red-01"),
    imageAlt: "The Crest Jersey in burgundy beside the Weekend Duffel",
    pieces: ["crest-jersey-burgundy", "weekend-duffel"],
  },
];

export const lookFor = (slug: string) => looks.find((l) => l.pieces.includes(slug));

/** Product URLs from the previous catalog, kept so old links and bookmarks still land somewhere useful. */
export const retiredProductSlugs: Record<string, string> = {
  "object-001-coat": "once-upon-a-time-jersey",
  "sable-knit": "crest-jersey-burgundy",
  "arc-trouser": "motif-denim-short",
  "form-shirt": "weekend-duffel",
  "signature-crop-tank": "signature-rib-tank",
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
