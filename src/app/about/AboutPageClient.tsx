"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Handshake,
  Lightbulb,
  Target,
} from "lucide-react";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import Process from "@/components/home/Process";
import { CTA } from "@/components/home/Projects";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    text: "We measure success by the business problem solved — not by features shipped or hours billed.",
  },
  {
    icon: Lightbulb,
    title: "Understand first, build second",
    text: "Every engagement starts with your domain: how you work, where it hurts, and what growth looks like.",
  },
  {
    icon: Compass,
    title: "Honest technical guidance",
    text: "If a simpler solution serves you better, we'll say so — even when it means a smaller project for us.",
  },
  {
    icon: Handshake,
    title: "Partners, not vendors",
    text: "We stay accountable long after launch, maintaining and evolving what we build as your business changes.",
  },
];

const stats = [
  ["50+", "Products shipped to production"],
  ["12", "Engineering disciplines in-house"],
  ["8+", "Years building custom software"],
  ["100%", "Projects built from scratch"],
];

export default function AboutPageClient() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="glow -top-32 left-1/4 h-[420px] w-[420px] bg-[#4c9eff]/12" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[420px]" aria-hidden />
        <div className="container-site relative">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            about us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display max-w-3xl text-5xl leading-[1.05] md:text-6xl"
          >
            A software company that builds{" "}
            <span className="text-gradient">with you</span>, not just for you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Solution Wings exists because most businesses don&apos;t need
            another off-the-shelf tool — they need software that fits. We
            partner with startups, SMEs, and enterprises across every industry
            to turn ideas into scalable digital products.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-8 md:py-12">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-4">our approach</p>
            <h2 className="display text-3xl leading-[1.1] md:text-4xl">
              One-size-fits-all is where good ideas go to stall
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Generic platforms force your business to bend around their
              limitations. We work the other way: we study how your business
              actually operates, then design, develop, deploy, and maintain
              software that matches it exactly.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              That means full-stack engineering across web, mobile, AI, and
              cloud — but it also means discovery workshops, honest scoping,
              weekly demos, and documentation your future team will thank us
              for. Whatever the industry, the constant is craft.
            </p>
            <Link
              href="/contact"
              className={`${buttonVariants({ variant: "primary", size: "md" })} mt-8`}
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Stagger className="grid content-center gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass card-hover h-full rounded-2xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4c9eff]/25 to-[#7b6cff]/25 text-sky-300">
                    <v.icon size={18} />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <StaggerItem key={label} className="h-full">
                <div className="h-full bg-surface p-8 text-center">
                  <p className="font-mono text-4xl font-semibold text-gradient">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-12 md:py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="who we work with"
            title={
              <>
                Any industry. Any scale.{" "}
                <span className="text-gradient">One standard.</span>
              </>
            }
            lead="From two-founder startups validating an MVP to enterprises modernizing decade-old systems — the process adapts, the engineering standard doesn't."
          />
          <Stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Startups",
                text: "Move from idea to investor-ready MVP in weeks, on an architecture that survives your growth.",
              },
              {
                label: "SMEs",
                text: "Replace spreadsheet sprawl and disconnected tools with systems built around how you already work.",
              },
              {
                label: "Enterprises",
                text: "Modernize legacy platforms and automate processes with security, compliance, and scale designed in.",
              },
            ].map((a) => (
              <StaggerItem key={a.label} className="h-full">
                <div className="glass card-hover h-full rounded-2xl p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-sky-400">
                    {a.label}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted">{a.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
