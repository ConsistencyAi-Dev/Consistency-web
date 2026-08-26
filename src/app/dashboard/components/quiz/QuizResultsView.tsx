"use client";

import React from "react";
import { QUIZ_QUESTIONS } from "./quizData";

interface QuizResultsViewProps {
  quizAnswers: Record<number, string>;
  onComplete: () => void;
}

export default function QuizResultsView({ quizAnswers, onComplete }: QuizResultsViewProps) {
  const totalQuestions = QUIZ_QUESTIONS.length;
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    if (quizAnswers[q.id] === q.correctAnswer) {
      correctCount += 1;
    }
  });
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const answeredCount = Object.keys(quizAnswers).length;

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Top Card: Overview Analysis */}
      <div className="w-full bg-white rounded-3xl border border-gray-150 p-8 flex flex-col relative overflow-hidden shadow-sm">
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#2B50EC] text-white flex flex-col items-center justify-center font-bold shadow-md shadow-blue-500/10 text-xl shrink-0">
            <span>{scorePercent}%</span>
          </div>

          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E6F4EA] text-[#137333] text-[10px] font-black rounded-full uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Quiz Completed • {answeredCount}/{totalQuestions} attempted
            </span>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
              Great job! Here&apos;s your skill analysis
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
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isCorrect ? "bg-[#E6F4EA] text-[#137333]" : "bg-gray-100 text-gray-400"
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
                      <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 tracking-tight leading-snug">
                        {q.id}. {q.text}
                      </h4>

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
  );
}
