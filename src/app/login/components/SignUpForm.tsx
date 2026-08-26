"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  signupAvatar1Png, signupAvatar2Png, signupAvatar3Png,
  googleSvg, githubSvg,
  userSvg, emailSvg, eyeSvg, lockSvg,
  checkSvg, signupArrowRightSvg, shieldSvg,
} from "@/assets";

interface SignUpFormProps {
  onLogin: () => void;
  onSubmit: (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    agreeToTerms: boolean
  ) => void;
  isLoading: boolean;
  error: string | null;
}

export default function SignUpForm({
  onLogin,
  onSubmit,
  isLoading,
  error,
}: SignUpFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(fullName, email, password, confirmPassword, agreeToTerms);
  };

  return (
    <div className="w-full max-w-[448px]">
      <div>
        <h2 className="text-[26px] leading-[32px] font-semibold text-[#1E293B]">Create your student account</h2>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-[14px] leading-5 text-[#64748B]">Join 12,000+ learners</p>
          <div className="flex items-center">
            <Image src={signupAvatar1Png} alt="Learner avatar" width={20} height={20} className="h-5 w-5 rounded-full border-2 border-[#F9FAFB] object-cover" />
            <Image src={signupAvatar2Png} alt="Learner avatar" width={20} height={20} className="-ml-1.5 h-5 w-5 rounded-full border-2 border-[#F9FAFB] object-cover" />
            <Image src={signupAvatar3Png} alt="Learner avatar" width={20} height={20} className="-ml-1.5 h-5 w-5 rounded-full border-2 border-[#F9FAFB] object-cover" />
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-5 rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 pt-4.5">
        <button
          type="button"
          disabled={isLoading}
          onClick={() => {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
            window.location.href = `${apiUrl}/auth/google`;
          }}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-[9px] text-[14px] leading-5 text-[#1E293B] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          <Image src={googleSvg} alt="Google" width={20} height={20} />
          Continue with Google
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={() => {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
            window.location.href = `${apiUrl}/auth/github`;
          }}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-[9px] text-[14px] leading-5 text-[#1E293B] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          <Image src={githubSvg} alt="GitHub" width={20} height={20} />
          GitHub
        </button>
      </div>

      <div className="flex items-center pb-3.5 pt-4.5">
        <div className="h-px flex-1 bg-[#D1D5DB]" />
        <div className="px-4 text-[12px] uppercase tracking-[0.6px] text-[#64748B]">OR</div>
        <div className="h-px flex-1 bg-[#D1D5DB]" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="space-y-1">
          <label className="block text-[13px] leading-4 text-[#1E293B]">Full Name</label>
          <div className="relative">
            <Image src={userSvg} alt="Full name" width={18} height={18} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Alex Morgan"
              disabled={isLoading}
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[41px] pr-3.5 text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[13px] leading-4 text-[#1E293B]">Email Address</label>
          <div className="relative">
            <Image src={emailSvg} alt="Email" width={18} height={18} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="alex@university.edu"
              disabled={isLoading}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[41px] pr-3.5 text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[13px] leading-4 text-[#1E293B]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
              disabled={isLoading}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[17px] pr-[41px] text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-[#4662F0] hover:text-[#3b56e6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[13px] leading-4 text-[#1E293B]">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••••••••"
              disabled={isLoading}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[17px] pr-[41px] text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? (
                <svg className="h-5 w-5 text-[#4662F0] hover:text-[#3b56e6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="py-0.5">
          <label className="flex cursor-pointer items-center text-[14px] leading-5 text-[#1E293B]">
            <input
              type="checkbox"
              disabled={isLoading}
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="peer sr-only"
            />
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded border border-[#4662F0] bg-[#4662F0] peer-checked:bg-[#4662F0] peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
              {agreeToTerms && (
                <Image src={checkSvg} alt="Checked" width={16} height={16} />
              )}
            </span>
            <span className="ml-2">
              I agree to the{" "}
              <Link href="#" className="underline decoration-[#D1D5DB] underline-offset-2">
                Terms
              </Link>
              {" "}and{" "}
              <Link href="#" className="underline decoration-[#D1D5DB] underline-offset-2">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-[#4662F0] px-4 py-[11px] text-[15px] leading-5 text-white transition-colors hover:bg-[#3b56e6] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <span>Create Account</span>
              <Image src={signupArrowRightSvg} alt="Arrow right" width={18} height={18} />
            </>
          )}
        </button>
      </form>

      <p className="pt-4 text-center text-[14px] leading-5 text-[#64748B]">
        Already have an account?{" "}
        <button
          type="button"
          disabled={isLoading}
          onClick={onLogin}
          className="text-[#4662F0] transition-colors hover:underline disabled:cursor-not-allowed"
        >
          Log in
        </button>
      </p>

      <div className="mx-auto mt-3.5 flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-dashed border-[#D1D5DB] bg-[rgba(255,255,255,0.5)] px-4 py-[6px] text-center text-[12px] leading-4 text-[#64748B]">
        <Image src={shieldSvg} alt="Security shield" width={14} height={14} />
        <span>No credit card required • Cancel anytime</span>
      </div>
    </div>
  );
}
