"use client";

import React from "react";
import Image from "next/image";
import { heroSparkSvg, heroStreakSvg, heroGoalSvg } from "@/assets";

interface DashboardHeroBannerProps {
  userName: string;
}

export default function DashboardHeroBanner({ userName }: DashboardHeroBannerProps) {
  return (
    <div className="rounded-2xl bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] p-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col items-start justify-between gap-3.5 rounded-[15px] bg-[linear-gradient(90deg,#2B50EC_0%,#3B63FF_50%,#6D8AFF_100%)] px-5 py-3 text-white xl:flex-row xl:items-center">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.15)] backdrop-blur-[4px]">
            <Image src={heroSparkSvg} alt="Spark" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[17px] font-semibold leading-snug">
              Welcome, {userName}! Let&apos;s find your perfect learning path
            </h2>
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
  );
}
