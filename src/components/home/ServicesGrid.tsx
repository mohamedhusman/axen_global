"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

export default function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32" id="services">
      <div className="glow left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 bg-[#4c9eff]/8" />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="services"
          title={
            <>
              Everything you need to ship{" "}
              <span className="text-gradient">serious software</span>
            </>
          }
          lead="Twelve disciplines, one team. Every engagement is scoped and designed specifically for your business — never assembled from a kit."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="glass card-hover group flex h-full flex-col rounded-2xl p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4c9eff]/25 to-[#7b6cff]/25 text-sky-300">
                    <s.icon size={20} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {s.benefits.slice(0, 2).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[13px] text-muted"
                    >
                      <Check size={14} className="mt-0.5 shrink-0 text-sky-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
