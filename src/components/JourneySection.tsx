"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import BlurText from "./BlurText";

/* ==========================================================================
   Icons
   ========================================================================== */
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function RocketIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="#fff" />
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg {...iconProps}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg {...iconProps}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

/* ==========================================================================
   Wave geometry
   ========================================================================== */
const VIEW_W = 1400;
const VIEW_H = 460;

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  x: number;
  y: number;
};

const STEPS: Step[] = [
  { num: "1", title: "Start Early", desc: "Join in your 2nd or 3rd year and claim your runway.", icon: <RocketIcon />, x: 100, y: 260 },
  { num: "2", title: "Choose One Skill", desc: "Pick one domain. One skill. No scattering.", icon: <TargetIcon />, x: 400, y: 60 },
  { num: "3", title: "Get a Mentor", desc: "Get matched with an industry mentor who guides you.", icon: <MentorIcon />, x: 700, y: 260 },
  { num: "4", title: "Build Real Projects", desc: "Ship work that proves your skill, not just a certificate.", icon: <LayersIcon />, x: 1000, y: 60 },
  { num: "5", title: "Land the Job", desc: "Walk in job-ready, with proof instead of promises.", icon: <BriefcaseIcon />, x: 1300, y: 260 },
];

function buildWavePath(steps: Step[], yOffset = 0) {
  let d = `M${steps[0].x},${steps[0].y + yOffset}`;
  for (let i = 1; i < steps.length; i++) {
    const p0 = steps[i - 1];
    const p1 = steps[i];
    const dx = (p1.x - p0.x) / 2;
    d += ` C${p0.x + dx},${p0.y + yOffset} ${p1.x - dx},${p1.y + yOffset} ${p1.x},${p1.y + yOffset}`;
  }
  return d;
}

const WAVE_PATH = buildWavePath(STEPS);
const WAVE_ECHO_PATH = buildWavePath(STEPS, 14);
const WAVE_DRAW_RANGE: [number, number] = [0.05, 0.85];

/* ==========================================================================
   Desktop wave point (icon + copy synced to scroll progress)
   ========================================================================== */
function JourneyPoint({
  step,
  index,
  scrollYProgress,
}: {
  step: Step;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const [start, end] = WAVE_DRAW_RANGE;
  const threshold = start + (index / (STEPS.length - 1)) * (end - start);
  const progress = useTransform(scrollYProgress, [Math.max(0, threshold - 0.05), threshold], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0.4, 1]);

  const isTrough = step.y > VIEW_H / 2;
  const leftPct = (step.x / VIEW_W) * 100;
  const dotTopPct = (step.y / VIEW_H) * 100;
  const textTopPct = isTrough ? dotTopPct - 50 : dotTopPct + 18;

  return (
    <>
      <motion.div
        style={{ left: `${leftPct}%`, top: `${dotTopPct}%`, x: "-50%", y: "-50%", scale, opacity: progress }}
        className="absolute z-20 flex items-center justify-center size-14 rounded-full bg-black shadow-lg ring-4 ring-[#F9F9F9]"
      >
        {step.icon}
      </motion.div>

      <motion.div
        style={{ left: `${leftPct}%`, top: `${textTopPct}%`, x: "-50%", opacity: progress }}
        className="absolute z-20 w-40 sm:w-48 text-center"
      >
        <span className="block text-4xl sm:text-5xl font-bold text-slate-200 leading-none mb-1">{step.num}</span>
        <h3 className="text-gray-900 font-bold text-base font-sans mb-1">{step.title}</h3>
        <p className="text-gray-500 text-xs leading-5 font-sans">{step.desc}</p>
      </motion.div>
    </>
  );
}

/* ==========================================================================
   Mobile vertical fallback (no pin, plain reveal-on-scroll)
   ========================================================================== */
function MobileJourneyStep({ step, delay }: { step: Step; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: "easeOut" }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center size-12 rounded-full bg-black shrink-0">{step.icon}</div>
        {step.num !== "5" && <div className="w-px flex-1 bg-slate-200 mt-2" />}
      </div>
      <div className="pb-8">
        <span className="block text-3xl font-bold text-slate-200 leading-none mb-1">{step.num}</span>
        <h3 className="text-gray-900 font-bold text-base font-sans mb-1">{step.title}</h3>
        <p className="text-gray-500 text-xs leading-5 font-sans">{step.desc}</p>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   Main JourneySection component
   ========================================================================== */
export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Smoothed so a single-frame glitch at the exact bottom-of-page scroll boundary
  // (zero overscroll room) can't snap dots/line to invisible.
  const scrollYProgress = useSpring(rawScrollYProgress, { stiffness: 400, damping: 60, mass: 0.5 });

  const drawProgress = useTransform(scrollYProgress, WAVE_DRAW_RANGE, [0, 1]);

  return (
    <>
    <div ref={containerRef} className="relative bg-[#F9F9F9] lg:h-[480vh]">
      <section
        id="journey"
        className="lg:sticky lg:top-0 w-full lg:h-screen overflow-hidden flex flex-col justify-center py-20 lg:py-0"
      >
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-0 size-[400px] bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 size-[400px] bg-sky-50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          {/* Header */}
          <div className="mb-16 lg:mb-4 max-w-3xl ">
            <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-6 lg:mb-3">
              How it works
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans">
              <BlurText text="Your 5-step journey" delay={0} animateBy="words" direction="top" className="block" />
              <BlurText text="to becoming job-ready" delay={250} animateBy="words" direction="top" className="block" />
            </h2>
          </div>

          {/* Desktop scroll-synced wave */}
          <div className="hidden lg:block relative w-full mt-16 ">
            <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="wave-progress" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>

              {/* Thin echo line running parallel just below the main curve (ribbon effect) */}
              <motion.path
                d={WAVE_ECHO_PATH}
                fill="none"
                stroke="#93C5FD"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ pathLength: drawProgress }}
              />

              {/* Scroll-drawn solid progress line (left to right, follows step order) */}
              <motion.path
                d={WAVE_PATH}
                fill="none"
                stroke="url(#wave-progress)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength: drawProgress }}
              />
            </svg>

            <div className="absolute inset-0">
              {STEPS.map((step, i) => (
                <JourneyPoint key={step.num} step={step} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Mobile vertical fallback */}
          <div className="lg:hidden flex flex-col mt-4">
            {STEPS.map((step, i) => (
              <MobileJourneyStep key={step.num} step={step} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
    {/* Guarantees a sliver of scroll room past the tracked container's end, even if this
        is the last section on the page — without it, scroll-progress tracking breaks down
        exactly at the document's literal max-scroll boundary (zero overscroll room). */}
    <div aria-hidden className="lg:h-px" />
    </>
  );
}
