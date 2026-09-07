"use client";

import React from "react";
import { motion } from "framer-motion";
import { logoPng } from "@/assets";

interface WelcomeStepProps {
  name: string;
  setName: (name: string) => void;
  source: string;
  setSource: (source: string) => void;
  onNext: () => void;
  getInitials: (name: string) => string;
  hasAttemptedContinue?: boolean;
}

export default function WelcomeStep({
  name,
  setName,
  source,
  setSource,
  onNext,
  getInitials,
  hasAttemptedContinue = false,
}: WelcomeStepProps) {
  const isNameEmpty = !name.trim();
  const isSourceEmpty = !source.trim();
  const isStepValid = !isNameEmpty && !isSourceEmpty;

  return (
    <motion.div
      key="step-1"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 max-w-[560px] w-full flex flex-col relative overflow-hidden"
    >
      {/* Top Centered Section: Logo & Step Badge */}
      <div className="flex flex-col items-center mb-6">
        {/* Large Logo Block */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shadow-lg shadow-blue-500/5 mb-4">
          <img src={logoPng.src} alt="Consistency AI" className="w-10 h-10 object-contain" />
        </div>

        {/* Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 text-[#10B981] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          Step 1 of 4 – Welcome
        </div>
      </div>

      {/* Left-Aligned Header */}
      <div className="text-left w-full">
        <h2 className="text-lg sm:text-[22px] md:text-2xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap truncate sm:overflow-visible">
          Welcome to Consistency AI, {name.trim().split(" ")[0] || "there"}! 👋
        </h2>
        <p className="text-gray-900 font-bold text-sm sm:text-base mt-2">
          Let&apos;s craft your perfect path
        </p>
        <p className="text-gray-400 text-xs font-semibold mt-1">
          2 min setup • AI-generated roadmap • Trusted by 12k+ engineers at{" "}
          <span className="text-gray-600 font-bold">Google, Meta, Amazon</span>
        </p>
      </div>

      {/* Form fields */}
      <div className="w-full mt-8 space-y-6 text-left">
        {/* Name Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              What&apos;s your name? <span className="text-red-500">*</span>
            </label>
            {hasAttemptedContinue && isNameEmpty && (
              <span className="text-[11px] font-bold text-red-500">Name is required</span>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full pl-4 pr-14 py-3 border rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm ${
                hasAttemptedContinue && isNameEmpty
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10"
                  : "border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
              }`}
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
          <div className="flex items-center justify-between mb-3">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            {hasAttemptedContinue && isSourceEmpty && (
              <span className="text-[11px] font-bold text-red-500">Please select an option</span>
            )}
          </div>
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2 w-full">
            {["LinkedIn", "YouTube", "Friend", "Instagram", "Google", "Others"].map((item) => {
              const isActive = source === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSource(item)}
                  className={`relative w-full py-2 px-1 sm:px-2 text-[11px] sm:text-xs font-bold rounded-full border transition-all text-center whitespace-nowrap cursor-pointer flex items-center justify-center ${
                    isActive
                      ? "bg-gray-900 border-gray-900 text-white shadow-sm"
                      : hasAttemptedContinue && isSourceEmpty
                      ? "bg-red-50/30 border-red-200 text-gray-700 hover:bg-red-50"
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
        className={`w-full py-4 px-6 rounded-2xl font-bold transition-all shadow-lg mt-8 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
          isStepValid
            ? "bg-[#0055FF] hover:bg-[#0044EE] text-white shadow-blue-500/25 cursor-pointer"
            : "bg-[#0055FF]/70 hover:bg-[#0055FF] text-white/90 shadow-none"
        }`}
      >
        Continue to Goals →
      </button>

      {/* Footnotes inside the card */}
      <div className="w-full border-t border-gray-100/80 pt-5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-semibold">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5 overflow-hidden">
            <div className="w-5 h-5 rounded-full ring-2 ring-white bg-[#0055FF] text-white flex items-center justify-center text-[7px] font-black">
              RK
            </div>
            <div className="w-5 h-5 rounded-full ring-2 ring-white bg-indigo-500 text-white flex items-center justify-center text-[7px] font-black">
              AP
            </div>
            <div className="w-5 h-5 rounded-full ring-2 ring-white bg-emerald-500 text-white flex items-center justify-center text-[7px] font-black">
              SM
            </div>
            <div className="w-5 h-5 rounded-full ring-2 ring-white bg-yellow-500 text-white flex items-center justify-center text-[7px] font-black">
              JT
            </div>
          </div>
          <span>
            Trusted by engineers at <strong className="font-bold text-gray-800">Google • Meta • Amazon</strong>
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-700 font-bold shrink-0">
          <span className="text-yellow-500 text-sm leading-none">★</span>
          <strong className="font-bold text-gray-900">4.9</strong>
          <span className="text-gray-400 font-bold">•</span>
          <strong className="font-bold text-gray-900">12k+ students</strong>
        </div>
      </div>
    </motion.div>
  );
}
