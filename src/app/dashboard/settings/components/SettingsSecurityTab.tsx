"use client";

import React from "react";
import { InputField } from "./SettingsCommon";

interface SettingsSecurityTabProps {
  currentPassword: string;
  setCurrentPassword: (v: string) => void;
  newPassword: string;
  setNewPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  userEmail?: string;
}

export default function SettingsSecurityTab({
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  userEmail,
}: SettingsSecurityTabProps) {
  return (
    <div className="space-y-5">
      {userEmail && (
        <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <p className="text-[11px] font-medium text-[#64748B]">Primary Account Email</p>
            <p className="text-xs font-semibold text-[#0F172A]">{userEmail}</p>
          </div>
          <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 text-[10px] font-semibold text-[#065F46]">
            Verified
          </span>
        </div>
      )}

      <InputField
        label="Current Password"
        type="password"
        placeholder="Enter your current password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <InputField
        label="New Password"
        type="password"
        placeholder="Enter new password (at least 6 characters)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <InputField
        label="Confirm New Password"
        type="password"
        placeholder="Re-enter your new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
}
