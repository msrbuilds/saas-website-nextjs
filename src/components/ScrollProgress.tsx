"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(bar.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      });
      return () => mm.revert();
    },
    { scope: bar }
  );

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={bar}
        className="h-full origin-left scale-x-0 bg-accent"
      />
    </div>
  );
}
