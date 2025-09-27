"use client";

import { useState } from "react";
import { X } from "lucide-react";

const USFlagIcon = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g clipPath="url(#clip0_us_icon)">
            <path d="M0 0H24V18H0V0Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V2H24V0ZM24 4H0V6H24V4ZM0 8H24V10H0V8ZM0 12H24V14H0V12ZM0 16H24V18H0V16Z" fill="#D32E2E"></path>
            <path d="M0 0H12V10H0V0Z" fill="#002674"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.125L1.14425 1.7045L0.5 1.25L0.98225 0.875L0.5 0.5L1.14425 0.9455L1.5 0.375L1.85575 0.9455L2.5 0.5L2.01775 0.875L2.5 1.25L1.85575 1.7045L1.5 1.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.125L3.14425 1.7045L2.5 1.25L2.98225 0.875L2.5 0.5L3.14425 0.9455L3.5 0.375L3.85575 0.9455L4.5 0.5L4.01775 0.875L4.5 1.25L3.85575 1.7045L3.5 1.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 1.125L5.14425 1.7045L4.5 1.25L4.98225 0.875L4.5 0.5L5.14425 0.9455L5.5 0.375L5.85575 0.9455L6.5 0.5L6.01775 0.875L6.5 1.25L5.85575 1.7045L5.5 1.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.125L7.14425 1.7045L6.5 1.25L6.98225 0.875L6.5 0.5L7.14425 0.9455L7.5 0.375L7.85575 0.9455L8.5 0.5L8.01775 0.875L8.5 1.25L7.85575 1.7045L7.5 1.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 1.125L9.14425 1.7045L8.5 1.25L8.98225 0.875L8.5 0.5L9.14425 0.9455L9.5 0.375L9.85575 0.9455L10.5 0.5L10.0178 0.875L10.5 1.25L9.85575 1.7045L9.5 1.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.625L1.14425 3.2045L0.5 2.75L0.98225 2.375L0.5 2L1.14425 2.4455L1.5 1.875L1.85575 2.4455L2.5 2L2.01775 2.375L2.5 2.75L1.85575 3.2045L1.5 2.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2.625L3.14425 3.2045L2.5 2.75L2.98225 2.375L2.5 2L3.14425 2.4455L3.5 1.875L3.85575 2.4455L4.5 2L4.01775 2.375L4.5 2.75L3.85575 3.2045L3.5 2.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2.625L5.14425 3.2045L4.5 2.75L4.98225 2.375L4.5 2L5.14425 2.4455L5.5 1.875L5.85575 2.4455L6.5 2L6.01775 2.375L6.5 2.75L5.85575 3.2045L5.5 2.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.625L7.14425 3.2045L6.5 2.75L6.98225 2.375L6.5 2L7.14425 2.4455L7.5 1.875L7.85575 2.4455L8.5 2L8.01775 2.375L8.5 2.75L7.85575 3.2045L7.5 2.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 2.625L9.14425 3.2045L8.5 2.75L8.98225 2.375L8.5 2L9.14425 2.4455L9.5 1.875L9.85575 2.4455L10.5 2L10.0178 2.375L10.5 2.75L9.85575 3.2045L9.5 2.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 1.875L2.14425 2.4545L1.5 2L1.98225 1.625L1.5 1.25L2.14425 1.6955L2.5 1.125L2.85575 1.6955L3.5 1.25L3.01775 1.625L3.5 2L2.85575 2.4545L2.5 1.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 1.875L4.14425 2.4545L3.5 2L3.98225 1.625L3.5 1.25L4.14425 1.6955L4.5 1.125L4.85575 1.6955L5.5 1.25L5.01775 1.625L5.5 2L4.85575 2.4545L4.5 1.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.875L6.14425 2.4545L5.5 2L5.98225 1.625L5.5 1.25L6.14425 1.6955L6.5 1.125L6.85575 1.6955L7.5 1.25L7.01775 1.625L7.5 2L6.85575 2.4545L6.5 1.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 1.875L8.14425 2.4545L7.5 2L7.98225 1.625L7.5 1.25L8.14425 1.6955L8.5 1.125L8.85575 1.6955L9.5 1.25L9.01775 1.625L9.5 2L8.85575 2.4545L8.5 1.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 1.875L10.1443 2.4545L9.5 2L9.98225 1.625L9.5 1.25L10.1443 1.6955L10.5 1.125L10.8558 1.6955L11.5 1.25L11.0178 1.625L11.5 2L10.8558 2.4545L10.5 1.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.125L1.14425 4.7045L0.5 4.25L0.98225 3.875L0.5 3.5L1.14425 3.9455L1.5 3.375L1.85575 3.9455L2.5 3.5L2.01775 3.875L2.5 4.25L1.85575 4.7045L1.5 4.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 4.125L3.14425 4.7045L2.5 4.25L2.98225 3.875L2.5 3.5L3.14425 3.9455L3.5 3.375L3.85575 3.9455L4.5 3.5L4.01775 3.875L4.5 4.25L3.85575 4.7045L3.5 4.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 4.125L5.14425 4.7045L4.5 4.25L4.98225 3.875L4.5 3.5L5.14425 3.9455L5.5 3.375L5.85575 3.9455L6.5 3.5L6.01775 3.875L6.5 4.25L5.85575 4.7045L5.5 4.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4.125L7.14425 4.7045L6.5 4.25L6.98225 3.875L6.5 3.5L7.14425 3.9455L7.5 3.375L7.85575 3.9455L8.5 3.5L8.01775 3.875L8.5 4.25L7.85575 4.7045L7.5 4.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 4.125L9.14425 4.7045L8.5 4.25L8.98225 3.875L8.5 3.5L9.14425 3.9455L9.5 3.375L9.85575 3.9455L10.5 3.5L10.0178 3.875L10.5 4.25L9.85575 4.7045L9.5 4.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 3.375L2.14425 3.9545L1.5 3.5L1.98225 3.125L1.5 2.75L2.14425 3.1955L2.5 2.625L2.85575 3.1955L3.5 2.75L3.01775 3.125L3.5 3.5L2.85575 3.9545L2.5 3.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.375L4.14425 3.9545L3.5 3.5L3.98225 3.125L3.5 2.75L4.14425 3.1955L4.5 2.625L4.85575 3.1955L5.5 2.75L5.01775 3.125L5.5 3.5L4.85575 3.9545L4.5 3.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 3.375L6.14425 3.9545L5.5 3.5L5.98225 3.125L5.5 2.75L6.14425 3.1955L6.5 2.625L6.85575 3.1955L7.5 2.75L7.01775 3.125L7.5 3.5L6.85575 3.9545L6.5 3.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 3.375L8.14425 3.9545L7.5 3.5L7.98225 3.125L7.5 2.75L8.14425 3.1955L8.5 2.625L8.85575 3.1955L9.5 2.75L9.01775 3.125L9.5 3.5L8.85575 3.9545L8.5 3.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 3.375L10.1443 3.9545L9.5 3.5L9.98225 3.125L9.5 2.75L10.1443 3.1955L10.5 2.625L10.8558 3.1955L11.5 2.75L11.0178 3.125L11.5 3.5L10.8558 3.9545L10.5 3.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 5.625L1.14425 6.2045L0.5 5.75L0.98225 5.375L0.5 5L1.14425 5.4455L1.5 4.875L1.85575 5.4455L2.5 5L2.01775 5.375L2.5 5.75L1.85575 6.2045L1.5 5.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5.625L3.14425 6.2045L2.5 5.75L2.98225 5.375L2.5 5L3.14425 5.4455L3.5 4.875L3.85575 5.4455L4.5 5L4.01775 5.375L4.5 5.75L3.85575 6.2045L3.5 5.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 5.625L5.14425 6.2045L4.5 5.75L4.98225 5.375L4.5 5L5.14425 5.4455L5.5 4.875L5.85575 5.4455L6.5 5L6.01775 5.375L6.5 5.75L5.85575 6.2045L5.5 5.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 5.625L7.14425 6.2045L6.5 5.75L6.98225 5.375L6.5 5L7.14425 5.4455L7.5 4.875L7.85575 5.4455L8.5 5L8.01775 5.375L8.5 5.75L7.85575 6.2045L7.5 5.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 5.625L9.14425 6.2045L8.5 5.75L8.98225 5.375L8.5 5L9.14425 5.4455L9.5 4.875L9.85575 5.4455L10.5 5L10.0178 5.375L10.5 5.75L9.85575 6.2045L9.5 5.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 4.875L2.14425 5.4545L1.5 5L1.98225 4.625L1.5 4.25L2.14425 4.6955L2.5 4.125L2.85575 4.6955L3.5 4.25L3.01775 4.625L3.5 5L2.85575 5.4545L2.5 4.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 4.875L4.14425 5.4545L3.5 5L3.98225 4.625L3.5 4.25L4.14425 4.6955L4.5 4.125L4.85575 4.6955L5.5 4.25L5.01775 4.625L5.5 5L4.85575 5.4545L4.5 4.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 4.875L6.14425 5.4545L5.5 5L5.98225 4.625L5.5 4.25L6.14425 4.6955L6.5 4.125L6.85575 4.6955L7.5 4.25L7.01775 4.625L7.5 5L6.85575 5.4545L6.5 4.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 4.875L8.14425 5.4545L7.5 5L7.98225 4.625L7.5 4.25L8.14425 4.6955L8.5 4.125L8.85575 4.6955L9.5 4.25L9.01775 4.625L9.5 5L8.85575 5.4545L8.5 4.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 4.875L10.1443 5.4545L9.5 5L9.98225 4.625L9.5 4.25L10.1443 4.6955L10.5 4.125L10.8558 4.6955L11.5 4.25L11.0178 4.625L11.5 5L10.8558 5.4545L10.5 4.875Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.125L1.14425 7.7045L0.5 7.25L0.98225 6.875L0.5 6.5L1.14425 6.9455L1.5 6.375L1.85575 6.9455L2.5 6.5L2.01775 6.875L2.5 7.25L1.85575 7.7045L1.5 7.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7.125L3.14425 7.7045L2.5 7.25L2.98225 6.875L2.5 6.5L3.14425 6.9455L3.5 6.375L3.85575 6.9455L4.5 6.5L4.01775 6.875L4.5 7.25L3.85575 7.7045L3.5 7.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 7.125L5.14425 7.7045L4.5 7.25L4.98225 6.875L4.5 6.5L5.14425 6.9455L5.5 6.375L5.85575 6.9455L6.5 6.5L6.01775 6.875L6.5 7.25L5.85575 7.7045L5.5 7.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 7.125L7.14425 7.7045L6.5 7.25L6.98225 6.875L6.5 6.5L7.14425 6.9455L7.5 6.375L7.85575 6.9455L8.5 6.5L8.01775 6.875L8.5 7.25L7.85575 7.7045L7.5 7.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 7.125L9.14425 7.7045L8.5 7.25L8.98225 6.875L8.5 6.5L9.14425 6.9455L9.5 6.375L9.85575 6.9455L10.5 6.5L10.0178 6.875L10.5 7.25L9.85575 7.7045L9.5 7.125Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6.375L2.14425 6.9545L1.5 6.5L1.98225 6.125L1.5 5.75L2.14425 6.1955L2.5 5.625L2.85575 6.1955L3.5 5.75L3.01775 6.125L3.5 6.5L2.85575 6.9545L2.5 6.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 6.375L4.14425 6.9545L3.5 6.5L3.98225 6.125L3.5 5.75L4.14425 6.1955L4.5 5.625L4.85575 6.1955L5.5 5.75L5.01775 6.125L5.5 6.5L4.85575 6.9545L4.5 6.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 6.375L6.14425 6.9545L5.5 6.5L5.98225 6.125L5.5 5.75L6.14425 6.1955L6.5 5.625L6.85575 6.1955L7.5 5.75L7.01775 6.125L7.5 6.5L6.85575 6.9545L6.5 6.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 6.375L8.14425 6.9545L7.5 6.5L7.98225 6.125L7.5 5.75L8.14425 6.1955L8.5 5.625L8.85575 6.1955L9.5 5.75L9.01775 6.125L9.5 6.5L8.85575 6.9545L8.5 6.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6.375L10.1443 6.9545L9.5 6.5L9.98225 6.125L9.5 5.75L10.1443 6.1955L10.5 5.625L10.8558 6.1955L11.5 5.75L11.0178 6.125L11.5 6.5L10.8558 6.9545L10.5 6.375Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 8.625L1.14425 9.2045L0.5 8.75L0.98225 8.375L0.5 8L1.14425 8.4455L1.5 7.875L1.85575 8.4455L2.5 8L2.01775 8.375L2.5 8.75L1.85575 9.2045L1.5 8.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 8.625L3.14425 9.2045L2.5 8.75L2.98225 8.375L2.5 8L3.14425 8.4455L3.5 7.875L3.85575 8.4455L4.5 8L4.01775 8.375L4.5 8.75L3.85575 9.2045L3.5 8.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 8.625L5.14425 9.2045L4.5 8.75L4.98225 8.375L4.5 8L5.14425 8.4455L5.5 7.875L5.85575 8.4455L6.5 8L6.01775 8.375L6.5 8.75L5.85575 9.2045L5.5 8.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 8.625L7.14425 9.2045L6.5 8.75L6.98225 8.375L6.5 8L7.14425 8.4455L7.5 7.875L7.85575 8.4455L8.5 8L8.01775 8.375L8.5 8.75L7.85575 9.2045L7.5 8.625Z" fill="#fff"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 8.625L9.14425 9.2045L8.5 8.75L8.98225 8.375L8.5 8L9.14425 8.4455L9.5 7.875L9.85575 8.4455L10.5 8L10.0178 8.375L10.5 8.75L9.85575 9.2045L9.5 8.625Z" fill="#fff"></path>
        </g>
        <defs>
            <clipPath id="clip0_us_icon">
                <rect width="24" height="18" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);


