"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export function scrollToSection(id: string) {
  const el = document.getElementById(id.replace(/^#/, ""));
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

    function raf(time: number) {
      lenis!.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
