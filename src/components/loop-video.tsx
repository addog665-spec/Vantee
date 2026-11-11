"use client";

import { useEffect, useRef } from "react";

/** Muted, looping clip that stays on its poster for visitors who prefer reduced motion. */
export function LoopVideo({ src, poster, label, className = "" }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} className={className} />;
}