interface CountrySelectorModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CountrySelectorModal({ isOpen = true, onClose }: CountrySelectorModalProps) {
  const [selected, setSelected] = useState("US");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/10" onClick={onClose}></div>
        <div className="absolute bottom-8 right-8 w-full max-w-sm">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="country-selector-title"
                className="relative bg-background px-12 pt-12 pb-8 shadow-2xl"
            >
                <button
                    aria-label="Close dialog"
                    className="absolute top-4 right-4 text-primary"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <h2
                    id="country-selector-title"
                    className="mb-8 text-center font-display text-[26px] leading-8 font-normal"
                >
                    Choose a country or region to see the content for your location
                </h2>

                <div className="space-y-2">
                    <button
                        className={`flex w-full items-center justify-between p-4 border ${selected === "US" ? "border-primary bg-background" : "border-border bg-[#f7f7f7]"}`}
                        onClick={() => setSelected("US")}
                    >
                        <span className="flex items-center gap-4">
                            <USFlagIcon />
                            <span className="font-body text-base">United States</span>
                        </span>
                        <span className="font-body text-base text-muted-foreground">English</span>
                    </button>
                    <button
                        className={`flex w-full items-center justify-between p-4 border ${selected === "Other" ? "border-primary bg-background" : "border-border bg-[#f7f7f7]"}`}
                        onClick={() => setSelected("Other")}
                    >
                        <span className="flex items-center gap-4">
                            <span className="w-[24px] h-[18px]"></span> {/* Placeholder for alignment */}
                            <span className="font-body text-base">My country/region is not listed</span>
                        </span>
                        <span className="font-body text-base text-muted-foreground">English</span>
                    </button>
                </div>

                <div className="mt-8">
                    <a
                        href="/us"
                        className="block w-full bg-[#3b82f6] py-3 text-center text-primary-foreground font-body text-base"
                    >
                        Continue
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}