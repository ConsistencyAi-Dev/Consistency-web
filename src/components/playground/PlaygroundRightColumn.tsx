"use client";

import React from "react";
import { motion } from "framer-motion";

interface PlaygroundRightColumnProps {
  showcaseIndex: number | null;
  chartBars: number[];
}

export default function PlaygroundRightColumn({
  showcaseIndex,
  chartBars,
}: PlaygroundRightColumnProps) {
  const getCardProps = (index: number) => {
    const isFocused = showcaseIndex === index;
    const isDimmed = showcaseIndex !== null && showcaseIndex !== index;
    return {
      animate: {
        borderColor: isFocused ? "rgba(59, 130, 246, 0.7)" : "rgba(255, 255, 255, 0.1)",
        boxShadow: isFocused
          ? "0 10px 30px rgba(59, 130, 246, 0.15)"
          : "0 0 0 rgba(0,0,0,0)",
        opacity: isDimmed ? 0.35 : 1,
      },
      transition: { duration: 0.5, ease: "easeInOut" as const },
    };
  };

  return (
    <motion.div
      {...getCardProps(4)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col h-full relative text-left"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xs">LinkedIn Post Preview</span>
        <span className="flex items-center gap-1 text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-md">
          Auto-Generated
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
          JD
        </div>
        <div>
          <p className="text-white text-xs font-semibold">John Doe</p>
          <p className="text-gray-400 text-[9px]">Aspiring AI/ML Engineer · 2h ago</p>
        </div>
      </div>

      <p className="text-gray-300 text-[11px] leading-relaxed mb-3">
        Day 126 of consistency: Built &amp; trained logistic regression from scratch today! 🚀 Here is how the cost
        decreased over 5 epochs.
      </p>

      {/* Chart visualization */}
      <div className="bg-[#05070D] rounded-xl p-3 mb-3">
        <div className="flex items-center justify-between text-[9px] text-gray-400 mb-2">
          <span>Cost Function vs. Epochs</span>
          <span className="text-emerald-400">J(w,b) → 0.18</span>
        </div>
        <div className="flex items-end gap-2 h-14 pt-2">
          {chartBars.map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-white/5 rounded-t-sm h-full flex items-end">
                <motion.div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <span className="text-[8px] text-gray-500">e{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] text-gray-400 mt-auto">
        <span className="flex items-center gap-1">
          <span className="text-blue-400 font-bold">👍 48</span>
          <span>·</span>
          <span>12 comments</span>
        </span>
        <span className="text-emerald-400 font-semibold">Scheduled for 08:30 PM</span>
      </div>
    </motion.div>
  );
}
