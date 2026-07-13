import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pt-[130px] pb-0 px-4 flex flex-col items-center text-center relative overflow-hidden bg-[#fafafa]">
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-white pointer-events-none" />

      {/* Title */}
      <h1 className="relative z-10 text-[2rem] md:text-[3rem] font-black tracking-[-0.03em] mb-5 max-w-7xl uppercase font-poppins leading-[1.05] text-[#111827]">
        Build for students <br />
        Designed for <span className="text-[#2563EB]">Consistency</span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-[#6b7280] text-[17px] md:text-[19px] max-w-[720px] mb-8 leading-[1.6] font-medium mx-auto">
        Consistency AI is built to help students stay consistent, practice daily,
        and become truly career-ready in the AI era.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-10">
        <button className="bg-[#3B82F6] text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-sm text-[15px]">
          Explore Cohorts
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="bg-[#0f1115] text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-sm text-[15px]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          Join Community
        </button>
      </div>

      {/* Trust Badge */}
      <div className="relative z-10 flex items-center gap-3 mb-14">
        <div className="flex -space-x-2.5">
          <img src="https://i.pravatar.cc/100?img=11" alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
          <img src="https://i.pravatar.cc/100?img=12" alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
          <img src="https://i.pravatar.cc/100?img=13" alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
        </div>
        <div className="flex flex-col items-start text-[11px] leading-tight">
          <span className="text-black font-bold mb-0.5">Trusted by 25,000+ students</span>
          <span className="text-gray-400 font-medium">
            4.9/5 from 1,200+ reviews
            <span className="text-yellow-400 ml-1 tracking-widest text-[10px]">★★★★★</span>
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative z-10 w-full max-w-7xl  -mt-60 ">
        {/* We use an image representing a crowd of students walking */}
        <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-white to-transparent z-10" />
        <img
          src="/students_crowd.png"
          alt="Diverse crowd of students walking"
          className="w-full h-auto object-cover rounded-t-[40px] opacity-95"
          style={{ minHeight: "400px" }}
        />
      </div>
    </section>
  );
}
