"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "5000+", label: "Learning Hours" },
  { value: "120+", label: "Live Projects" },
  { value: "92%", label: "Placement Rate" },
  { value: "15k+", label: "Active Students" },
];

const PITFALLS = [
  { title: "No Clear Roadmap", desc: "Getting lost in a sea of random tutorials without a clear path." },
  { title: "Zero Accountability", desc: "Starting with high motivation but quitting after the first week." },
  { title: "Tutorial Hell", desc: "Watching videos but never building anything real independently." },
];

const SYSTEM = [
  { title: "Industry Roadmap", desc: "Expert-curated curriculum tailored to current market demands." },
  { title: "1:1 Mentorship", desc: "Personalized guidance from FAANG engineers to keep you on track." },
  { title: "Daily Streak System", desc: "Gamified learning rewards to ensure daily progress and habit building." },
];

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StatsBar() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_12px_40px_-12px_rgba(37,99,235,0.15)] px-6 sm:px-10 py-8 sm:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 divide-x divide-gray-100">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className={`text-center ${i > 0 ? "pl-4 sm:pl-0" : ""}`}
          >
            <div className="text-[#2563EB] text-3xl sm:text-4xl font-bold font-sans mb-1">{stat.value}</div>
            <div className="text-gray-500 text-sm font-medium font-sans">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ListItem({
  title,
  desc,
  icon,
  iconClass,
  titleClass,
  descClass,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconClass: string;
  titleClass: string;
  descClass: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 shrink-0 flex items-center justify-center size-5 rounded-full ${iconClass}`}>
        {icon}
      </span>
      <div>
        <h4 className={`text-sm font-bold font-sans mb-0.5 ${titleClass}`}>{title}</h4>
        <p className={`text-sm leading-5 font-sans ${descClass}`}>{desc}</p>
      </div>
    </div>
  );
}

export default function WhyConsistencySection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F9F9F9]">
      <StatsBar />

      <div className="max-w-5xl mx-auto mt-20 sm:mt-24">
        <h2 className="text-[#2563EB] text-3xl sm:text-4xl font-bold font-sans mb-4">
          Why Consistency AI?
        </h2>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          Traditional learning lacks structure. We built a system that ensures you actually finish what you start.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Common Pitfalls */}
          <div className="bg-indigo-50/60 rounded-2xl p-7 sm:p-8">
            <h3 className="text-gray-900 text-lg font-bold font-sans mb-6">Common Pitfalls</h3>
            <div className="flex flex-col gap-5">
              {PITFALLS.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  icon={<XIcon />}
                  iconClass="bg-red-50 text-red-500"
                  titleClass="text-gray-900"
                  descClass="text-gray-500"
                />
              ))}
            </div>
          </div>

          {/* The Consistency System */}
          <div className="bg-gradient-to-br from-[#3B6BFF] to-[#1D3FDE] rounded-2xl p-7 sm:p-8 shadow-[0_20px_45px_-15px_rgba(37,99,235,0.4)]">
            <h3 className="text-white text-lg font-bold font-sans mb-6">The Consistency System</h3>
            <div className="flex flex-col gap-5">
              {SYSTEM.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  icon={<CheckIcon />}
                  iconClass="bg-white/20 text-white"
                  titleClass="text-white"
                  descClass="text-blue-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
