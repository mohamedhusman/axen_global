"use client";

import Link from "next/link";
import { ArrowRight, Ban, Fingerprint, Infinity as InfinityIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";

const principles = [
  {
    icon: Ban,
    title: "We don't sell websites",
    text: "We engineer software solutions — systems that run your operations, serve your customers, and compound in value.",
  },
  {
    icon: Fingerprint,
    title: "We don't use templates",
    text: "Every project starts from your requirements, not a theme. Architecture, design, and code are built for you alone.",
  },
  {
    icon: InfinityIcon,
    title: "We become technology partners",
    text: "Launch is the beginning. We maintain, evolve, and scale your product as your business grows.",
  },
];

export default function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow mb-4">about solution wings</p>
          <h2 className="display text-4xl leading-[1.08] md:text-5xl">
            Your idea, engineered into a{" "}
            <span className="text-gradient">scalable product</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Solution Wings partners with startups, SMEs, and enterprises to
            transform ideas into software that solves real business problems.
            We don&apos;t offer one-size-fits-all packages — we listen, design,
            build, and stay.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            From first architecture diagram to long-term maintenance, every
            decision is made around your workflows, your users, and your
            growth — whatever your industry.
          </p>
          <Link
            href="/about"
            className={`${buttonVariants({ variant: "outline", size: "md" })} mt-8`}
          >
            More about us
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Stagger className="flex flex-col justify-center gap-5">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass card-hover flex gap-5 rounded-2xl p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4c9eff]/25 to-[#7b6cff]/25 text-sky-300">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
