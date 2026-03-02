"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedServiceCard from "./ServiceCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── Inline SVG Illustrations ────────────────────────────────────────────────

const AccountingIllustration = () => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* ledger book */}
    <rect
      x="20"
      y="20"
      width="80"
      height="90"
      rx="6"
      fill="#1e3a8a"
      opacity="0.15"
    />
    <rect
      x="24"
      y="24"
      width="72"
      height="82"
      rx="4"
      fill="#1e40af"
      opacity="0.1"
    />
    {/* lines */}
    {[38, 52, 66, 80, 94].map((y, i) => (
      <g key={i}>
        <rect
          x="32"
          y={y}
          width="52"
          height="3"
          rx="1.5"
          fill="#3b82f6"
          opacity={0.3 + i * 0.1}
          className="ledger-line"
        />
        <rect
          x="90"
          y={y}
          width="18"
          height="3"
          rx="1.5"
          fill="#60a5fa"
          opacity={0.4 + i * 0.1}
          className="ledger-num"
        />
      </g>
    ))}
    {/* chart bars */}
    <rect
      x="110"
      y="85"
      width="10"
      height="25"
      rx="3"
      fill="#2563eb"
      opacity="0.8"
      className="bar-1"
    />
    <rect
      x="124"
      y="70"
      width="10"
      height="40"
      rx="3"
      fill="#3b82f6"
      opacity="0.8"
      className="bar-2"
    />
    <rect
      x="138"
      y="55"
      width="10"
      height="55"
      rx="3"
      fill="#60a5fa"
      opacity="0.8"
      className="bar-3"
    />
    {/* check mark */}
    <circle cx="65" cy="35" r="10" fill="#1d4ed8" opacity="0.2" />
    <path
      d="M59 35l4 4 8-8"
      stroke="#3b82f6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check-mark"
    />
  </svg>
);

const SoftwareIllustration = () => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* monitor */}
    <rect
      x="15"
      y="15"
      width="105"
      height="75"
      rx="8"
      fill="#1e3a8a"
      opacity="0.2"
    />
    <rect
      x="19"
      y="19"
      width="97"
      height="67"
      rx="6"
      fill="#0f172a"
      opacity="0.6"
    />
    {/* code lines */}
    <rect
      x="28"
      y="30"
      width="30"
      height="3"
      rx="1.5"
      fill="#60a5fa"
      opacity="0.9"
      className="code-line"
    />
    <rect
      x="28"
      y="39"
      width="20"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.8"
      className="code-line"
    />
    <rect
      x="28"
      y="48"
      width="45"
      height="3"
      rx="1.5"
      fill="#f472b6"
      opacity="0.7"
      className="code-line"
    />
    <rect
      x="28"
      y="57"
      width="35"
      height="3"
      rx="1.5"
      fill="#fbbf24"
      opacity="0.8"
      className="code-line"
    />
    <rect
      x="28"
      y="66"
      width="25"
      height="3"
      rx="1.5"
      fill="#60a5fa"
      opacity="0.6"
      className="code-line"
    />
    <rect
      x="28"
      y="75"
      width="50"
      height="3"
      rx="1.5"
      fill="#a78bfa"
      opacity="0.9"
      className="code-line"
    />
    {/* cursor blink */}
    <rect
      x="84"
      y="75"
      width="2"
      height="10"
      rx="1"
      fill="#60a5fa"
      className="cursor-blink"
    />
    {/* stand */}
    <rect
      x="56"
      y="90"
      width="25"
      height="5"
      rx="2"
      fill="#1e3a8a"
      opacity="0.3"
    />
    <rect
      x="45"
      y="95"
      width="47"
      height="5"
      rx="2"
      fill="#1e3a8a"
      opacity="0.2"
    />
    {/* floating circles (gears/nodes) */}
    <circle
      cx="135"
      cy="30"
      r="12"
      stroke="#3b82f6"
      strokeWidth="2"
      opacity="0.5"
      strokeDasharray="4 2"
      className="gear-1"
    />
    <circle cx="135" cy="30" r="6" fill="#3b82f6" opacity="0.3" />
    <circle
      cx="148"
      cy="60"
      r="8"
      stroke="#60a5fa"
      strokeWidth="1.5"
      opacity="0.4"
      strokeDasharray="3 2"
      className="gear-2"
    />
    <circle cx="148" cy="60" r="3" fill="#60a5fa" opacity="0.4" />
  </svg>
);

