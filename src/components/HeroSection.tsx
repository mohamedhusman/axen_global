"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const HeroSection = () => {
  const headerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, { y: 30, opacity: 0, duration: 1 })
        .from(subtextRef.current, { y: 20, opacity: 0, duration: 1 }, "-=0.8")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 1 }, "-=0.8");
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#001233] text-white lg:pb-5"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center grow text-center px-6 pt-24">
        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-500/5 backdrop-blur-sm">
          <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase text-blue-300">
            NEXT‑GEN BUSINESS SOLUTIONS
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight max-w-5xl"
        >
          Solutions{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            That Empower Growth
          </span>{" "}
          {/* Through Tech */}
        </h1>

        <p
          ref={subtextRef}
          className="text-lg md:text-2xl text-blue-100/80 mb-12 max-w-2xl font-light leading-relaxed"
        >
          We deliver smart systems and innovative support, giving your business
          the wings to thrive.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-white text-[#001233] font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">
              Get Started
            </span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            Discover Solutions
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#001233] to-transparent z-0" />
    </header>
  );
};

export default HeroSection;
