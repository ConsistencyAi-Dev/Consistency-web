"use client";

import React from "react";
import { motion } from "framer-motion";

interface WelcomeStepProps {
  name: string;
  setName: (name: string) => void;
  source: string;
  setSource: (source: string) => void;
  onNext: () => void;
  getInitials: (name: string) => string;
}

export default function WelcomeStep({
  name,
  setName,
  source,
  setSource,
  onNext,
  getInitials,
}: WelcomeStepProps) {
  return (
    <motion.div
      key="step-1"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 max-w-[560px] w-full flex flex-col relative overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Large Logo Block */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shadow-lg shadow-blue-500/5 mb-5">
          <img src="/logo.png" alt="Consistency AI" className="w-10 h-10 object-contain" />
        </div>

        {/* Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 text-[#10B981] text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          Step 1 of 4 – Welcome
        </div>

        {/* Greeting & Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight text-center leading-tight">
          Welcome to Consistency AI, {name.split(" ")[0] || "there"}! 👋
        </h2>
        <p className="text-gray-900 font-bold text-sm sm:text-base mt-2">
          Let&apos;s craft your perfect path
        </p>

        {/* Social Proof details */}
        <p className="text-gray-400 text-xs font-semibold mt-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-100/50">
          2 min setup • AI-generated roadmap • Trusted by 12k+ engineers at{" "}
          <span className="text-gray-600 font-bold">Google, Meta, Amazon</span>
        </p>

        {/* Form fields */}
        <div className="w-full mt-8 space-y-6 text-left">
          {/* Name Input */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              What&apos;s your name?
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-4 pr-14 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm"
                placeholder="Alex Morgan"
              />
              <div className="absolute inset-y-0 right-3.5 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs font-black shadow-sm">
                  {getInitials(name)}
                </div>
              </div>
            </div>
          </div>

          {/* Hear About Us pills */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
              How did you hear about us?
            </label>
            <div className="flex flex-wrap gap-2">
              {["LinkedIn", "YouTube", "Friend", "Instagram", "Google"].map((item) => {
                const isActive = source === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSource(item)}
                    className={`relative px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                      isActive
                        ? "bg-gray-900 border-gray-900 text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHearBackground"
                        className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-[#0055FF] hover:bg-[#0044EE] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] mt-8 flex items-center justify-center gap-2 cursor-pointer"
        >
          Continue to Goals →
        </button>

        {/* Footnotes inside the card */}
        <div className="w-full border-t border-gray-100/80 pt-5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-semibold">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              <div className="w-5 h-5 rounded-full ring-2 ring-white bg-[#0055FF] text-white flex items-center justify-center text-[7px] font-black">RK</div>
              <div className="w-5 h-5 rounded-full ring-2 ring-white bg-indigo-500 text-white flex items-center justify-center text-[7px] font-black">AP</div>
              <div className="w-5 h-5 rounded-full ring-2 ring-white bg-emerald-500 text-white flex items-center justify-center text-[7px] font-black">SM</div>
              <div className="w-5 h-5 rounded-full ring-2 ring-white bg-yellow-500 text-white flex items-center justify-center text-[7px] font-black">JT</div>
            </div>
            <span>Trusted by engineers at Google • Meta • Amazon</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 font-bold shrink-0">
            <span className="text-yellow-500 text-sm leading-none">★</span>
            <span>4.9</span>
            <span className="text-gray-300">•</span>
            <span>12k+ students</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
