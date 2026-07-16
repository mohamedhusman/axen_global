"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass card-hover group flex h-full flex-col overflow-hidden rounded-2xl">
      {/* visual header */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent} to-transparent`}
      >
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
        {/* abstract app window */}
        <div className="glass absolute left-6 top-8 right-6 rounded-t-xl border-b-0 p-3 transition-transform duration-500 group-hover:-translate-y-1.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-3/5 rounded-full bg-white/20" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-2/5 rounded-full bg-white/15" />
          </div>
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-line bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <p className="mt-4 border-t border-line pt-4 text-[13px] font-medium text-sky-300">
          ↳ {project.outcome}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-24 md:py-32" id="work">
      <div className="container-site">
        <SectionHeading
          eyebrow="featured projects"
          title={
            <>
              Software that&apos;s already{" "}
              <span className="text-gradient">doing the work</span>
            </>
          }
          lead="A selection of the platforms and products we've engineered — each one custom-built for the business behind it."
        />

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {projects.slice(0, 6).map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            View all projects
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-site">
        <div className="glass relative overflow-hidden rounded-[32px] px-8 py-16 text-center md:px-16 md:py-24">
          <div className="glow left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 bg-[#4c9eff]/15" />
          <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="relative">
            <p className="eyebrow mb-5">start your project</p>
            <h2 className="display mx-auto max-w-2xl text-4xl leading-[1.08] md:text-5xl">
              Have an idea worth <span className="text-gradient">building?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Tell us what you&apos;re trying to achieve. We&apos;ll come back
              with an honest assessment, an approach, and a clear estimate.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Schedule a Consultation
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
