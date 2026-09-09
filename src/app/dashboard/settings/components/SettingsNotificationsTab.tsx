"use client";

import React, { useState } from "react";

export default function SettingsNotificationsTab() {
  const [notifications, setNotifications] = useState({
    cohortReminders: true,
    mentorMessages: true,
    quizMilestones: true,
    weeklyDigest: false,
    announcements: true,
  });

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-4 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Learning Alerts</h4>
          <p className="text-[11px] text-[#64748B]">Configure updates regarding your roadmaps and cohorts</p>
        </div>

        <div className="divide-y divide-[#F1F5F9]">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Live Workshop &amp; Cohort Reminders</p>
              <p className="text-[11px] text-[#64748B]">Receive reminders 15 minutes before scheduled sessions</p>
            </div>
            <button
              type="button"
              onClick={() => toggle("cohortReminders")}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.cohortReminders ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.cohortReminders ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Mentor &amp; Peer Messages</p>
              <p className="text-[11px] text-[#64748B]">Get notified when mentors reply or leave feedback</p>
            </div>
            <button
              type="button"
              onClick={() => toggle("mentorMessages")}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.mentorMessages ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.mentorMessages ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Quiz &amp; Milestone Alerts</p>
              <p className="text-[11px] text-[#64748B]">Notifications when new skill assessments are available</p>
            </div>
            <button
              type="button"
              onClick={() => toggle("quizMilestones")}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.quizMilestones ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.quizMilestones ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-4 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Email Communication</h4>
          <p className="text-[11px] text-[#64748B]">Digest summaries and platform announcements</p>
        </div>

        <div className="divide-y divide-[#F1F5F9]">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Weekly Progress Digest</p>
              <p className="text-[11px] text-[#64748B]">Summary of your learning hours and milestones achieved</p>
            </div>
            <button
              type="button"
              onClick={() => toggle("weeklyDigest")}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.weeklyDigest ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.weeklyDigest ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Events &amp; Hackathon Invites</p>
              <p className="text-[11px] text-[#64748B]">Invitations to upcoming community hackathons and speaker calls</p>
            </div>
            <button
              type="button"
              onClick={() => toggle("announcements")}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.announcements ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.announcements ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
