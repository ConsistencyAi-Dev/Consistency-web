import React from "react";
import Navbar from "@/components/Navbar";
import FullStackDeveloperHero from "@/components/FullStackDeveloperHero";
import WhyConsistencySection from "@/components/WhyConsistencySection";
import RoadmapSection from "@/components/RoadmapSection";
import CareerSupportSection from "@/components/CareerSupportSection";
import LearnByDoingSection from "@/components/LearnByDoingSection";
import Footer from "@/components/Footer";
import RealResultsSection from "@/components/RealResultsSection";

export default function FullStackDeveloperPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <FullStackDeveloperHero />
      <WhyConsistencySection />
      <RoadmapSection />
      <CareerSupportSection />
      <LearnByDoingSection />
      <RealResultsSection />
      <Footer />
    </main>
  );
}
