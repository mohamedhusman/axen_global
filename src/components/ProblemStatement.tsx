"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProblemStatement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrance animation for the whole section
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // SVG bridging animation
      if (svgRef.current) {
        const gapLines = svgRef.current.querySelectorAll(".gap-line");
        const bridge = svgRef.current.querySelector(".bridge-rect");

        gsap.from(gapLines, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
          scaleX: 0,
          opacity: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "expo.out",
        });

        gsap.from(bridge, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
          },
          scaleY: 0,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative bg-white py-24 lg:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="space-y-8">
          <div className="inline-flex items-center gap-1 px-4 py-2 border border-blue-900/10 rounded-full bg-blue-50">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">
              The Critical Gap
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1] tracking-tight">
            The Hidden Challenge <br />
            <span className="text-blue-600">Holding SMEs Back</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              Most small and medium enterprises struggle with two critical,
              disconnected gaps:
              <span className="font-semibold text-blue-900">
                {" "}
                Traditional Finance
              </span>{" "}
              versus
              <span className="font-semibold text-blue-600">
                {" "}
                Modern Technology.
              </span>
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Without a bridge between these worlds, businesses lose vital time,
              hemorrhage operational costs, and miss out on strategic growth
              opportunities. The manual overhead of outdated accounting combined
              with fragmented software creates a ceiling for your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-blue-900 mb-2">
                Operational Friction
              </h4>
              <p className="text-sm text-slate-500">
                Manual processes that slow down your team and introduce errors.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">
                Growth Stagnation
              </h4>
              <p className="text-sm text-slate-500">
                Locked data and lack of insights preventing scalable decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Illustration */}
        <div
          ref={imageRef}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-blue-50/50 rounded-[40px] transform rotate-3" />
          <div className="relative z-10 w-full h-full bg-white rounded-[40px] border border-blue-100 shadow-2xl shadow-blue-900/10 p-8 flex items-center justify-center overflow-hidden">
            <svg
              ref={svgRef}
              viewBox="0 0 400 400"
              className="w-full h-full max-w-[320px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract Gap Representation */}
              <rect
                className="gap-line"
                x="40"
                y="100"
                width="120"
                height="8"
                rx="4"
                fill="#1e3a8a"
                opacity="0.8"
              />
              <rect
                className="gap-line"
                x="40"
                y="130"
                width="100"
                height="8"
                rx="4"
                fill="#1e3a8a"
                opacity="0.6"
              />
              <rect
                className="gap-line"
                x="40"
                y="160"
                width="140"
                height="8"
                rx="4"
                fill="#1e3a8a"
                opacity="0.4"
              />

              <rect
                className="gap-line"
                x="240"
                y="240"
                width="120"
                height="8"
                rx="4"
                fill="#2563eb"
                opacity="0.8"
              />
              <rect
                className="gap-line"
                x="260"
                y="270"
                width="100"
                height="8"
                rx="4"
                fill="#2563eb"
                opacity="0.6"
              />
              <rect
                className="gap-line"
                x="220"
                y="300"
                width="140"
                height="8"
                rx="4"
                fill="#2563eb"
                opacity="0.4"
              />

              {/* The "Bridge" element that animates in */}
              <rect
                className="bridge-rect"
                x="192"
                y="80"
                width="16"
                height="240"
                rx="8"
                fill="url(#paint0_linear)"
                style={{ transformOrigin: "center" }}
              />

              <circle
                cx="200"
                cy="80"
                r="12"
                fill="#1e3a8a"
                className="bridge-rect"
              />
              <circle
                cx="200"
                cy="320"
                r="12"
                fill="#2563eb"
                className="bridge-rect"
              />

              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="200"
                  y1="80"
                  x2="200"
                  y2="320"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1e3a8a" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>

            {/* Decorative Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100/40 rounded-full blur-xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-50/60 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
