"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/lib/icons";

const steps = [
  "Clone the repo (30s)",
  "Connect your WordPress site",
  "Deploy & monitor in real-time",
];

export function CTA() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cta-el", {
          y: 36,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="cta" ref={root} className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="border-animate relative overflow-hidden rounded-xl border border-line bg-ink-2 px-6 py-14 text-center sm:px-16">
          <div className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-30" />

          <div className="relative">
            <p className="cta-el mb-4 font-mono text-[11px] tracking-wider text-accent">
              // READY_TO_LAUNCH
            </p>
            <h2 className="cta-el text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              SYSTEM READY
            </h2>
            <p className="cta-el mx-auto mt-4 max-w-md text-sm text-zinc-400">
              Infrastructure awaiting initialization command. Execute build
              sequence to deploy your headless storefront.
            </p>

            <div className="cta-el mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] text-muted">
              {steps.map((s, i) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded border border-line bg-ink-3 text-accent">
                    {i + 1}
                  </span>
                  {s}
                </span>
              ))}
            </div>

            <div className="cta-el mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/wpacademy/nextjs-woocommerce-frontend"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 font-mono text-xs font-semibold text-ink transition-colors hover:bg-accent-2"
              >
                <Icon name="github" className="h-3.5 w-3.5" />
                INITIALIZE BUILD
              </a>
              <a
                href="https://nextjs-woocommerce-frontend-ochre.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-ink-3 px-6 font-mono text-xs font-semibold text-white transition-colors hover:border-accent/50"
              >
                <Icon name="rocket" className="h-3.5 w-3.5" />
                REQUEST DEMO
              </a>
            </div>

            <p className="cta-el mt-5 font-mono text-[10px] text-muted">
              NO CREDIT CARD • 2 MIN SETUP • GPL-3.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
