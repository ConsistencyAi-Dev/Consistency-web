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
    <div className="w-full max-w-[560px] bg-white px-[32px] py-[34px] shadow-[0_0_0_0_rgba(0,0,0,0)]">
      <div className="mx-auto w-full max-w-[448px]">
        <div className="mb-6 text-center">
          <h2 className="text-[16px] font-semibold leading-[24px] text-[#191c1e]">Check your email</h2>
          <p className="mt-1 text-[16px] leading-[24px] text-[#444655]">
            We've sent a 6-digit verification code to
            <span className="block font-bold text-[#191c1e]">{email || "alex@university.edu"}</span>
          </p>
        </div>

        {error && (
          <div className="mb-3 text-center text-[14px] leading-[20px] text-[#ef4444]">{error}</div>
        )}

        {successMsg && (
          <div className="mb-3 text-center text-[14px] leading-[20px] text-[#10b981]">{successMsg}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-[12px]">
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
                className={`h-[46px] w-[40px] rounded-[8px] border text-center text-[20px] font-normal text-[#191c1e] outline-none transition-all ${
                  verificationError
                    ? "border-[#f87171] bg-[#fff5f5] text-[#ef4444] shadow-[0_0_0_1px_rgba(248,113,113,0.25)]"
                    : "border-[#c4c5d8] bg-white focus:border-[#2b50ec] focus:ring-2 focus:ring-[#2b50ec]/10"
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#2b50ec] text-[16px] font-normal leading-[24px] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isLoading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>

        <div className="mt-6 text-center text-[16px] leading-[24px] text-[#444655]">
          <span>Didn't receive the code? </span>
          {countdown > 0 ? (
            <span className="font-normal text-[#191c1e]">Resend in {countdown}s</span>
          ) : (
            <button type="button" disabled={isResending} onClick={onResendCode} className="font-normal text-[#191c1e] underline-offset-2 hover:underline">
              {isResending ? "Resending..." : "Resend"}
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center gap-[10px] text-[16px] leading-[24px] text-[#444655]">
          <span className="text-[12px]">←</span>
          <button type="button" onClick={onBackToLogin} className="font-normal text-[#444655]">
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
}
