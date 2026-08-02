"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function FullStackDeveloperHero() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/book-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit waitlist request.");
      }
      setShowModal(true);
      setName("");
      setMobile("");
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-37.5 pb-16 sm:pb-20 px-4 sm:px-6 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto rounded-4xl bg-linear-to-br from-indigo-50 via-[#EEF2FF] to-blue-50 px-6 sm:px-10 lg:px-16 py-14 sm:py-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column — Info */}
            <div className="flex-1 w-full text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FEF2F2] border border-[#FEE2E2] px-4 py-2 rounded-full text-sm font-medium text-[#DC2626] shadow-sm mb-6">
                <CalendarIcon />
                <span>Admissions close &nbsp;·&nbsp; Reserve your seat for next batch</span>
              </div>

              {/* Rating metrics row */}
              <div className="flex flex-wrap items-center gap-6 mb-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-indigo-50/50 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <span className="text-amber-500 text-sm">★</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-sm">4.9/5 Rating</span>
                    <span className="text-gray-400 text-xs font-medium">from 1000+ students</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-indigo-100/60 hidden sm:block" />
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-sm">1,200+</span>
                    <span className="text-gray-400 text-xs font-medium">Students joined</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-indigo-100/60 hidden sm:block" />
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-sm">15+</span>
                    <span className="text-gray-400 text-xs font-medium">Hiring partners</span>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.1] text-gray-900 font-sans mb-5 max-w-xl">
                Become job ready in <span className="text-blue-600">Full stack developer</span> expert at our online cohort
              </h1>

              <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-md mb-8 font-medium">
                A proven program trusted by 1000s of learners to become software professionals
              </p>

              {/* Core Features list */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    💻
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-bold text-xs">AI Mentor</span>
                    <span className="text-gray-400 text-[10px]">Personalized guidance</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    📹
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-bold text-xs">Live Classes</span>
                    <span className="text-gray-400 text-[10px]">Interactive learning</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    📈
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-bold text-xs">Placement Support</span>
                    <span className="text-gray-400 text-[10px]">Dedicated support</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    📁
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-bold text-xs">Real Projects</span>
                    <span className="text-gray-400 text-[10px]">Industry experience</span>
                  </div>
                </div>
              </div>

              <button className="border-2 border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#2563EB]/5 px-7 py-3 rounded-lg font-semibold text-[15px] transition-all shadow-sm hover:translate-y-[-0.5px]">
                View curriculum
              </button>
            </div>

            {/* Right Column — Lead Form */}
            <div className="relative w-full max-w-sm shrink-0">
              <div className="absolute -inset-6 bg-blue-200/40 rounded-[40px] blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl shadow-xl ring-1 ring-black/5 p-7 sm:p-8 flex flex-col">
                <h2 className="text-gray-900 text-xl font-bold font-sans text-center mb-0.5">
                  Reserve Your Seat
                </h2>
                <p className="text-slate-400 text-xs font-semibold text-center mb-6">
                  join the next batch
                </p>

                {status && (
                  <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-xs font-medium mb-4">
                    {status.message}
                  </div>
                )}

                <label className="block text-sm font-semibold text-gray-700 mb-1.5 text-left">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-shadow mb-5"
                />

                <label className="block text-sm font-semibold text-gray-700 mb-1.5 text-left">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-shadow mb-5"
                />

                {/* Bullets details */}
                <div className="flex flex-col gap-2.5 text-left mb-6 mt-1 text-[13px] font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px]">📅</span>
                    <span>Next batch starts in September</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px]">⏳</span>
                    <span>Limited seats available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px]">⚡</span>
                    <span>We'll contact you within 24 hours</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-4 mb-5 text-left">
                  By proceeding further, I agree to the Terms &amp; Conditions and{" "}
                  <a href="#" className="text-blue-600 font-bold hover:underline">
                    Privacy Policy
                  </a>{" "}
                  of Consistency .ai
                </p>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] text-white py-3.5 rounded-xl font-semibold text-[15px] hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] hover:translate-y-[-0.5px] transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                >
                  {loading ? "Joining..." : "Join waitlist"}
                </button>

                <span className="text-[10px] text-gray-400 text-center font-medium">
                  🔒 Your information is secure. No spam. Unsubscribe anytime.
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-4xl p-8 sm:p-10 max-w-md w-full flex flex-col items-center text-center shadow-2xl relative border border-gray-100">
            {/* Blue checkmark circle */}
            <div className="w-16 h-16 bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 mb-2 leading-tight">
              You're on the waitlist
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium max-w-70">
              we've successfully added you to the waitlist we'll notify you when seats open up
            </p>

            {/* Session Details Box */}
            <div className="bg-indigo-50/20 border border-indigo-100/50 rounded-2xl p-5 w-full text-left mb-6">
              <h3 className="text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-4">
                Session Details
              </h3>

              <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Advisor</span>
                  <span className="text-gray-800 font-bold">Full stack Admissions Team</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Format</span>
                  <span className="text-gray-800 font-bold">Full stack cohort</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Delivery Method</span>
                  <span className="text-blue-600 font-bold">SMS Invite & Calendar Link</span>
                </div>
              </div>
            </div>

            {/* Got it Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[#0055FF] bg-gradient-to-r from-[#0066FF] to-[#0044FF] text-white py-3.5 rounded-xl font-semibold text-[15px] hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] transition-all mb-4"
            >
              Got it
            </button>

            {/* Back to Homepage Link */}
            <button 
              onClick={() => {
                setShowModal(false);
                router.push("/");
              }}
              className="text-sm text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Back to homepage
            </button>

            <p className="text-[10px] text-slate-400 font-medium mt-6 leading-relaxed">
              Need to reschedule? Check your SMS invitation or contact admissions support.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
