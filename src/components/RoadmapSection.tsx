"use client";

import React, { useState } from "react";

type Topic = { title: string; desc: string };
type Phase = {
  label: string;
  title: string;
  subtitle: string;
  topics: Topic[];
  duration: string;
  level: string;
  practice: string;
};

const PHASES: Phase[] = [
  {
    label: "PHASE 01",
    title: "PYTHON PROGRAMMING",
    subtitle: "Master Python from zero — and start your hiring profile on Day 1.",
    topics: [
      { title: "Python Fundamentals", desc: "Syntax, variables, data types, operators, control flow, loops, functions." },
      { title: "Data Structures", desc: "Lists, tuples, dictionaries, and sets — and how to use them to solve real problems." },
      { title: "Object-Oriented Programming", desc: "Classes, objects, inheritance, polymorphism, encapsulation." },
      { title: "File Handling", desc: "Read, write, and update files, CSV parsing, and handling data." },
      { title: "APIs & Git", desc: "Work with HTTP APIs, Git & GitHub basics, daily commits, version control." },
      { title: "Problem Solving", desc: "Variables, algorithms, logic challenges, conditionals & iterations." },
    ],
    duration: "12 weeks",
    level: "Beginner",
    practice: "Hands-on daily",
  },
  {
    label: "PHASE 02",
    title: "DATA STRUCTURES & ALGORITHMS",
    subtitle: "Build the problem-solving muscle every AI/ML interview tests for.",
    topics: [
      { title: "Arrays & Strings", desc: "Two-pointers, sliding window, and in-place manipulation patterns." },
      { title: "Recursion", desc: "Backtracking, divide & conquer, and recursive tree traversal." },
      { title: "Trees & Graphs", desc: "BFS, DFS, binary search trees, and graph traversal problems." },
      { title: "Dynamic Programming", desc: "Memoization, tabulation, and classic DP problem patterns." },
      { title: "Time Complexity", desc: "Big-O analysis and choosing the right data structure for the job." },
      { title: "Mock Interviews", desc: "Timed problem sets reviewed by a mentor every week." },
    ],
    duration: "6 weeks",
    level: "Intermediate",
    practice: "Daily LeetCode",
  },
  {
    label: "PHASE 03",
    title: "MACHINE LEARNING FOUNDATIONS",
    subtitle: "Go from math fundamentals to your first trained models.",
    topics: [
      { title: "Math for ML", desc: "Linear algebra, probability, and statistics used in everyday ML." },
      { title: "NumPy & Pandas", desc: "Vectorized computation and data wrangling for real datasets." },
      { title: "Supervised Learning", desc: "Regression, classification, and model evaluation metrics." },
      { title: "Unsupervised Learning", desc: "Clustering, dimensionality reduction, and anomaly detection." },
      { title: "Feature Engineering", desc: "Cleaning, encoding, and preparing data that models can learn from." },
      { title: "Model Evaluation", desc: "Train/test splits, cross-validation, and avoiding overfitting." },
    ],
    duration: "8 weeks",
    level: "Intermediate",
    practice: "Weekly datasets",
  },
  {
    label: "PHASE 04",
    title: "DEEP LEARNING & NEURAL NETWORKS",
    subtitle: "Build and train the networks powering modern AI products.",
    topics: [
      { title: "Neural Networks", desc: "Forward pass, backpropagation, and gradient descent from scratch." },
      { title: "CNNs", desc: "Image classification and computer vision fundamentals." },
      { title: "RNNs & Transformers", desc: "Sequence modeling and the architecture behind modern LLMs." },
      { title: "PyTorch / TensorFlow", desc: "Building, training, and debugging models in a real framework." },
      { title: "Transfer Learning", desc: "Fine-tuning pretrained models for your own use case." },
      { title: "Capstone Model", desc: "Train and evaluate a model end-to-end on a real dataset." },
    ],
    duration: "10 weeks",
    level: "Advanced",
    practice: "Weekly labs",
  },
  {
    label: "PHASE 05",
    title: "DEPLOYMENT & REAL PROJECTS",
    subtitle: "Ship production AI systems and build your portfolio.",
    topics: [
      { title: "Model Deployment", desc: "Serving models via APIs, containers, and cloud platforms." },
      { title: "MLOps Basics", desc: "CI/CD for ML, model versioning, and monitoring in production." },
      { title: "System Design", desc: "Designing scalable AI systems and handling real-world traffic." },
      { title: "Portfolio Projects", desc: "Ship 2-3 end-to-end projects reviewed by your mentor." },
      { title: "Mock Interviews", desc: "Technical and behavioral interview practice with FAANG engineers." },
      { title: "Job Placement", desc: "Resume review, referrals, and interview scheduling support." },
    ],
    duration: "8 weeks",
    level: "Advanced",
    practice: "Live cohort",
  },
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20h18M6 20V10M12 20V4M18 20v-7" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export default function RoadmapSection() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#111827] text-3xl sm:text-4xl font-bold font-sans mb-3">
          Gen AI Engineering Roadmap
        </h2>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
          A comprehensive phase-by-phase curriculum designed to take you from fundamentals to advanced AI systems production.
        </p>

        {/* Phase tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PHASES.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-sans transition-colors ${
                active === i
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-white text-gray-500 ring-1 ring-gray-200 hover:bg-gray-50"
              }`}
            >
              Phase {i + 1}
            </button>
          ))}
        </div>

        {/* Phase detail card */}
        <div className="bg-white rounded-3xl ring-1 ring-gray-100 shadow-[0_12px_40px_-15px_rgba(37,99,235,0.12)] p-7 sm:p-9">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-[#2563EB] text-xs font-bold font-sans mb-4 tracking-wide">
            {phase.label}
          </span>
          <h3 className="text-gray-900 text-xl sm:text-2xl font-bold font-sans mb-2">{phase.title}</h3>
          <p className="text-slate-500 text-sm sm:text-base mb-6">{phase.subtitle}</p>

          <div className="bg-gradient-to-r from-[#3B6BFF] to-[#1D3FDE] rounded-xl px-5 py-3 text-white text-sm font-bold font-sans mb-6 flex items-center gap-2">
            <CheckIcon />
            <span>What You&apos;ll Learn</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
            {phase.topics.map((topic) => (
              <div key={topic.title} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 flex items-center justify-center size-5 rounded-full bg-blue-50 text-[#2563EB]">
                  <CheckIcon />
                </span>
                <div>
                  <h4 className="text-gray-900 text-sm font-bold font-sans mb-0.5">{topic.title}</h4>
                  <p className="text-gray-500 text-sm leading-5 font-sans">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-500">
              <ClockIcon />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-gray-400 font-sans">Duration</div>
                <div className="text-sm font-bold text-gray-900 font-sans">{phase.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <LevelIcon />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-gray-400 font-sans">Skill level</div>
                <div className="text-sm font-bold text-gray-900 font-sans">{phase.level}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <TargetIcon />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-gray-400 font-sans">Practice</div>
                <div className="text-sm font-bold text-gray-900 font-sans">{phase.practice}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="bg-[#0055FF] bg-gradient-to-r from-[#0066FF] to-[#0044FF] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] hover:-translate-y-[0.5px] transition-all">
            View Curriculum
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all">
            <DownloadIcon />
            Download Curriculum
          </button>
        </div>
      </div>
    </section>
  );
}
