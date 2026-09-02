"use client";

import React from "react";
import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We are actively working on this feature to bring you the best experience. Stay tuned for updates!",
}: ComingSoonProps) {
  return (
    <div className="flex min-h-[65vh] w-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] text-[#2B50EC] shadow-sm">
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <span className="mb-2 inline-flex rounded-full bg-[rgba(43,80,236,0.1)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2B50EC]">
        Feature In Development
      </span>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
        {title}
      </h2>
      <p className="mb-6 max-w-md text-sm leading-relaxed text-[#64748B]">
        {description}
      </p>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 rounded-xl bg-[#2B50EC] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#1E3BB3]"
      >
        <span>← Back to Home</span>
      </Link>
    </div>
  );
}
