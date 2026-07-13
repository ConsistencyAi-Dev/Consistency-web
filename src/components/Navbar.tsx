import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl px-2 md:px-6">
      <nav className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-full pl-6 pr-3 py-2.5 flex items-center justify-between shadow-[0_24px_60px_-12px_rgba(37,99,235,0.15)]">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-2">
          <img src="/logo.png" alt="Consistency.AI Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8 lg:gap-10 pr-10 text-[13px] font-medium text-[#6b7280]">
          <Link href="#problem" className="hover:text-[#111827] transition-colors">Problem</Link>
          <Link href="#solution" className="hover:text-[#111827] transition-colors">Solution</Link>
          <Link href="#how-it-works" className="hover:text-[#111827] transition-colors">How It Works</Link>
          <Link href="#recruiters" className="hover:text-[#111827] transition-colors">For Recruiters</Link>
          <Link href="#faq" className="hover:text-[#111827] transition-colors">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="shrink-0">
          <Link
            href="/login"
            className="inline-block bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] text-white px-8 py-2.5 rounded-full text-[14px] font-semibold hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] hover:translate-y-[-0.5px] transition-all"
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
}
