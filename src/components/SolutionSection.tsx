"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

/* ─── tiny hook: fires when element enters/leaves viewport, then keeps
   replaying the reveal animation in a loop for as long as it stays in
   view (instead of animating in once and sitting static) ──────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!inView) {
      setVisible(false);
      return;
    }
    setVisible(true);
    let resetTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      resetTimeout = setTimeout(() => setVisible(true), 400);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, [inView]);

  return { ref, visible };
}

/* ─── Mini progress bar ──────────────────────────────────────────── */
function ProgressBar({
  percent,
  color,
  visible,
  delay = 0,
}: {
  percent: number;
  color: string;
  visible: boolean;
  delay?: number;
}) {
  return (
    <div className="self-stretch h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ease-out ${color}`}
        style={{
          width: visible ? `${percent}%` : "0%",
          transitionDelay: visible ? `${delay}ms` : "0ms",
          transitionDuration: visible ? "700ms" : "200ms",
        }}
      />
    </div>
  );
}

/* ─── Avatar ring (cohort card) ──────────────────────────────────── */
const AVATAR_POSITIONS = [
  { left: 84, top: -1, active: false },
  { left: 116.52, top: 5.47, active: false },
  { left: 144.1, top: 23.9, active: false },
  { left: 162.53, top: 51.47, active: false },
  { left: 169, top: 84, active: false },
  { left: 162.53, top: 116.53, active: false },
  { left: 144.1, top: 144.1, active: false },
  { left: 116.52, top: 162.53, active: false },
  { left: 84, top: 169, active: false },
  { left: 51.47, top: 162.53, active: false },
  { left: 23.89, top: 144.1, active: false },
  { left: 5.47, top: 116.53, active: false },
  { left: -1, top: 84, active: true },
  { left: 5.47, top: 51.47, active: true },
  { left: 23.89, top: 23.9, active: true },
  { left: 51.47, top: 5.47, active: true },
];

const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
];

