"use client";

import React from "react";
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
  return (
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
  );
}
