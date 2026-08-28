"use client";

import React from "react";
import { motion } from "framer-motion";
import { logoPng } from "@/assets";

interface OnboardingHeaderProps {
  step: 1 | 2 | 3 | 4;
  quizState: "landing" | "quiz" | "loading" | "results";
}

export default function OnboardingHeader({
  step,
  quizState,
}: OnboardingHeaderProps) {
  const getProgressWidth = () => {
    if (step === 4 && quizState === "quiz") return 90;
    if (step === 4 && quizState === "loading") return 100;
    return ((step - 0.2) / 4) * 100;
  };

  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between shrink-0 shadow-sm">
      {/* Left Side: Brand Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <img src={logoPng.src} alt="Consistency AI" className="w-5.5 h-5.5 object-contain" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold text-gray-900 tracking-tight text-base sm:text-lg">
            Consistency AI
          </span>
          <span className="text-[9px] tracking-widest font-extrabold text-[#0055FF] uppercase">
            Onboarding
          </span>
        </div>
      </div>

      {/* Right Side: Step Progress */}
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="hidden sm:flex items-center gap-4 text-xs font-semibold">
          <span className={step === 1 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
            Welcome
          </span>
          <span className="text-gray-300">/</span>
          <span className={step === 2 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
            Goals
          </span>
          <span className="text-gray-300">/</span>
          <span className={step === 3 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
            Profile
          </span>
          <span className="text-gray-300">/</span>
          <span className={step === 4 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
            Quiz
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-1.5 w-16 sm:w-24 bg-gray-100 rounded-full overflow-hidden border border-gray-100/20 shadow-inner">
            <motion.div
              className="h-full bg-gray-900"
              animate={{ width: `${getProgressWidth()}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            />
          </div>
          <span className="text-xs font-bold text-gray-500">Step {step} of 4</span>
        </div>
      </div>
    </header>
  );
}
