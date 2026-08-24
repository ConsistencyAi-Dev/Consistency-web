"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  heroSparkSvg, heroStreakSvg, heroGoalSvg,
  chipSparkSvg, arrowRight14Svg,
} from "@/assets";

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
      title: "Gen AI  Cohort",
      match: "BEST MATCH 98%",
      duration: "1 Year",
      rating: "4.9",
      students: "240",
      skills: ["React", "Node.js", "PostgreSQL"],
      mentor: "Alex Morgan",
      mentorTitle: "Ex-Google, Staff Eng",
      mentorAvatar: "A",
      price: "₹35,000",
      originalPrice: "₹40,000",
      startDate: null,
      disabled: false,
      gradient: "linear-gradient(170deg, #2B50EC 0%, #8B9EFF 100%)",
      badgeBg: "bg-white",
      badgeTextColor: "text-[#2B50EC]",
      showSpark: true,
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
      mentorAvatar: "P",
      price: "₹28,000",
      originalPrice: "₹35,000",
      startDate: "Sep 25, 2026",
      disabled: true,
      gradient: "linear-gradient(170deg, #0F172A 0%, #334155 100%)",
      badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
      badgeTextColor: "text-white",
      showSpark: false,
    },
    {
      title: "Full Stack Developer",
      match: "85% MATCH",
      duration: "1 Year",
      rating: "4.7",
      students: "120",
      skills: ["Next.js", "Tailwind", "Framer Motion"],
      mentor: "David Chen",
      mentorTitle: "Ex-Vercel, Design Eng",
      mentorAvatar: "D",
      price: "₹21,000",
      originalPrice: "₹28,000",
      startDate: "Oct 10, 2026",
      disabled: true,
      gradient: "linear-gradient(170deg, #F59E0B 0%, #EC4899 100%)",
      badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
      badgeTextColor: "text-white",
      showSpark: false,
    },
  ];

  const mentors = [
    { name: "Alex Morgan", rating: "4.9", title: "Staff Engineer @ Linear • 2.1k students", initial: "AM", color: "bg-[#2B50EC]" },
    { name: "Priya Singh", rating: "4.9", title: "Senior SWE @ Meta • 1.8k students", initial: "PS", color: "bg-[#0F172A]" },
    { name: "David Chen", rating: "4.8", title: "Design Engineer @ Vercel • 1.2k students", initial: "DC", color: "bg-[#F59E0B]" },
  ];

  return (
    <div className="w-full flex flex-col gap-4 text-left">
      <div className="rounded-2xl bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] p-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col items-start justify-between gap-3.5 rounded-[15px] bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] px-5 py-3 text-white xl:flex-row xl:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.15)] backdrop-blur-[4px]">
              <Image src={heroSparkSvg} alt="Spark" width={20} height={20} />
            </div>
            <div>
              <h2 className="text-[16px] md:text-[17px] font-semibold leading-snug">Welcome, Rahul! Let&apos;s find your perfect learning path</h2>
              <p className="mt-1 max-w-[560px] text-[12px] leading-relaxed text-[rgba(255,255,255,0.8)]">
                You&apos;ve completed your goals assessment. Our AI has crafted a personalized roadmap — enroll in
                a cohort to unlock it.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.15)] px-3.5 py-2 text-[11px] leading-[16px] backdrop-blur-[4px]">
              <Image src={heroStreakSvg} alt="Streak" width={16} height={16} />
              Streak 0 days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold leading-[16px] text-[#2B50EC] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <Image src={heroGoalSvg} alt="Goal" width={16} height={16} />
              Goal: Get a Job in 6 months
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left content, Right sidebars widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-start">
        {/* Left Column contents */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col items-start justify-between gap-3 px-5 pb-3 pt-5 xl:flex-row xl:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C7D2FE] bg-[#EEF2FF] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.275px] leading-[15px] text-[#2B50EC]">
                    <Image src={chipSparkSvg} alt="AI" width={12} height={12} />
                    AI GENERATED
                  </span>
                  <span className="text-[10px] leading-[15px] text-[#94A3B8]">Updated today</span>
                </div>
                <h3 className="pt-1.5 text-[15px] font-semibold leading-[22px] tracking-tight text-[#0F172A]">Your AI Learning Path</h3>
                <p className="text-[12px] leading-5 text-[#64748B]">
                  Based on your goal: <span className="text-[#334155]">Switch to Software Engineering</span>, we recommend:
                </p>
              </div>

              <div className="flex items-center gap-3 self-end xl:self-auto">
                <div className="text-right">
                  <p className="text-[10px] leading-[15px] text-[#94A3B8]">OVERALL PROGRESS</p>
                  <p className="text-[12px] font-semibold leading-[18px] text-[#0F172A]">0% • 16 weeks</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#2B50EC] text-[11px] font-semibold leading-[16.5px] text-[#0F172A]">
                  0%
                </div>
              </div>
            </div>

            <div className="mx-[7px] mb-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                {learningPathSteps.map((step, idx) => (
                  <div key={step.num} className="relative flex flex-col items-center text-center">
                    {idx < learningPathSteps.length - 1 && (
                      <div className="absolute left-[calc(50%+28px)] top-[18px] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-[#E2E8F0] to-[#CBD5E1] sm:block" />
                    )}
                    <div
                      className={`z-10 flex h-9 w-9 items-center justify-center rounded-full border text-[12px] font-semibold leading-[18px] ${
                        idx === 0
                          ? "border-[#2B50EC] bg-[#2B50EC] text-white shadow-[0px_4px_6px_rgba(43,80,236,0.3)]"
                          : "border-[#E2E8F0] bg-white text-[#64748B]"
                      }`}
                    >
                      {step.num}
                    </div>
                    <p className="pt-1.5 text-[11px] leading-[14px] text-[#1E293B]">{step.name}</p>
                    <p className="text-[10px] leading-[14px] text-[#94A3B8]">{step.duration}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-[6px] w-20 rounded-full bg-[#E2E8F0]" />
                  <span className="text-[10px] leading-[15px] text-[#64748B]">0 of 5 milestones completed</span>
                </div>
                <button className="inline-flex items-center gap-1 text-[11px] leading-[16.5px] text-[#2B50EC] transition-colors hover:text-[#1E3BB3]">
                  <span>View detailed roadmap</span>
                  <Image src={arrowRight14Svg} alt="Arrow" width={14} height={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Top Cohorts grid list */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-800 tracking-tight">Top Cohorts For You</h3>
              <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2B50EC] hover:text-[#1E3BB3] transition-colors">
                <span>View all</span>
                <Image src={arrowRight14Svg} alt="Arrow" width={14} height={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {cohorts.map((cohort, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] flex flex-col justify-between"
                >
                  <div>
                    {/* Header banner area */}
                    <div
                      className="relative h-[110px] w-full overflow-hidden"
                      style={{ background: cohort.gradient }}
                    >
                      {/* Match Badge */}
                      <div className={`absolute left-[12px] top-[12px] inline-flex items-center gap-[4px] rounded-full px-[8px] py-[4px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] ${cohort.badgeBg}`}>
                        {cohort.showSpark && (
                          <Image
                            src={chipSparkSvg}
                            alt="Spark"
                            width={12}
                            height={12}
                            className="h-[12px] w-[12px]"
                          />
                        )}
                        <span className={`text-[10px] font-semibold leading-[15px] tracking-[0.25px] ${cohort.badgeTextColor}`}>
                          {cohort.match}
                        </span>
                      </div>

                      {/* Mentor Avatar Stack */}
                      <div className="absolute right-[12px] top-[68px] inline-flex items-start">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/90 outline outline-2 -outline-offset-2 outline-white">
                          <span className="text-center text-[10px] font-semibold leading-[15px] text-[#0F172A]">
                            {cohort.mentorAvatar}
                          </span>
                        </div>
                        <div className="relative h-[28px] w-[20px]">
                          <div className="absolute -left-[8px] top-0 inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-black/20 outline outline-2 -outline-offset-2 outline-white/50 backdrop-blur-[4px]">
                            <svg className="h-[12px] w-[12px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Live + Recorded badge */}
                      <div className="absolute left-[12px] top-[79px] inline-flex items-center gap-[6px]">
                        <div className="relative flex h-[14px] w-[14px] items-center justify-center">
                          <svg className="h-[14px] w-[14px] text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-normal leading-[16.5px] text-white/90">
                          Live + Recorded
                        </span>
                      </div>
                    </div>

                    {/* Meta stats details */}
                    <div className="p-3.5 flex flex-col text-left">
                      <h4 className="text-[12px] font-bold text-[#0F172A] leading-tight mb-2">
                        {cohort.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[10px] font-medium text-[#94A3B8] mb-2.5 pb-2 border-b border-[#F1F5F9]">
                        <span>{cohort.duration}</span>
                        <span>•</span>
                        <span>⭐ {cohort.rating}</span>
                        <span>•</span>
                        <span>👥 {cohort.students}</span>
                      </div>

                      {/* Skill badges */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cohort.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[9px] font-medium px-2 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Mentor block */}
                      <div className="flex items-center gap-2 border-t border-[#F1F5F9] pt-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#F1F5F9] text-[#475569] flex items-center justify-center font-bold text-[10px] shrink-0 uppercase border border-[#E2E8F0]">
                          {cohort.mentor.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <h5 className="text-[11px] font-bold text-[#0F172A] leading-tight">
                            {cohort.mentor}
                          </h5>
                          <span className="text-[9px] font-medium text-[#94A3B8] leading-tight block">
                            {cohort.mentorTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase price and enroll button */}
                  <div className="p-3 border-t border-[#F1F5F9] bg-[#F8FAFC] flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[18px] font-semibold leading-[27px] text-[#0F172A]">{cohort.price}</span>
                        <span className="text-[11px] font-normal text-[#94A3B8] line-through leading-[16.5px]">{cohort.originalPrice}</span>
                      </div>
                      {cohort.startDate && (
                        <div className="flex items-center gap-1">
                          <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F26C6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          <span className="text-[10.5px] font-normal leading-[15.75px] text-[#F26C6C]">Starts {cohort.startDate}</span>
                        </div>
                      )}
                    </div>
                    {cohort.disabled ? (
                      <button
                        disabled
                        className="opacity-50 bg-[#0F172A] text-white text-[12.5px] font-semibold py-[6px] px-4 rounded-full cursor-not-allowed select-none"
                      >
                        Enroll
                      </button>
                    ) : (
                      <Link
                        href="/cohort-enroll"
                        className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-[12.5px] font-semibold py-[6px] px-4 rounded-full shadow-sm transition-all active:scale-[0.98] inline-block"
                      >
                        Enroll
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Upcoming Workshops */}
          <div className="inline-flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
            {/* Header */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V22H4V12" />
                    <path d="M22 7H2v5h20V7z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-semibold leading-[21px] text-[#0F172A]">Upcoming Free Workshops</h3>
              </div>
              <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-[11px] font-normal leading-[16.5px] text-[#047857] outline outline-[1px] outline-[#A7F3D0] -outline-offset-[1px]">
                Free for you
              </span>
            </div>

            {/* Workshop cards grid */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  type: "Career",
                  date: "Tomorrow, 7 PM IST",
                  title: "How to crack FAANG in 90 days",
                  author: "by Alex Morgan",
                },
                {
                  type: "Live Build",
                  date: "Sat, 11 AM IST",
                  title: "System Design Live: Design YouTube",
                  author: "by Priya Singh",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl bg-[#F8FAFC] p-3 outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  {/* Dark icon thumb */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#0F172A]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" />
                      <rect x="3" y="6" width="12" height="12" rx="2" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold leading-[15px] tracking-[0.25px] text-[#0F172A] bg-white outline outline-[1px] outline-[#E5E7EB] -outline-offset-[1px]">
                        {item.type}
                      </span>
                      <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">{item.date}</span>
                    </div>
                    <p className="text-[13px] font-normal leading-[16.25px] text-[#0F172A] line-clamp-1">{item.title}</p>
                    <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">{item.author}</span>
                  </div>

                  {/* Arrow button */}
                  <button className="absolute right-3 top-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] hover:bg-gray-50 cursor-pointer">
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="#0F172A" strokeWidth={1.33}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13L13 3M13 3H6M13 3v7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Card 4: Free vs Pro table */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-1">
              <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">Free vs Pro – what changes after enrollment?</h3>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[13px] font-medium transition-colors whitespace-nowrap">
                Upgrade anytime
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                    <th className="pb-3 w-full">Feature</th>
                    <th className="pb-3 text-center px-6">Free</th>
                    <th className="pb-3 text-center px-4">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "AI Learning Path", free: true, pro: true },
                    { name: "Cohort Access (Live + Recorded)", free: false, pro: true },
                    { name: "Mentor 1:1 Sessions", free: false, pro: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="text-[13px]">
                      <td className="py-3.5 font-normal text-gray-800">{row.name}</td>
                      <td className="py-3.5 text-center px-6">
                        {row.free ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-emerald-400">
                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-gray-200">
                            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 text-center px-4">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2B50EC]">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column sidebar widgets */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Widget 1: Profile Strength indicator card */}
          <div className="inline-flex w-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
            {/* Header */}
            <div className="flex w-full items-center justify-between">
              <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-[#0F172A]">Profile Strength</h4>
              <span className="rounded-full bg-[#FFFBEB] px-2 py-1 text-[11px] font-semibold leading-[16.5px] text-[#B45309] outline outline-[1px] outline-[#FDE68A] -outline-offset-[1px]">60%</span>
            </div>

            {/* Progress bar + description */}
            <div className="flex w-full flex-col gap-[7px]">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-[#FBBF24] to-[#F97316]"
                  style={{ width: "60%" }}
                />
              </div>
              <p className="text-[11.5px] font-normal leading-[17.25px] text-[#64748B]">
                Complete your profile to get better matches.
              </p>
            </div>

            {/* Checklist */}
            <div className="flex w-full flex-col gap-[10px] pt-1">
              {/* Done: Goals assessment */}
              <div className="flex w-full items-center gap-[10px]">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-normal leading-[18.75px] text-[#334155] line-through">Goals assessment</span>
              </div>

              {/* Done: Basic profile */}
              <div className="flex w-full items-center gap-[10px]">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-normal leading-[18.75px] text-[#334155] line-through">Basic profile</span>
              </div>

              {/* Pending: Add resume / LinkedIn */}
              <div className="flex w-full items-center gap-[10px]">
                <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
                <span className="text-[12.5px] font-normal leading-[18.75px] text-[#334155]">Add resume / LinkedIn</span>
                <button className="ml-auto text-[10px] font-normal leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3] cursor-pointer">Complete</button>
              </div>

              {/* Pending: Skill assessment */}
              <div className="flex w-full items-center gap-[10px]">
                <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
                <span className="text-[12.5px] font-normal leading-[18.75px] text-[#334155]">Skill assessment quiz (5 min)</span>
                <button className="ml-auto text-[10px] font-normal leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3] cursor-pointer">Complete</button>
              </div>
            </div>
          </div>

          {/* Widget 2: Potential Mentors */}
          <div className="inline-flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
            {/* Header */}
            <div className="flex w-full items-center justify-between">
              <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-[#0F172A]">Meet Your Potential Mentors</h4>
              <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">1:1 trial</span>
            </div>

            {/* Mentor list */}
            <div className="flex w-full flex-col gap-3">
              {mentors.map((mentor, idx) => (
                <div key={idx} className="flex w-full items-center gap-3">
                  {/* Avatar */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${mentor.color} text-[11px] font-semibold leading-[16.5px] text-white`}>
                    {mentor.initial}
                  </div>

                  {/* Name + subtitle */}
                  <div className="flex flex-1 flex-col items-start">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-normal leading-[19.5px] text-[#0F172A]">{mentor.name}</span>
                      <div className="flex items-center gap-0.5">
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="#FBBF24">
                          <path d="M6 0.5l1.545 3.13 3.455.503-2.5 2.437.59 3.437L6 8.25l-3.09 1.757.59-3.437L1 4.133l3.455-.502L6 0.5Z" />
                        </svg>
                        <span className="text-[11px] font-normal leading-[16.5px] text-[#0F172A]">{mentor.rating}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">{mentor.title}</span>
                  </div>

                  {/* Arrow button */}
                  <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] hover:bg-gray-50 transition-colors cursor-pointer">
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="#0F172A" strokeWidth={1.33}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13L13 3M13 3H6M13 3v7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* View all CTA */}
            <button className="inline-flex h-9 w-full items-center justify-center rounded-full bg-[#F8FAFC] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] text-[12.5px] font-normal leading-[18.75px] text-[#0F172A] transition-colors hover:bg-gray-100 cursor-pointer">
              View all mentors
            </button>
          </div>

          {/* Widget 3: Why Consistency AI? */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-5 text-white shadow-[0_18px_48px_rgba(15,23,42,0.35)]">
            <div className="absolute -top-16 -right-[46px] h-48 w-48 rounded-full opacity-40 bg-[linear-gradient(135deg,#2B50EC_0%,#7C3AED_100%)] blur-[20px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-white">Why Consistency AI?</h4>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { stat: "12K+", label: "students" },
                  { stat: "89%", label: "placement" },
                  { stat: "4.9", label: "rating", star: true },
                ].map(({ stat, label, star }) => (
                  <div key={label} className="rounded-[10px] border border-white/10 bg-white/10 p-3 text-left">
                    <div className="flex items-center gap-1 text-[18px] font-semibold leading-[18px] text-white">
                      <span>{stat}</span>
                      {star && (
                        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#FACC15]" aria-hidden="true">
                          <path d="M12 1.75l2.76 5.59 6.17.9-4.46 4.35 1.05 6.12L12 0.45l-5.52 2.96 1.05-6.12L3.07 8.24l6.17-.9L12 1.75Z" />
                        </svg>
                      )}
                    </div>
                    <div className="mt-px text-[10.5px] font-normal leading-[15.75px] text-white/70">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-normal leading-[16.5px] text-white/60">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Trusted by engineers at Google, Meta, Amazon</span>
              </div>
            </div>
          </div>

          {/* Widget 4: Have a coupon + Invite Friends */}
          <div className="inline-flex w-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
            {/* Header */}
            <div className="flex w-full items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#2B50EC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12V22H4V12" />
                  <path d="M22 7H2v5h20V7z" />
                  <path d="M12 22V7" />
                  <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <h4 className="text-[13px] font-semibold leading-[19.5px] text-[#0F172A]">Have a coupon?</h4>
              <span className="ml-auto rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold leading-[15px] text-[#047857] outline outline-[1px] outline-[#A7F3D0] -outline-offset-[1px]">
                -20% OFF
              </span>
            </div>

            {/* Input row */}
            <div className="flex w-full items-center gap-2">
              <input
                type="text"
                placeholder="Enter code"
                className="h-9 flex-1 rounded-full bg-[#F8FAFC] px-4 text-[12.5px] font-normal text-[#6B7280] placeholder:text-[#6B7280] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] focus:outline-[#2B50EC] focus:bg-white transition-all"
              />
              <button className="h-9 rounded-full bg-[#0F172A] px-4 text-[12px] font-normal leading-[18px] text-white hover:bg-black transition-colors cursor-pointer">
                Apply
              </button>
            </div>

            {/* Invite friends sub-section */}
            <div className="flex w-full items-center gap-3 rounded-xl bg-[linear-gradient(178deg,#F8FAFC_0%,#EEF2FF_100%)] px-3 pb-3 pt-4 outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white outline outline-[1px] outline-[#E5E7EB] -outline-offset-[1px]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M19 8v6M22 11h-6" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-[12px] font-normal leading-[18px] text-[#0F172A]">Invite friend → Get $30</span>
                <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">They get $30 off too</span>
              </div>
              <button className="text-[11px] font-semibold leading-[16.5px] text-[#2B50EC] hover:text-[#1E3BB3] cursor-pointer">
                Invite
              </button>
            </div>
          </div>

          {/* Widget 6: Need help choosing */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#EEF2FF] p-5 outline outline-[1px] outline-[#C7D2FE] -outline-offset-[1px] flex flex-col items-start gap-3">
            {/* Glow blob */}
            <div className="absolute right-1 top-0 h-24 w-24 rounded-full bg-[rgba(43,80,236,0.10)] blur-[12px] pointer-events-none" />

            <div className="flex items-start gap-3 w-full">
              {/* Icon pill */}
              <div className="flex h-10 w-[29px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#C7D2FE] -outline-offset-[1px]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2B50EC" strokeWidth={1.67}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative flex-1">
                <h5 className="m-0 text-[13.5px] font-semibold leading-[20.25px] text-[#0F172A]">Need help choosing?</h5>
                <p className="mt-1 text-xs font-normal leading-[19.5px] text-[#475569]">
                  Not sure which cohort fits your goals? Talk to our learning advisor — free 15 min.
                </p>
                <button className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#2B50EC] px-4 py-2 text-[12.5px] font-normal leading-[18.75px] text-white shadow-[0px_4px_12px_rgba(43,80,236,0.25)] cursor-pointer border-none hover:bg-[#1E3BB3] transition-colors">
                  Book free counseling
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.67}>
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </button>
                <div className="mt-3 flex items-center gap-1.5">
                  <svg className="h-3 w-3 shrink-0 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="text-[10.5px] font-normal leading-[15.75px] text-[#64748B]">Avg response 2h • No spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
