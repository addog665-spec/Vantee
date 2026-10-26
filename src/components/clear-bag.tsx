"use client";

import { useEffect } from "react";
import { bag } from "@/lib/store";

export function ClearBag() {
  useEffect(() => bag.clear(), []);
  return null;
}
