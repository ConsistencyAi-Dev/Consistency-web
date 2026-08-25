"use client";

import React, { useState } from "react";

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  rating: string;
  reviewsCount: number;
  experience: string;
  placement: string;
  response: string;
  tags: string[];
  avatar: string;
  sessionPrice: number;
  reviewPrice: number;
  isLocked: boolean;
}

const mentorsList: Mentor[] = [
  {
    id: "m-1",
    name: "Bhavanidevi Manyala",
    role: "Data Analyst",
    company: "Fluentgrid Limited",
    bio: "Data Analyst guiding engineers through complex distributed system design and technical leadership.",
    rating: "4.8",
    reviewsCount: 124,
    experience: "8+ Yrs",
    placement: "98%",
    response: "24h",
    tags: ["System Design", "DSA", "Career Growth"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 80,
    reviewPrice: 50,
    isLocked: false,
  },
  {
    id: "m-2",
    name: "Alex Chen",
    role: "Senior Staff Engineer",
    company: "Google",
    bio: "Ex-Meta engineer building large scale distributed ML systems and vector search engines.",
    rating: "4.9",
    reviewsCount: 210,
    experience: "12+ Yrs",
    placement: "99%",
    response: "12h",
    tags: ["Distributed Systems", "AI Infrastructure", "Backend"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 120,
    reviewPrice: 75,
    isLocked: true,
  },
  {
    id: "m-3",
    name: "Sarah Jenkins",
    role: "Principal Product Designer",
    company: "Figma",
    bio: "Helping designers and developers master UI/UX systems and craft world-class product experiences.",
    rating: "4.9",
    reviewsCount: 185,
    experience: "10+ Yrs",
    placement: "95%",
    response: "24h",
    tags: ["UI/UX", "Design Systems", "Portfolio Review"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 95,
    reviewPrice: 60,
    isLocked: true,
  },
  {
    id: "m-4",
    name: "Rohan Sharma",
    role: "Lead ML Architect",
    company: "Meta",
    bio: "Specializing in Large Language Models, PyTorch, RAG architectures, and productionizing GenAI.",
    rating: "4.8",
    reviewsCount: 96,
    experience: "7+ Yrs",
    placement: "94%",
    response: "6h",
    tags: ["LLMs", "PyTorch", "Computer Vision"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 110,
    reviewPrice: 70,
    isLocked: true,
  },
  {
    id: "m-5",
    name: "Ananya Gupta",
    role: "Engineering Director",
    company: "Microsoft",
    bio: "Guiding engineers on engineering leadership, cloud microservices, and career advancement.",
    rating: "5.0",
    reviewsCount: 310,
    experience: "15+ Yrs",
    placement: "99%",
    response: "4h",
    tags: ["Leadership", "System Architecture", "Cloud"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 150,
    reviewPrice: 90,
    isLocked: true,
  },
  {
    id: "m-6",
    name: "David Miller",
    role: "Tech Lead",
    company: "Amazon Web Services",
    bio: "Cloud Architect helping candidates clear AWS certifications and crack Top Tech system design rounds.",
    rating: "4.7",
    reviewsCount: 142,
    experience: "9+ Yrs",
    placement: "96%",
    response: "18h",
    tags: ["AWS", "DevOps", "Kubernetes"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    sessionPrice: 85,
    reviewPrice: 55,
    isLocked: true,
  },
];

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-sm flex flex-col justify-between">
      {/* Mentor Profile Header Banner */}
      <div className="h-16 bg-gradient-to-r from-[#2B50EC] to-[#8B9EFF] p-3 flex items-start justify-between">
        <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold text-white">
          ✓ PRO MENTOR
        </span>
      </div>

      {/* Profile Details */}
      <div className="flex flex-col gap-4 p-4 flex-1">
        <div className="-mt-10 flex items-end gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
          />
          <span className="pb-1 text-xs font-semibold text-[#0F172A]">
            ⭐ {mentor.rating} <span className="font-normal text-[#64748B]">({mentor.reviewsCount} reviews)</span>
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#0F172A]">{mentor.name}</h3>
          <p className="text-xs text-[#475569]">
            {mentor.role} @ <strong className="text-[#2B50EC]">{mentor.company}</strong>
          </p>
          <p className="mt-2 text-xs leading-5 text-[#475569]">{mentor.bio}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {mentor.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#C7D2FE] bg-[#EEF2FF] px-2 py-1 text-[10px] font-semibold text-[#2B50EC]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <strong className="block text-sm text-[#0F172A]">{mentor.experience}</strong>
            <span className="text-[10px] text-[#64748B]">Experience</span>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <strong className="block text-sm text-[#0F172A]">{mentor.placement}</strong>
            <span className="text-[10px] text-[#64748B]">Placement</span>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <strong className="block text-sm text-[#0F172A]">{mentor.response}</strong>
            <span className="text-[10px] text-[#64748B]">Response</span>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3">
            <span>
              <strong className="block text-[#0F172A]">1:1 Mentoring Session</strong>
              <small className="text-[#64748B]">45 min video call</small>
            </span>
            <strong className="text-[#2B50EC]">${mentor.sessionPrice}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3">
            <span>
              <strong className="block text-[#0F172A]">Resume & LinkedIn Review</strong>
              <small className="text-[#64748B]">30 min review</small>
            </span>
            <strong className="text-[#2B50EC]">${mentor.reviewPrice}</strong>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full rounded-full bg-[#2B50EC] py-3 text-xs font-semibold text-white hover:bg-[#1E40AF] transition-colors">
          Book a Trial Session
        </button>
      </div>

      {/* GLASSMORPHISM OVERLAY FOR LOCKED CARDS (EXACT STYLES FROM USER HTML) */}
      {mentor.isLocked && (
        <div className="absolute inset-0 z-10 w-full h-full p-6 bg-[rgba(255,255,255,0.55)] shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.08)] overflow-hidden rounded-[20px] border border-[#E2E8F0] backdrop-blur-[12px] flex flex-col justify-center items-center gap-4 text-center">
          {/* Lock Icon Circle (56x56px, #EEF2FF bg, #C7D2FE border) */}
          <div className="w-[56px] h-[56px] bg-[#EEF2FF] rounded-full border border-[#C7D2FE] flex flex-col justify-center items-center flex-shrink-0">
            <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {/* Text Block */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <div className="self-stretch text-center text-[#0F172A] text-[18px] font-bold tracking-tight">
              Upgrade to Unlock
            </div>
            <div className="self-stretch text-center text-[#475569] text-[13px] font-medium leading-relaxed">
              Get access to premium mentors and exclusive sessions
            </div>
          </div>

          {/* Upgrade Button (44px height, 18px px, #2B50EC bg, 9999px rounded) */}
          <button className="h-[44px] px-[18px] bg-[#2B50EC] shadow-[0px_6px_14px_-4px_rgba(43,80,236,0.20)] rounded-full justify-center items-center inline-flex cursor-pointer hover:bg-[#1E40AF] transition-colors">
            <span className="text-white text-[14px] font-bold">
              Upgrade Now
            </span>
          </button>
        </div>
      )}
    </article>
  );
}

export default function MentorsPage() {
  const [filters, setFilters] = useState([
    "Tech / SaaS",
    "System Design & SWE",
    "4.5★ & above",
    "This week",
  ]);

  return (
    <div className="flex w-full flex-col gap-6 text-left pb-10">
      {/* Banner */}
      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#2B50EC] via-[#3B63FF] to-[#6D8AFF] px-6 py-5 text-white sm:flex-row sm:items-center sm:px-8 shadow-sm">
        <div>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase">
            Career Accelerator
          </span>
          <h2 className="mt-2 text-xl font-semibold">
            Expert industry mentors waiting to guide your trajectory
          </h2>
          <p className="mt-1 max-w-2xl text-xs text-white/85">
            We&apos;ve matched you with verified practitioners currently active in leading tech companies. Set up an initial 15-minute trial session today.
          </p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2B50EC]">
          ● 34 Mentors Online Now
        </span>
      </section>

      {/* Filter Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#0F172A]">Explore Mentors</h2>
          <span className="text-xs text-[#64748B]">Showing 6 verified match proposals</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() =>
                setFilters(
                  filters.map((item, i) => (i === index ? `${item} ·` : item))
                )
              }
              className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs text-[#475569] hover:bg-[#F8FAFC]"
            >
              {index === 0
                ? "Industry: "
                : index === 1
                ? "Expertise: "
                : index === 2
                ? "Rating: "
                : "Availability: "}
              <strong className="text-[#0F172A]">{filter}</strong> ⌄
            </button>
          ))}
          <button
            className="ml-auto px-3 py-2 text-xs font-semibold text-[#2B50EC]"
            onClick={() =>
              setFilters([
                "Tech / SaaS",
                "System Design & SWE",
                "4.5★ & above",
                "This week",
              ])
            }
          >
            ↻ Reset Filters
          </button>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mentorsList.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}