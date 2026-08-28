"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brandMarkSvg } from "@/assets";

interface ResetLoadingTransitionProps {
  onComplete: () => void;
}

export default function ResetLoadingTransition({
  onComplete,
}: ResetLoadingTransitionProps) {
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stage2Timer = setTimeout(() => {
      setStage(2);
    }, 1800);

    return () => clearTimeout(stage2Timer);
  }, []);

  useEffect(() => {
    if (stage !== 2) return;

    const duration = 2500;
    const intervalTime = 40; // ms
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
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

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(completeTimer);
  }, [stage, onComplete]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#f7f9fb] text-center">
      <div className="flex -translate-y-px flex-col items-center gap-10">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-[7.627px] shadow-[42px_40px_16px_0px_rgba(0,0,0,0),27px_26px_15px_0px_rgba(0,0,0,0.01),15px_15px_13px_0px_rgba(0,0,0,0.05),7px_6px_9px_0px_rgba(0,0,0,0.09),2px_2px_5px_0px_rgba(0,0,0,0.1)]"
          style={{ backgroundImage: "linear-gradient(48.105926deg, #2b50ec 27.447%, #61d3f9 94.962%)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={stage < 3 ? { opacity: [0.65, 1, 0.85, 0.65], scale: [0.94, 1, 0.96, 0.94] } : { opacity: 1, scale: 1 }}
          transition={stage < 3 ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.25 }}
        >
          <Image src={brandMarkSvg} alt="Consistency AI" width={36.25} height={36.25} className="h-[36.25px] w-[36.25px]" />
        </motion.div>

        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div key="connecting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
              <p className="text-[18px] font-medium leading-normal text-[#0f172a]">Connecting to server...</p>
              <p className="text-[13px] font-medium uppercase leading-normal text-[#64748b]">Student Portal</p>
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
              <p className="text-[18px] font-medium leading-normal text-[#0f172a]">
                Loading your dashboard... {Math.round(progress)}%
              </p>
              <p className="text-[13px] font-medium uppercase leading-normal text-[#64748b]">Student Portal</p>
            </motion.div>
          )}
          {stage === 3 && (
            <motion.div key="verified" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2 rounded-full bg-[#e0f2fe] px-4 py-2 text-[14px] font-semibold leading-normal text-[#2b50ec]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-[#2b50ec] text-[10px]">✓</span>
                <span>Verified</span>
              </motion.div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] font-medium leading-normal text-[#0f172a]">Welcome back! Redirecting...</p>
                <p className="text-[13px] font-medium uppercase leading-normal text-[#64748b]">Student Portal</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
