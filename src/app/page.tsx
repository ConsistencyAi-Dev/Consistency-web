import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MentorSection from "@/components/MentorSection";
import JourneySection from "@/components/JourneySection";
import ProgressStats from "@/components/ProgressStats";
import CommunityVoices from "@/components/CommunityVoices";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <CommunityVoices />

      <SolutionSection />
      <MentorSection />
      <JourneySection />

    </main>
  );
}
