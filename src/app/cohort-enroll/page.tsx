"use client";

import React, { useState } from "react";
import Link from "next/link";
import { logoPng } from "@/assets";

export default function CohortEnrollPage() {
  const [view, setView] = useState<"checkout" | "success" | "receipt" | "loading">("checkout");
  const [expandedCurriculum, setExpandedCurriculum] = useState<number | null>(1);
  const [paymentTab, setPaymentTab] = useState<"Card" | "UPI" | "EMI">("Card");

  // Success screen connection states
  const [isLeetCodeConnected, setIsLeetCodeConnected] = useState(false);
  const [isGitHubConnected, setIsGitHubConnected] = useState(false);
  const [isLinkedInConnected, setIsLinkedInConnected] = useState(false);

  const [profileProgress, setProfileProgress] = useState(25);

  const handleConnectLeetCode = () => {
    setIsLeetCodeConnected(true);
    setProfileProgress((prev) => Math.min(prev + 25, 100));
  };

  const handleConnectGitHub = () => {
    setIsGitHubConnected(true);
    setProfileProgress((prev) => Math.min(prev + 25, 100));
  };

  const handleConnectLinkedIn = () => {
    setIsLinkedInConnected(true);
    setProfileProgress(100);
  };

  const handleViewReceipt = () => setView("receipt");

  const handlePay = () => {
    setView("loading");
    setTimeout(() => {
      setView("success");
    }, 1800);
  };

  const curriculum = [
    {
      num: 1,
      title: "Python for ML & Math Foundations",
      lessons: "8 lessons - 2.5h",
      details: [
        "NumPy, Pandas, Visualization",
        "Probability, Linear Algebra essentials",
        "Hands-on notebooks",
      ],
    },
    {
      num: 2,
      title: "Supervised Learning Deep-Dive",
      lessons: "12 lessons - 4h",
      details: ["Regression models, Classification trees", "Support Vector Machines", "Evaluation metrics & validations"],
    },
    {
      num: 3,
      title: "Deep Learning Fundamentals",
      lessons: "10 lessons - 3h",
      details: ["Perceptrons & Neural Networks", "Backpropagation solvers", "Optimizers (Adam, SGD)"],
    },
    {
      num: 4,
      title: "Transformers & NLP",
      lessons: "9 lessons - 4.5h",
      details: ["Self-Attention mechanisms", "BERT & GPT architecture", "Hugging Face pipeline usage"],
    },
    {
      num: 5,
      title: "GenAI & RAG Systems",
      lessons: "11 lessons - 5h",
      details: ["Vector indexes (Pinecone, Chroma)", "LangChain context loaders", "Prompt engineering recipes"],
    },
    {
      num: 6,
      title: "MLOps & Deployment",
      lessons: "7 lessons - 3h",
      details: ["Docker containers", "API handlers (FastAPI, Flask)", "Model registries (MLflow)"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans antialiased text-gray-800 flex flex-col">
      {/* Header bar area */}
      <header className="bg-white border-b border-[#e5e7eb] px-6 sm:px-12 py-4 flex items-center justify-between shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 bg-white p-1 overflow-hidden shrink-0">
            <img src={logoPng.src} alt="Consistency AI" className="w-full h-full object-contain" />
          </div>
          <div className="text-left">
            <span className="font-extrabold text-gray-900 text-sm tracking-tight block">Consistency AI</span>
            <span className="text-[9px] font-bold text-gray-400 block -mt-1 uppercase">AI/ML COHORT - DEC 2026</span>
          </div>
        </Link>

        {/* Stepper pills */}
        <div className="bg-gray-100/80 p-1 rounded-full flex items-center gap-1">
          <span className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
            view === "checkout" || view === "loading"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-400"
          }`}>
            Checkout
          </span>
          <span className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
            view === "success"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-400"
          }`}>
            Success
          </span>
          <span className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
            view === "receipt" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"
          }`}>
            Receipt
          </span>
        </div>
      </header>

      {/* Main Container contents */}
      <main className={`flex-1 max-w-[1100px] w-full mx-auto p-6 sm:p-10 flex flex-col ${view === "receipt" ? "justify-start" : "justify-center"}`}>
        
        {view === "loading" && (
          <div className="w-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm ">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative shadow-sm animate-pulse">
              <svg className="animate-spin h-6 w-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Processing secure payment...</h3>
            <p className="text-gray-400 text-xs font-semibold mt-1">Please do not refresh the page or click back.</p>
          </div>
        )}

        {view === "checkout" && (
          // CHECKOUT VIEW SCREEN
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

                {/* Skill tag list */}
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

                {/* Accordions */}
                <div className="space-y-2">
                  {curriculum.map((item) => {
                    const isExpanded = expandedCurriculum === item.num;
                    return (
                      <div key={item.num} className="border border-gray-50 rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExpandedCurriculum(isExpanded ? null : item.num)}
                          className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-gray-50/50 transition-colors text-left"
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

                {/* Features banner strip below accordion */}
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
                
                {/* Tabs */}
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
                        {tab}
                      </button>
                    );
                  })}
                </div>

                {/* Tab: Card Form details */}
                {paymentTab === "Card" ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-gray-800">Card Details</span>
                      <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5">
                        💳 Secure Payment
                      </span>
                    </div>

                    {/* Card Number */}
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

                    {/* Expiry & CVV */}
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

                    {/* Name on Card */}
                    <div>
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-wide block mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        defaultValue="Rahul Kumar"
                        className="w-full bg-gray-50 rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner border border-gray-100"
                      />
                    </div>

                    {/* Save card checkbox */}
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

                    {/* Encrypted note */}
                    <div className="bg-gray-50/50 p-3.5 rounded-xl border border-gray-100 text-[10px] font-semibold text-gray-400 leading-relaxed mt-4">
                      🔒 Your card is encrypted end-to-end. We never store full card numbers.
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-xs text-gray-400 font-semibold">
                    {paymentTab} billing method integration active.
                  </div>
                )}

                {/* Final checkout actions */}
                <div className="mt-8 pt-5 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] font-bold text-gray-400">
                    🛡️ Secured by Razorpay • 100% safe
                  </span>

                  <button
                    type="button"
                    onClick={handlePay}
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
                {/* Top header details */}
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

                {/* Pricing content */}
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

                  {/* Calculations */}
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

                  {/* Checklist value items */}
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
        )}

        {view === "success" && (
          // SUCCESS / ENROLLMENT CONFIRMED SCREEN
          <div className="cohort-success bg-white rounded-[24px] border border-[#e2e8f0] p-0 shadow-sm text-center max-w-[864px] w-full mx-auto relative overflow-hidden">
            {/* Header check circle badge */}
            <div className="success-header w-full flex flex-col items-center border-b border-[#f1f5f9] px-6 py-12 sm:px-16 sm:py-16">
            <div className="w-20 h-20 rounded-full bg-[#10b981] border-0 flex items-center justify-center mx-auto mb-4 shadow-sm shadow-emerald-500/10">
              <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
              Welcome Rahul – You&apos;re in! 🎉
            </h2>

            <p className="text-[#475569] text-sm sm:text-lg font-semibold mt-2.5 max-w-[672px] mx-auto leading-7">
              Your payment succeeded and enrollment is confirmed. Order <strong className="text-gray-800 font-bold">#CAI-ML-2026-8842</strong> - Cohort starts Dec 2
            </p>

            <span className="bg-[#ecfdf5] text-[#047857] border border-[#d1fae5] text-[10px] sm:text-sm font-semibold py-2 px-4 rounded-full mt-4 inline-block">
              ● Payment via UPI @okaxis - razorpay_9XyZ123
            </span>
            </div>

            {/* Profile sync box */}
            <div className="success-body mt-0 p-6 sm:p-12 text-left">
                <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                      <h4 className="text-base sm:text-xl font-extrabold text-[#0f172a] tracking-tight leading-7">
                    Connect your developer profiles to personalize your AI/ML journey
                  </h4>
                  <p className="text-[10px] font-semibold text-gray-400 mt-0.5 leading-snug">
                    We use these to tailor DSA, projects & job matches. Takes 30 seconds each.
                  </p>
                </div>
                  <span className="bg-[#eef2ff] border border-[#e0e7ff] text-[#4f46e5] text-[10px] font-semibold py-1.5 px-3 rounded-md shrink-0">
                  ✨ AI Personalized
                </span>
              </div>

              {/* Profiles Checklist cards */}
              <div className="space-y-3.5">
                {/* LC */}
                <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isLeetCodeConnected ? "bg-[#fff7ed] border border-[#fed7aa]" : "bg-white border border-[#e2e8f0]"}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#ffa116] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      LC
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black text-gray-800 leading-tight flex items-center gap-2">
                        Connect LeetCode
                        {isLeetCodeConnected && <span className="bg-[#d1fae5] text-[#047857] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                      </h5>
                      <p className="text-[9px] font-bold text-gray-400 leading-tight mt-0.5">
                        Sync DSA problems, track 500+ problems for ML interviews - Streak & rating
                      </p>
                      
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="bg-gray-50 text-gray-500 text-[8px] font-bold py-0.5 px-2 rounded-md">
                          DSA for ML Interviews
                        </span>
                        <span className="bg-gray-50 text-gray-500 text-[8px] font-bold py-0.5 px-2 rounded-md">
                          Track Progress
                        </span>
                      </div>
                    </div>
                  </div>

                  {isLeetCodeConnected ? (
                    <div className="border-t border-[#fed7aa] pt-3 text-[9px] font-bold text-[#475569] flex items-center justify-between">
                      <span>@rahul_coder · 120 problems synced · Contest 1642 · Streak 12 days</span>
                      <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center">✓</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                      <input type="text" defaultValue="rahul_coder" className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none" />
                      <button type="button" onClick={handleConnectLeetCode} className="text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 bg-gray-900 hover:bg-black text-white cursor-pointer">Connect</button>
                    </div>
                  )}
                </div>

                {/* GitHub */}
                <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isGitHubConnected ? "bg-[#0f172a] border border-[#0f172a] text-white shadow-md" : "bg-white border border-[#e2e8f0]"}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className={`text-[11px] font-black leading-tight flex items-center gap-2 ${isGitHubConnected ? "text-white" : "text-gray-800"}`}>
                        Connect GitHub
                        {isGitHubConnected && <span className="bg-[#064e3b] text-[#6ee7b7] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                      </h5>
                      <p className={`text-[9px] font-bold leading-tight mt-0.5 ${isGitHubConnected ? "text-slate-400" : "text-gray-400"}`}>
                        Sync repos, auto-track ML projects, commits, contributions
                      </p>
                      
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                          ml-projects
                        </span>
                        <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                          rag-chatbot
                        </span>
                        <span className={`${isGitHubConnected ? "bg-[#1e293b] text-slate-300 border-[#334155]" : "bg-gray-50 text-gray-500 border-transparent"} border text-[8px] font-bold py-0.5 px-2 rounded-md`}>
                          transformer-from-scratch
                        </span>
                      </div>
                    </div>
                  </div>

                  {isGitHubConnected ? (
                    <div className="border-t border-[#1e293b] pt-3 text-[9px] font-bold text-slate-300">
                      @rahul_kumar · 24 repos · 342 contributions this year
                    </div>
                  ) : <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                    <input
                      type="text"
                      defaultValue="rahul_coder"
                      className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleConnectGitHub}
                      disabled={isGitHubConnected}
                      className={`text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 ${
                        isGitHubConnected
                          ? "bg-emerald-50 text-emerald-600 cursor-not-allowed"
                          : "bg-gray-900 hover:bg-black text-white cursor-pointer"
                      }`}
                    >
                      {isGitHubConnected ? "Connected" : "Connect with GitHub"}
                    </button>
                  </div>}
                </div>

                {/* LinkedIn */}
                <div className={`p-6 rounded-2xl flex flex-col gap-6 ${isLinkedInConnected ? "bg-[#eef4ff] border border-[#c7d8ff]" : "bg-white border border-[#e2e8f0]"}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black text-gray-800 leading-tight flex items-center gap-2">
                        Connect LinkedIn
                        {isLinkedInConnected && <span className="bg-[#dbeafe] text-[#2563eb] text-[8px] px-2 py-0.5 rounded-full">CONNECTED</span>}
                      </h5>
                      <p className="text-[9px] font-bold text-gray-400 leading-tight mt-0.5">
                        Get AI-powered profile optimization, job matching, referral network
                      </p>
                    </div>
                  </div>

                  {isLinkedInConnected ? (
                    <div className="border-t border-[#c7d8ff] pt-3 text-[9px] font-bold text-[#334155] flex items-center justify-between">
                      <span>RK · Rahul Kumar · 500+ connections · Profile strength 78%</span><span className="text-[#2563eb]">♙</span>
                    </div>
                  ) : <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                    <input
                      type="text"
                      defaultValue="rahul_coder"
                      className="flex-1 sm:w-36 bg-gray-50 border border-gray-100 rounded-xl py-2 px-3.5 text-xs font-semibold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleConnectLinkedIn}
                      disabled={isLinkedInConnected}
                      className={`text-[10px] font-black py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 ${
                        isLinkedInConnected
                          ? "bg-emerald-50 text-emerald-600 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                      }`}
                    >
                      {isLinkedInConnected ? "Connected" : "Connect LinkedIn"}
                    </button>
                  </div>}
                </div>
              </div>

              {/* Progress Completion indicator */}
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e2e8f0] flex flex-col gap-3 mt-6 text-left">
                <div className="flex items-center justify-between text-[10px] font-black">
                  <span className="text-[#2B50EC] uppercase tracking-wider">
                    Profile Completion - {profileProgress}%
                  </span>
                  <span className="text-gray-400">Complete all 3 to unlock dashboard modules</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300" style={{ width: `${profileProgress}%` }} />
                </div>
              </div>

              {/* Actions navigation links */}
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/dashboard"
                  className="bg-[#2B50EC] hover:bg-[#1E3BB3] text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-1.5 w-full sm:flex-1 cursor-pointer"
                >
                  <span>Go to Dashboard</span>
                  <span>→</span>
                </Link>

                <button type="button" onClick={handleViewReceipt} className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all border border-[#e2e8f0] shadow-sm flex items-center justify-center gap-1.5 w-full sm:flex-1 cursor-pointer">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Receipt</span>
                </button>
              </div>

              <span className="text-[10px] font-bold text-[#64748b] block text-center mt-1">
                Need help? <a href="mailto:support@consistency.ai" className="text-[#2B50EC] hover:underline">support@consistency.ai</a> - Response in 2 hours
              </span>

            </div>

          </div>
        )}

        {view === "receipt" && (
          <div className="w-full max-w-[896px] mx-auto text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-8">
              <button type="button" onClick={() => setView("success")} className="bg-white border border-[#e2e8f0] shadow-sm rounded-full px-4 py-2 text-xs font-semibold text-[#334155]">← Back to Success</button>
              <span className="text-xs text-[#64748b]">✉ Email preview · Gmail-style</span>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] shadow-sm rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 px-2 pb-4 text-[10px] text-[#94a3b8] font-semibold">
                <span className="w-3 h-3 rounded-full bg-[#f87171]" /><span className="w-3 h-3 rounded-full bg-[#fbbf24]" /><span className="w-3 h-3 rounded-full bg-[#4ade80]" />
                <span className="pl-2">Gmail · Inbox · Payment Receipt</span>
              </div>
              <article className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm overflow-hidden">
                <header className="border-b border-[#f1f5f9] p-6 sm:p-8 space-y-4">
                  <div className="text-xs leading-5"><p><span className="text-[#94a3b8] inline-block w-12">From:</span><strong>Consistency AI</strong> <span className="text-[#475569]">&lt;billing@consistency.ai&gt;</span></p><p><span className="text-[#94a3b8] inline-block w-12">To:</span><strong>rahul@example.com</strong></p></div>
                  <h1 className="break-words text-lg sm:text-xl font-black text-[#0f172a]">Subject: Payment Receipt &amp; Enrollment Confirmed — AI/ML Mastery Cohort</h1>
                  <div className="flex flex-wrap items-center gap-3"><span className="bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] px-3 py-1 rounded-full text-[10px] font-bold">Payment Successful</span><span className="text-xs text-[#64748b]">Dec 15, 2026 · 11:42 AM IST</span></div>
                </header>
                <div className="p-6 sm:p-8 space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex flex-col items-center justify-center text-[9px] font-black">C<span className="text-[#60a5fa]">AI</span></div><div><h2 className="font-black text-[#0f172a]">Consistency AI</h2><p className="text-xs text-[#64748b]">AI/ML Mastery Cohort</p></div></div><span className="bg-[#059669] text-white rounded-full px-3 py-1.5 text-[10px] font-black">✓ PAYMENT SUCCESSFUL</span></div>
                  <div><h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">Hello Rahul, You&apos;re enrolled! 🎉</h2><p className="mt-3 text-sm leading-6 text-[#475569]">Thank you for joining the <strong className="text-[#0f172a]">AI/ML Mastery 12-Week Cohort</strong>. Your payment of <strong className="text-[#0f172a]">$529.82</strong> was successful via Razorpay UPI. Your seat is confirmed.</p></div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#e2e8f0] rounded-xl overflow-hidden text-xs"><div className="p-4 bg-[#f8fafc]"><b className="block text-[9px] text-[#64748b]">ORDER ID</b>#CAI-ML-2026-8842</div><div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">DATE</b>Dec 15, 2026</div><div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">COHORT</b>AI/ML · Dec 2 Batch</div><div className="p-4 border-l border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">AMOUNT</b>$529.82 incl. GST</div><div className="p-4 border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">PAYMENT METHOD</b>UPI @okaxis · 98xx10</div><div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">TRANSACTION ID</b>razorpay_9XyZ123</div><div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">GSTIN</b>29AABCU9603R1ZX</div><div className="p-4 border-l border-t border-[#e2e8f0]"><b className="block text-[9px] text-[#64748b]">INVOICE</b>INV-8842</div></div>
                  <div><h3 className="text-xs font-black text-[#0f172a] mb-3">What you paid for</h3><ul className="space-y-2 text-xs text-[#475569]"><li className="flex gap-2"><span className="text-[#10b981]">⊙</span>12 Weeks of Live Sessions + Lifetime Recordings</li><li className="flex gap-2"><span className="text-[#10b981]">⊙</span>3 Capstone Projects: RAG Chatbot, Transformer, MLOps Pipeline</li><li className="flex gap-2"><span className="text-[#10b981]">⊙</span>FAANG ML Interview Prep + Mock Interviews</li></ul></div>
                </div>
              </article>
            </div>
          </div>
        )}

      </main>
      
      {/* Footer stripe */}
      <footer className="bg-[#f1f5f9] border-t border-[#e2e8f0] py-5 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-[9px] font-bold text-[#64748b] mt-auto select-none shrink-0">
        <span>Payments secured by Razorpay • 256-bit SSL • PCI DSS Compliant</span>
        <span>© 2026 Consistency AI • GSTIN 29AABCU9603R1ZX</span>
      </footer>
    </div>
  );
}
