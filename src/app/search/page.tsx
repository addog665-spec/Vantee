import type { Metadata } from "next";
import { PlainHeader } from "@/components/page-hero";
import { SearchView } from "@/components/search-view";

export const metadata: Metadata = { title: "Search", alternates: { canonical: "/search" } };

export default function SearchPage() {
  return (
    <section className="min-h-[70svh] bg-obsidian pb-24 pt-28">
      <div className="page-frame">
        <PlainHeader eyebrow="Search the house" title="Find what stays." />
        <SearchView />
      </div>
    </section>
  );
}
