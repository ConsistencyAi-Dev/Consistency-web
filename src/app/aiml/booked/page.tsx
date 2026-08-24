import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { logoPng, textPng } from "@/assets";

export default function SessionBookedPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col justify-between">
      <Navbar />
      {/* Content Wrapper */}
      <main className="max-w-6xl mx-auto w-full px-6 pt-35 pb-16 sm:pb-24 lg:pt-40 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left Column — Confirmation Card */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 sm:p-10 max-w-lg w-full flex flex-col items-center text-center relative z-10">
          
          {/* Blue checkmark circle */}
          <div className="w-16 h-16 bg-[#0055FF] bg-gradient-to-r from-[#0066FF] to-[#0044FF] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-[28px] sm:text-[32px] font-bold font-sans text-gray-900 mt-6 mb-4">
            Session booked!
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm font-medium">
            Congratulations! Your free 1-on-1 advisor session has been successfully scheduled. We're excited to help you jumpstart your AI/ML journey.
          </p>

          {/* Session Details Box */}
          <div className="bg-indigo-50/20 border border-indigo-100/50 rounded-2xl p-6 w-full text-left mb-6">
            <h2 className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-4">
              Session Details
            </h2>

            <div className="flex flex-col gap-3.5 text-sm font-medium">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Advisor</span>
                <span className="text-gray-800 font-bold">AI/ML Admissions Team</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Format</span>
                <span className="text-gray-800 font-bold">1-on-1 Live Mentorship Call</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Delivery Method</span>
                <span className="text-blue-600 font-bold">SMS Invite & Calendar Link</span>
              </div>
            </div>
          </div>

          {/* Notification Alert Box */}
          <div className="flex gap-3 bg-indigo-50/10 border border-indigo-100/30 rounded-2xl p-4 w-full text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <p className="text-[11.5px] leading-relaxed text-[#4F46E5] font-semibold">
              We have sent an instant SMS containing your direct access room link and calendar invite to your registered mobile number. Please confirm your slot within the next 15 minutes.
            </p>
          </div>

          <p className="text-xs text-slate-400 font-medium mt-6">
            Need to reschedule? Check your SMS invitation or contact admissions support.
          </p>
        </div>

        {/* Right Column — Info Area */}
        <div className="max-w-md w-full text-left flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <img src={logoPng.src} alt="Logo" className="h-8 w-auto object-contain" />
            <img src={textPng.src} alt="Consistency.AI" className="h-7 w-auto object-contain ml-1" />
          </div>

          <h3 className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-3">
            While You Wait
          </h3>

          <h2 className="text-[28px] sm:text-[34px] font-bold font-sans text-gray-900 leading-tight mb-4">
            Experience Consistency.ai
          </h2>

          <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
            Our cohorts are designed to build unbreakable, daily coding routines. Here is a sneak-peek of your future dashboard tracker.
          </p>

          <Link href="/dashboard" className="inline-flex items-center gap-2 text-xs text-blue-600 font-bold hover:underline cursor-pointer uppercase tracking-wider">
            Visual AI/ML model trainer interface preview
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
