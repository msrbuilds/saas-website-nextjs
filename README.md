# SaaS/Product — Animated Landing Page Template

A modern, dark-premium landing page template for headless WooCommerce storefronts. Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **GSAP** scroll animations. Inspired by [Axion](https://axion.aura.build/) and [Magic UI Sage](https://startup-template-sage.vercel.app/).

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock)](https://gsap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img width="1920" height="1080" alt="glm" src="https://github.com/user-attachments/assets/7ff3c07d-ed63-457f-b551-5a7eb042da78" />

---

## Overview

This is a standalone landing page template designed for [wpacademy/nextjs-woocommerce-frontend](https://github.com/wpacademy/nextjs-woocommerce-frontend) — a headless WooCommerce storefront. It features a flat, technical "control interface" aesthetic with a black/orange color palette, live metric dashboards, animated CPU visualizations, and cinematic GSAP scroll animations.

### Design Inspiration

- **[Axion](https://axion.aura.build/)** — flat enterprise SaaS layout, technical labels (`// SECTION`, `FIG. 01`), terminal/log streams, validation consoles
- **[Magic UI Sage](https://startup-template-sage.vercel.app/)** — hero, trusted-by marquee, pricing tiers, final CTA

---

## Features

### Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Sticky nav with GSAP staggered entrance, scroll-aware styling, mobile menu |
| **Hero** | Split-text word reveal, animated gradient text, drifting background glows, control-interface panel with live metrics + log stream |
| **Logo Marquee** | Infinite GSAP scroll of the tech stack, pause-on-hover, edge fade mask |
| **Features** | 9-feature bento grid with `FIG. 01` labels, scroll-triggered batch reveals, hover border beam |
| **System Flow** | 4-step pipeline (Connect → Deploy → Monitor → Scale) with SVG line-draw animation + live metrics |
| **Tech Stack** | Central animated CPU card (pulsing cores, rotating rings, data flow) flanked by 12 stack cards |
| **Stats** | Validation console with count-up numbers, SVG progress rings, compliance log |
| **Pricing** | 3 tiers (Developer / Professional / Enterprise) with staggered reveal |
| **CTA** | Final call-to-action with numbered steps |
| **Footer** | Link columns, system status indicator |

### Animations (GSAP + CSS)

- **Split-text hero reveal** — words slide up from masked containers with staggered timing
- **Animated gradient text** — orange gradient shifts back and forth over 6s
- **Drifting background glows** — two orange glows slowly move around the hero with sine easing
- **Rotating border beam** — a small bright segment circles the hero preview panel continuously
- **Card hover border beam** — conic-gradient beam circles the complete card on hover
- **Scroll-triggered reveals** — batch animations on features, staggered slide-ins on stack cards
- **SVG line-draw** — system flow connector draws via `stroke-dashoffset`
- **SVG progress rings** — stats rings draw on scroll
- **Count-up numbers** — stats animate from 0 to target on scroll
- **CPU visualization** — pulsing cores, counter-rotating rings, animated data flow dots
- **Infinite marquee** — tech stack logos scroll endlessly, pause on hover
- **Scroll progress bar** — gradient bar tracks total scroll progress

All animations respect `prefers-reduced-motion` and clean up via `useGSAP`.

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16.2.9 (App Router) |
| UI Library | React 19.2.7 |
| Styling | Tailwind CSS v4.3 |
| Animation | GSAP 3.15 + @gsap/react |
| Language | TypeScript 5 (strict) |
| Fonts | Inter + Geist Mono (next/font) |

---

## Getting Started

### Prerequisites

- **Node.js 18+** (recommended: Node.js 20)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/msrbuilds/headless-woo-landing.git
cd headless-woo-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 import + @theme tokens + custom utilities
│   ├── layout.tsx         # Root layout, fonts, metadata
│   └── page.tsx           # Composes all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with GSAP entrance + scroll behavior
│   ├── Hero.tsx           # Split-text reveal, drifting glows, control panel
│   ├── LogoMarquee.tsx    # Infinite GSAP marquee
│   ├── Features.tsx       # Bento grid with FIG labels + hover border beam
│   ├── Architecture.tsx   # System flow with SVG line-draw + metrics
│   ├── TechStack.tsx      # Central CPU card + flanking stack cards
│   ├── Stats.tsx          # Validation console with count-up + SVG rings
│   ├── Pricing.tsx        # 3-tier pricing with staggered reveal
│   ├── CTA.tsx            # Final call-to-action
│   ├── Footer.tsx         # Link columns + system status
│   ├── ScrollProgress.tsx # Top scroll-progress bar
│   └── ui/
│       └── Reveal.tsx     # Reusable scroll-triggered fade/slide-up wrapper
└── lib/
    ├── gsap.ts            # GSAP + ScrollTrigger registration
    └── icons.tsx          # SVG icon set
```

---

## Customization

### Colors

All colors are defined as CSS custom properties in `src/app/globals.css` under the `@theme` block:

```css
@theme {
  --color-ink: #08080a;       /* Background */
  --color-ink-2: #0d0d10;     /* Panels */
  --color-ink-3: #121216;     /* Cards */
  --color-line: #1c1c22;      /* Borders */
  --color-accent: #f97316;    /* Primary orange */
  --color-accent-2: #fb923c;  /* Light orange */
  --color-accent-3: #ea580c;  /* Dark orange */
  --color-muted: #6b6b76;     /* Muted text */
}
```

Change these values to retheme the entire site.

### Content

All section content (features, stack items, pricing tiers, stats, etc.) is defined as data arrays at the top of each component file. Edit these arrays to update text, icons, and structure.

### Animations

GSAP animations live inside each component's `useGSAP` hook. Key timing values to tweak:

- **Hero timeline** — `Hero.tsx` → durations and staggers in the `tl` timeline
- **Glow drift** — `Hero.tsx` → `duration: 14` / `duration: 18` on `.hero-glow-1/2`
- **Border beam speed** — `globals.css` → `animation: rotate-border 6s` / `card-rotate 4s`
- **Gradient text** — `globals.css` → `animation: gradient-shift 6s`

---

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → Import your repository
4. Click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/msrbuilds/saas-website-nextjs)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **"Add new site"** → **"Import an existing project"**
3. Build command: `npm run build` · Publish directory: `.next`
4. Install the **@netlify/plugin-nextjs** plugin
5. Click **Deploy site**

### Deploy with Docker

```bash
docker build -t headless-woo-landing .
docker run -p 3000:3000 headless-woo-landing
```

---

## Credits

- **Product** — [wpacademy/nextjs-woocommerce-frontend](https://github.com/wpacademy/nextjs-woocommerce-frontend)
- **Design inspiration** — [Axion by Aura](https://axion.aura.build/) · [Magic UI Sage](https://startup-template-sage.vercel.app/)
- **Framework** — [Next.js](https://nextjs.org/)
- **Animation** — [GSAP](https://gsap.com/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)

---

## License

This project is open source and available under the [MIT License](./LICENSE).
