"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import studentSignupIllustration from "@/assets/login/student_signup_illustration.png";
import studentLoginIllustration from "@/assets/login/student_login_illustration..png";
import createNewPasswordIllustration from "@/assets/login/create_new_password_illustration.png";
import studentLoginErrorIllustration from "@/assets/login/student_login_error_illustration.png";

interface AuthIllustrationPanelProps {
  mode: string;
  error: string | null;
}

export default function AuthIllustrationPanel({ mode, error }: AuthIllustrationPanelProps) {
  const isCenterCardMode = ["forgot-email", "forgot-code", "forgot-success", "reset-loading"].includes(mode);

  if (isCenterCardMode) return null;

  return (
    <div className="hidden lg:flex w-1/2 bg-transparent items-center justify-center p-6 xl:p-10 relative overflow-hidden">
      <div className="w-full max-w-[640px] z-10 flex flex-col items-center justify-center">
        {mode === "signup" && (
          <motion.div
            key="signup-illustration"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center justify-center text-center"
          >
            <Image
              src={studentSignupIllustration}
              alt="Student Sign Up Illustration"
              priority
              className="w-full h-auto max-h-[580px] object-contain transition-all duration-300"
            />
          </motion.div>
        )}

        {mode === "login" && (
          <motion.div
            key={error ? "login-error-illustration" : "login-illustration"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center justify-center text-center"
          >
            {error ? (
              <Image
                src={studentLoginErrorIllustration}
                alt="Student Login Error Illustration"
                priority
                className="w-full h-auto max-h-[580px] object-contain transition-all duration-300"
              />
            ) : (
              <Image
                src={studentLoginIllustration}
                alt="Student Login Illustration"
                priority
                className="w-full h-auto max-h-[580px] object-contain transition-all duration-300"
              />
            )}
          </motion.div>
        )}

        {mode === "reset-password" && (
          <motion.div
            key="reset-password-illustration"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center justify-center text-center"
          >
            <Image
              src={createNewPasswordIllustration}
              alt="Create New Password Illustration"
              priority
              className="w-full h-auto max-h-[580px] object-contain transition-all duration-300"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
