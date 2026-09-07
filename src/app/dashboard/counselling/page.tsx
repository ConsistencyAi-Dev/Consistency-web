"use client";

import React from "react";
import ComingSoon from "../components/ComingSoon";

export default function CounsellingPage() {
  return <ComingSoon title="Career Counseling & Advisory" description="1:1 career guidance, roadmap planning, and cohort advisory are coming soon." />;
}

/*
import { useState } from "react";

const timeSlots = [
  "Mon, 9:00 AM",
  "Tue, 11:30 AM",
  "Wed, 2:00 PM",
  "Thu, 4:30 PM",
  "Fri, 10:00 AM",
  "Sat, 1:00 PM",
];

export function OriginalCounsellingPage() {
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[2]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-[0px_1px_3px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2B50EC] text-2xl text-white shadow-[0px_10px_24px_rgba(43,80,236,0.28)]">
          ✓
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#0F172A]">Session booked!</h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-[14px] leading-6 text-[#64748B]">
          Your free 15-minute counseling session has been scheduled successfully. Our advisor will send the calendar invite and meeting link to your email.
        </p>

        <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] pb-3 text-[13px] text-[#64748B]">
            <span>Advisor</span>
            <span className="font-semibold text-[#0F172A]">AI Career Coach</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 border-b border-[#E2E8F0] pb-3 text-[13px] text-[#64748B]">
            <span>Time</span>
            <span className="font-semibold text-[#0F172A]">{selectedSlot}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 text-[13px] text-[#64748B]">
            <span>Format</span>
            <span className="font-semibold text-[#0F172A]">1:1 video call</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl rounded-[32px] border border-[#E2E8F0] bg-white p-6 shadow-[0px_1px_3px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1.3fr]">
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#EEF2FF_0%,#F8FAFC_100%)] p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-[0px_1px_2px_rgba(15,23,42,0.05)]">📞</div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B50EC]">Free advisor call</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">Build a roadmap that fits your goals.</h1>
          <p className="mt-4 text-[14px] leading-6 text-[#475569]">
            Speak with a learning advisor for 15 minutes to clarify your path, choose the right cohort, and identify the fastest route to a role you want.
          </p>

          <div className="mt-6 space-y-3 text-[13px] text-[#334155]">
            {[
              "Personalized guidance based on your current strengths",
              "Advice on the best cohort and learning plan",
              "Clear next steps for job prep and portfolio building",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/60 px-3 py-2">
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#2B50EC] text-[10px] font-bold text-white">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6">
          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Book your session</p>
            <h2 className="mt-2 text-[24px] font-bold tracking-tight text-[#0F172A]">Tell us about your goals</h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                First name
                <input
                  defaultValue="John"
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-[14px] text-[#0F172A] outline-none ring-0 placeholder:text-[#94A3B8] focus:border-[#2B50EC]"
                />
              </label>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                Email
                <input
                  defaultValue="john.doe@gmail.com"
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-[14px] text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#2B50EC]"
                />
              </label>
            </div>

            <label className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
              Goal
              <input
                defaultValue="Switch to software engineering"
                className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-[14px] text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#2B50EC]"
              />
            </label>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#475569]">Available slots</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-xl border px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
                      selectedSlot === slot
                        ? "border-[#2B50EC] bg-[#EEF2FF] text-[#1E3BB3]"
                        : "border-[#E2E8F0] bg-white text-[#334155] hover:border-[#CBD5E1]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-2 w-full rounded-full bg-[#2B50EC] px-5 py-3 text-[14px] font-semibold text-white shadow-[0px_8px_18px_rgba(43,80,236,0.24)] transition-colors hover:bg-[#1E3BB3]"
            >
              Book free counseling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
