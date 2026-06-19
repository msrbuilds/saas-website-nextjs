"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

const tech: { name: string; icon: IconName }[] = [
  { name: "Next.js 16", icon: "rocket" },
  { name: "React 19", icon: "sparkles" },
  { name: "TypeScript", icon: "code" },
  { name: "Tailwind v4", icon: "layers" },
  { name: "WooCommerce", icon: "cart" },
  { name: "WordPress", icon: "globe" },
  { name: "WPGraphQL", icon: "database" },
  { name: "Zustand", icon: "shuffle" },
  { name: "React Hook Form", icon: "check" },
  { name: "Zod", icon: "shield" },
  { name: "Framer Motion", icon: "zap" },
  { name: "GraphQL", icon: "code" },
];

export function LogoMarquee() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.to(track.current, {
          xPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
        const el = root.current;
        el?.addEventListener("mouseenter", () => tween.pause());
        el?.addEventListener("mouseleave", () => tween.resume());
        return () => {
          el?.removeEventListener("mouseenter", () => tween.pause());
          el?.removeEventListener("mouseleave", () => tween.resume());
        };
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  const items = [...tech, ...tech];

  return (
    <section ref={root} className="relative border-y border-line py-10">
      <p className="mb-7 text-center font-mono text-[10px] tracking-[0.2em] text-muted">
        // USED IN PRODUCTION ACROSS DISTRIBUTED COMMERCE STACKS
      </p>
      <div className="relative overflow-hidden mask-fade-x">
        <div ref={track} className="flex w-max items-center gap-3" style={{ willChange: "transform" }}>
          {items.map((t, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2 rounded-md border border-line bg-ink-2 px-4 py-2.5"
            >
              <Icon name={t.icon} className="h-4 w-4 text-muted" />
              <span className="whitespace-nowrap font-mono text-xs text-zinc-300">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
