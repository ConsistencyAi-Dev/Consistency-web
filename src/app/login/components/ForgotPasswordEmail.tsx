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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100/50 max-w-[420px] w-full animate-fade-in">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Reset your password</h2>
        <p className="text-gray-500 text-sm mt-2">
          Enter the email address associated with your account and we will send you a code to reset your password.
        </p>
      </div>

      {error && (
        <div className="mb-5 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-sm text-red-700 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg className="h-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="student@university.edu"
              disabled={isLoading}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-xl text-[14px] text-black bg-white transition-all outline-none font-medium placeholder-gray-400"
            />
          </div>
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
              <span>Sending code...</span>
            </>
          ) : (
            <span>Send Reset Code</span>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-gray-500 hover:text-gray-900 font-semibold text-sm transition-colors cursor-pointer"
        >
          ← Back to login
        </button>
      </div>

      <div className="mt-6 p-3.5 bg-blue-50/40 rounded-xl border border-blue-100/50 flex gap-2.5 items-start text-xs text-blue-700 leading-relaxed font-medium">
        <span className="text-base leading-none">💡</span>
        <span>
          <strong>Tip:</strong> If you don't receive the code within a few minutes, check your spam folder or try another email address associated with your account.
        </span>
      </div>
    </div>
  );
}
