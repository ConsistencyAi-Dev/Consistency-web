"use client";

import React, { useState } from "react";
import SettingsProfileTab from "./components/SettingsProfileTab";
import SettingsSocialLinksTab from "./components/SettingsSocialLinksTab";
import SettingsPreferencesTab from "./components/SettingsPreferencesTab";
import SettingsSecurityTab from "./components/SettingsSecurityTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "Profile" | "Social Links" | "Preferences" | "Security"
  >("Profile");
  const [saveToast, setSaveToast] = useState(false);

  // Form States
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phone, setPhone] = useState("9876543210");
  const [location, setLocation] = useState("Bengaluru, India");
  const [bio, setBio] = useState(
    "Aspiring Software Engineer passionate about building scalable web apps. Currently focusing on DSA and system design."
  );

  // Preferences States
  const [selectedGoal, setSelectedGoal] = useState("Get a job in 6 months");
  const [selectedStatus, setSelectedStatus] = useState("Working Professional");
  const [selectedYears, setSelectedYears] = useState("1-2 years");
  const [selectedInterest, setSelectedInterest] = useState("Full-Stack");
  const [timelineMonths, setTimelineMonths] = useState(6);

  // Security States
  const [currentPassword, setCurrentPassword] = useState("••••••••••••");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="flex w-full min-h-[80vh] items-center justify-center p-4 sm:p-6 text-left">
      {/* Toast Alert */}
      {saveToast && (
        <div className="fixed top-20 right-8 z-50 bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-top-4 duration-200">
          <svg className="w-4 h-4 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Profile updated successfully!
        </div>
      )}

      {/* Main Centered "My Profile" Card Panel */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-[#E2E8F0] overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5CF6] text-white font-bold text-sm shadow-md">
              RK
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0F172A]">My Profile</h2>
              <p className="text-xs text-[#64748B]">Manage your personal & connected accounts</p>
            </div>
          </div>
          <button className="text-[#94A3B8] hover:text-[#0F172A] text-lg font-bold transition-colors cursor-pointer">
            ✕
          </button>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 px-6 pt-5 pb-3 border-b border-[#E2E8F0]">
          {(["Profile", "Social Links", "Preferences", "Security"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === t
                  ? "border-[#0F172A] bg-[#0F172A] text-white shadow-sm"
                  : "border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Contents Container */}
        <div className="p-6 space-y-6">
          {activeTab === "Profile" && (
            <SettingsProfileTab
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              location={location}
              setLocation={setLocation}
              bio={bio}
              setBio={setBio}
            />
          )}

          {activeTab === "Social Links" && <SettingsSocialLinksTab />}

          {activeTab === "Preferences" && (
            <SettingsPreferencesTab
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              timelineMonths={timelineMonths}
              setTimelineMonths={setTimelineMonths}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedYears={selectedYears}
              setSelectedYears={setSelectedYears}
              selectedInterest={selectedInterest}
              setSelectedInterest={setSelectedInterest}
            />
          )}

          {activeTab === "Security" && (
            <SettingsSecurityTab
              currentPassword={currentPassword}
              setCurrentPassword={setCurrentPassword}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          )}
        </div>

        {/* Card Footer Bar */}
        <div className="flex items-center justify-between border-t border-[#E2E8F0] p-6 bg-[#FAFBFD]">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <svg className="w-4 h-4 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your roadmap will be updated ·</span>
          </div>
          <button
            onClick={handleSave}
            className="rounded-xl bg-[#2B50EC] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1E40AF] transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}