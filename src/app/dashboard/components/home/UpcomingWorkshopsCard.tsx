"use client";

import React from "react";
import { WORKSHOPS_DATA } from "./dashboardData";

export default function UpcomingWorkshopsCard() {
  return (
    <div className="inline-flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px]">
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

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {WORKSHOPS_DATA.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl bg-[#F8FAFC] p-3 outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#0F172A]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
              </svg>
            </div>

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

            <button className="absolute right-3 top-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white outline outline-[1px] outline-[#E2E8F0] -outline-offset-[1px] hover:bg-gray-50 cursor-pointer">
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="#0F172A" strokeWidth={1.33}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13L13 3M13 3H6M13 3v7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
