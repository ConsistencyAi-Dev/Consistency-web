"use client";

import React from "react";

export default function SettingsSocialLinksTab() {
  return (
    <div className="space-y-4">
      {/* Card 1: LeetCode */}
      <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF7A00] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            LC
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">LeetCode</h4>
            <p className="text-[11px] text-[#64748B]">Not connected</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="leetcode username"
            className="rounded-xl border border-[#E2E8F0] px-3.5 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC] w-40"
          />
          <button className="rounded-xl bg-[#0F172A] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black transition-colors cursor-pointer">
            Verify
          </button>
        </div>
      </div>

      {/* Card 2: GitHub */}
      <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            GH
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">GitHub</h4>
            <p className="text-[11px] text-[#059669] font-medium">Connected @rahul-kumar / 48 repos</p>
          </div>
        </div>
        <button className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer">
          Manage
        </button>
      </div>

      {/* Card 3: LinkedIn */}
      <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2B50EC] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            IN
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">LinkedIn</h4>
            <p className="text-[11px] text-[#059669] font-medium">Connected ✓</p>
          </div>
        </div>
        <button className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer">
          Manage
        </button>
      </div>
    </div>
  );
}
