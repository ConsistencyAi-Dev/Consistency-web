"use client";

import React from "react";
import { InputField } from "./SettingsCommon";

interface SettingsProfileTabProps {
  fullName: string;
  setFullName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  bio: string;
  setBio: (v: string) => void;
}

export default function SettingsProfileTab({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  location,
  setLocation,
  bio,
  setBio,
}: SettingsProfileTabProps) {
  const getInitials = (name?: string) => {
    if (!name || !name.trim()) return "U";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Avatar Upload Row */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_100%)] text-xl font-bold text-white shadow-md">
            {getInitials(fullName)}
          </div>
          <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#E2E8F0] shadow-sm">
            <svg className="w-3 h-3 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[#0F172A] text-base">{fullName || "Learner"}</h3>
          <p className="text-xs text-[#64748B]">PNG · Recommended 400x400</p>
          <div className="flex items-center gap-2.5 mt-2">
            <button className="rounded-full bg-[#0F172A] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black transition-colors cursor-pointer">
              Change avatar
            </button>
            <button className="rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-colors cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={15}
          placeholder="9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        />
        <InputField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Bio Field */}
      <label className="block text-xs text-[#475569]">
        <span className="block mb-1.5 font-semibold text-[#475569]">Bio</span>
        <textarea
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full rounded-xl border border-[#E2E8F0] p-3.5 text-xs font-normal text-[#0F172A] bg-white focus:outline-none focus:border-[#2B50EC] transition-colors resize-none leading-relaxed"
        />
      </label>
    </div>
  );
}
