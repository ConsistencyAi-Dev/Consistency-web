"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROOF_OF_WORK, TaskStatus } from "./playgroundData";

interface PlaygroundLeftColumnProps {
  showcaseIndex: number | null;
  focusProgress: number;
  tasks: { title: string; subtitle?: string; time: string; status: TaskStatus }[];
}

export default function PlaygroundLeftColumn({
  showcaseIndex,
  focusProgress,
  tasks,
}: PlaygroundLeftColumnProps) {
  const getCardProps = (index: number) => {
    const isFocused = showcaseIndex === index;
    const isDimmed = showcaseIndex !== null && showcaseIndex !== index;
    return {
      animate: {
        borderColor: isFocused ? "rgba(59, 130, 246, 0.7)" : "rgba(255, 255, 255, 0.1)",
        boxShadow: isFocused
          ? "0 10px 30px rgba(59, 130, 246, 0.15)"
          : "0 0 0 rgba(0,0,0,0)",
        opacity: isDimmed ? 0.35 : 1,
      },
      transition: { duration: 0.5, ease: "easeInOut" as const },
    };
  };

  const completedCount = tasks.filter((t) => t.status === "done").length;

  return (
    <>
      {/* Today's Focus Card */}
      <motion.div
        {...getCardProps(0)}
        className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative text-left"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-bold text-xs">Today&apos;s Focus</span>
          <span className="flex items-center gap-1 text-[9px] text-gray-300 bg-white/5 px-1.5 py-0.5 rounded-md">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Jul 18, 2026
          </span>
        </div>
        <p className="text-gray-400 text-[11px] mb-3">One step. Maximum impact.</p>

        <div className="flex items-center gap-2.5 bg-white/5 rounded-xl p-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/15 text-blue-400 shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">Implement Logistic Regression</p>
            <p className="text-gray-300 text-[10px] truncate">Train and evaluate model on given dataset</p>
          </div>
          <span className="text-[9px] font-semibold text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded-md shrink-0">
            2h 30m
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-300 mb-2">
          <span>Daily Progress</span>
          <span className="text-white font-semibold">{focusProgress}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${focusProgress}%` }}
          />
        </div>
      </motion.div>

      {/* Today's Tasks Card */}
      <motion.div
        {...getCardProps(1)}
        className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative text-left"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-bold text-xs">Today&apos;s Tasks</span>
          <span className="text-emerald-400 text-[11px] font-semibold">
            {completedCount} / {tasks.length} Completed
          </span>
        </div>
        <ul className="space-y-0.5">
          {tasks.map((task) => (
            <li
              key={task.title}
              className={`flex items-center gap-2 rounded-lg px-1.5 py-1 transition-colors duration-300 ${
                task.status === "active" ? "bg-blue-500/10" : ""
              }`}
            >
              {task.status === "done" && (
                <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
              {task.status === "active" && (
                <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-blue-400 shrink-0 relative">
                  <span className="absolute inset-0.5 rounded-full bg-blue-400 animate-pulse" />
                </span>
              )}
              {task.status === "todo" && (
                <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/20 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-[11px] truncate transition-all duration-300 ${
                    task.status === "active" ? "text-white font-semibold" : "text-gray-300"
                  } ${task.status === "done" ? "line-through text-gray-500" : ""}`}
                >
                  {task.title}
                </p>
                {task.subtitle && <p className="text-gray-400 text-[9px] truncate">{task.subtitle}</p>}
              </div>
              <span className="text-gray-400 text-[9px] shrink-0">{task.time}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Proof of Work Card */}
      <motion.div
        {...getCardProps(2)}
        className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative text-left"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-bold text-xs">Proof of Work (Recent)</span>
          <span className="text-blue-400 text-[11px] font-semibold cursor-pointer">View all</span>
        </div>
        <ul className="space-y-1.5">
          {PROOF_OF_WORK.map((p) => (
            <li key={p.title} className="flex items-start gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-white/5 text-gray-300 shrink-0">
                {React.cloneElement(p.icon as React.ReactElement<{ className?: string }>, {
                  className: "w-3.5 h-3.5",
                })}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-semibold truncate">{p.title}</p>
                <p className="text-gray-400 text-[9px] truncate">{p.subtitle}</p>
              </div>
              <span className="text-gray-400 text-[9px] shrink-0">{p.time}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
