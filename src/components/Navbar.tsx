"use client";

import Link from "next/link";
import React, { useState } from "react";
import { logoPng, textPng } from "@/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-3 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl px-1 sm:px-2 md:px-6">
      <nav className="bg-[#F7F7F7]/80 backdrop-blur-2xl border border-white/80 rounded-2xl md:rounded-full pl-3 pr-2 py-2 md:pl-6 md:pr-3 md:py-2.5 flex items-center justify-between shadow-lg shadow-black/5">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-1 md:ml-2">
          <img src={logoPng.src} alt="Consistency.AI Logo" className="h-7 md:h-8 w-auto object-contain" />
          <img src={textPng.src} alt="Consistency.AI" className="hidden sm:block h-6 md:h-8 w-auto object-contain ml-2" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-10 pr-6 lg:pr-10 text-[14px] lg:text-[15px] font-bold text-[#6b7280]">
          <Link href="#problem" className="hover:text-[#111827] transition-colors">Problem</Link>
          <Link href="#solution" className="hover:text-[#111827] transition-colors">Solution</Link>
          <Link href="#how-it-works" className="hover:text-[#111827] transition-colors">How It Works</Link>
          <Link href="#recruiters" className="hover:text-[#111827] transition-colors">For Recruiters</Link>
          <Link href="#faq" className="hover:text-[#111827] transition-colors">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/login"
            className="inline-block bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] text-white px-4 py-1.5 md:px-10 md:py-2.5 rounded-full text-[13px] md:text-[14px] font-semibold hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] transition-all"
          >
            Log in
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-200/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-4 shadow-xl flex flex-col gap-3 font-semibold text-[#374151] text-[15px] animate-in fade-in slide-in-from-top-2 duration-200">
          <Link href="#problem" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">Problem</Link>
          <Link href="#solution" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">Solution</Link>
          <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">How It Works</Link>
          <Link href="#recruiters" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">For Recruiters</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">FAQ</Link>
        </div>
      )}
    </div>
  );
}
