"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  services,
  examplePackages,
  addOns,
  commonQuestions,
  commonAddOns,
} from "./servicesData";
import {
  Calculator,
  Laptop,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Laptop,
  Lightbulb,
};

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      duration: 0.5,
      rotationY: x * 15,
      rotationX: -y * 15,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      duration: 0.7,
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Blobs Animation
      gsap.to(".blob-1", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-2", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Section Fade-ins
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
            },
          },
        );
      });

      // Stagger Cards
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: "#solutions",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".package-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#packages",
            start: "top 75%",
          },
        },
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Modal Animation effect
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeService) {
      gsap.fromTo(
        modalBgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
      );
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.1)" },
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeService]);

  const activeServiceData = services.find((s) => s.id === activeService);

  return (
    <main
      ref={mainRef}
      className="relative bg-slate-50 text-slate-800 min-h-screen overflow-hidden font-sans pt-20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="blob-1 absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px]" />
        <div className="blob-2 absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <section className="relative py-24 px-6 md:px-16 text-center max-w-5xl mx-auto">
        <h1 className="hero-text text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Business
          </span>
        </h1>
        <p className="hero-text max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
          Practical accounting, tailored software, and strategic advisory.
          combined into powerful solutions that help SMEs operate smarter and
          grow faster.
        </p>
      </section>

      {/* What We Do */}
      <section id="solutions" className="py-20 px-6 md:px-16 relative">
        <div className="blob-1 absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">
              Capabilities
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              What We Do
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Lightbulb;
              return (
                <div
                  key={s.id}
                  className="service-card group h-full [perspective:1000px]"
                >
                  <TiltCard className="h-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-shadow duration-500 flex flex-col">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-4">
                      {s.subtitle}
                    </p>
                    <p className="text-slate-600 mb-8 leading-relaxed opacity-90">
                      {s.description}
                    </p>

                    <div className="mt-auto space-y-4 pt-4">
                      <button
                        onClick={() => setActiveService(s.id)}
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium"
                      >
                        Explore Service
                        <ArrowRight size={18} />
                      </button>
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        Get a quote
                      </Link>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="py-24 px-6 md:px-16 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-2">
              Pricing
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Packages as Starting Points
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              These packages are guides to help you understand scope and
              starting investment. Final pricing depends on data complexity and
              integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {examplePackages.map((p, index) => {
              const isMiddle = index === 1;
              return (
                <div
                  key={p.id}
                  className={`package-card relative p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${
                    isMiddle
                      ? "bg-gradient-to-b from-blue-600 to-indigo-800 shadow-[0_0_50px_rgba(37,99,235,0.4)] border border-blue-400/30 py-12"
                      : "bg-slate-800/50 backdrop-blur-sm border border-slate-700"
                  }`}
                >
                  {isMiddle && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400 text-sky-950 px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                  <p
                    className={`text-sm mb-6 ${isMiddle ? "text-blue-200" : "text-slate-400"}`}
                  >
                    {p.tag}
                  </p>

                  <div className="mb-8">
                    <div className="text-4xl font-extrabold">
                      {p.price.split(" ")[0]} {p.price.split(" ")[1]}
                    </div>
                    <div
                      className={`text-sm mt-1 ${isMiddle ? "text-blue-200" : "text-slate-400"}`}
                    >
                      {p.price.split(" ").slice(2).join(" ")}
                    </div>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 ${isMiddle ? "text-sky-300" : "text-sky-500"}`}
                        />
                        <span
                          className={isMiddle ? "text-white" : "text-slate-300"}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                      isMiddle
                        ? "bg-white text-blue-900 hover:bg-slate-100 hover:shadow-lg"
                        : "bg-slate-700 text-white hover:bg-blue-600"
                    }`}
                  >
                    Request Quote
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12 text-slate-500 text-sm reveal-section">
            <p>
              <strong className="text-slate-300">Important:</strong> Prices
              shown are starting points. for clients with large datasets,
              complex integrations, or bespoke product development, we perform a
              short discovery phase and provide a time‑boxed Statement of Work
              to ensure predictable delivery and fair pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Features and Add Ons */}
      <section id="features" className="py-24 px-6 md:px-16 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Optional Extras
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Choose from these optional extras to customize your package and
              get exactly what your business needs.
            </p>

            <ul className="space-y-6">
              {commonAddOns.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100"
                >
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-1">
                      {item.title}
                    </strong>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Common Enhancements
            </h3>
            <div className="grid gap-4">
              {addOns.map((a) => (
                <div
                  key={a.id}
                  className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                >
                  <div className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {a.title}
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and Discovery */}
      <section
        id="faq"
        className="py-24 px-6 md:px-16 bg-slate-50 border-t border-slate-200 reveal-section"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Discovery & Pricing
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We use a short discovery phase to scope work for medium and large
              projects. This helps us estimate effort, identify data complexity,
              and propose a fair, time‑boxed Statement of Work.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <div className="text-blue-600 mt-1">•</div>
                <p>
                  <strong className="text-slate-900">Discovery phase:</strong>{" "}
                  1–2 weeks to audit systems and sample data.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-600 mt-1">•</div>
                <p>
                  <strong className="text-slate-900">Time boxed SOW:</strong>{" "}
                  Clear milestones, deliverables, and acceptance criteria.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-600 mt-1">•</div>
                <p>
                  <strong className="text-slate-900">
                    Data complexity rules:
                  </strong>{" "}
                  Large datasets, custom ETL, or multiple legacy systems trigger
                  custom pricing.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-600 mt-1">•</div>
                <p>
                  <strong className="text-slate-900">Billing:</strong> Milestone
                  billing, retainers, or monthly subscriptions depending on
                  scope.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Common Questions
            </h3>
            <div className="space-y-4">
              {commonQuestions.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact and CTA */}
      <section className="py-20 px-6 md:px-16 reveal-section">
        <div className="max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
          <div className="bg-slate-900 rounded-[1.4rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-slate-300 text-lg">
                Tell us the service you&apos;re interested in and a quick
                summary of your needs. We&apos;ll follow up with a tailored
                proposal and next steps.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for service details */}
      {activeService && activeServiceData && (
        <div
          ref={modalBgRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 "
        >
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative overflow-scroll max-h-screen"
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              {React.createElement(
                iconMap[activeServiceData.icon] || Lightbulb,
                { size: 32 },
              )}
            </div>

            <h3 className="text-3xl font-extrabold text-slate-900 mb-3">
              {activeServiceData.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {activeServiceData.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
              <h4 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                What we deliver
              </h4>
              <ul className="space-y-3">
                {activeServiceData.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2
                      size={18}
                      className="text-blue-500 mt-0.5 shrink-0"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Typical timeline
                </h4>
                <p className="text-sm text-slate-500">
                  Starter: 1-4w · Growth: 4-12w · Enterprise: custom
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all"
                onClick={() => setActiveService(null)}
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
