"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoPng } from "@/assets";

interface Question {
  id: number;
  text: string;
  topic: string;
  topicTheme?: "blue" | "orange" | "green" | "purple";
  options: string[];
  correctAnswer: string;
  code?: string;
  codeTitle?: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    topic: "DSA - Arrays & Search",
    topicTheme: "blue",
    text: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    code: `function binarySearch(arr, x) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === x) return m;
    if (arr[m] < x) l = m + 1;
    else r = m - 1;
  }
  return -1;
}`,
  },
  {
    id: 2,
    topic: "JavaScript - Core",
    topicTheme: "orange",
    text: "What will [1,2,3].map(n => n * 2) return?",
    options: ["[2, 4, 6]", "[1, 2, 3]", "[2, 4]", "ReferenceError"],
    correctAnswer: "[2, 4, 6]",
    code: `const result = [1, 2, 3].map(n => n * 2);
console.log(result);`,
    codeTitle: "map.js",
  },
  {
    id: 3,
    topic: "AI Quiz",
    topicTheme: "blue",
    text: "Which database is best suited for storing user sessions with TTL?",
    options: [
      "MySQL",
      "Redis - in-memory with expiry",
      "MongoDB",
      "PostgreSQL",
    ],
    correctAnswer: "Redis - in-memory with expiry",
  },
  {
    id: 4,
    topic: "React - Performance",
    topicTheme: "green",
    text: "What does useMemo do in React?",
    options: [
      "Memoizes expensive calculation",
      "Memoizes entire component",
      "Fetches data on mount",
      "Nothing - deprecated hook",
    ],
    correctAnswer: "Memoizes expensive calculation",
    code: `const expensive = useMemo(() => compute(a, b), [a, b]);`,
  },
  {
    id: 5,
    topic: "Time Complexity - Analysis",
    topicTheme: "purple",
    text: "What is the complexity of nested loops: for i in n, for j in n?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(2*n)"],
    correctAnswer: "O(n²)",
    code: `for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    doWork();
  }
}`,
  },
  {
    id: 6,
    topic: "AI Quiz",
    topicTheme: "green",
    text: "Which type of machine learning uses labeled data to train a model to make predictions?",
    options: [
      "Supervised learning",
      "Reinforcement learning",
      "Unsupervised learning",
      "Randomized learning",
    ],
    correctAnswer: "Supervised learning",
  },
];

interface QuizStepProps {
  quizState: "landing" | "quiz" | "loading" | "results";
  setQuizState: (state: "landing" | "quiz" | "loading" | "results") => void;
  quizQuestionIndex: number;
  setQuizQuestionIndex: (idx: number) => void;
  selectedOption: string | null;
  setSelectedOption: (opt: string | null) => void;
  quizAnswers: Record<number, string>;
  setQuizAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  quizLoadingText: string;
  handleBack: () => void;
  onComplete: () => void;
}

