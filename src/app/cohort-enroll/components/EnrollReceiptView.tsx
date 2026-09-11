"use client";

import React from "react";

import { CohortConfig, CountryCode } from "@/config/cohorts";

interface EnrollReceiptViewProps {
  onBackToSuccess: () => void;
  orderInfo?: any;
  cohort?: CohortConfig;
  country?: CountryCode;
}

export default function EnrollReceiptView({ onBackToSuccess, orderInfo, cohort, country = "IN" }: EnrollReceiptViewProps) {
  const cohortTitle = cohort?.title || orderInfo?.cohortTitle || "Gen AI Cohort — 1 Year";
  const orderId = orderInfo?.orderId || "CAI-CF-2026-8842";
  const pricing = cohort?.pricing[country];
  const paidAmount = pricing ? pricing.formattedOffered : (orderInfo?.amount ? `${orderInfo.currency || "₹"} ${orderInfo.amount}` : "₹44,999");
  const todayDate = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="w-full max-w-[896px] mx-auto text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-8">
        <button
          type="button"
          onClick={onBackToSuccess}
          className="bg-white border border-[#e2e8f0] shadow-sm rounded-full px-4 py-2 text-xs font-semibold text-[#334155] cursor-pointer hover:bg-gray-50 transition-colors"
        >
          ← Back to Success
        </button>
        <span className="text-xs text-[#64748b]">✉ Email preview · Gmail-style</span>
      </div>

      <div className="bg-[#f8fafc] border border-[#e2e8f0] shadow-sm rounded-2xl p-4 sm:p-6">
        <div className="flex items-center gap-2 px-2 pb-4 text-[10px] text-[#94a3b8] font-semibold">
          <span className="w-3 h-3 rounded-full bg-[#f87171]" />
          <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
          <span className="w-3 h-3 rounded-full bg-[#4ade80]" />
          <span className="pl-2">Gmail · Inbox · Payment Receipt</span>
        </div>

        <article className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm overflow-hidden">
          <header className="border-b border-[#f1f5f9] p-6 sm:p-8 space-y-4">
            <div className="text-xs leading-5">
              <p>
                <span className="text-[#94a3b8] inline-block w-12">From:</span>
                <strong>Consistency AI</strong>{" "}
                <span className="text-[#475569]">&lt;billing@consistency.ai&gt;</span>
              </p>
              <p>
                <span className="text-[#94a3b8] inline-block w-12">To:</span>
                <strong>student@consistency.ai</strong>
              </p>
            </div>
            <h1 className="break-words text-lg sm:text-xl font-black text-[#0f172a]">
              Subject: Payment Receipt &amp; Enrollment Confirmed — {cohortTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] px-3 py-1 rounded-full text-[10px] font-bold">
                Payment Successful
              </span>
              <span className="text-xs text-[#64748b]">{todayDate} · Verified via Cashfree PG</span>
            </div>
          </header>

          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex flex-col items-center justify-center text-[9px] font-black">
                  C<span className="text-[#60a5fa]">AI</span>
                </div>
                <div>
                  <h2 className="font-black text-[#0f172a]">Consistency AI</h2>
                  <p className="text-xs text-[#64748b]">{cohortTitle}</p>
                </div>
              </div>
              <span className="bg-[#059669] text-white rounded-full px-3 py-1.5 text-[10px] font-black">
                ✓ PAYMENT SUCCESSFUL
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
                Hello Student, You&apos;re enrolled! 🎉
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                Thank you for joining the{" "}
                <strong className="text-[#0f172a]">{cohortTitle}</strong>. Your payment of{" "}
                <strong className="text-[#0f172a]">{paidAmount}</strong> was successful via Cashfree Payments. Your seat is confirmed.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#e2e8f0] rounded-xl overflow-hidden text-xs">
              <div className="p-4 bg-[#f8fafc]"><b className="block text-[9px] text-[#64748b]">ORDER ID</b>{orderId}</div>
              <div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">DATE</b>{todayDate}</div>
              <div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">COHORT</b>{cohort?.shortName || "Gen AI"}</div>
              <div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">AMOUNT</b>{paidAmount}</div>
              <div className="p-4 border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">PAYMENT METHOD</b>Cashfree PG</div>
              <div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">GATEWAY</b>Cashfree Payments</div>
              <div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">STATUS</b>CONFIRMED</div>
              <div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">INVOICE</b>INV-CF-{Date.now().toString().slice(-4)}</div>
            </div>

            <div>
              <h3 className="text-xs font-black text-[#0f172a] mb-3">What you paid for</h3>
              <ul className="space-y-2 text-xs text-[#475569]">
                <li className="flex gap-2"><span className="text-[#10b981]">⊙</span>12 Weeks of Live Sessions + Lifetime Recordings</li>
                <li className="flex gap-2"><span className="text-[#10b981]">⊙</span>3 Capstone Projects: RAG Chatbot, Transformer, MLOps Pipeline</li>
                <li className="flex gap-2"><span className="text-[#10b981]">⊙</span>FAANG ML Interview Prep + Mock Interviews</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
