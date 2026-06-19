"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Icon } from "@/lib/icons";

const links = [
  { label: "FEATURES", href: "#features" },
  { label: "SYSTEM_FLOW", href: "#flow" },
  { label: "STACK", href: "#stack" },
  { label: "PRICING", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".nav-item", {
          y: -20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.15,
        });
      });

      ScrollTrigger.create({
        start: "top -24",
        end: 99999,
        onToggle: (self) => setScrolled(self.isActive),
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <header ref={root} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between border-b px-5 transition-colors duration-300 sm:px-8 ${
          scrolled
            ? "my-0 border-line bg-ink/90 backdrop-blur-md"
            : "my-0 border-transparent"
        }`}
        style={{ height: 60 }}
      >
        <a href="#top" className="nav-item flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-ink-2">
            <Icon name="layers" className="h-4 w-4 text-accent" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-white">
            HEADLESS<span className="text-accent">WOO</span>
          </span>
          <span className="ml-1 hidden font-mono text-[10px] text-muted sm:inline">
            [ENV: PRODUCTION]
          </span>
        </a>

        <nav className="nav-item hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 font-mono text-[11px] tracking-wide text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-item flex items-center gap-2">
          <a
            href="https://github.com/wpacademy/nextjs-woocommerce-frontend"
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center gap-2 rounded-md border border-line px-3 font-mono text-[11px] text-zinc-300 transition-colors hover:border-accent/50 hover:text-white sm:flex"
          >
            <Icon name="github" className="h-3.5 w-3.5" />
            STAR
          </a>
          <a
            href="#cta"
            className="hidden h-8 items-center gap-1.5 rounded-md bg-accent px-3.5 font-mono text-[11px] font-semibold text-ink transition-colors hover:bg-accent-2 sm:flex"
          >
            REQUEST DEMO
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-md border border-line text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "check" : "sparkles"} className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-1 rounded-md border border-line bg-ink/95 p-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 font-mono text-[11px] text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-md bg-accent px-3 py-2.5 text-center font-mono text-[11px] font-semibold text-ink"
          >
            REQUEST DEMO
          </a>
        </div>
      )}
    </header>
  );
}
