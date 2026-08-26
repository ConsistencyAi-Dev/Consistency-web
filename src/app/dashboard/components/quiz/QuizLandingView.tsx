"use client";

import React from "react";
import { motion } from "framer-motion";
import { logoPng } from "@/assets";

interface QuizLandingViewProps {
  onStartQuiz: () => void;
  onSkipQuiz: () => void;
}

export default function QuizLandingView({ onStartQuiz, onSkipQuiz }: QuizLandingViewProps) {
  return (
    <motion.div
      key="quiz-landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center w-full"
    >
      {/* Code Symbol Logo */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 bg-white p-2.5 mb-6 mt-4 sm:mt-0 overflow-hidden">
        <img src={logoPng.src} alt="Consistency AI" className="w-full h-full object-contain" />
      </div>

      {/* Titles */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight text-center leading-tight">
        Let&apos;s check your current level
      </h2>
      <p className="text-gray-500 text-sm font-semibold mt-2.5 text-center max-w-[420px]">
        5 quick questions across DSA, System Design, JavaScript — helps AI tailor your roadmap with surgical precision.
      </p>

      {/* Topic Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["DSA Basics", "Time Complexity", "JavaScript", "React", "System Design"].map((topic) => (
          <span
            key={topic}
            className="bg-white border border-gray-200 text-gray-800 text-xs font-semibold py-1.5 px-4 rounded-full shadow-sm"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Value proposition Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mt-8">
        {[
          {
            title: "Personalized difficulty",
            desc: "Adapts to your level in real-time",
            icon: (
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ),
          },
          {
            title: "Accurate roadmap",
            desc: "Calibrates weeks & topics for you",
            icon: (
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
            ),
          },
          {
            title: "Skill gap analysis",
            desc: "Pinpoints strengths vs gaps",
            icon: (
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L3 8l9 4 9-4-9-4zM3 12l9 4 9-4M3 16l9 4 9-4" />
              </svg>
            ),
          },
        ].map((prop, idx) => (
          <div
            key={idx}
            className="p-4.5 rounded-2xl border border-gray-150/80 bg-white text-left transition-all hover:shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                {prop.icon}
              </div>
              <h4 className="text-xs font-bold text-gray-800 tracking-tight">{prop.title}</h4>
            </div>
            <p className="text-[10px] text-gray-400 font-semibold leading-snug pl-1">{prop.desc}</p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="w-full mt-8 flex flex-col items-center gap-3.5">
        <button
          type="button"
          onClick={onStartQuiz}
          className="w-full bg-[#2B50EC] hover:bg-[#1E3BB3] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>Start Quiz</span>
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onSkipQuiz}
          className="text-gray-400 hover:text-gray-700 text-xs font-bold transition-colors cursor-pointer"
        >
          Skip quiz – use default roadmap
        </button>
      </div>

      <div className="mt-8 text-center text-[10px] font-semibold text-gray-400 flex items-center justify-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Secure, private, entirely yours.</span>
      </div>
    </motion.div>
  );
}
