"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, GitCommit, Globe, TestTube2 } from "lucide-react";

const codeLines = [
  { w: "62%", c: "bg-sky-400/70" },
  { w: "84%", c: "bg-white/25" },
  { w: "48%", c: "bg-violet-400/60" },
  { w: "72%", c: "bg-white/25" },
  { w: "38%", c: "bg-white/15" },
  { w: "68%", c: "bg-sky-400/50" },
  { w: "54%", c: "bg-white/25" },
];

function PipelineNode({
  icon: Icon,
  label,
  meta,
  delay,
  className,
}: {
  icon: React.ElementType;
  label: string;
  meta: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`glass absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4c9eff]/30 to-[#7b6cff]/30 text-sky-300">
        <Icon size={16} />
      </span>
      <span>
        <span className="block text-[13px] font-medium text-foreground">
          {label}
        </span>
        <span className="block font-mono text-[11px] text-muted">{meta}</span>
      </span>
    </motion.div>
  );
}

export default function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[560px] select-none md:h-[500px]">
      {/* ambient glow */}
      <div className="glow left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-[#4c9eff]/20" />
      <div className="glow right-0 top-10 h-48 w-48 bg-[#7b6cff]/20" />

      {/* dot grid backdrop */}
      <div className="dot-grid absolute inset-0" aria-hidden />

      {/* code editor window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass absolute left-1/2 top-[44%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-0 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-faint">
            solution — engine.ts
          </span>
        </div>
        {/* code lines */}
        <div className="space-y-2.5 px-5 py-5">
          {codeLines.map((line, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-4 shrink-0 font-mono text-[10px] text-faint">
                {i + 1}
              </span>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: line.w, opacity: 1 }}
                transition={{
                  delay: reduce ? 0 : 0.5 + i * 0.18,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`h-2 rounded-full ${line.c}`}
              />
            </div>
          ))}
          {/* blinking cursor */}
          <div className="flex items-center gap-3">
            <span className="w-4 shrink-0 font-mono text-[10px] text-faint">
              8
            </span>
            <motion.span
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
              className="h-3.5 w-[7px] rounded-[2px] bg-sky-400"
            />
          </div>
        </div>
      </motion.div>

      {/* floating pipeline nodes */}
      <PipelineNode
        icon={GitCommit}
        label="Commit"
        meta="feat: client portal"
        delay={1.2}
        className="left-0 top-[6%] md:top-[10%]"
      />
      <PipelineNode
        icon={TestTube2}
        label="Tests passed"
        meta="128 / 128 ✓"
        delay={1.55}
        className="right-0 top-[22%]"
      />
      <PipelineNode
        icon={CheckCircle2}
        label="Build succeeded"
        meta="2.4s · edge runtime"
        delay={1.9}
        className="bottom-[14%] left-[4%]"
      />
      <PipelineNode
        icon={Globe}
        label="Deployed to production"
        meta="live · 99.99% uptime"
        delay={2.25}
        className="bottom-[2%] right-[2%] md:bottom-[4%]"
      />

      {/* animated beam ring */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[44%] h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_3px_rgba(76,158,255,0.7)]" />
        </motion.div>
      )}
    </div>
  );
}
