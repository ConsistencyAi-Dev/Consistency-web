"use client";

import React, { useRef, useState, useEffect } from "react";

interface ForgotPasswordCodeProps {
  onBackToLogin: () => void;
  onSubmit: (code: string) => void;
  onResendCode: () => void;
  isLoading: boolean;
  error: string | null;
  successMsg: string | null;
  countdown: number;
  isResending: boolean;
  verificationError: boolean;
  email?: string;
}

export default function ForgotPasswordCode({
  onBackToLogin,
  onSubmit,
  onResendCode,
  isLoading,
  error,
  successMsg,
  countdown,
  isResending,
  verificationError,
  email,
}: ForgotPasswordCodeProps) {
  const [codeDigits, setCodeDigits] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (val: string, index: number) => {
    const numericVal = val.replace(/[^0-9]/g, ""); // Allow only digits
    const newDigits = [...codeDigits];

    if (!numericVal) {
      newDigits[index] = "";
      setCodeDigits(newDigits);
      return;
    }

    newDigits[index] = numericVal.substring(numericVal.length - 1);
    setCodeDigits(newDigits);

    // Auto-focus next input slot
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleDigitKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newDigits = [...codeDigits];
      if (codeDigits[index] === "") {
        if (index > 0) {
          newDigits[index - 1] = "";
          setCodeDigits(newDigits);
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        newDigits[index] = "";
        setCodeDigits(newDigits);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(codeDigits.join(""));
  };

  // Reset inputs when an error occurs to let user try again easily
  useEffect(() => {
    if (error && verificationError) {
      setCodeDigits(Array(6).fill(""));
      inputRefs.current[0]?.focus();
    }
  }, [error, verificationError]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100/50 max-w-[420px] w-full animate-fade-in">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5M12 14v2m-3 0h6" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Check your email</h2>
        <p className="text-gray-500 text-sm mt-2">
          We've sent a 6-digit verification code to {email ? <strong className="text-gray-800">{email}</strong> : "your email address"}.
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3.5 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-xs text-red-700 font-semibold text-center">
          {error}
        </div>
      )}

      {successMsg && (
        <div className="mb-5 p-3.5 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg text-xs text-emerald-700 font-semibold text-center">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 6 Digit Input Slots */}
        <div className="flex justify-between gap-2 max-w-[320px] mx-auto">
          {codeDigits.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              inputMode="numeric"
              disabled={isLoading}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              value={digit}
              onChange={(e) => handleDigitChange(e.target.value, idx)}
              onKeyDown={(e) => handleDigitKeyDown(e, idx)}
              className={`w-11 h-12 text-center text-lg font-bold border rounded-xl outline-none focus:ring-1 transition-all ${
                verificationError
                  ? "border-red-500 bg-red-50/20 text-red-700 focus:ring-red-500"
                  : "border-gray-200 focus:border-[#0055FF] focus:ring-[#0055FF] bg-white text-gray-900"
              }`}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#0055FF] hover:bg-[#0044EE] text-white py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Verifying...</span>
            </>
          ) : (
            <span>Verify & continue</span>
          )}
        </button>
      </form>

      {/* Resend Actions */}
      <div className="mt-6 text-center text-sm font-medium">
        <p className="text-gray-500">
          Didn't receive the code?{" "}
          {countdown > 0 ? (
            <span className="text-[#0055FF] font-semibold">Resend (in {countdown}s)</span>
          ) : (
            <button
              type="button"
              disabled={isResending}
              onClick={onResendCode}
              className="text-[#0055FF] hover:underline font-bold transition-colors cursor-pointer"
            >
              {isResending ? "Resending..." : "Resend code"}
            </button>
          )}
        </p>
      </div>

      <div className="mt-6 text-center">
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
