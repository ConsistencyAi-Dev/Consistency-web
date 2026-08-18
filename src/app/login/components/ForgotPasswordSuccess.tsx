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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100/50 max-w-[420px] w-full text-center animate-fade-in">
      {/* Green Checkmark Badge */}
      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6">
        <motion.svg
          className="w-8 h-8 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </motion.svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">Email verified</h2>
      <p className="text-gray-500 text-sm mt-2 max-w-[280px] mx-auto">
        We've successfully verified your identity.
      </p>

      {/* Redirecting Progress Bar */}
      <div className="mt-8 mb-6 max-w-[280px] mx-auto">
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#10B981]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 font-medium">
          Redirecting you to reset password...
        </p>
      </div>

      <div className="mt-6 text-center border-t border-gray-100 pt-5">
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-gray-500 hover:text-gray-900 font-semibold text-sm transition-colors cursor-pointer"
        >
          ← Back to login
        </button>
      </div>
    </div>
  );
}
