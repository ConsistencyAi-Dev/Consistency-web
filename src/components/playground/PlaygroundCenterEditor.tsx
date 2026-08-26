"use client";

import React from "react";
import { motion } from "framer-motion";
import { CODE_LINES } from "./playgroundData";

interface PlaygroundCenterEditorProps {
  showcaseIndex: number | null;
  animationStage: "idle" | "typing" | "running" | "complete";
  typedCodeLength: number;
}

export default function PlaygroundCenterEditor({
  showcaseIndex,
  animationStage,
  typedCodeLength,
}: PlaygroundCenterEditorProps) {
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

  const getTypedCodeLines = () => {
    let charCount = 0;
    return CODE_LINES.map((line) => {
      const tokens = [];
      for (const tok of line.tokens) {
        if (charCount >= typedCodeLength) break;
        const available = typedCodeLength - charCount;
        if (tok.t.length <= available) {
          tokens.push(tok);
          charCount += tok.t.length;
        } else {
          tokens.push({ t: tok.t.substring(0, available), c: tok.c });
          charCount += available;
          break;
        }
      }
      return { indent: line.indent, tokens };
    });
  };

  return (
    <motion.div
      {...getCardProps(3)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col h-full relative text-left"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xs">Coding Environment</span>
        <span className="flex items-center gap-1 text-[11px] text-gray-300 bg-white/5 px-2 py-0.5 rounded-md">
          Python
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      <div className="bg-[#05070D] rounded-xl p-3 flex-1">
        <pre className="text-[11.5px] leading-5 font-mono overflow-x-auto">
          {getTypedCodeLines().map((line, i) => (
            <div key={i} className="flex min-h-5">
              <span className="text-gray-600 select-none w-4 text-right pr-2 shrink-0">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 12}px` }}>
                {line.tokens.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
                {animationStage === "typing" && i === getTypedCodeLines().length - 1 && (
                  <span className="inline-block w-1.5 h-3 bg-blue-500 ml-0.5 animate-pulse" />
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>

      <div className="bg-[#020306] border border-white/5 rounded-xl p-2 mt-2 font-mono text-[10px] text-gray-300 min-h-16 flex flex-col justify-center">
        {animationStage === "typing" && (
          <div className="text-gray-500 italic animate-pulse flex items-center gap-2">
            <svg className="w-3 h-3 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
            </svg>
            Coding in progress...
          </div>
        )}
        {animationStage === "running" && (
          <div className="flex flex-col gap-0.5 text-blue-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-ping" />
              <span>&gt; python train_regression.py</span>
            </div>
            <div className="text-gray-400 text-[9px] pl-2.5">Loading datasets, training model...</div>
          </div>
        )}
        {animationStage === "complete" && (
          <div className="flex flex-col gap-0.5 text-emerald-400 leading-normal">
            <div>&gt; python train_regression.py</div>
            <div className="text-gray-400 text-[9px] pl-2.5">Epoch 1/5 - Loss: 0.6931 - Accuracy: 50.0%</div>
            <div className="text-gray-400 text-[9px] pl-2.5">Epoch 3/5 - Loss: 0.2104 - Accuracy: 94.2%</div>
            <div className="text-emerald-400 font-bold pl-2.5">✓ Training Complete. Accuracy: 96.8% (Saved weights.h5)</div>
          </div>
        )}
        {animationStage === "idle" && (
          <div className="text-gray-500">
            <div>&gt; python train_regression.py</div>
            <div className="text-emerald-400">Training complete. Accuracy: 96.8%</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
