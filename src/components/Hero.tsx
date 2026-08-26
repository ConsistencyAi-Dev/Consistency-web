import Image from "next/image";
import React from "react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="pt-[100px] sm:pt-[120px] md:pt-[130px] pb-0 flex flex-col items-center text-center relative overflow-hidden bg-[#F9F9F9]">

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center px-4 w-full">
        {/* Title */}
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-normal tracking-[-1px] mb-4 sm:mb-5 max-w-7xl uppercase font-staatliches leading-[1.1] md:leading-[69px] text-[#111827]">
          <BlurText 
            text="Build for students" 
            delay={0} 
            animateBy="words" 
            direction="top" 
            className="inline-block" 
          />
          <br />
          <BlurText 
            text="Designed for" 
            delay={300} 
            animateBy="words" 
            direction="top" 
            className="inline-block mr-[0.25em]" 
          />
          <BlurText 
            text="Consistency" 
            delay={600} 
            animateBy="words" 
            direction="top" 
            className="inline-block text-[#2563EB]" 
          />
        </h1>

        {/* Subtitle */}
        <p className="text-[#6b7280] text-[15px] sm:text-[17px] md:text-[19px] max-w-[720px] mb-6 sm:mb-8 leading-[1.6] font-medium mx-auto px-2">
          Consistency AI is built to help students stay consistent, practice daily,
          and become truly career-ready in the AI era.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center w-full sm:w-auto px-4">
          <button className="bg-[#3B82F6] bg-linear-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-[0.5px] transition-all shadow-sm text-[15px] sm:text-[16px] w-full sm:w-auto">
            Explore Cohorts
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="4"/>
              <path d="M8 12h8"/>
              <path d="m12 8 4 4-4 4"/>
            </svg>
          </button>
          <button className="border border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB]/5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-sm hover:-translate-y-[0.5px] text-[15px] sm:text-[16px] w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Join Community
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <div className="flex -space-x-2.5">
            <img src="https://i.pravatar.cc/100?img=11" alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-sm" />
            <img src="https://i.pravatar.cc/100?img=12" alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-sm" />
            <img src="https://i.pravatar.cc/100?img=18" alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-sm" />
          </div>
          <div className="flex flex-col items-center sm:items-start text-[12px] sm:text-[13px] leading-tight">
            <span className="text-black font-bold mb-0.5">Trusted by 25,000+ students</span>
            <span className="text-gray-400 font-medium">
              4.9/5 from 1,200+ reviews
              <span className="text-yellow-400 ml-1 tracking-widest text-[10px]">★★★★★</span>
            </span>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="relative z-10 w-full -mt-20 sm:-mt-40 md:-mt-60">
        {/* Video Background Fade */}
        <div className="absolute bottom-0 w-full h-24 sm:h-32 bg-linear-to-t from-[#F9F9F9] to-transparent z-10" />
        <video
          src="/assets/video/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover opacity-95 min-h-[260px] sm:min-h-[350px] md:min-h-[400px]"
        />
      </div>
    </section>
  );
}
