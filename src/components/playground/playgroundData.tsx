import React from "react";

export type TaskStatus = "done" | "active" | "todo";

export const INITIAL_TASKS: { title: string; subtitle?: string; time: string; status: TaskStatus }[] = [
  { title: "Solve 2 LeetCode Problems", time: "90m", status: "done" },
  { title: "Read: Gradient Descent", time: "30m", status: "done" },
  { title: "Implement Logistic Regression", time: "150m", status: "active" },
  { title: "Push Code to GitHub", time: "20m", status: "todo" },
  { title: "Update LinkedIn Post", subtitle: "Write Learning Summary", time: "15m", status: "todo" },
];

export const PROOF_OF_WORK = [
  {
    title: "Pushed to GitHub",
    subtitle: "Logistic Regression Implementation",
    time: "2h ago",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.1 3.3 5 3.6 5 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.6 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    ),
  },
  {
    title: "LeetCode Submission",
    subtitle: "Problem Solved: 198. House Robber",
    time: "5h ago",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-3-9l-2 12" />
      </svg>
    ),
  },
  {
    title: "Notebook Completed",
    subtitle: "EDA on Breast Cancer Dataset",
    time: "1d ago",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h13a2 2 0 012 2v13a1 1 0 01-1 1H6a2 2 0 01-2-2V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v13a2 2 0 002 2M8 8h6M8 12h6" />
      </svg>
    ),
  },
  {
    title: "LinkedIn Post Published",
    subtitle: "Day 126 of My AI/ML Journey",
    time: "1d ago",
    icon: (
      <span className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-blue-500 text-white text-[9px] font-bold leading-none">
        in
      </span>
    ),
  },
];

export const CODE_LINES: { indent: number; tokens: { t: string; c: string }[] }[] = [
  { indent: 0, tokens: [{ t: "import ", c: "text-pink-400" }, { t: "numpy ", c: "text-gray-200" }, { t: "as ", c: "text-pink-400" }, { t: "np", c: "text-gray-200" }] },
  { indent: 0, tokens: [{ t: "def ", c: "text-pink-400" }, { t: "sigmoid", c: "text-blue-300" }, { t: "(z):", c: "text-gray-300" }] },
  { indent: 1, tokens: [{ t: "return ", c: "text-pink-400" }, { t: "1 ", c: "text-orange-300" }, { t: "/ (", c: "text-gray-300" }, { t: "1 ", c: "text-orange-300" }, { t: "+ np.exp(-z))", c: "text-gray-300" }] },
  { indent: 0, tokens: [{ t: "def ", c: "text-pink-400" }, { t: "predict", c: "text-blue-300" }, { t: "(X, w, b):", c: "text-gray-300" }] },
  { indent: 1, tokens: [{ t: "z ", c: "text-gray-200" }, { t: "= np.dot(X, w) + b", c: "text-gray-300" }] },
  { indent: 1, tokens: [{ t: "return ", c: "text-pink-400" }, { t: "sigmoid(z)", c: "text-gray-300" }] },
];

export const COST_BARS = [100, 62, 40, 26, 18];
