"use client";

import { useEffect, useRef } from "react";

export function useSmoothScroll(options?: { smooth?: number }) {
  const smootherRef = useRef<any>(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let destroyed = false;

    async function setup() {
      if (typeof window === "undefined") return;
      try {
        const { gsap } = await import("gsap");
        // @ts-expect-error ScrollSmoother may not be available in open-source gsap
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");
        // @ts-expect-error register plugin dynamically
        gsap.registerPlugin(ScrollSmoother);

        const wrapper = document.querySelector("#smooth-wrapper");
        const content = document.querySelector("#smooth-content");
        if (wrapper && content) {
          // @ts-expect-error plugin types optional
          smootherRef.current = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: options?.smooth ?? 1.2,
            effects: true,
          });
          return;
        }
      } catch (e) {
        // Fallback to Lenis
      }

      try {
        const { default: Lenis } = await import("@studio-freight/lenis");
        const lenis = new Lenis({
          duration: options?.smooth ?? 1.2,
          smoothWheel: true,
          smoothTouch: false,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
          if (destroyed) return;
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        // No-op if neither is available
      }
    }

    setup();
    return () => {
      destroyed = true;
      if (smootherRef.current?.kill) smootherRef.current.kill();
      if (lenisRef.current?.destroy) lenisRef.current.destroy();
      smootherRef.current = null;
      lenisRef.current = null;
    };
  }, [options?.smooth]);
}


