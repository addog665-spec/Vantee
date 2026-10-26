export type JournalEntry = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "the-space-between",
    category: "Perspective",
    title: "The Space Between",
    excerpt: "On the value of leaving room for a garment, and for a life.",
    date: "May 18, 2026",
    isoDate: "2026-05-18",
    image: "/images/official/editorial/editorial-staircase-01.jpg",
    imageAlt: "VANTE group campaign on the staircase",
    body: [
      "Good design begins with an honest question: what is necessary here? In our work, the answer is rarely immediate. It arrives through fitting, handling, removing, and returning to the first idea.",
      "We think a garment earns its place slowly. It should feel clear in a room, useful in a week, and more familiar in a year. That is why proportion is not an aesthetic gesture for us; it is an act of care.",
      "The result is a quieter object. One that leaves space for the person wearing it, and for the life already in motion around them.",
    ],
  },
  {
    slug: "anatomy-of-a-coat",
    category: "Process",
    title: "Anatomy of a Coat",
    excerpt: "The 47 decisions behind a line that appears effortless.",
    date: "April 30, 2026",
    isoDate: "2026-04-30",
    image: "/images/official/editorial/editorial-red-02.jpg",
    imageAlt: "VANTE burgundy jersey portrait",
    body: [
      "The Object 001 Coat looks simple. That is the hardest thing to make. Behind its single, uninterrupted line sit forty-seven decisions, most of which you will never notice, and all of which you would feel if we had got them wrong.",
      "Some are structural: the depth of the shoulder, the pitch of the sleeve, the weight of the hem that lets the coat fall straight rather than flare. Others are quieter: a lining cut a few millimetres short so it never shows, pockets placed where a hand naturally rests.",
      "Each sample went back and forth until nothing could be removed without loss. What remains is a coat that asks nothing of the wearer, and gives a little more every time it is put on.",
    ],
  },
  {
    slug: "material-memory",
    category: "Materials",
    title: "Material Memory",
    excerpt: "Why good cloth becomes more personal with time.",
    date: "March 12, 2026",
    isoDate: "2026-03-12",
    image: "/images/official/campaign/campaign-story-01.jpg",
    imageAlt: "VANTE campaign at the breakwater",
    body: [
      "Good cloth remembers. Wool settles at the elbow, cotton softens at the collar, and a knit gradually learns the shape of the shoulders it sits on. Over time, a well-made piece stops being new and starts being yours.",
      "That is why we choose fewer materials and learn them deeply. A dense wool twill, a fine organic poplin, an extra-fine merino: each is selected for how it will look in its third year, not just its first wear.",
      "Wear it often. Wash it rarely. Store it with a little room to breathe. The rest is time, and time is the finishing we cannot rush.",
    ],
  },
];

export const getEntry = (slug: string) => journalEntries.find((e) => e.slug === slug);
