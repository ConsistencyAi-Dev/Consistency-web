"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

type PhaseStatus = "COMPLETE" | "IN_PROGRESS" | "UPCOMING";

interface PhaseTopic {
  label: string;
  done?: boolean;
  status?: "IN_PROGRESS" | "UPCOMING";
}

interface Phase {
  num: number;
  badge: string;
  title: string;
  weeks: string;
  days: string;
  duration: string;
  topics: PhaseTopic[];
  coreTopics: string[];
  buildTag: string;
  gateTag: string;
  gradient: string;
  status: PhaseStatus;
  illustrationBg: string;
  illustrationAccent: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PHASES: Phase[] = [
  {
    num: 1,
    badge: "PHASE 1",
    title: "Python + 2 Projects",
    weeks: "Weeks 1–12",
    days: "Days 001–084",
    duration: "12 Weeks",
    status: "IN_PROGRESS",
    gradient: "from-[#4F46E5] via-[#7C3AED] to-[#2B50EC]",
    illustrationBg: "#312E81",
    illustrationAccent: "#6366F1",
    topics: [
      { label: "Python Basics, Numbers & Strings, Collections, Control Flow (Weeks 1–4)", done: true },
      { label: "Built-in Modules, Python Utilities, OOP Basics & Advanced (Weeks 5–8)", done: true },
      { label: "File Handling, Project 1, Advanced Python & Capstone (Weeks 9–12)", status: "IN_PROGRESS" },
    ],
    coreTopics: ["Python Basics & Collections", "OOP & Advanced Python", "File Handling & Modules", "Decorators & Generators", "Error Handling & APIs"],
    buildTag: "<> You Build: 2 shipped projects – Todo CLI app + Weather CLI to GitHub",
    gateTag: "🔒 GATE: Mock Online Assessment (OA) + live algorithmic review on Python patterns",
  },
  {
    num: 2,
    badge: "PHASE 2",
    title: "Data Structures & Algorithms",
    weeks: "Weeks 13–21",
    days: "Days 085–147",
    duration: "9 Weeks",
    status: "UPCOMING",
    gradient: "from-[#1E40AF] via-[#3B82F6] to-[#6366F1]",
    illustrationBg: "#1E3A5F",
    illustrationAccent: "#3B82F6",
    topics: [
      { label: "Sorting, Binary Search & Linked Lists (Weeks 13–15)" },
      { label: "Hash Structures, Trees, BST & AVL (Weeks 16–18)" },
      { label: "Graphs, Advanced Graphs & Dynamic Programming (Weeks 19–21)" },
    ],
    coreTopics: ["Sorting & Search Algorithms", "Trees, BST & AVL", "Graphs & Advanced Graphs", "Hash Structures & Maps", "Dynamic Programming"],
    buildTag: "✦ You Build: Interview-level problem solving across all data structures",
    gateTag: "🏆 GATE: Will Redux (DSA – re-solve problems from scratch, narrating complexity",
  },
  {
    num: 3,
    badge: "PHASE 3",
    title: "System Design + Placement Readiness",
    weeks: "Weeks 22–24",
    days: "Days 148–168",
    duration: "3 Weeks",
    status: "UPCOMING",
    gradient: "from-[#065F46] via-[#059669] to-[#34D399]",
    illustrationBg: "#064E3B",
    illustrationAccent: "#10B981",
    topics: [
      { label: "System Design I & II – HLD/LLD architecture patterns (Weeks 22–23)" },
      { label: "Placement Mock Week – full simulated placement loop (Week 24)" },
    ],
    coreTopics: ["High-Level Design (HLD)", "Low-Level Design (LLD)", "System Architecture Patterns", "Mock Interviews & Aptitude", "Placement Readiness"],
    buildTag: "✦ You Build: Placement test eligible + mock-tested across all tracks",
    gateTag: "🏆 GATE: Simulated placement loop – aptitude + DSA + System Design review",
  },
  {
    num: 4,
    badge: "PHASE 4",
    title: "ML Foundations + SQL",
    weeks: "Weeks 25–32",
    days: "Days 169–224",
    duration: "8 Weeks",
    status: "UPCOMING",
    gradient: "from-[#92400E] via-[#D97706] to-[#F59E0B]",
    illustrationBg: "#78350F",
    illustrationAccent: "#F59E0B",
    topics: [
      { label: "SQL fundamentals, data wrangling & classical ML algorithms (Weeks 25–28)" },
      { label: "Advanced ML, evaluation metrics & Kaggle pipelines (Weeks 29–32)" },
    ],
    coreTopics: ["SQL & Data Wrangling", "Classical ML Algorithms", "Regression & Classification", "Evaluation Metrics", "Kaggle Pipelines"],
    buildTag: "✦ You Build: Predictive analytics engine with SQL data backend",
    gateTag: "🏆 GATE: Mock ML Science Interview + SQL pipeline performance benchmark",
  },
  {
    num: 5,
    badge: "PHASE 5",
    title: "AI / Deep Learning",
    weeks: "Weeks 33–39",
    days: "Days 225–273",
    duration: "7 Weeks",
    status: "UPCOMING",
    gradient: "from-[#831843] via-[#BE185D] to-[#EC4899]",
    illustrationBg: "#4C0519",
    illustrationAccent: "#EC4899",
    topics: [
      { label: "Neural network foundations, PyTorch & CNNs (Weeks 33–35)" },
      { label: "RNN, sequence models & attention mechanisms (Weeks 36–37)" },
      { label: "Transformers & LLM architecture (Weeks 38–39)" },
    ],
    coreTopics: ["Neural Networks (DNN/CNN/RNN)", "PyTorch Implementation", "Attention & Transformers", "Sequence Models", "LLM Architecture"],
    buildTag: "✦ You Build: Neural nets through Transformers – from scratch implementations",
    gateTag: "🏆 GATE: DL theory test + transformer architecture walkthrough",
  },
  {
    num: 6,
    badge: "PHASE 6",
    title: "GenAI Engineering",
    weeks: "Weeks 40–45",
    days: "Days 274–315",
    duration: "6 Weeks",
    status: "UPCOMING",
    gradient: "from-[#7C2D12] via-[#EA580C] to-[#F97316]",
    illustrationBg: "#431407",
    illustrationAccent: "#F97316",
    topics: [
      { label: "RAG systems, VectorDB & AI agent orchestration (Weeks 40–42)" },
      { label: "LangChain, MCP & shipped GenAI application (Weeks 43–45)" },
    ],
    coreTopics: ["AI System Architectures", "AI Agents & Tool Calling", "MCP – Model Context Protocol", "LangGraph & Crews", "LM Evaluation Frameworks"],
    buildTag: "✦ You Build: Enterprise-grade multi-agent app with RAG + MCP pipelines",
    gateTag: "🏆 GATE: Ship a complete GenAI application – RAG, agents, MCP integrated",
  },
  {
    num: 7,
    badge: "PHASE 7",
    title: "MLOps & Deployment",
    weeks: "Weeks 46–52",
    days: "Days 316–364",
    duration: "7 Weeks",
    status: "UPCOMING",
    gradient: "from-[#7C2D12] via-[#DC2626] to-[#EF4444]",
    illustrationBg: "#450A0A",
    illustrationAccent: "#EF4444",
    topics: [
      { label: "MLops pipelines, monitoring & Docker containers (Weeks 46–48)" },
      { label: "Kubernetes, capstone build & portfolio prep (Weeks 49–52)" },
    ],
    coreTopics: ["MLOps Pipelines & CI/CD", "Docker & Kubernetes", "Model Monitoring & Serving", "Capstone Project", "Portfolio & Interview Prep"],
    buildTag: "✦ You Build: Deployed capstone – full ML pipeline to production",
    gateTag: "🏆 GATE: Complete end-to-end portfolio review + simulated final interviews",
  },
];

const HIRING_ROUNDS = [
  {
    round: "Round 0",
    phase: "Phase 1",
    phaseColor: "bg-[#EEF2FF] text-[#2B50EC]",
    title: "Resume Screening",
    desc: "Portfolios & Capstone defenses",
  },
  {
    round: "Round 1",
    phase: "Phase 2",
    phaseColor: "bg-[#EEF2FF] text-[#2B50EC]",
    title: "Online Assessment (OA)",
    desc: "Timed coding loops & Aptitude gates",
  },
  {
    round: "Round 2",
    phase: "Phase 2",
    phaseColor: "bg-[#EEF2FF] text-[#2B50EC]",
    title: "DSA Technical Interview",
    desc: "Whiteboard algorithmic challenges",
  },
  {
    round: "Round 3",
    phase: "Phase 3 & 4",
    phaseColor: "bg-[#F3E8FF] text-[#9333EA]",
    title: "ML/AI Technical & System",
    desc: "Model architecture & LLM pipeline math",
  },
  {
    round: "Round 4",
    phase: "All Phases",
    phaseColor: "bg-[#EEF2FF] text-[#2B50EC]",
    title: "HR & Leadership Behavior",
    desc: "Ex-Google/Meta final trials",
  },
];

// ─── Phase image map ────────────────────────────────────────────────────────

const PHASE_IMAGES: Record<number, string> = {
  1: "/images/roadmap/python.jpg",
  2: "/images/roadmap/dsa.jpg",
  3: "/images/roadmap/system_design.jpg",
  4: "/images/roadmap/ml_sql.jpg",
  5: "/images/roadmap/ai_dl.jpg",
  6: "/images/roadmap/ml_sql.jpg",
  7: "/images/roadmap/ml_sql.jpg",
};

function PhaseIllustration({ phase }: { phase: Phase }) {
  const src = PHASE_IMAGES[phase.num];

  if (src) {
    return (
      <div className="h-[160px] w-full rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={phase.title}
          width={800}
          height={160}
          className="w-full h-full object-cover object-center"
          priority={phase.num === 1}
        />
      </div>
    );
  }

  // Fallback gradient for phases 6 & 7
  return (
    <div
      className="h-[160px] w-full rounded-xl overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${phase.illustrationBg} 0%, #0f172a 100%)` }}
    >
      <span className="text-4xl opacity-60">
        {phase.num === 6 ? "⚡" : "🚀"}
      </span>
    </div>
  );
}

// ─── Phase Card ───────────────────────────────────────────────────────────────

function PhaseCard({ phase }: { phase: Phase }) {
  const [expanded, setExpanded] = useState(phase.status === "IN_PROGRESS");

  return (
    <div className="relative pl-10 sm:pl-14">
      {/* Timeline bubble */}
      <div
        className={`absolute left-0 top-6 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-lg z-10 ${
          phase.status === "COMPLETE"
            ? "bg-[#10B981]"
            : phase.status === "IN_PROGRESS"
            ? "bg-[#2B50EC]"
            : "bg-[#CBD5E1]"
        }`}
        style={phase.status === "IN_PROGRESS" ? { boxShadow: "0 0 0 4px rgba(43,80,236,0.15)" } : {}}
      >
        {phase.status === "COMPLETE" ? (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          phase.num
        )}
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-[0px_1px_3px_rgba(15,23,42,0.06)] hover:shadow-[0px_4px_12px_rgba(15,23,42,0.10)] transition-shadow">
        {/* Illustration banner with white margin */}
        <div className="p-3.5 sm:p-4 pb-0">
          <PhaseIllustration phase={phase} />
        </div>

        {/* Card body */}
        <div className="p-4 sm:p-5 pt-3.5">
          {/* Phase badge + title row */}
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2B50EC]">
              {phase.badge}
            </span>
            <h2 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#0F172A]">
              {phase.title}
            </h2>
          </div>

          {/* Date info */}
          <p className="text-[11px] font-medium text-[#64748B] mb-3 flex items-center gap-1.5">
            <span>🗓️</span>
            <span>{phase.weeks} ({phase.days}) · {phase.duration}</span>
          </p>

          {/* Topics */}
          <div className="space-y-2 mb-3.5">
            {phase.topics.map((topic, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="shrink-0">
                    {topic.done ? (
                      <div className="h-3.5 w-3.5 rounded-full bg-[#10B981]" />
                    ) : topic.status === "IN_PROGRESS" ? (
                      <div className="h-3.5 w-3.5 rounded-full bg-[#2B50EC]" />
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-[#CBD5E1] bg-white" />
                    )}
                  </div>
                  <span className="text-[11.5px] text-[#334155] leading-snug">
                    {topic.label}
                  </span>
                </div>
                {topic.done && (
                  <span className="text-[#10B981] font-bold text-[13px] shrink-0">✓</span>
                )}
                {topic.status === "IN_PROGRESS" && (
                  <span className="inline-flex items-center rounded-full bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-[#2B50EC] shrink-0">
                    IN PROGRESS
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Core Topics */}
          <div className="mb-3.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#94A3B8] mb-1.5">CORE TOPICS</p>
            <div className="flex flex-wrap gap-1.5">
              {phase.coreTopics.map((t) => (
                <span key={t} className="rounded-md bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 text-[10px] font-medium text-[#475569]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Build Tag */}
          <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] px-3.5 py-2">
            <span className="text-[11px] text-[#2B50EC] font-semibold">{phase.buildTag}</span>
          </div>

          {/* GATE Tag */}
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] px-3.5 py-2">
            <span className="text-[11px] text-[#6D28D9] font-semibold">{phase.gateTag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoadmapPage() {
  const totalWeeks = 52;
  const totalPhases = 7;
  const totalWeeksLabel = 52;
  const currentWeek = 8;
  const progressPercent = 15;

  return (
    <div className="w-full max-w-[1340px]">
      {/* Main two-column layout */}
      <div className="flex justify-between gap-8 items-start">
        {/* Left: Back link + Stats bar + Timeline phases */}
        <div className="flex-1 min-w-0 max-w-[860px]">
          {/* Back to Home link - aligned with cards */}
          <div className="mb-4 pl-10 sm:pl-14">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>
          </div>

          {/* 52 Weeks Stats bar - aligned with steps cards */}
          <div className="mb-6 pl-10 sm:pl-14">
            <div className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-6 py-5 shadow-[0px_1px_3px_rgba(15,23,42,0.05)]">
              <div className="flex flex-wrap items-center justify-between gap-5">
                {/* Stats counters */}
                <div className="flex items-center gap-5 sm:gap-6 shrink-0">
                  {/* Stat 1 */}
                  <div className="text-center sm:text-left shrink-0">
                    <span className="text-[26px] font-bold leading-none text-[#2563EB] block">{totalWeeks}</span>
                    <span className="text-[11px] text-[#64748B] mt-1.5 block font-medium">Weeks Total</span>
                  </div>
                  <div className="h-8 w-px bg-[#E2E8F0] hidden sm:block shrink-0" />

                  {/* Stat 2 */}
                  <div className="text-center sm:text-left shrink-0">
                    <span className="text-[26px] font-bold leading-none text-[#2563EB] block">{totalPhases}</span>
                    <span className="text-[11px] text-[#64748B] mt-1.5 block font-medium">Phases</span>
                  </div>
                  <div className="h-8 w-px bg-[#E2E8F0] hidden sm:block shrink-0" />

                  {/* Stat 3 */}
                  <div className="text-center sm:text-left shrink-0">
                    <span className="text-[26px] font-bold leading-none text-[#2563EB] block">{totalWeeksLabel}</span>
                    <span className="text-[11px] text-[#64748B] mt-1.5 block font-medium">Weeks</span>
                  </div>
                  <div className="h-8 w-px bg-[#E2E8F0] hidden sm:block shrink-0" />
                </div>

                {/* Progress Section */}
                <div className="flex-1 min-w-[200px] max-w-[280px]">
                  <span className="text-[11.5px] font-bold text-[#0F172A] block leading-tight">
                    Week {currentWeek} of {totalWeeks} Current Progress
                  </span>
                  <span className="text-[10.5px] text-[#64748B] block mt-1 leading-tight">
                    Milestone: Advanced Python & Capstone prep
                  </span>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <div className="h-2 w-full rounded-full bg-[#EEF2FF] overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-[#2563EB] transition-all duration-700"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-[11.5px] font-bold text-[#2563EB] shrink-0">{progressPercent}% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-[#2B50EC] z-0" />

            <div className="space-y-6">
              {PHASES.map((phase) => (
                <PhaseCard key={phase.num} phase={phase} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Hiring Pipeline sidebar moved to the right */}
        <div className="hidden lg:block w-[310px] xl:w-[330px] shrink-0 sticky top-4 ml-auto">
          <div className="mb-3.5">
            <h3 className="text-[15px] font-bold text-[#0F172A]">Hiring Pipeline Targets</h3>
            <p className="text-[11px] text-[#64748B] mt-0.5">Rounds mapped directly to Phase Gates</p>
          </div>

          <div className="space-y-2.5">
            {HIRING_ROUNDS.map((round, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E2E8F0] bg-white p-3.5 shadow-[0px_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[12px] font-bold text-[#0F172A]">{round.round}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${round.phaseColor}`}>
                    {round.phase}
                  </span>
                </div>
                <p className="text-[12px] font-bold text-[#1E293B] leading-tight">{round.title}</p>
                <p className="text-[10px] text-[#64748B] leading-tight mt-1">{round.desc}</p>
              </div>
            ))}
          </div>

          {/* Next Target Window */}
          <div className="mt-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
            <p className="text-[11px] font-bold text-[#1E293B] mb-1 flex items-center gap-1.5">
              <span>🎯</span> Next Target Window
            </p>
            <p className="text-[11px] text-[#64748B] leading-[15px]">
              You will unlock simulated hiring loops for Round 1 OAs at the end of Week 12. Keep consistent!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
