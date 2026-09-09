"use client";

import React from "react";
import Image from "next/image";
import { brandMarkSvg } from "@/assets";

export default function DashboardLoading() {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-[#F9FBFF] text-center px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(48.1deg,#2B50EC_27.45%,#61D3F9_94.96%)] shadow-[0px_10px_24px_rgba(43,80,236,0.28)] animate-pulse">
          <Image
            src={brandMarkSvg}
            alt="Consistency AI"
            width={34}
            height={34}
            className="h-[34px] w-[34px]"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2B50EC] border-t-transparent" />
            <p className="text-[17px] font-semibold text-[#0F172A] tracking-tight">
              Loading your dashboard...
            </p>
          </div>
          <p className="text-[12px] uppercase font-medium tracking-wider text-[#64748B]">
            Consistency AI Student Portal
          </p>
        </div>
      </div>
    </div>
  );
}
