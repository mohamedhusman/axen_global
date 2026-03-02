"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── Step SVG Illustrations ──────────────────────────────────────────────────

const ConsultationSVG = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Chat bubble 1 */}
    <rect
      x="8"
      y="14"
      width="38"
      height="24"
      rx="8"
      fill="#1e40af"
      opacity="0.3"
      className="bubble-1"
    />
    <rect
      x="10"
      y="16"
      width="34"
      height="20"
      rx="6"
      fill="#2563eb"
      opacity="0.25"
    />
    <rect
      x="16"
      y="22"
      width="18"
      height="2.5"
      rx="1.25"
      fill="#60a5fa"
      opacity="0.8"
      className="chat-line"
    />
    <rect
      x="16"
      y="27"
      width="12"
      height="2.5"
      rx="1.25"
      fill="#93c5fd"
      opacity="0.6"
      className="chat-line"
    />
    <polygon points="16,38 10,44 22,44" fill="#1e40af" opacity="0.3" />
    {/* Chat bubble 2 */}
    <rect
      x="34"
      y="42"
      width="38"
      height="24"
      rx="8"
      fill="#1d4ed8"
      opacity="0.3"
      className="bubble-2"
    />
    <rect
      x="36"
      y="44"
      width="34"
      height="20"
      rx="6"
      fill="#3b82f6"
      opacity="0.2"
    />
    <rect
      x="42"
      y="50"
      width="20"
      height="2.5"
      rx="1.25"
      fill="#bfdbfe"
      opacity="0.7"
      className="chat-line"
    />
    <rect
      x="42"
      y="56"
      width="14"
      height="2.5"
      rx="1.25"
      fill="#93c5fd"
      opacity="0.5"
      className="chat-line"
    />
    <polygon points="56,66 50,72 62,72" fill="#1d4ed8" opacity="0.3" />
    {/* Person icon */}
    <circle
      cx="62"
      cy="22"
      r="7"
      fill="#1e3a8a"
      opacity="0.4"
      className="person-head"
    />
    <circle cx="62" cy="22" r="4" fill="#3b82f6" opacity="0.5" />
    <path
      d="M55 36c0-4 3-6 7-6s7 2 7 6"
      stroke="#60a5fa"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
      className="person-body"
    />
  </svg>
);

const PlanSVG = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Blueprint background */}
    <rect
      x="8"
      y="8"
      width="64"
      height="64"
      rx="6"
      fill="#1e3a8a"
      opacity="0.15"
    />
    {/* Grid lines */}
    {[20, 32, 44, 56, 68].map((x, i) => (
      <line
        key={`v${i}`}
        x1={x}
        y1="8"
        x2={x}
        y2="72"
        stroke="#3b82f6"
        strokeWidth="0.5"
        opacity="0.15"
      />
    ))}
    {[20, 32, 44, 56, 68].map((y, i) => (
      <line
        key={`h${i}`}
        x1="8"
        y1={y}
        x2="72"
        y2={y}
        stroke="#3b82f6"
        strokeWidth="0.5"
        opacity="0.15"
      />
    ))}
    {/* Chart bars */}
    <rect
      x="18"
      y="52"
      width="8"
      height="14"
      rx="2"
      fill="#2563eb"
      opacity="0.5"
      className="plan-bar"
    />
    <rect
      x="30"
      y="40"
      width="8"
      height="26"
      rx="2"
      fill="#3b82f6"
      opacity="0.6"
      className="plan-bar"
    />
    <rect
      x="42"
      y="30"
      width="8"
      height="36"
      rx="2"
      fill="#60a5fa"
      opacity="0.7"
      className="plan-bar"
    />
    <rect
      x="54"
      y="20"
      width="8"
      height="46"
      rx="2"
      fill="#93c5fd"
      opacity="0.6"
      className="plan-bar"
    />
    {/* Trend line */}
    <path
      d="M22 52 L34 40 L46 30 L58 20"
      stroke="#34d399"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
      className="plan-trend"
    />
    <circle cx="22" cy="52" r="3" fill="#34d399" opacity="0.8" />
    <circle cx="34" cy="40" r="3" fill="#34d399" opacity="0.8" />
    <circle cx="46" cy="30" r="3" fill="#34d399" opacity="0.8" />
    <circle cx="58" cy="20" r="3" fill="#34d399" opacity="0.8" />
    {/* Pencil */}
    <rect
      x="58"
      y="54"
      width="6"
      height="14"
      rx="1.5"
      fill="#fbbf24"
      opacity="0.7"
      transform="rotate(-30 61 61)"
      className="pencil"
    />
    <polygon
      points="54,68 57,75 60,68"
      fill="#f59e0b"
      opacity="0.8"
      transform="rotate(-30 57 70)"
    />
  </svg>
);

