import React from "react";
import ComingSoon from "../components/ComingSoon";

export default function RoadmapPage() {
  return <ComingSoon title="Learning Roadmap" description="Detailed career roadmaps, structured phase milestones, and progress tracking are coming soon." />;
}

/*
import Link from "next/link";

const roadmapPhases = [
  {
    id: "Phase 1",
    title: "Python Programming",
    duration: "Weeks 1-6",
    accent: "bg-[#EAF2FF]",
    accentBorder: "border-[#C7D2FE]",
    bullets: [
      "Core Python syntax and data structures",
      "Functions, modules, OOP, and debugging",
      "Hands-on mini-projects and labs",
    ],
    status: "Foundation",
  },
  {
    id: "Phase 2",
    title: "DSA & System Design",
    duration: "Weeks 7-16",
    accent: "bg-[#EEF2FF]",
    accentBorder: "border-[#C7D2FE]",
    bullets: [
      "Arrays, strings, trees, graphs, and DP",
      "Interview patterns and problem solving",
      "System design fundamentals and tradeoffs",
    ],
    status: "Core Skills",
  },
  {
    id: "Phase 3",
    title: "ML Foundations & SQL Pipelines",
    duration: "Weeks 17-28",
    accent: "bg-[#ECFDF5]",
    accentBorder: "border-[#A7F3D0]",
    bullets: [
      "Statistics, probability, feature engineering",
      "SQL pipelines and data modeling",
      "Experiment tracking and model evaluation",
    ],
    status: "Data & ML",
  },
  {
    id: "Phase 4",
    title: "Deep Learning & Transformers",
    duration: "Weeks 29-40",
    accent: "bg-[#F5F3FF]",
    accentBorder: "border-[#DDD6FE]",
    bullets: [
      "Neural networks, CNNs, RNNs, and transformers",
      "Model deployment and optimization",
      "Hands-on deep learning project execution",
    ],
    status: "Build Depth",
  },
  {
    id: "Phase 5",
    title: "Gen AI Engineering & Placement Prep",
    duration: "Weeks 41-52",
    accent: "bg-[#FDF2F8]",
    accentBorder: "border-[#FBCFE8]",
    bullets: [
      "LLM apps, RAG, agents, and evals",
      "Capstone project and portfolio polish",
      "Mock interviews and job preparation",
    ],
    status: "Career Ready",
  },
];

export function OriginalRoadmapPage() {
  return (
    <div className="w-full max-w-[1180px]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B50EC]">Career path</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[30px]">Your Learning Roadmap</h1>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-[12px] font-semibold text-[#2B50EC] shadow-[0px_1px_2px_rgba(15,23,42,0.03)] transition-colors hover:bg-[#EEF2FF]"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>
      </div>

      <div className="mb-8 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_1px_3px_rgba(15,23,42,0.05)] sm:p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-r border-[#E2E8F0] pr-4">
            <p className="text-[28px] font-bold text-[#2B50EC]">52</p>
            <p className="mt-1 text-[12px] text-[#64748B]">Weeks total</p>
          </div>
          <div className="border-r border-[#E2E8F0] pr-4">
            <p className="text-[28px] font-bold text-[#2B50EC]">5</p>
            <p className="mt-1 text-[12px] text-[#64748B]">Phases</p>
          </div>
          <div>
            <p className="text-[28px] font-bold text-[#2B50EC]">13</p>
            <p className="mt-1 text-[12px] text-[#64748B]">Modules</p>
          </div>
        </div>
      </div>

      <div className="relative space-y-6">
        <div className="absolute left-[17px] top-4 bottom-4 w-px bg-[#CBD5E1]" />

        {roadmapPhases.map((phase, index) => (
          <div key={phase.id} className="relative pl-12">
            <div className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#2B50EC] text-[11px] font-bold text-white shadow-[0px_0px_0px_4px_rgba(43,80,236,0.12)]">
              {index + 1}
            </div>

            <div className={`rounded-2xl border ${phase.accentBorder} ${phase.accent} p-4 shadow-[0px_1px_2px_rgba(15,23,42,0.04)] sm:p-5`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full border border-[#C7D2FE] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2B50EC]">
                      {phase.id}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#64748B]">{phase.status}</span>
                  </div>
                  <h2 className="mt-3 text-[20px] font-bold tracking-tight text-[#0F172A]">{phase.title}</h2>
                </div>

                <div className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#475569]">
                  {phase.duration}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {phase.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-[12px] leading-5 text-[#334155]">
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#2B50EC] align-middle" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
