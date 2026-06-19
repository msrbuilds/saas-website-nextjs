"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

function SplitText({ text, wordClass = "" }: { text: string; wordClass?: string }) {
  return (
    <span className="inline">
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: "0.25em", paddingBottom: "0.08em" }}
        >
          <span className={`hero-word inline-block ${wordClass}`}>{w}</span>
        </span>
      ))}
    </span>
  );
}

const pills: { icon: IconName; label: string }[] = [
  { icon: "zap", label: "SERVER-SIDE RENDERING" },
  { icon: "gauge", label: "100/100 LIGHTHOUSE" },
  { icon: "lock", label: "JWT AUTHENTICATION" },
];

const logLines = [
  { t: "00:00:01", m: "Connecting to WordPress backend...", s: "OK" },
  { t: "00:00:01", m: "Fetching product catalog via WPGraphQL", s: "OK" },
  { t: "00:00:02", m: "Hydrating React 19 server components", s: "OK" },
  { t: "00:00:02", m: "Cart state restored from localStorage", s: "OK" },
  { t: "00:00:03", m: "WARN: Image cache miss — optimizing", s: "WARN" },
  { t: "00:00:03", m: "JWT token validated for session", s: "OK" },
  { t: "00:00:04", m: "Checkout route pre-fetched", s: "OK" },
  { t: "00:00:05", m: "Page rendered — TTFB: 42ms", s: "OK" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.from(".hero-status", { y: 14, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(".hero-word", { yPercent: 120, duration: 0.85, stagger: 0.05, ease: "power4.out" }, "-=0.3")
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.45")
          .from(".hero-pill", { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.5")
          .from(".hero-cta", { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
          .from(".hero-panel", { y: 50, opacity: 0, scale: 0.97, duration: 1, ease: "power3.out" }, "-=0.6");

        gsap.to(".hero-grid", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

        // Slowly drifting background glows
        gsap.to(".hero-glow-1", {
          x: 80,
          y: 60,
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".hero-glow-2", {
          x: -70,
          y: 50,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const logEls = gsap.utils.toArray<HTMLElement>(".log-line");
        logEls.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
              delay: 0.8 + i * 0.18,
              repeat: -1,
              repeatDelay: logEls.length * 0.18,
              yoyo: true,
              yoyoEase: "none",
              onRepeat: () => gsap.set(el, { opacity: 0 }),
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="top" ref={root} className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div className="hero-grid bg-grid mask-radial pointer-events-none absolute inset-0 -z-10" />
      <div className="glow hero-glow-1 -left-20 top-0 h-[400px] w-[400px] bg-accent/12" />
      <div className="glow hero-glow-2 -right-24 top-10 h-[360px] w-[360px] bg-accent-3/10" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-status mb-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
            CORE ENGINE: ACTIVE
            <span className="text-line-2">//</span>
            <span className="text-accent">STOREFRONT ONLINE</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            <SplitText text="Headless WooCommerce," />
            <br />
            <SplitText text="reengineered for speed" wordClass="text-gradient-animate" />
          </h1>

          <p className="hero-sub mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400">
            Operate your store through a unified Next.js control layer built for
            scalability, server-side rendering, and real-time commerce — powered
            by Next.js 16, React 19, and Tailwind v4.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {pills.map((p) => (
              <span
                key={p.label}
                className="hero-pill inline-flex items-center gap-1.5 rounded-md border border-line bg-ink-2 px-3 py-1.5 font-mono text-[10px] tracking-wide text-zinc-400"
              >
                <Icon name={p.icon} className="h-3 w-3 text-accent" />
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="hero-cta inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 font-mono text-xs font-semibold text-ink transition-colors hover:bg-accent-2"
            >
              INITIALIZE BUILD
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/wpacademy/nextjs-woocommerce-frontend"
              target="_blank"
              rel="noreferrer"
              className="hero-cta inline-flex h-11 items-center gap-2 rounded-md border border-line bg-ink-2 px-6 font-mono text-xs font-semibold text-white transition-colors hover:border-accent/50"
            >
              <Icon name="github" className="h-3.5 w-3.5" />
              VIEW SOURCE
            </a>
          </div>
        </div>

        <ControlPanel />
      </div>
    </section>
  );
}

function ControlPanel() {
  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      <div className="hero-panel border-animate relative rounded-xl">
        <div className="overflow-hidden rounded-xl border border-line bg-ink-2">
        {/* Panel header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded border border-line bg-ink-3">
            <Icon name="layers" className="h-3.5 w-3.5 text-accent" />
          </span>
          <span className="font-mono text-xs font-medium text-white">
            HEADLESSWOO CONTROL INTERFACE
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 blink" />
          ONLINE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
        {/* Left: stats */}
        <div className="border-b border-line p-5 lg:border-b-0 lg:border-r">
          <p className="mb-4 font-mono text-[10px] tracking-wider text-muted">
            // LIVE_METRICS
          </p>
          <div className="space-y-4">
            <Metric label="THROUGHPUT" value="842.5" unit="GB/s" trend="+12" />
            <Metric label="ACTIVE PRODUCTS" value="1,204" unit="" trend="+8" />
            <Metric label="TTFB" value="42" unit="ms" trend="-6" good />
            <Metric label="CACHE HIT RATE" value="98.4" unit="%" trend="+2" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["SSR", "JWT", "CART"].map((t) => (
              <div
                key={t}
                className="rounded-md border border-line bg-ink-3 px-2 py-2 text-center font-mono text-[10px] text-zinc-400"
              >
                <span className="block text-accent">●</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right: log stream */}
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[10px] tracking-wider text-muted">
              // LOG_STREAM
            </p>
            <span className="font-mono text-[10px] text-accent">LIVE</span>
          </div>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
            {logLines.map((l, i) => (
              <div key={i} className="log-line flex gap-2">
                <span className="text-muted">{l.t}</span>
                <span className="text-zinc-300">{l.m}</span>
                <span
                  className={
                    l.s === "WARN" ? "text-amber-500" : "text-accent"
                  }
                >
                  {l.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
  );
}

function Metric({
  label,
  value,
  unit,
  trend,
  good,
}: {
  label: string;
  value: string;
  unit: string;
  trend: string;
  good?: boolean;
}) {
  return (
    <div className="flex items-end justify-between border-b border-line/60 pb-3">
      <div>
        <p className="font-mono text-[10px] tracking-wider text-muted">{label}</p>
        <p className="mt-1 font-mono text-2xl font-semibold text-white">
          {value}
          <span className="ml-1 text-sm text-muted">{unit}</span>
        </p>
      </div>
      <span
        className={`font-mono text-[11px] ${
          good ? "text-accent" : "text-emerald-500"
        }`}
      >
        {trend}
      </span>
    </div>
  );
}
