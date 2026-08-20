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

export default function GoalsStep({
  mainGoal,
  setMainGoal,
  timeline,
  setTimeline,
  currentStatus,
  setCurrentStatus,
  yearsCoding,
  setYearsCoding,
  targetRoles,
  toggleTargetRole,
  onNext,
  onBack,
  getTimelineWeeksPill,
}: GoalsStepProps) {
  return (
    <motion.div
      key="step-2"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 max-w-[620px] w-full flex flex-col relative overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Header Badge */}
        <div className="flex items-center gap-1.5 text-blue-500 text-[10px] font-extrabold uppercase tracking-wider mb-2 mt-4 sm:mt-0 self-start">
          Step 2 of 4 – Goals Assessment
        </div>

        <div className="flex justify-between items-center w-full mb-1">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
            What do you want to achieve? 🎯
          </h2>
          
          {/* Back button replica in header matches screenshot style */}
          <button
            type="button"
            onClick={onBack}
            className="border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors shadow-sm flex items-center gap-1"
          >
            ← Back
          </button>
        </div>
        
        <p className="text-gray-500 text-sm font-medium self-start mb-6">
          AI will craft roadmap based on this
        </p>

        {/* Grid Form Sections */}
        <div className="w-full text-left space-y-6">
          
          {/* Q1: MAIN GOAL */}
          <div>
            <h4 className="text-[10px] tracking-wider font-extrabold text-gray-500 uppercase mb-3">
              Q1 • MAIN GOAL
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: "Engineering",
                  title: "Engineering",
                  desc: "Transition to dev role",
                  emoji: "🎓",
                },
                {
                  id: "Get a Job in 6 months",
                  title: "Get a Job in 6 months",
                  desc: "First dev job",
                  emoji: "💼",
                },
                {
                  id: "Upskill to Senior Engineer",
                  title: "Upskill to Senior Engineer",
                  desc: "Grow your career",
                  emoji: "📈",
                },
                {
                  id: "Crack FAANG in 90 days",
                  title: "Crack FAANG in 90 days",
                  desc: "Top companies prep",
                  emoji: "⭐",
                },
              ].map((item) => {
                const isActive = mainGoal === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMainGoal(item.id)}
                    className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/50 ${
                      isActive
                        ? "border-[#0055FF] bg-blue-50/10 shadow-sm"
                        : "border-gray-150"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-gray-900">
                        <span>{item.emoji}</span>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 font-semibold">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Checkmark or radio circle */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#0055FF] border-[#0055FF]"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {isActive && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Q2: TIMELINE */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[10px] tracking-wider font-extrabold text-gray-500 uppercase">
                Q2 • TIMELINE
              </h4>
              {/* Black pill target description */}
              <span className="bg-gray-900 text-white text-[9px] font-bold py-1 px-2.5 rounded-full">
                Goal: Switch to Software Engineering in {timeline} months
              </span>
            </div>

            {/* Slider Control */}
            <div className="relative pt-2 pb-1.5">
              <input
                type="range"
                min="3"
                max="12"
                step="1"
                value={timeline}
                onChange={(e) => setTimeline(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#0055FF]"
                style={{
                  background: `linear-gradient(to right, #0055FF 0%, #0055FF ${
                    ((timeline - 3) / 9) * 100
                  }%, #E5E7EB ${((timeline - 3) / 9) * 100}%, #E5E7EB 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-1.5">
                <span>3m</span>
                <span>12m</span>
              </div>
            </div>

            {/* Quick Timeline buttons */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[3, 6, 9, 12].map((time) => {
                const isActive = timeline === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#0055FF] border-[#0055FF] text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {time}m
                  </button>
                );
              })}
            </div>

            {/* Weeks conversion pill */}
            <div className="flex justify-center mt-3">
              <span className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-extrabold py-1 px-3 rounded-full uppercase tracking-wider">
                {getTimelineWeeksPill()}
              </span>
            </div>
          </div>

          {/* Q3: CURRENT STATUS & YEARS OF CODING */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* CURRENT STATUS */}
            <div>
              <h4 className="text-[10px] tracking-wider font-extrabold text-gray-500 uppercase mb-2.5">
                Q3 • CURRENT STATUS
              </h4>
              <div className="flex gap-1.5">
                {["Student", "Working Professional"].map((status) => {
                  const isActive = currentStatus === status;
                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setCurrentStatus(status as "Student" | "Working Professional")}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-full border text-center transition-colors cursor-pointer ${
                        isActive
                          ? "bg-gray-900 border-gray-900 text-white"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* YEARS OF CODING */}
            <div>
              <h4 className="text-[10px] tracking-wider font-extrabold text-gray-500 uppercase mb-2.5">
                YEARS OF CODING
              </h4>
              <div className="relative">
                <select
                  value={yearsCoding}
                  onChange={(e) => setYearsCoding(e.target.value)}
                  className="w-full py-2 pl-3 pr-10 border border-gray-200 rounded-xl bg-white text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-[#0055FF] focus:border-[#0055FF] shadow-sm"
                >
                  <option value="0-1y">0-1y</option>
                  <option value="1-2y">1-2y</option>
                  <option value="2-5y">2-5y</option>
                  <option value="5y+">5y+</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Q4: TARGET ROLE */}
          <div>
            <h4 className="text-[10px] tracking-wider font-extrabold text-gray-500 uppercase mb-2.5">
              Q4 • TARGET ROLE
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "Frontend", label: "Frontend", emoji: "🎨" },
                { id: "Backend", label: "Backend", emoji: "⚙️" },
                { id: "Full-Stack", label: "Full-Stack", emoji: "🚀" },
                { id: "AI/ML", label: "AI/ML", emoji: "💻" },
                { id: "DevOps", label: "DevOps", emoji: "📝" },
                { id: "Data", label: "Data", emoji: "📊" },
              ].map((role) => {
                const isSelected = targetRoles.includes(role.id);
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => toggleTargetRole(role.id)}
                    className={`flex items-center gap-1.5 py-2 px-3.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/20 border-[#0055FF] text-[#0055FF] shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{role.emoji}</span>
                    <span>{role.label}</span>
                    {isSelected && (
                      <svg className="w-3.5 h-3.5 text-[#0055FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Continue button */}
        <button
          type="button"
          onClick={onNext}
          disabled={targetRoles.length === 0}
          className="w-full bg-[#0055FF] hover:bg-[#0044EE] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] mt-8 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Profile Strength →
        </button>

        <p className="text-[10px] font-semibold text-gray-400 mt-3.5">
          You can change this anytime in settings
        </p>
      </div>
    </motion.div>
  );
}
