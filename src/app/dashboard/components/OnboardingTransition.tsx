"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brandMarkSvg } from "@/assets";

interface OnboardingTransitionProps {
  userName: string;
  onComplete: () => void;
}

export default function OnboardingTransition({
  userName,
  onComplete,
}: OnboardingTransitionProps) {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState("Saving your career profile & goals...");

  useEffect(() => {
    const duration = 2200;
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        if (next >= 65) {
          setStepText("Calibrating your personalized AI learning path...");
        } else if (next >= 35) {
          setStepText("Preparing your student dashboard & mentor network...");
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen w-full items-center justify-center bg-[#F8F9FC] text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex flex-col items-center gap-8 max-w-[440px] w-full"
      >
        {/* Animated Brand Glow Icon */}
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-[0_20px_40px_rgba(43,80,236,0.25)]"
          style={{
            backgroundImage: "linear-gradient(135deg, #2B50EC 0%, #38BDF8 100%)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 20px 40px rgba(43,80,236,0.25)",
              "0 25px 50px rgba(43,80,236,0.45)",
              "0 20px 40px rgba(43,80,236,0.25)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={brandMarkSvg}
            alt="Consistency AI"
            width={44}
            height={44}
            className="h-11 w-11"
          />
        </motion.div>

        {/* Text & Steps */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            {progress >= 100
              ? `You're all set, ${userName || "there"}! 🚀`
              : "Setting up your Dashboard"}
          </h3>
          <p className="text-sm font-medium text-[#64748B] min-h-[22px]">
            {progress >= 100 ? "Redirecting to your dashboard..." : stepText}
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full space-y-2">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#E2E8F0] p-0.5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2B50EC] via-[#6366F1] to-[#38BDF8]"
              style={{ width: `${Math.round(progress)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex items-center justify-between text-xs font-semibold text-[#94A3B8]">
            <span>Profile verification</span>
            <span className="text-[#2B50EC] font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Verified Badge */}
        {progress >= 100 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-full bg-[#ECFDF5] px-4 py-1.5 text-xs font-bold text-[#047857] outline outline-1 outline-[#A7F3D0]"
          >
            <span>✓</span>
            <span>Profile Saved & Synchronized to Database</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
