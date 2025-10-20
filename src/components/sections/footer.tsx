"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

// Replace Spotify with Twitter in social links

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 17c2.8 0 5-2 5-4.5S14.8 8 12 8 7 9.8 7 12c0 1.4.7 2.6 1.9 3.3" />
    <path d="M10.5 21c.3-1.5.8-3.7 1.1-5.2" />
    <path d="M12.5 13.5c-.7-1.8-3.2-1.6-3.2.2 0 1 .8 1.8 1.8 1.8.6 0 1-.2 1.4-.6" />
  </svg>
);

const VimeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 7.5c-1.2 2.6-3.4 6.1-5.4 8.2-2.4 2.5-4.1 2.2-5-1.1-.3-1.1-.9-3.6-1.3-4.3-.6-1.2-1.3-1-2.2-.4l-.7-.9c1.6-1.4 3.2-2.8 4.2-2.8 1.1 0 1.7.8 2 2.3.3 1.3.6 2.9 1 3.7.4.8.9 1.2 1.7.4 1-.9 2.3-3.2 3.3-5.1L22 7.5z" />
  </svg>
);

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

  const socialLinks = [
    {
      href: "https://www.nasa.gov/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      label: "NASA",
    },
    {
      href: "https://www.spacex.com/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      label: "SpaceX",
    },
    {
      href: "https://www.esa.int/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
      ),
      label: "ESA",
    },
    {
      href: "https://science.nasa.gov/mission/webb/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      label: "Webb Telescope",
    },
    {
      href: "https://www.bccs.lk/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="1"/>
          <path d="M7 8h10M7 12h6"/>
        </svg>
      ),
      label: "BCCS",
    },
    {
      href: "https://aspect.bccs.lk/",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.5 8.5L22 9L17 14L19 22L12 18L5 22L7 14L2 9L8.5 8.5L12 2Z"/>
        </svg>
      ),
      label: "ASPECT 2025",
    },
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
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-x-5 order-2 md:order-1">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 order-1 md:order-2">
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
      </div>
    </footer>
  );
};

export default Footer;