"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { chipSparkSvg } from "@/assets";
import { CohortItem } from "./dashboardData";

interface CohortCardProps {
  cohort: CohortItem;
}

export default function CohortCard({ cohort }: CohortCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] flex flex-col justify-between">
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
  );
}
