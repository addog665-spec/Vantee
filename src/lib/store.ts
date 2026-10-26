"use client";

import { useSyncExternalStore } from "react";

export type BagLine = { slug: string; size: string; qty: number };

type State = { bag: BagLine[]; wishlist: string[] };

const KEY = "vante:v1";
const empty: State = { bag: [], wishlist: [] };

let state: State = empty;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<State>;
      state = { bag: Array.isArray(parsed.bag) ? parsed.bag : [], wishlist: Array.isArray(parsed.wishlist) ? parsed.wishlist : [] };
    }
  } catch {
    state = empty;
  }
}

function set(next: State) {
  state = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage can be unavailable (private mode); the bag still works for this visit.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    loaded = false;
    load();
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => {
  load();
  return state;
};
const getServerSnapshot = () => empty;

export function useStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const bag = {
  add(slug: string, size: string) {
    const lines = state.bag.slice();
    const i = lines.findIndex((l) => l.slug === slug && l.size === size);
    if (i >= 0) lines[i] = { ...lines[i], qty: Math.min(lines[i].qty + 1, 10) };
    else lines.push({ slug, size, qty: 1 });
    set({ ...state, bag: lines });
  },
  setQty(slug: string, size: string, qty: number) {
    const lines = state.bag
      .map((l) => (l.slug === slug && l.size === size ? { ...l, qty: Math.max(0, Math.min(qty, 10)) } : l))
      .filter((l) => l.qty > 0);
    set({ ...state, bag: lines });
  },
  clear() {
    set({ ...state, bag: [] });
  },
};

export const wishlist = {
  toggle(slug: string) {
    const has = state.wishlist.includes(slug);
    set({ ...state, wishlist: has ? state.wishlist.filter((s) => s !== slug) : [...state.wishlist, slug] });
  },
};
