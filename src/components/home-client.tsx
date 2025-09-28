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
    let removeScroll: (() => void) | undefined;

    const setup = async () => {
      if (typeof window === "undefined") return;
      const { gsap } = await import("gsap");
      // Keep ScrollTrigger registration optional for future use
      try {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
      } catch {}
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

      // hide on scroll down, show on scroll up (robust without relying on ScrollTrigger)
      const header = document.getElementById("header");
      if (!header) return;
      const height = header.offsetHeight;
      gsap.set(header, { y: 0 });

      let lastY = window.scrollY;
      let ticking = false;
      const HIDE_THRESHOLD = 100; // only allow hide after passing this
      const DELTA_THRESHOLD = 8; // ignore micro scrolls

      const onScroll = () => {
        const y = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const delta = y - lastY;
            // Always show header near the very top
            if (y <= 10) {
              gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
              lastY = y;
              ticking = false;
              return;
            }

            if (Math.abs(delta) < DELTA_THRESHOLD) {
              lastY = y;
              ticking = false;
              return;
            }

            if (y > lastY && y > HIDE_THRESHOLD) {
              // scrolling down beyond threshold -> hide
              gsap.to(header, { y: -height, duration: 0.35, ease: "power2.out" });
            } else if (y < lastY) {
              // scrolling up -> show
              gsap.to(header, { y: 0, duration: 0.35, ease: "power2.out" });
            }

            lastY = y;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      removeScroll = () => window.removeEventListener("scroll", onScroll);

      // Ensure header visible on resize/refresh
      const onResize = () => gsap.set(header, { y: 0 });
      window.addEventListener("resize", onResize);
      const prevRemove = removeScroll;
      removeScroll = () => {
        prevRemove && prevRemove();
        window.removeEventListener("resize", onResize);
      };
    };

    setup();
    return () => {
      if (removeScroll) removeScroll();
      if (smoother && typeof smoother.kill === "function") smoother.kill();
    };
  }, []);

  return (
    <>
      <Header onOpenCountrySelector={() => setIsCountryOpen(true)} />
      <div id="smooth-wrapper" className="overflow-hidden">
        <div id="smooth-content">
          <main>
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
    </>
  );
};

export default HomeClient;