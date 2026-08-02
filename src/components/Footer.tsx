"use client";

import React from "react";
import Link from "next/link";

const PLATFORM_LINKS = ["AI Mentor", "Consistency Engine", "Roadmaps", "Cohorts", "Playground"];
const COMPANY_LINKS = ["Home", "About", "Service", "Testimonials", "Career"];
const LEGAL_LINKS = ["Privacy Policy", "Cookie Policy", "Disclaimer", "Copyright"];

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L1 2h7.4l5.1 6.7L18.9 2Zm-1.3 18h2l-12.4-16.4H5.1L17.6 20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .3-1.7 1.7-1.7H16.6V3.1C16.3 3 15.3 3 14.2 3c-2.4 0-4.1 1.5-4.1 4.2v2.8H7.5v3.5h2.6V22h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21H9.4V8.75Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "X", icon: <XIcon /> },
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "LinkedIn", icon: <LinkedInIcon /> },
];

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-gray-900 text-base font-bold font-sans mb-4">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[#64748B] text-sm font-sans hover:text-[#2563EB] transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Left — logo, tagline, socials */}
          <div>
            <Link href="/" className="flex items-center mb-5">
              <img src="/logo.png" alt="Consistency.AI Logo" className="h-8 w-auto object-contain" />
              <img src="/text.png" alt="Consistency.AI" className="h-7 w-auto object-contain ml-2" />
            </Link>
            <p className="text-[#64748B] text-base leading-relaxed max-w-xs mb-6 font-sans">
              Talent gets you started.
              <br />
              Consistency gets you hired
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex items-center justify-center size-11 rounded-full ring-1 ring-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-20">
            <FooterColumn title="Platform" links={PLATFORM_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal Links" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-gray-900 text-sm font-sans">© Consistency .Ai . All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-gray-900 text-sm font-medium font-sans"
          >
            Back to top
            <span className="flex items-center justify-center size-9 rounded-full ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              <ArrowUpIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-16 right-24 text-gray-200 pointer-events-none">
        <SparkleIcon />
      </div>
    </footer>
  );
}
