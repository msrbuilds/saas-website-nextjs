"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({
  children,
  className,
  y = 36,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as React.ElementType;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          y,
          opacity: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
