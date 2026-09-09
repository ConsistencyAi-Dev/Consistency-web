"use client";

import React, { useState } from "react";

interface SettingsGeneralTabProps {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  onEditProfile: () => void;
  getInitials: (name?: string) => string;
}

export default function SettingsGeneralTab({
  fullName,
  email,
  phone,
  location,
  onEditProfile,
  getInitials,
}: SettingsGeneralTabProps) {
  const [language, setLanguage] = useState("English (US)");
  const [timezone, setTimezone] = useState("Asia/Kolkata (IST - GMT+5:30)");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

  return (
    <div className="space-y-6">
      {/* Profile Overview Card */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-[linear-gradient(135deg,#EEF2FF_0%,#FFFFFF_100%)] p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_100%)] text-white font-bold text-lg shadow-md shrink-0">
              {getInitials(fullName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#0F172A]">{fullName || "Consistency Learner"}</h3>
                <span className="rounded-full bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 text-[10px] font-semibold text-[#2B50EC]">
                  Free Plan
                </span>
              </div>
              <p className="text-xs text-[#64748B] mt-0.5">{email || "learner@consistency.ai"}</p>
              {(location || phone) && (
                <p className="text-[11px] text-[#94A3B8] mt-1">
                  {[location, phone].filter(Boolean).join(" • ")}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onEditProfile}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2B50EC] px-4 py-2.5 text-xs font-semibold text-white shadow-[0px_4px_12px_rgba(43,80,236,0.25)] hover:bg-[#1E3BB3] transition-colors cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Regional & Localization Settings */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-4 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Language &amp; Region</h4>
          <p className="text-[11px] text-[#64748B]">Set your preferred language and time formatting</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs text-[#475569]">
            <span className="block mb-1.5 font-semibold text-[#475569]">Display Language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white p-2.5 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] focus:outline-none"
            >
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Hindi (हिन्दी)</option>
            </select>
          </label>

          <label className="block text-xs text-[#475569]">
            <span className="block mb-1.5 font-semibold text-[#475569]">Time Zone</span>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white p-2.5 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] focus:outline-none"
            >
              <option>Asia/Kolkata (IST - GMT+5:30)</option>
              <option>UTC (Coordinated Universal Time)</option>
              <option>America/New_York (EST - GMT-5)</option>
              <option>America/Los_Angeles (PST - GMT-8)</option>
              <option>Europe/London (GMT+0)</option>
            </select>
          </label>
        </div>

        <label className="block text-xs text-[#475569]">
          <span className="block mb-1.5 font-semibold text-[#475569]">Date Format</span>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="w-full sm:w-1/2 rounded-xl border border-[#E2E8F0] bg-white p-2.5 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] focus:outline-none"
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </label>
      </div>

      {/* Account Info Card */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-3 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Account Information</h4>
        <div className="divide-y divide-[#F1F5F9] text-xs">
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[#64748B]">Account Type</span>
            <span className="font-semibold text-[#0F172A]">Student Portal</span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[#64748B]">Status</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#059669]">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" /> Active
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[#64748B]">Registered Email</span>
            <span className="font-medium text-[#0F172A]">{email || "Not specified"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
