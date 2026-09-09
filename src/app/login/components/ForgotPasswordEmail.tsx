"use client";

import React, { useState } from "react";

interface ForgotPasswordEmailProps {
  onBackToLogin: () => void;
  onSubmit: (email: string) => void;
  isLoading: boolean;
  error: string | null;
}

export default function ForgotPasswordEmail({
  onBackToLogin,
  onSubmit,
  isLoading,
  error,
}: ForgotPasswordEmailProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="w-full max-w-[560px] bg-white px-[32px] py-[34px] shadow-[0_0_0_0_rgba(0,0,0,0)]">
      <div className="mx-auto w-full max-w-[448px]">
        <div className="mb-8 text-center">
          <h2 className="text-[16px] font-semibold leading-[24px] text-[#191c1e]">Reset your password</h2>
          <p className="mt-1 text-[16px] leading-[24px] text-[#444655]">
            Enter your email address and we'll send you a 6-digit code
            <span className="block">to reset your password securely.</span>
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-[16px] font-normal leading-[24px] text-[#191c1e]">
              Email Address
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[16px]">
                <svg viewBox="0 0 20 20" className="h-[18px] w-[18px] text-[#444655]" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 6.25A1.25 1.25 0 0 1 3.75 5h12.5a1.25 1.25 0 0 1 1.25 1.25v7.5A1.25 1.25 0 0 1 16.25 15H3.75A1.25 1.25 0 0 1 2.5 13.75v-7.5Z" />
                  <path d="M3.75 6.25 10 11.25l6.25-5" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="name@university.edu"
                disabled={isLoading}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[52px] w-full rounded-[8px] border border-[#c4c5d8] bg-white pl-[46px] pr-[16px] text-[16px] leading-[24px] text-[#191c1e] placeholder:text-[#6b7280] outline-none transition-all focus:border-[#2b50ec] focus:ring-2 focus:ring-[#2b50ec]/10"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#2b50ec] text-[16px] font-normal leading-[24px] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isLoading ? "Sending code..." : "Send Reset Code"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-[10px] text-[16px] leading-[24px] text-[#2b50ec]">
          <span className="text-[12px]">←</span>
          <button type="button" onClick={onBackToLogin} className="font-normal text-[#2b50ec]">
            Back to Login
          </button>
        </div>

        <div className="mt-8 flex items-start gap-[12px] rounded-[16px] border border-[#c4c5d8] bg-[#f2f4f6] p-[16px] text-left">
          <div
            className="shrink-0"
            style={{
              paddingTop: "4px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Bulb outline */}
              <path
                d="M7.5 1.5 C4.2 1.5 1.8 4 1.8 7.2 C1.8 9.3 2.9 10.8 4.2 12 H10.8 C12.1 10.8 13.2 9.3 13.2 7.2 C13.2 4 10.8 1.5 7.5 1.5 Z"
                stroke="#B23800"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Middle bar */}
              <rect
                x="4.2"
                y="13.8"
                width="6.6"
                height="2.2"
                rx="1.1"
                fill="#B23800"
              />
              {/* Bottom contact tip */}
              <path
                d="M5.6 17.5 H9.4 C9.4 17.5 9.1 19.5 7.5 19.5 C5.9 19.5 5.6 17.5 5.6 17.5 Z"
                fill="#B23800"
              />
            </svg>
          </div>
          <p className="text-[16px] leading-[24px] text-[#444655]">
            <span className="font-semibold text-[#191c1e]">Tip:</span> If you don't receive the code within a few
            minutes, check your spam folder or ensure you're using the email associated with your institutional account.
          </p>
        </div>
      </div>
    </div>
  );
}
