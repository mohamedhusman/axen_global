"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  CheckCircle2,
  Target,
  Eye,
  Search,
  Lightbulb,
  Wrench,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import { stats, values } from "./texts";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Audit",
    desc: "We start by deeply understanding your business — your workflows, your pain points, and your financial landscape. No assumptions, just clarity.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy & Design",
    desc: "From insights, we craft a tailored roadmap. Whether it's a financial strategy or a software architecture, everything is purposefully designed for your context.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Build & Integration",
    desc: "Our team executes with precision — building systems, implementing software, or running audits — all while keeping your operations running smoothly.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deliver & Evolve",
    desc: "We launch, measure, and iterate. Your business isn't static, and neither are our solutions. We remain your long-term partner in growth.",
  },
];

const promises = [
  {
    icon: HeartHandshake,
    title: "Client-First Always",
    desc: "Every decision we make is filtered through one question: what's best for the client? Your goals are our goals.",
  },
  {
    icon: Target,
    title: "Results, Not Reports",
    desc: "We don't just deliver documents — we deliver outcomes. Measurable impact is the standard we hold ourselves to.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No hidden fees, no jargon walls. We communicate clearly and keep you informed at every stage of the engagement.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const promisesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6, delay: 0.2 })
        .from(
          ".hero-title .char-line",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.4",
        )
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-stats .stat-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4",
        );

      // Background abstract shapes animation
      gsap.to(".abstract-shape", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // 2. Story Section Animations
      ScrollTrigger.create({
        trigger: storyRef.current,
        start: "top 70%",
        animation: gsap.from(".story-element", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }),
      });

      // 3. Mission / Vision cards
      ScrollTrigger.create({
        trigger: ".mission-vision-grid",
        start: "top 75%",
        animation: gsap.from(".mv-card", {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.2)",
        }),
      });

      // 4. Process steps
      ScrollTrigger.create({
        trigger: processRef.current,
        start: "top 75%",
        animation: gsap.from(".process-step", {
          x: -40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }),
      });

      // 5. Values Section
      ScrollTrigger.create({
        trigger: valuesRef.current,
        start: "top 75%",
        animation: gsap.from(".value-card", {
          scale: 0.9,
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });

      // 6. Promises section
      ScrollTrigger.create({
        trigger: promisesRef.current,
        start: "top 75%",
        animation: gsap.from(".promise-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }),
      });

      // 7. CTA Animation
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        animation: gsap.from(".cta-content", {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans selection:bg-blue-500/30"
    >
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center"
      >
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen abstract-shape" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen abstract-shape" />
          <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-900/10 blur-[100px] mix-blend-screen abstract-shape" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">
                Innovating Beyond Boundaries
              </span>
            </div>

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
              <div className="char-line overflow-hidden pb-2">
                <span className="text-white">Redefining</span>
              </div>
              <div className="char-line overflow-hidden pb-2 mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                  Finance &amp; Technology
                </span>
              </div>
            </h1>

            <p className="hero-desc text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-16">
              Finance and technology shouldn&apos;t feel complicated. At
              <span className="text-white"> Solution Wings</span>, we blend
              professional accounting with innovative software to give SMEs
              practical solutions that save time, reduce stress, and fuel
              sustainable growth.
            </p>

            {/* Quick Stats */}
            <div className="hero-stats w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-800/50">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-item flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/20 border border-slate-700/30"
                >
                  <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR EVOLUTION SECTION (extended) ===== */}
      <section ref={storyRef} className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Side */}
            <div className="story-element relative rounded-3xl overflow-hidden group aspect-square lg:aspect-auto lg:h-[620px] border border-slate-800 bg-slate-900/80 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 z-10 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <svg
                  className="w-full h-full opacity-60 text-slate-700"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="animate-[spin_40s_linear_infinite]"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="url(#paint0_linear)"
                    strokeWidth="4"
                    className="animate-[spin_20s_linear_infinite_reverse]"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="50"
                    fill="url(#paint1_linear)"
                    className="animate-pulse"
                  />
                  <path
                    d="M200 50L200 100M200 300L200 350M50 200L100 200M300 200L350 200"
                    stroke="url(#paint2_linear)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="100"
                      y1="100"
                      x2="300"
                      y2="300"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="150"
                      y1="150"
                      x2="250"
                      y2="250"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#34D399" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear"
                      x1="50"
                      y1="150"
                      x2="350"
                      y2="250"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60A5FA" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Glass overlay text */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 z-20 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-slate-300 text-sm font-medium">
                  Building a legacy of{" "}
                  <span className="text-blue-400">trust</span> and{" "}
                  <span className="text-emerald-400">innovation</span> since day
                  one.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h2 className="story-element inline-flex items-center gap-2 text-blue-400 font-semibold tracking-wider uppercase mb-4 text-sm">
                  <span className="w-8 h-[2px] bg-blue-400"></span> Our
                  Evolution
                </h2>
                <h3 className="story-element text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Bridging the Gap Between <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Numbers
                  </span>{" "}
                  &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Code
                  </span>
                </h3>
                <div className="space-y-5 text-lg text-slate-400">
                  <p className="story-element leading-relaxed">
                    SolutionWings started with one bold idea: make world-class
                    financial expertise and smart technology available to every
                    growing business — numbers and code working hand in hand.
                  </p>
                  <p className="story-element leading-relaxed">
                    What began as essential accounting support quickly evolved
                    into custom software, system implementations, and strategic
                    advisory. Today, we build solutions that are practical,
                    secure, and designed to propel businesses into their next
                    stage of growth.
                  </p>
                </div>
              </div>

              {/* Mission & Vision side-by-side cards */}
              <div className="mission-vision-grid grid sm:grid-cols-2 gap-4 mt-2">
                {/* Mission */}
                <div className="mv-card group relative p-[1px] rounded-2xl overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-slate-900 rounded-[15px] p-6 h-full hover:bg-slate-800/80 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      Our Mission
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      To empower SMEs with seamlessly integrated financial
                      expertise and technology solutions. removing complexity so
                      businesses can focus on what they do best: grow.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="mv-card group relative p-[1px] rounded-2xl overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-slate-900 rounded-[15px] p-6 h-full hover:bg-slate-800/80 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      Our Vision
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      To become the global benchmark for unified finance and
                      technology partnership — a world where every ambitious
                      business has access to institutional-grade expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK (PROCESS) ===== */}
      <section
        ref={processRef}
        className="py-24 bg-slate-900/30 border-y border-slate-800/50 relative overflow-hidden"
      >
        {/* Glow accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-4 text-sm">
              How We Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              A Process Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Real Results
              </span>
            </h3>
            <p className="text-slate-400 text-lg">
              Every engagement follows a disciplined four-stage framework. from
              deep discovery to long-term evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="process-step group relative flex flex-col"
              >
                {/* Connector line (hidden on last) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%_-_12px)] w-6 h-[2px] bg-gradient-to-r from-slate-700 to-transparent z-10" />
                )}
                <div className="relative p-[1px] rounded-3xl overflow-hidden bg-slate-800 flex-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-slate-900 rounded-[23px] p-7 h-full flex flex-col hover:bg-slate-800/80 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                        {step.step}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES (BENTO GRID) ===== */}
      <section ref={valuesRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-4 text-sm">
              The Value Difference
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Sets Us Apart
            </h3>
            <p className="text-slate-400 text-lg">
              Our core principles dictate every line of code we write and every
              financial strategy we architect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="value-card group relative p-[1px] rounded-3xl overflow-hidden bg-slate-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-slate-900 p-8 rounded-[23px] flex flex-col items-start hover:bg-slate-800/80 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section
        ref={promisesRef}
        className="py-24 bg-slate-900/30 border-t border-slate-800/50 relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-emerald-400 font-semibold tracking-wider uppercase mb-4 text-sm">
                Our Promise
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                The Standards We Never{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Compromise
                </span>
              </h3>
              <p className="text-slate-400 text-lg">
                Three commitments that define every client relationship we build
                — from day one to year ten.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((promise, idx) => (
              <div
                key={idx}
                className="promise-card group relative p-[1px] rounded-3xl overflow-hidden bg-slate-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900 rounded-[23px] p-8 h-full flex flex-col hover:bg-slate-800/80 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {promise.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="cta-content relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-12 md:p-20 text-center shadow-2xl">
            {/* Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Business Ecosystem?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Let&apos;s architect a solution that perfectly aligns your
              financial goals with robust technological infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Schedule a Consultation{" "}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500 relative z-10">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free
                Initial Consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Custom
                Architecture
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Scalable
                Growth
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
