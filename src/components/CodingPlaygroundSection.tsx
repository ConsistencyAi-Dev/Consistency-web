'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type TaskStatus = 'done' | 'active' | 'todo';

const INITIAL_TASKS: { title: string; subtitle?: string; time: string; status: TaskStatus }[] = [
  { title: 'Solve 2 LeetCode Problems', time: '90m', status: 'done' },
  { title: 'Read: Gradient Descent', time: '30m', status: 'done' },
  { title: 'Implement Logistic Regression', time: '150m', status: 'active' },
  { title: 'Push Code to GitHub', time: '20m', status: 'todo' },
  { title: 'Update LinkedIn Post', subtitle: 'Write Learning Summary', time: '15m', status: 'todo' },
];

const PROOF_OF_WORK = [
  {
    title: 'Pushed to GitHub',
    subtitle: 'Logistic Regression Implementation',
    time: '2h ago',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.1 3.3 5 3.6 5 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.6 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
    ),
  },
  {
    title: 'LeetCode Submission',
    subtitle: 'Problem Solved: 198. House Robber',
    time: '5h ago',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-3-9l-2 12" /></svg>
    ),
  },
  {
    title: 'Notebook Completed',
    subtitle: 'EDA on Breast Cancer Dataset',
    time: '1d ago',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h13a2 2 0 012 2v13a1 1 0 01-1 1H6a2 2 0 01-2-2V4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v13a2 2 0 002 2M8 8h6M8 12h6" /></svg>
    ),
  },
  {
    title: 'LinkedIn Post Published',
    subtitle: 'Day 126 of My AI/ML Journey',
    time: '1d ago',
    icon: (
      <span className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-blue-500 text-white text-[9px] font-bold leading-none">in</span>
    ),
  },
];

const CODE_LINES: { indent: number; tokens: { t: string; c: string }[] }[] = [
  { indent: 0, tokens: [{ t: 'import ', c: 'text-pink-400' }, { t: 'numpy ', c: 'text-gray-200' }, { t: 'as ', c: 'text-pink-400' }, { t: 'np', c: 'text-gray-200' }] },
  { indent: 0, tokens: [{ t: 'def ', c: 'text-pink-400' }, { t: 'sigmoid', c: 'text-blue-300' }, { t: '(z):', c: 'text-gray-300' }] },
  { indent: 1, tokens: [{ t: 'return ', c: 'text-pink-400' }, { t: '1 ', c: 'text-orange-300' }, { t: '/ (', c: 'text-gray-300' }, { t: '1 ', c: 'text-orange-300' }, { t: '+ np.exp(-z))', c: 'text-gray-300' }] },
  { indent: 0, tokens: [{ t: 'def ', c: 'text-pink-400' }, { t: 'predict', c: 'text-blue-300' }, { t: '(X, w, b):', c: 'text-gray-300' }] },
  { indent: 1, tokens: [{ t: 'z ', c: 'text-gray-200' }, { t: '= np.dot(X, w) + b', c: 'text-gray-300' }] },
  { indent: 1, tokens: [{ t: 'return ', c: 'text-pink-400' }, { t: 'sigmoid(z)', c: 'text-gray-300' }] },
];

const COST_BARS = [100, 62, 40, 26, 18];

