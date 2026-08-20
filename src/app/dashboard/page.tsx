"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      gradient: "from-[#2B50EC] to-[#7C3AED]",
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
    <div className="w-full flex flex-col gap-4 text-left">
      <div className="rounded-2xl bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] p-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col items-start justify-between gap-3.5 rounded-[15px] bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] px-5 py-3 text-white xl:flex-row xl:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.15)] backdrop-blur-[4px]">
              <Image src="/assets/images/figma-dashboard/hero-spark.svg" alt="Spark" width={20} height={20} />
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
              <Image src="/assets/images/figma-dashboard/hero-streak.svg" alt="Streak" width={16} height={16} />
              Streak 0 days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold leading-[16px] text-[#2B50EC] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <Image src="/assets/images/figma-dashboard/hero-goal.svg" alt="Goal" width={16} height={16} />
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
                    <Image src="/assets/images/figma-dashboard/chip-spark.svg" alt="AI" width={12} height={12} />
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
                  <Image src="/assets/images/figma-dashboard/arrow-right-14.svg" alt="Arrow" width={14} height={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Top Cohorts grid list */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-800 tracking-tight">Top Cohorts For You</h3>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[11px] font-black transition-all">
                View all &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {cohorts.map((cohort, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Tag Header banner area */}
                    <div className={`bg-gradient-to-br ${cohort.gradient} p-3.5 text-white flex flex-col relative`}>
                      <span className={`self-start text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-2.5 shadow-inner ${cohort.tagColor}`}>
                        {cohort.match}
                      </span>

                      <div className="flex items-center gap-1.5 text-[9px] font-black text-white/80 mb-1">
                        <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Live + Recorded</span>
                      </div>

                      <h4 className="text-[11px] font-black leading-tight tracking-tight mt-0.5">
                        {cohort.title}
                      </h4>
                    </div>

                    {/* Meta stats details */}
                    <div className="p-3 flex flex-col text-left">
                      <div className="flex items-center gap-2.5 text-[9px] font-bold text-gray-400 mb-2 border-b border-gray-50 pb-1.5">
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
                            className="bg-gray-50 border border-gray-100 text-gray-500 text-[8px] font-bold px-2 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Mentor block */}
                      <div className="flex items-center gap-2 border-t border-gray-50 pt-2.5">
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
                  <div className="p-3 border-t border-gray-100/60 bg-gray-50/50 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="text-[11px] font-black text-gray-800">{cohort.price}</span>
                      <span className="text-[9px] font-bold text-gray-400 line-through ml-1">
                        {cohort.originalPrice}
                      </span>
                    </div>
                    <Link
                      href="/cohort-enroll"
                      className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-[9px] font-black py-1 px-2.5 rounded-md shadow-sm transition-all active:scale-[0.98] inline-block"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Upcoming Workshops */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
              <h3 className="text-xs font-extrabold text-gray-800 tracking-tight">Upcoming Free Workshops</h3>
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
                  title: "Building a SaaS from scratch",
                  author: "by Sarah Jenkins",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-gray-100 bg-white flex items-center justify-between gap-3.5 transition-all hover:bg-gray-50/50 cursor-pointer"
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
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
              <h3 className="text-xs font-extrabold text-gray-800 tracking-tight">Free vs Pro – what changes after enrollment?</h3>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[11px] font-black transition-colors">
                Upgrade anytime
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[9px] uppercase font-black text-gray-400 border-b border-gray-50">
                    <th className="pb-2">Feature</th>
                    <th className="pb-2">Free</th>
                    <th className="pb-2">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Live Sessions", free: true, pro: true },
                    { name: "Recorded Lectures", free: true, pro: true },
                    { name: "1:1 Mentorship", free: false, pro: true },
                    { name: "Mock Interviews", free: false, pro: true },
                    { name: "Resume Review", free: false, pro: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="text-[10px] border-b border-gray-50 last:border-none">
                      <td className="py-2 font-bold text-gray-800">{row.name}</td>
                      <td className="py-2">
                        {row.free ? (
                          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-2">
                        {row.pro ? (
                          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Widget 1: Profile Strength indicator card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-[10px] font-black text-gray-800 uppercase tracking-wider">Profile Strength</h4>
              <span className="text-[9px] font-black text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">60%</span>
            </div>

            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: "60%" }} />
            </div>

            <p className="text-[10px] font-semibold text-gray-400 leading-snug mb-4">
              Complete your profile to get better matches.
            </p>

            <ul className="space-y-2 text-xs font-bold text-gray-600">
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
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[10px] font-black text-gray-800 uppercase tracking-wider">Meet Your Potential Mentors</h4>
              <span className="text-[9px] font-bold text-gray-400">1:1 trial</span>
            </div>

            <div className="space-y-3">
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

            <button className="w-full mt-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-[9px] font-black py-2 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer">
              View all mentors
            </button>
          </div>

          {/* Widget 3: Why Consistency AI? */}
          <div className="relative overflow-hidden rounded-[16px] bg-[#0F172A] p-[20px] pt-[19px] pb-[20px] text-white shadow-[0_18px_48px_rgba(15,23,42,0.35)]">
            <div
              className="absolute -top-[64px] h-[192px] w-[192px] rounded-full opacity-40"
              style={{
                right: "-46.34px",
                background: "linear-gradient(135deg, #2B50EC 0%, #7C3AED 100%)",
                boxShadow: "40px 40px 40px",
                filter: "blur(20px)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-[15.5px]">
              <div>
                <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-white">
                  Why Consistency AI?
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-[12px]">
                <div className="rounded-[10px] border border-white/10 bg-white/10 p-[12px] text-left">
                  <div className="text-[18px] font-semibold leading-[18px] text-white">12K+</div>
                  <div className="mt-[3px] text-[10.5px] font-normal leading-[15.75px] text-white/70">students</div>
                </div>

                <div className="rounded-[10px] border border-white/10 bg-white/10 p-[12px] text-left">
                  <div className="text-[18px] font-semibold leading-[18px] text-white">89%</div>
                  <div className="mt-[3px] text-[10.5px] font-normal leading-[15.75px] text-white/70">placement</div>
                </div>

                <div className="rounded-[10px] border border-white/10 bg-white/10 p-[12px] text-left">
                  <div className="flex items-center gap-[4px] text-[18px] font-semibold leading-[18px] text-white">
                    <span>4.9</span>
                    <svg viewBox="0 0 24 24" className="h-[12px] w-[12px] fill-[#FACC15]" aria-hidden="true">
                      <path d="M12 1.75l2.76 5.59 6.17.9-4.46 4.35 1.05 6.12L12 0.45l-5.52 2.96 1.05-6.12L3.07 8.24l6.17-.9L12 1.75Z" />
                    </svg>
                  </div>
                  <div className="mt-[3px] text-[10.5px] font-normal leading-[15.75px] text-white/70">rating</div>
                </div>
              </div>

              <div className="flex items-center gap-[8px] text-[11px] font-normal leading-[16.5px] text-white/60">
                <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] shrink-0 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
                  <circle cx="10" cy="7" r="3.5" />
                  <path d="M19 18v-1a4 4 0 0 0-3-3.87" />
                  <path d="M16 4.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Trusted by engineers at Google, Meta, Amazon</span>
              </div>
            </div>
          </div>

          {/* Widget 4: Have a coupon? */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-[10px] font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
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
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner"
              />
              <button className="bg-gray-900 hover:bg-black text-white text-xs font-black px-4 py-2 rounded-lg transition-all shadow-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Widget 5: Invite Friends */}
          <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3">
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
          <div className="bg-[#2B50EC]/5 border border-[#2B50EC]/10 rounded-2xl p-4 shadow-sm text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#2B50EC]/10 flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[11px] font-black text-gray-800 leading-tight">Need help choosing?</h5>
                <p className="text-[9px] font-bold text-gray-400 leading-snug mt-1">
                  Not sure which cohort fits your goals? Talk to our learning advisor – free 15 min.
                </p>
              </div>
            </div>

            <button className="w-full mt-3 bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-[9px] font-black py-2 rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer">
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
