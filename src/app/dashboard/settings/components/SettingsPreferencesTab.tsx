"use client";

import React from "react";
import { SettingsSection } from "./SettingsCommon";

interface SettingsPreferencesTabProps {
  selectedGoal: string;
  setSelectedGoal: (v: string) => void;
  timelineMonths: number;
  setTimelineMonths: (v: number) => void;
  selectedStatus: string;
  setSelectedStatus: (v: string) => void;
  selectedYears: string;
  setSelectedYears: (v: string) => void;
  selectedInterest: string;
  setSelectedInterest: (v: string) => void;
}

export default function SettingsPreferencesTab({
  selectedGoal,
  setSelectedGoal,
  timelineMonths,
  setTimelineMonths,
  selectedStatus,
  setSelectedStatus,
  selectedYears,
  setSelectedYears,
  selectedInterest,
  setSelectedInterest,
}: SettingsPreferencesTabProps) {
  return (
    <div className="space-y-6">
      {/* Section 1: CAREER GOALS */}
      <SettingsSection number="1" title="CAREER GOALS" badge="Most important">
        <div className="space-y-5">
          <h4 className="text-xs font-semibold text-[#0F172A]">What&apos;s your main goal?</h4>

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
  );
}
