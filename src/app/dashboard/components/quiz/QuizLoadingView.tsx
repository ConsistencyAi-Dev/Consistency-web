"use client";

import React from "react";
import { motion } from "framer-motion";

interface QuizLoadingViewProps {
  quizLoadingText: string;
}

export default function QuizLoadingView({ quizLoadingText }: QuizLoadingViewProps) {
  return (
    <motion.div
      key="quiz-loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-10"
    >
      {/* Glimmering pulse ring animation */}
      <div className="relative mb-6">
        <motion.div
          className="absolute inset-0 bg-blue-100/40 rounded-full"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 0.1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center relative shadow-sm">
          <svg className="animate-spin h-6 w-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 tracking-tight text-center">
        {quizLoadingText}
      </h3>
      <p className="text-gray-400 text-xs font-semibold text-center mt-1">
        Tailoring adaptive curriculum modules and difficulty nodes
      </p>
    </motion.div>
  );
}