const ImplementSVG = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Monitor */}
    <rect
      x="8"
      y="12"
      width="52"
      height="38"
      rx="5"
      fill="#1e3a8a"
      opacity="0.2"
    />
    <rect
      x="10"
      y="14"
      width="48"
      height="34"
      rx="4"
      fill="#0f172a"
      opacity="0.7"
    />
    {/* Terminal code */}
    <rect
      x="15"
      y="20"
      width="6"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.8"
      className="impl-line"
    />
    <rect
      x="23"
      y="20"
      width="22"
      height="3"
      rx="1.5"
      fill="#60a5fa"
      opacity="0.8"
      className="impl-line"
    />
    <rect
      x="18"
      y="27"
      width="18"
      height="3"
      rx="1.5"
      fill="#f472b6"
      opacity="0.7"
      className="impl-line"
    />
    <rect
      x="22"
      y="34"
      width="26"
      height="3"
      rx="1.5"
      fill="#fbbf24"
      opacity="0.7"
      className="impl-line"
    />
    <rect
      x="15"
      y="41"
      width="14"
      height="3"
      rx="1.5"
      fill="#a78bfa"
      opacity="0.8"
      className="impl-line"
    />
    {/* Cursor */}
    <rect
      x="31"
      y="41"
      width="2"
      height="10"
      rx="1"
      fill="#60a5fa"
      className="impl-cursor"
    />
    {/* Monitor base */}
    <rect
      x="30"
      y="50"
      width="8"
      height="4"
      rx="1"
      fill="#1e3a8a"
      opacity="0.3"
    />
    <rect
      x="24"
      y="54"
      width="20"
      height="3"
      rx="1.5"
      fill="#1e3a8a"
      opacity="0.2"
    />
    {/* Gears floating right */}
    <circle
      cx="68"
      cy="22"
      r="8"
      stroke="#3b82f6"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      opacity="0.5"
      className="impl-gear-1"
    />
    <circle cx="68" cy="22" r="3" fill="#3b82f6" opacity="0.4" />
    <circle
      cx="68"
      cy="40"
      r="5"
      stroke="#60a5fa"
      strokeWidth="1"
      strokeDasharray="3 2"
      opacity="0.4"
      className="impl-gear-2"
    />
    <circle cx="68" cy="40" r="2" fill="#60a5fa" opacity="0.4" />
    {/* People/training dots */}
    <circle cx="62" cy="62" r="4" fill="#1e40af" opacity="0.4" />
    <circle cx="73" cy="62" r="4" fill="#1d4ed8" opacity="0.4" />
    <circle
      cx="67"
      cy="56"
      r="4"
      fill="#2563eb"
      opacity="0.5"
      className="impl-person"
    />
  </svg>
);

