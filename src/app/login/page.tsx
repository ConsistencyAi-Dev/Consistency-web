"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import Components
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordEmail from "./components/ForgotPasswordEmail";
import ForgotPasswordCode from "./components/ForgotPasswordCode";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess";
import ResetPasswordForm from "./components/ResetPasswordForm";
import ResetLoadingTransition from "./components/ResetLoadingTransition";
import AuthIllustrationPanel from "./components/AuthIllustrationPanel";

import { useAuthFlow } from "./hooks/useAuthFlow";

export default function LoginPage() {
  const {
    mode,
    setMode,
    isLoading,
    error,
    successMsg,
    forgotEmail,
    countdown,
    isResending,
    verificationError,
    router,
    handleLoginSubmit,
    handleSignUpSubmit,
    handleForgotEmailSubmit,
    handleResendCode,
    handleVerifyCodeSubmit,
    handleResetPasswordSubmit,
  } = useAuthFlow();

  const isCenterCardMode = ["forgot-email", "forgot-code", "forgot-success", "reset-loading"].includes(mode);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#F3F4F6] font-sans overflow-hidden relative">
      <div className="w-full flex h-full items-center justify-center">
        {/* Left Side: Form Container */}
        <div
          className={`w-full ${
            isCenterCardMode ? "lg:w-full" : "lg:w-1/2"
          } flex items-center justify-center px-6 sm:px-12 lg:px-16 py-6 lg:py-8 bg-transparent relative transition-all duration-300`}
        >
          <div
            className={`w-full ${
              isCenterCardMode ? "max-w-[560px]" : mode === "signup" ? "max-w-[448px]" : "max-w-[420px]"
            }`}
          >
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
                    email={forgotEmail}
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
        <AuthIllustrationPanel mode={mode} error={error} />
      </div>
    </div>
  );
}
