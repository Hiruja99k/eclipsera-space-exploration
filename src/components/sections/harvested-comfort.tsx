"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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

const HarvestedComfort = () => {
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
          src="https://cdn.moooi.com/assets/Web-Items/Home/MOOOI_HayBale_Website_NoBumpers_Reduced.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center md:p-12">
        <Link
          href="/en/story/haybale-lounge-chair"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-small-label">Product story</p>
            <h1
              className="mt-6 font-display text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] font-normal tracking-[-0.02em]"
              role="text"
            >
              Harvested for Comfort
            </h1>
          </div>
          <p className="text-body-large mt-6 max-w-[55ch] md:mt-6">
            A bold reinterpretation of rural nostalgia, the Haybale Lounge Chair
            with Footstool transforms stacked hay bales into a sculptural
            statement of comfort.
          </p>
          <div className="mt-12">
            <span className="inline-block rounded-full border border-white px-10 py-4 text-base font-normal text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Discover the new Haybale Lounge Chair
            </span>
          </div>
        </Link>
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
};

export default HarvestedComfort;