"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

/* Mount-triggered word reveal — unlike BlurText's scroll-triggered version,
   this always animates in on load since it's above-the-fold hero copy that
   shouldn't depend on the user scrolling to become visible. */
function RevealWords({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: delay / 1000 + i * 0.08, ease: "easeOut" }}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function AimlHero() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/book-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit request.");
      }
      setName("");
      setMobile("");
      router.push("/aiml/booked");
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-[150px] pb-16 sm:pb-20 px-4 sm:px-6 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-indigo-50 via-[#EEF2FF] to-blue-50 px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — copy */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#2563EB] shadow-sm mb-6">
              <CalendarIcon />
              <span>Admissions open &nbsp;·&nbsp; Reserve your seat for next batch</span>
            </div>

            <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal uppercase leading-[1.1] text-[#111827] mb-5 max-w-xl">
              <RevealWords text="Become job ready in" delay={0} className="inline" />{" "}
              <RevealWords text="AI / ML" delay={150} className="inline text-[#2563EB]" />{" "}
              <RevealWords text="industry at our online cohort" delay={250} className="inline" />
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
              A proven program trusted by 1000s of learners to become software professionals
            </p>

            <button className="border-2 border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#2563EB]/5 px-7 py-3 rounded-lg font-semibold text-[15px] transition-all shadow-sm hover:-translate-y-[0.5px]">
              View Curriculum
            </button>
          </div>

          {/* Right column — lead capture card */}
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-6 bg-blue-200/40 rounded-[40px] blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl shadow-xl ring-1 ring-black/5 p-7 sm:p-8">
              <h2 className="text-gray-900 text-lg font-bold font-sans mb-6">
                Book a free session in 60 seconds
              </h2>

              {status && (
                <div className={`p-3 rounded-xl text-sm mb-4 font-medium ${
                  status.type === "success" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {status.message}
                </div>
              )}

              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-shadow mb-5"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Mobile number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-shadow mb-5"
              />

              <p className="text-xs text-gray-400 leading-5 mb-6">
                By proceeding further, I agree to the Terms &amp; Conditions and{" "}
                <a href="#" className="text-[#2563EB] font-medium hover:underline">
                  Privacy Policy
                </a>{" "}
                of Consistency .ai
              </p>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#0055FF] bg-gradient-to-r from-[#0066FF] to-[#0044FF] text-white py-3.5 rounded-xl font-semibold text-[15px] hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] hover:-translate-y-[0.5px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Booking..." : "Book session"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
