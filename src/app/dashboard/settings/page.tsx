"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "Profile" | "Social Links" | "Preferences" | "Security"
  >("Profile");
  const [saveToast, setSaveToast] = useState(false);

  // Form States
  const [fullName, setFullName] = useState("Rahul Kumar");
  const [email, setEmail] = useState("rahul.k@gmail.com");
  const [phone, setPhone] = useState("+91 98765 43210");
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

      {/* Main Centered "My Profile" Card Panel (Exact Match to Reference Screenshot) */}
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
          {/* TAB 1: PROFILE */}
          {activeTab === "Profile" && (
            <div className="space-y-6">
              {/* Avatar Upload Row */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8B5CF6] text-xl font-bold text-white shadow-md">
                    RK
                  </div>
                  <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#E2E8F0] shadow-sm">
                    <svg className="w-3 h-3 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">{fullName}</h3>
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
          )}

          {/* TAB 2: SOCIAL LINKS */}
          {activeTab === "Social Links" && (
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
          )}

          {/* TAB 3: PREFERENCES */}
          {activeTab === "Preferences" && (
            <div className="space-y-6">
              {/* Section 1: CAREER GOALS */}
              <SettingsSection number="1" title="CAREER GOALS" badge="Most important">
                <div className="space-y-5">
                  <h4 className="text-xs font-semibold text-[#0F172A]">What's your main goal?</h4>

                  {/* 2x2 Grid of Option Cards */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { title: "Engineering", subtitle: "Transition to dev role", icon: "🎓" },
                      { title: "Get a job in 6 months", subtitle: "First dev job", icon: "💼" },
                      { title: "Upskill to Senior Engineer", subtitle: "Grow your career", icon: "📈" },
                      { title: "Crack FAANG in 90 days", subtitle: "Top companies prep", icon: "⭐️" },
                    ].map((goal) => (
                      <div
                        key={goal.title}
                        onClick={() => setSelectedGoal(goal.title)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedGoal === goal.title
                            ? "border-[#2B50EC] bg-[#F5F8FF] shadow-xs"
                            : "border-[#E2E8F0] bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base">{goal.icon}</span>
                          <div>
                            <h5 className="font-bold text-xs text-[#0F172A]">{goal.title}</h5>
                            <p className="text-[11px] text-[#64748B]">{goal.subtitle}</p>
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedGoal === goal.title
                              ? "border-[#2B50EC] bg-[#2B50EC] text-white"
                              : "border-[#CBD5E1]"
                          }`}
                        >
                          {selectedGoal === goal.title && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F172A]">When do you want to achieve?</span>
                      <span className="bg-[#0F172A] text-white text-[10px] px-2.5 py-0.5 rounded-md font-semibold">
                        {timelineMonths} months
                      </span>
                    </div>
                    <div className="relative pt-4 pb-2">
                      <input
                        type="range"
                        min="3"
                        max="12"
                        step="1"
                        value={timelineMonths}
                        onChange={(e) => setTimelineMonths(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2B50EC]"
                      />
                      <div className="flex justify-between text-[10px] text-[#94A3B8] mt-1 font-medium">
                        <span>3 months</span>
                        <span>12 months</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Status Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="block text-xs font-semibold text-[#0F172A]">Current Status</span>
                    <div className="flex flex-wrap gap-2">
                      {["Student", "Working Professional", "Career Gap", "Freelancer"].map((st) => (
                        <button
                          key={st}
                          onClick={() => setSelectedStatus(st)}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                            selectedStatus === st
                              ? "bg-[#0F172A] text-white"
                              : "border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Years of Coding Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="block text-xs font-semibold text-[#0F172A]">Years of coding</span>
                    <div className="flex flex-wrap gap-2">
                      {["<1 year", "1-2 years", "2-4 years", "4+ years"].map((yr) => (
                        <button
                          key={yr}
                          onClick={() => setSelectedYears(yr)}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                            selectedYears === yr
                              ? "bg-[#0F172A] text-white"
                              : "border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50"
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SettingsSection>

              {/* Section 2: SKILLS & INTERESTS */}
              <SettingsSection number="2" title="SKILLS & INTERESTS">
                <div className="space-y-4">
                  {/* Current Skills */}
                  <div>
                    <span className="block text-xs font-semibold text-[#0F172A] mb-2">Current Skills</span>
                    <div className="flex flex-wrap gap-2 p-2.5 rounded-xl border border-[#E2E8F0] bg-white">
                      {["React", "Node.js", "Python", "JavaScript"].map((sk) => (
                        <span key={sk} className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#0F172A] flex items-center gap-1.5">
                          {sk} <span className="text-[#94A3B8] cursor-pointer hover:text-[#0F172A]">×</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills to Learn */}
                  <div>
                    <span className="block text-xs font-semibold text-[#0F172A] mb-2">Skills to Learn</span>
                    <div className="flex flex-wrap gap-2">
                      {["System Design", "AWS"].map((sk) => (
                        <span key={sk} className="rounded-full bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 text-xs font-medium text-[#2B50EC] flex items-center gap-1.5">
                          {sk} <span className="text-[#818CF8] cursor-pointer hover:text-[#2B50EC]">×</span>
                        </span>
                      ))}
                      {["DSA", "Next.js", "PostgreSQL", "Tailwind", "ML", "Transformers"].map((sk) => (
                        <span key={sk} className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-medium text-[#64748B] hover:bg-slate-50 cursor-pointer">
                          + {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <span className="block text-xs font-semibold text-[#0F172A] mb-2">Interests</span>
                    <div className="grid grid-cols-3 gap-2">
                      {["Frontend", "Backend", "Full-Stack", "AI/ML", "DevOps", "Mobile"].map((int) => (
                        <button
                          key={int}
                          onClick={() => setSelectedInterest(int)}
                          className={`py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                            selectedInterest === int
                              ? "bg-[#0F172A] text-white shadow-xs"
                              : "border border-[#E2E8F0] bg-white text-[#475569] hover:bg-slate-50"
                          }`}
                        >
                          {selectedInterest === int ? `✓ ${int}` : int}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SettingsSection>
            </div>
          )}

          {/* TAB 4: SECURITY */}
          {activeTab === "Security" && (
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

function SettingsSection({
  number,
  title,
  children,
  badge,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-xs font-semibold text-[#0F172A]">
          {number}
        </span>
        <span>{title}</span>
        {badge && (
          <span className="rounded-md bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 text-[10px] font-semibold text-[#2B50EC]">
            {badge}
          </span>
        )}
      </h3>
      <div className="space-y-4 rounded-2xl border border-[#E2E8F0] p-5 bg-white shadow-xs">
        {children}
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  badge,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  badge?: string;
}) {
  return (
    <label className="block text-xs text-[#475569]">
      <span className="flex items-center gap-2 mb-1.5 font-semibold text-[#475569]">
        {label}
        {badge && (
          <span className="rounded-md bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-semibold text-[#059669]">
            {badge}
          </span>
        )}
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-xs font-normal text-[#0F172A] bg-white focus:outline-none focus:border-[#2B50EC] transition-colors"
      />
    </label>
  );
}