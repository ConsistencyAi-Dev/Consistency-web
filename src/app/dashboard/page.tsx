"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const learningPathSteps = [
    { num: 1, name: "Foundations", duration: "4w" },
    { num: 2, name: "DSA", duration: "3w" },
    { num: 3, name: "System Design", duration: "2w" },
    { num: 4, name: "AI/ML", duration: "4w" },
    { num: 5, name: "Interview Prep", duration: "2w" },
  ];

  const cohorts = [
    {
      title: "AI/ML Mastery Cohort",
      match: "BEST MATCH 96%",
      duration: "1 Year",
      rating: "4.9",
      students: "240",
      skills: ["React", "Node.js", "PostgreSQL"],
      mentor: "Alex Morgan",
      mentorTitle: "Ex-Google, Staff Eng",
      price: "$299",
      originalPrice: "$408",
      gradient: "from-blue-600 to-indigo-700",
      tagColor: "bg-blue-500 text-white",
    },
    {
      title: "DSA + System Design Cohort",
      match: "92% MATCH",
      duration: "6 Months",
      rating: "4.8",
      students: "180",
      skills: ["DSA", "System Design", "Mock Interviews"],
      mentor: "Priya Singh",
      mentorTitle: "Ex-Meta, Senior Staff",
      price: "$199",
      originalPrice: "$349",
      gradient: "from-[#1E293B] to-[#0F172A]",
      tagColor: "bg-gray-700 text-gray-100",
    },
    {
      title: "Full Stack Developer",
      match: "89% MATCH",
      duration: "1 Year",
      rating: "4.7",
      students: "120",
      skills: ["Next.js", "Tailwind", "Framer Motion"],
      mentor: "David Chen",
      mentorTitle: "Ex-Vercel, Design Eng",
      price: "$149",
      originalPrice: "$249",
      gradient: "from-[#F97316] to-[#EA580C]",
      tagColor: "bg-orange-500 text-white",
    },
  ];

  const mentors = [
    { name: "Alex Morgan", rating: "4.9", title: "Staff Engineer @ Linear - 2.2K students", initial: "AM", color: "bg-blue-600" },
    { name: "Priya Singh", rating: "4.9", title: "Senior SWE @ Meta - 3.8K students", initial: "PS", color: "bg-pink-600" },
    { name: "David Chen", rating: "4.8", title: "Design Engineer @ Vercel - 1.2K students", initial: "DC", color: "bg-orange-500" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Top Banner (Blue Card) */}
      <div className="w-full bg-[#2B50EC] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-blue-500/10">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-blue-200">Personalized Plan</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
            Welcome, Rahul! Let&apos;s find your perfect learning path
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm font-semibold mt-1 max-w-[650px]">
            You&apos;ve completed your goals assessment. Our AI has crafted a personalized roadmap – enroll in a cohort to unlock it.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
          <span className="bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl text-xs font-black tracking-wide flex items-center gap-1.5 backdrop-blur-sm">
            🔥 Streak: 0 days
          </span>
          <span className="bg-white text-gray-900 px-3.5 py-2 rounded-xl text-xs font-black tracking-wide flex items-center gap-1.5 shadow-sm">
            🎯 Goal: Get a job in 6 months
          </span>
        </div>
      </div>

      {/* Main Grid: Left content, Right sidebars widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
        {/* Left Column contents */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Card 1: Your AI Learning Path progress step circles */}
          <div className="bg-white rounded-3xl  p-6 sm:p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-4 mb-6">
              <div>
                <span className="bg-blue-50 text-[#2B50EC] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                  ✨ AI Generated
                </span>
                <span className="text-[10px] font-bold text-gray-400 ml-2">Updated today</span>
                <h3 className="text-base font-black text-gray-800 tracking-tight mt-1">Your AI Learning Path</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black text-gray-400">OVERALL PROGRESS</span>
                <div className="relative w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[10px] font-black text-gray-700 shadow-inner">
                  0%
                </div>
              </div>
            </div>

            <p className="text-xs font-semibold text-gray-500 mb-6">
              Based on your goal: <strong className="text-gray-800 font-bold">Switch to Software Engineering</strong>, we recommend:
            </p>

            {/* Path Steps visualization circles */}
            <div className="grid grid-cols-5 gap-2 relative mb-6">
              {learningPathSteps.map((step, idx) => (
                <div key={step.num} className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-sm transition-all border ${idx === 0
                      ? "bg-[#2B50EC] text-white border-[#2B50EC]"
                      : "bg-white text-gray-500 border-gray-200"
                    }`}>
                    {step.num}
                  </div>
                  <span className="text-[10px] font-black text-gray-800 tracking-tight mt-2.5 leading-tight block truncate w-full">
                    {step.name}
                  </span>
                  <span className="text-[9px] font-bold text-gray-400 leading-tight block">
                    {step.duration}
                  </span>
                </div>
              ))}

              {/* Connector Line behind steps */}
              <div className="absolute top-4 left-6 right-6 h-[1.5px] bg-gray-100 z-0" />
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-6">
              <span className="text-[10px] font-bold text-gray-400">0 of 5 milestones completed</span>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black transition-all flex items-center gap-0.5">
                <span>View detailed roadmap</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>

          {/* Card 2: Top Cohorts grid list */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-gray-800 tracking-tight">Top Cohorts For You</h3>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black transition-all">
                View all &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cohorts.map((cohort, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl  overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Tag Header banner area */}
                    <div className={`bg-gradient-to-r ${cohort.gradient} p-4.5 text-white flex flex-col relative`}>
                      <span className={`self-start text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 shadow-inner ${cohort.tagColor}`}>
                        {cohort.match}
                      </span>

                      <div className="flex items-center gap-1.5 text-[9px] font-black text-white/80 mb-1.5">
                        <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Live + Recorded</span>
                      </div>

                      <h4 className="text-xs font-black leading-tight tracking-tight mt-1">
                        {cohort.title}
                      </h4>
                    </div>

                    {/* Meta stats details */}
                    <div className="p-4 flex flex-col text-left">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 mb-3 border-b border-gray-50 pb-2">
                        <span>{cohort.duration}</span>
                        <span>•</span>
                        <span>⭐ {cohort.rating}</span>
                        <span>•</span>
                        <span>👥 {cohort.students}</span>
                      </div>

                      {/* Skill badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {cohort.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-50 border border-gray-100 text-gray-500 text-[8px] font-bold px-2 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Mentor block */}
                      <div className="flex items-center gap-2 border-t border-gray-50 pt-3">
                        <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-black text-[10px] shrink-0 uppercase border border-gray-200">
                          {cohort.mentor.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <h5 className="text-[10px] font-black text-gray-800 leading-tight">
                            {cohort.mentor}
                          </h5>
                          <span className="text-[8px] font-semibold text-gray-400 leading-tight block">
                            {cohort.mentorTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase price and enroll button */}
                  <div className="p-4 border-t border-gray-100/60 bg-gray-50/50 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="text-xs font-black text-gray-800">{cohort.price}</span>
                      <span className="text-[10px] font-bold text-gray-400 line-through ml-1">
                        {cohort.originalPrice}
                      </span>
                    </div>
                    <Link
                      href="/cohort-enroll"
                      className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-[10px] font-black py-1.5 px-3 rounded-lg shadow-sm transition-all active:scale-[0.98] inline-block"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Upcoming Workshops */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-sm font-extrabold text-gray-800 tracking-tight">Upcoming Free Workshops</h3>
              <span className="bg-emerald-50 text-[#10B981] border border-emerald-100 text-[8px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md">
                Free for you
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  type: "Career",
                  date: "12/08/24, 7 PM IST",
                  title: "How to crack FAANG in 90 days",
                  author: "by Alex Morgan",
                },
                {
                  type: "Live Build",
                  date: "15/8, 11 AM IST",
                  title: "System Design Live: Design YouTube",
                  author: "by Priya Singh",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-gray-100 bg-white flex items-center justify-between gap-4 transition-all hover:bg-gray-50/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-black uppercase text-gray-400 tracking-wider">
                          {item.type}
                        </span>
                        <span className="text-gray-300 text-[8px]">•</span>
                        <span className="text-[8px] font-bold text-gray-400">{item.date}</span>
                      </div>
                      <h4 className="text-xs font-black text-gray-800 leading-snug mt-1">
                        {item.title}
                      </h4>
                      <span className="text-[9px] font-bold text-gray-400 leading-tight block">
                        {item.author}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-300 font-extrabold text-base hover:text-gray-600 cursor-pointer">↗</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Free vs Pro table */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-sm font-extrabold text-gray-800 tracking-tight">Free vs Pro – what changes after enrollment?</h3>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black transition-colors">
                Upgrade anytime
              </button>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-xs font-semibold">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100">
                    <th className="py-2.5 font-black uppercase text-[9px] tracking-wider">Feature</th>
                    <th className="py-2.5 font-black uppercase text-[9px] tracking-wider">Free</th>
                    <th className="py-2.5 font-black uppercase text-[9px] tracking-wider">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {[
                    { name: "AI Learning Path", free: true, pro: true },
                    { name: "Cohort Access (Live + Recorded)", free: false, pro: true },
                    { name: "Mentor 1:1 Sessions", free: false, pro: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/30">
                      <td className="py-3 font-bold text-gray-800">{row.name}</td>
                      <td className="py-3">
                        {row.free ? (
                          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3">
                        {row.pro ? (
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column sidebar widgets */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* Widget 1: Profile Strength indicator card */}
          <div className="bg-white rounded-2xl  p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Profile Strength</h4>
              <span className="bg-[#FFFBEB] text-[#D97706] text-[9px] font-black py-0.5 px-2 rounded-md border border-[#FEF3C7]">
                60%
              </span>
            </div>

            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: "60%" }} />
            </div>

            <p className="text-[10px] font-semibold text-gray-400 leading-snug mb-4">
              Complete your profile to get better matches.
            </p>

            <ul className="space-y-3.5 text-xs font-bold text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Goals assessment</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Basic profile</span>
              </li>
              <li className="flex items-center justify-between gap-2 text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-gray-200 shrink-0 block" />
                  <span>Add resume / LinkedIn</span>
                </div>
                <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[10px] font-black cursor-pointer">
                  Complete
                </button>
              </li>
              <li className="flex items-center justify-between gap-2 text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-gray-200 shrink-0 block" />
                  <span>Skill assessment quiz (5 min)</span>
                </div>
                <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[10px] font-black cursor-pointer">
                  Complete
                </button>
              </li>
            </ul>
          </div>

          {/* Widget 2: Potential Mentors */}
          <div className="bg-white rounded-2xl  p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Meet Your Potential Mentors</h4>
              <span className="text-[9px] font-bold text-gray-400">1:1 trial</span>
            </div>

            <div className="space-y-4">
              {mentors.map((mentor, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl ${mentor.color} text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm shadow-blue-500/10`}>
                      {mentor.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h5 className="text-[11px] font-black text-gray-800 leading-tight">
                          {mentor.name}
                        </h5>
                        <span className="text-[9px] font-black text-amber-500">⭐ {mentor.rating}</span>
                      </div>
                      <span className="text-[9px] font-bold text-gray-400 leading-tight block">
                        {mentor.title}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-950 font-extrabold text-sm shrink-0">
                    ↗
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 bg-gray-50 hover:bg-gray-100  text-gray-700 text-[10px] font-black py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer">
              View all mentors
            </button>
          </div>

          {/* Widget 3: Why Consistency AI? */}
          <div className="bg-[#0B0F19] text-white rounded-2xl border border-gray-800 p-5 shadow-sm">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Why Consistency AI?</h4>
            <div className="grid grid-cols-3 gap-2 text-center py-1">
              <div className="flex flex-col">
                <span className="text-sm font-black text-white">12K+</span>
                <span className="text-[9px] font-bold text-gray-500 leading-tight">students</span>
              </div>
              <div className="flex flex-col border-x border-gray-800">
                <span className="text-sm font-black text-white">89%</span>
                <span className="text-[9px] font-bold text-gray-500 leading-tight">placement</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white">4.9 ★</span>
                <span className="text-[9px] font-bold text-gray-500 leading-tight">rating</span>
              </div>
            </div>
            <div className="mt-4 pt-3.5 border-t border-gray-800 flex items-center justify-center gap-1.5 text-[9px] font-bold text-gray-400">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Trusted by engineers at Google, Meta, Amazon.</span>
            </div>
          </div>

          {/* Widget 4: Have a coupon? */}
          <div className="bg-white rounded-2xl  p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3.5">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span>Have a coupon?</span>
              </h4>
              <span className="bg-[#E6F4EA] text-[#137333] text-[9px] font-black px-1.5 py-0.5 rounded-md">
                -25% OFF
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner"
              />
              <button className="bg-gray-900 hover:bg-black text-white text-xs font-black px-4 py-2 rounded-xl transition-all shadow-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Widget 5: Invite Friends */}
          <div className="bg-white rounded-2xl  p-5 shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4.5 h-4.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[11px] font-black text-gray-800 leading-tight">
                  Invite Friend – Get $30
                </h5>
                <span className="text-[9px] font-bold text-gray-400 leading-tight block">
                  They get $30 off too
                </span>
              </div>
            </div>
            <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black transition-colors shrink-0">
              Invite
            </button>
          </div>

          {/* Widget 6: Need help choosing */}
          <div className="bg-[#2B50EC]/5 border border-[#2B50EC]/10 rounded-2xl p-5 shadow-sm text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#2B50EC]/10 flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xs font-black text-gray-800 leading-tight">Need help choosing?</h5>
                <p className="text-[9px] font-bold text-gray-400 leading-snug mt-1">
                  Not sure which cohort fits your goals? Talk to our learning advisor – free 15 min.
                </p>
              </div>
            </div>

            <button className="w-full mt-4 bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-[10px] font-black py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer">
              <span>Book free counseling</span>
            </button>
            <span className="text-[8px] font-bold text-gray-400 text-center mt-2.5 w-full block">
              ⚡ Response within 2h • No spam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
