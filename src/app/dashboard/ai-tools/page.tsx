"use client";

import React from "react";
import Image from "next/image";

// Import images from assets/tools folder
import resumeImg from "@/assets/tools/resume.png";
import mockImg from "@/assets/tools/mock.png";
import chatbotImg from "@/assets/tools/chatbot.png";

export default function AIToolsPage() {
  const tools = [
    {
      title: "Resume Builder",
      description: "Tailor your resume to job roles in seconds. Stand out from the crowd with custom templates.",
      bullets: [
        "Tailors your resume to job roles in seconds",
        "Smart suggestions based on your skills & projects",
        "Applicant Tracking System (ATS) Friendly",
      ],
      image: resumeImg,
    },
    {
      title: "Nxtmock",
      description: "Practice mock interview rounds tailored to specific companies, roles, and difficulty levels.",
      bullets: [
        "100+ mocks, personalized company & topic wise",
        "Practice coding rounds with adaptive difficulty",
        "Get real-time feedback, improve exponentially",
      ],
      image: mockImg,
    },
    // {
    //   title: "AI Tutor",
    //   description: "Your 24/7 personal study buddy. Ask coding questions, get clarifications, and request code explanations.",
    //   bullets: [
    //     "24/7 personalized help",
    //     "Get help working through problems, checking solutions, and understanding errors",
    //     "No need to waste time searching online",
    //   ],
    //   image: chatbotImg,
    // },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Title Header Section */}
      <div className="p-8 flex flex-col items-center justify-center gap-3  text-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
          AI Tools
        </h2>
        <p className="text-gray-500 text-sm">
          Learn with AI to upskill, grow and prepare
        </p>
        <button className="mt-1 border border-[#2B50EC] text-[#2B50EC] hover:bg-[#2B50EC] hover:text-white text-xs font-semibold py-2 px-6 rounded-lg transition-all">
          Try Now
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-2">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md"
          >
            <div>
              {/* Illustration Image Area matching mockup exactly */}
              <div className="w-full h-36 rounded-2xl bg-gray-50/30 flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-black text-gray-800 tracking-tight mb-2">
                {tool.title}
              </h3>
              
              {/* Bullet Features */}
              <ul className="space-y-3.5 text-xs font-bold text-gray-600 border-t border-gray-50 pt-5 mt-4">
                {tool.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl text-xs font-black transition-colors shadow-sm cursor-pointer">
              Launch {tool.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
