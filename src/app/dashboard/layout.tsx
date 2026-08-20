"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import OnboardingWizard from "./components/OnboardingWizard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Read from localStorage on mount
    const onboarded = localStorage.getItem("isOnboarded") === "true";
    setIsOnboarded(onboarded);
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("isOnboarded", "true");
    setIsOnboarded(true);
  };

  // Avoid flash before reading state from localStorage
  if (isOnboarded === null) {
    return <div className="min-h-screen bg-[#F8F9FC]" />;
  }

  // If not onboarded, show the Onboarding wizard (starts at Quiz step 4)
  if (!isOnboarded) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />;
  }

  const navItems = [
    {
      name: "Home", href: "/dashboard", icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "AI Tools", href: "/dashboard/ai-tools", locked: true, icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Projects", href: "/dashboard/projects", locked: true, icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: "Events", href: "/dashboard/events", icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Community", href: "#", icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: "Jobs", href: "/dashboard/jobs", locked: true, icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Settings", href: "#", locked: true, icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col md:flex-row font-sans text-gray-800 antialiased">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white  shrink-0 flex flex-col justify-between p-4 shadow-sm">
        <div>
          {/* Brand Header */}
          <div className="h-16 flex items-center justify-between px-2 border-b border-gray-100 mb-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 bg-white p-1 overflow-hidden shrink-0">
                <img src="/logo.png" alt="Consistency AI" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-gray-900 text-base tracking-tight">Consistency AI</span>
            </Link>
            <span className="bg-blue-50 text-[#2B50EC] text-[8px] font-black uppercase tracking-wider py-0.5 px-2 rounded-md">
              Free Access
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 px-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-black transition-all ${isActive
                      ? "bg-[#2B50EC] text-white shadow-md shadow-blue-500/10"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {item.locked && !isActive && (
                    <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Cards */}
        <div className="mt-8 space-y-4 px-1">
          {/* Upgrade Card Promo */}
          <div className="bg-[#2B50EC]/5 border border-[#2B50EC]/10 rounded-2xl p-4 flex flex-col items-start text-left relative overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#2B50EC]/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xs font-black text-gray-800 mb-1">Upgrade for More</h4>
            <p className="text-[10px] font-bold text-gray-400 leading-snug mb-3">
              Unlock AI Mentor, Projects, Certificates & more.
            </p>
            <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-xs font-black transition-colors outline-none">
              Upgrade Now
            </button>
          </div>

          {/* Log out / Sign up trigger */}
          <button
            onClick={() => {
              localStorage.removeItem("isOnboarded");
              window.location.reload();
            }}
            className="w-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl text-xs font-black transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Log in / Sign up</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Workspace Top Header */}
        <header className="sticky top-0 z-50 h-20 bg-white flex items-center justify-between px-6 sm:px-8 shrink-0 shadow-sm text-left">
          <div>
            <h1 className="text-base font-black text-gray-800 tracking-tight flex items-center gap-1.5">
              Good morning, Santhosh <span className="animate-bounce">👋</span>
            </h1>
            <p className="text-[11px] font-bold text-gray-400">
              Let&apos;s learn, build and grow together.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {/* Search Input Box */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search cohorts, topics..."
                className="w-64 bg-gray-50 border border-gray-200/80 rounded-xl py-2 pl-9 pr-10 text-xs font-semibold focus:outline-none focus:border-blue-300 focus:bg-white transition-all shadow-inner"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <kbd className="absolute right-3.5 top-2 bg-white border border-gray-200 text-gray-400 text-[9px] px-1.5 py-0.5 rounded shadow-sm font-sans font-black">
                ⌘K
              </kbd>
            </div>

            {/* Notification Bell */}
            <button className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors relative cursor-pointer">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>

            {/* User Profile avatar info */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-xs shadow-md shadow-purple-600/10">
                RK
              </div>
              <div className="hidden lg:block">
                <h4 className="text-xs font-black text-gray-800 leading-tight">Rahul K</h4>
                <span className="text-[10px] font-bold text-gray-400 leading-tight block">
                  rahul.k@gmail.com
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Inner Tab workspace page views */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
