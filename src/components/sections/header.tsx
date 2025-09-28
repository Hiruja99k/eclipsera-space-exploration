"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Using a generic IconProps type for consistency
type IconProps = React.SVGProps<SVGSVGElement>;

const MenuIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <line y1="3.5" x2="16" y2="3.5" stroke="currentColor" strokeWidth="1"></line>
      <line y1="8.5" x2="16" y2="8.5" stroke="currentColor" strokeWidth="1"></line>
      <line y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="1"></line>
    </g>
  </svg>
);

const SearchIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M15.5 15.5L11.5 11.5" stroke="currentColor" strokeWidth="1"></path>
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1"></circle>
    </g>
  </svg>
);

const MoooiLogo = (props: IconProps) => (
  <svg viewBox="0 0 102 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title id="logoTitle">Logo Moooi</title>
    <g>
      <path d="M18.2325 9.07474C18.2325 14.0722 14.1554 18.0747 9.11623 18.0747C4.07709 18.0747 0 14.0722 0 9.07474C0 4.0773 4.07709 0.0747375 9.11623 0.0747375C14.1554 0.0747375 18.2325 4.0773 18.2325 9.07474ZM4.49987 9.07474C4.49987 11.5833 6.55171 13.5936 9.11623 13.5936C11.6808 13.5936 13.7326 11.5833 13.7326 9.07474C13.7326 6.56619 11.6808 4.5559 9.11623 4.5559C6.55171 4.5559 4.49987 6.56619 4.49987 9.07474Z"></path>
      <path d="M41.7219 9.07474C41.7219 14.0722 37.6448 18.0747 32.6056 18.0747C27.5665 18.0747 23.4894 14.0722 23.4894 9.07474C23.4894 4.0773 27.5665 0.0747375 32.6056 0.0747375C37.6448 0.0747375 41.7219 4.0773 41.7219 9.07474ZM27.9892 9.07474C27.9892 11.5833 30.0411 13.5936 32.6056 13.5936C35.1702 13.5936 37.222 11.5833 37.222 9.07474C37.222 6.56619 35.1702 4.5559 32.6056 4.5559C30.0411 4.5559 27.9892 6.56619 27.9892 9.07474Z"></path>
      <path d="M65.4124 9.07474C65.4124 14.0722 61.3353 18.0747 56.2962 18.0747C51.257 18.0747 47.1799 14.0722 47.1799 9.07474C47.1799 4.0773 51.257 0.0747375 56.2962 0.0747375C61.3353 0.0747375 65.4124 4.0773 65.4124 9.07474ZM51.6797 9.07474C51.6797 11.5833 53.7316 13.5936 56.2962 13.5936C58.8607 13.5936 60.9125 11.5833 60.9125 9.07474C60.9125 6.56619 58.8607 4.5559 56.2962 4.5559C53.7316 4.5559 51.6797 6.56619 51.6797 9.07474Z"></path>
      <path d="M69.0967 0.760254H73.8584V17.3893H69.0967V0.760254Z"></path>
      <path d="M77.7295 0.760254H82.4912V17.3893H77.7295V0.760254Z"></path>
      <path d="M102 9.07474C102 14.0722 97.9229 18.0747 92.8838 18.0747C87.8446 18.0747 83.7675 14.0722 83.7675 9.07474C83.7675 4.0773 87.8446 0.0747375 92.8838 0.0747375C97.9229 0.0747375 102 4.0773 102 9.07474ZM88.2673 9.07474C88.2673 11.5833 90.3192 13.5936 92.8838 13.5936C95.4483 13.5936 97.5 11.5833 97.5 9.07474C97.5 6.56619 95.4483 4.5559 92.8838 4.5559C90.3192 4.5559 88.2673 6.56619 88.2673 9.07474Z"></path>
      <path d="M51.996 9.07474C51.996 9.62002 52.4419 10.0659 52.9872 10.0659C53.5325 10.0659 53.9784 9.62002 53.9784 9.07474C53.9784 8.52946 53.5325 8.08358 52.9872 8.08358C52.4419 8.08358 51.996 8.52946 51.996 9.07474Z"></path>
      <path d="M37.538 9.07474C37.538 9.62002 37.9839 10.0659 38.5292 10.0659C39.0745 10.0659 39.5204 9.62002 39.5204 9.07474C39.5204 8.52946 39.0745 8.08358 38.5292 8.08358C37.9839 8.08358 37.538 8.52946 37.538 9.07474Z"></path>
    </g>
  </svg>
);

const UserIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M1,15.5 C1,13.5 3.5,12.5 8,12.5 C12.5,12.5 15,13.5 15,15.5" stroke="currentColor" strokeWidth="1" />
      <path d="M8,9.5 C10,9.5 11.5,8 11.5,6 C11.5,4 10,2.5 8,2.5 C6,2.5 4.5,4 4.5,6 C4.5,8 6,9.5 8,9.5 Z" stroke="currentColor" strokeWidth="1"/>
    </g>
  </svg>
);

const HeartIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.57143 8.5L8 14.5L13.4286 8.5C14.7143 7 14.7143 5.4 13.4286 4C12.1429 2.6 10.2857 2.6 9.14286 4L8 5.5L6.85714 4C5.71429 2.6 3.85714 2.6 2.57143 4C1.28571 5.4 1.28571 7 2.57143 8.5Z" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const ShoppingBagIcon = (props: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
    <g>
      <path d="M14.5 5.5V14.5H1.5V5.5" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"></path>
      <path d="M11 7.5C11 5.84315 9.65685 4.5 8 4.5C6.34315 4.5 5 5.84315 5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
);

const ChevronDownIcon = (props: IconProps) => (
  <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1"></path>
  </svg>
);

const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

interface HeaderProps {
  onOpenCountrySelector?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCountrySelector }) => {
  const [isPromoVisible, setIsPromoVisible] = React.useState(false);

  return (
    <div className="bg-transparent">
      {/* Promotional Banner */}
      {isPromoVisible && (
        <div className="relative flex items-center justify-center bg-[#3a2e25] text-white/90">
          <Link href="/en/collection" className="text-center text-xs tracking-wider py-3 px-10 group">
            <span className="border-b border-transparent group-hover:border-white/90 transition-colors duration-300 pb-px">
              DISCOVER OUR LIGHTING AND FURNITURE COLLECTION TODAY!
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
      <header role="banner" id="header" className="fixed top-0 left-0 right-0 z-[9999] bg-black/70 backdrop-blur-sm text-white transition-transform duration-300">
        <div className="mx-auto h-20 px-6 lg:px-[80px]">
          <div className="relative flex h-full items-center justify-between">
            {/* Left Actions */}
            <div className="flex items-center gap-x-8 text-navigation">
              <button className="flex items-center gap-x-2.5">
                <MenuIcon className="h-4 w-4" />
                <span className="hidden lg:inline">Menu</span>
              </button>
              <button className="flex items-center gap-x-2.5">
                <SearchIcon className="h-4 w-4" />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>

            {/* Centered Logo */}
            <Link href="/en" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Moooi Home">
              <MoooiLogo className="h-[18px] w-auto text-white" />
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-x-8 text-navigation">
              <button className="flex items-center gap-x-1.5" onClick={onOpenCountrySelector}>
                <span>EN</span>
                <ChevronDownIcon className="h-2 w-2" />
              </button>
              <button aria-label="Account">
                <UserIcon className="h-4 w-4" />
              </button>
              <button aria-label="Mood boards">
                <HeartIcon className="h-4 w-4" />
              </button>
              <Link href="/en/bag" aria-label="Empty shopping bag">
                  <ShoppingBagIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;