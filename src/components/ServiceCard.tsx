"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";

interface AnimatedServiceCardProps {
  index: number;
  title: string;
  subtitle: string;
  points: string[];
  accent: string;
  gradFrom: string;
  gradTo: string;
  tag: string;
  category: string;
  Illustration: React.FC;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({
  index,
  title,
  subtitle,
  points,
  accent,
  gradFrom,
  gradTo,
  tag,
  category,
  Illustration,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const isHovering = useRef(false);

  // ── SVG micro-animations on mount ──
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      // Animate ledger lines for Accounting card
      const ledgerLines = card.querySelectorAll(".ledger-line");
      const ledgerNums = card.querySelectorAll(".ledger-num");
      if (ledgerLines.length) {
        gsap.fromTo(
          ledgerLines,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
        gsap.fromTo(
          ledgerNums,
          { opacity: 0, x: 10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }

      // Animate bars for Accounting card
      const bars = card.querySelectorAll(".bar-1, .bar-2, .bar-3");
      if (bars.length) {
        gsap.fromTo(
          bars,
          { scaleY: 0, transformOrigin: "bottom center" },
          {
            scaleY: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }

      // Check mark draw
      const checkMark = card.querySelector(
        ".check-mark",
      ) as SVGPathElement | null;
      if (checkMark) {
        const length = checkMark.getTotalLength?.() ?? 24;
        gsap.set(checkMark, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(checkMark, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      }

      // Code lines for Software card
      const codeLines = card.querySelectorAll(".code-line");
      if (codeLines.length) {
        gsap.fromTo(
          codeLines,
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }

      // Cursor blink
      const cursor = card.querySelector(".cursor-blink");
      if (cursor) {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }

      // Gear spin
      const gear1 = card.querySelector(".gear-1");
      const gear2 = card.querySelector(".gear-2");
      if (gear1)
        gsap.to(gear1, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "none",
          transformOrigin: "135px 30px",
        });
      if (gear2)
        gsap.to(gear2, {
          rotation: -360,
          duration: 7,
          repeat: -1,
          ease: "none",
          transformOrigin: "148px 60px",
        });

      // Network node pulse
      const nodePulse = card.querySelector(".node-pulse");
      if (nodePulse) {
        gsap.to(nodePulse, {
          scale: 1.4,
          opacity: 0,
          duration: 1.8,
          repeat: -1,
          ease: "power1.out",
          transformOrigin: "80px 35px",
        });
      }

      // Trend line draw
      const trendLine = card.querySelector(
        ".trend-line",
      ) as SVGPathElement | null;
      if (trendLine) {
        const len = trendLine.getTotalLength?.() ?? 60;
        gsap.set(trendLine, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(trendLine, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  // ── 3D tilt on mouse move ──
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !glowRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxTilt = 12;
      const rotX = (-dy / (rect.height / 2)) * maxTilt;
      const rotY = (dx / (rect.width / 2)) * maxTilt;

      gsap.to(cardRef.current, {
        rotationX: rotX,
        rotationY: rotY,
        transformPerspective: 900,
        duration: 0.4,
        ease: "power2.out",
      });

      // Glow follows cursor
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;
      gsap.to(glowRef.current, {
        background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${accent}22 0%, transparent 65%)`,
        duration: 0.3,
      });
    },
    [accent],
  );

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(illustrationRef.current, {
      y: -6,
      duration: 0.5,
      ease: "power2.out",
    });
    if (listRef.current) {
      const items = listRef.current.querySelectorAll("li");
      gsap.fromTo(
        items,
        { x: -8, opacity: 0.5 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
      );
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(illustrationRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(glowRef.current, { background: "transparent", duration: 0.4 });
  }, []);

  const tagColors: Record<string, string> = {
    "Most Popular": "bg-blue-500/20 text-blue-300 border-blue-400/30",
    "High Demand": "bg-violet-500/20 text-violet-300 border-violet-400/30",
    New: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  };

  return (
    <div
      ref={cardRef}
      className="feature-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Glow layer ── */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-all duration-300"
      />

      {/* ── Top gradient accent bar ── */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradFrom} ${gradTo} opacity-60`}
      />

      {/* ── Header area ── */}
      <div className="relative z-10 flex flex-col gap-4 p-6 pb-0">
        {/* Category + Tag */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400/70">
            {category}
          </span>
          <span
            className={`rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[tag] ?? "bg-white/10 text-white/60"}`}
          >
            {tag}
          </span>
        </div>

        {/* Illustration */}
        <div
          ref={illustrationRef}
          className="h-36 w-full overflow-hidden rounded-xl"
        >
          <Illustration />
        </div>

        {/* Title block */}
        <div>
          <h3 className="text-xl font-extrabold text-white">{title}</h3>
          <p className="mt-1 text-sm font-medium text-blue-200/50">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className={`mx-6 my-4 h-px bg-gradient-to-r ${gradFrom} to-transparent opacity-20`}
      />

      {/* ── Feature list ── */}
      <ul
        ref={listRef}
        className="relative z-10 flex flex-1 flex-col gap-3 px-6 pb-6"
      >
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{
                background: `${accent}22`,
                border: `1px solid ${accent}55`,
              }}
            >
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4l3 3 5-6"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm font-medium leading-snug text-blue-100/70">
              {pt}
            </span>
          </li>
        ))}
      </ul>

      {/* ── CTA button ── */}
      <div className="relative z-10 px-6 pb-6">
        <Link href="/services" className="block">
          <button
            className={`w-full rounded-xl bg-gradient-to-r ${gradFrom} ${gradTo} py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl cursor-pointer`}
            style={{ boxShadow: `0 8px 24px ${accent}40` }}
          >
            Explore Service →
          </button>
        </Link>
      </div>

      {/* ── hover border glow ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
      />
    </div>
  );
};

export default AnimatedServiceCard;
