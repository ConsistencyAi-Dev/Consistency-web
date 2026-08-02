"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import ml1 from "@/assets/aiml/ml1.png";
import ml2 from "@/assets/aiml/ml2.png";
import ml3 from "@/assets/aiml/ml3.png";
import ml4 from "@/assets/aiml/ml4.png";

const FEATURES = [
  {
    title: "Real-World Projects",
    desc: "Build industry-level projects that make your portfolio stand out.",
    bg: "bg-[#2563EB]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m16 10 6-4v12l-6-4" />
      </svg>
    ),
  },
  {
    title: "Live Mentorship",
    desc: "Learn from experienced mentors working at top tech companies.",
    bg: "bg-emerald-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v9" />
        <path d="M8 8a4 4 0 1 0 8 0" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    title: "Portfolio Building",
    desc: "Create a powerful portfolio that helps you get noticed by recruiters.",
    bg: "bg-red-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h6" />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    title: "AI Chatbot",
    tag: "NLP / Chatbot",
    image: ml1,
    iconBg: "bg-cyan-500",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-4.5 7.5L3 21l1.9-5.7A8.38 8.38 0 1 1 21 11.5z" />
      </svg>
    ),
  },
  {
    title: "Resume Analyzer",
    tag: "AI Resume Scoring",
    image: ml2,
    iconBg: "bg-slate-600",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    title: "Movie Recommender",
    tag: "ML Recommendation",
    image: ml3,
    iconBg: "bg-violet-600",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m7 4 2 4M13 4l2 4M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Image Classifier",
    tag: "Computer Vision",
    image: ml4,
    iconBg: "bg-gray-700",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

function ProjectThumbnail({ image, alt }: { image: StaticImageData; alt: string }) {
  return (
    <div className="relative w-full h-32 rounded-t-2xl overflow-hidden bg-gray-100">
      <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function LearnByDoingSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto rounded-[32px] bg-[#F3F4F6] px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-[#2563EB] text-xs font-bold tracking-[0.15em] uppercase mb-3 font-sans">
            Learn By Doing
          </div>
          <h2 className="text-gray-900 text-[1.75rem] sm:text-3xl font-bold font-sans">
            Learn By Building Real AI Projects
          </h2>
        </div>

        {/* Feature row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow-sm p-6">
              <div className={`flex items-center justify-center size-11 rounded-xl ${f.bg} mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-gray-900 text-base font-bold font-sans mb-1.5">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-5 font-sans">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Project showcase row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <ProjectThumbnail image={p.image} alt={p.title} />
              <div className="flex items-center gap-2.5 p-4">
                <span className={`shrink-0 flex items-center justify-center size-7 rounded-lg ${p.iconBg}`}>
                  {p.icon}
                </span>
                <div className="min-w-0">
                  <h4 className="text-gray-900 text-sm font-bold font-sans leading-tight">{p.title}</h4>
                  <p className="text-gray-400 text-xs font-sans truncate">{p.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
