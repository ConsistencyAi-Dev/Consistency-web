"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS } from "./quiz/quizData";
import QuizLandingView from "./quiz/QuizLandingView";
import QuizActiveQuestionView from "./quiz/QuizActiveQuestionView";
import QuizLoadingView from "./quiz/QuizLoadingView";
import QuizResultsView from "./quiz/QuizResultsView";

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
    setQuizAnswers((prev) => ({
      ...prev,
      [QUIZ_QUESTIONS[quizQuestionIndex].id]: option,
    }));
  };

  const handleNextQuizQuestion = () => {
    if (quizQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizQuestionIndex(quizQuestionIndex + 1);
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

  return (
    <motion.div
      key="step-4"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`w-full flex flex-col items-center gap-6 ${
        quizState === "quiz" || quizState === "results" ? "max-w-[1100px]" : "max-w-[700px]"
      }`}
    >
      {/* Floating Pill Badges above landing */}
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

      {/* Screen Router */}
      {quizState === "results" ? (
        <QuizResultsView quizAnswers={quizAnswers} onComplete={onComplete} />
      ) : quizState === "quiz" ? (
        <QuizActiveQuestionView
          quizQuestionIndex={quizQuestionIndex}
          selectedOption={selectedOption}
          quizAnswers={quizAnswers}
          countdownSeconds={countdownSeconds}
          onSelectOption={handleSelectQuizOption}
          onNextQuestion={handleNextQuizQuestion}
          onPrevQuestion={handlePrevQuizQuestion}
          onJumpToQuestion={handleJumpToQuestion}
          formatTime={formatTime}
        />
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 w-full flex flex-col relative overflow-hidden">
          {quizState !== "loading" && (
            <button
              type="button"
              onClick={handleBack}
              className="absolute top-6 left-6 text-gray-400 hover:text-gray-950 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              ← Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {quizState === "landing" && (
              <QuizLandingView
                onStartQuiz={() => setQuizState("quiz")}
                onSkipQuiz={onComplete}
              />
            )}

            {quizState === "loading" && (
              <QuizLoadingView quizLoadingText={quizLoadingText} />
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
