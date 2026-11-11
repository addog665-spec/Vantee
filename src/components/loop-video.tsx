"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string; label: string; className?: string; withSound?: boolean };

/**
 * Looping clip that starts muted (browsers only autoplay silent video) and stays on its poster for
 * visitors who prefer reduced motion. With `withSound`, a button lets the visitor turn the sound on.
 */
export function LoopVideo({ src, poster, label, className = "", withSound = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches && video.muted) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    // Turning sound on is a deliberate choice to watch, so play even with reduced motion on.
    if (!video.muted) video.play().catch(() => {});
  }

  return (
    <>
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} className={className} />
      {withSound && (
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!muted}
          className="glass absolute bottom-4 right-4 flex h-11 items-center gap-2 px-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] hover:border-white/35 hover:text-champagne"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
            {muted ? <path d="M16 9.5l5 5M21 9.5l-5 5" /> : <path d="M16 9a4.5 4.5 0 010 6M18.5 6.5a8 8 0 010 11" />}
          </svg>
          {muted ? "Sound on" : "Sound off"}
        </button>
      )}
    </>
  );
}
