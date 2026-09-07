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
}

export default function SettingsSecurityTab({
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}: SettingsSecurityTabProps) {
  return (
    <div className="space-y-5">
      <InputField
        label="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <InputField
        label="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <InputField
        label="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
}
