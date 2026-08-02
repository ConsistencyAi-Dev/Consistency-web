import React from "react";
import Navbar from "@/components/Navbar";
import AimlHero from "@/components/AimlHero";
import WhyConsistencySection from "@/components/WhyConsistencySection";
import RoadmapSection from "@/components/RoadmapSection";
import CareerSupportSection from "@/components/CareerSupportSection";
import LearnByDoingSection from "@/components/LearnByDoingSection";
import IndustryWorkshopsSection from "@/components/IndustryWorkshopsSection";
import Footer from "@/components/Footer";
import RealResultsSection from "@/components/RealResultsSection";

export default function AimlPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <AimlHero />
      <WhyConsistencySection />
      <RoadmapSection />
      <CareerSupportSection />
   
      
      <LearnByDoingSection />
      <IndustryWorkshopsSection />
         <RealResultsSection />
      <Footer />
    </main>
  );
}
