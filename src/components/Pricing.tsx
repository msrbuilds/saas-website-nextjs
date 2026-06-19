"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/lib/icons";

type Plan = {
  level: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    level: "LEVEL_01",
    name: "DEVELOPER",
    price: "$0",
    period: "/ MO",
    desc: "The open-source storefront, free forever.",
    features: [
      "FULL SOURCE CODE (GPL-3.0)",
      "SELF-HOST ANYWHERE",
      "ALL 9 STOREFRONT FEATURES",
      "DOCKER & VERCEL READY",
      "COMMUNITY SUPPORT",
    ],
    cta: "START BUILDING",
    href: "https://github.com/wpacademy/nextjs-woocommerce-frontend",
  },
  {
    level: "LEVEL_02",
    name: "PROFESSIONAL",
    price: "$19",
    period: "/ MO",
    desc: "For stores that need a safety net.",
    features: [
      "EVERYTHING IN DEVELOPER",
      "PRIORITY EMAIL SUPPORT",
      "SETUP & DEPLOYMENT GUIDE",
      "MONTHLY UPDATE NOTIFICATIONS",
      "1-ON-1 ONBOARDING CALL",
    ],
    cta: "DEPLOY NOW",
    href: "#cta",
    highlight: true,
  },
  {
    level: "LEVEL_03",
    name: "ENTERPRISE",
    price: "$99",
    period: "/ MO",
    desc: "Managed hosting & SLAs at scale.",
    features: [
      "EVERYTHING IN PROFESSIONAL",
      "MANAGED HEADLESS HOSTING",
      "99.9% UPTIME SLA",
      "CUSTOM INTEGRATIONS",
      "DEDICATED ENGINEER",
    ],
    cta: "CONTACT SALES",
    href: "#cta",
  },
];

export function Pricing() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".price-card", {
          y: 48,
          opacity: 0,
          stagger: 0.14,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 72%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="pricing" ref={root} className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">
            // PRICING_TIERS
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            SCALE YOUR STOREFRONT
          </h2>
          <p className="mt-3 max-w-lg text-sm text-zinc-400">
            Enterprise-grade commerce pricing. The core is and always will be
            free and open source — pay only for support and managed hosting.
          </p>
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`price-card card-border relative flex flex-col rounded-lg border p-6 transition-colors ${
                p.highlight
                  ? "border-accent/40 bg-ink-2"
                  : "border-line bg-ink-2 hover:border-line-2"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-2.5 left-6 rounded bg-accent px-2 py-0.5 font-mono text-[9px] font-semibold text-ink">
                  RECOMMENDED
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider text-muted">
                  {p.level}
                </span>
                {p.highlight && <Icon name="star" className="h-3.5 w-3.5 text-accent" />}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{p.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-3xl font-semibold text-white">
                  {p.price}
                </span>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>

              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                className={`mt-5 inline-flex h-10 items-center justify-center gap-1.5 rounded-md font-mono text-[11px] font-semibold transition-colors ${
                  p.highlight
                    ? "bg-accent text-ink hover:bg-accent-2"
                    : "border border-line bg-ink-3 text-white hover:border-accent/50"
                }`}
              >
                {p.cta}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-mono text-[11px] text-zinc-300">
                    <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-accent" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <Icon name="shield" className="h-3 w-3 text-accent" />
            GPL-3.0
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="lock" className="h-3 w-3 text-accent" />
            JWT SECURED
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="gauge" className="h-3 w-3 text-accent" />
            99.9% SLA
          </span>
          <span>TRUSTED BY 500+ ENGINEERING TEAMS</span>
        </div>
      </div>
    </section>
  );
}
