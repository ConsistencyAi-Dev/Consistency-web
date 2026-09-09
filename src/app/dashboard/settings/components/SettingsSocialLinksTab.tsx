"use client";

import React, { useState } from "react";

interface SettingsSocialLinksTabProps {
  github: string;
  setGithub: (v: string) => void;
  linkedin: string;
  setLinkedin: (v: string) => void;
  leetcode: string;
  setLeetcode: (v: string) => void;
}

export default function SettingsSocialLinksTab({
  github,
  setGithub,
  linkedin,
  setLinkedin,
  leetcode,
  setLeetcode,
}: SettingsSocialLinksTabProps) {
  const [isEditingGithub, setIsEditingGithub] = useState(false);
  const [isEditingLinkedin, setIsEditingLinkedin] = useState(false);

  const cleanHandle = (url: string, prefix: string) => {
    return url.replace(new RegExp(`^https?:\\/\\/(www\\.)?${prefix}\\/?`, "i"), "").replace(/\/$/, "");
  };

  return (
    <div className="space-y-4">
      {/* Card 1: LeetCode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF7A00] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
            LC
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">LeetCode</h4>
            <p className="text-[11px] text-[#64748B]">
              {leetcode ? `Connected @${cleanHandle(leetcode, "leetcode.com")}` : "Not connected"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="leetcode username"
            value={leetcode}
            onChange={(e) => setLeetcode(e.target.value)}
            className="rounded-xl border border-[#E2E8F0] px-3.5 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC] w-full sm:w-44"
          />
        </div>
      </div>

      {/* Card 2: GitHub */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
            GH
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">GitHub</h4>
            <p className="text-[11px] text-[#059669] font-medium">
              {github ? `Connected @${cleanHandle(github, "github.com")}` : "Connect your repositories"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isEditingGithub || !github ? (
            <input
              type="text"
              placeholder="github username or URL"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              onBlur={() => {
                if (github) setIsEditingGithub(false);
              }}
              className="rounded-xl border border-[#E2E8F0] px-3.5 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC] w-full sm:w-44"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsEditingGithub(true)}
              className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* Card 3: LinkedIn */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2B50EC] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
            IN
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#0F172A]">LinkedIn</h4>
            <p className="text-[11px] text-[#059669] font-medium">
              {linkedin ? `Connected @${cleanHandle(linkedin, "linkedin.com/in")}` : "Add LinkedIn profile"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isEditingLinkedin || !linkedin ? (
            <input
              type="text"
              placeholder="linkedin profile URL"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              onBlur={() => {
                if (linkedin) setIsEditingLinkedin(false);
              }}
              className="rounded-xl border border-[#E2E8F0] px-3.5 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC] w-full sm:w-44"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsEditingLinkedin(true)}
              className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
