"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroIllustration from "./HeroIllustration";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      {/* ambient background */}
      <div className="glow -top-40 left-1/4 h-[480px] w-[480px] bg-[#4c9eff]/10" />
      <div className="glow -right-40 top-40 h-[420px] w-[420px] bg-[#7b6cff]/10" />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            custom software · engineered to order
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="display text-[42px] leading-[1.05] md:text-6xl lg:text-[64px]"
          >
            Building Custom Software That Powers{" "}
            <span className="text-gradient">Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We design and develop modern web applications, mobile apps,
            AI-powered systems, and enterprise software tailored to your
            business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Schedule a Consultation
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
              )}
            >
              Explore Our Work
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* proof strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {[
              ["50+", "Products shipped"],
              ["8+", "Years engineering"],
              ["100%", "Custom-built"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-mono text-2xl font-semibold text-foreground">
                  {value}
                </dd>
                <dd className="mt-1 text-xs text-faint">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
