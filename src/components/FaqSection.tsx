"use client";

import React, { useState } from "react";
import BlurText from "./BlurText";

type Faq = { q: string; a: string };

const LEFT_FAQS: Faq[] = [
  {
    q: "Why do students lose motivation halfway through learning?",
    a: "Most platforms give you content but no structure. Without daily accountability, motivation fades — that's the exact gap Consistency AI closes.",
  },
  {
    q: "How is Consistency AI different from other bootcamps or courses?",
    a: "We don't just teach. We track your daily habits, pair you with a mentor, and make sure you finish what you start instead of collecting half-done courses.",
  },
  {
    q: "What if I'm a complete beginner?",
    a: "The roadmap starts from the fundamentals — no prior experience required. You just need to show up daily and follow the plan.",
  },
  {
    q: "What happens if I miss a day of practice?",
    a: "Your AI mentor flags the gap immediately and nudges you back on track before a missed day turns into a broken streak.",
  },
  {
    q: "Is this self-paced or cohort-based?",
    a: "Both — you follow a structured, phase-by-phase roadmap alongside a live cohort of peers on the same journey.",
  },
];

const RIGHT_FAQS: Faq[] = [
  {
    q: "How does the AI mentor actually work?",
    a: "It reviews your daily check-ins, code, and progress patterns, then tells your human mentor exactly where you need guidance.",
  },
  {
    q: "Will I get support from real mentors?",
    a: "Yes — every student is paired with an industry mentor for 1:1 guidance and weekly checkpoint interviews.",
  },
  {
    q: "Is there a job placement guarantee?",
    a: "We guarantee career support — resume polishing, mock interviews, portfolio reviews, and direct referrals to hiring partners.",
  },
  {
    q: "How do you keep students accountable?",
    a: "Daily streaks, weekly checkpoints, and a mentor who follows up personally the moment your consistency drops.",
  },
  {
    q: "What is your refund policy?",
    a: "If you complete the first two weeks and don't see value, we offer a full refund — no questions asked.",
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
