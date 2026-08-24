"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoPng } from "@/assets";

interface ResetLoadingTransitionProps {
  onComplete: () => void;
}

export default function ResetLoadingTransition({
  onComplete,
}: ResetLoadingTransitionProps) {
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [progress, setProgress] = useState(0);

  // Stage sequence timelines
  useEffect(() => {
    // Stage 1 (Connecting to server...) duration: 1.8s
    const stage2Timer = setTimeout(() => {
      setStage(2);
    }, 1800);

    return () => clearTimeout(stage2Timer);
  }, []);

  useEffect(() => {
    if (stage !== 2) return;

    // Stage 2 (Loading your dashboard...) progress: 0 to 100% over 2.5s
    const duration = 2500;
    const intervalTime = 40; // ms
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Small delay after reaching 100% before showing verified stage
          setTimeout(() => {
            setStage(3);
          }, 500);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [stage]);

  useEffect(() => {
    if (stage !== 3) return;

    // Stage 3 (Verified / Redirecting...) duration: 2.2s before redirecting
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(completeTimer);
  }, [stage, onComplete]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100/50 max-w-[420px] w-full min-h-[350px] flex flex-col justify-between items-center text-center relative overflow-hidden">
      
      {/* Top Section: App Logo */}
      <div className="flex-1 flex flex-col items-center justify-center w-full my-auto">
        <div className="relative mb-6">
          {/* Outer glowing pulsing background ring for stages 1 & 2 */}
          {stage < 3 && (
            <motion.div
              className="absolute inset-0 bg-blue-100/40 rounded-2xl -z-10"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 0.2, 0.6],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100/50"
          >
            <motion.img
              src={logoPng.src}
              alt="Consistency.AI Logo"
              className="w-10 h-10 object-contain"
              animate={
                stage < 3
                  ? {
                      scale: [1, 1.05, 1],
                    }
                  : { scale: 1 }
              }
              transition={
                stage < 3
                  ? {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : {}
              }
            />
          </motion.div>
        </div>

        {/* Middle Section: Dynamic state animation */}
        <div className="w-full min-h-[100px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            
            {/* Stage 1: Connecting */}
            {stage === 1 && (
              <motion.div
                key="stage-connecting"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mt-2">
                  Connecting to server...
                </h3>
                <p className="text-gray-400 text-xs mt-1.5 font-medium max-w-[240px]">
                  Establishing secure tunnel with Consistency backend
                </p>
              </motion.div>
            )}

            {/* Stage 2: Loading dashboard */}
            {stage === 2 && (
              <motion.div
                key="stage-loading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="w-full flex flex-col items-center"
              >
                {/* Horizontal Progress Bar */}
                <div className="h-2 w-[240px] bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner border border-gray-100/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0055FF] to-[#0088FF]"
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  Loading your dashboard...{" "}
                  <span className="tabular-nums text-[#0055FF]">
                    {Math.round(progress)}%
                  </span>
                </h3>
                <p className="text-gray-400 text-xs mt-1.5 font-medium max-w-[240px]">
                  Preparing personalized analytics workspace
                </p>
              </motion.div>
            )}

            {/* Stage 3: Verified */}
            {stage === 3 && (
              <motion.div
                key="stage-verified"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Verified Badge */}
                <motion.div
                  initial={{ scale: 0.5, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.15,
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0055FF] text-[13px] font-bold shadow-sm mb-4"
                >
                  {/* Verified Shield / Check Icon */}
                  <svg
                    className="w-4 h-4 fill-none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Verified</span>
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  Welcome back! Redirecting...
                </h3>
                <p className="text-gray-400 text-xs mt-1.5 font-medium max-w-[240px]">
                  Navigating to secure student portal
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Section: Subtitle (STUDENT PORTAL) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full border-t border-gray-100/80 pt-4 mt-6 text-center"
      >
        <span className="text-[10px] tracking-[0.2em] font-extrabold text-gray-500 uppercase">
          Student Portal
        </span>
      </motion.div>

    </div>
  );
}
