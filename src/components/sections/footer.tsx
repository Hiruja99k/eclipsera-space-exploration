"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const mainLinks1 = [
    { href: "/missions", label: "Space Missions" },
    { href: "/about", label: "About Eclipsera" },
    { href: "/ecosystem", label: "Ecosystem" },
    { href: "https://science.nasa.gov/mission/webb/multimedia/images/", label: "Gallery", isExternal: true },
  ];

  const mainLinks2 = [
    { href: "https://aspect.bccs.lk/", label: "ASPECT 2025", isExternal: true },
    { href: "https://www.bccs.lk/", label: "BCCS", isExternal: true },
    { href: "https://stars.chromeexperiments.com/", label: "Chrome Stars", isExternal: true },
  ];



  const legalLinks = [
    { href: "/about", label: "About Project" },
    { href: "https://aspect.bccs.lk/", label: "Competition", isExternal: true },
    { href: "https://www.bccs.lk/", label: "Organizer", isExternal: true },
    { href: "/", label: "Home" },
  ];

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-black text-white font-body"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-20 pb-10">
        <div className="flex justify-between items-center border-b border-white/20 pb-10 mb-10">
          <div className="text-white/90">
            <p className="whitespace-nowrap font-display font-bold text-[24px] leading-none">
            "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever."
            </p>
            <p className="mt-6 whitespace-nowrap font-display font-semibold text-[16px] leading-none text-white/80">— Konstantin Tsiolkovsky</p>
          </div>
          <button
            onClick={handleScrollToTop}
            className="border border-white/50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            <div className="flex flex-col items-start gap-y-4">
              {mainLinks1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-[24px] leading-[30px] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-4">
              {mainLinks2.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[24px] leading-[30px] hover:underline"
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400">©2025 Eclipsera</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;