"use client";

import { reasons } from "@/lib/data";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="why choose us"
          title={
            <>
              The engineering standards behind{" "}
              <span className="text-gradient">every build</span>
            </>
          }
          lead="These aren't marketing claims — they're the working principles our clients hold us to on every project."
        />

        <Stagger
          className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {reasons.map((r) => (
            <StaggerItem key={r.title} className="h-full">
              <div className="group h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-raised">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-sky-300 transition-colors duration-300 group-hover:border-[rgba(124,156,255,0.4)]">
                  <r.icon size={18} />
                </span>
                <h3 className="mt-5 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
