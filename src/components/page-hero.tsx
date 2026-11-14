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
    <section className="grain float-panel relative mt-3 flex min-h-[76svh] items-end bg-[#11110f] text-bone sm:min-h-[84svh]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25" />
      <div className="relative w-full px-3 pb-3 pt-32 sm:px-5 sm:pb-5">
        <div className="glass-deep max-w-2xl rounded-[26px] px-6 py-7 sm:px-9 sm:py-9">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,7vw,6.5rem)]">{title}</h1>
          {intro && <p className="mt-5 max-w-lg text-base leading-7 text-bone/80">{intro}</p>}
          {children}
        </div>
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
