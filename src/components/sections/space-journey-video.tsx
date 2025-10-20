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

const SpaceJourneyVideo = () => {
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

      // Handle video trimming - restart 5 seconds before the end
      const handleTimeUpdate = () => {
        if (video.duration && video.currentTime >= video.duration - 5) {
          video.currentTime = 0;
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
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
          src="/THE-BEAUTY-OF-THE-UNIVERSE.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/space-poster.jpg"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center md:p-12">
        <Link
          href="/missions"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-small-label">SPACE EXPLORATION</p>
            <h1
              className="mt-6 font-display text-[42px] leading-[48px] md:text-[58px] md:leading-[72px] font-normal tracking-[-0.02em]"
              role="text"
            >
              Our Journey Is Among Stars
            </h1>
          </div>
          <p className="text-body-large mt-6 max-w-[55ch] md:mt-6">
            From the first steps on the Moon to the exploration of Mars, humanity's quest to reach the stars continues. Discover the missions that push the boundaries of what's possible and inspire us to dream beyond our world.
          </p>
          <div className="mt-12">
            <span className="inline-block rounded-full border border-white px-10 py-4 text-base font-normal text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Explore Space Missions
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

export default SpaceJourneyVideo;