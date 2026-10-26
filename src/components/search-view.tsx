"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { ProductGrid } from "@/components/product-card";
import { collectionName, products } from "@/lib/catalog";

export function SearchView() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      q
        ? products.filter((p) =>
            [p.name, collectionName(p.collection), p.color, p.description, ...p.details].join(" ").toLowerCase().includes(q),
          )
        : products,
    [q],
  );

  return (
    <>
      <label className="mt-10 flex max-w-2xl items-center gap-4 border-b border-white/35 pb-3 focus-within:border-champagne">
        <SearchIcon className="h-5 w-5 text-champagne" />
        <span className="sr-only">Search products</span>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pieces, materials, collections"
          className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-bone/35"
        />
      </label>
      <div className="mt-12">
        <p className="mb-7 text-xs text-bone/50" aria-live="polite">
          {q ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”` : "All pieces"}
        </p>
        {results.length ? <ProductGrid products={results} /> : <p className="border-y border-white/15 py-12 text-sm text-bone/60">No pieces match that search.</p>}
      </div>
    </>
  );
}
