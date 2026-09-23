"use client";

import React, { useEffect, useState } from "react";
import SettingsProfileTab from "./components/SettingsProfileTab";
import SettingsSocialLinksTab from "./components/SettingsSocialLinksTab";
import SettingsPreferencesTab from "./components/SettingsPreferencesTab";
import SettingsSecurityTab from "./components/SettingsSecurityTab";
import SettingsAppearanceTab from "./components/SettingsAppearanceTab";
import { getProfileApi, updateProfileApi } from "@/lib/api";
import { useToast } from "@/hooks/useToast";

type ToggleProps = { checked: boolean; onChange: () => void; label: string };
type SettingsUser = {
  id?: string;
  _id?: string;
  name?: string;
  fullName?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  location?: string;
  bio?: string;
  githubUrl?: string;
  github?: string;
  linkedinUrl?: string;
  linkedin?: string;
  leetcodeUrl?: string;
  leetcode?: string;
};

function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={checked}
      onClick={onChange}
      className={`relative h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors ${
        checked ? "bg-[#2B50EC]" : "bg-[#CBD5E1]"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "right-0.5" : "left-0.5"
        }`}
      />
    </button>
  );
}

function SectionTitle({ number, title, badge }: { number: string; title: string; badge?: string }) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[11px] font-semibold text-[#0F172A]">
        {number}
      </span>
      <span>{title}</span>
      {badge && (
        <span className="rounded-md bg-[#FEF2F2] px-2 py-0.5 text-xs font-semibold normal-case tracking-normal text-[#EF4444]">
          {badge}
        </span>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  verified,
  onChange,
}: {
  label: string;
  value: string;
  verified?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="block text-xs text-[#475569]">
      <span className="mb-1.5 flex items-center gap-2 font-semibold text-xs text-[#334155]">
        {label}
        {verified && <span className="text-xs font-bold text-[#059669]">Verified</span>}
      </span>
      <input
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-9 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-xs text-[#0F172A] outline-none transition-colors focus:border-[#2B50EC]"
      />
    </label>
  );
}

export default function SettingsPage() {
  const [viewMode, setViewMode] = useState<"settings" | "edit-profile">("settings");
  const [settingsTab, setSettingsTab] = useState<"General" | "Appearance" | "Privacy" | "Language & Region">("General");
  const [profileTab, setProfileTab] = useState<"Profile" | "Social Links" | "Preferences" | "Security">("Profile");
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [currentUser, setCurrentUser] = useState<SettingsUser | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [leetcode, setLeetcode] = useState("");

  const [selectedGoal, setSelectedGoal] = useState("Get a job in 6 months");
  const [selectedStatus, setSelectedStatus] = useState("Working Professional");
  const [selectedYears, setSelectedYears] = useState("1-2 years");
  const [selectedInterest, setSelectedInterest] = useState("Full-Stack");
  const [timelineMonths, setTimelineMonths] = useState(6);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOnline, setShowOnline] = useState(true);
  const [showActivity, setShowActivity] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    events: false,
    mentor: true,
  });

  const applyUserData = (user: SettingsUser) => {
    if (!user) return;
    setCurrentUser(user);
    setFullName(user.name || user.fullName || "");
    setEmail(user.email || "");
    setPhone(user.mobile || user.phone || "");
    setLocation(user.location || "");
    setBio(user.bio || "");
    setGithub(user.githubUrl || user.github || "");
    setLinkedin(user.linkedinUrl || user.linkedin || "");
    setLeetcode(user.leetcodeUrl || user.leetcode || "");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("edit") === "true" || params.get("tab") === "profile") {
      queueMicrotask(() => setViewMode("edit-profile"));
    }
    try {
      const stored = localStorage.getItem("auth_user");
      if (stored) queueMicrotask(() => applyUserData(JSON.parse(stored)));
    } catch {
      /* optional */
    }
    const token = localStorage.getItem("auth_token");
    if (token) {
      getProfileApi(token)
        .then((response) => response?.data && applyUserData(response.data))
        .catch(() => undefined);
    }
  }, []);

  const getInitials = (name?: string) => {
    if (!name?.trim()) return "U";
    const parts = name.trim().split(/\s+/);
    return parts.length === 1
      ? parts[0].slice(0, 2).toUpperCase()
      : `${parts[0][0]}${parts.at(-1)?.[0] || ""}`.toUpperCase();
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const existing = JSON.parse(localStorage.getItem("auth_user") || "{}");
      const updated = {
        ...existing,
        ...currentUser,
        name: fullName,
        email,
        mobile: phone,
        phone,
        location,
        bio,
        githubUrl: github,
        linkedinUrl: linkedin,
        leetcodeUrl: leetcode,
      };
      localStorage.setItem("auth_user", JSON.stringify(updated));
      setCurrentUser(updated);
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new CustomEvent("auth_user_updated", { detail: updated }));
      const token = localStorage.getItem("auth_token");
      const userId = existing.id || existing._id || currentUser?.id || currentUser?._id;
      if (token && userId) {
        await updateProfileApi(
          userId,
          {
            name: fullName,
            email,
            mobile: phone,
            location,
            bio,
            linkedinUrl: linkedin,
            githubUrl: github,
            leetcodeUrl: leetcode,
          },
          token
        );
      }
      toast.success("Settings updated successfully!");
    } finally {
      setIsSaving(false);
    }
  };

  const toggleNotification = (key: keyof typeof notifications) =>
    setNotifications((previous) => ({ ...previous, [key]: !previous[key] }));

  const name = fullName || currentUser?.name || "Rahul Kumar";
  const userEmail = email || currentUser?.email || "rahul.k@gmail.com";

  if (viewMode === "edit-profile") {
    return (
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] p-6">
          <div>
            <h2 className="text-lg font-bold text-[#0F172A]">Edit Profile</h2>
            <p className="text-xs text-[#64748B] mt-0.5">
              Update your personal details, handles, and preferences
            </p>
          </div>
          <button
            type="button"
            onClick={() => setViewMode("settings")}
            className="rounded-lg border border-[#CBD5E1] px-4 py-2 text-xs font-semibold text-[#2B50EC] hover:bg-[#EEF2FF] transition-colors"
          >
            Done
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-[#E2E8F0] px-6 py-3.5">
          {(["Profile", "Social Links", "Preferences", "Security"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setProfileTab(tab)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                profileTab === tab
                  ? "border-[#0F172A] bg-[#0F172A] text-white shadow-xs"
                  : "border-[#CBD5E1] bg-white text-[#64748B] hover:bg-[#F8FAFC]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {profileTab === "Profile" && (
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
          {profileTab === "Social Links" && (
            <SettingsSocialLinksTab
              github={github}
              setGithub={setGithub}
              linkedin={linkedin}
              setLinkedin={setLinkedin}
              leetcode={leetcode}
              setLeetcode={setLeetcode}
            />
          )}
          {profileTab === "Preferences" && (
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
          {profileTab === "Security" && (
            <SettingsSecurityTab
              currentPassword={currentPassword}
              setCurrentPassword={setCurrentPassword}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              userEmail={email}
            />
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[#E2E8F0] bg-[#FAFBFD] px-6 py-4">
          <span className="text-xs text-[#64748B]">Changes will be saved immediately to your profile.</span>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="rounded-xl bg-[#2B50EC] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1E40AF] transition-transform active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1000px] pb-8">

      {/* Profile Overview Card */}
      <section className="mb-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#8B5CF6,#6366F1)] text-xl font-bold text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
            {getInitials(name)}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-lg font-bold text-[#0F172A]">{name}</h1>
              <span className="rounded-full bg-[#EEF2FF] border border-[#C7D2FE] px-2.5 py-0.5 text-xs font-bold text-[#2B50EC]">
                Free Access
              </span>
            </div>
            <p className="text-xs text-[#64748B] mt-0.5">
              {userEmail} • {location || "Bangalore, India"}
            </p>
            <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-[#475569]">
              Passionate software learner focused on building core algorithms, data structures proficiency, and transforming ideas into professional engineering roles.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setViewMode("edit-profile")}
          className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-2 text-xs font-semibold text-[#0F172A] hover:border-[#2B50EC] hover:text-[#2B50EC] transition-colors cursor-pointer shrink-0"
        >
          Edit Profile
        </button>
      </section>

      {/* Main Settings Body */}
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(250px,0.85fr)]">
        {/* Left Settings Panel */}
        <section className="overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <div className="border-b border-[#E2E8F0] px-6 pb-4 pt-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2B50EC] text-white text-xs font-bold">
                  ⚙
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0F172A]">Settings</h2>
                  <p className="text-xs text-[#64748B]">
                    Manage your app preferences and configurations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto">
              {(["General", "Appearance", "Privacy", "Language & Region"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() =>
                    setSettingsTab(
                      tab === "Appearance"
                        ? "Appearance"
                        : tab === "Privacy"
                        ? "Privacy"
                        : tab === "Language & Region"
                        ? "Language & Region"
                        : "General"
                    )
                  }
                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    settingsTab === tab
                      ? "border-[#0F172A] bg-[#0F172A] text-white shadow-xs"
                      : "border-[#CBD5E1] bg-white text-[#64748B] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {settingsTab === "Appearance" ? (
            <div className="p-6">
              <SettingsAppearanceTab />
            </div>
          ) : (
            <div className="space-y-6 p-6">
              {/* Account Information */}
              <div>
                <SectionTitle number="1" title="Account Information" />
                <div className="space-y-4 rounded-xl border border-[#E2E8F0] p-4 bg-[#F8FAFC]/50">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" value={name} onChange={setFullName} />
                    <Field label="Email" value={userEmail} verified onChange={setEmail} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" value={phone || "+91 98765 43210"} onChange={setPhone} />
                    <label className="block text-xs text-[#475569]">
                      <span className="mb-1.5 block font-semibold text-xs text-[#334155]">Account Type</span>
                      <div className="flex h-9 items-center justify-between rounded-lg border border-[#CBD5E1] bg-white px-3 text-xs font-medium text-[#0F172A]">
                        <span>Free Plan</span>
                        <span className="rounded bg-[#EEF2FF] px-2 py-0.5 text-xs font-bold text-[#2B50EC]">Upgrade</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Appearance & Privacy */}
              <div>
                <SectionTitle number="2" title="Appearance & Privacy" />
                <div className="space-y-4 rounded-xl border border-[#E2E8F0] p-4 bg-[#F8FAFC]/50">
                  <label className="block text-xs text-[#475569]">
                    <span className="mb-1.5 block font-semibold text-xs text-[#334155]">Profile Visibility</span>
                    <select className="h-9 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] outline-none">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </label>
                  <div className="divide-y divide-[#E2E8F0]">
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-xs font-semibold text-[#0F172A]">Show Online Status</p>
                        <p className="text-xs text-[#64748B]">Allow others to see when you are active</p>
                      </div>
                      <Toggle label="Show online status" checked={showOnline} onChange={() => setShowOnline(!showOnline)} />
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-xs font-semibold text-[#0F172A]">Show Activity Feed</p>
                        <p className="text-xs text-[#64748B]">Broadcast achievements and certificates</p>
                      </div>
                      <Toggle label="Show activity feed" checked={showActivity} onChange={() => setShowActivity(!showActivity)} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Language & Region */}
              <div>
                <SectionTitle number="3" title="Language & Region" />
                <div className="space-y-4 rounded-xl border border-[#E2E8F0] p-4 bg-[#F8FAFC]/50">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-xs text-[#475569]">
                      <span className="mb-1.5 block font-semibold text-xs text-[#334155]">Timezone</span>
                      <select className="h-9 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] outline-none">
                        <option>Asia/Kolkata (IST - GMT+5:30)</option>
                        <option>UTC</option>
                      </select>
                    </label>
                    <label className="block text-xs text-[#475569]">
                      <span className="mb-1.5 block font-semibold text-xs text-[#334155]">Date Format</span>
                      <select className="h-9 w-full rounded-lg border border-[#CBD5E1] bg-white px-3 text-xs font-medium text-[#0F172A] focus:border-[#2B50EC] outline-none">
                        <option>DD/MM/YYYY</option>
                        <option>MM/DD/YYYY</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div>
                <SectionTitle number="4" title="Danger Zone" badge="Warning" />
                <div className="flex flex-col gap-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Deactivate or Delete Account</p>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Temporarily disable your profile or permanently erase all your data.
                    </p>
                  </div>
                  <div className="flex gap-2.5 shrink-0">
                    <button
                      type="button"
                      className="rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 cursor-pointer"
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-[#EF4444] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#DC2626] cursor-pointer"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-[#E2E8F0] bg-[#FAFBFD] px-6 py-4">
            <span className="text-xs text-[#64748B]">ⓘ Your settings are automatically synchronized.</span>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="rounded-xl bg-[#2B50EC] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1E40AF] transition-transform active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              ✓ {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </section>

        {/* Right Sidebar Column */}
        <aside className="space-y-6">
          {/* Profile Strength Card */}
          <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Profile Strength &amp; Progress
            </h3>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-[#2B50EC] text-xs font-bold text-[#0F172A]">
                60%
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">
                  60% Completed <span className="text-[#2B50EC]">Level 3</span>
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Add resume / LinkedIn and pass 1 assessment to hit 100%.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-[#F1F5F9] pt-3 text-xs text-[#64748B] flex justify-between">
              <span>Enrolled Cohorts</span>
              <strong className="text-[#0F172A]">0</strong>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Notification Preferences
            </h3>
            {(
              [
                ["Email Notifications", "Weekly program summaries & announcements", "email"],
                ["Push Notifications", "Daily skill reminders & assessment nudges", "push"],
                ["Event Reminders", "Notifications for registered workshops", "events"],
                ["Mentor Messages", "Instant alerts for code reviews & direct chats", "mentor"],
              ] as const
            ).map(([title, description, key]) => (
              <div
                key={key}
                className="flex items-center justify-between border-b border-[#F1F5F9] py-3 last:border-0"
              >
                <div className="pr-2">
                  <p className="text-xs font-semibold text-[#0F172A]">{title}</p>
                  <p className="text-xs text-[#64748B] mt-0.5">{description}</p>
                </div>
                <Toggle
                  label={title}
                  checked={notifications[key]}
                  onChange={() => toggleNotification(key)}
                />
              </div>
            ))}
          </div>

          {/* Quick Account Actions */}
          <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Account Quick Links
            </h3>
            <button
              type="button"
              onClick={() => {
                setViewMode("edit-profile");
                setProfileTab("Security");
              }}
              className="flex w-full items-center gap-2 text-left text-xs font-semibold text-[#2B50EC] hover:underline cursor-pointer py-1"
            >
              🔒 Change Account Password
            </button>
            <div className="py-2 text-xs border-t border-[#F1F5F9] space-y-2">
              <p className="font-semibold text-[#475569]">Connected Accounts</p>
              <div className="flex justify-between items-center text-xs">
                <span>GitHub</span>
                <span className="font-semibold text-[#059669]">Connected</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>LinkedIn</span>
                <span className="font-semibold text-[#2B50EC]">Connect</span>
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-[#FEF2F2] py-2.5 text-xs font-semibold text-[#EF4444] hover:bg-[#FEE2E2] transition-colors cursor-pointer"
            >
              Delete Account
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
