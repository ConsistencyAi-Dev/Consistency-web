"use client";

import React, { useState } from "react";
import { CURRICULUM_DATA } from "./curriculumData";

interface EnrollCheckoutViewProps {
  onPay: () => void;
}

export default function EnrollCheckoutView({ onPay }: EnrollCheckoutViewProps) {
  const [expandedCurriculum, setExpandedCurriculum] = useState<number | null>(1);
  const [paymentTab, setPaymentTab] = useState<"Card" | "UPI" | "EMI">("Card");
  const [selectedUpiApp, setSelectedUpiApp] = useState<string | null>(null);
  const [selectedEmi, setSelectedEmi] = useState("3 Months @ 12%");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Left Column: Details & Payment Methods */}
      <div className="lg:col-span-2 flex flex-col gap-6 text-left">
        {/* Box 1: Course Summary */}
        <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs shrink-0">
            ML
          </div>
          <div>
            <h3 className="text-base font-black text-gray-900 tracking-tight leading-snug">
              Gen AI Cohort — 1 year
            </h3>
            <p className="text-xs font-bold text-gray-400 leading-tight block mt-0.5">
              Batch starting Dec 2, 2026 • Live + Projects • 40 seats
            </p>

            <div className="flex items-center gap-2 mt-2.5">
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md">
                12 seats left
              </span>
              <span className="bg-gray-50 text-gray-500 border border-gray-100 text-[9px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md">
                Mentor Ex-FAANG
              </span>
            </div>
          </div>
        </div>

        {/* Box 2: Curriculum Accordion preview list */}
        <div className="bg-white rounded-2xl border border-[#f1f5f9] p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-50 pb-4 mb-4">
            <div>
              <span className="bg-gray-900 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                Bestseller
              </span>
              <h3 className="text-base font-black text-gray-800 mt-1.5 tracking-tight">
                Gen AI Mastery — From Zero to ML Engineer
              </h3>
              <div className="flex items-center gap-2.5 text-[10px] font-semibold text-gray-400 mt-1">
                <span>12 weeks</span>
                <span>•</span>
                <span>⭐ 4.9 - 180 students</span>
                <span>•</span>
                <span>👥 Mentor Aditya Sharma</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {["Python", "ML", "Deep Learning", "Transformers", "RAG", "MLOps"].map((tag) => (
              <span key={tag} className="bg-gray-50 border border-gray-100 text-gray-500 text-[9px] font-black py-0.5 px-2 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">
            Curriculum Preview • 6 Modules
          </div>

          <div className="space-y-2">
            {CURRICULUM_DATA.map((item) => {
              const isExpanded = expandedCurriculum === item.num;
              return (
                <div key={item.num} className="border border-gray-50 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedCurriculum(isExpanded ? null : item.num)}
                    className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-gray-50/50 transition-colors text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center text-[10px] font-black shrink-0">
                        {item.num}
                      </span>
                      <h4 className="text-xs font-black text-gray-700 tracking-tight leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-50 py-0.5 px-2 rounded-md uppercase">
                        {item.lessons}
                      </span>
                      <span className="text-gray-300 font-extrabold text-sm">{isExpanded ? "−" : "+"}</span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-gray-50/30 border-t border-gray-50 text-left">
                      <ul className="space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-gray-500 font-semibold flex items-start gap-2">
                            <span className="text-[#2B50EC] font-black">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-2 text-center mt-6 pt-5 border-t border-gray-50">
            {[
              { label: "Live Classes", desc: "Mon/Wed/Fri 7PM" },
              { label: "1:1 Mentorship", desc: "2x / week" },
              { label: "Projects", desc: "5 portfolio" },
              { label: "Certificate", desc: "Verified" },
            ].map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">{feat.label}</span>
                <span className="text-[10px] font-black text-gray-800 leading-tight mt-0.5">{feat.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Box 3: Payment Method card details inputs */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-sm text-left">
          <h3 className="text-sm font-extrabold text-gray-800 tracking-tight mb-4">Payment Method</h3>

          <div className="bg-gray-50/80 p-1 rounded-xl flex items-center gap-1.5 mb-6">
            {["Card", "UPI", "EMI"].map((tab) => {
              const isActive = paymentTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setPaymentTab(tab as "Card" | "UPI" | "EMI")}
                  className={`flex-1 text-center text-xs font-black py-2 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-gray-800 shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span className="mr-1.5 text-[11px]">{tab === "Card" ? "▣" : tab === "UPI" ? "U" : "▣"}</span>
                  {tab}
                </button>
              );
            })}
          </div>

          {paymentTab === "Card" ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black text-gray-800">Card Details</span>
                <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5">
                  💳 Secure Payment
                </span>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  defaultValue="4242 4242 4242 4242"
                  className="w-full bg-gray-50 rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner border border-gray-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mb-1">
                    Expiry
                  </label>
                  <input
                    type="text"
                    defaultValue="12/28"
                    className="w-full bg-gray-50 rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner border border-gray-100"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    defaultValue="123"
                    className="w-full bg-gray-50 rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner border border-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full bg-gray-50 rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner border border-gray-100"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#2B50EC] border-gray-300 rounded focus:ring-[#2B50EC] mt-0.5"
                />
                <span className="text-[10px] font-semibold text-gray-400 leading-snug">
                  Save card for future payments – secured by Vault
                </span>
              </label>

              <div className="bg-gray-50/50 p-3.5 rounded-xl border border-gray-100 text-[10px] font-semibold text-gray-400 leading-relaxed mt-4">
                🔒 Your card is encrypted end-to-end. We never store full card numbers.
              </div>
            </div>
          ) : paymentTab === "UPI" ? (
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-black text-gray-800">Pay with UPI</h4>
                <p className="mt-1 text-xs font-semibold text-[#64748B]">Fastest · No fees · Instant confirmation</p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#3B82F6] p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B50EC] text-[11px] font-black text-white">A</span>
                  <h5 className="text-sm font-black text-gray-800">Enter UPI ID</h5>
                </div>
                <div className="mt-3 flex gap-2">
                  <input type="text" defaultValue="john@okaxis" className="min-w-0 flex-1 rounded-xl border border-[#CBD5E1] px-3.5 py-3 text-xs font-semibold text-[#0F172A] focus:border-[#2B50EC] focus:outline-none" />
                  <button type="button" className="rounded-xl bg-[#0F172A] px-5 text-xs font-black text-white">Verify</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["@okicici", "@okaxis", "@okhdfcbank", "@ybl", "@paytm"].map((handle) => (
                    <span key={handle} className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${handle === "@okaxis" ? "border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB]" : "border-[#E2E8F0] bg-[#F1F5F9] text-[#64748B]"}`}>
                      {handle}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#A855F7] p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9333EA] text-[11px] font-black text-white">B</span>
                  <h5 className="text-sm font-black text-gray-800">UPI Apps &amp; QR</h5>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[{ name: "Google Pay", short: "Go", color: "bg-[#4285F4]" }, { name: "PhonePe", short: "Ph", color: "bg-[#7E22CE]" }, { name: "Paytm", short: "Pa", color: "bg-[#06B6D4]" }, { name: "BHIM", short: "BH", color: "bg-[#15803D]" }].map((app) => (
                    <button key={app.name} type="button" onClick={() => setSelectedUpiApp(app.name)} className={`flex flex-col items-center rounded-xl border p-3 transition-colors ${selectedUpiApp === app.name ? "border-[#2B50EC] bg-[#F8FAFF] ring-1 ring-[#2B50EC]" : "border-[#E2E8F0] bg-white hover:border-[#93C5FD]"}`}>
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full ${app.color} text-sm font-black text-white`}>{app.short}</span>
                      <span className="mt-2 text-[10px] font-bold text-[#334155]">{app.name}</span>
                    </button>
                  ))}
                </div>
                {selectedUpiApp && (
                  <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 sm:flex-row sm:items-center">
                    <div className="grid h-28 w-28 shrink-0 grid-cols-7 gap-0.5 rounded-lg border-4 border-white bg-white p-1 shadow-sm" aria-label="UPI QR code">
                      {Array.from({ length: 49 }, (_, index) => <span key={index} className={(index * 17 + index * index) % 7 < 3 || [0, 1, 2, 7, 9, 14, 42, 43, 44, 35, 37, 28, 29, 30].includes(index) ? "bg-[#0F172A]" : "bg-white"} />)}
                    </div>
                    <div className="text-xs text-[#475569]"><strong className="block text-sm text-[#0F172A]">Scan &amp; Pay $529.82</strong><span className="mt-1 block">UPI ID: consistency@razorpay · Order CAI-8842</span><span className="mt-2 inline-block rounded-full border border-[#FDBA74] bg-[#FFF7ED] px-2.5 py-1 text-[10px] font-bold text-[#EA580C]">Expires in 04:55</span></div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-base font-black text-gray-800">EMI Options</h4>
              {[{ label: "3 Months @ 12%", monthly: "$184.21/mo", total: "$552.63" }, { label: "6 Months @ 13.5%", monthly: "$95.12/mo", total: "$570.72" }, { label: "9 Months @ 14%", monthly: "$65.18/mo", total: "$586.62" }].map((plan) => (
                <button key={plan.label} type="button" onClick={() => setSelectedEmi(plan.label)} className={`flex w-full flex-col gap-1 rounded-xl border p-4 text-left transition-colors ${selectedEmi === plan.label ? "border-[#3B82F6] bg-[#F5F8FF] ring-1 ring-[#3B82F6]" : "border-[#E2E8F0] bg-white hover:border-[#93C5FD]"}`}>
                  <span className="flex items-center justify-between text-sm font-black text-[#1E293B]"><span>{plan.label}</span><span>{plan.monthly}</span></span>
                  <span className="text-xs font-semibold text-[#64748B]">Total {plan.total} · Includes interest · No prepayment fees</span>
                </button>
              ))}
              <div className="rounded-xl bg-[#F8FAFC] p-3 text-center text-[11px] font-semibold text-[#64748B]">EMI processed by Razorpay · Instant approval · Cards + Cardless EMI supported</div>
            </div>
          )}

          <div className="mt-8 pt-5 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-bold text-gray-400">
              🛡️ Secured by Razorpay • 100% safe
            </span>

            <button
              type="button"
              onClick={onPay}
              className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white px-8 py-3.5 rounded-xl text-xs font-black transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Pay $529.82</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Pricing details summary box */}
      <div className="flex flex-col gap-6 lg:col-span-1 text-left">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-gradient-to-br from-[#2B50EC] to-[#7C3AED] text-white p-6 flex flex-col">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-sm font-black tracking-tight leading-snug">
              Gen AI Cohort
            </h4>
            <span className="text-[10px] font-semibold text-blue-100 mt-0.5">
              1 year · Live + Projects · GPU
            </span>
          </div>

          <div className="p-6">
            <div className="flex flex-col gap-3.5 mb-6 pb-5 border-b border-gray-50 text-xs font-semibold text-gray-500">
              <div className="flex items-center justify-between">
                <span>Batch: Dec 2 - Dec 14 · 384 live sessions</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-gray-50 py-1.5 px-3 rounded-lg border border-gray-100 text-[10px]">
                  ✓ 384 Live Sessions
                </div>
                <div className="bg-gray-50 py-1.5 px-3 rounded-lg border border-gray-100 text-[10px]">
                  ✓ 100 GPU Hours
                </div>
                <div className="bg-gray-50 py-1.5 px-3 rounded-lg border border-gray-100 text-[10px]">
                  ✓ 5 Projects
                </div>
                <div className="bg-gray-50 py-1.5 px-3 rounded-lg border border-gray-100 text-[10px]">
                  ✓ 2x 1:1/week
                </div>
              </div>
            </div>

            <div className="space-y-3.5 mb-6 text-xs font-bold">
              <div className="flex items-center justify-between text-gray-500">
                <span>Subtotal</span>
                <span>$499</span>
              </div>
              <div className="flex items-center justify-between text-emerald-600">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Discount (A150)
                </span>
                <span>-$50</span>
              </div>
              <div className="flex items-center justify-between text-gray-500">
                <span>GST 18%</span>
                <span>$80.82</span>
              </div>

              <div className="flex flex-col pt-4 border-t border-gray-100 mt-4 text-left">
                <div className="flex items-center justify-between text-sm font-black text-gray-800">
                  <span>Total</span>
                  <span>$529.82 USD</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-1 leading-tight">
                  ≈ ₹44,051 • Billed once • Secure by Razorpay
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t border-gray-100 pt-5 text-[10px] font-bold text-gray-500">
              {[
                "Live Mentorship + Code Reviews",
                "GPU Access & Cloud Workspace",
                "Placement Support & Mock Interviews",
                "Verified Certificate + Alumni Network",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