/* ─── Card wrapper ───────────────────────────────────────────────── */
function FeatureCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={`flex-1 min-w-0 bg-white rounded-3xl shadow-[0px_12px_24px_0px_rgba(107,114,128,0.05)] ring-[5px] ring-white flex flex-col overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Card illustration area ─────────────────────────────────────── */
function IllustrationArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-56 sm:h-64 lg:h-72 px-4 bg-gradient-to-b from-slate-50 to-white flex flex-col justify-center items-center relative overflow-hidden">
      {children}
    </div>
  );
}

/* ─── Card text area ─────────────────────────────────────────────── */
function CardText({
  badge,
  badgeColor,
  title,
  description,
  sub,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  sub: string;
}) {
  return (
    <div className="p-6 flex flex-col gap-3">
      <span
        className={`self-start px-2.5 py-1 rounded-full text-[10px] font-bold font-sans ${badgeColor}`}
      >
        {badge}
      </span>
      <h3 className="text-gray-900 text-lg font-bold font-sans">{title}</h3>
      <p className="text-gray-500 text-xs leading-5 font-sans">{description}</p>
      <p className="text-zinc-400 text-xs leading-4 font-sans">{sub}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function SolutionSection() {
  const { ref, visible } = useInView();

  return (
    <section
      id="solution"
      className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="mb-8 sm:mb-10 lg:mb-14">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-4 sm:mb-6">
            Solution
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] mb-4 font-sans">
            <BlurText 
              text="So we built the one thing" 
              delay={100} 
              animateBy="words" 
              direction="top" 
              className="inline-block mr-[0.25em]"
            />
            <br className="hidden sm:block" />
            <BlurText 
              text="that makes you finish." 
              delay={400} 
              animateBy="words" 
              direction="top" 
              className="inline-block text-[#2563EB]"
            />
          </h2>
          <BlurText 
            text="“One mentor. One domain. One skill — until it's done. That's Consistency AI." 
            delay={700} 
            animateBy="words" 
            direction="top" 
            className="text-slate-500 text-base font-normal font-sans leading-6 max-w-xl block"
          />
        </div>

        {/* ── Row 1 ── */}
        <div className="flex flex-col lg:flex-row gap-7 mb-7">

          {/* Card 1 — AI Consistency Engine */}
          <FeatureCard delay={100}>
            <IllustrationArea>
              <div className="absolute size-44 left-8 top-4 bg-indigo-50 rounded-full blur-2xl" />
              {/* Mini check-in widget */}
              <div className={`w-full max-w-72 p-4 bg-white/10 rounded-2xl ring-1 ring-white/75 backdrop-blur-[30px] flex flex-col gap-3 relative z-10 shadow-lg transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 text-xs font-bold font-sans">Today&apos;s check-in</span>
                  <span className="text-emerald-500 text-[9px] font-bold font-sans">● Low risk</span>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex-1 p-2 bg-white rounded-lg ring-1 ring-gray-100 flex flex-col gap-0.5">
                    <span className="text-zinc-400 text-[8px] font-bold font-sans uppercase">Streak</span>
                    <span className="text-gray-900 text-[10px] font-bold font-sans">14 days</span>
                  </div>
                  <div className="flex-1 p-2 bg-white rounded-lg ring-1 ring-gray-100 flex flex-col gap-0.5">
                    <span className="text-zinc-400 text-[8px] font-bold font-sans uppercase">Dropout Risk</span>
                    <span className="text-gray-900 text-[10px] font-bold font-sans">Low • Stable</span>
                  </div>
                </div>
                <ProgressBar percent={62} color="bg-indigo-400" visible={visible} delay={200} />
              </div>
            </IllustrationArea>
            <CardText
              badge="Prevents silent quitting"
              badgeColor="bg-indigo-50 text-indigo-500"
              title="AI Consistency Engine"
              description="Daily check-ins, habit tracking, and AI-powered nudges catch students before they drift."
              sub="The system notices when momentum drops — before the student disappears."
            />
          </FeatureCard>

          {/* Card 2 — One Domain. One Path. */}
          <FeatureCard delay={200}>
            <IllustrationArea>
              <div className="w-full flex flex-col items-center">
                {/* Skill tags — pop in one by one, left to right, instead of
                    all appearing together */}
                <div className="w-full flex flex-wrap justify-center gap-1.5 mb-6 relative z-10">
                  {["React", "Python", "ML", "DSA", "UI/UX"].map((skill, i) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1.5 bg-white rounded-xl ring-1 ring-violet-100 shadow-sm text-gray-500 text-[13px] font-medium font-sans whitespace-nowrap transition-all ease-out ${
                        visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visible ? `${i * 150}ms` : "0ms",
                        transitionDuration: "300ms",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Roadmap bar */}
                <div className="w-full max-w-64 p-3 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm flex flex-col gap-2 relative z-10">
                  <span className="text-zinc-400 text-xs font-bold font-sans uppercase">
                    Roadmap &nbsp;·&nbsp; 1 domain • 12 weeks
                  </span>
                  <div className="flex justify-between items-center">
                    {/* Chained reveal: each dot pops in only once the line
                        connecting it to the previous dot has finished
                        drawing, so it reads as one clean left-to-right
                        sequence instead of dots and lines racing each other.
                        Step = 450ms: dot_i at i*450, its outgoing line starts
                        100ms later and finishes exactly at (i+1)*450, right
                        when the next dot appears. */}
                    {[true, true, true, false].map((done, i) => (
                      <div key={i} className="flex items-center gap-0">
                        <div
                          className={`size-2.5 rounded-full shrink-0 transition-all ease-out ${
                            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                          } ${done ? "bg-indigo-400" : "bg-slate-200 border border-slate-300"}`}
                          style={{
                            transitionDelay: visible ? `${i * 450}ms` : "0ms",
                            transitionDuration: "300ms",
                          }}
                        />
                        {i < 3 && (
                          <div className="w-12 h-0.5 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-indigo-400 rounded-full transition-all ease-out"
                              style={{
                                width: visible ? "100%" : "0%",
                                transitionDelay: visible ? `${i * 450 + 100}ms` : "0ms",
                                transitionDuration: "350ms",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </IllustrationArea>
            <CardText
              badge="Stops domain hopping"
              badgeColor="bg-sky-50 text-sky-600"
              title="One Domain. One Path."
              description="No more jumping between React, Python, ML, DSA, and UI/UX in the same month."
              sub="Students follow one clear path in the right order."
            />
          </FeatureCard>

          {/* Card 3 — Learn With A Cohort */}
          <FeatureCard delay={300}>
            <IllustrationArea>
              <div className="absolute size-48 left-0 top-0 bg-blue-50 rounded-full blur-xl" />
              {/* Avatar ring */}
              <div className="size-48 relative">
                {/* Dashed connector path */}
                <div className="absolute inset-[11px] rounded-full border border-dashed border-slate-200/80" />

                {AVATAR_POSITIONS.map(({ left, top, active }, i) => {
                  const delay = i * 80; // 80ms sequential delay per avatar
                  return (
                    <div
                      key={i}
                      className={`size-6 absolute rounded-full ring-1 flex justify-center items-center overflow-hidden z-10 transition-all duration-300 ease-out
                        ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                        ${active ? "ring-indigo-600 ring-offset-1 ring-offset-white shadow-sm" : "ring-gray-200"}`}
                      style={{
                        left,
                        top,
                        transitionDelay: visible ? `${delay}ms` : "0ms",
                      }}
                    >
                      <img
                        src={AVATAR_IMAGES[i]}
                        alt={`Cohort member ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
                {/* Centre bubble */}
                <div
                  className={`size-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-slate-100 shadow-[0px_8px_20px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center gap-0.5 z-20 transition-all duration-300 ease-out ${
                    visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{ transitionDelay: visible ? "600ms" : "0ms" }}
                >
                  <span className="text-slate-400 text-[9px] font-semibold font-sans uppercase tracking-[0.12em]">GOAL</span>
                  <span className="text-[#0F172A] text-sm font-bold font-sans">Ship MVP</span>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 bg-emerald-50 rounded-full ring-1 ring-emerald-100/50 flex items-center gap-1">
                      <span className="size-1 bg-emerald-500 rounded-full inline-block animate-pulse" />
                      <span className="text-emerald-600 text-[8px] font-bold font-sans">Live</span>
                    </span>
                  </div>
                </div>
              </div>
            </IllustrationArea>
            <CardText
              badge="Peer accountability"
              badgeColor="bg-pink-50 text-pink-600"
              title="Learn With A Cohort"
              description="Students are grouped by domain, so peers become teammates with shared deadlines and progress."
              sub="You don't learn alone. You don't quit alone."
            />
          </FeatureCard>
        </div>

        {/* ── Row 2 ── */}
        <div className="flex flex-col lg:flex-row gap-7">

          {/* Card 4 — Daily Check-ins */}
          <FeatureCard delay={400}>
            <IllustrationArea>
              <div className={`w-full max-w-72 p-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-3 relative z-10 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 text-[10px] font-bold font-sans">Daily streak</span>
                  <span className="text-indigo-400 text-[10px] font-bold font-sans">🔥 18 days</span>
                </div>
                {/* Day dots */}
                <div className="flex gap-1">
                  {["M","T","W","T","F","S","S"].map((day, i) => {
                    const done = i < 5;
                    const delay = i * 150; // 150ms sequential delay per day
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-zinc-400 text-[8px] font-medium font-sans">{day}</span>
                        <div
                          className={`size-6 rounded-md ring-1 flex justify-center items-center transition-all duration-300 ease-out
                            ${done && visible ? "bg-emerald-50 ring-emerald-200" : "bg-gray-100 ring-gray-200"}`}
                          style={{
                            transitionDelay: done && visible ? `${delay}ms` : "0ms",
                          }}
                        >
                          <span
                            className={`text-emerald-500 text-[10px] font-bold transition-all duration-200 ease-out
                              ${done && visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                            style={{
                              transitionDelay: done && visible ? `${delay + 100}ms` : "0ms",
                            }}
                          >
                            ✓
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Log items — appear one by one after the day dots finish */}
                <div className="flex flex-col gap-1">
                  {["✓ What I learned", "✓ What's next"].map((t, i) => (
                    <div
                      key={t}
                      className={`px-2.5 py-1.5 bg-gray-50 rounded-md ring-1 ring-gray-100 transition-all ease-out ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visible ? `${1050 + i * 150}ms` : "0ms",
                        transitionDuration: "300ms",
                      }}
                    >
                      <span className="text-gray-500 text-[9px] font-sans">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </IllustrationArea>
            <CardText
              badge="Builds consistency"
              badgeColor="bg-indigo-50 text-indigo-500"
              title="Daily Check-ins"
              description="Every day, students report what they learned, what's next, and where they're stuck."
              sub="Small daily actions create visible progress."
            />
          </FeatureCard>

          {/* Card 5 — Corporate Habits */}
          <FeatureCard delay={500}>
            <IllustrationArea>
              <div className={`w-full max-w-72 p-3 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-2 relative z-10 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                <span className="text-gray-500 text-[9px] font-bold font-sans">▣ Daily Standup • 09:30 AM IST</span>
                <div className="flex gap-1.5">
                  {[
                    { label: "DONE", color: "text-emerald-500", bg: "bg-stone-50 ring-gray-200", items: ["API auth", "PR #42 merged"] },
                    { label: "NEXT", color: "text-indigo-400", bg: "bg-slate-50 ring-slate-200", items: ["Ship dashboard", "Write tests"] },
                    { label: "BLOCKERS", color: "text-red-500", bg: "bg-stone-50 ring-red-100", items: ["Rate limit", "Env vars"] },
                  ].map(({ label, color, bg, items }, i) => (
                    <div
                      key={label}
                      className={`flex-1 p-2 ${bg} rounded-lg ring-1 flex flex-col gap-1.5 transition-all ease-out ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      }`}
                      style={{
                        transitionDelay: visible ? `${i * 200}ms` : "0ms",
                        transitionDuration: "350ms",
                      }}
                    >
                      <span className={`${color} text-[8px] font-bold font-sans`}>{label}</span>
                      <span className="text-gray-500 text-[8px] font-sans leading-3">
                        {items.map((it) => `• ${it}`).join("\n")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </IllustrationArea>
            <CardText
              badge="Job-ready mindset"
              badgeColor="bg-emerald-50 text-emerald-700"
              title="Corporate Habits Before The Job"
              description="Standups, deadlines, peer reviews, progress reporting, and ownership — built during college."
              sub="Students practice professional discipline before entering the workplace."
            />
          </FeatureCard>

          {/* Card 6 — Real Cohort Progress */}
          <FeatureCard delay={600}>
            <IllustrationArea>
              <div className={`w-full max-w-72 p-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-3 relative z-10 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-[9px] font-bold font-sans">Live cohort • 124 students</span>
                  <span className="text-emerald-500 text-[9px] font-bold font-sans">● verified</span>
                </div>
                {/* Stat rows */}
                {[
                  { label: "Cohort completion", pct: 78, color: "bg-indigo-400", delay: 300 },
                  { label: "Daily check-in compliance", pct: 91, color: "bg-emerald-400", delay: 450 },
                  { label: "Mindset shift", pct: 96, color: "bg-blue-500", delay: 600 },
                ].map(({ label, pct, color, delay }) => (
                  <div
                    key={label}
                    className={`flex flex-col gap-1 transition-all ease-out ${
                      visible ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                    }`}
                    style={{ transitionDelay: visible ? `${delay}ms` : "0ms", transitionDuration: "350ms" }}
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-[9px] font-medium font-sans">{label}</span>
                      <span className="text-gray-900 text-[9px] font-bold font-sans">{pct}%</span>
                    </div>
                    <ProgressBar percent={pct} color={color} visible={visible} delay={delay} />
                  </div>
                ))}
              </div>
            </IllustrationArea>
            <CardText
              badge="Proof beats promises"
              badgeColor="bg-amber-100 text-amber-600"
              title="Real Cohort Progress"
              description="Show actual completion rate, check-in compliance, and mindset shift from live cohorts."
              sub="Proof beats promises."
            />
          </FeatureCard>
        </div>

      </div>
    </section>
  );
}
