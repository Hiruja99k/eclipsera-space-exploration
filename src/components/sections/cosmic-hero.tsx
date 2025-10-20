import Image from "next/image";
import Link from "next/link";
import React from "react";

const CosmicHero = () => {
  return (
    <section className="relative w-full h-[100svh]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Eclipsera"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px]">
        <Link
          href="/missions"
          className="flex flex-col items-center text-center text-primary-white"
        >
          <div className="flex flex-col-reverse items-center">
            <h1
              className="font-display text-3xl leading-tight md:text-[56px] md:leading-[84px] -tracking-[0.02em] font-normal mt-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              aria-label="Moooi Ceramic Surfaces"
            >
              Engineering Brilliance
              <br />
              Where Stars Align
            </h1>
            <div className="font-body text-xs font-normal uppercase tracking-[0.08em] leading-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              ECLIPSERA PRESENTS
            </div>
          </div>
          <div className="mt-8">
            <span className="font-body text-[15px] leading-5 border-b border-primary-white pb-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            Discover The Universe Within Reach
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CosmicHero;