const GrowthSVG = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Rocket */}
    <path
      d="M40 10 C40 10 52 20 52 38 L40 50 L28 38 C28 20 40 10 40 10Z"
      fill="#1e40af"
      opacity="0.3"
      className="rocket-body"
    />
    <path
      d="M40 14 C40 14 50 22 50 36 L40 46 L30 36 C30 22 40 14 40 14Z"
      fill="#2563eb"
      opacity="0.4"
    />
    <circle
      cx="40"
      cy="32"
      r="6"
      fill="#60a5fa"
      opacity="0.6"
      className="rocket-window"
    />
    <circle cx="40" cy="32" r="3" fill="#bfdbfe" opacity="0.5" />
    {/* Fins */}
    <path d="M28 38 L18 52 L28 48Z" fill="#1e3a8a" opacity="0.4" />
    <path d="M52 38 L62 52 L52 48Z" fill="#1e3a8a" opacity="0.4" />
    {/* Flame */}
    <ellipse
      cx="40"
      cy="53"
      rx="5"
      ry="8"
      fill="#f59e0b"
      opacity="0.5"
      className="rocket-flame"
    />
    <ellipse cx="40" cy="55" rx="3" ry="5" fill="#fbbf24" opacity="0.7" />
    <ellipse cx="40" cy="56" rx="1.5" ry="3" fill="#fde68a" opacity="0.9" />
    {/* Stars / sparkles */}
    <circle
      cx="18"
      cy="18"
      r="1.5"
      fill="#fbbf24"
      opacity="0.6"
      className="star-1"
    />
    <circle
      cx="64"
      cy="14"
      r="1"
      fill="#60a5fa"
      opacity="0.7"
      className="star-2"
    />
    <circle
      cx="72"
      cy="30"
      r="1.5"
      fill="#34d399"
      opacity="0.6"
      className="star-3"
    />
    <circle
      cx="10"
      cy="36"
      r="1"
      fill="#a78bfa"
      opacity="0.7"
      className="star-4"
    />
    <circle
      cx="70"
      cy="58"
      r="1.5"
      fill="#fbbf24"
      opacity="0.5"
      className="star-5"
    />
    <circle
      cx="14"
      cy="60"
      r="1"
      fill="#60a5fa"
      opacity="0.6"
      className="star-6"
    />
    {/* Upward arrow */}
    <path
      d="M62 70 L74 58"
      stroke="#34d399"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      className="growth-arrow"
    />
    <polygon points="74,53 78,60 71,60" fill="#34d399" opacity="0.7" />
  </svg>
);

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Understanding your vision",
    description:
      "We start with a deep dive into your business landscape goals, pain points, and growth ambitions to craft a clear roadmap.",
    accent: "#3b82f6",
    gradFrom: "from-blue-600",
    gradTo: "to-indigo-700",
    tags: ["Discovery Call", "Needs Analysis"],
    Icon: ConsultationSVG,
  },
  {
    number: "02",
    title: "Tailored Plan",
    subtitle: "Designing your solution",
    description:
      "We architect accounting and software solutions precisely calibrated to your industry, scale, and strategic objectives.",
    accent: "#6366f1",
    gradFrom: "from-indigo-600",
    gradTo: "to-violet-700",
    tags: ["Strategy", "Blueprint"],
    Icon: PlanSVG,
  },
  {
    number: "03",
    title: "Implementation",
    subtitle: "Deploying with precision",
    description:
      "We deploy, integrate, and configure your systems, then train your team so they hit the ground running from day one.",
    accent: "#0ea5e9",
    gradFrom: "from-sky-500",
    gradTo: "to-blue-700",
    tags: ["Setup", "Training"],
    Icon: ImplementSVG,
  },
  {
    number: "04",
    title: "Growth",
    subtitle: "Scaling without limits",
    description:
      "With robust processes in place, you focus on scaling. We monitor, optimize, and evolve your systems as your business grows.",
    accent: "#34d399",
    gradFrom: "from-emerald-500",
    gradTo: "to-teal-600",
    tags: ["Optimization", "Scale"],
    Icon: GrowthSVG,
  },
];

// ─── Step Card ────────────────────────────────────────────────────────────────

