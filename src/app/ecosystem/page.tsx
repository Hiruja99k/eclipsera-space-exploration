"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/sections/footer";
import EmbraceCosmos from "@/components/sections/ecosystem/embrace-cosmos";
import CosmicFabric from "@/components/sections/ecosystem/cosmic-fabric";
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";

// Note: metadata export is not supported in client components

function ExternalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 14l9-9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 12v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const Reveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 motion-reduce:transition-none motion-reduce:translate-y-0 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      {children}
    </div>
  );
};

const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-3 text-center text-xs text-foreground/50">{children}</p>
);

export default function EcosystemDashboardPage() {
  // Initialize smooth scrolling (GSAP ScrollSmoother if available, else Lenis)
  useSmoothScroll({ smooth: 1.1 });

  return (
    <div id="smooth-wrapper">
      <main id="smooth-content" className="bg-background text-foreground min-h-screen">
        {/* Fullscreen hero with image and overlayed content/back button */}
        <section className="relative w-full h-[100svh]">
          <div className="absolute inset-0">
            <Image src="/images/hero-bg.jpg" alt="Eclipsera Ecosystem" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-20">
            <div className="absolute top-6 left-6">
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/70 text-white/90 hover:text-white hover:border-white/90 bg-white/0 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  aria-label="Back"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px]">
            <div className="flex flex-col items-center text-center text-white">
              <div className="text-small-label text-white/80">ECLIPSERA PRESENTS</div>
              <h1 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal mt-3">
                Eclipsera | NASA
                <br />
                Ecosystem Dashboard
              </h1>
              <div className="mt-8 max-w-2xl">
                <span className="font-body text-[15px] leading-5 text-white/90">
                  A unified platform that seamlessly integrates real-time NASA data with Eclipsera’s ecosystem, delivering accurate insights and space analytics at your fingertips.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle breadcrumb */}
        <nav aria-label="Breadcrumb" className="container pt-6">
          <ol className="flex items-center justify-center gap-2 text-sm text-foreground/60">
            <li><Link href="/" className="hover:text-foreground/80 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Ecosystem</li>
          </ol>
        </nav>

        {/* Cards with titles/quotes outside, and rounded iframes */}
        <section className="relative py-14">
          {/* subtle radial vignette background behind the grid */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,0,0,0.04),transparent_70%)]" />
          </div>
          <div className="container">
          <div className="grid grid-cols-1 gap-14">
            {/* Solar System */}
            <Reveal>
              <div className="text-center mb-8">
                <h3 className="font-display text-[28px] md:text-[32px] leading-snug">Eyes on the Solar System</h3>
                <p className="mt-1 text-base md:text-lg text-foreground/70 italic">“Navigate the clockwork of our celestial neighborhood.”</p>
              </div>
              <div className="group rounded-2xl overflow-hidden ring-1 ring-inset ring-black/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] hover:ring-black/20 hover:-translate-y-0.5">
                <iframe title="Eyes on the Solar System" src="https://eyes.nasa.gov/apps/solar-system/#/home" className="w-full aspect-[16/9]" loading="lazy" />
              </div>
              <Caption>Source: NASA Eyes - Delivering authoritative insights and data on the Solar System’s planets, moons, and celestial phenomena.</Caption>
            </Reveal>

            {/* Asteroids */}
            <Reveal>
              <div className="text-center mb-8">
                <h3 className="font-display text-[28px] md:text-[32px] leading-snug">Eyes on Asteroids</h3>
                <p className="mt-1 text-base md:text-lg text-foreground/70 italic">“Tracking near‑Earth objects with precision and context.”</p>
                
              </div>
              <div className="group rounded-2xl overflow-hidden ring-1 ring-inset ring-black/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] hover:ring-black/20 hover:-translate-y-0.5">
                <iframe title="Eyes on Asteroids" src="https://eyes.nasa.gov/apps/asteroids/#/home" className="w-full aspect-[16/9]" loading="lazy" />
              </div>
              <Caption>Source: NASA Eyes - Providing accurate scientific information on asteroids, their composition, and trajectories.</Caption>
            </Reveal>

            {/* Earth */}
            <Reveal>
              <div className="text-center mb-8">
                <h3 className="font-display text-[28px] md:text-[32px] leading-snug">Eyes on the Earth</h3>
                <p className="mt-1 text-base md:text-lg text-foreground/70 italic">“A living dashboard of our blue planet in motion.”</p>
                
              </div>
              <div className="group rounded-2xl overflow-hidden ring-1 ring-inset ring-black/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] hover:ring-black/20 hover:-translate-y-0.5">
                <iframe title="Eyes on the Earth" src="https://eyes.nasa.gov/apps/earth/#/" className="w-full aspect-[16/9]" loading="lazy" />
              </div>
              <Caption>Source: NASA Eyes - Offering reliable Earth observation data to monitor our planet’s climate, environment, and natural processes.</Caption>
            </Reveal>

            {/* Exoplanets */}
            <Reveal>
              <div className="text-center mb-8">
                <h3 className="font-display text-[28px] md:text-[32px] leading-snug">Eyes on Exoplanets</h3>
                <p className="mt-1 text-base md:text-lg text-foreground/70 italic">“Exploring worlds beyond, one light‑curve at a time.”</p>
                
              </div>
              <div className="group rounded-2xl overflow-hidden ring-1 ring-inset ring-black/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] hover:ring-black/20 hover:-translate-y-0.5">
                <iframe title="Eyes on Exoplanets" src="https://eyes.nasa.gov/apps/exo/" className="w-full aspect-[16/9]" loading="lazy" />
              </div>
              <Caption>Source: NASA Eyes - Supplying verified research and discoveries on planets beyond our solar system.</Caption>
            </Reveal>
          </div>
          </div>
        </section>
        {/* Independent duplicates with unique content per section */}
        <EmbraceCosmos
          title="Cosmic Orbital Symphony"
          label="ECLIPSERA presents"
          description="Mapping the orbital choreography of our star system with precision visual telemetry."
          ctaText="Open Atlas"
          href="#"
          imageSrc="/images/solar%20system.jpg"
          imageAlt="Cosmic Orbital Symphony"
          panelBgClass="bg-[#2e3142]"
        />
        <CosmicFabric
          label="ECLIPSERA presents"
          titleA="Celestial"
          titleB="Rock"
          titleC="Frontier"
          description="Probabilistic modeling of NEO trajectories and encounter likelihoods."
          ctaText="View Dashboard"
          href="#"
          imageSrc="/images/asteroid.jpg"
          imageAlt="Celestial Rock Frontier"
          panelBgClass="bg-secondary text-secondary-foreground"
        />
        <EmbraceCosmos
          title="Planetary Living Sphere"
          label="ECLIPSERA presents"
          description="A living tapestry of oceans, atmosphere, and biosphere—observed in real time."
          ctaText="Explore Data"
          href="#"
          imageSrc="/images/earth.jpg"
          imageAlt="Planetary Living Sphere"
          panelBgClass="bg-[#3a2e25]"
        />
        <CosmicFabric
          label="ECLIPSERA presents"
          titleA="Distant"
          titleB="World"
          titleC="Horizons"
          description="Spectral signatures and transit curves distilled into intuitive visuals."
          ctaText="Run Analysis"
          href="#"
          imageSrc="/images/exoplanet.jpg"
          imageAlt="Distant World Horizons"
          panelBgClass="bg-[#1f1f1f] text-primary-white"
        />
        <Footer />
      </main>
    </div>
  );
}


