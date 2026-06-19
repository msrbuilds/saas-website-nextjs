import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { Architecture } from "@/components/Architecture";
import { TechStack } from "@/components/TechStack";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Architecture />
        <TechStack />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
