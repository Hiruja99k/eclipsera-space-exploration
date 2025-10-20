"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/sections/footer";
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

export default function FeaturedMissionsPage() {
  useSmoothScroll({ smooth: 1.1 });

  return (
    <div id="smooth-wrapper">
      <main id="smooth-content" className="bg-background text-foreground min-h-screen">
        {/* Fullscreen hero with image and overlayed content/back button (consistent entry) */}
        <section className="relative w-full h-[100svh]">
          <div className="absolute inset-0">
            <Image src="/images/Lucid_Origin_a_highly_detailed_cinematic_photo_of_a_vibrant_ga_2.jpg" alt="Featured Space Missions" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-20">
            <div className="absolute top-6 left-6">
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/70 text-white/90 bg-white/0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
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
                Eclipsera | SpaceX
                <br />
                Featured Space Missions
              </h1>
              <div className="mt-8 max-w-2xl">
                <span className="font-body text-[15px] leading-5 text-white/90">
                  Explore the universe’s most remarkable space missions. From historic launches to cutting-edge interstellar explorations, discover the journeys that push the boundaries of science and human curiosity.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscreen Starship capabilities panel */}
        <section className="relative w-full h-[100svh]">
          <div className="absolute inset-0">
            <Image src="/images/STARSHIP_CAPABILITIES_INTERPLANETARYDESTINATIONS_Mars_01_2023_01_Desktop_Darkerv2.jpg" alt="Starship Capabilities - Mars" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px] text-white">
            <div className="max-w-3xl text-center">
              <h2 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal">Making Humanity Multiplanetary</h2>
              <p className="mt-4 text-[15px] leading-6 text-white/90">
                Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.
              </p>
              <div className="mt-8">
                <Link href="https://www.spacex.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm text-white/90 bg-white/0 transition-colors">
                  Visit SpaceX
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 14l9-9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M19 12v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscreen image carousel/slider */}
        <MissionsCarousel />

        {/* SpaceX Webcast Intro Video Section */}
        <SpaceXWebcastSection />

        {/* Moon Missions Section */}
        <section className="relative w-full h-[100svh]">
          <div className="absolute inset-0">
            <Image src="/images/starship_carousel2_card3_d.jpg" alt="Moon Missions - Starship" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px] text-white">
            <div className="max-w-3xl text-center">
              <h2 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal">Moon Missions</h2>
              <p className="mt-4 text-[15px] leading-6 text-white/90">
                Starship will land humans on the Moon for the first time in more than 50 years as part of NASA's Artemis missions. Starship cargo flights to the lunar surface for research, development, and exploratory missions start in 2028, at a rate of $100 million per metric ton.
              </p>
              <p className="mt-4 text-[13px] leading-5 text-white/70">
                For additional information on payload masses, pricing details, and timeframes, please contact sales@spacex.com.
              </p>
            </div>
          </div>
        </section>

        {/* Starship Flight Test Video Section */}
        <StarshipFlightTestSection />

        {/* Mars Missions Section */}
        <section className="relative w-full h-[100svh]">
          <div className="absolute inset-0">
            <Image src="/images/starship_carousel2_card4_d.jpg" alt="Mars Missions - Starship" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px] text-white">
            <div className="max-w-3xl text-center">
              <h2 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal">Mars Missions</h2>
              <p className="mt-4 text-[15px] leading-6 text-white/90">
                Starship cargo flights to the Martian surface for research, development, and exploratory missions start in 2030, at a rate of $100 million per metric ton.
              </p>
              <p className="mt-4 text-[13px] leading-5 text-white/70">
                For additional information on payload masses, pricing details, and timeframes, please contact sales@spacex.com.
              </p>
            </div>
          </div>
        </section>

        {/* Starbase Facilities Carousel */}
        <StarbaseCarousel />

        <Footer />
      </main>
    </div>
  );
}


