"use client";

import React from "react";

const FEATURES = [
  {
    title: "Resume Polishing",
    desc: "Optimized for tech ATS systems.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Mock Interviews",
    desc: "Live sessions with top engineers.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Portfolio Review",
    desc: "GitHub and project strategy.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Hiring Partners",
    desc: "Direct referrals to 50+ firms.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2 4-4" />
        <path d="M12 3v6M6 8l3 1.5M18 8l-3 1.5" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

type RoadmapStep = {
  title: string;
  status: "done" | "current" | "upcoming";
};

const ROADMAP_STEPS: RoadmapStep[] = [
  { title: "Core AI Fundamentals", status: "done" },
  { title: "Advanced ML/NLP Specialization", status: "done" },
  { title: "Hiring Manager Networking", status: "current" },
  { title: "Final Placement", status: "upcoming" },
];

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function RoadmapRow({ step }: { step: RoadmapStep }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      {step.status === "done" && (
        <span className="shrink-0 flex items-center justify-center size-5 rounded-full bg-[#2563EB] text-white">
          <CheckIcon />
        </span>
      )}
      {step.status === "current" && (
        <span className="shrink-0 flex items-center justify-center size-5 rounded-full ring-2 ring-[#2563EB]">
          <span className="size-2 rounded-full bg-[#2563EB]" />
        </span>
      )}
      {step.status === "upcoming" && (
        <span className="shrink-0 size-5 rounded-full ring-2 ring-gray-200" />
      )}
      <span
        className={`text-sm font-sans ${
          step.status === "upcoming" ? "text-gray-400" : "text-gray-900 font-semibold"
        }`}
      >
        {step.title}
      </span>
    </div>
  );
}

export default function CareerSupportSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column — copy + feature grid */}
        <div>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#111827] font-sans mb-4">
            We Don&apos;t Just Teach.
            <br />
            <span className="text-[#2563EB]">We Place.</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-md mb-8">
            Our career support engine works as hard as you do to get you the title and salary you deserve.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl ring-1 ring-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-blue-50 text-[#2563EB] mb-3">
                  {f.icon}
                </div>
                <h3 className="text-gray-900 text-sm font-bold font-sans mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-5 font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — roadmap card */}
        <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black/5 p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Student"
              className="size-11 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div>
              <div className="text-gray-900 text-sm font-bold font-sans">Success Roadmap</div>
              <div className="text-gray-400 text-xs font-sans">Active Roadmap</div>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-gray-100 mb-6">
            {ROADMAP_STEPS.map((step) => (
              <RoadmapRow key={step.title} step={step} />
            ))}
          </div>

          <button className="w-full bg-[#111827] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-black transition-colors">
            Track Your Career Path
          </button>
        </div>
      </div>
    </section>
  );
}