export default function CodingPlaygroundSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [showcaseIndex, setShowcaseIndex] = useState<number | null>(null);
  const [loopTrigger, setLoopTrigger] = useState(0);

  // Focus progress animation state
  const [focusProgress, setFocusProgress] = useState(67);

  // Tasks animation state
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // Code editor typing animation states
  const [animationStage, setAnimationStage] = useState<'idle' | 'typing' | 'running' | 'complete'>('idle');
  const [typedCodeLength, setTypedCodeLength] = useState(250);

  // LinkedIn chart animation state
  const [chartBars, setChartBars] = useState(COST_BARS);

  const triggerSequence = () => {
    setLoopTrigger(prev => prev + 1);
  };

  useEffect(() => {
    let active = true;

    const runLoop = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!active) return;

      while (active) {
        // Today's Focus
        setShowcaseIndex(0);
        await new Promise(r => setTimeout(r, 2500));
        if (!active) break;

        // Today's Tasks
        setShowcaseIndex(1);
        await new Promise(r => setTimeout(r, 2500));
        if (!active) break;

        // Proof of Work
        setShowcaseIndex(2);
        await new Promise(r => setTimeout(r, 2500));
        if (!active) break;

        // Coding Environment (longer for typing + compilation console)
        setShowcaseIndex(3);
        await new Promise(r => setTimeout(r, 6500));
        if (!active) break;

        // LinkedIn Post Preview
        setShowcaseIndex(4);
        await new Promise(r => setTimeout(r, 3200));
        if (!active) break;

        // Zoom out and show everything
        setShowcaseIndex(null);
        await new Promise(r => setTimeout(r, 4500));
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

  // Synchronized state machine for inner animations
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
      // Start with tasks active/todo
      setTasks(INITIAL_TASKS.map(t => t.title === 'Implement Logistic Regression' ? { ...t, status: 'active' as const } : t));
      const t = setTimeout(() => {
        setTasks(prev => prev.map(t => t.title === 'Implement Logistic Regression' ? { ...t, status: 'done' as const } : t));
      }, 1300);
      return () => clearTimeout(t);
    } else {
      setTasks(INITIAL_TASKS);
    }
  }, [showcaseIndex]);

  useEffect(() => {
    if (showcaseIndex === 3) {
      setAnimationStage('typing');
      setTypedCodeLength(0);

      // Speed typing over 2.5 seconds
      const interval = setInterval(() => {
        setTypedCodeLength(prev => {
          if (prev >= 250) {
            clearInterval(interval);
            return 250;
          }
          return prev + 6;
        });
      }, 50);

      // Compile run execution sequence
      const runTimeout = setTimeout(() => {
        setAnimationStage('running');
      }, 2900);

      const completeTimeout = setTimeout(() => {
        setAnimationStage('complete');
      }, 4900);

      return () => {
        clearInterval(interval);
        clearTimeout(runTimeout);
        clearTimeout(completeTimeout);
      };
    } else {
      setAnimationStage('idle');
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

  // Helper to slice lines for code typing effect
  const getTypedCodeLines = () => {
    let charCount = 0;
    return CODE_LINES.map(line => {
      const tokens = [];
      for (const tok of line.tokens) {
        if (charCount >= typedCodeLength) break;
        const available = typedCodeLength - charCount;
        if (tok.t.length <= available) {
          tokens.push(tok);
          charCount += tok.t.length;
        } else {
          tokens.push({ t: tok.t.substring(0, available), c: tok.c });
          charCount += available;
          break;
        }
      }
      return { indent: line.indent, tokens };
    });
  };

  const getCardProps = (index: number) => {
    const isFocused = showcaseIndex === index;
    const isDimmed = showcaseIndex !== null && showcaseIndex !== index;
    return {
      animate: {
        borderColor: isFocused ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isFocused
          ? '0 10px 30px rgba(59, 130, 246, 0.15)'
          : '0 0 0 rgba(0,0,0,0)',
        opacity: isDimmed ? 0.35 : 1,
      },
      transition: { duration: 0.5, ease: 'easeInOut' as const }
    };
  };

  const renderFocusCard = () => (
    <motion.div
      {...getCardProps(0)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xs">Today's Focus</span>
        <span className="flex items-center gap-1 text-[9px] text-gray-300 bg-white/5 px-1.5 py-0.5 rounded-md">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" /></svg>
          Jul 18, 2026
        </span>
      </div>
      <p className="text-gray-400 text-[11px] mb-3">One step. Maximum impact.</p>

      <div className="flex items-center gap-2.5 bg-white/5 rounded-xl p-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/15 text-blue-400 shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-semibold truncate">Implement Logistic Regression</p>
          <p className="text-gray-300 text-[10px] truncate">Train and evaluate model on given dataset</p>
        </div>
        <span className="text-[9px] font-semibold text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded-md shrink-0">2h 30m</span>
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
  );

  const renderTasksCard = () => {
    const completedCount = tasks.filter(t => t.status === 'done').length;
    return (
      <motion.div
        {...getCardProps(1)}
        className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-bold text-xs">Today's Tasks</span>
          <span className="text-emerald-400 text-[11px] font-semibold">{completedCount} / {tasks.length} Completed</span>
        </div>
        <ul className="space-y-0.5">
          {tasks.map((task) => (
            <li
              key={task.title}
              className={`flex items-center gap-2 rounded-lg px-1.5 py-1 transition-colors duration-300 ${task.status === 'active' ? 'bg-blue-500/10' : ''}`}
            >
              {task.status === 'done' && (
                <span className="flex items-center justify-center w-3.75 h-3.75 rounded-full bg-emerald-500 shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" /></svg>
                </span>
              )}
              {task.status === 'active' && (
                <span className="flex items-center justify-center w-3.75 h-3.75 rounded-full border border-blue-400 shrink-0 relative">
                  <span className="absolute inset-0.5 rounded-full bg-blue-400 animate-pulse" />
                </span>
              )}
              {task.status === 'todo' && (
                <span className="flex items-center justify-center w-3.75 h-3.75 rounded-full border border-white/20 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-[11px] truncate transition-all duration-300 ${task.status === 'active' ? 'text-white font-semibold' : 'text-gray-300'} ${task.status === 'done' ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
                {task.subtitle && <p className="text-gray-400 text-[9px] truncate">{task.subtitle}</p>}
              </div>
              <span className="text-gray-400 text-[9px] shrink-0">{task.time}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  const renderProofCard = () => (
    <motion.div
      {...getCardProps(2)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 h-full relative"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xs">Proof of Work (Recent)</span>
        <span className="text-blue-400 text-[11px] font-semibold cursor-pointer">View all</span>
      </div>
      <ul className="space-y-1.5">
        {PROOF_OF_WORK.map((p) => (
          <li key={p.title} className="flex items-start gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-white/5 text-gray-300 shrink-0">
              {React.cloneElement(p.icon as React.ReactElement<{ className?: string }>, { className: 'w-3.5 h-3.5' })}
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
  );

  const renderCodeCard = () => (
    <motion.div
      {...getCardProps(3)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col h-full relative"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xs">Coding Environment</span>
        <span className="flex items-center gap-1 text-[11px] text-gray-300 bg-white/5 px-2 py-0.5 rounded-md">
          Python
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </div>
      <div className="bg-[#05070D] rounded-xl p-3 flex-1">
        <pre className="text-[11.5px] leading-5 font-mono overflow-x-auto">
          {getTypedCodeLines().map((line, i) => (
            <div key={i} className="flex min-h-5">
              <span className="text-gray-600 select-none w-4 text-right pr-2 shrink-0">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 12}px` }}>
                {line.tokens.map((tok, j) => (
                  <span key={j} className={tok.c}>{tok.t}</span>
                ))}
                {/* Typing cursor */}
                {animationStage === 'typing' && i === getTypedCodeLines().length - 1 && (
                  <span className="inline-block w-1.2 h-3 bg-blue-500 ml-0.5 animate-pulse" />
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>

      <div className="bg-[#020306] border border-white/5 rounded-xl p-2 mt-2 font-mono text-[10px] text-gray-300 min-h-16 flex flex-col justify-center">
        {animationStage === 'typing' && (
          <div className="text-gray-500 italic animate-pulse flex items-center gap-2">
            <svg className="w-3 h-3 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" /></svg>
            Coding in progress...
          </div>
        )}
        {animationStage === 'running' && (
          <div className="flex flex-col gap-0.5 text-blue-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-ping" />
              <span>&gt; python train_regression.py</span>
            </div>
            <div className="text-gray-400 text-[9px] pl-2.5">Loading datasets, training model...</div>
          </div>
        )}
        {animationStage === 'complete' && (
          <div className="flex flex-col gap-0.5 text-emerald-400 leading-normal">
            <div>&gt; python train_regression.py</div>
            <div className="text-gray-400 text-[9px] pl-2.5">Epoch 1/5 - Loss: 0.6931 - Accuracy: 50.0%</div>
            <div className="text-gray-400 text-[9px] pl-2.5">Epoch 3/5 - Loss: 0.2104 - Accuracy: 94.2%</div>
            <div className="text-gray-400 text-[9px] pl-2.5">Epoch 5/5 - Loss: 0.0412 - Accuracy: 100.0%</div>
            <div className="text-white font-bold mt-0.5 pl-2.5 flex items-center gap-1">
              <span>✔</span>
              <span>Accuracy: 100.0% - Pushing commits...</span>
            </div>
          </div>
        )}
        {animationStage === 'idle' && (
          <div className="text-gray-500 italic">Console ready. Loop active to execute environment run.</div>
        )}
      </div>

      <div className="flex items-center justify-between mt-2.5">
        <span className="flex items-center gap-1 text-[11px] text-gray-300 bg-white/5 px-2 py-1 rounded-md">
          Python
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
        <div className="flex items-center gap-1.5">
          <button 
            className={`flex items-center gap-1 text-white text-[11px] font-semibold px-3 py-1 rounded-md transition-colors cursor-pointer ${
              animationStage === 'running' ? 'bg-amber-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            {animationStage === 'running' ? 'Running...' : 'Run Code'}
          </button>
          <button className="flex items-center justify-center w-7 h-7 rounded-md bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-pointer">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" /></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderLinkedinCard = () => (
    <motion.div
      {...getCardProps(4)}
      className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col h-full relative"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xs">LinkedIn Post Preview</span>
        <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>

      <div className="bg-white rounded-xl p-2.5 mb-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <img src="https://i.pravatar.cc/100?img=68" alt="Rahul" className="w-7 h-7 rounded-full object-cover" />
          <div>
            <p className="text-gray-900 text-[11px] font-semibold leading-tight">Rahul</p>
            <p className="text-gray-500 text-[9px] leading-tight">AI/ML Engineer • 1st</p>
          </div>
        </div>
        <p className="text-gray-900 text-[11px] font-semibold mb-1">Day 126 of My AI/ML Journey 🚀</p>
        <p className="text-gray-600 text-[10px] leading-3.5 mb-1.5">
          Just implemented Logistic Regression from scratch using NumPy—learning about gradient descent and cost functions has been a game changer for understanding how models learn. On to the next challenge! 💡
        </p>
        <p className="text-blue-600 text-[10px] mb-2">#MachineLearning #AI #Consistency</p>

        <p className="text-gray-400 text-[9px] mb-1 font-medium">Logistic Regression • Cost vs Iterations</p>
        <div className="flex items-end gap-2 h-8 mb-2">
          {chartBars.map((h, i) => (
            <span
              key={i}
              className="w-2.5 bg-blue-600 rounded-t-sm transition-all duration-700 ease-out"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-[9px] pt-1.5 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-6.7-4.3-9.3-8.1C1 10.1 1.6 6.6 4.6 5A5 5 0 0112 6.5 5 5 0 0119.4 5c3 1.6 3.6 5.1 1.9 7.9C18.7 16.7 12 21 12 21z" /></svg>
            42
          </span>
          <span>3 comments</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-auto">
        <button className="flex-1 flex items-center justify-center gap-1 border border-white/15 text-white text-[11px] font-semibold px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /><circle cx="12" cy="12" r="3" strokeWidth="2" /></svg>
          Preview
        </button>
        <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold px-2 py-1.5 rounded-md transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
          Publish
        </button>
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-[#F9F9F9]">
      <div className="max-w-350 mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans mb-4">
            Practice more, code better
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Your personal coding playground to write, run, test, and improve your skills with real-time feedback.
          </p>
        </div>

        <div className="rounded-3xl bg-[#0B0F1A] border border-white/10 shadow-2xl p-3.5 sm:p-5 relative overflow-hidden">
          {/* Inner Dashboard Canvas with Auto-Dragging Camera Zoom */}
          <motion.div
            animate={{
              scale: showcaseIndex !== null ? 1.1 : 1,
              x: showcaseIndex === 0 ? "5%"
               : showcaseIndex === 1 ? "0%"
               : showcaseIndex === 2 ? "-5%"
               : showcaseIndex === 3 ? "3%"
               : showcaseIndex === 4 ? "-3%"
               : "0%",
              y: showcaseIndex === 0 ? "4%"
               : showcaseIndex === 1 ? "4%"
               : showcaseIndex === 2 ? "4%"
               : showcaseIndex === 3 ? "-4%"
               : showcaseIndex === 4 ? "-4%"
               : "0%",
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 1.2
            }}
            className="w-full h-full origin-center"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4 relative z-20">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Consistency AI" className="h-7 w-7 object-contain" />
                  <span className="text-white font-bold text-sm hidden sm:inline">Consistency AI</span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-white font-bold text-lg leading-tight">Playground</p>
                    <button
                      onClick={triggerSequence}
                      className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full hover:bg-blue-500/20 transition-all font-semibold flex items-center gap-1 cursor-pointer select-none border border-blue-400/20"
                    >
                      <svg className="w-2.5 h-2.5 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                      Replay Tour
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs">Your daily workspace. Focus. Build. Grow.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
                </span>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/100?img=68" alt="Rahul" className="w-8 h-8 rounded-full object-cover" />
                  <div className="hidden sm:block">
                    <p className="text-white text-xs font-semibold leading-tight">Rahul</p>
                    <p className="text-gray-400 text-[10px] leading-tight">AI/ML Engineer</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Row 1: focus, tasks, proof of work */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
              {/* Today's Focus */}
              <div>
                {renderFocusCard()}
              </div>

              {/* Today's Tasks */}
              <div>
                {renderTasksCard()}
              </div>

              {/* Proof of Work */}
              <div>
                {renderProofCard()}
              </div>
            </div>

            {/* Row 2: coding environment, linkedin preview */}
            <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_0.8fr] gap-4 mt-4 relative z-10">
              {/* Coding Environment */}
              <div>
                {renderCodeCard()}
              </div>

              {/* LinkedIn Post Preview */}
              <div>
                {renderLinkedinCard()}
              </div>
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
