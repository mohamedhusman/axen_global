"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion";
import { ProjectCard, CTA } from "@/components/home/Projects";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function WorkPageClient() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="glow -top-32 right-1/4 h-[420px] w-[420px] bg-[#7b6cff]/12" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[420px]" aria-hidden />
        <div className="container-site relative">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            featured projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display max-w-3xl text-5xl leading-[1.05] md:text-6xl"
          >
            Custom software, in{" "}
            <span className="text-gradient">production</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Every project below was engineered from scratch for a specific
            business — its workflows, its users, its scale. That&apos;s the
            only way we build.
          </motion.p>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-site">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {projects.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
