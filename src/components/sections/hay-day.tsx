"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const PauseIcon = () => (
  <svg
    viewBox="0 0 12 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14.4px] w-auto"
    aria-hidden="true"
  >
    <g>
      <rect width="2.4" height="14.4" />
      <rect x="8.6" width="2.4" height="14.4" />
    </g>
  </svg>
);

const PlayIcon = () => (
  <svg
    viewBox="0 0 11 13"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14.4px] w-auto"
    aria-hidden="true"
  >
    <path d="M10.5 5.63397C11.1667 6.01887 11.1667 6.98113 10.5 7.36603L1.5 12.5622C0.833333 12.9471 0 12.4659 0 11.6962L0 1.30385C0 0.534145 0.833333 0.0529188 1.5 0.437819L10.5 5.63397Z" />
  </svg>
);

export default function HayDay() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-primary-black text-primary-white">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          autoPlay
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          src="https://cdn.moooi.com/assets/Collection/Every Human/Animation/AURA_HAY_1080x1350_no text_30sec.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 p-6 text-center">
        <Link href="/en/product/room-fragrance-hay-day">
          <div className="mb-4">
            <p className="font-body text-xs uppercase tracking-[0.08em]">
              Moooi presents
            </p>
          </div>
          <h1
            className="font-display text-[64px] leading-[72px] -tracking-[0.02em]"
            aria-label="Hay Day"
            role="text"
          >
            <span>Hay</span> <span>Day</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[450px] font-body text-base leading-6">
            Embrace the sunlit hay fields of Hay Day, a luscious room fragrance
            from Moooi X EveryHuman.
          </p>
          <div className="mt-8">
            <span className="inline-block rounded-full bg-white px-8 py-3 text-sm font-normal text-black transition-opacity hover:opacity-80">
              Discover this Room Fragrance
            </span>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-10 w-10 items-center justify-center text-white"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </section>
  );
}