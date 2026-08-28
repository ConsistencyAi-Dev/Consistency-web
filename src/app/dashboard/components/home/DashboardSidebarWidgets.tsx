"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { iconClockSmallSvg } from "@/assets";
import { MENTORS_DATA } from "./dashboardData";
import { getProfileStrengthApi } from "@/lib/api";

export default function DashboardSidebarWidgets() {
  const [strength, setStrength] = useState<number>(60);
  const [hasGoals, setHasGoals] = useState<boolean>(true);
  const [hasBasicProfile, setHasBasicProfile] = useState<boolean>(true);
  const [hasResumeOrLinkedIn, setHasResumeOrLinkedIn] = useState<boolean>(false);
  const [hasQuiz, setHasQuiz] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("auth_user");
      const token = localStorage.getItem("auth_token") || undefined;
      if (stored) {
        const user = JSON.parse(stored);
        
        const goalsCompleted = Boolean(user.goals || localStorage.getItem("isOnboarded") === "true");
        const basicCompleted = Boolean(user.name && user.email);
        const resumeOrLiCompleted = Boolean(user.linkedinUrl || user.resumeFile);
        const quizCompleted = Boolean(user.quizAttempted || (user.profileStrength && user.profileStrength > 60));

        setHasGoals(goalsCompleted);
        setHasBasicProfile(basicCompleted);
        setHasResumeOrLinkedIn(resumeOrLiCompleted);
        setHasQuiz(quizCompleted);

        // Calculate fallback strength from fields
        let computed = 20;
        if (goalsCompleted) computed += 10;
        if (basicCompleted) computed += 10;
        if (user.mobile || user.location) computed += 10;
        if (resumeOrLiCompleted) computed += 15;
        if (quizCompleted) computed += 35;
        computed = Math.min(100, user.profileStrength || computed);

        setStrength(computed);

        // Fetch real backend strength analytics
        if (user.id) {
          getProfileStrengthApi(user.id, token)
            .then((res) => {
              if (res.data?.overallStrength) {
                setStrength(res.data.overallStrength);
                if (res.data.fieldStatus) {
                  const resumeStatus = res.data.fieldStatus.find((f) => f.field === "Resume Upload" || f.field === "LinkedIn Profile");
                  if (resumeStatus?.completed) setHasResumeOrLinkedIn(true);
                }
                if (res.data.breakdown?.isQuizCompleted) {
                  setHasQuiz(true);
                }
              }
            })
            .catch(() => {});
        }
      }
    } catch (e) {}
  }, []);

  const getStrengthBadge = () => {
    if (strength >= 80) return { text: `${strength}%`, color: "bg-[#ECFDF5] text-[#047857] outline-[#A7F3D0]" };
    if (strength >= 50) return { text: `${strength}%`, color: "bg-[#EFF6FF] text-[#1D4ED8] outline-[#BFDBFE]" };
    return { text: `${strength}%`, color: "bg-[#FFFBEB] text-[#B45309] outline-[#FDE68A]" };
  };

  const getGradient = () => {
    if (strength >= 80) return "from-[#10B981] to-[#059669]";
    if (strength >= 50) return "from-[#2B50EC] to-[#6366F1]";
    return "from-[#FBBF24] to-[#F97316]";
  };

  const badge = getStrengthBadge();

  return (
    <div className="flex flex-col gap-4 lg:col-span-1">
      {/* Widget 1: Profile Strength indicator card */}
      <div className="inline-flex w-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-[#0F172A]">Profile Strength</h4>
          <span className={`rounded-full px-2 py-1 text-[11px] font-semibold leading-[16.5px] outline outline-[1px] -outline-offset-[1px] ${badge.color}`}>
            {badge.text}
          </span>
        </div>

        <div className="flex w-full flex-col gap-[7px]">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
            <div
              className={`absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r ${getGradient()} transition-all duration-700 ease-out`}
              style={{ width: `${strength}%` }}
            />
          </div>
          <p className="text-[11.5px] font-normal leading-[17.25px] text-[#64748B]">
            {strength >= 80
              ? "All-star profile! Your visibility to mentors is maximized."
              : "Complete your profile to get better matches and mentor feedback."}
          </p>
        </div>

        {/* Checklist */}
        <div className="flex w-full flex-col gap-[10px] pt-1">
          {/* Goals assessment */}
          <div className="flex w-full items-center gap-[10px]">
            {hasGoals ? (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
            )}
            <span className={`text-[12.5px] font-normal leading-[18.75px] text-[#334155] ${hasGoals ? "line-through text-[#64748B]" : ""}`}>
              Goals assessment
            </span>
            {!hasGoals && (
              <Link href="/dashboard/settings" className="ml-auto text-[10px] font-semibold leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3]">
                Complete
              </Link>
            )}
          </div>

          {/* Basic profile */}
          <div className="flex w-full items-center gap-[10px]">
            {hasBasicProfile ? (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
            )}
            <span className={`text-[12.5px] font-normal leading-[18.75px] text-[#334155] ${hasBasicProfile ? "line-through text-[#64748B]" : ""}`}>
              Basic profile
            </span>
            {!hasBasicProfile && (
              <Link href="/dashboard/settings" className="ml-auto text-[10px] font-semibold leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3]">
                Complete
              </Link>
            )}
          </div>

          {/* Add resume / LinkedIn */}
          <div className="flex w-full items-center gap-[10px]">
            {hasResumeOrLinkedIn ? (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
            )}
            <span className={`text-[12.5px] font-normal leading-[18.75px] text-[#334155] ${hasResumeOrLinkedIn ? "line-through text-[#64748B]" : ""}`}>
              Add resume / LinkedIn
            </span>
            {!hasResumeOrLinkedIn && (
              <Link href="/dashboard/settings" className="ml-auto text-[10px] font-semibold leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3]">
                Complete
              </Link>
            )}
          </div>

          {/* Skill assessment quiz */}
          <div className="flex w-full items-center gap-[10px]">
            {hasQuiz ? (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2B50EC] outline outline-[1px] outline-[#2B50EC] -outline-offset-[1px]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="h-5 w-5 shrink-0 rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]" />
            )}
            <span className={`text-[12.5px] font-normal leading-[18.75px] text-[#334155] ${hasQuiz ? "line-through text-[#64748B]" : ""}`}>
              Skill assessment quiz (5 min)
            </span>
            {!hasQuiz && (
              <Link href="/dashboard/settings" className="ml-auto text-[10px] font-semibold leading-[15px] text-[#2B50EC] hover:text-[#1E3BB3]">
                Complete
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Widget 2: Potential Mentors */}
      <div className="inline-flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-[13.5px] font-semibold leading-[20.25px] text-[#0F172A]">Meet Your Potential Mentors</h4>
          <span className="text-[11px] font-normal leading-[16.5px] text-[#64748B]">1:1 trial</span>
        </div>

        <div className="flex w-full flex-col gap-3">
          {MENTORS_DATA.map((mentor, idx) => (
            <div key={idx} className="flex w-full items-center gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${mentor.color} text-[11px] font-semibold leading-[16.5px] text-white`}>
                {mentor.initial}
              </div>

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

              <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="#0F172A" strokeWidth={1.33}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13L13 3M13 3H6M13 3v7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

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
                <div className="flex items-center gap-1 text-[18px] font-bold leading-[18px] text-white">
                  <span>{stat}</span>
                  {star && (
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#FACC15]" aria-hidden="true">
                      <path d="M12 1.75l2.76 5.59 6.17.9-4.46 4.35 1.05 6.12L12 0.45l-5.52 2.96 1.05-6.12L3.07 8.24l6.17-.9L12 1.75Z" />
                    </svg>
                  )}
                </div>
                <div className="mt-px text-[10.5px] font-semibold leading-[15.75px] text-white/80">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] font-normal leading-[16.5px] text-white/70">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>
              Trusted by engineers at <strong className="font-bold text-black">Google, Meta, Amazon</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Widget 4: Have a coupon + Invite Friends */}
      <div className="relative inline-flex w-full flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
        <div className="flex w-full items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#2B50EC" strokeWidth={1.67} strokeLinecap="round" strokeLinejoin="round">
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

        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.5)] backdrop-blur-[6px]">
          <div className="flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-[#0F172A] px-3.5 py-2 text-white shadow-[0px_6px_8px_rgba(0,0,0,0.08)]">
            <Image src={iconClockSmallSvg} alt="" width={14} height={14} className="brightness-0 invert" />
            <span className="text-xs font-bold leading-4">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Widget 5: Need help choosing */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-[#EEF2FF] p-5 outline outline-[1px] outline-[#C7D2FE] -outline-offset-[1px] flex flex-col items-start gap-3">
        <div className="absolute right-1 top-0 h-24 w-24 rounded-full bg-[rgba(43,80,236,0.10)] blur-[12px] pointer-events-none" />

        <div className="flex items-start gap-3 w-full">
          <div className="flex h-10 w-[29px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#C7D2FE] -outline-offset-[1px]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2B50EC" strokeWidth={1.67}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

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
  );
}
