"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LoginFormProps {
  onForgotPassword: () => void;
  onSignUp: () => void;
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  isLoading: boolean;
  error: string | null;
  successMsg: string | null;
}

export default function LoginForm({
  onForgotPassword,
  onSignUp,
  onSubmit,
  isLoading,
  error,
  successMsg,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, rememberMe);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back</h2>
        <p className="text-[#6B7280] text-[14px] mt-1.5 font-medium">Log in to continue your progress</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex gap-3 items-start text-xs text-red-700 leading-relaxed font-semibold">
          <svg className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>{error}</div>
        </div>
      )}

      {successMsg && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-3 items-start text-xs text-emerald-700 leading-relaxed font-semibold">
          <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>{successMsg}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div>
          <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className={`w-full pl-11 pr-4 py-3 border rounded-xl text-[14px] bg-white transition-all outline-none font-medium placeholder-gray-400 shadow-sm ${
                error && error.includes("incorrect")
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10"
                  : "border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
              }`}
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              disabled={isLoading}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-11 pr-11 py-3 border rounded-xl text-[14px] bg-white transition-all outline-none font-medium placeholder-gray-400 shadow-sm ${
                error && error.includes("incorrect")
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10"
                  : "border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF]"
              }`}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {error && error.includes("incorrect") && (
            <p className="text-[11px] text-red-600 font-semibold mt-1.5 ml-1 animate-pulse">
              Incorrect password. 2 attempts remaining before account lockout.
            </p>
          )}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-[#4B5563] cursor-pointer font-medium select-none">
            <input
              type="checkbox"
              disabled={isLoading}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#0055FF] border-gray-300 rounded focus:ring-[#0055FF] accent-[#0055FF]"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-[#0055FF] hover:underline font-semibold transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#0055FF] hover:bg-[#0044EE] text-white py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/10 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Logging in...</span>
            </>
          ) : (
            <span>Log in</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-7">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-150"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#F8F9FC] px-3.5 text-gray-400 font-bold tracking-wider">OR</span>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 hover:bg-gray-50 bg-white rounded-xl text-sm font-bold text-[#4B5563] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          Google
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 hover:bg-gray-50 bg-white rounded-xl text-sm font-bold text-[#4B5563] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.001-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          Github
        </button>
      </div>

      <p className="mt-8 text-center text-sm font-semibold text-[#4B5563]">
        Don't have an account?{" "}
        <button
          type="button"
          disabled={isLoading}
          onClick={onSignUp}
          className="text-[#0055FF] hover:underline font-bold transition-colors cursor-pointer"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
