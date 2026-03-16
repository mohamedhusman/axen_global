"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsGridRef = useRef<HTMLDivElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<HTMLHeadingElement>(null);

  const benefits = [
    {
      title: "Automated Workflows",
      description:
        "Save countless hours by putting repetitive tasks on autopilot. Reclaim your team's time for strategic work.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-blue-500",
    },
    {
      title: "Smart Cost Control",
      description:
        "Reduce overhead and optimize spending with intelligent tracking built into every transaction.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-sky-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-sky-500",
    },
    {
      title: "Actionable Insights",
      description:
        "Make data-driven decisions confidently with real-time reporting and highly intuitive visual dashboards.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-indigo-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-indigo-500",
    },
    {
      title: "Bulletproof Compliance",
      description:
        "Build unshakeable trust through rigorous compliance frameworks and expert ongoing advisory.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-cyan-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "from-cyan-500",
    },
    {
      title: "Scalable Architecture",
      description:
        "Grow fearlessly. Our robust infrastructure is specifically designed to handle massive scale without a hiccup.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "from-violet-500",
    },
    {
      title: "Seamless Ecosystem",
      description:
        "Connect the dots perfectly. We integrate your distinct tools into one cohesive, lightning-fast platform.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-blue-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      color: "from-blue-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ziyath",
      role: "Founder, Local Retail",
      comment:
        "Solution Wings completely transformed how we handle inventory. Costs dropped 30% almost instantly. Truly stellar support from the team.",
      initials: "SZ",
      bg: "bg-blue-600",
    },
    {
      name: "Rushan Khan",
      role: "CEO, Tech Startup",
      comment:
        "The precision in their software solutions is unmatched. It’s exactly the reliable backbone our daily tech operations desperately needed.",
      initials: "RK",
      bg: "bg-indigo-600",
    },
    {
      name: "Isuru Perera",
      role: "SME Manager",
      comment:
        "Incredible financial clarity. Their advisory gave us a bulletproof plan for the next five years. We finally feel totally secure.",
      initials: "IP",
      bg: "bg-sky-600",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Operations",
      comment:
        "Implementing their systems wiped out our manual data entry overnight. The immediate ROI has been nothing short of phenomenal.",
      initials: "ER",
      bg: "bg-cyan-600",
    },
    {
      name: "David Chen",
      role: "E-comm Director",
      comment:
        "Remarkably intuitive! Our entire staff adopted this within days, skipping the usual month-long learning curves. Highest recommendation.",
      initials: "DC",
      bg: "bg-violet-600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Badge Entrance
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 2. Title Word-by-Word Reveal
      if (titleWordsRef.current) {
        const words = titleWordsRef.current.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 30, rotationX: -40 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      // 3. Benefits Grid Stagger + 3D subtle tilt effect setup
      if (benefitsGridRef.current) {
        const cards = benefitsGridRef.current.children;

        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: benefitsGridRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );

        // Add hover mouse-follow glow effect via JS instead of pure CSS for smoother feeling
        Array.from(cards).forEach((card: any) => {
          card.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          });
        });
      }

      // 4. Hyper-smooth Marquee Animation
      if (marqueeContainerRef.current) {
        const marqueeContent = marqueeContainerRef.current
          .firstElementChild as HTMLElement;
        if (marqueeContent) {
          // Clone twice to ensure no gap issues on ultra-wide screens
          const clone1 = marqueeContent.cloneNode(true);
          const clone2 = marqueeContent.cloneNode(true);
          marqueeContainerRef.current.appendChild(clone1);
          marqueeContainerRef.current.appendChild(clone2);

          const tween = gsap.to(marqueeContainerRef.current.children, {
            xPercent: -100,
            repeat: -1,
            duration: 50, // Moderate speed
            ease: "linear",
          });

          marqueeContainerRef.current.addEventListener("mouseenter", () => {
            gsap.to(tween, { timeScale: 0.2, duration: 0.5 });
          });
          marqueeContainerRef.current.addEventListener("mouseleave", () => {
            gsap.to(tween, { timeScale: 1, duration: 0.5 });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em] leading-tight">
        {word}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-linear-to-b from-[#001233] to-[#040A18] text-white"
    >
      {/* ── Background Decorative Elements ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400/20 rounded-full bg-blue-500/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-blue-300">
              The Benefits You Get
            </span>
          </div>
          <h2
            ref={titleWordsRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 tracking-tight max-w-4xl leading-tight"
            style={{ perspective: "800px" }}
          >
            {splitText("Transforming Your")}
            <span className="word inline-block mr-[0.3em] text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-400 to-indigo-400">
              Potential
            </span>
            {splitText("Into Performance")}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100/60 max-w-3xl font-light leading-relaxed">
            Stop letting outdated processes dictate your growth. Experience the
            raw power of expert financial strategy perfectly synchronized with
            cutting-edge technology.
          </p>
        </div>

        {/* ── Benefits Grid ── */}
        <div
          ref={benefitsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative h-full rounded-2xl bg-white/3 border border-white/5 p-6 sm:p-8 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/6 hover:border-white/10"
              style={{
                // Required for mouse-follow glow injected via JS
                // @ts-ignore
                "--mouse-x": "50%",
                // @ts-ignore
                "--mouse-y": "50%",
              }}
            >
              {/* Dynamic Mouse Hover Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)",
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out shadow-lg">
                  {benefit.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                  {benefit.title}
                </h3>

                <p className="text-blue-100/60 leading-relaxed text-sm sm:text-base font-light grow">
                  {benefit.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div
                  className={`h-1 w-0 group-hover:w-full bg-linear-to-r ${benefit.color} to-transparent absolute bottom-0 left-0 transition-all duration-500 ease-out`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Next-Level Marquee Testimonials ── */}
      <div className="relative w-full py-10 overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm z-10">
        <div className="text-center mb-10 px-4">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">
            Success Stories
          </h3>
          <p className="text-2xl md:text-3xl font-bold text-white">
            Join Hundreds of Thriving Businesses
          </p>
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-linear-to-r from-[#001233] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-linear-to-l from-[#040A18] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div
          ref={marqueeContainerRef}
          className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
        >
          <div className="flex shrink-0 gap-4 sm:gap-6 px-4 sm:px-6 hover:[animation-play-state:paused]">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[360px] md:w-[420px] whitespace-normal flex flex-col justify-between rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 p-6 sm:p-8 shrink-0 hover:border-blue-500/40 transition-colors duration-300"
              >
                <p className="text-base sm:text-lg text-blue-50/80 italic leading-relaxed mb-6 font-light">
                  "{t.comment}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div
                    className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-white font-bold tracking-wider ring-2 ring-white/10`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-400/80">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
