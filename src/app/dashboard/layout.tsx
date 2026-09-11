"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OnboardingWizard from "./components/OnboardingWizard";
import DashboardLoading from "./components/DashboardLoading";
import {
  brandMarkSvg,
  iconLockSvg, iconBoltSvg, iconSearchSvg, iconBellSvg,
} from "@/assets";

type NavItem = {
  name: string;
  href: string;
  icon: "home" | "ai" | "folder" | "calendar" | "users" | "graduation" | "briefcase" | "settings";
  locked?: boolean;
  comingSoon?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/dashboard", icon: "home" },
  { name: "AI Tools", href: "/dashboard/ai-tools", icon: "ai" },
  { name: "Projects", href: "/dashboard/projects", icon: "folder" },
  { name: "Events", href: "/dashboard/events", icon: "calendar" },
  { name: "Community", href: "/dashboard/community", icon: "users" },
  { name: "Mentors", href: "/dashboard/mentors", icon: "graduation" },
  { name: "Jobs", href: "/dashboard/jobs", icon: "briefcase" },
  { name: "Settings", href: "/dashboard/settings", icon: "settings" },
];

function NavIcon({ type, active }: { type: NavItem["icon"]; active: boolean }) {
  const color = active ? "#FFFFFF" : "#64748B";
  const commonProps = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  switch (type) {
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "ai":
      return (
        <svg {...commonProps}>
          <path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5" />
          <path d="M6.4 6.4l1.8 1.8M15.8 15.8l1.8 1.8M6.4 17.6l1.8-1.8M15.8 8.2l1.8-1.8" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "folder":
      return (
        <svg {...commonProps}>
          <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h3l1.5 2H18a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
          <circle cx="10" cy="7" r="3" />
          <path d="M20 19v-1a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...commonProps}>
          <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
          <path d="M7 11.5v4.2c0 1.2 2.2 2.3 5 2.3s5-1.1 5-2.3v-4.2" />
          <path d="M21 9.5v6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M3 12h18" />
        </svg>
      );
    case "settings":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.95l.06.06A2 2 0 1 1 17.8 19.8l-.08-.08A1.8 1.8 0 0 0 15.77 20a1.8 1.8 0 0 0-1.22 1.05l-.2.58a1.9 1.9 0 0 1-3.7 0l-.2-.58A1.8 1.8 0 0 0 9.23 20a1.8 1.8 0 0 0-1.93.78l-.08.08A2 2 0 1 1 4.8 17.8l.08-.08A1.8 1.8 0 0 0 4 15.77a1.8 1.8 0 0 0-1.05-1.22l-.58-.2a1.9 1.9 0 0 1 0-3.7l.58-.2A1.8 1.8 0 0 0 4 9.23a1.8 1.8 0 0 0-.78-1.93l-.08-.08A2 2 0 1 1 6.2 4.8l.08.08A1.8 1.8 0 0 0 8.23 4a1.8 1.8 0 0 0 1.22-1.05l.2-.58a1.9 1.9 0 0 1 3.7 0l.2.58A1.8 1.8 0 0 0 14.77 4a1.8 1.8 0 0 0 1.93-.78l.08-.08A2 2 0 1 1 19.2 6.2l-.08.08A1.8 1.8 0 0 0 20 8.23a1.8 1.8 0 0 0 1.05 1.22l.58.2a1.9 1.9 0 0 1 0 3.7l-.58.2A1.8 1.8 0 0 0 20 14.77Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    id?: string;
    name?: string;
    email?: string;
    role?: string;
  } | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loadUser = () => {
      try {
        const stored = localStorage.getItem("auth_user");
        if (stored) {
          const user = JSON.parse(stored);
          setCurrentUser(user);
          const onboarded = user.isOnboarded === true || localStorage.getItem("isOnboarded") === "true";
          setIsOnboarded(onboarded);
        } else {
          const onboarded = localStorage.getItem("isOnboarded") === "true";
          setIsOnboarded(onboarded);
        }
      } catch (e) {
        setIsOnboarded(false);
      }
    };

    loadUser();

    window.addEventListener("auth_user_updated", loadUser);
    window.addEventListener("storage", loadUser);
    return () => {
      window.removeEventListener("auth_user_updated", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const getInitials = (name?: string) => {
    if (!name) return "U";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem("isOnboarded", "true");
    setIsOnboarded(true);
    try {
      const stored = localStorage.getItem("auth_user");
      if (stored) {
        const user = JSON.parse(stored);
        user.isOnboarded = true;
        localStorage.setItem("auth_user", JSON.stringify(user));
        setCurrentUser(user);
      }
    } catch (e) { }
  };

  if (isOnboarded === null) {
    return <DashboardLoading />;
  }

  if (!isOnboarded) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#F9FBFF] text-[#0F172A]">
      <div className="flex min-h-screen md:h-screen flex-col md:flex-row md:overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`w-full border-r border-[#E2E8F0] bg-[#F9FBFF] md:fixed md:top-0 md:bottom-0 md:left-0 md:z-30 md:w-[220px] md:h-screen md:overflow-y-auto md:overflow-x-hidden md:flex md:flex-col md:justify-between no-scrollbar ${
            isMobileSidebarOpen ? "block" : "hidden md:flex"
          }`}
        >
          <div>
            <div className="flex items-center justify-between px-4 py-3.5">
              <div className="flex items-center gap-2">
                <div className="relative h-[32px] w-[32px] rounded-[6px] bg-[linear-gradient(48.1deg,#2B50EC_27.45%,#61D3F9_94.96%)]">
                  <Image src={brandMarkSvg} alt="Consistency AI" width={18} height={18} className="absolute left-[7px] top-[7px]" />
                </div>
                <div>
                  <p className="text-[14px] leading-5 font-bold tracking-tight text-[#0F172A]">Consistency AI</p>
                  <span className="inline-flex rounded-full bg-[rgba(43,80,236,0.1)] px-1.5 py-0.5 text-[8.5px] uppercase leading-[11px] text-[#2B50EC]">
                    FREE ACCESS
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="md:hidden p-1 rounded-lg text-gray-500 hover:bg-gray-200/50"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 px-3 pb-2 pt-2">
              {navItems.map((item) => {
                const isActive = item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className={`flex h-[40px] w-full items-center gap-2.5 rounded-lg px-2.5 transition-colors ${
                      isActive ? "bg-[#2B50EC] text-white shadow-[0px_3px_10px_rgba(43,80,236,0.2)]" : "text-[#64748B] hover:bg-[#EEF2FF]"
                    }`}
                  >
                    <span className="flex h-[16px] w-[16px] items-center justify-center shrink-0">
                      <NavIcon type={item.icon} active={isActive} />
                    </span>
                    <span className="text-[14px] leading-5 font-normal">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-2.5 p-3">
            <div className="relative rounded-xl border border-[#E2E8F0] bg-white p-2.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[rgba(43,80,236,0.05)]" />
              <div className="relative z-10">
                <div className="mb-[6px] flex h-7 w-7 items-center justify-center rounded-md bg-[rgba(43,80,236,0.1)]">
                  <Image src={iconBoltSvg} alt="Upgrade" width={10} height={12} />
                </div>
                <p className="pt-1.5 text-[12px] leading-4 text-[#0F172A]">Upgrade for More</p>
                <p className="pb-2 text-[10px] leading-[14px] text-[#64748B]">
                  Unlock AI Mentor, Projects,<br />
                  Certificates &amp; more.
                </p>
                <Link
                  href="/cohort-enroll"
                  prefetch={true}
                  className="block text-center w-full rounded-lg border border-[rgba(43,80,236,0.2)] bg-[rgba(43,80,236,0.05)] px-1 py-[6px] text-[11px] leading-4 text-[#2B50EC] transition-colors hover:bg-[rgba(43,80,236,0.08)]"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("isOnboarded");
                router.push("/login");
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white py-1.5 text-[12px] leading-4 text-[#475569] transition-colors hover:bg-[#FEF2F2] hover:text-[#EF4444] hover:border-[#FECACA] group"
            >
              <svg className="h-[10.5px] w-[10.5px] text-[#475569] group-hover:text-[#EF4444] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen md:h-screen flex-1 flex-col bg-[#F9FBFF] md:ml-[220px] md:overflow-hidden">
          <header className="flex min-h-[64px] md:min-h-[76px] items-center justify-between border-b border-[#E2E8F0] bg-white px-4 md:px-8 py-3.5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                className="md:hidden p-1.5 rounded-lg border border-[#E2E8F0] text-[#0F172A]"
                aria-label="Toggle sidebar menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 className="text-[16px] md:text-[20px] leading-6 md:leading-7 text-[#0F172A] font-semibold">
                  Good morning, {currentUser?.name?.split(" ")[0] || "Learner"} 👋
                </h1>
                <p className="text-[12px] md:text-[14px] leading-4 md:leading-5 text-[#64748B]">Let&apos;s learn, build and grow together.</p>
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex h-9 items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-[13px] py-px">
                <Image src={iconSearchSvg} alt="Search" width={16} height={16} />
                <span className="pr-6 text-[13px] leading-[19.5px] text-[#64748B]">Search cohorts, topics...</span>
                <kbd className="rounded border border-[#E5E7EB] bg-white px-[7px] py-[3px] text-[11px] leading-[16.5px] text-[#64748B]">
                  ⌘K
                </kbd>
              </div>

              <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white">
                <Image src={iconBellSvg} alt="Notifications" width={16} height={16} />
                <span className="absolute right-[10px] top-[8px] h-2 w-2 rounded-full border-2 border-white bg-[#EF4444]" />
              </button>

              <div className="h-6 w-px bg-[#E2E8F0]" />

              <div className="flex items-center gap-[10px] pl-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_100%)] text-[12px] leading-[18px] text-white font-bold">
                  {getInitials(currentUser?.name)}
                </div>
                <div>
                  <p className="text-[13px] leading-[13px] text-[#0F172A] font-medium">{currentUser?.name || "John Doe"}</p>
                  <p className="text-[11px] leading-[11px] text-[#64748B]">{currentUser?.email || "john.doe@gmail.com"}</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
