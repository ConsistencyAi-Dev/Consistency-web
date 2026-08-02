"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import GapSection from "@/components/GapSection";
import SolutionSection from "@/components/SolutionSection";
import MentorSection from "@/components/MentorSection";
import JourneySection from "@/components/JourneySection";
import CommunityVoices from "@/components/CommunityVoices";
import DailyRoutineSection from "@/components/DailyRoutineSection";
import TracksCarouselSection from "@/components/TracksCarouselSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import RealResultsSection from "@/components/RealResultsSection";
import CodingPlaygroundSection from "@/components/CodingPlaygroundSection";

export default function Home() {
  const [launched, setLaunched] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!launched && (
          <motion.div
            key="launch-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center px-6 overflow-hidden"
          >
            {/* Ambient background light */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/40 via-transparent to-transparent pointer-events-none" />

            <div className="relative flex flex-col items-center max-w-lg w-full text-center">
              {/* Logo block */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2.5 mb-10"
              >
                <img src="/logo.png" alt="Logo" className="h-11 w-auto object-contain" />
                <img src="/text.png" alt="Consistency.AI" className="h-10 w-auto object-contain ml-1" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-900 text-5xl sm:text-6xl font-black font-sans mb-3 tracking-tight"
              >
                Consistency.ai
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-blue-600 text-sm sm:text-base font-bold uppercase tracking-widest mb-6"
              >
                It's your daily routine. The system runs you forward.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-slate-500 text-sm sm:text-base leading-relaxed mb-12 font-medium max-w-md"
              >
                We build unbreakable software engineering habits, direct admissions support, and premium coding portfolios to launch your tech career.
              </motion.p>

              {/* Launch Button */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                onClick={() => setLaunched(true)}
                className="group relative bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] text-white px-12 py-4.5 rounded-full font-bold text-base hover:shadow-[0_10px_35px_rgba(0,102,255,0.35)] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 cursor-pointer select-none"
              >
                Launch Website
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <Hero />
        <ProblemSection />
        <CommunityVoices />

        <GapSection />
        <SolutionSection />
        <MentorSection />
        <DailyRoutineSection />
        <TracksCarouselSection />
        <JourneySection />
        <RealResultsSection />
        <CodingPlaygroundSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </>
  );
}
