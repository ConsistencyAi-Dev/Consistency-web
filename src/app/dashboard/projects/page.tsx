"use client";

import React, { useState } from "react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projects = [
    {
      title: "Studynotion - An Edtech...",
      description: "It is an education platform similar to Udemy, Coursera etc. Built using custom server handlers, interactive media players and real-time dashboard analytics.",
      badges: ["HTML", "CSS", "JavaScript"],
      student: "Neelesh Kumawat",
      initial: "NK",
      color: "bg-teal-600",
      tag: "Internship at Siemens",
    },
    {
      title: "Spendsavvy",
      description: "Developed a Finance Management Application using NextJS, with voice assistant support to record daily spendings and generate charts dynamically.",
      badges: ["CSS", "JavaScript", "Node"],
      student: "Ankit Kommalapati",
      initial: "AK",
      color: "bg-indigo-600",
      tag: "Internship at Siemens",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Title Header Section */}
      <div className="bg-white rounded-3xl  p-8 flex flex-col justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
            Explore Student&apos;s Projects
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1">
            Mobile and web applications, innovative dashboards and more - all built by students like you
          </p>
        </div>
      </div>

      {/* Filter pills and two-column layout */}
      <div className="flex flex-col gap-5 mt-2">
        <div className="flex items-center gap-2">
          {["All Projects", "Trending", "Newest"].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${isActive
                    ? "bg-[#2B50EC] text-white shadow-md shadow-blue-500/10"
                    : "bg-white border border-gray-200 text-gray-500 hover:text-gray-800"
                  }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
          {/* Left Column: Project Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl  overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Decorative visual block */}
                  <div className="h-44 bg-slate-900 flex items-center justify-center p-6 text-white border-b border-gray-100 relative">
                    {/* Project tag overlay */}
                    <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-[8px] font-black uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1">
                      🏆 {project.tag}
                    </span>

                    <svg className="w-12 h-12 text-white/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex flex-col text-left">
                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.badges.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50/50 text-[#2B50EC] text-[8px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-sm font-black text-gray-800 tracking-tight leading-snug mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Author footer */}
                <div className="p-4 border-t border-gray-100/60 bg-gray-50/50 flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full ${project.color} text-white flex items-center justify-center font-black text-[10px] shrink-0 border border-white/20`}>
                    {project.initial}
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-gray-800 leading-tight">
                      {project.student}
                    </h5>
                    <span className="text-[8px] font-semibold text-gray-400 leading-tight block">
                      Student Builder
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Project stats */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Project Ecosystem Stat card */}
            <div className="bg-[#2B50EC] text-white rounded-2xl p-6 shadow-md shadow-blue-500/10 text-left">
              <h4 className="text-xs font-black text-blue-200 uppercase tracking-wider mb-4">Project Ecosystem</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-blue-200 uppercase block mb-1">Total Projects</span>
                  <span className="text-base font-black text-white">1,248</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-blue-200 uppercase block mb-1">Active Mentees</span>
                  <span className="text-base font-black text-white">892</span>
                </div>
              </div>
            </div>

            {/* Project of the Month card */}
            <div className="bg-white rounded-2xl  p-5 shadow-sm text-left">
              <div className="flex items-center gap-1.5 mb-3.5">
                <span className="text-orange-500 text-sm">🔥</span>
                <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Project of the Month</h4>
              </div>

              {/* Showcase visual box */}
              <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center p-4 text-white border border-gray-100/5 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <span className="absolute bottom-3 left-3 z-20 text-[10px] font-black text-white">
                  Global Supply Chain Tracker
                </span>

                <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20A7 7 0 014.05 11" />
                </svg>
              </div>

              <p className="text-[10px] font-semibold text-gray-400 leading-relaxed mb-4">
                An exceptional implementation of real-time logistics tracking utilizing WebSockets and interactive maps. Mentored by Senior Engineer at LogisticsCorp.
              </p>

              <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-[10px] font-black py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer">
                <span>View Case Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
