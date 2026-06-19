"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

const stack: {
  icon: IconName;
  name: string;
  version: string;
  role: string;
}[] = [
  { icon: "rocket", name: "Next.js", version: "16.1.6", role: "App Router framework" },
  { icon: "sparkles", name: "React", version: "19.2.3", role: "UI library" },
  { icon: "code", name: "TypeScript", version: "5.x", role: "Strict typing" },
  { icon: "layers", name: "Tailwind CSS", version: "v4", role: "Utility styling" },
  { icon: "globe", name: "GraphQL", version: "—", role: "Query language" },
  { icon: "lock", name: "JWT Auth", version: "—", role: "Authentication" },
  { icon: "shuffle", name: "Zustand", version: "5.0.11", role: "State management" },
  { icon: "check", name: "Hook Form + Zod", version: "—", role: "Forms & validation" },
  { icon: "zap", name: "Framer Motion", version: "—", role: "Animation" },
  { icon: "database", name: "WPGraphQL", version: "—", role: "Data layer" },
  { icon: "image", name: "next/image", version: "—", role: "Image optimization" },
  { icon: "gauge", name: "Turbopack", version: "—", role: "Build engine" },
];

export function TechStack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-left", {
          x: -30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
        gsap.from(".stack-right", {
          x: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
        gsap.from(".cpu-card", {
          y: 40,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });

        // CPU core pulse
        gsap.to(".cpu-core", {
          opacity: 1,
          scale: 1,
          stagger: { each: 0.15, repeat: -1, yoyo: true },
          duration: 0.8,
          ease: "power2.inOut",
        });

        // Rotating ring
        gsap.to(".cpu-ring", {
          rotation: 360,
          transformOrigin: "50% 50%",
          duration: 12,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".cpu-ring-rev", {
          rotation: -360,
          transformOrigin: "50% 50%",
          duration: 18,
          repeat: -1,
          ease: "none",
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  const left = stack.slice(0, 6);
  const right = stack.slice(6);

  return (
    <section id="stack" ref={root} className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">
            // SYSTEM_APPLICATIONS
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            POWERED BY A MODERN STACK
          </h2>
          <p className="mt-3 max-w-lg text-sm text-zinc-400">
            Every layer chosen for performance, type-safety, and developer
            ergonomics — orchestrated through a unified engine.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* Left stack cards */}
          <div className="space-y-2.5">
            {left.map((s) => (
              <StackCard key={s.name} s={s} side="left" />
            ))}
          </div>

          {/* Center CPU card */}
          <CpuCard />

          {/* Right stack cards */}
          <div className="space-y-2.5">
            {right.map((s) => (
              <StackCard key={s.name} s={s} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackCard({
  s,
  side,
}: {
  s: { icon: IconName; name: string; version: string; role: string };
  side: "left" | "right";
}) {
  return (
    <div
      className={`${side === "left" ? "stack-left" : "stack-right"} card-border group flex items-center gap-3.5 rounded-md border border-line bg-ink-2 p-3.5 transition-colors hover:border-line-2`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-ink-3 text-zinc-400 transition-colors group-hover:text-accent">
        <Icon name={s.icon} className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">{s.name}</span>
          <span className="rounded border border-line bg-ink-3 px-1.5 py-0.5 font-mono text-[10px] text-muted">
            {s.version}
          </span>
        </div>
        <p className="text-xs text-muted">{s.role}</p>
      </div>
      <Icon
        name="arrow"
        className={`h-3.5 w-3.5 text-muted opacity-0 transition-all group-hover:opacity-100 ${
          side === "left" ? "-translate-x-2 group-hover:translate-x-0" : "translate-x-2 group-hover:translate-x-0"
        }`}
      />
    </div>
  );
}

function CpuCard() {
  const cores = Array.from({ length: 8 }, (_, i) => i);
  const logs = [
    { t: "00:01", m: "> init_storefront(target=\"production\")", s: "" },
    { t: "00:01", m: "> allocating_resources...", s: "DONE" },
    { t: "00:02", m: "> ssr_render --mode=stream", s: "OK" },
    { t: "00:02", m: "> graphql_fetch --endpoint=wp", s: "OK" },
    { t: "00:03", m: "> cache_warm --strategy=ISR", s: "OK" },
    { t: "00:03", m: "> image_optimize --format=webp", s: "OK" },
  ];

  return (
    <div className="cpu-card border-animate relative flex flex-col overflow-hidden rounded-lg border border-line bg-ink-2">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded border border-line bg-ink-3">
            <Icon name="gauge" className="h-3.5 w-3.5 text-accent" />
          </span>
          <span className="font-mono text-xs font-medium text-white">
            STOREFRONT ENGINE
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
          SYSTEM OPTIMAL
        </span>
      </div>

      {/* CPU visualization */}
      <div className="relative flex items-center justify-center border-b border-line py-8">
        <div className="glow left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-accent/15" />

        {/* Rotating rings */}
        <svg className="cpu-ring absolute h-[220px] w-[220px]" viewBox="0 0 220 220">
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="none"
            stroke="rgba(249,115,22,0.15)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        </svg>
        <svg className="cpu-ring-rev absolute h-[180px] w-[180px]" viewBox="0 0 180 180">
          <circle
            cx="90"
            cy="90"
            r="80"
            fill="none"
            stroke="rgba(249,115,22,0.1)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        </svg>

        {/* CPU chip */}
        <div className="relative grid h-32 w-32 place-items-center rounded-xl border border-line bg-ink-3">
          {/* Core grid */}
          <div className="grid grid-cols-4 gap-1.5">
            {cores.map((i) => (
              <span
                key={i}
                className="cpu-core h-3 w-3 rounded-sm bg-accent"
                style={{ opacity: 0.2, transform: "scale(0.8)" }}
              />
            ))}
          </div>

          {/* Chip pins (decorative) */}
          <div className="absolute -left-2 top-1/2 h-1 w-2 -translate-y-1/2 rounded-l bg-line-2" />
          <div className="absolute -right-2 top-1/2 h-1 w-2 -translate-y-1/2 rounded-r bg-line-2" />
          <div className="absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-t bg-line-2" />
          <div className="absolute -bottom-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-b bg-line-2" />
        </div>

        {/* Data flow lines with animated dots */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <line x1="0" y1="50%" x2="34%" y2="50%" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
          <line x1="66%" y1="50%" x2="100%" y2="50%" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
          <circle className="flow-dot" cx="0" cy="50%" r="2.5" fill="#f97316">
            <animate attributeName="cx" from="0" to="34%" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle className="flow-dot" cx="66%" cy="50%" r="2.5" fill="#fb923c">
            <animate attributeName="cx" from="66%" to="100%" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </svg>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 border-b border-line">
        {[
          { label: "RENDER", value: "SSR" },
          { label: "TTFB", value: "42ms" },
          { label: "CACHE", value: "98.4%" },
        ].map((m, i) => (
          <div
            key={m.label}
            className={`px-4 py-3 ${i < 2 ? "border-r border-line" : ""}`}
          >
            <p className="font-mono text-[10px] tracking-wider text-muted">
              {m.label}
            </p>
            <p className="mt-0.5 font-mono text-sm font-semibold text-accent">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Log stream */}
      <div className="flex-1 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-wider text-muted">
            // LOG_STREAM
          </p>
          <span className="font-mono text-[10px] text-accent">LIVE</span>
        </div>
        <div className="space-y-1 font-mono text-[10px] leading-relaxed">
          {logs.map((l, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-muted">{l.t}</span>
              <span className="text-zinc-300">{l.m}</span>
              {l.s && <span className="text-accent">{l.s}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
