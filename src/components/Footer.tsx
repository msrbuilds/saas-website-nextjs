"use client";

import { Icon } from "@/lib/icons";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Overview", href: "#top" },
      { label: "Features", href: "#features" },
      { label: "System Flow", href: "#flow" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Quickstart", href: "https://github.com/wpacademy/nextjs-woocommerce-frontend" },
      { label: "Live Demo", href: "https://nextjs-woocommerce-frontend-ochre.vercel.app/" },
      { label: "WooCommerce", href: "https://woocommerce.com/" },
      { label: "WPGraphQL", href: "https://www.wpgraphql.com/" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "License (GPL-3.0)", href: "https://github.com/wpacademy/nextjs-woocommerce-frontend/blob/master/LICENSE" },
      { label: "Next.js", href: "https://nextjs.org/" },
      { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { label: "GSAP", href: "https://gsap.com/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-ink-2">
                <Icon name="layers" className="h-4 w-4 text-accent" />
              </span>
              <span className="font-mono text-sm font-semibold text-white">
                HEADLESS<span className="text-accent">WOO</span>
                <span className="text-muted"> _SYS</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
              A modern, high-performance headless storefront for WooCommerce,
              built with Next.js 16, React 19, and Tailwind v4.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-line bg-ink-2 px-3 py-2 font-mono text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
              SYSTEM_STATUS: OPERATIONAL
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] tracking-wider text-muted">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-xs text-zinc-400 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-[10px] text-muted">
            © {new Date().getFullYear()} HEADLESSWOO INC. · GPL-3.0
          </p>
          <p className="font-mono text-[10px] text-muted">
            BUILT WITH NEXT.JS · GSAP · TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
