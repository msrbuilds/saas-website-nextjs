"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

const steps: {
  num: string;
  tag: string;
  icon: IconName;
  title: string;
  desc: string;
  metrics: { label: string; value: string }[];
}[] = [
  {
    num: "01",
    tag: "01_CONNECT",
    icon: "database",
    title: "INGESTION NODES",
    desc: "WordPress + WooCommerce expose products, orders, and content through WPGraphQL and the REST API.",
    metrics: [
      { label: "WPGRAPHQL", value: "LINKED" },
      { label: "REST_API", value: "ACTIVE" },
      { label: "THROUGHPUT", value: "4.2 GB/s" },
    ],
  },
  {
    num: "02",
    tag: "02_DEPLOY [CORE]",
    icon: "rocket",
    title: "NEXT.JS ORCHESTRATION",
    desc: "Server-rendered React 19 components fetch and cache data, streaming fast, SEO-friendly pages to visitors.",
    metrics: [
      { label: "RENDER", value: "SSR" },
      { label: "TTFB", value: "42ms" },
      { label: "STATUS", value: "OPTIMAL" },
    ],
  },
  {
    num: "03",
    tag: "03_MONITOR",
    icon: "gauge",
    title: "TELEMETRY",
    desc: "Image optimization, cart persistence, and JWT auth run in real-time with full observability.",
    metrics: [
      { label: "CACHE_HIT", value: "98.4%" },
      { label: "UPTIME", value: "99.9%" },
      { label: "LOAD", value: "LOW" },
    ],
  },
  {
    num: "04",
    tag: "04_SCALE",
    icon: "users",
    title: "AUTO-SCALING",
    desc: "Resource elasticity active. Deploy to Vercel, Netlify, or Docker — the storefront scales with demand.",
    metrics: [
      { label: "COMPUTE", value: "84%" },
      { label: "MEMORY", value: "42%" },
      { label: "ZONES", value: "GLOBAL" },
    ],
  },
];

export function Architecture() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const path = root.current?.querySelector<SVGPathElement>(".flow-path");
        if (path) {
          const len = path.getTotalLength();
          path.style.setProperty("--len", String(len));
          gsap.fromTo(
            path,
            { strokeDashoffset: len },
            {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: "power2.inOut",
              scrollTrigger: { trigger: root.current, start: "top 65%" },
            }
          );
        }
        gsap.from(".flow-node", {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 60%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="flow" ref={root} className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="glow left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 bg-accent/8" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">
            // OPERATIONAL_LOGIC
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            SYSTEM FLOW
          </h2>
          <p className="mt-3 max-w-lg text-sm text-zinc-400">
            Operational pipeline outlining how the headless storefront connects,
            deploys, monitors, and scales production commerce systems.
          </p>
          <div className="mt-3 flex items-center gap-3 font-mono text-[10px] text-muted">
            <span className="text-accent">● PIPELINE ACTIVE</span>
            <span>V4.2.0</span>
          </div>
        </div>

        <div className="relative">
          {/* SVG connector (desktop) */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-2 w-full md:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 4"
          >
            <path
              className="flow-path"
              d="M 0 2 L 1000 2"
              fill="none"
              stroke="rgba(249,115,22,0.5)"
              strokeWidth="1"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flow-node card-border relative flex flex-col rounded-lg border border-line bg-ink-2 p-5 transition-colors hover:border-line-2"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-line bg-ink-3 text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-accent">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
                <div className="mt-4 space-y-1.5 border-t border-line pt-3">
                  {s.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between font-mono text-[10px]"
                    >
                      <span className="text-muted">{m.label}</span>
                      <span className="text-zinc-200">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
