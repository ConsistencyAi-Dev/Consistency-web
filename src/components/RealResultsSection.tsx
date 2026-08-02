"use client";

import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  cohort: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Consistency.ai helped me improve my Python and problem-solving skills, and gain confidence through hands-on learning and real-world projects.",
    name: "Manoswini Nuthalapati",
    cohort: "Cohort 1",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote: "The Consistency.ai cohort provided valuable mentorship, helping me strengthen my technical skills, improve problem-solving abilities, and build a more professional industry-ready profile.",
    name: "M. Keerthi",
    cohort: "Cohort 1",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    quote: "My mentor was always available to help, and the environment was friendly and comfortable.",
    name: "Maya Zong",
    cohort: "Cohort 1",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    quote: "Since joining Consistency.ai in August 2025, I've improved my Python, problem-solving, LeetCode, and GitHub skills, becoming more disciplined and industry-ready.",
    name: "Ashritha",
    cohort: "Cohort 1",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    quote: "Consistency.ai helped me improve my Python, problem-solving, LeetCode, and GitHub skills, becoming more disciplined and industry-ready.",
    name: "Sareddy Lokesh Reddy",
    cohort: "Cohort 2",
    avatar: "https://i.pravatar.cc/100?img=53",
  },
  {
    quote: "Consistency.ai gave me valuable real-world exposure, improved my problem-solving skills, and helped me learn in a structured way, making me more confident and industry-ready.",
    name: "M. Bhardwaj",
    cohort: "Cohort 2",
    avatar: "https://i.pravatar.cc/100?img=59",
  },
];

const COLUMNS: { items: Testimonial[]; direction: "up" | "down"; duration: number }[] = [
  { items: TESTIMONIALS.slice(0, 2), direction: "up", duration: 24 },
  { items: TESTIMONIALS.slice(2, 4), direction: "down", duration: 28 },
  { items: TESTIMONIALS.slice(4, 6), direction: "up", duration: 26 },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 mb-6">
      <p className="text-gray-700 text-sm leading-6 font-sans mb-5">{t.quote}</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="size-10 rounded-full object-cover shrink-0" />
        <div>
          <div className="text-gray-900 text-sm font-bold font-sans">{t.name}</div>
          <div className="text-gray-400 text-xs font-sans">{t.cohort}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  duration: number;
}) {
  const loop = [...items, ...items];
  const animate =
    direction === "up" ? { y: ["0%", "-50%"] } : { y: ["-50%", "0%"] };

  return (
    <div className="relative h-[560px] overflow-hidden">
      <motion.div
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function RealResultsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-5">
            Students transformation
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans">
            Real students, Real results
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F9F9F9] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F9F9F9] to-transparent z-10" />

          {COLUMNS.map((col, i) => (
            <MarqueeColumn key={i} items={col.items} direction={col.direction} duration={col.duration} />
          ))}
        </div>
      </div>
    </section>
  );
}
