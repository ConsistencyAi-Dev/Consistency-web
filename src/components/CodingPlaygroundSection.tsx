"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { logoPng } from "@/assets";
import { INITIAL_TASKS, COST_BARS } from "./playground/playgroundData";
import PlaygroundLeftColumn from "./playground/PlaygroundLeftColumn";
import PlaygroundCenterEditor from "./playground/PlaygroundCenterEditor";
import PlaygroundRightColumn from "./playground/PlaygroundRightColumn";

export default function CodingPlaygroundSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [showcaseIndex, setShowcaseIndex] = useState<number | null>(null);
  const [loopTrigger, setLoopTrigger] = useState(0);

  const [focusProgress, setFocusProgress] = useState(67);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [animationStage, setAnimationStage] = useState<"idle" | "typing" | "running" | "complete">("idle");
  const [typedCodeLength, setTypedCodeLength] = useState(250);
  const [chartBars, setChartBars] = useState(COST_BARS);

  const triggerSequence = () => {
    setLoopTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    let active = true;

    const runLoop = async () => {
      await new Promise((r) => setTimeout(r, 800));
      if (!active) return;

      while (active) {
        setShowcaseIndex(0);
        await new Promise((r) => setTimeout(r, 2500));
        if (!active) break;

        setShowcaseIndex(1);
        await new Promise((r) => setTimeout(r, 2500));
        if (!active) break;

        setShowcaseIndex(2);
        await new Promise((r) => setTimeout(r, 2500));
        if (!active) break;

        setShowcaseIndex(3);
        await new Promise((r) => setTimeout(r, 6500));
        if (!active) break;

        setShowcaseIndex(4);
        await new Promise((r) => setTimeout(r, 3200));
        if (!active) break;

        setShowcaseIndex(null);
        await new Promise((r) => setTimeout(r, 4500));
        if (!active) break;
      }
    };

    if (isInView) {
      runLoop();
    } else {
      setShowcaseIndex(null);
    }

    return () => {
      active = false;
    };
  }, [isInView, loopTrigger]);

  useEffect(() => {
    if (showcaseIndex === 0) {
      setFocusProgress(20);
      const t = setTimeout(() => setFocusProgress(67), 400);
      return () => clearTimeout(t);
    } else {
      setFocusProgress(67);
    }
  }, [showcaseIndex]);

  useEffect(() => {
    if (showcaseIndex === 1) {
      setTasks(INITIAL_TASKS.map((t) => (t.title === "Implement Logistic Regression" ? { ...t, status: "active" as const } : t)));
      const t = setTimeout(() => {
        setTasks((prev) =>
          prev.map((t) => (t.title === "Implement Logistic Regression" ? { ...t, status: "done" as const } : t))
        );
      }, 1300);
      return () => clearTimeout(t);
    } else {
      setTasks(INITIAL_TASKS);
    }
  }, [showcaseIndex]);

  useEffect(() => {
    if (showcaseIndex === 3) {
      setAnimationStage("typing");
      setTypedCodeLength(0);

      const interval = setInterval(() => {
        setTypedCodeLength((prev) => {
          if (prev >= 250) {
            clearInterval(interval);
            return 250;
          }
          return prev + 6;
        });
      }, 50);

      const runTimeout = setTimeout(() => {
        setAnimationStage("running");
      }, 2900);

      const completeTimeout = setTimeout(() => {
        setAnimationStage("complete");
      }, 4900);

      return () => {
        clearInterval(interval);
        clearTimeout(runTimeout);
        clearTimeout(completeTimeout);
      };
    } else {
      setAnimationStage("idle");
      setTypedCodeLength(250);
    }
  }, [showcaseIndex]);

  useEffect(() => {
    if (showcaseIndex === 4) {
      setChartBars([0, 0, 0, 0, 0]);
      const t = setTimeout(() => setChartBars(COST_BARS), 300);
      return () => clearTimeout(t);
    } else {
      setChartBars(COST_BARS);
    }
  }, [showcaseIndex]);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-[#F9F9F9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans mb-4">
            Practice more, code better
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Your personal coding playground to write, run, test, and improve your skills with real-time feedback.
          </p>
        </div>

        <div className="rounded-3xl bg-[#0B0F1A] border border-white/10 shadow-2xl p-3.5 sm:p-5 relative overflow-hidden">
          {/* Inner Dashboard Canvas */}
          <motion.div
            animate={{
              scale: typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showcaseIndex !== null ? 1.05 : 1,
              x:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? "0%"
                  : showcaseIndex === 0
                  ? "3%"
                  : showcaseIndex === 1
                  ? "0%"
                  : showcaseIndex === 2
                  ? "-3%"
                  : showcaseIndex === 3
                  ? "2%"
                  : showcaseIndex === 4
                  ? "-2%"
                  : "0%",
              y:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? "0%"
                  : showcaseIndex === 0 || showcaseIndex === 1 || showcaseIndex === 2
                  ? "2%"
                  : showcaseIndex === 3 || showcaseIndex === 4
                  ? "-2%"
                  : "0%",
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 1.2,
            }}
            className="w-full h-full origin-center overflow-x-auto"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4 relative z-20">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img src={logoPng.src} alt="Consistency AI" className="h-7 w-7 object-contain" />
                  <span className="text-white font-bold text-sm hidden sm:inline">Consistency AI</span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-white font-bold text-lg leading-tight">Playground</p>
                    <button
                      onClick={triggerSequence}
                      className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full hover:bg-blue-500/20 transition-all font-semibold flex items-center gap-1 cursor-pointer select-none border border-blue-400/20"
                    >
                      <svg className="w-2.5 h-2.5 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      Replay Tour
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs">Your daily workspace. Focus. Build. Grow.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
                </span>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/100?img=68" alt="Rahul" className="w-8 h-8 rounded-full object-cover" />
                  <div className="hidden sm:block">
                    <p className="text-white text-xs font-semibold leading-tight">Rahul</p>
                    <p className="text-gray-400 text-[10px] leading-tight">AI/ML Engineer</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 1: focus, tasks, proof of work */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
              <PlaygroundLeftColumn
                showcaseIndex={showcaseIndex}
                focusProgress={focusProgress}
                tasks={tasks}
              />
            </div>

            {/* Row 2: coding environment, linkedin preview */}
            <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_0.8fr] gap-4 mt-4 relative z-10">
              <PlaygroundCenterEditor
                showcaseIndex={showcaseIndex}
                animationStage={animationStage}
                typedCodeLength={typedCodeLength}
              />
              <PlaygroundRightColumn
                showcaseIndex={showcaseIndex}
                chartBars={chartBars}
              />
            </div>

            {/* Quick Access */}
            <div className="mt-6 relative z-10">
              <span className="text-white font-semibold text-sm">Quick Access</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
