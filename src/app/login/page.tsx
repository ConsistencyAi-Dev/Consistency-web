"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import illustrations
import studentSignupIllustration from "@/assets/login/student_signup_illustration.png";
import studentLoginIllustration from "@/assets/login/student_login_illustration..png";
import createNewPasswordIllustration from "@/assets/login/create_new_password_illustration.png";
import studentLoginErrorIllustration from "@/assets/login/student_login_error_illustration.png";

// Import Components
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordEmail from "./components/ForgotPasswordEmail";
import ForgotPasswordCode from "./components/ForgotPasswordCode";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess";
import ResetPasswordForm from "./components/ResetPasswordForm";
import ResetLoadingTransition from "./components/ResetLoadingTransition";

export default function LoginPage() {
  const router = useRouter();

  // State Machine Mode
  const [mode, setMode] = useState<
    | "login"
    | "signup"
    | "forgot-email"
    | "forgot-code"
    | "forgot-success"
    | "reset-password"
    | "reset-loading"
  >("login");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Forgot Password verification states
  const [countdown, setCountdown] = useState(59);
  const [isResending, setIsResending] = useState(false);
  const [verificationError, setVerificationError] = useState(false);



  // Reset notifications on mode transition
  useEffect(() => {
    setError(null);
    setSuccessMsg(null);
    setVerificationError(false);
  }, [mode]);

  // Resend code countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mode === "forgot-code" && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, countdown]);

  // Verification success redirects to reset page after 2.5s
  useEffect(() => {
    if (mode === "forgot-success") {
      const timer = setTimeout(() => {
        setMode("reset-password");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  const handleLoginSubmit = (emailVal: string, passwordVal: string, remember: boolean) => {
    setError(null);
    setSuccessMsg(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1800);
  };

  // Sign up handler
  const handleSignUpSubmit = (
    fullName: string,
    emailVal: string,
    passwordVal: string,
    confirmVal: string,
    agree: boolean
  ) => {
    setError(null);
    setSuccessMsg(null);

    if (passwordVal !== confirmVal) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("You must agree to the terms and privacy policy.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1800);
  };

  // Email forgot submit handler
  const handleForgotEmailSubmit = (emailVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setMode("forgot-code");
      setCountdown(59);
    }, 1500);
  };

  // Resend code handler
  const handleResendCode = () => {
    setIsResending(true);
    setError(null);
    setVerificationError(false);
    setTimeout(() => {
      setIsResending(false);
      setCountdown(59);
      setSuccessMsg("Verification code resent successfully!");
    }, 1200);
  };

  // Verify code handler
  const handleVerifyCodeSubmit = (codeVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setVerificationError(false);

    if (codeVal.length < 6) {
      setError("Please enter the complete 6-digit code.");
      setVerificationError(true);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (codeVal === "123456") {
        setMode("forgot-success");
      } else {
        setError("Invalid code. Please try again.");
        setVerificationError(true);
      }
    }, 1500);
  };

  // Reset password submit handler
  const handleResetPasswordSubmit = (passwordVal: string, confirmVal: string) => {
    setError(null);
    setSuccessMsg(null);

    if (passwordVal !== confirmVal) {
      setError("Passwords do not match.");
      return;
    }

    setMode("reset-loading");
  };

  const isCenterCardMode = ["forgot-email", "forgot-code", "forgot-success", "reset-loading"].includes(mode);

  return (
    <div className="min-h-screen w-full flex bg-[#F8F9FC] font-sans overflow-x-hidden relative">
      {/* Back to Home Link */}
      {/* <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link> */}

      <div className="w-full flex min-h-screen">
        {/* Left Side: Form Container */}
        <div
          className={`w-full ${
            isCenterCardMode ? "lg:w-full" : "lg:w-1/2"
          } flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 bg-transparent relative transition-all duration-300`}
        >
          <div className="max-w-[420px] w-full">
            <AnimatePresence mode="wait">
              {mode === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoginForm
                    onForgotPassword={() => setMode("forgot-email")}
                    onSignUp={() => setMode("signup")}
                    onSubmit={handleLoginSubmit}
                    isLoading={isLoading}
                    error={error}
                    successMsg={successMsg}
                  />
                </motion.div>
              )}

              {mode === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <SignUpForm
                    onLogin={() => setMode("login")}
                    onSubmit={handleSignUpSubmit}
                    isLoading={isLoading}
                    error={error}
                  />
                </motion.div>
              )}

              {mode === "forgot-email" && (
                <motion.div
                  key="forgot-email"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ForgotPasswordEmail
                    onBackToLogin={() => setMode("login")}
                    onSubmit={handleForgotEmailSubmit}
                    isLoading={isLoading}
                    error={error}
                  />
                </motion.div>
              )}

              {mode === "forgot-code" && (
                <motion.div
                  key="forgot-code"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ForgotPasswordCode
                    onBackToLogin={() => setMode("login")}
                    onSubmit={handleVerifyCodeSubmit}
                    onResendCode={handleResendCode}
                    isLoading={isLoading}
                    error={error}
                    successMsg={successMsg}
                    countdown={countdown}
                    isResending={isResending}
                    verificationError={verificationError}
                  />
                </motion.div>
              )}

              {mode === "forgot-success" && (
                <motion.div
                  key="forgot-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ForgotPasswordSuccess onBackToLogin={() => setMode("login")} />
                </motion.div>
              )}

              {mode === "reset-password" && (
                <motion.div
                  key="reset-password"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <ResetPasswordForm
                    onBackToLogin={() => setMode("login")}
                    onSubmit={handleResetPasswordSubmit}
                    isLoading={isLoading}
                    error={error}
                  />
                </motion.div>
              )}

              {mode === "reset-loading" && (
                <motion.div
                  key="reset-loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ResetLoadingTransition
                    onComplete={() => {
                      router.push("/dashboard");
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Illustration Container */}
        {!isCenterCardMode && (
          <div className="hidden lg:flex w-1/2 bg-transparent items-center justify-center p-12 relative overflow-hidden">
            <div className="w-full max-w-[480px] z-10 flex flex-col items-center justify-center">
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
                    className="max-h-[380px] w-auto object-contain transition-all duration-300"
                  />
                </motion.div>
              )}

              {mode === "login" && (
                <motion.div
                  key={error && error.includes("incorrect") ? "login-error-illustration" : "login-illustration"}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center justify-center text-center"
                >
                  {error && error.includes("incorrect") ? (
                    <Image
                      src={studentLoginErrorIllustration}
                      alt="Student Login Error Illustration"
                      priority
                      className="max-h-[380px] w-auto object-contain transition-all duration-300"
                    />
                  ) : (
                    <Image
                      src={studentLoginIllustration}
                      alt="Student Login Illustration"
                      priority
                      className="max-h-[380px] w-auto object-contain transition-all duration-300"
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
                    className="max-h-[380px] w-auto object-contain transition-all duration-300"
                  />
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
