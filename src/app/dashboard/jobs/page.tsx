"use client";

import React, { useState } from "react";

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState("All Roles");

  const recommendedJobs = [
    {
      title: "Data Analyst",
      company: "Quantify Analytics",
      location: "Remote",
      tags: ["Full-time", "Entry Level", "$70k - $90k"],
      posted: "Posted 2d ago",
      initial: "QA",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      title: "UX/UI Designer Intern",
      company: "CreativeForge",
      location: "New York, NY (On-site)",
      tags: ["Internship", "High Match"],
      posted: "Posted 5h ago",
      initial: "CF",
      color: "bg-orange-50 text-orange-600 border-orange-100",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Title Header Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
          Find your dream role
        </h2>
        <p className="text-gray-500 text-sm font-semibold mt-1">
          Explore tailored career opportunities matching your skillset
        </p>
      </div>

      {/* Toolbar filter area */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
        {/* Search Input Box */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Search jobs, skills, or companies..."
            className="w-full bg-white rounded-xl py-3 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-sm"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto shrink-0 pb-1 md:pb-0">
          {["All Roles", "Remote", "Full-time", "Internship"].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#2B50EC] text-white shadow-md shadow-blue-500/10"
                    : "bg-white text-gray-500 hover:text-gray-800"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Jobs Layout grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
        {/* Left Column content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Card 1: Featured Opportunity Hero Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex-1 text-left">
              <span className="text-[#2B50EC] text-[9px] font-black uppercase tracking-wider mb-2.5 inline-block">
                ★ Featured Opportunity
              </span>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug">
                Software Engineering Intern
              </h3>
              <p className="text-xs font-bold text-gray-500 mt-1">
                TechNova Systems • San Francisco, CA (Hybrid)
              </p>
              
              <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 mt-4">
                <span className="bg-gray-50 py-1 px-3 rounded-full text-[10px]">Summer 2024</span>
                <span>•</span>
                <span className="text-gray-700 font-bold">$45-55/hr</span>
              </div>

              <button className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white text-xs font-black py-3 px-6 rounded-xl shadow-md transition-all mt-6 flex items-center gap-1 cursor-pointer">
                <span>Apply Now</span>
                <span>→</span>
              </button>
            </div>

            {/* Showcase building illustration block on right */}
            <div className="w-48 h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-4 shrink-0 relative overflow-hidden">
              <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          {/* List Section: Recommended Roles */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-extrabold text-gray-800 tracking-tight">Recommended Roles</h4>
            
            <div className="space-y-3">
              {recommendedJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Logo block */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 uppercase border ${job.color}`}>
                      {job.initial}
                    </div>

                    <div>
                      <h5 className="text-xs sm:text-sm font-black text-gray-800 leading-snug">
                        {job.title}
                      </h5>
                      <span className="text-[10px] font-bold text-gray-400 block leading-tight">
                        {job.company} • {job.location}
                      </span>
                      
                      {/* Job Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[8px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md ${
                              tag === "High Match"
                                ? "bg-blue-50 text-[#2B50EC]"
                                : "bg-gray-50 text-gray-500"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end gap-2.5 w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-gray-50 pt-3 sm:pt-0">
                    <span className="text-[9px] font-bold text-gray-400 block sm:mb-1">{job.posted}</span>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 text-[10px] font-black py-2.5 px-4 rounded-xl shadow-sm transition-all  cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Widgets Column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* Application tracker card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm text-left">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Application Tracker</h4>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[10px] font-black">
                View All
              </button>
            </div>

            {/* List */}
            <div className="space-y-4">
              {[
                {
                  role: "Frontend Intern",
                  company: "TechNova Systems",
                  status: "Interviewing",
                  color: "bg-blue-50 text-[#2B50EC] border-blue-100",
                },
                {
                  role: "Data Science Fellow",
                  company: "Quantify Analytics",
                  status: "Applied",
                  color: "bg-gray-50 text-gray-500 border-gray-100",
                },
                {
                  role: "QA Tester",
                  company: "WebScale Inc.",
                  status: "Offer",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 border-b border-gray-50/50 pb-3 last:border-b-0 last:pb-0">
                  <div>
                    <h5 className="text-[11px] font-black text-gray-800 leading-tight">
                      {item.role}
                    </h5>
                    <span className="text-[9px] font-bold text-gray-400 block leading-tight mt-0.5">
                      {item.company}
                    </span>
                  </div>

                  <span className={`text-[8px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md border ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Match missing skills card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm text-left">
            <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider mb-2.5">Profile Match</h4>
            <p className="text-[10px] font-semibold text-gray-400 leading-relaxed mb-4">
              Your profile is missing <strong className="text-gray-700 font-bold">2 key skills</strong> often requested for Frontend roles.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {["TypeScript", "GraphQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-50 border border-gray-100 text-gray-500 text-[9px] font-black py-0.5 px-2.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full bg-white hover:bg-gray-50 text-gray-850 text-[10px] font-black py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer border border-gray-200">
              <span>Update Skills</span>
            </button>
          </div>

          {/* Career tip widget */}
          <div className="bg-white rounded-2xl p-5 shadow-sm text-left">
            <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-wider mb-2">Career tip of the day</h4>
            <p className="text-[10px] font-bold text-gray-500 leading-relaxed italic">
              &quot;Tailor your resume for every application. Highlight the projects that directly correlate with the job description to pass ATS filters.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
