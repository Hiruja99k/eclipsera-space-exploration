"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronDown,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M7.4 15.6c1.4-1.4 3.4-.8 5.6.8" />
    <path d="M6.3 12.3c1.8-1.2 4.5-.9 7.2 1" />
    <path d="M5.4 9.3c2.2-1 5.6-.9 8.8 1.1" />
  </svg>
);

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
    { href: "/en/store-locator", label: "Store locator" },
    { href: "/en/material-library", label: "Material Library" },
    { href: "/en/shipping-returns", label: "Shipping & Returns" },
    { href: "/en/faq", label: "FAQ" },
  ];

  const mainLinks2 = [
    { href: "/en/newsletter_signup", label: "Newsletter" },
    { href: "https://press.moooi.com/", label: "Press Area", isExternal: true },
    { href: "/en/jobs", label: "Jobs" },
  ];

  const socialLinks = [
    {
      href: "https://pinterest.com/moooi/",
      icon: PinterestIcon,
      label: "Pinterest",
    },
    {
      href: "https://www.instagram.com/moooi/",
      icon: Instagram,
      label: "Instagram",
    },
    { href: "https://vimeo.com/moooi", icon: VimeoIcon, label: "Vimeo" },
    {
      href: "https://www.linkedin.com/company/moooi/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://www.facebook.com/moooi", icon: Facebook, label: "Facebook" },
    {
      href: "https://open.spotify.com/user/moooi",
      icon: SpotifyIcon,
      label: "Spotify",
    },
  ];

  const legalLinks = [
    { href: "/en/disclaimer", label: "Disclaimer" },
    { href: "/en/cookie-policy", label: "Cookie Policy" },
    { href: "/en/general-conditions", label: "General Conditions" },
    { href: "/en/privacy-statement", label: "Privacy Statement" },
  ];

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-black text-white font-body"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-20 pb-10">
        <div className="flex justify-between items-center border-b border-white/20 pb-10 mb-10">
          <button className="border border-white/50 rounded-full px-5 py-3 flex items-center justify-between gap-4 text-left w-auto md:w-[320px] hover:bg-white/10 transition-colors">
            <span className="flex flex-col">
              <span className="text-sm leading-tight">
                My country/region is not listed
              </span>
              <span className="text-xs text-gray-400 leading-tight">
                English
              </span>
            </span>
            <ChevronDown className="w-5 h-5 flex-shrink-0" />
          </button>
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
            <div className="flex flex-col items-start gap-y-5">
              {mainLinks1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-[34px] leading-[40px] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-5">
              {mainLinks2.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[34px] leading-[40px] hover:underline"
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
              <p className="text-xs text-gray-400">©2025 Moooi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;