function MissionsCarousel() {
  const items = [
    {
      src: "/images/mission-slider-02.jpg",
      title: "DRAGON DOCKS WITH ISS",
      description:
        "Dragon docked with the International Space Station on March 3 at 3:02 a.m. PST, becoming the first American spacecraft to autonomously dock with the orbiting laboratory.",
    },
    {
      src: "/images/mission-slider-01.jpg",
      title: "MAKING HISTORY",
      description:
        "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low- Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments.",
    },
    {
      src: "/images/mission-slider-08.jpg",
      title: "FALCON 1 MAKES HISTORY",
      description:
        "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
    },
    {
      src: "/images/mission-slider-07.jpg",
      title: "DRAGON REACHES THE\nSPACE STATION",
      description:
        "Dragon becomes the first private spacecraft in history to visit the space station.",
    },
    {
      src: "/images/mission-slider-06.jpg",
      title: "FIRST LAND LANDING",
      description:
        "On December 21, 2015, the Falcon 9 rocket delivered 11 communications satellites to orbit, and the first stage returned and landed at Landing Zone 1- the first-ever orbital class rocket landing.",
    },
    {
      src: "/images/mission-slider-05.jpg",
      title: "DRONESHIP LANDING",
      description:
        "On April 8, 2016, the Falcon 9 rocket launched the Dragon spacecraft to the International Space Station, and the first stage returned and landed on the \"Of course I Still Love You\" droneship.",
    },
    {
      src: "/images/mission-slider-04.jpg",
      title: "FIRST REFLIGHT",
      description:
        "On March 30, 2017, SpaceX achieved the world's first reflight of an orbital class rocket. Following delivery of the payload, the Falcon 9 first stage returned to Earth for the second time.",
    },
    {
      src: "/images/mission-slider-03.jpg",
      title: "FALCON HEAVY FIRST FLIGHT",
      description:
        "On February 7, 2018, Falcon Heavy made its first launch to orbit, successfully landing 2 of its 3 boosters and launching its payload to space. With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one of the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner- complete with passengers, luggage and fuel-to orbit.",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(items.length);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    setSlideCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(255,255,255,0.05),transparent_70%)]" />
      <Carousel
        className="relative z-10 h-full"
        opts={{ loop: true, duration: 20, align: "start" }}
        setApi={setApi as unknown as (api: CarouselApi) => void}
      >
        <CarouselContent className="h-full">
          {items.map((m, idx) => (
            <CarouselItem key={idx} className="h-[100svh] p-0">
              <figure className="relative w-full h-full">
                <Image src={m.src} alt={m.title || `Mission ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
                {(m.title || m.description) && (
                  <figcaption className="absolute left-8 top-1/2 -translate-y-[35%] transform text-white">
                    {m.title && <div className="text-2xl md:text-4xl font-display font-bold leading-tight whitespace-pre-line">{m.title}</div>}
                    {m.description && <div className="mt-3 text-sm md:text-base leading-relaxed max-w-xl">{m.description}</div>}
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation controls at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          {/* Previous arrow */}
          <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 bg-white/10 border-white/40 text-white hover:bg-white/20" />

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={
                  "h-2 w-2 rounded-full transition-all " +
                  (selectedIndex === i ? "bg-white w-5" : "bg-white/50")
                }
              />
            ))}
          </div>

          {/* Next arrow */}
          <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 bg-white/10 border-white/40 text-white hover:bg-white/20" />
        </div>
      </Carousel>
    </section>
  );
}

function StarbaseCarousel() {
  const items = [
    {
      src: "/images/starship_carousel4_card1_d.jpg",
      title: "STARBASE",
      description:
        "Development, manufacturing, testing, and launch Starship takes place at Starbase, home to SpaceX headquarters and one of the world's first commercial spaceports designed for orbital missions.",
    },
    {
      src: "/images/starship_carousel4_card2_d.jpg",
      title: "STARFACTORY",
      description:
        "Manufacturing hub for Starship and Super Heavy. Sized to be capable of building up to 1,000 Starships per year in order to send enough crew and cargo during Mars transfer windows to build a self-sustaining civilization.",
    },
    {
      src: "/images/starship_carousel4_card3_d.jpg",
      title: "LAUNCH AND TEST",
      description:
        "Orbital launch pad and vehicle test site for prelaunch testing and flight of the world's most powerful rocket. The Starbase launch pad has two of the tallest launch towers in the world, specially designed to integrate, test, launch, and catch Starship and Super Heavy vehicles.",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(items.length);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    setSlideCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(255,255,255,0.05),transparent_70%)]" />
      <Carousel
        className="relative z-10 h-full"
        opts={{ loop: true, duration: 20, align: "start" }}
        setApi={setApi as unknown as (api: CarouselApi) => void}
      >
        <CarouselContent className="h-full">
          {items.map((m, idx) => (
            <CarouselItem key={idx} className="h-[100svh] p-0">
              <figure className="relative w-full h-full">
                <Image src={m.src} alt={m.title || `Starbase ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
                {(m.title || m.description) && (
                  <figcaption className="absolute left-8 top-1/2 -translate-y-[35%] transform text-white">
                    {m.title && <div className="text-2xl md:text-4xl font-display font-bold leading-tight whitespace-pre-line">{m.title}</div>}
                    {m.description && <div className="mt-3 text-sm md:text-base leading-relaxed max-w-xl">{m.description}</div>}
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation controls at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          {/* Previous arrow */}
          <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 bg-white/10 border-white/40 text-white hover:bg-white/20" />

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={
                  "h-2 w-2 rounded-full transition-all " +
                  (selectedIndex === i ? "bg-white w-5" : "bg-white/50")
                }
              />
            ))}
          </div>

          {/* Next arrow */}
          <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 bg-white/10 border-white/40 text-white hover:bg-white/20" />
        </div>
      </Carousel>
    </section>
  );
}


const PauseIcon = () => (
  <svg
    viewBox="0 0 14 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14.4px] w-auto"
    aria-hidden="true"
  >
    <rect x="2.8" width="2.4" height="14.4" />
    <rect x="8.8" width="2.4" height="14.4" />
  </svg>
);

const PlayIcon = () => (
  <svg
    viewBox="0 0 13 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14.4px] w-auto"
    aria-hidden="true"
  >
    <path d="M12.5 8L0.5 15.7942V0.205771L12.5 8Z" />
  </svg>
);

function SpaceXWebcastSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-primary-black text-primary-white">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/Starship _ Second Flight Test.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ filter: 'none' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px] text-white">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal">SpaceX</h2>
          <p className="mt-4 text-[15px] leading-6 text-white/90">
            Space Exploration Technologies Corp., commonly referred to as SpaceX, is an American space technology company headquartered at the Starbase development site in Starbase, Texas. Since its founding in 2002, the company has made numerous advances in rocket propulsion, reusable launch vehicles, human spaceflight and satellite constellation technology.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="text-white"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </section>
  );
}

function StarshipFlightTestSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-primary-black text-primary-white">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/Starship _ Preparing for Second Flight Test.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ filter: 'none' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px] text-white">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal">The Road to Making Humanity Multiplanetary</h2>
          <p className="mt-4 text-[15px] leading-6 text-white/90">
            SpaceX is a private spaceflight company that sends satellites and people to space, including NASA crews to the International Space Station (ISS). Founder Elon Musk is also creating and testing a Starship system for lunar landings and, he hopes, future crewed Mars missions.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="text-white"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </section>
  );
}