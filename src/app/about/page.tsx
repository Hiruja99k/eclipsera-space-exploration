"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";

export default function AboutPage() {
  useSmoothScroll({ smooth: 1.1 });

  return (
    <div id="smooth-wrapper">
      <main id="smooth-content" className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
          </div>

          {/* Back Button */}
          <div className="absolute top-8 left-8 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/80 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                aria-label="Back to home"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-xs tracking-[0.3em] text-white/50 mb-6">ASPECT 2025</div>
              <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.2em] mb-8">
                ECLIPSERA
              </h1>
              <div className="w-24 h-px bg-white/30 mx-auto mb-8" />
              <p className="text-xl md:text-2xl font-extralight tracking-wide text-white/70 leading-relaxed">
                A Journey Through Space Aspects
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs tracking-[0.2em]">SCROLL</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Project Overview Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.15em] mb-12 text-center">
                The Project
              </h2>
              <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/80">
                <p>
                  Eclipsera is a web development project created for ASPECT 2025, an intra-school ICT competition at Bandaranayake College, Gampaha. Built under the theme "Space Aspects," this platform explores the fascinating realm of space exploration and astronomy.
                </p>
                <p>
                  The project showcases cutting-edge space missions, from SpaceX's revolutionary Starship program to NASA's Artemis missions and the James Webb Space Telescope. Through an immersive, minimalistic design, Eclipsera brings the wonders of the cosmos to life.
                </p>
                <p>
                  This platform demonstrates how modern web technologies can create engaging educational experiences, making complex space concepts accessible and inspiring to everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-black via-gray-900/30 to-black">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.15em] mb-12 text-center">
                The Developer
              </h2>
              <div className="text-center mb-12">
                <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-12 py-16 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-4">
                    K.G. Hiruja Kulasiriwardana
                  </h3>
                  <div className="w-16 h-px bg-white/30 mx-auto mb-6" />
                  <p className="text-lg text-white/70 font-light tracking-wide mb-2">
                    Grade 10 Secondary School Student
                  </p>
                  <p className="text-base text-white/60 font-light tracking-wide">
                    Bandaranayake College, Gampaha
                  </p>
                </div>
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed text-white/80 text-center max-w-3xl mx-auto">
                <p>
                  As a passionate student developer, I created Eclipsera to combine my interests in technology, design, and space exploration. This project represents countless hours of learning, coding, and refining to create an experience that is both educational and visually captivating.
                </p>
                <p>
                  Through this journey, I've explored modern web development technologies, user experience design, and the art of presenting complex information in an accessible, elegant manner.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.15em] mb-16 text-center">
                Philosophy
              </h2>
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-extralight tracking-wide text-white/60 leading-relaxed italic mb-8">
                    "We are made of star stuff. We are a way for the universe to know itself."
                  </p>
                  <p className="text-sm tracking-[0.2em] text-white/40">— CARL SAGAN</p>
                </motion.div>

                <div className="w-32 h-px bg-white/20 mx-auto my-12" />

                <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/70">
                  <p>
                    Space is not just a physical frontier—it is a mirror reflecting humanity's deepest questions about existence, purpose, and our place in the cosmos. Every star we observe, every planet we discover, brings us closer to understanding not just the universe, but ourselves.
                  </p>
                  <p>
                    Eclipsera embodies the belief that knowledge should transcend boundaries. In an age where technology connects us across continents, why should the wonders of space remain distant? Through design, code, and creativity, we bridge the gap between the infinite cosmos and curious minds.
                  </p>
                  <p>
                    This project is more than a website—it's a testament to human curiosity, the drive to explore, and the courage to dream beyond our world. It represents the idea that even a single student can contribute to humanity's collective journey toward the stars.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Competition Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.15em] mb-12">
                ASPECT 2025
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8">
                This project was developed for ASPECT 2025, an intra-school ICT competition organized by the Computer Society of Bandaranayake College, Gampaha. Competing in the Web Development category under the theme "Space Aspects," Eclipsera represents the intersection of technology, creativity, and cosmic exploration.
              </p>

              <div className="my-16 space-y-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12" />
                  <p className="text-xl md:text-2xl font-extralight tracking-wide text-white/50 leading-relaxed max-w-3xl mx-auto">
                    In the vast expanse of digital creation, this project stands as a bridge between human imagination and cosmic reality—a testament to what emerges when curiosity meets dedication.
                  </p>
                  <div className="w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-12" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="flex flex-col items-center gap-6"
                >
                  <Link
                    href="https://aspect.bccs.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/70 transition-colors duration-500 text-sm tracking-[0.2em] underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                  >
                    ASPECT 2025 COMPETITION
                  </Link>
                  <Link
                    href="https://www.bccs.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/70 transition-colors duration-500 text-sm tracking-[0.2em] underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                  >
                    COMPUTER SOCIETY OF BANDARANAYAKE COLLEGE
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-t from-black via-gray-900/50 to-black">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <h2 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] mb-12">
                  The Journey Continues
                </h2>
              </motion.div>

              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12" />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="space-y-8 mb-16"
              >
                <p className="text-xl md:text-2xl font-extralight tracking-wide text-white/60 leading-relaxed italic">
                  "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/50 max-w-3xl mx-auto">
                  Every mission explored, every image witnessed, every discovery shared—these are not mere data points, but chapters in humanity's eternal quest to understand our place among the stars.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <Link
                    href="/missions"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 block px-12 py-4 text-white/70 font-extralight tracking-[0.15em] text-sm transition-colors duration-500 group-hover:text-white">
                      EXPLORE MISSIONS
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-white/40 transition-all duration-500" />
                  </Link>

                  <div className="w-px h-8 bg-white/10 hidden sm:block" />

                  <Link
                    href="/"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 block px-12 py-4 text-white/70 font-extralight tracking-[0.15em] text-sm transition-colors duration-500 group-hover:text-white">
                      RETURN HOME
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-white/40 transition-all duration-500" />
                  </Link>
                </div>

                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-8"
                >
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative w-full py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center space-y-3">
            <p className="text-white/40 text-sm tracking-[0.2em] font-light">
              ECLIPSERA — ASPECT 2025
            </p>
            <p className="text-white/30 text-xs tracking-[0.15em] font-light">
              Developed by K.G. Hiruja Kulasiriwardana
            </p>
            <p className="text-white/25 text-xs tracking-[0.15em] font-light">
              Bandaranayake College, Gampaha
            </p>
            <p className="text-white/20 text-xs tracking-[0.15em] font-light mt-4">
              Organized by Computer Society of Bandaranayake College
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
