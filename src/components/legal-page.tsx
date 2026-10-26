import { PlainHeader } from "@/components/page-hero";

export function LegalPage({ title, sections }: { title: string; sections: { heading: string; text: string }[] }) {
  return (
    <section className="on-light min-h-[70svh] bg-ivory pb-24 pt-32 text-ink">
      <div className="page-frame">
        <PlainHeader eyebrow="Last updated May 2026" title={title} light />
        <div className="mt-14 max-w-3xl divide-y divide-ink/15 border-y border-ink/15">
          {sections.map((s) => (
            <section key={s.heading} className="grid gap-4 py-9 md:grid-cols-[14rem_1fr]">
              <h2 className="font-serif text-3xl">{s.heading}</h2>
              <p className="text-sm leading-7 text-ink/70">{s.text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
