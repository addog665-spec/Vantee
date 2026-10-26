import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

/** Full-bleed photographic header used across the editorial pages. */
export function PageHero({ eyebrow, title, intro, image, imageAlt = "", children }: Props) {
  return (
    <section className="grain relative flex min-h-[78svh] items-end overflow-hidden bg-[#11110f] text-bone sm:min-h-[86svh]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />
      <div className="page-frame relative w-full pb-14 pt-32 sm:pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3.4rem,9vw,9rem)]">{title}</h1>
        {intro && <p className="mt-6 max-w-lg text-base leading-7 text-bone/75">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** Plain header for utility pages (bag, search, legal). */
export function PlainHeader({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className={light ? "on-light" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-4 text-[clamp(3.2rem,8vw,6.5rem)]">{title}</h1>
    </div>
  );
}
