"use client";

import React, { useState } from "react";
import Link from "next/link";

import { CohortConfig, CountryCode } from "@/config/cohorts";

interface EnrollSuccessViewProps {
  onViewReceipt: () => void;
  orderInfo?: any;
  cohort?: CohortConfig;
  country?: CountryCode;
}

export default function EnrollSuccessView({ onViewReceipt, orderInfo, cohort, country = "IN" }: EnrollSuccessViewProps) {
  const [isLeetCodeConnected, setIsLeetCodeConnected] = useState(false);
  const [isGitHubConnected, setIsGitHubConnected] = useState(false);
  const [isLinkedInConnected, setIsLinkedInConnected] = useState(false);
  const [profileProgress, setProfileProgress] = useState(25);

  const cohortTitle = cohort?.title || orderInfo?.cohortTitle || "AI/ML Mastery Cohort";
  const orderId = orderInfo?.orderId || "CAI-CF-2026-8842";
  const pricing = cohort?.pricing[country];
  const paidAmount = pricing ? pricing.formattedOffered : (orderInfo?.amount ? `${orderInfo.currency || "₹"} ${orderInfo.amount}` : "₹44,999");

  const handleConnectLeetCode = () => {
    setIsLeetCodeConnected(true);
    setProfileProgress((prev) => Math.min(prev + 25, 100));
  };

  const handleConnectGitHub = () => {
    setIsGitHubConnected(true);
    setProfileProgress((prev) => Math.min(prev + 25, 100));
  };

  const handleConnectLinkedIn = () => {
    setIsLinkedInConnected(true);
    setProfileProgress(100);
  };

  return (
    <div className="cohort-success bg-white rounded-[24px] border border-[#e2e8f0] p-0 shadow-sm text-center max-w-[864px] w-full mx-auto relative overflow-hidden">
      {/* Header check circle badge */}
      <div className="success-header w-full flex flex-col items-center border-b border-[#f1f5f9] px-6 py-12 sm:px-16 sm:py-16">
        <div className="w-20 h-20 rounded-full bg-[#10b981] border-0 flex items-center justify-center mx-auto mb-4 shadow-sm shadow-emerald-500/10">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
          Congratulations – You&apos;re Enrolled! 🎉
        </h2>

        <p className="text-[#475569] text-sm sm:text-lg font-semibold mt-2.5 max-w-[672px] mx-auto leading-7">
          Your payment succeeded and your seat is confirmed for <strong className="text-gray-900 font-bold">{cohortTitle}</strong>.
          <span className="block text-xs sm:text-sm text-gray-500 mt-1">Order ID: <strong className="text-gray-800 font-bold">{orderId}</strong></span>
        </p>

        <span className="bg-[#ecfdf5] text-[#047857] border border-[#d1fae5] text-[10px] sm:text-sm font-semibold py-2 px-4 rounded-full mt-4 inline-block">
          ● Paid {paidAmount} via Cashfree Payments Gateway
        </span>
      </div>

      {/* Profile sync box */}
      <div className="success-body mt-0 p-6 sm:p-12 text-left">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-base sm:text-xl font-extrabold text-[#0f172a] tracking-tight leading-7">
              Connect your developer profiles to personalize your AI/ML journey
            </h4>
            <p className="text-[10px] font-semibold text-gray-400 mt-0.5 leading-snug">
              We use these to tailor DSA, projects & job matches. Takes 30 seconds each.
            </p>
          </div>
          <span className="bg-[#eef2ff] border border-[#e0e7ff] text-[#4f46e5] text-[10px] font-semibold py-1.5 px-3 rounded-md shrink-0">
            ✨ AI Personalized
          </span>
        </div>

        {/* Profiles Checklist cards */}
        <div className="space-y-3.5">
          {/* LC */}
          <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isLeetCodeConnected ? "bg-[#fff7ed] border border-[#fed7aa]" : "bg-white border border-[#e2e8f0]"}`}>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#ffa116] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                LC
              </div>
              <div>
                <h5 className="text-[11px] font-black text-gray-800 leading-tight flex items-center gap-2">
                  Connect LeetCode
                  {isLeetCodeConnected && <span className="bg-[#d1fae5] text-[#047857] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                </h5>
                <p className="text-[9px] font-bold text-gray-400 leading-tight mt-0.5">
                  Sync DSA problems, track 500+ problems for ML interviews - Streak & rating
                </p>

                <div className="flex items-center gap-1.5 mt-2">
                  <span className="bg-gray-50 text-gray-500 text-[8px] font-bold py-0.5 px-2 rounded-md">
                    DSA for ML Interviews
                  </span>
                  <span className="bg-gray-50 text-gray-500 text-[8px] font-bold py-0.5 px-2 rounded-md">
                    Track Progress
                  </span>
                </div>
              </div>
            </div>

            {isLeetCodeConnected ? (
              <div className="border-t border-[#fed7aa] pt-3 text-[9px] font-bold text-[#475569] flex items-center justify-between">
                <span>@john_coder · 120 problems synced · Contest 1642 · Streak 12 days</span>
                <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center">✓</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <input type="text" defaultValue="john_coder" className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none" />
                <button type="button" onClick={handleConnectLeetCode} className="text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 bg-gray-900 hover:bg-black text-white cursor-pointer">Connect</button>
              </div>
            )}
          </div>

          {/* GitHub */}
          <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isGitHubConnected ? "bg-[#0f172a] border border-[#0f172a] text-white shadow-md" : "bg-white border border-[#e2e8f0]"}`}>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div>
                <h5 className={`text-[11px] font-black leading-tight flex items-center gap-2 ${isGitHubConnected ? "text-white" : "text-gray-800"}`}>
                  Connect GitHub
                  {isGitHubConnected && <span className="bg-[#064e3b] text-[#6ee7b7] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                </h5>
                <p className={`text-[9px] font-bold leading-tight mt-0.5 ${isGitHubConnected ? "text-slate-400" : "text-gray-400"}`}>
                  Sync repos, auto-track ML projects, commits, contributions
                </p>

                <div className="flex items-center gap-1.5 mt-2">
                  <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                    ml-projects
                  </span>
                  <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                    rag-chatbot
                  </span>
                  <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                    transformer-from-scratch
                  </span>
                </div>
              </div>
            </div>

            {isGitHubConnected ? (
              <div className="border-t border-[#1e293b] pt-3 text-[9px] font-bold text-slate-300">
                @john_doe · 24 repos · 342 contributions this year
              </div>
            ) : (
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <input
                  type="text"
                  defaultValue="john_coder"
                  className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleConnectGitHub}
                  disabled={isGitHubConnected}
                  className="text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 bg-gray-900 hover:bg-black text-white cursor-pointer"
                >
                  Connect with GitHub
                </button>
              </div>
            )}
          </div>

          {/* LinkedIn */}
          <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isLinkedInConnected ? "bg-[#eef4ff] border border-[#c7d8ff]" : "bg-white border border-[#e2e8f0]"}`}>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h5 className="text-[11px] font-black text-gray-800 leading-tight flex items-center gap-2">
                  Connect LinkedIn
                  {isLinkedInConnected && <span className="bg-[#dbeafe] text-[#2563eb] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                </h5>
                <p className="text-[9px] font-bold text-gray-400 leading-tight mt-0.5">
                  Get AI-powered profile optimization, job matching, referral network
                </p>
              </div>
            </div>

            {isLinkedInConnected ? (
              <div className="border-t border-[#c7d8ff] pt-3 text-[9px] font-bold text-[#334155] flex items-center justify-between">
                <span>JD · John Doe · 500+ connections · Profile strength 78%</span>
                <span className="text-[#2563eb]">♙</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <input
                  type="text"
                  defaultValue="john_coder"
                  className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleConnectLinkedIn}
                  disabled={isLinkedInConnected}
                  className="text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                >
                  Connect LinkedIn
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Progress Completion indicator */}
        <div className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e2e8f0] flex flex-col gap-3 mt-6 text-left">
          <div className="flex items-center justify-between text-[10px] font-black">
            <span className="text-[#2B50EC] uppercase tracking-wider">
              Profile Completion - {profileProgress}%
            </span>
            <span className="text-gray-400">Complete all 3 to unlock dashboard modules</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300" style={{ width: `${profileProgress}%` }} />
          </div>
        </div>

        {/* Actions navigation links */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/dashboard"
            className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-1.5 w-full sm:flex-1 cursor-pointer"
          >
            <span>Go to Dashboard</span>
            <span>→</span>
          </Link>

          <button
            type="button"
            onClick={onViewReceipt}
            className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all border border-[#e2e8f0] shadow-sm flex items-center justify-center gap-1.5 w-full sm:flex-1 cursor-pointer"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View Receipt</span>
          </button>
        </div>

        <span className="text-[10px] font-bold text-[#64748b] block text-center mt-1">
          Need help? <a href="mailto:support@consistency.ai" className="text-[#2B50EC] hover:underline">support@consistency.ai</a> - Response in 2 hours
        </span>
      </div>
    </div>
  );
}
