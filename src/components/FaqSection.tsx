"use client";

import React, { useState } from "react";
import BlurText from "./BlurText";

type Faq = { q: string; a: string };

const LEFT_FAQS: Faq[] = [
  {
    q: "Why do students quit courses even after paying for them?",
    a: "Most students don't quit because they're incapable. They quit because they lose consistency, accountability, and momentum after the initial motivation fades. Consistency AI is built to solve that gap.",
  },
  {
    q: "How does the Consistency Engine work?",
    a: "The Consistency Engine measures learning behavior, task completion, streaks, attendance, project activity, and engagement signals to help students maintain momentum every day.",
  },
  {
    q: "How is Consistency AI different from platforms like Coursera, Udemy, or YouTube?",
    a: "Those platforms provide content. We focus on completion. Through AI mentors, accountability systems, cohort learning, and consistency tracking, we help students finish what they start.",
  },
  {
    q: "Will I get support from real mentors?",
    a: "Yes. AI handles day-to-day guidance and monitoring, while human mentors provide deeper support, career advice, project reviews, and intervention when needed.",
  },
  {
    q: "What does the AI Mentor actually do?",
    a: "The AI Mentor tracks progress, answers doubts, performs daily check-ins, identifies learning slowdowns, and helps students stay on track throughout their learning journey.",
  },
];

const RIGHT_FAQS: Faq[] = [
  {
    q: "What if I am a complete beginner?",
    a: "The platform is designed for beginners. Personalized roadmaps, structured learning paths, AI guidance, and mentor support help students progress step-by-step without feeling overwhelmed.",
  },
  {
    q: "What happens if I lose motivation or stop learning?",
    a: "The system detects inactivity, missed check-ins, and declining engagement. It then triggers reminders, interventions, and mentor support before you completely drop off.",
  },
  {
    q: "How do you help students become job-ready?",
    a: "Students learn through cohorts, hands-on projects, portfolio building, mentorship, mock interviews, and industry-aligned skill development designed around hiring requirements.",
  },
  {
    q: "Is this just another online course platform?",
    a: "No. Consistency AI is a consistency-driven learning ecosystem designed to help students build skills, complete projects, and become job-ready through structured accountability.",
  },
  {
    q: "What is your mission?",
    a: "Every Student Deserves Consistency. We believe talent is everywhere, but consistency is not. Our mission is to help students build lasting learning habits that lead to skills, confidence, and career opportunities.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function FaqRow({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="text-gray-900 text-sm font-semibold font-sans leading-6">{faq.q}</span>
        <span className="mt-0.5 text-gray-400 cursor-pointer">
          <PlusIcon open={open} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm leading-6 font-sans pr-6">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#111827] font-sans mb-4">
            <BlurText text="Frequently Asked" delay={0} animateBy="words" direction="top" className="block" />
            <BlurText text="Questions" delay={200} animateBy="words" direction="top" className="block" />
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto font-sans">
            Everything you need to know about learning with Consistency AI — from daily consistency to career outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12">
          <div>
            {LEFT_FAQS.map((faq) => (
              <FaqRow key={faq.q} faq={faq} />
            ))}
          </div>
          <div>
            {RIGHT_FAQS.map((faq) => (
              <FaqRow key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
