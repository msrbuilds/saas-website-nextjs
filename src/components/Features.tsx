"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

type Feature = {
  fig: string;
  icon: IconName;
  title: string;
  desc: string;
  span: string;
  big?: boolean;
};

const features: Feature[] = [
  {
    fig: "FIG. 01",
    icon: "layers",
    title: "HEADLESS ARCHITECTURE",
    desc: "Decouple your frontend from WordPress. Your store runs as a modern Next.js app while WooCommerce stays as the content and commerce engine behind a GraphQL/REST API. Each layer scales independently.",
    span: "lg:col-span-3 lg:row-span-2",
    big: true,
  },
  {
    fig: "FIG. 02",
    icon: "zap",
    title: "SERVER-SIDE RENDERING",
    desc: "Fast initial page loads with the Next.js App Router and streaming.",
    span: "lg:col-span-3",
  },
  {
    fig: "FIG. 03",
    icon: "search",
    title: "PRODUCT CATALOG",
    desc: "Browse with categories, filters, and search.",
    span: "lg:col-span-2",
  },
  {
    fig: "FIG. 04",
    icon: "shuffle",
    title: "VARIABLE PRODUCTS",
    desc: "Sizes, colors & variations.",
    span: "lg:col-span-1",
  },
  {
    fig: "FIG. 05",
    icon: "image",
    title: "IMAGE OPTIMIZATION",
    desc: "Automatic next/image optimization for crisp, responsive media.",
    span: "lg:col-span-2",
  },
  {
    fig: "FIG. 06",
    icon: "cart",
    title: "PERSISTENT CART",
    desc: "Cart saved to localStorage that survives refreshes.",
    span: "lg:col-span-2",
  },
  {
    fig: "FIG. 07",
    icon: "shield",
    title: "JWT AUTHENTICATION",
    desc: "Secure login, registration & account management.",
    span: "lg:col-span-2",
  },
  {
    fig: "FIG. 08",
    icon: "card",
    title: "CHECKOUT FLOW",
    desc: "Complete order processing through WooCommerce, end to end.",
    span: "lg:col-span-3",
  },
  {
    fig: "FIG. 09",
    icon: "phone",
    title: "RESPONSIVE & MOBILE-FIRST",
    desc: "A polished experience that works beautifully on every device.",
    span: "lg:col-span-3",
  },
];

export function Features() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".feature-card", { opacity: 0, y: 40 });
        ScrollTrigger.batch(".feature-card", {
          start: "top 90%",
          onEnter: (els) =>
            gsap.to(els, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="features" ref={root} className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">
              // CORE_CAPABILITIES
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              STOREFRONT PRIMITIVES
            </h2>
            <p className="mt-3 max-w-lg text-sm text-zinc-400">
              The foundational capabilities of the headless storefront. Modular,
              scalable, and secure by design.
            </p>
          </div>
          <a
            href="https://github.com/wpacademy/nextjs-woocommerce-frontend"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-ink-2 px-4 py-2 font-mono text-[11px] text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
          >
            EXPLORE ALL FEATURES
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((f) => (
            <article
              key={f.title}
              className={`feature-card card-border group relative flex flex-col justify-between rounded-lg border border-line bg-ink-2 p-5 transition-colors duration-300 hover:border-line-2 ${f.span}`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-ink-3 text-accent transition-colors group-hover:text-accent-2">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-muted">
                  {f.fig}
                </span>
              </div>
              <div>
                <h3
                  className={`font-semibold tracking-tight text-white ${
                    f.big ? "text-xl" : "text-base"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`mt-1.5 text-zinc-400 ${
                    f.big ? "text-sm leading-relaxed" : "text-xs"
                  }`}
                >
                  {f.desc}
                </p>
                {f.big && (
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-muted">
                    <span className="rounded border border-line bg-ink-3 px-2 py-1">
                      WORDPRESS + WOO
                    </span>
                    <Icon name="arrow" className="h-3 w-3" />
                    <span className="rounded border border-line bg-ink-3 px-2 py-1">
                      NEXT.JS FRONTEND
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