interface StepCardProps {
  step: (typeof steps)[0];
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // SVG micro-animations on scroll
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      // Animate plan bars
      const planBars = card.querySelectorAll(".plan-bar");
      if (planBars.length) {
        gsap.fromTo(
          planBars,
          { scaleY: 0, transformOrigin: "bottom center" },
          {
            scaleY: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }
      // Plan trend line draw
      const planTrend = card.querySelector(
        ".plan-trend",
      ) as SVGPathElement | null;
      if (planTrend) {
        const len = planTrend.getTotalLength?.() ?? 50;
        gsap.set(planTrend, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(planTrend, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      }
      // Animate impl code lines
      const implLines = card.querySelectorAll(".impl-line");
      if (implLines.length) {
        gsap.fromTo(
          implLines,
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }
      // Cursor blink
      const cursor = card.querySelector(".impl-cursor");
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
      const gear1 = card.querySelector(".impl-gear-1");
      const gear2 = card.querySelector(".impl-gear-2");
      if (gear1)
        gsap.to(gear1, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "none",
          transformOrigin: "68px 22px",
        });
      if (gear2)
        gsap.to(gear2, {
          rotation: -360,
          duration: 7,
          repeat: -1,
          ease: "none",
          transformOrigin: "68px 40px",
        });
      // Rocket flame flicker
      const flame = card.querySelector(".rocket-flame");
      if (flame) {
        gsap.to(flame, {
          scaleX: 1.3,
          scaleY: 1.2,
          opacity: 0.8,
          duration: 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "40px 53px",
        });
      }
      // Stars twinkle
      const stars = card.querySelectorAll(
        ".star-1,.star-2,.star-3,.star-4,.star-5,.star-6",
      );
      stars.forEach((s, i) => {
        gsap.to(s, {
          opacity: 0,
          scale: 0.5,
          duration: 0.4 + i * 0.15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
          transformOrigin: "center",
        });
      });
      // Growth arrow draw
      const arrow = card.querySelector(
        ".growth-arrow",
      ) as SVGPathElement | null;
      if (arrow) {
        const len = arrow.getTotalLength?.() ?? 20;
        gsap.set(arrow, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(arrow, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      }
      // Chat bubbles entrance
      const bubbles = card.querySelectorAll(".bubble-1,.bubble-2");
      if (bubbles.length) {
        gsap.fromTo(
          bubbles,
          { scale: 0.7, opacity: 0, transformOrigin: "left bottom" },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      }
    }, cardRef);
    return () => ctx.revert();
  }, []);

  // 3D tilt
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !glowRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxTilt = 10;
      gsap.to(cardRef.current, {
        rotationX: (-dy / (rect.height / 2)) * maxTilt,
        rotationY: (dx / (rect.width / 2)) * maxTilt,
        transformPerspective: 900,
        duration: 0.4,
        ease: "power2.out",
      });
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      gsap.to(glowRef.current, {
        background: `radial-gradient(circle at ${gx}% ${gy}%, ${step.accent}22 0%, transparent 65%)`,
        duration: 0.3,
      });
    },
    [step.accent],
  );

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(glowRef.current, { background: "transparent", duration: 0.4 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.to(cardRef.current, {
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(iconRef.current, { y: -5, duration: 0.4, ease: "power2.out" });
  }, []);

  return (
    <div
      ref={cardRef}
      className="step-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
      />

      {/* Accent top bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.gradFrom} ${step.gradTo} opacity-70`}
      />

      {/* Number badge (top-right) */}
      <div
        className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black tracking-tight"
        style={{
          background: `${step.accent}18`,
          border: `1.5px solid ${step.accent}40`,
          color: step.accent,
        }}
      >
        {step.number}
      </div>

      {/* Icon illustration */}
      <div
        ref={iconRef}
        className="relative z-10 mx-6 mt-6 h-20 w-20 overflow-hidden"
      >
        <step.Icon />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-6 pt-4">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: step.accent }}
          >
            {step.subtitle}
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-white leading-tight">
            {step.title}
          </h3>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r ${step.gradFrom} to-transparent opacity-20`}
        />

        <p className="text-sm font-medium leading-relaxed text-blue-100/60">
          {step.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {step.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
              style={{
                background: `${step.accent}15`,
                border: `1px solid ${step.accent}35`,
                color: step.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${step.accent}40` }}
      />
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Floating orbs ──
      gsap.to(orb1Ref.current, {
        x: 50,
        y: -35,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2Ref.current, {
        x: -40,
        y: 45,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // ── Section entrance timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
      )
        .fromTo(
          headlineRef.current?.querySelectorAll(".hiw-word") ?? [],
          { opacity: 0, y: 40, rotationX: -30 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.3",
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4",
        );

      // ── SVG connector path draw ──
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength?.() ?? 400;
        gsap.set(pathRef.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── Cards staggered entrance ──
      if (cardsRef.current) {
        const cards =
          cardsRef.current.querySelectorAll<HTMLElement>(".step-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 70, scale: 0.93, rotationY: -8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.18,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // ── CTA entrance ──
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="hiw-word inline-block mr-[0.28em]"
        style={{ perspective: "800px" }}
      >
        {word}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1535] via-[#060d1f] to-[#081029] py-28 lg:py-36"
    >
      {/* ── Background Orbs ── */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-[130px]"
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute bottom-0 -left-20 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      {/* ── Grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Badge ── */}
        <div ref={badgeRef} className="mb-6 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-ping rounded-full bg-blue-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Process
            </span>
          </div>
        </div>

        {/* ── Headline ── */}
        <h2
          ref={headlineRef}
          className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          {splitWords("From Hello to")}
          <span className="hiw-word inline-block mr-[0.28em] bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            High-Growth
          </span>
          {splitWords("Business")}
        </h2>

        <p
          ref={subtitleRef}
          className="mb-20 max-w-2xl text-lg font-light leading-relaxed text-blue-100/60"
        >
          Four seamless phases engineered to transform your operations. from the
          first conversation to sustained, measurable growth.
        </p>

        {/* ── Cards with SVG connector ── */}
        <div className="relative">
          {/* Animated SVG connector (desktop only) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: "50px", left: 0 }}
            >
              <path
                ref={pathRef}
                d="M 130 60 C 200 60, 280 130, 370 130 C 460 130, 500 60, 590 60 C 680 60, 720 130, 830 130 C 920 130, 980 60, 1070 60"
                stroke="url(#connector-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.45"
              />
              <defs>
                <linearGradient
                  id="connector-grad"
                  x1="0"
                  y1="0"
                  x2="1200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="33%" stopColor="#6366f1" />
                  <stop offset="66%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Step Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, idx) => (
              <StepCard key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div
          ref={ctaRef}
          className="mt-20 flex flex-col items-center gap-6 text-center"
        >
          {/* Step dots */}
          <div className="flex items-center gap-3">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div
                  className="h-2 w-2 rounded-full transition-all duration-300"
                  style={{
                    background: s.accent,
                    boxShadow: `0 0 8px ${s.accent}80`,
                  }}
                />
                {i < steps.length - 1 && (
                  <div className="h-px w-8 bg-blue-800/50" />
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-base font-medium text-blue-200/50 uppercase tracking-widest">
            Ready to start your journey?
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-700/50"
            >
              <span className="relative z-10">Start with Step 01</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-blue-400/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
