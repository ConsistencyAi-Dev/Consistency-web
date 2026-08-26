"use client";

import React from "react";
import {
  FeatureCard,
  IllustrationArea,
  CardText,
  ProgressBar,
  AVATAR_POSITIONS,
  AVATAR_IMAGES,
} from "./SolutionCommon";

export function SolutionRow1Cards({ visible }: { visible: boolean }) {
  return (
    <div className="flex flex-col lg:flex-row gap-7 mb-7">
      {/* Card 1 — AI Consistency Engine */}
      <FeatureCard delay={100}>
        <IllustrationArea>
          <div className="absolute size-44 left-8 top-4 bg-indigo-50 rounded-full blur-2xl" />
          <div
            className={`w-full max-w-72 p-4 bg-white/10 rounded-2xl ring-1 ring-white/75 backdrop-blur-[30px] flex flex-col gap-3 relative z-10 shadow-lg transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
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
            <div className="w-full max-w-64 p-3 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm flex flex-col gap-2 relative z-10">
              <span className="text-zinc-400 text-xs font-bold font-sans uppercase">
                Roadmap &nbsp;·&nbsp; 1 domain • 12 weeks
              </span>
              <div className="flex justify-between items-center">
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
          <div className="size-48 relative">
            <div className="absolute inset-[11px] rounded-full border border-dashed border-slate-200/80" />

            {AVATAR_POSITIONS.map(({ left, top, active }, i) => {
              const delay = i * 80;
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={AVATAR_IMAGES[i]}
                    alt={`Cohort member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
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
  );
}
