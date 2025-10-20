"use client";

import React from "react";
import Header from "@/components/sections/header";
import CosmicHero from "@/components/sections/cosmic-hero";
import SpaceOrganizations from "@/components/sections/space-organizations";
import SpaceJourneyVideo from "@/components/sections/space-journey-video";
import CosmicExploration from "@/components/sections/cosmic-exploration";
import StellarShowcase from "@/components/sections/stellar-showcase";
import ArtemisVideo from "@/components/sections/artemis-video";
import MissionGateway from "@/components/sections/mission-gateway";
import CelestialVista from "@/components/sections/celestial-vista";
import OrbitalPerspective from "@/components/sections/orbital-perspective";
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
      } catch { }
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

      // Show navbar only when at the top of the website
      const header = document.getElementById("header");
      if (!header) return;
      const height = header.offsetHeight;
      gsap.set(header, { y: 0 });

      let ticking = false;
      const TOP_THRESHOLD = 50; // Show navbar only when within 50px of top

      const onScroll = () => {
        const y = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (y <= TOP_THRESHOLD) {
              // At the top - show navbar with smooth animation
              gsap.to(header, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
              });
            } else {
              // Not at the top - hide navbar with smooth animation
              gsap.to(header, {
                y: -height,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            }
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      removeScroll = () => window.removeEventListener("scroll", onScroll);

      // Ensure header visibility is correct on resize/refresh
      const onResize = () => {
        const y = window.scrollY;
        if (y <= TOP_THRESHOLD) {
          gsap.set(header, { y: 0, opacity: 1 });
        } else {
          gsap.set(header, { y: -height, opacity: 0 });
        }
      };
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
            <CosmicHero />
            <SpaceOrganizations />
            <SpaceJourneyVideo />
            <CosmicExploration />
            <StellarShowcase />
            <ArtemisVideo />
            <MissionGateway />
            <CelestialVista />
            <OrbitalPerspective />
          </main>
          <Footer />
          <CountrySelectorModal isOpen={isCountryOpen} onClose={() => setIsCountryOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default HomeClient;