"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { SectionHeading, Reveal } from "@/components/motion";

export default function Process() {
  return (
    <section className="relative py-24 md:py-32" id="process">
      <div className="glow right-0 top-1/3 h-[400px] w-[400px] bg-[#7b6cff]/8" />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="how we work"
          title={
            <>
              From first call to production —{" "}
              <span className="text-gradient">one clear path</span>
            </>
          }
          lead="A disciplined seven-stage process. You always know where your project stands and what happens next."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* the line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-[#4c9eff] via-[#7b6cff]/60 to-transparent md:left-1/2"
          />

          <ol className="space-y-12">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <li key={step.step} className="relative">
                  <Reveal
                    delay={0.05}
                    className={`flex gap-6 pl-14 md:w-1/2 md:pl-0 ${
                      left
                        ? "md:pr-14 md:text-right"
                        : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs tracking-widest text-sky-400">
                        {step.step}
                      </span>
                      <h3 className="mt-1.5 text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>

                  {/* node */}
                  <span className="absolute left-[12px] top-1.5 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <span className="absolute h-4 w-4 rounded-full bg-sky-400/20" />
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#4c9eff] to-[#7b6cff] shadow-[0_0_10px_2px_rgba(76,158,255,0.5)]" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
