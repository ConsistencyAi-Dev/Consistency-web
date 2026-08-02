"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import BlurText from "./BlurText";

import img1 from "@/assets/home/img1.png";
import img2 from "@/assets/home/img2.png";
import img3 from "@/assets/home/img3.png";
import img4 from "@/assets/home/img4.png";

/* ==========================================================================
   Steps data — image order maps to the actual product screen for each step
   ========================================================================== */
type Step = {
  label: string;
  title: string;
  image: StaticImageData;
};

const STEPS: Step[] = [
  { label: "STEP 01", title: "Profile Setup (GitHub/LeetCode)", image: img1 },
  { label: "STEP 02", title: "Personalized Roadmap", image: img4 },
  { label: "STEP 03", title: "Daily Routine Practice & Push", image: img2 },
  { label: "STEP 04", title: "Weekly Checkpoint Interview", image: img3 },
];

/* Four distinct Ken-Burns pan/zoom paths for each card to start in
   different directions and zoom from different corners, creating a completely
   dynamic, non-repetitive motion system. */
const KEN_BURNS_PATHS = [
  // Card 1: Zooms in towards Top-Right, pans Left, down, Right, and back
  {
    x: [0, -150, 150, 150, -150, 0],
    y: [0, 90, 90, -90, -90, 0],
    scale: [1, 1.6, 1.6, 1.6, 1.6, 1],
  },
  // Card 2: Zooms in towards Bottom-Left, pans Right, up, Left, and back
  {
    x: [0, 150, -150, -150, 150, 0],
    y: [0, -90, -90, 90, 90, 0],
    scale: [1, 1.6, 1.6, 1.6, 1.6, 1],
  },
  // Card 3: Zooms in towards Top-Left, pans down, Right, up, and back
  {
    x: [0, 150, 150, -150, -150, 0],
    y: [0, 90, -90, -90, 90, 0],
    scale: [1, 1.6, 1.6, 1.6, 1.6, 1],
  },
  // Card 4: Zooms in towards Bottom-Right, pans up, Left, down, and back
  {
    x: [0, -150, -150, 150, 150, 0],
    y: [0, -90, 90, 90, -90, 0],
    scale: [1, 1.6, 1.6, 1.6, 1.6, 1],
  },
];

/* ==========================================================================
   Single step card — heading + fixed-size frame; the image loops through the
   4 corners and back to center on a continuous cycle
   ========================================================================== */
function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });
  const path = KEN_BURNS_PATHS[index % KEN_BURNS_PATHS.length];

  return (
    <div ref={ref} className="flex flex-col gap-3 w-full max-w-155 mx-auto lg:mx-0">
      <span className="text-xs font-bold tracking-[0.15em] text-indigo-500 font-sans">
        {step.label}
      </span>
      <h3 className="text-gray-900 text-lg sm:text-xl font-bold font-sans -mt-1 mb-1">
        {step.title}
      </h3>

      <div className="relative w-full">
        <div
          className={`relative w-full h-95 rounded-2xl overflow-hidden bg-[#0B1120] ring-1 ring-black/5 transition-shadow duration-500 ${
            isActive
              ? "shadow-[0_25px_50px_-15px_rgba(79,70,229,0.25)]"
              : "shadow-[0_12px_24px_-10px_rgba(15,23,42,0.15)]"
          }`}
        >
          {/* Cards top blur - premium backdrop blur overlay */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-black/45 to-transparent backdrop-blur-xs pointer-events-none z-10" />

          <motion.div
            className="absolute inset-0"
            animate={path}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="620px"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Main section — left heading stays pinned, right column of steps scrolls
   ========================================================================= */
export default function DailyRoutineSection() {
  return (
    <section id="daily-routine" className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left column — fixed/sticky heading (hidden on mobile/tablet) */}
        <div className="hidden lg:block lg:w-[45%] lg:sticky lg:top-[32vh] self-start">
          <h2 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans mb-6">
            <BlurText text="Consistency isn't a promise." delay={0} animateBy="words" direction="top" className="block" />
            <BlurText text="It's your daily routine." delay={200} animateBy="words" direction="top" className="block" />
          </h2>
          <BlurText
            text="The system runs you forward. We don't track attendance, we track contributions."
            delay={450}
            animateBy="words"
            direction="top"
            className="text-slate-500 text-lg font-normal font-sans leading-relaxed max-w-lg block"
          />
        </div>

        {/* Right column — steps scroll past the pinned heading (centered on mobile) */}
        <div className="relative w-full lg:w-[50%] flex flex-col gap-16 lg:gap-24 items-center lg:items-start">
          {/* Fixed cloud-shadow mask: stays pinned at the top area (just below the sticky navbar)
              so cards fade out and disappear into a glowing cloud blur effect as they scroll upward. */}
          <div className="hidden lg:block sticky top-24 inset-x-0 h-36 -mb-36 z-20 pointer-events-none bg-linear-to-b from-[#F9F9F9] via-[#F9F9F9]/90 via-30% to-transparent backdrop-blur-md">
            <div className="absolute inset-x-[5%] -top-6 h-28 bg-blue-500/25 rounded-full blur-3xl" />
            <div className="absolute inset-x-[15%] -top-4 h-20 bg-indigo-500/20 rounded-full blur-2xl" />
          </div>

          {STEPS.map((step, i) => (
            <StepCard key={step.label} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
