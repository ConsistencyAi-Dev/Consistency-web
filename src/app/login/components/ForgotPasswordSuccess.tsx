"use client";

import React from "react";
import { motion } from "framer-motion";

interface ForgotPasswordSuccessProps {
  onBackToLogin: () => void;
}

export default function ForgotPasswordSuccess({
  onBackToLogin,
}: ForgotPasswordSuccessProps) {
  return (
    <div className="w-full max-w-[560px] bg-white px-[32px] py-[34px] shadow-[0_0_0_0_rgba(0,0,0,0)]">
      <div className="mx-auto w-full max-w-[448px] text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#dff5ef]">
            <motion.svg
              className="h-[32px] w-[32px] text-[#10b981]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 3" />
            </motion.svg>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-[16px] font-semibold leading-[24px] text-[#191c1e]">Email Verified Successfully</h2>
          <p className="text-[16px] leading-[24px] text-[#444655]">Redirecting you to set a new password...</p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[320px] overflow-hidden rounded-full bg-[#eceef0]">
          <motion.div
            className="h-[4px] bg-[#10b981]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-[10px] text-[16px] leading-[24px] text-[#444655]">
          <span className="text-[12px]">←</span>
          <button type="button" onClick={onBackToLogin} className="font-normal text-[#444655]">
            Back to log in
          </button>
        </div>
      </div>
    </div>
  );
}
