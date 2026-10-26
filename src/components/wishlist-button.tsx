"use client";

import { HeartIcon } from "@/components/icons";
import { useStore, wishlist } from "@/lib/store";

export function WishlistButton({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const saved = useStore().wishlist.includes(slug);
  return (
    <button
      type="button"
      onClick={() => wishlist.toggle(slug)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name} to wishlist`}
      className={`flex h-10 w-10 items-center justify-center transition-colors ${saved ? "text-champagne" : "text-bone hover:text-champagne"} ${className}`}
    >
      <HeartIcon filled={saved} />
    </button>
  );
}
