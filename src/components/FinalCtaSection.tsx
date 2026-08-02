"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-20 bg-[#F9F9F9]">
      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2FC4] via-[#2547E0] to-[#3B5BFF]" />

        {/* Flowing water distortion — turbulence continuously warping a moving gradient */}
        <svg className="absolute inset-0 w-full h-full opacity-70 mix-blend-soft-light" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9AB4FF" />
              <stop offset="50%" stopColor="#3B5BFF" />
              <stop offset="100%" stopColor="#B9C9FF" />
            </linearGradient>
            <filter id="water-flow" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.028" numOctaves="3" seed="7" result="noise" stitchTiles="stitch">
                <animate attributeName="baseFrequency" dur="16s" values="0.012 0.028;0.02 0.045;0.008 0.02;0.012 0.028" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-gradient)" filter="url(#water-flow)" />
        </svg>

        {/* Drifting caustic light blobs */}
        <motion.div
          className="absolute -top-16 -left-10 size-72 bg-white/25 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 40, -10, 0], y: [0, 20, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-10 size-80 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -30, 20, 0], y: [0, -25, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sweeping glass sheen */}
        <motion.div
          className="absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
          animate={{ x: ["0%", "260%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        />

        <div className="relative z-10 px-6 sm:px-12 py-14 sm:py-20 text-center">
          <h2 className="text-white text-[1.75rem] sm:text-[2.5rem] font-bold leading-[1.15] tracking-tight font-sans mb-4">
            Pick one skill. Actually finish it this time.
          </h2>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9 font-sans">
            Start in your 2nd or 3rd year with a mentor who won&apos;t let you quit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2547E0] px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-[0.5px] transition-all text-[16px]">
              Explore Cohorts
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="4" />
                <path d="M8 12h8" />
                <path d="m12 8 4 4-4 4" />
              </svg>
            </button>
            <button className="border border-white/40 text-white bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all text-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