const AdvisoryIllustration = () => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* network lines */}
    <line
      x1="80"
      y1="35"
      x2="30"
      y2="75"
      stroke="#3b82f6"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <line
      x1="80"
      y1="35"
      x2="80"
      y2="85"
      stroke="#3b82f6"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <line
      x1="80"
      y1="35"
      x2="130"
      y2="75"
      stroke="#3b82f6"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <line
      x1="30"
      y1="75"
      x2="80"
      y2="85"
      stroke="#60a5fa"
      strokeWidth="1"
      opacity="0.3"
    />
    <line
      x1="130"
      y1="75"
      x2="80"
      y2="85"
      stroke="#60a5fa"
      strokeWidth="1"
      opacity="0.3"
    />
    {/* nodes */}
    <circle
      cx="80"
      cy="35"
      r="16"
      fill="#1d4ed8"
      opacity="0.25"
      className="node-pulse"
    />
    <circle cx="80" cy="35" r="10" fill="#2563eb" opacity="0.5" />
    <circle cx="80" cy="35" r="5" fill="#60a5fa" opacity="0.9" />
    <circle
      cx="30"
      cy="75"
      r="10"
      fill="#1e40af"
      opacity="0.4"
      className="node-2"
    />
    <circle cx="30" cy="75" r="5" fill="#3b82f6" opacity="0.7" />
    <circle
      cx="80"
      cy="85"
      r="10"
      fill="#1e40af"
      opacity="0.4"
      className="node-3"
    />
    <circle cx="80" cy="85" r="5" fill="#3b82f6" opacity="0.7" />
    <circle
      cx="130"
      cy="75"
      r="10"
      fill="#1e40af"
      opacity="0.4"
      className="node-4"
    />
    <circle cx="130" cy="75" r="5" fill="#3b82f6" opacity="0.7" />
    {/* upward arrow trend */}
    <path
      d="M100 105 L120 80 L130 88 L145 60"
      stroke="#34d399"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
      className="trend-line"
    />
    <polygon points="145,55 148,62 141,62" fill="#34d399" opacity="0.8" />
  </svg>
);

