import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl px-2 md:px-6 ">
      <nav className="bg-[#F7F7F7]/20 backdrop-blur-2xl border border-white rounded-full pl-4 pr-2 py-2 md:pl-6 md:pr-3 md:py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-1 md:ml-2">
          <img src="/logo.png" alt="Consistency.AI Logo" className="h-7 md:h-8 w-auto object-contain" />
          <img src="/text.png" alt="Consistency.AI" className="hidden sm:block h-6 md:h-8 w-auto object-contain ml-2" />
        </Link>

       

        {/* Links */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8 lg:gap-10 pr-10 text-[15px] font-bold text-[#6b7280]">
          <Link href="#problem" className="hover:text-[#111827] transition-colors">Problem</Link>
          <Link href="#solution" className="hover:text-[#111827] transition-colors">Solution</Link>
          <Link href="#how-it-works" className="hover:text-[#111827] transition-colors">How It Works</Link>
          <Link href="#recruiters" className="hover:text-[#111827] transition-colors">For Recruiters</Link>
          <Link href="#faq" className="hover:text-[#111827] transition-colors">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="shrink-0">
          <Link
            href="#"
            className="inline-block bg-[#0055FF] bg-linear-to-r from-[#0066FF] to-[#0044FF] text-white px-5 py-2 md:px-12 md:py-2.5 rounded-full text-[13px] md:text-[14px] font-semibold hover:shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] hover:translate-y-[-0.5px] transition-all"
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
}
