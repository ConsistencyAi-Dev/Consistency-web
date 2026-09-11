"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { chipSparkSvg, arrowRight14Svg } from "@/assets";
import { LEARNING_PATH_STEPS } from "./dashboardData";

export default function LearningPathCard() {
  return (
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
          {LEARNING_PATH_STEPS.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="relative flex flex-col items-center text-center">
                {idx < LEARNING_PATH_STEPS.length - 1 && (
                  <div className="absolute left-[calc(50%+24px)] top-[17px] hidden w-[calc(100%-48px)] items-center justify-center gap-1.5 sm:flex z-0">
                    <div className="h-[1.5px] w-6 sm:w-10 max-w-[40px] bg-[#CBD5E1]" />
                    <svg className="h-3.5 w-3.5 text-[#CBD5E1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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

              {idx < LEARNING_PATH_STEPS.length - 1 && (
                <div className="my-2 flex flex-col items-center justify-center sm:hidden text-[#CBD5E1] gap-1">
                  <div className="w-[1.5px] h-5 bg-[#CBD5E1]" />
                  <svg className="h-3.5 w-3.5 text-[#CBD5E1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-[6px] w-20 rounded-full bg-[#E2E8F0]" />
            <span className="text-[10px] leading-[15px] text-[#64748B]">0 of 5 milestones completed</span>
          </div>
          <Link href="/dashboard/roadmap" prefetch={true} className="inline-flex items-center gap-1 text-[11px] leading-[16.5px] text-[#2B50EC] transition-colors hover:text-[#1E3BB3] cursor-pointer">
            <span>View detailed roadmap</span>
            <Image src={arrowRight14Svg} alt="Arrow" width={14} height={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
