"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { CTA } from "@/components/home/Projects";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function ServicesPageClient() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="glow -top-32 left-1/3 h-[420px] w-[420px] bg-[#4c9eff]/12" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[420px]" aria-hidden />
        <div className="container-site relative">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display max-w-3xl text-5xl leading-[1.05] md:text-6xl"
          >
            Engineering services, shaped around{" "}
            <span className="text-gradient">your business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            No packages, no tiers, no templates. We scope every engagement
            around your requirements — whether that&apos;s a two-week MVP or a
            multi-year enterprise platform.
          </motion.p>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="pb-8">
        <div className="container-site space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.04}>
              <article
                id={s.slug}
                className="glass card-hover grid scroll-mt-28 gap-8 rounded-3xl p-8 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4c9eff]/25 to-[#7b6cff]/25 text-sky-300">
                      <s.icon size={22} />
                    </span>
                    <span className="font-mono text-xs text-faint">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <Link
                    href="/contact"
                    className={`${buttonVariants({ variant: "outline", size: "md" })} mt-7`}
                  >
                    Discuss this service
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-faint">
                    Key benefits
                  </p>
                  <ul className="mt-4 space-y-3">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-foreground/90"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-sky-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
