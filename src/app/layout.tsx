import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeadlessWoo — A blazing-fast Next.js storefront for WooCommerce",
  description:
    "Turn your WooCommerce store into a modern, high-performance headless Next.js app. Server-side rendering, product catalog, cart, JWT auth, and checkout — powered by Next.js 16, React 19, and Tailwind v4.",
  keywords: [
    "WooCommerce",
    "Next.js",
    "Headless WordPress",
    "E-commerce",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "HeadlessWoo — Blazing-fast Next.js storefront for WooCommerce",
    description:
      "A modern headless e-commerce storefront built with Next.js 16, React 19, and Tailwind v4.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
