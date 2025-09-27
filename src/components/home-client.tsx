"use client";

import React from "react";
import Header from "@/components/sections/header";
import CeramicSurfacesHero from "@/components/sections/ceramic-surfaces-hero";
import ProductCategories from "@/components/sections/product-categories";
import HarvestedComfort from "@/components/sections/harvested-comfort";
import AuraLuminora from "@/components/sections/aura-luminora";
import DressToImpress from "@/components/sections/dress-to-impress";
import HayDay from "@/components/sections/hay-day";
import MeditationMotion from "@/components/sections/meditation-motion";
import OdeToTimber from "@/components/sections/ode-to-timber";
import LivingPebble from "@/components/sections/living-pebble";
import Footer from "@/components/sections/footer";
import CountrySelectorModal from "@/components/sections/country-selector-modal";

export const HomeClient: React.FC = () => {
  // Initialize closed so the fixed transparent navbar overlays the hero like Moooi's
  const [isCountryOpen, setIsCountryOpen] = React.useState(false);

  // GSAP ScrollSmoother + hide-on-scroll header
  React.useEffect(() => {
    let smoother: any;
    let ctx: any;

    const setup = async () => {
      if (typeof window === "undefined") return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      try {
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");
        gsap.registerPlugin(ScrollSmoother);
        // create smoother
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
        });
      } catch (_) {
        // Fallback: native smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";
      }

      // hide on scroll down, show on scroll up
      const header = document.getElementById("header");
      if (!header) return;
      const height = header.offsetHeight;
      ctx = ScrollTrigger.create({
        start: 0,
        end: () => document.body.scrollHeight - window.innerHeight,
        onUpdate: (self) => {
          const headerEl = header as HTMLElement;
          // Always show header at very top
          if (self.progress <= 0.001) {
            gsap.to(headerEl, { y: 0, duration: 0.3, ease: "power2.out" });
            headerEl.style.willChange = "auto";
            return;
          }
          const dir = self.direction; // 1 down, -1 up
          if (dir === 1) {
            // down
            headerEl.style.willChange = "transform";
            gsap.to(headerEl, { y: -height, duration: 0.35, ease: "power2.out" });
          } else {
            gsap.to(headerEl, { y: 0, duration: 0.35, ease: "power2.out", onComplete: () => {
              headerEl.style.willChange = "auto";
            }});
          }
        },
      });
    };

    setup();
    return () => {
      if (ctx && typeof ctx.kill === "function") ctx.kill();
      if (smoother && typeof smoother.kill === "function") smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">
        <Header onOpenCountrySelector={() => setIsCountryOpen(true)} />
        <main className="pt-20 lg:pt-[88px]">
          <CeramicSurfacesHero />
          <ProductCategories />
          <HarvestedComfort />
          <AuraLuminora />
          <DressToImpress />
          <HayDay />
          <MeditationMotion />
          <OdeToTimber />
          <LivingPebble />
        </main>
        <Footer />
        <CountrySelectorModal isOpen={isCountryOpen} onClose={() => setIsCountryOpen(false)} />
      </div>
    </div>
  );
};

export default HomeClient;