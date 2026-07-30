'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ──────────────────────────────────────────────
   IntersectionObserver hook
────────────────────────────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ──────────────────────────────────────────────
   Card 1  –  AI Consistency Engine
   Mock: Today's check-in UI + animated progress bar
────────────────────────────────────────────── */
function CheckinMock({ inView }: { inView: boolean }) {
  const [barW, setBarW] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setBarW(62), 400);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div className="relative w-full rounded-2xl bg-white border border-gray-100 shadow-sm p-4 overflow-hidden">
      {/* subtle gradient blob */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #818CF8 0%, transparent 70%)' }}
      />

      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-semibold text-gray-700">Today's check-in</span>
        <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
          Low risk
        </span>
      </div>

      {/* Stats row */}
      <div className="flex gap-6 mb-4">
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Streak</p>
          <p className="text-[18px] font-bold text-gray-800 leading-none">14 days</p>
        </div>
        <div className="w-px bg-gray-100" />
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Dropout Risk</p>
          <p className="text-[18px] font-bold text-gray-800 leading-none">Low · Stable</p>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${barW}%`,
            background: 'linear-gradient(90deg, #818CF8, #6366F1)',
            transition: 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: '0 0 8px #6366F155',
          }}
        />
        {/* shimmer overlay */}
        <div
          className="absolute inset-y-0 rounded-full"
          style={{
            width: `${barW}%`,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 50%, transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmerBar 2s linear infinite',
            transition: 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Card 2  –  One Domain. One Path.
   Mock: skill pills + animated roadmap dots
────────────────────────────────────────────── */
const skills = ['React', 'Python', 'ML', 'DSA', 'UI/UX'];
const roadmapDots = [true, true, true, false, false]; // filled vs empty

function DomainMock({ inView }: { inView: boolean }) {
  const [filledCount, setFilledCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // stagger-fill the roadmap dots
    roadmapDots.forEach((filled, i) => {
      if (filled) {
        const t = setTimeout(() => setFilledCount((p) => p + 1), 300 + i * 350);
        return () => clearTimeout(t);
      }
    });
  }, [inView]);

  return (
    <div className="w-full rounded-2xl bg-white border border-gray-100 shadow-sm p-5 space-y-4">
      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <span
            key={s}
            className="text-[12px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(8px)',
              transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-100" />

      {/* Roadmap */}
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Roadmap</p>
        <div className="flex items-center gap-0">
          {roadmapDots.map((_, i) => {
            const active = i < filledCount;
            const isLast = i === roadmapDots.length - 1;
            return (
              <React.Fragment key={i}>
                <div
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-500 shrink-0"
                  style={{
                    borderColor: active ? '#6366F1' : '#E5E7EB',
                    background: active ? '#6366F1' : 'white',
                    transform: active ? 'scale(1.15)' : 'scale(1)',
                    boxShadow: active ? '0 0 8px #6366F144' : 'none',
                  }}
                >
                  {active && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {!isLast && (
                  <div className="flex-1 h-px mx-1" style={{ background: i < filledCount - 1 ? '#6366F1' : '#E5E7EB', transition: 'background 0.5s ease' }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-gray-400">1 domain · 12 weeks</span>
          <span className="text-[10px] text-indigo-500 font-medium">{Math.round((filledCount / roadmapDots.length) * 100)}% done</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Card 3  –  Learn With A Cohort
   Mock: circular avatar ring with "GOAL" center
────────────────────────────────────────────── */
const avatars = [
  { initials: 'AK', bg: '#DBEAFE', fg: '#2563EB' },
  { initials: 'SL', bg: '#FEE2E2', fg: '#DC2626' },
  { initials: 'MR', bg: '#D1FAE5', fg: '#059669' },
  { initials: 'JP', bg: '#EDE9FE', fg: '#7C3AED' },
  { initials: 'TN', bg: '#FEF3C7', fg: '#D97706' },
  { initials: 'CH', bg: '#FCE7F3', fg: '#DB2777' },
  { initials: 'BW', bg: '#E0F2FE', fg: '#0284C7' },
  { initials: 'RL', bg: '#F3F4F6', fg: '#374151' },
  { initials: 'NP', bg: '#ECFDF5', fg: '#10B981' },
  { initials: 'DK', bg: '#FFF7ED', fg: '#EA580C' },
  { initials: 'VG', bg: '#F0FDF4', fg: '#16A34A' },
  { initials: 'OM', bg: '#F5F3FF', fg: '#8B5CF6' },
];

function CohortMock({ inView }: { inView: boolean }) {
  const ringR = 88; // px radius
  const cx = 132;   // center x of the 264px-wide container
  const cy = 132;   // center y

  return (
    <div
      className="relative mx-auto rounded-2xl overflow-hidden"
      style={{
        width: 264,
        height: 264,
        background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F0F9FF 100%)',
      }}
    >
      {/* Avatar ring */}
      {avatars.map((av, i) => {
        const angle = (i / avatars.length) * 2 * Math.PI - Math.PI / 2;
        const x = cx + ringR * Math.cos(angle);
        const y = cy + ringR * Math.sin(angle);
        return (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white shadow-sm"
            style={{
              left: x - 16,
              top: y - 16,
              background: av.bg,
              color: av.fg,
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.4)',
              transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms`,
            }}
          >
            {av.initials}
          </div>
        );
      })}

      {/* Center card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg px-4 py-3 text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translate(-50%,-50%) scale(1)' : 'translate(-50%,-50%) scale(0.6)',
          transition: 'opacity 0.6s ease 400ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 400ms',
          minWidth: 90,
        }}
      >
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Goal</p>
        <p className="text-[14px] font-extrabold text-gray-800 leading-tight">Ship MVP</p>
        <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold text-emerald-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Section
────────────────────────────────────────────── */
export default function ProgressStats() {
  const { ref, inView } = useInView(0.1);

  const cards = [
    {
      badge: 'Prevents silent quitting',
      badgeColor: 'text-indigo-600 bg-indigo-50',
      title: 'AI Consistency Engine',
      desc: 'Daily check-ins, habit tracking, and AI-powered nudges catch students before they drift. The system notices when momentum drops — before the student disappears.',
      visual: <CheckinMock inView={inView} />,
    },
    {
      badge: 'Stops domain hopping',
      badgeColor: 'text-amber-600 bg-amber-50',
      title: 'One Domain. One Path.',
      desc: 'No more jumping between React, Python, ML, DSA, and UI/UX in the same month. Students follow one clear path in the right order.',
      visual: <DomainMock inView={inView} />,
    },
    {
      badge: 'Peer accountability',
      badgeColor: 'text-pink-600 bg-pink-50',
      title: 'Learn With A Cohort',
      desc: "Students are grouped by domain, so peers become teammates with shared deadlines and progress. You don't learn alone. You don't quit alone.",
      visual: <CohortMock inView={inView} />,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F9F9F9]" id="solution">
      <style>{`
        @keyframes shimmerBar {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-6">
            Solution
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] mb-4">
            So we built the one thing <br className="hidden md:block" />
            that makes you <span className="text-[#2563EB]">finish.</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg max-w-2xl">
            "One mentor. One domain. One skill — until it's done. That's Consistency AI."
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-[2rem] bg-white border border-gray-100 shadow-sm p-7 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`,
              }}
            >
              {/* Visual mock — top */}
              <div className="flex items-center justify-center">
                {card.visual}
              </div>

              {/* Bottom content */}
              <div className="flex flex-col gap-3 mt-auto">
                <span
                  className={`self-start text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
                <h3 className="text-[1.35rem] font-extrabold text-[#111827] leading-snug">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