const illustrations = [
  AccountingIllustration,
  SoftwareIllustration,
  AdvisoryIllustration,
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 1, suffix: "yrs", label: "Industry Experience" },
  { value: 100, suffix: "+", label: "Hours Saved for Clients" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────

const FeaturesSolutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Accounting & Audit",
      subtitle: "Professional financial solutions",
      category: "Finance",
      points: [
        "Professional bookkeeping",
        "Financial reporting",
        "Tax compliance",
        "Audit services",
        "Strategic financial planning",
      ],
      accent: "#3b82f6",
      gradFrom: "from-blue-600",
      gradTo: "to-indigo-700",
      tag: "Most Popular",
    },
    {
      title: "Software Solutions",
      subtitle: "Innovative technology for SMEs",
      category: "Technology",
      points: [
        "Custom web & mobile applications",
        "Shop management systems",
        "ERP-lite solutions",
        "Workflow automation",
        "Secure, scalable technology",
      ],
      accent: "#6366f1",
      gradFrom: "from-indigo-600",
      gradTo: "to-violet-700",
      tag: "High Demand",
    },
    {
      title: "Business Advisory",
      subtitle: "Strategic guidance for growth",
      category: "Strategy",
      points: [
        "Process optimization",
        "Digital transformation consulting",
        "Training & capacity building",
        "Growth strategy development",
        "End-to-end business enhancement",
      ],
      accent: "#0ea5e9",
      gradFrom: "from-sky-600",
      gradTo: "to-blue-700",
      tag: "New",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Floating Orbs ──
      gsap.to(orb1Ref.current, {
        x: 40,
        y: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2Ref.current, {
        x: -35,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
      gsap.to(orb3Ref.current, {
        x: 20,
        y: 25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // ── Badge + Headline entrance ──
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
          headlineRef.current?.querySelectorAll(".word") ?? [],
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
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        );

      // ── Divider line draw ──
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // ── Stat Counters ──
      if (statsRef.current) {
        const counterEls =
          statsRef.current.querySelectorAll<HTMLElement>(".stat-value");
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              statsRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            );
            counterEls.forEach((el) => {
              const target = parseInt(el.dataset.target ?? "0", 10);
              gsap.fromTo(
                el,
                { innerText: 0 },
                {
                  innerText: target,
                  duration: 2.5,
                  ease: "power2.out",
                  snap: { innerText: 1 },
                  onUpdate() {
                    el.innerText = Math.round(
                      parseFloat(el.innerText),
                    ).toString();
                  },
                },
              );
            });
          },
        });
      }

      // ── Cards staggered entrance ──
      if (cardsRef.current) {
        const cards =
          cardsRef.current.querySelectorAll<HTMLElement>(".feature-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, scale: 0.93, rotationY: -8 },
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

      // ── CTA section ──
      gsap.fromTo(
        ctaSectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Word split helper ──
  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[0.28em]">
        {word}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#060d1f] via-[#081029] to-[#0a1535] py-28 lg:py-36"
    >
      {/* ── Background Orbs ── */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[140px]"
      />
      <div
        ref={orb3Ref}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-sky-500/5 blur-[100px]"
      />

      {/* ── Grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
              Our Solutions
            </span>
          </div>
        </div>

        {/* ── Headline ── */}
        <h2
          ref={headlineRef}
          className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{ perspective: "800px" }}
        >
          {splitWords("We Solve Your")}
          <span className="word inline-block mr-[0.28em] bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Business
          </span>
          {splitWords("Challenges")}
        </h2>

        <p
          ref={subtitleRef}
          className="mb-16 max-w-2xl text-lg font-light leading-relaxed text-blue-100/60"
        >
          From financial precision to cutting-edge technology and strategic
          advisory. Axen Global delivers end-to-end solutions that empower your
          growth.
        </p>

        {/* ── Divider ── */}
        <div
          ref={dividerRef}
          className="mb-16 h-px w-full bg-gradient-to-r from-blue-500/60 via-indigo-500/30 to-transparent"
        />

        {/* ── Stat Counters ── */}
        <div
          ref={statsRef}
          className="mb-20 grid grid-cols-2 gap-6 opacity-0 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/4 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:bg-white/8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-end gap-1">
                  <span
                    className="stat-value text-4xl font-black text-white"
                    data-target={s.value}
                  >
                    0
                  </span>
                  <span className="mb-1 text-xl font-bold text-blue-400">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-blue-200/60">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Service Cards ── */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => {
            const Illustration = illustrations[idx];
            return (
              <AnimatedServiceCard
                key={idx}
                index={idx}
                title={feature.title}
                subtitle={feature.subtitle}
                points={feature.points}
                accent={feature.accent}
                gradFrom={feature.gradFrom}
                gradTo={feature.gradTo}
                tag={feature.tag}
                category={feature.category}
                Illustration={Illustration}
              />
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          ref={ctaSectionRef}
          className="mt-20 flex flex-col items-center gap-6 text-center"
        >
          <p className="text-base font-medium text-blue-200/50 uppercase tracking-widest">
            Ready to transform your business?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-700/50"
            >
              <span className="relative z-10">Get a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-blue-400/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSolutions;
