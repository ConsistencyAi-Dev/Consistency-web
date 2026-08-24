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
          className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-[9px] text-[14px] leading-5 text-[#1E293B] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Image src={googleSvg} alt="Google" width={20} height={20} />
          Continue with Google
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-[9px] text-[14px] leading-5 text-[#1E293B] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-70"
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
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#94A3B8] disabled:cursor-not-allowed"
            >
              <Image src={eyeSvg} alt="Toggle password visibility" width={18} height={18} />
            </button>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
              disabled={isLoading}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[17px] pr-[41px] text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[13px] leading-4 text-[#1E293B]">Confirm Password</label>
          <div className="relative">
            <Image src={lockSvg} alt="Confirm password" width={18} height={18} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2" />
            <input
              type="password"
              placeholder="••••••••"
              disabled={isLoading}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white py-[9px] pl-[41px] pr-3.5 text-[14px] leading-5 text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#4662F0] disabled:cursor-not-allowed disabled:opacity-70"
            />
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
