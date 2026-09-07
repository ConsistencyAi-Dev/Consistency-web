"use client";

import React from "react";
import BlurText from "./BlurText";
import { useInView } from "./solution/SolutionCommon";
import { SolutionRow1Cards } from "./solution/SolutionRow1Cards";
import { SolutionRow2Cards } from "./solution/SolutionRow2Cards";

export default function SolutionSection() {
  const { ref, visible } = useInView();

  return (
    <section id="solution" className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-14">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-4 sm:mb-6">
            Solution
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] mb-4 font-sans">
            <BlurText
              text="So we built the one thing"
              delay={100}
              animateBy="words"
              direction="top"
              className="inline-block mr-[0.25em]"
            />
            <br className="hidden sm:block" />
            <BlurText
              text="that makes you finish."
              delay={400}
              animateBy="words"
              direction="top"
              className="inline-block text-[#2563EB]"
            />
          </h2>
          <BlurText
            text="“One mentor. One domain. One skill — until it's done. That's Consistency AI."
            delay={700}
            animateBy="words"
            direction="top"
            className="text-slate-500 text-base font-normal font-sans leading-6 max-w-xl block"
          />
        </div>

        {/* Row 1 */}
        <SolutionRow1Cards visible={visible} />

        {/* Row 2 */}
        <SolutionRow2Cards visible={visible} />
      </div>
    </section>
  );
}
