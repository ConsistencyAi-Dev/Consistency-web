"use client";

import React from "react";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[12px] w-[12px]">
      <path d="M12 2.5l2.74 5.56 6.14.89-4.44 4.33 1.05 6.12L12 0 6.51 19.4l1.05-6.12L3.12 9l6.14-.89L12 2.5Z" />
    </svg>
  );
}

function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[16px] w-[16px] text-white/60">
      <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
      <circle cx="10" cy="7" r="3.5" />
      <path d="M19 18v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function WhyConsistencySection() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="relative mx-auto w-full max-w-[389px] overflow-hidden rounded-[16px] bg-[#0F172A] p-[20px] pt-[19px] pb-[20px] shadow-[0_18px_48px_rgba(15,23,42,0.35)]">
        <div
          className="absolute -top-[64px] h-[192px] w-[192px] rounded-full opacity-40"
          style={{
            right: "-46.34px",
            background: "linear-gradient(135deg, #2B50EC 0%, #7C3AED 100%)",
            boxShadow: "40px 40px 40px",
            filter: "blur(20px)",
          }}
        />

        <div className="relative flex flex-col gap-[15.5px]">
          <div className="w-full">
            <h2 className="font-['Stack_Sans_Headline:SemiBold'] text-[13.5px] font-semibold leading-[20.25px] text-white">
              Why Consistency AI?
            </h2>
          </div>

          <div className="flex w-full items-start justify-center gap-[12px]">
            <div className="w-[108.44px] shrink-0 rounded-[10px] border border-white/10 bg-white/10 p-[12px]">
              <div className="mb-[3px] flex flex-col">
                <div className="font-['Stack_Sans_Headline:SemiBold'] text-[18px] font-semibold leading-[18px] text-white">
                  12k+
                </div>
              </div>
              <div className="font-['Stack_Sans_Headline:Regular'] text-[10.5px] font-normal leading-[15.75px] text-white/70">
                students
              </div>
            </div>

            <div className="w-[108.45px] shrink-0 rounded-[10px] border border-white/10 bg-white/10 p-[12px]">
              <div className="mb-[3px] flex flex-col">
                <div className="font-['Stack_Sans_Headline:SemiBold'] text-[18px] font-semibold leading-[18px] text-white">
                  89%
                </div>
              </div>
              <div className="font-['Stack_Sans_Headline:Regular'] text-[10.5px] font-normal leading-[15.75px] text-white/70">
                placement
              </div>
            </div>

            <div className="w-[108.44px] shrink-0 rounded-[10px] border border-white/10 bg-white/10 p-[12px]">
              <div className="mb-[3px] flex items-center gap-[4px]">
                <div className="font-['Stack_Sans_Headline:SemiBold'] whitespace-nowrap text-[18px] font-semibold leading-[18px] text-white">
                  4.9
                </div>
                <div className="flex h-[12px] w-[12px] items-center justify-center text-[#facc15]">
                  <StarIcon />
                </div>
              </div>
              <div className="font-['Stack_Sans_Headline:Regular'] text-[10.5px] font-normal leading-[15.75px] text-white/70">
                rating
              </div>
            </div>
          </div>

          <div className="flex w-full items-center gap-[8px]">
            <div className="flex h-[16px] w-[16px] items-center justify-center text-white/60">
              <TrustIcon />
            </div>
            <div className="font-['Stack_Sans_Headline:Regular'] whitespace-nowrap text-[11px] font-normal leading-[16.5px] text-white/60">
              Trusted by engineers at Google, Meta, Amazon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