export default function QuizStep({
  quizState,
  setQuizState,
  quizQuestionIndex,
  setQuizQuestionIndex,
  selectedOption,
  setSelectedOption,
  quizAnswers,
  setQuizAnswers,
  quizLoadingText,
  handleBack,
  onComplete,
}: QuizStepProps) {
  const [countdownSeconds, setCountdownSeconds] = useState(300); // 5 minutes

  // Countdown timer logic
  useEffect(() => {
    if (quizState !== "quiz") return;
    if (countdownSeconds <= 0) {
      setQuizState("loading");
      return;
    }

    const timer = setInterval(() => {
      setCountdownSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, countdownSeconds, setQuizState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSelectQuizOption = (option: string) => {
    setSelectedOption(option);
    // Auto save answer locally on click
    setQuizAnswers((prev) => ({
      ...prev,
      [QUIZ_QUESTIONS[quizQuestionIndex].id]: option,
    }));
  };

  const handleNextQuizQuestion = () => {
    if (quizQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizQuestionIndex(quizQuestionIndex + 1);
      // Restore previously saved answer if exists
      const nextAnswer = quizAnswers[QUIZ_QUESTIONS[quizQuestionIndex + 1].id] || null;
      setSelectedOption(nextAnswer);
    } else {
      setQuizState("loading");
    }
  };

  const handlePrevQuizQuestion = () => {
    if (quizQuestionIndex > 0) {
      setQuizQuestionIndex(quizQuestionIndex - 1);
      const prevAnswer = quizAnswers[QUIZ_QUESTIONS[quizQuestionIndex - 1].id] || null;
      setSelectedOption(prevAnswer);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    setQuizQuestionIndex(idx);
    const targetAnswer = quizAnswers[QUIZ_QUESTIONS[idx].id] || null;
    setSelectedOption(targetAnswer);
  };

  const answeredCount = Object.keys(quizAnswers).length;
  const progressPercent = Math.round(((quizQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100);

  const getTopicBadgeStyle = (theme?: string) => {
    switch (theme) {
      case "blue":
        return "bg-[#E8EFFF] text-[#2B50EC]";
      case "orange":
        return "bg-[#FFEAD6] text-[#F97316]";
      case "green":
        return "bg-[#E6F4EA] text-[#137333]";
      case "purple":
        return "bg-[#F3E8FF] text-[#7C3AED]";
      default:
        return "bg-gray-150 text-gray-750";
    }
  };

  // Results calculation
  const totalQuestions = QUIZ_QUESTIONS.length;
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    if (quizAnswers[q.id] === q.correctAnswer) {
      correctCount += 1;
    }
  });
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  return (
    <motion.div
      key="step-4"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`w-full flex flex-col items-center gap-6 ${quizState === "quiz" || quizState === "results" ? "max-w-[1100px]" : "max-w-[700px]"
        }`}
    >
      {/* Floating Pill Badges above the main card (only on landing page) */}
      {quizState === "landing" && (
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-gray-700 text-xs font-bold rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
            Skill Assessment Quiz
          </span>
          <span className="px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-gray-700 text-xs font-bold rounded-full">
            5 min
          </span>
          <span className="px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-gray-700 text-xs font-bold rounded-full">
            5 questions - Adaptive
          </span>
          <span className="px-3.5 py-1.5 bg-[#E8EFFF] text-[#2B50EC] text-xs font-bold rounded-full">
            AI-Powered
          </span>
        </div>
      )}

      {/* Conditional Layouts based on active state */}
      {quizState === "results" ? (
        // SKILL ANALYSIS / RESULTS SCREEN
        <div className="w-full flex flex-col gap-6 text-left">

          {/* Top Card: Overview Analysis */}
          <div className="w-full bg-white rounded-3xl border border-gray-150 p-8 flex flex-col relative overflow-hidden shadow-sm">

            {/* Header Section */}
            <div className="flex items-start gap-4 mb-6">
              {/* Overall Score Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#2B50EC] text-white flex flex-col items-center justify-center font-bold shadow-md shadow-blue-500/10 text-xl shrink-0">
                <span>{scorePercent}%</span>
              </div>

              <div className="flex-1">
                {/* Quiz Completed Pill */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6F4EA] text-[#137333] text-[10px] font-black rounded-full uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Quiz Completed • {answeredCount}/{totalQuestions} attempted
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                  Great job, Rahul! Here&apos;s your skill analysis
                </h2>

                <p className="text-gray-500 text-sm font-semibold mt-1">
                  Score {correctCount}/{totalQuestions} • {scorePercent}% — We&apos;ve mapped your strengths and gaps. Your roadmap is now calibrated for the next 8 weeks.
                </p>
              </div>
            </div>

            {/* Metrics cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              {/* Overall Level widget */}
              <div className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col justify-between min-h-[110px]">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Overall level</h4>
                  <span className="text-base font-black text-gray-800">Beginner</span>
                  <span className="text-xs text-gray-400 font-bold ml-1.5">{scorePercent}% score</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-3 shadow-inner">
                  <div className="h-full bg-gray-800 rounded-full" style={{ width: `${scorePercent}%` }} />
                </div>
              </div>

              {/* Strengths widget */}
              <div className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col justify-between min-h-[110px]">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Strengths</h4>
                  <p className="text-xs font-semibold text-gray-400 mt-1 leading-snug">
                    {correctCount > 0 ? "DSA & Time Complexity" : "Keep going – strengths will appear here"}
                  </p>
                </div>
                {correctCount > 0 && (
                  <span className="inline-flex self-start bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                    Calibrated
                  </span>
                )}
              </div>

              {/* To Improve widget */}
              <div className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col justify-between min-h-[110px]">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1.5">To Improve</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-[#FEF2F2] border border-[#FEE2E2] text-[#EF4444] text-[9px] font-bold py-0.5 px-2 rounded-full">
                      JavaScript 0%
                    </span>
                    <span className="bg-[#FEF2F2] border border-[#FEE2E2] text-[#EF4444] text-[9px] font-bold py-0.5 px-2 rounded-full">
                      React 0%
                    </span>
                    <span className="bg-[#FFFBEB] border border-[#FEF3C7] text-[#D97706] text-[9px] font-bold py-0.5 px-2 rounded-full">
                      DSA Basics 50%
                    </span>
                    <span className="bg-[#FEF2F2] border border-[#FEE2E2] text-[#EF4444] text-[9px] font-bold py-0.5 px-2 rounded-full">
                      System Design 0%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation banner at the bottom */}
            <div className="bg-[#0B0F19] text-white rounded-2xl p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border border-gray-800 shadow-inner">
              <span className="text-xs font-semibold text-gray-300 leading-snug">
                <strong className="text-white font-extrabold">Recommendation:</strong> Focus on DSA + System Design in first 2 weeks — JS & React already strong.
              </span>
              <span className="bg-[#1E293B] border border-[#334155] rounded-xl text-[10px] font-black py-1.5 px-3 uppercase tracking-wider text-gray-300 shrink-0">
                Updated roadmap • 3w → 4w DSA
              </span>
            </div>

            {/* Blue decorative indicator line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2B50EC] to-indigo-600" />
          </div>

          {/* Bottom 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
            {/* Detailed Review column */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <h4 className="text-sm font-extrabold text-gray-800 tracking-tight">Detailed review</h4>
                <span className="text-xs font-semibold text-gray-400">
                  {correctCount} correct - {totalQuestions - correctCount} to review
                </span>
              </div>

              {/* Collapsible Questions list */}
              <div className="space-y-2.5">
                {QUIZ_QUESTIONS.map((q) => {
                  const userAnswer = quizAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl border border-gray-100 bg-white flex items-center justify-between gap-4 transition-all hover:bg-gray-50/50"
                    >
                      <div className="flex items-start gap-3">
                        {/* Status Check circle */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isCorrect ? "bg-[#E6F4EA] text-[#137333]" : "bg-gray-100 text-gray-400"
                            }`}
                        >
                          {isCorrect ? (
                            <svg className="w-3 h-3 text-[#137333]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                          )}
                        </div>

                        <div>
                          {/* Question text */}
                          <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 tracking-tight leading-snug">
                            {q.id}. {q.text}
                          </h4>

                          {/* Metadata badges line */}
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <span className="bg-gray-50 border border-gray-200 text-gray-500 text-[10px] font-black py-0.5 px-2.5 rounded-full">
                              Your: {userAnswer ? userAnswer.substring(0, 25) : "Skipped"}
                            </span>
                            <span className="bg-[#E6F4EA] border border-[#A7F3D0] text-[#10B981] text-[10px] font-black py-0.5 px-2.5 rounded-full">
                              Correct: {q.correctAnswer.substring(0, 25)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand symbol */}
                      <span className="text-gray-300 font-extrabold text-sm hover:text-gray-600 shrink-0 cursor-pointer">+</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What's next column card */}
            <div className="flex flex-col gap-6 lg:col-span-1 h-full">
              <div className="bg-[#0B0F19] text-white rounded-3xl border border-gray-800 p-6 flex flex-col justify-between shadow-sm relative h-full min-h-[300px]">
                <div>
                  <h4 className="text-base font-extrabold text-white mb-3">What&apos;s next?</h4>
                  <p className="text-xs font-semibold text-gray-400 leading-relaxed mb-6">
                    Continue to Profile Strength to unlock AI-tailored daily tasks, or view the updated detailed roadmap.
                  </p>
                </div>

                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={onComplete}
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3.5 px-6 rounded-xl font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Submit
                  </button>

                  <span className="text-[9px] font-bold text-gray-500 text-center mt-2.5 w-full block">
                    Your private data • No impact until you continue
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : quizState === "quiz" ? (
        // ACTIVE INTERACTIVE QUIZ (2 Column Layout + Top Toolbar)
        <div className="w-full flex flex-col gap-6">
          {/* Top Progress & Timer Toolbar */}
          <div className="w-full bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-left">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm font-bold text-gray-800 shrink-0">
                Question {quizQuestionIndex + 1}/{QUIZ_QUESTIONS.length}
              </span>
              <div className="h-2 w-full sm:w-48 bg-gray-100 rounded-full overflow-hidden border border-gray-100/20 shadow-inner">
                <motion.div
                  className="h-full bg-[#2B50EC]"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                />
              </div>
              <span className="text-xs font-extrabold text-gray-400 tabular-nums">
                {progressPercent}%
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
              {/* Bullet circle indicators */}
              <div className="flex items-center gap-2">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const isCurrent = idx === quizQuestionIndex;
                  const isAnswered = quizAnswers[q.id] !== undefined;
                  return (
                    <button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${isCurrent
                          ? "bg-[#2B50EC]"
                          : isAnswered
                            ? "bg-[#10B981]"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      aria-label={`Go to question ${idx + 1}`}
                    />
                  );
                })}
              </div>

              {/* Time display indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-150 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="tabular-nums">{formatTime(countdownSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
            {/* Left Column: Active Question details */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col shadow-sm text-left relative">
              {/* Question metadata info (matches Q1 & Q2 topic highlights exactly) */}
              <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold mb-5">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold ${getTopicBadgeStyle(QUIZ_QUESTIONS[quizQuestionIndex].topicTheme)}`}>
                  {QUIZ_QUESTIONS[quizQuestionIndex].topic}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">Adaptive</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">No negative marking</span>
              </div>

              {/* Question Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight leading-snug mb-5">
                {QUIZ_QUESTIONS[quizQuestionIndex].text}
              </h3>

              {/* Conditional Code Terminal Display */}
              {QUIZ_QUESTIONS[quizQuestionIndex].code && (
                <div className="w-full bg-[#0B0F19] rounded-2xl p-5 border border-gray-800 shadow-inner mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-800/40 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                      <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                    </div>
                    <span className="text-gray-500 font-mono text-[10px]">
                      {QUIZ_QUESTIONS[quizQuestionIndex].codeTitle || "snippet.js"}
                    </span>
                  </div>
                  {/* Code Snippet lines syntax highlighting styling */}
                  <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-gray-300 overflow-x-auto whitespace-pre">
                    <code>
                      {QUIZ_QUESTIONS[quizQuestionIndex].id === 1 ? (
                        <>
                          <span className="text-pink-400">function</span> <span className="text-blue-300">binarySearch</span>(<span className="text-orange-300">arr</span>, <span className="text-orange-300">x</span>) &#123;{"\n"}
                          {"  "}<span className="text-pink-400">let</span> <span className="text-blue-300">l</span> = <span className="text-teal-400">0</span>, <span className="text-blue-300">r</span> = <span className="text-orange-300">arr</span>.<span className="text-sky-300">length</span> - <span className="text-teal-400">1</span>;{"\n"}
                          {"  "}<span className="text-pink-400">while</span> (<span className="text-blue-300">l</span> &lt;= <span className="text-blue-300">r</span>) &#123;{"\n"}
                          {"    "}<span className="text-pink-400">let</span> <span className="text-blue-300">m</span> = <span className="text-blue-300">Math</span>.<span className="text-sky-300">floor</span>((<span className="text-blue-300">l</span> + <span className="text-blue-300">r</span>) / <span className="text-teal-400">2</span>);{"\n"}
                          {"    "}<span className="text-pink-400">if</span> (<span className="text-orange-300">arr</span>[<span className="text-blue-300">m</span>] === <span className="text-orange-300">x</span>) <span className="text-pink-400">return</span> <span className="text-blue-300">m</span>;{"\n"}
                          {"    "}<span className="text-pink-400">if</span> (<span className="text-orange-300">arr</span>[<span className="text-blue-300">m</span>] &lt; <span className="text-orange-300">x</span>) <span className="text-blue-300">l</span> = <span className="text-blue-300">m</span> + <span className="text-teal-400">1</span>;{"\n"}
                          {"    "}<span className="text-pink-400">else</span> <span className="text-blue-300">r</span> = <span className="text-blue-300">m</span> - <span className="text-teal-400">1</span>;{"\n"}
                          {"  "}&#125;{"\n"}
                          {"  "}<span className="text-pink-400">return</span> -<span className="text-teal-400">1</span>;{"\n"}
                          &#125;
                        </>
                      ) : QUIZ_QUESTIONS[quizQuestionIndex].id === 2 ? (
                        <>
                          <span className="text-pink-400">const</span> <span className="text-blue-300">result</span> = [<span className="text-teal-400">1</span>, <span className="text-teal-400">2</span>, <span className="text-teal-400">3</span>].<span className="text-sky-300">map</span>(<span className="text-blue-300">n</span> =&gt; <span className="text-blue-300">n</span> * <span className="text-teal-400">2</span>);{"\n"}
                          <span className="text-blue-300">console</span>.<span className="text-sky-300">log</span>(<span className="text-blue-300">result</span>);
                        </>
                      ) : QUIZ_QUESTIONS[quizQuestionIndex].id === 4 ? (
                        <>
                          <span className="text-pink-400">const</span> <span className="text-blue-300">expensive</span> = <span className="text-sky-300">useMemo</span>(() =&gt; <span className="text-sky-300">compute</span>(<span className="text-blue-300">a</span>, <span className="text-blue-300">b</span>), [<span className="text-blue-300">a</span>, <span className="text-blue-300">b</span>]);
                        </>
                      ) : QUIZ_QUESTIONS[quizQuestionIndex].id === 5 ? (
                        <>
                          <span className="text-pink-400">for</span> (<span className="text-pink-400">let</span> <span className="text-blue-300">i</span> = <span className="text-teal-400">0</span>; <span className="text-blue-300">i</span> &lt; <span className="text-blue-300">n</span>; <span className="text-blue-300">i</span>++) &#123;{"\n"}
                          {"  "}<span className="text-pink-400">for</span> (<span className="text-pink-400">let</span> <span className="text-blue-300">j</span> = <span className="text-teal-400">0</span>; <span className="text-blue-300">j</span> &lt; <span className="text-blue-300">n</span>; <span className="text-blue-300">j</span>++) &#123;{"\n"}
                          {"    "}<span className="text-sky-300">doWork</span>();{"\n"}
                          {"  "}&#125;{"\n"}
                          &#125;
                        </>
                      ) : (
                        QUIZ_QUESTIONS[quizQuestionIndex].code
                      )}
                    </code>
                  </pre>
                </div>
              )}

              {/* Options selection cards (matches mockup, radio icons removed) */}
              <div className="space-y-3 mt-4">
                {QUIZ_QUESTIONS[quizQuestionIndex].options.map((option, index) => {
                  const isSelected = selectedOption === option;
                  const optionLetters = ["A", "B", "C", "D"];
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectQuizOption(option)}
                      className={`w-full flex items-center p-4.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${isSelected
                          ? "border-[#2B50EC] bg-[#2B50EC]/5 shadow-sm"
                          : "border-gray-150 bg-white hover:bg-gray-50/50"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Letter indicator (circle) */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 border-2 transition-all ${isSelected
                              ? "border-[#2B50EC] text-[#2B50EC] bg-transparent"
                              : "bg-white border-gray-200 text-gray-500"
                            }`}
                        >
                          {optionLetters[index]}
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Question card footer navigation controls */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrevQuizQuestion}
                  disabled={quizQuestionIndex === 0}
                  className="border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 px-5 py-3 rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
                >
                  ← Previous
                </button>

                <span className="text-[11px] font-semibold text-gray-400">
                  Saved • 3s ago
                </span>

                <button
                  type="button"
                  onClick={handleNextQuizQuestion}
                  className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{quizQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "Submit Quiz" : "Continue to Next"}</span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: Stack of Interactive widgets */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              {/* Widget 1: Quiz Navigator Grid (Green Checkmark for Answered indices) */}
              <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm text-left flex flex-col">
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-sm font-extrabold text-gray-800 tracking-tight">Quiz Navigator</h4>
                  <span className="text-[10px] font-bold text-gray-400">
                    {answeredCount}/{QUIZ_QUESTIONS.length} answered
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-2 my-2">
                  {QUIZ_QUESTIONS.map((q, idx) => {
                    const isCurrent = idx === quizQuestionIndex;
                    const isAnswered = quizAnswers[q.id] !== undefined;

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all border ${isCurrent
                            ? "bg-[#2B50EC] text-white border-[#2B50EC] shadow-sm shadow-blue-500/20"
                            : isAnswered
                              ? "bg-[#10B981] text-white border-[#10B981] shadow-sm shadow-emerald-500/20"
                              : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                          }`}
                      >
                        {isAnswered && !isCurrent ? (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          idx + 1
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* State legend */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-extrabold text-gray-400 border-t border-gray-100 pt-3 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B50EC]" />
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    <span>Pending</span>
                  </div>
                </div>
              </div>

              {/* Widget 2: Time Left countdown indicator */}
              <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm text-left flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-extrabold text-gray-800 tracking-tight">Time left</h4>
                  <span className={`text-[10px] font-black py-0.5 px-2 rounded-md tracking-wider ${countdownSeconds < 60
                      ? "bg-[#EF4444] text-white"
                      : "bg-black text-white"
                    }`}>
                    {formatTime(countdownSeconds)}
                  </span>
                </div>

                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-3 mb-2 shadow-inner">
                  <motion.div
                    className={`h-full ${countdownSeconds < 60 ? "bg-[#EF4444]" : "bg-gray-900"}`}
                    animate={{ width: `${(countdownSeconds / 300) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                {countdownSeconds < 60 ? (
                  <div className="bg-[#FEF2F2] border border-[#FEE2E2] p-2 rounded-xl flex items-center gap-1.5 mt-2">
                    <svg className="w-3.5 h-3.5 text-[#B91C1C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-[#991B1B] text-[10px] font-bold leading-tight">
                      Less than a minute left – submit soon!
                    </span>
                  </div>
                ) : (
                  <span className="text-[10px] font-semibold text-gray-400 mt-1">
                    No rush. You can skip and return anytime.
                  </span>
                )}
              </div>

              {/* Widget 3: Tips & AI Sparkle helper button */}
              <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm text-left flex flex-col">
                <h4 className="text-sm font-extrabold text-gray-800 tracking-tight mb-2.5">Tips</h4>
                <ul className="space-y-2 text-[11px] font-semibold text-gray-500 list-none pl-0">
                  <li className="flex items-start gap-1">
                    <span>-</span>
                    <span>Take your time – adaptive difficulty</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>-</span>
                    <span>You can skip and return to any question</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>-</span>
                    <span>No negative marking, best attempt counts</span>
                  </li>
                </ul>

                {/* AI Hint sparkles button */}
                <button
                  type="button"
                  className="mt-5 w-full bg-blue-50/70 hover:bg-blue-100/50 border border-blue-100/50 text-[#2B50EC] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#2B50EC]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C8.77 12.18 8 10.66 8 9c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.66-.77 3.18-2.15 4.1z" />
                  </svg>
                  <span>AI Hint</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // LANDING PAGE or LOADING PAGE (Single Card Wrapper)
        <div className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 w-full flex flex-col relative overflow-hidden">
          {/* Back button */}
          {quizState !== "loading" && (
            <button
              type="button"
              onClick={() => {
                handleBack();
              }}
              className="absolute top-6 left-6 text-gray-400 hover:text-gray-950 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              ← Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {/* LANDING PAGE */}
            {quizState === "landing" && (
              <motion.div
                key="quiz-landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center w-full"
              >
                {/* Code Symbol Logo */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 bg-white p-2.5 mb-6 mt-4 sm:mt-0 overflow-hidden">
                  <img src={logoPng.src} alt="Consistency AI" className="w-full h-full object-contain" />
                </div>

                {/* Titles */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight text-center leading-tight">
                  Let&apos;s check your current level
                </h2>
                <p className="text-gray-500 text-sm font-semibold mt-2.5 text-center max-w-[420px]">
                  5 quick questions across DSA, System Design, JavaScript — helps AI tailor your roadmap with surgical precision.
                </p>

                {/* Topic Pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["DSA Basics", "Time Complexity", "JavaScript", "React", "System Design"].map((topic) => (
                    <span
                      key={topic}
                      className="bg-white border border-gray-200 text-gray-800 text-xs font-semibold py-1.5 px-4 rounded-full shadow-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Value proposition Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mt-8">
                  {[
                    {
                      title: "Personalized difficulty",
                      desc: "Adapts to your level in real-time",
                      icon: (
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Accurate roadmap",
                      desc: "Calibrates weeks & topics for you",
                      icon: (
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <circle cx="12" cy="12" r="8" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="12" cy="12" r="1.5" />
                        </svg>
                      ),
                    },
                    {
                      title: "Skill gap analysis",
                      desc: "Pinpoints strengths vs gaps",
                      icon: (
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L3 8l9 4 9-4-9-4zM3 12l9 4 9-4M3 16l9 4 9-4" />
                        </svg>
                      ),
                    },
                  ].map((prop, idx) => (
                    <div
                      key={idx}
                      className="p-4.5 rounded-2xl border border-gray-150/80 bg-white text-left transition-all hover:shadow-sm flex flex-col"
                    >
                      {/* Top row: Icon beside Heading */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                          {prop.icon}
                        </div>
                        <h4 className="text-xs font-bold text-gray-800 tracking-tight">{prop.title}</h4>
                      </div>
                      {/* Bottom row: Description */}
                      <p className="text-[10px] text-gray-400 font-semibold leading-snug pl-1">{prop.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="w-full mt-8 flex flex-col items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setQuizState("quiz")}
                    className="w-full bg-[#2B50EC] hover:bg-[#1E3BB3] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>Start Quiz</span>
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={onComplete}
                    className="text-gray-400 hover:text-gray-755 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Skip quiz – use default roadmap
                  </button>
                </div>

                <div className="mt-8 text-center text-[10px] font-semibold text-gray-400 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure, private, entirely yours.</span>
                </div>
              </motion.div>
            )}

            {/* LOADING SIMULATOR STATE */}
            {quizState === "loading" && (
              <motion.div
                key="quiz-loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-10"
              >
                {/* Glimmering pulse ring animation */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 bg-blue-100/40 rounded-full"
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.6, 0.1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center relative shadow-sm">
                    <svg className="animate-spin h-6 w-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight text-center">
                  {quizLoadingText}
                </h3>
                <p className="text-gray-400 text-xs font-semibold text-center mt-1">
                  Tailoring adaptive curriculum modules and difficulty nodes
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
