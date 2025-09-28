import Image from "next/image";
import Link from "next/link";
import React from "react";

const CeramicSurfacesHero = () => {
  return (
    <section className="relative w-full h-[100svh]">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-232364-02%20SANDY%20PLAINS%20HAY%20120X280-60X120-HYPNOTIC%20OWL%20GOLD%2060X60.tif"
          alt="Moooi Ceramic Surfaces"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-[80px]">
        <Link
          href="/en/story/moooi-ceramic-surfaces"
          className="flex flex-col items-center text-center text-primary-white"
        >
          <div className="flex flex-col-reverse items-center">
            <h1
              className="font-display text-3xl leading-tight md:text-[56px] md:leading-[64px] -tracking-[0.02em] font-normal mt-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              aria-label="Moooi Ceramic Surfaces"
            >
              Moooi Ceramic
              <br />
              Surfaces
            </h1>
            <div className="font-body text-xs font-normal uppercase tracking-[0.08em] leading-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              MOOOI PRESENTS
            </div>
          </div>
          <div className="mt-8">
            <span className="font-body text-[15px] leading-5 border-b border-primary-white pb-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
              Discover this brand-new Collection
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CeramicSurfacesHero;