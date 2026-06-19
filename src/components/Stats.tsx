"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/lib/icons";

const stats: {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  icon: IconName;
}[] = [
  { target: 100, suffix: "", label: "LIGHTHOUSE SCORE", sub: "/100 performance", icon: "gauge" },
  { target: 9, suffix: "+", label: "STOREFRONT FEATURES", sub: "out of the box", icon: "layers" },
  { target: 4, suffix: "", label: "DEPLOY TARGETS", sub: "Vercel · Netlify · Docker", icon: "rocket" },
  { target: 100, suffix: "%", label: "OPEN SOURCE", sub: "GPL-3.0 licensed", icon: "lock" },
];

const compliance = [
  { label: "GPL-3.0", status: "VERIFIED" },
  { label: "JWT AUTH", status: "ACTIVE" },
  { label: "SSR READY", status: "COMPLIANT" },
];

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counters = gsap.utils.toArray<HTMLElement>(".stat-num");
        counters.forEach((el) => {
          const target = Number(el.dataset.target);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(obj.v).toString();
            },
          });
        });

        const rings = gsap.utils.toArray<SVGCircleElement>(".stat-ring");
        rings.forEach((ring) => {
          const r = Number(ring.dataset.r);
          const circ = 2 * Math.PI * r;
          gsap.fromTo(
            ring,
            { strokeDasharray: circ, strokeDashoffset: circ },
            {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: "power2.out",
              scrollTrigger: { trigger: ring, start: "top 88%", once: true },
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-xl border border-line bg-ink-2">
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-3 border-b border-line px-6 py-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[11px] tracking-wider text-muted">
                // SYSTEM_AUDIT_PROTOCOL
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                VALIDATION CONSOLE
              </h2>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] text-muted">
              <span>AUDIT SESSION: 8842-XC</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
                STATUS: VERIFIED
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center px-4 py-8 text-center ${
                  i < stats.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""
                } ${i % 2 === 0 ? "border-r lg:border-r" : ""}`}
              >
                <div className="relative mb-3 grid h-16 w-16 place-items-center">
                  <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                    <circle
                      className="stat-ring"
                      data-r="28"
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <Icon name={s.icon} className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-baseline">
                  <span
                    className="stat-num font-mono text-3xl font-semibold text-white"
                    data-target={s.target}
                  >
                    0
                  </span>
                  <span className="font-mono text-xl font-semibold text-accent">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-wider text-zinc-300">
                  {s.label}
                </p>
                <p className="mt-0.5 text-[11px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Compliance log */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-6 py-4 font-mono text-[11px]">
            <span className="text-muted">// COMPLIANCE_LOG</span>
            {compliance.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <Icon name="check" className="h-3 w-3 text-accent" strokeWidth={2.5} />
                <span className="text-zinc-300">{c.label}</span>
                <span className="text-muted">[{c.status}]</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
