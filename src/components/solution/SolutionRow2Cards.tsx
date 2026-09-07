"use client";

import React from "react";
import { FeatureCard, IllustrationArea, CardText, ProgressBar } from "./SolutionCommon";

export function SolutionRow2Cards({ visible }: { visible: boolean }) {
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      {/* Card 4 — Daily Check-ins */}
      <FeatureCard delay={400}>
        <IllustrationArea>
          <div
            className={`w-full max-w-72 p-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-3 relative z-10 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-900 text-[10px] font-bold font-sans">Daily streak</span>
              <span className="text-indigo-400 text-[10px] font-bold font-sans">🔥 18 days</span>
            </div>
            <div className="flex gap-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                const done = i < 5;
                const delay = i * 150;
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
          <div
            className={`w-full max-w-72 p-3 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-2 relative z-10 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
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
          <div
            className={`w-full max-w-72 p-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col gap-3 relative z-10 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-zinc-400 text-[9px] font-bold font-sans">Live cohort • 124 students</span>
              <span className="text-emerald-500 text-[9px] font-bold font-sans">● verified</span>
            </div>
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
  );
}
