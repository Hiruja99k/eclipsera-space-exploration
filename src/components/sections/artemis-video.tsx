"use client";

import { useState, useRef, useEffect } from "react";

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

const VolumeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M11 5L6 9H2V15H6L11 19V5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.07 4.93C20.9445 6.80448 21.9982 9.34785 21.9982 12C21.9982 14.6522 20.9445 17.1955 19.07 19.07"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VolumeMutedIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M11 5L6 9H2V15H6L11 19V5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 9L17 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 9L23 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ArtemisVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      video.volume = 0.7; // Set to a reasonable default volume
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 0.7; // Set default volume
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

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
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
          src="/Artemis II Astronaut Announcement_ April 3, 2023 (Official NASA Trailer).mp4"
          preload="auto"
          style={{ filter: 'none' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Play/Pause Control - Bottom Left */}
      <div className="absolute bottom-10 left-10 z-20">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-10 w-10 items-center justify-center text-white hover:text-white/80 transition-colors duration-200"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Sound Control - Right Margin */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-10 w-10 items-center justify-center text-white hover:text-white/80 transition-colors duration-200 rounded-full hover:bg-white/10"
          >
            {isMuted ? <VolumeMutedIcon /> : <VolumeIcon />}
          </button>
        </div>
      </div>
    </section>
  );
}