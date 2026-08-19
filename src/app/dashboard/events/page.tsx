"use client";

import React, { useState } from "react";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All Events");

  const events = [
    {
      title: "Mastering System Design",
      type: "Workshop",
      typeColor: "bg-blue-50 text-[#2B50EC]",
      date: "Sat, 24 May",
      time: "10:00 AM PST",
      description: "Learn how to architect scalable systems from scratch. We'll cover load balancing, caching, and database sharding with practical examples.",
      speaker: "Alex Chen",
      speakerTitle: "Senior Eng @ TechCorp",
      speakerInitial: "AC",
      color: "bg-blue-600",
      buttonStyle: "bg-[#2B50EC] hover:bg-[#1E3BB3] text-white",
    },
    {
      title: "Frontend Weekly Sync",
      type: "Community Meetup",
      typeColor: "bg-orange-50 text-[#F97316]",
      date: "Wed, 28 May",
      time: "5:00 PM PST",
      description: "Join our casual weekly meetup to discuss the latest in React, Vue, and CSS. Bring your questions and side projects to share.",
      isCommunity: true,
      buttonStyle: "bg-white hover:bg-gray-50 border border-gray-200 text-[#2B50EC]",
    },
    {
      title: "Acing the AI Interview",
      type: "Career Talk",
      typeColor: "bg-gray-50 text-gray-500",
      date: "Fri, 02 Jun",
      time: "12:00 PM PST",
      description: "Insider tips on navigating technical interviews for Machine Learning and AI engineering roles at top tech companies.",
      speaker: "Sarah Jenkins",
      speakerTitle: "AI Recruiter",
      speakerInitial: "SJ",
      color: "bg-indigo-600",
      buttonStyle: "bg-[#2B50EC] hover:bg-[#1E3BB3] text-white",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Title Header Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
          Upcoming Events & Hackathons
        </h2>
        <p className="text-gray-500 text-sm font-semibold mt-1">
          Learn, build and collaborate with the community
        </p>
      </div>

      {/* Top Hero Section (Featured Hackathon Blue Card) */}
      <div className="w-full bg-[#2B50EC] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-blue-500/10 relative overflow-hidden">
        <div className="flex-1 relative z-10">
          <span className="bg-white/15 text-white text-[9px] font-black uppercase tracking-wider py-1 px-3 rounded-full mb-3 inline-block">
            🏆 Featured Hackathon
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mt-1.5">
            Consistency AI Global Hackathon 2024
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm font-semibold mt-2.5 max-w-[550px] leading-relaxed">
            Build the future of AI learning tools. Compete globally, win prizes, and get recognized.
          </p>

          {/* Hackathon Meta Details */}
          <div className="flex flex-wrap items-center gap-5 text-[10px] sm:text-xs font-black text-blue-200 mt-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Oct 15 - Oct 22
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 11v-1m0-1c-1.11 0-2.08-.402-2.599-1M12 14c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 11v-1" />
              </svg>
              $10,000 Prize Pool
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              1.2K+ Registered
            </span>
          </div>

          <button className="bg-white hover:bg-gray-100 text-[#2B50EC] text-xs font-black py-3 px-7 rounded-full shadow-md transition-all mt-6 z-10 relative active:scale-[0.98]">
            Register Now
          </button>
        </div>

        {/* Hackathon trophy illustration placeholder on right */}
        <div className="w-48 h-32 bg-white/10 rounded-2xl flex items-center justify-center p-4 border border-white/10 backdrop-blur-sm shrink-0 relative z-10">
          <svg className="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H10zm9 4a5 5 0 01-10 0V8a5 5 0 0110 0v4z" />
          </svg>
        </div>
      </div>

      {/* Tabs list & two-column grid */}
      <div className="flex flex-col gap-5 mt-2">
        <div className="flex items-center gap-6 border-b border-gray-100 pb-2">
          {["All Events", "Workshops", "Meetups", "Career"].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`pb-2.5 text-xs font-black transition-all cursor-pointer relative ${
                  isActive ? "text-[#2B50EC]" : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <span>{filter}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B50EC] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
          {/* Left: Events Card listings */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Tag and Date info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] font-black uppercase tracking-wider py-0.5 px-2.5 rounded-md ${event.typeColor}`}>
                      {event.type}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">
                      📅 {event.date} • 🕒 {event.time}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-gray-800 tracking-tight leading-snug mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 leading-relaxed mb-5">
                    {event.description}
                  </p>
                </div>

                {/* Speaker block or community attendees avatars */}
                <div className="flex items-center justify-between gap-4 border-t border-gray-50 pt-4 mt-2">
                  {event.isCommunity ? (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2.5 overflow-hidden">
                        <div className="inline-block h-6.5 w-6.5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[8px] border-2 border-white ring-1 ring-gray-100">
                          AK
                        </div>
                        <div className="inline-block h-6.5 w-6.5 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-[8px] border-2 border-white ring-1 ring-gray-100">
                          NK
                        </div>
                        <div className="inline-block h-6.5 w-6.5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-extrabold text-[8px] border-2 border-white ring-1 ring-gray-100">
                          +12
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400">Consistency Community</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full ${event.color} text-white flex items-center justify-center font-black text-[10px] shrink-0 uppercase`}>
                        {event.speakerInitial}
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black text-gray-800 leading-tight">
                          {event.speaker}
                        </h5>
                        <span className="text-[8px] font-semibold text-gray-400 leading-tight block">
                          {event.speakerTitle}
                        </span>
                      </div>
                    </div>
                  )}

                  <button className={`text-[10px] font-black py-2 px-4 rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer ${event.buttonStyle}`}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right widgets list */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Registered events card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">My Registered Events</h4>
                <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[10px] font-black">
                  View all
                </button>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {[
                  {
                    title: "Resume Building Workshop",
                    time: "11:00 AM",
                    month: "MAY",
                    day: "18",
                    color: "bg-blue-50 text-[#2B50EC] border-blue-100",
                  },
                  {
                    title: "Intro to Python for Data",
                    time: "2:00 PM",
                    month: "JUN",
                    day: "05",
                    color: "bg-gray-50 text-gray-500 border-gray-100",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    {/* Date icon */}
                    <div className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center shrink-0 border uppercase font-sans ${item.color}`}>
                      <span className="text-[7px] font-black tracking-widest">{item.month}</span>
                      <span className="text-xs font-black leading-tight -mt-0.5">{item.day}</span>
                    </div>

                    <div>
                      <h5 className="text-[11px] font-black text-gray-800 leading-snug">
                        {item.title}
                      </h5>
                      <span className="text-[9px] font-bold text-gray-400 block leading-tight">
                        🕒 {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashed Speaker registration card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center border-2 border-dashed border-gray-200">
              <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h5 className="text-xs font-black text-gray-800">Want to host an event?</h5>
              <p className="text-[10px] font-bold text-gray-400 leading-snug mt-1 max-w-[200px] mx-auto">
                Share your knowledge with the Consistency AI community.
              </p>
              <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black mt-3 cursor-pointer block mx-auto">
                Apply to be a speaker
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
