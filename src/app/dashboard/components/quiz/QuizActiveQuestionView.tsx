"use client";

import React from "react";
import { motion } from "framer-motion";
import { Question, QUIZ_QUESTIONS } from "./quizData";

interface QuizActiveQuestionViewProps {
  quizQuestionIndex: number;
  selectedOption: string | null;
  quizAnswers: Record<number, string>;
  countdownSeconds: number;
  onSelectOption: (option: string) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onJumpToQuestion: (index: number) => void;
  formatTime: (seconds: number) => string;
}

export default function QuizActiveQuestionView({
  quizQuestionIndex,
  selectedOption,
  quizAnswers,
  countdownSeconds,
  onSelectOption,
  onNextQuestion,
  onPrevQuestion,
  onJumpToQuestion,
  formatTime,
}: QuizActiveQuestionViewProps) {
  const currentQuestion = QUIZ_QUESTIONS[quizQuestionIndex];
  const progressPercent = Math.round(((quizQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100);
  const answeredCount = Object.keys(quizAnswers).length;

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
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
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

        {/* Right side live clock pill */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${
              countdownSeconds < 60 ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-gray-50 text-gray-700"
            }`}
          >
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(countdownSeconds)}</span>
          </span>
        </div>
      </div>

      {/* Main 2-Column Quiz Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
        {/* Left Column: Active Question & Interactive Option Selection */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 flex flex-col shadow-sm text-left">
          {/* Question topic badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className={`inline-flex items-center px-3 py-1 text-[11px] font-extrabold rounded-full ${getTopicBadgeStyle(currentQuestion.topicTheme)}`}>
              {currentQuestion.topic}
            </span>
          </div>

          {/* Question Title */}
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight leading-snug mb-5">
            {currentQuestion.text}
          </h3>

          {/* Conditional Code Terminal Display */}
          {currentQuestion.code && (
            <div className="w-full bg-[#0B0F19] rounded-2xl p-5 border border-gray-800 shadow-inner mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-gray-800/40 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-gray-500 font-mono text-[10px]">
                  {currentQuestion.codeTitle || "snippet.js"}
                </span>
              </div>
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-gray-300 overflow-x-auto whitespace-pre">
                <code>{currentQuestion.code}</code>
              </pre>
            </div>
          )}

          {/* Options selection cards */}
          <div className="space-y-3 mt-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === option;
              const optionLetters = ["A", "B", "C", "D"];
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onSelectOption(option)}
                  className={`w-full flex items-center p-4.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                    isSelected
                      ? "border-[#2B50EC] bg-[#2B50EC]/5 shadow-sm"
                      : "border-gray-150 bg-white hover:bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 border-2 transition-all ${
                        isSelected
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
              onClick={onPrevQuestion}
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
              onClick={onNextQuestion}
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
          {/* Widget 1: Quiz Navigator Grid */}
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
                    onClick={() => onJumpToQuestion(idx)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all border ${
                      isCurrent
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
              <span
                className={`text-[10px] font-black py-0.5 px-2 rounded-md tracking-wider ${
                  countdownSeconds < 60 ? "bg-[#EF4444] text-white" : "bg-black text-white"
                }`}
              >
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

          {/* Widget 3: Tips */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
