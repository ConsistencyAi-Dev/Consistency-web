"use client";

import React from "react";
import { motion } from "framer-motion";

interface GoalsStepProps {
  mainGoal: string;
  setMainGoal: (goal: string) => void;
  timeline: number;
  setTimeline: (time: number) => void;
  currentStatus: "Student" | "Working Professional";
  setCurrentStatus: (status: "Student" | "Working Professional") => void;
  yearsCoding: string;
  setYearsCoding: (years: string) => void;
  targetRoles: string[];
  toggleTargetRole: (role: string) => void;
  onNext: () => void;
  onBack: () => void;
  getTimelineWeeksPill: () => string;
}

const goalOptions = [
  { id: "Engineering", title: "Engineering", desc: "Transition to dev role", emoji: "🎓" },
  { id: "Get a Job in 6 months", title: "Get a Job in 6 months", desc: "First dev job", emoji: "💼" },
  { id: "Upskill to Senior Engineer", title: "Upskill to Senior Engineer", desc: "Grow your career", emoji: "📈" },
  { id: "Crack FAANG in 90 days", title: "Crack FAANG in 90 days", desc: "Top companies prep", emoji: "⭐" },
];

const roleOptions = [
  { id: "Frontend", label: "Frontend", emoji: "🎨" },
  { id: "Gen AI", label: "Gen AI", emoji: "⚙️" },
  { id: "Python Full-Stack developer", label: "Python Full-Stack developer", emoji: "🚀" },
  { id: "AI/ML", label: "AI/ML", emoji: "🤖" },
  { id: "Data Analyst", label: "Data Analyst", emoji: "📊" },
  { id: "Java Full-Stack developer", label: "Java Full-Stack developer", emoji: "🚀" },
];

function CheckIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function GoalsStep({
  mainGoal, setMainGoal, timeline, setTimeline, currentStatus, setCurrentStatus,
  yearsCoding, setYearsCoding, targetRoles, toggleTargetRole, onNext, onBack, getTimelineWeeksPill,
}: GoalsStepProps) {
  const timelineProgress = ((timeline - 3) / 9) * 100;

  return (
    <motion.div key="step-2" initial={{ opacity: 0, y: 15, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -15, scale: 0.98 }} transition={{ duration: 0.25 }} className="w-full max-w-[720px] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white px-6 py-8 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] sm:px-8">
      <div className="flex flex-col gap-8">
        <header className="flex items-start justify-between gap-4 border-b border-[#f1f5f9] pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.6px] text-[#2563eb]">Step 2 of 3 — Goals Assessment</span>
            <h2 className="flex items-center gap-2 text-2xl font-bold leading-9 text-[#1e293b] sm:text-[30px]">What do you want to achieve? <span aria-hidden="true">🎯</span></h2>
            <p className="text-base leading-6 text-[#64748b]">AI will craft roadmap based on this</p>
          </div>
          <button type="button" onClick={onBack} className="shrink-0 rounded-full border border-[#e2e8f0] px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f8fafc]">← Back</button>
        </header>

        <section className="flex flex-col gap-4">
          <h3 className="text-base font-bold tracking-[0.6px] text-[#1e293b]">Q1 • MAIN GOAL</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {goalOptions.map((goal) => {
              const isActive = mainGoal === goal.id;
              return <button key={goal.id} type="button" onClick={() => setMainGoal(goal.id)} className={`flex min-h-[92px] flex-col gap-2 rounded-xl border p-4 text-left transition-colors ${isActive ? "border-2 border-[#2b50ec] bg-[#eff6ff]/50" : "border-[#e5e7eb] hover:bg-[#f8fafc]"}`}>
                <span className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-base font-semibold text-[#111827]"><span aria-hidden="true">{goal.emoji}</span>{goal.title}</span><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isActive ? "bg-[#2b50ec] text-white" : "border-2 border-[#e5e7eb]"}`}>{isActive && <CheckIcon />}</span></span>
                <span className="text-sm leading-5 text-[#6b7280]">{goal.desc}</span>
              </button>;
            })}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3"><h3 className="text-base font-bold tracking-[0.6px] text-[#1e293b]">Q2 • TIMELINE</h3><span className="rounded-full bg-[#0f172a] px-3 py-1 text-xs font-medium text-white">Goal: {mainGoal} in {timeline} months</span></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between px-2 text-xs text-[#64748b]"><span>3m</span><span>12m</span></div>
            <div className="relative h-2 rounded-full bg-[#f1f5f9]"><div className="absolute inset-y-0 left-0 rounded-full bg-[#2b50ec]" style={{ width: `${timelineProgress}%` }} /><input aria-label="Timeline in months" type="range" min="3" max="12" step="1" value={timeline} onChange={(event) => setTimeline(Number(event.target.value))} className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent accent-[#2b50ec]" /></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{[3, 6, 9, 12].map((month) => <button key={month} type="button" onClick={() => setTimeline(month)} className={`rounded-full border px-1 py-2 text-sm font-medium transition-colors ${timeline === month ? "border-[#2b50ec] bg-[#2b50ec] text-white shadow-sm" : "border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc]"}`}>{month}m</button>)}</div>
            <div className="flex justify-center"><span className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-4 py-1.5 text-xs font-medium text-[#475569]">{getTimelineWeeksPill()}</span></div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4"><h3 className="text-base font-bold tracking-[0.6px] text-[#1e293b]">Q3 • CURRENT STATUS</h3><div className="flex flex-wrap gap-2">{(["Student", "Working Professional"] as const).map((status) => <button key={status} type="button" onClick={() => setCurrentStatus(status)} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${currentStatus === status ? "border-[#0f172a] bg-[#0f172a] text-white" : "border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc]"}`}>{status}</button>)}</div></div>
          <label className="flex flex-col gap-4 text-xs font-bold tracking-[0.6px] text-[#1e293b]">YEARS OF CODING<span className="relative"><select value={yearsCoding} onChange={(event) => setYearsCoding(event.target.value)} className="w-full appearance-none rounded-lg border border-[#e2e8f0] bg-white px-3 py-2.5 text-sm font-normal tracking-normal text-[#1e293b] outline-none focus:border-[#2b50ec]"><option value="0-1y">0-1y</option><option value="1-2y">1-2y</option><option value="2-5y">2-5y</option><option value="5y+">5y+</option></select><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]">⌄</span></span></label>
        </section>

        <section className="flex flex-col gap-4"><h3 className="text-sm font-bold tracking-[0.7px] text-[#111827]">Q4 • TARGET ROLE</h3><div className="flex flex-wrap gap-3">{roleOptions.map((role) => { const isSelected = targetRoles.includes(role.id); return <button key={role.id} type="button" onClick={() => toggleTargetRole(role.id)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isSelected ? "border-[#2b50ec] bg-[#2b50ec]/10 text-[#2b50ec]" : "border-[#e5e7eb] text-[#374151] hover:bg-[#f8fafc]"}`}><span aria-hidden="true">{role.emoji}</span><span>{role.label}</span>{isSelected && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2b50ec] text-white"><CheckIcon className="h-2.5 w-2.5" /></span>}</button>; })}</div></section>

        <div className="flex flex-col gap-4 pt-2"><button type="button" onClick={onNext} disabled={targetRoles.length === 0} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b50ec] py-4 text-base font-medium text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#1e3bb3] disabled:cursor-not-allowed disabled:opacity-50">Continue to Profile Strength <span aria-hidden="true">→</span></button><p className="text-center text-xs text-[#94a3b8]">You can change this anytime in settings</p></div>
      </div>
    </motion.div>
  );
}