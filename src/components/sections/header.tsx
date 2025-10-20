"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Using a generic IconProps type for consistency
type IconProps = React.SVGProps<SVGSVGElement>;

const MenuIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <line y1="3.5" x2="16" y2="3.5" stroke="currentColor" strokeWidth="1.5"></line>
      <line y1="8.5" x2="16" y2="8.5" stroke="currentColor" strokeWidth="1.5"></line>
      <line y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="1.5"></line>
    </g>
  </svg>
);

const SearchIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M15.5 15.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5"></path>
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.5"></circle>
    </g>
  </svg>
);

const TextLogo = (props: IconProps) => (
  <svg viewBox="0 12 221.35000610351562 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title id="logoTitle">Text Logo</title>
    <g>
      <path d="M13.75 49.65Q9.85 49.65 6.75 48.17Q3.65 46.70 1.83 43.65Q0 40.60 0 36L0 35Q0 30.60 1.75 27.70Q3.50 24.80 6.53 23.32Q9.55 21.85 13.25 21.85Q19.80 21.85 23.15 25.22Q26.50 28.60 26.50 35L26.50 37.80L7.90 37.80Q8 39.75 8.83 41.05Q9.65 42.35 10.95 42.92Q12.25 43.50 13.75 43.50Q15.95 43.50 17.23 42.83Q18.50 42.15 18.90 41L26 41Q25.20 45.35 22.05 47.50Q18.90 49.65 13.75 49.65M13.50 28Q12.10 28 10.85 28.45Q9.60 28.90 8.83 29.93Q8.05 30.95 7.95 32.70L18.95 32.70Q18.95 30.85 18.20 29.82Q17.45 28.80 16.23 28.40Q15 28 13.50 28ZM43 49.65Q39.10 49.65 36.05 48.15Q33 46.65 31.25 43.60Q29.50 40.55 29.50 36L29.50 35Q29.50 30.80 31.32 27.85Q33.15 24.90 36.23 23.38Q39.30 21.85 43 21.85Q47 21.85 49.70 23.22Q52.40 24.60 53.85 26.90Q55.30 29.20 55.50 32L47.55 32Q47.20 30.20 46.13 29.22Q45.05 28.25 43 28.25Q41.40 28.25 40.13 29Q38.85 29.75 38.13 31.22Q37.40 32.70 37.40 35L37.40 36Q37.40 38.45 38.10 40.05Q38.80 41.65 40.05 42.42Q41.30 43.20 43 43.20Q44.75 43.20 45.98 42.27Q47.20 41.35 47.55 39.50L55.50 39.50Q55.30 42.60 53.70 44.90Q52.10 47.20 49.38 48.42Q46.65 49.65 43 49.65ZM68.75 49.30Q65.55 49.30 63.50 48.52Q61.45 47.75 60.48 45.67Q59.50 43.60 59.50 39.65L59.50 14L67.20 14L67.20 38.50Q67.20 40.95 67.88 41.92Q68.55 42.90 70.70 42.90Q71.30 42.90 71.70 42.88Q72.10 42.85 72.50 42.80L72.50 49.15Q72 49.20 71.42 49.23Q70.85 49.25 70.17 49.27Q69.50 49.30 68.75 49.30ZM76.50 49L76.50 22.50L84.20 22.50L84.20 49L76.50 49M80.35 20Q78.20 20 77.03 18.88Q75.85 17.75 75.85 16Q75.85 14.25 77.03 13.13Q78.20 12 80.35 12Q82.50 12 83.67 13.13Q84.85 14.25 84.85 16Q84.85 17.75 83.67 18.88Q82.50 20 80.35 20ZM89.70 59L89.70 22.50L96.80 22.50L96.80 26.10Q97.85 24.50 99.93 23.17Q102 21.85 105.05 21.85Q110.65 21.85 113.55 25.15Q116.45 28.45 116.45 35L116.45 36Q116.45 40.50 115.05 43.52Q113.65 46.55 111.10 48.10Q108.55 49.65 105.05 49.65Q102.80 49.65 100.78 48.63Q98.75 47.60 97.40 45.65L97.40 59L89.70 59M103.20 43.30Q105.50 43.30 107.03 41.42Q108.55 39.55 108.55 36L108.55 35Q108.55 31.55 107.08 29.88Q105.60 28.20 103.20 28.20Q101.60 28.20 100.28 28.88Q98.95 29.55 98.18 30.90Q97.40 32.25 97.40 34.25L97.40 36.75Q97.40 38.80 98.18 40.27Q98.95 41.75 100.28 42.52Q101.60 43.30 103.20 43.30ZM131.95 49.65Q128.70 49.65 126.38 48.98Q124.05 48.30 122.55 47.13Q121.05 45.95 120.30 44.38Q119.55 42.80 119.45 41L127.15 41Q127.45 42.10 128.45 42.92Q129.45 43.75 131.95 43.75Q134.50 43.75 135.60 43.05Q136.70 42.35 136.70 41.20Q136.70 40.60 136.22 40.13Q135.75 39.65 134.47 39.25Q133.20 38.85 130.80 38.45Q128.60 38.10 126.67 37.55Q124.75 37 123.30 36.08Q121.85 35.15 121.03 33.70Q120.20 32.25 120.20 30.05Q120.20 27.70 121.60 25.85Q123 24 125.65 22.92Q128.30 21.85 131.95 21.85Q136.10 21.85 138.53 23.13Q140.95 24.40 142.10 26.38Q143.25 28.35 143.45 30.50L135.70 30.50Q135.40 29.25 134.43 28.50Q133.45 27.75 131.95 27.75Q129.65 27.75 128.78 28.45Q127.90 29.15 127.90 30.15Q127.90 31.15 129.30 31.72Q130.70 32.30 133.75 32.70Q135.95 33 137.88 33.55Q139.80 34.10 141.28 35.08Q142.75 36.05 143.60 37.52Q144.45 39 144.45 41.10Q144.45 43.60 143.03 45.55Q141.60 47.50 138.82 48.58Q136.05 49.65 131.95 49.65ZM161.20 49.65Q157.30 49.65 154.20 48.17Q151.10 46.70 149.27 43.65Q147.45 40.60 147.45 36L147.45 35Q147.45 30.60 149.20 27.70Q150.95 24.80 153.97 23.32Q157 21.85 160.70 21.85Q167.25 21.85 170.60 25.22Q173.95 28.60 173.95 35L173.95 37.80L155.35 37.80Q155.45 39.75 156.27 41.05Q157.10 42.35 158.40 42.92Q159.70 43.50 161.20 43.50Q163.40 43.50 164.67 42.83Q165.95 42.15 166.35 41L173.45 41Q172.65 45.35 169.50 47.50Q166.35 49.65 161.20 49.65M160.95 28Q159.55 28 158.30 28.45Q157.05 28.90 156.27 29.93Q155.50 30.95 155.40 32.70L166.40 32.70Q166.40 30.85 165.65 29.82Q164.90 28.80 163.67 28.40Q162.45 28 160.95 28ZM177.95 49L177.95 22.50L185.05 22.50L185.05 26.10Q185.45 25.20 186.40 24.20Q187.35 23.20 188.70 22.52Q190.05 21.85 191.70 21.85Q192.55 21.85 193.05 21.95Q193.55 22.05 193.95 22.15L193.95 28.80Q193.70 28.65 192.80 28.45Q191.90 28.25 190.70 28.25Q188.95 28.25 187.82 28.95Q186.70 29.65 186.17 30.85Q185.65 32.05 185.65 33.55L185.65 49L177.95 49ZM204.95 49.65Q202.10 49.65 200.07 48.55Q198.05 47.45 197 45.52Q195.95 43.60 195.95 41.25Q195.95 37.30 198.38 35.20Q200.80 33.10 205.70 33.10L213.20 33.10L213.20 32Q213.20 29.60 212.07 28.70Q210.95 27.80 208.95 27.80Q207.05 27.80 206.15 28.38Q205.25 28.95 205.15 30.25L197.45 30.25Q197.60 27.85 198.97 25.95Q200.35 24.05 202.92 22.95Q205.50 21.85 209.20 21.85Q212.70 21.85 215.35 22.90Q218 23.95 219.47 26.27Q220.95 28.60 220.95 32.50L220.95 42.25Q220.95 44.35 221.05 45.92Q221.15 47.50 221.35 49L214 49Q213.95 48.15 213.88 47.50Q213.80 46.85 213.80 45.90Q212.60 47.50 210.47 48.58Q208.35 49.65 204.95 49.65M207.45 44.20Q209.10 44.20 210.40 43.60Q211.70 43 212.45 41.77Q213.20 40.55 213.20 39L213.20 37.90L207.20 37.90Q205.50 37.90 204.67 38.80Q203.85 39.70 203.85 40.85Q203.85 42.35 204.67 43.27Q205.50 44.20 207.45 44.20Z" />
    </g>
  </svg>
);

const UserIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M1,15.5 C1,13.5 3.5,12.5 8,12.5 C12.5,12.5 15,13.5 15,15.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8,9.5 C10,9.5 11.5,8 11.5,6 C11.5,4 10,2.5 8,2.5 C6,2.5 4.5,4 4.5,6 C4.5,8 6,9.5 8,9.5 Z" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

const HeartIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.57143 8.5L8 14.5L13.4286 8.5C14.7143 7 14.7143 5.4 13.4286 4C12.1429 2.6 10.2857 2.6 9.14286 4L8 5.5L6.85714 4C5.71429 2.6 3.85714 2.6 2.57143 4C1.28571 5.4 1.28571 7 2.57143 8.5Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LaptopIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="5" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 18.5C2 17.6716 2.67157 17 3.5 17H20.5C21.3284 17 22 17.6716 22 18.5V19H2V18.5Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GlobeIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 8h12M8 2a10.5 10.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

const RocketIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <g transform="scale(1.15) translate(-1 -1)">
      <path d="M9.5 2.5c2 0 4 2 4 4 0 .7-.2 1.4-.6 2l-2.8 2.8c-.6.4-1.3.6-2 .6-2 0-4-2-4-4 0-.7.2-1.4.6-2L7.5 2.9c.6-.4 1.3-.4 2-.4z"
        stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10l-2.5.5L3 13l2.5-.5L6 10z"
        stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10.5" cy="6.5" r="1"
        stroke="currentColor" strokeWidth="1.2" />
    </g>
  </svg>
);

const StarIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1 L15.5 8.5 L23 9.5 L17.5 14.5 L19 22.5 L12 18.5 L5 22.5 L6.5 14.5 L1 9.5 L8.5 8.5 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);


// Removed ChevronDownIcon as language dropdown is no longer used

const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

interface HeaderProps {
  onOpenCountrySelector?: () => void;
  appearance?: "dark" | "light"; // dark: white text, light: black text
}

const Header: React.FC<HeaderProps> = ({ onOpenCountrySelector, appearance = "dark" }) => {
  const [isPromoVisible, setIsPromoVisible] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchSuggestions, setSearchSuggestions] = React.useState<Array<{ title: string, type: string, href: string }>>([]);

  // Search data for auto-suggestions
  const searchData = [
    { title: 'Home', type: 'Page', href: '/' },
    { title: 'Space Missions', type: 'Page', href: '/missions' },
    { title: 'Featured Missions', type: 'Page', href: '/missions' },
    { title: 'Ecosystem Dashboard', type: 'Page', href: '/ecosystem' },
    { title: 'Gallery', type: 'External', href: 'https://science.nasa.gov/mission/webb/multimedia/images/' },
    { title: 'About Eclipsera', type: 'Page', href: '/about' },
    { title: 'Contact', type: 'Page', href: '/contact' },
    { title: 'SpaceX Missions', type: 'Content', href: '/missions' },
    { title: 'Artemis Program', type: 'Content', href: '/missions' },
    { title: 'Mars Exploration', type: 'Content', href: '/missions' },
    { title: 'Moon Landing', type: 'Content', href: '/missions' },
    { title: 'Starship', type: 'Content', href: '/missions' },
    { title: 'Dragon Spacecraft', type: 'Content', href: '/missions' },
    { title: 'Falcon Heavy', type: 'Content', href: '/missions' },
    { title: 'International Space Station', type: 'Content', href: '/missions' },
    { title: 'Chrome Experiments', type: 'External', href: 'https://stars.chromeexperiments.com/' },
    { title: 'NASA Webb Images', type: 'External', href: 'https://science.nasa.gov/mission/webb/multimedia/images/' },
    { title: 'Webb Telescope', type: 'External', href: 'https://science.nasa.gov/mission/webb/multimedia/images/' }
  ];

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6); // Limit to 6 suggestions
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  };

  // Handle search suggestion click
  const handleSuggestionClick = (href: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchSuggestions([]);
  };

  return (
    <div className="bg-transparent">
      {/* Promotional Banner */}
      {isPromoVisible && (
        <div className="relative flex items-center justify-center bg-[#3a2e25] text-white/90">
          <Link href="/missions" className="text-center text-xs tracking-wider py-3 px-10 group">
            <span className="border-b border-transparent group-hover:border-white/90 transition-colors duration-300 pb-px">
              DISCOVER SPACE MISSIONS AND EXPLORATION TODAY!
            </span>
          </Link>
          <button
            onClick={() => setIsPromoVisible(false)}
            className="absolute right-6 top-1/2 -translate-y-1/2"
            aria-label="Close"
          >
            <CloseIcon className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header
        role="banner"
        id="header"
        className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm bg-black/10 transition-all duration-500 ease-out ${appearance === "dark" ? "text-white" : "text-black"}`}
        style={{
          transform: 'translateY(0px)',
          opacity: 1,
          willChange: 'transform, opacity'
        }}
      >
        <div className="mx-auto h-20 px-6 lg:px-[80px]">
          <div className="relative flex h-full items-center justify-between">
            {/* Left Actions */}
            <div className="flex items-center gap-x-9 text-navigation text-[15px]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-x-2.5 hover:text-white/80 transition-colors duration-200"
              >
                <MenuIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                <span className="hidden lg:inline">Menu</span>
              </button>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center gap-x-2.5 hover:text-white/80 transition-colors duration-200"
              >
                <SearchIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>

            {/* Centered Logo */}
            <Link href="/en" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Eclipsera Home">
              <span className={`${appearance === "dark" ? "text-white" : "text-black"} text-2xl tracking-[0.3em]`} style={{ fontFamily: 'bahnschrift semibold, sans-serif' }}>eclipsera</span>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-x-9 text-navigation text-[15px]">
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link href="/ecosystem" aria-label="Ecosystem Dashboard" className="flex items-center">
                  <GlobeIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link href="/about" aria-label="About Eclipsera" className="flex items-center">
                  <UserIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link href="/missions" aria-label="Featured Missions" className="flex items-center">
                  <RocketIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.92 }}>
                <Link href="https://stars.chromeexperiments.com/" target="_blank" aria-label="Chrome Experiments Stars" className="flex items-center">
                  <StarIcon className="h-[18px] w-[18px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Vertical Menu */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : -100
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className={`fixed top-0 left-0 h-full w-80 z-[10000] backdrop-blur-xl bg-black/30 border-r border-white/10 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-8 border-b border-white/10">
            <span className="text-white text-lg font-light tracking-[0.2em]" style={{ fontFamily: 'bahnschrift semibold, sans-serif' }}>
              ECLIPSERA 2K25
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-8">
            <div className="space-y-6">
              {[
                { label: 'Home', href: '/', description: 'Return to homepage' },
                { label: 'Missions', href: '/missions', description: 'Explore space missions' },
                { label: 'Ecosystem', href: '/ecosystem', description: 'Discover our ecosystem' },
                { label: 'Gallery', href: 'https://science.nasa.gov/mission/webb/multimedia/images/', description: 'NASA Webb telescope images' },
                { label: 'About', href: '/about', description: 'Learn about Eclipsera' },
                { label: 'Contact', href: '/contact', description: 'Get in touch' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isMenuOpen ? index * 0.1 : 0,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block py-4 px-6 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="text-white text-lg font-light tracking-wide group-hover:text-white/90 transition-colors duration-200">
                      {item.label}
                    </div>
                    <div className="text-white/50 text-sm mt-1 group-hover:text-white/70 transition-colors duration-200">
                      {item.description}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-8 border-t border-white/10">
            <div className="text-white/40 text-xs tracking-wider">
              © 2025 Eclipsera
            </div>
          </div>
        </div>
      </motion.div>

      {/* Professional Search Interface */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{
          opacity: isSearchOpen ? 1 : 0,
          y: isSearchOpen ? 0 : -60
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`fixed top-0 left-0 right-0 h-screen z-[10000] backdrop-blur-2xl bg-gradient-to-b from-black/10 via-black/5 to-transparent ${isSearchOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        style={{
          backdropFilter: 'blur(60px) saturate(200%)',
          WebkitBackdropFilter: 'blur(60px) saturate(200%)',
        }}
      >
        <div className="flex flex-col items-center justify-start pt-32 px-8">
          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isSearchOpen ? 1 : 0,
              scale: isSearchOpen ? 1 : 0.9
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-2xl relative"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Eclipsera 2K25"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white text-xl font-light tracking-wide placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500"
                autoFocus={isSearchOpen}
              />
              <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/40" />
            </div>
          </motion.div>

          {/* Search Suggestions */}
          {searchSuggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-full max-w-2xl mt-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            >
              {searchSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={suggestion.href}
                    onClick={() => handleSuggestionClick(suggestion.href)}
                    className="flex items-center justify-between px-8 py-4 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex flex-col">
                      <span className="text-white/90 text-lg font-light group-hover:text-white transition-colors duration-200">
                        {suggestion.title}
                      </span>
                      <span className="text-white/40 text-sm tracking-wide">
                        {suggestion.type}
                      </span>
                    </div>
                    <div className="text-white/30 group-hover:text-white/60 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Close Search */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isSearchOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
              setSearchSuggestions([]);
            }}
            className="mt-12 text-white/60 hover:text-white/90 transition-all duration-300 p-4 rounded-full hover:bg-white/5"
            aria-label="Close search"
          >
            <CloseIcon className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Menu Backdrop */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9999]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Search Backdrop */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/20 z-[9999]"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchQuery('');
            setSearchSuggestions([]);
          }}
        />
      )}
    </div>
  );
};

export default Header;