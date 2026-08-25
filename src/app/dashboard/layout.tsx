"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OnboardingWizard from "./components/OnboardingWizard";
import {
  brandMarkSvg,
  navHomeSvg, navAiToolsSvg, navProjectsSvg, navEventsSvg, navCommunitySvg, navSettingsSvg,
  iconLockSvg, iconBoltSvg, iconSearchSvg, iconBellSvg,
} from "@/assets";

type NavItem = {
  name: string;
  href: string;
  icon: StaticImageData;
  locked?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home",      href: "/dashboard",          icon: navHomeSvg },
  { name: "AI Tools", href: "/dashboard/ai-tools",  icon: navAiToolsSvg, locked: true },
  { name: "Projects", href: "/dashboard/projects",  icon: navProjectsSvg, locked: true },
  { name: "Events",   href: "/dashboard/events",    icon: navEventsSvg },
  { name: "Community",href: "/dashboard/community", icon: navCommunitySvg },
  { name: "Mentors",  href: "/dashboard/mentors",   icon: navProjectsSvg },
  { name: "Jobs",     href: "/dashboard/jobs",       icon: navProjectsSvg, locked: true },
  { name: "Settings", href: "/dashboard/settings",  icon: navSettingsSvg },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onboarded = localStorage.getItem("isOnboarded") === "true";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOnboarded(onboarded);
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("isOnboarded", "true");
    setIsOnboarded(true);
  };

  if (isOnboarded === null) {
    return <div className="min-h-screen bg-[#F9FBFF]" />;
  }

  if (!isOnboarded) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#F9FBFF] text-[#0F172A]">
      <div className="flex min-h-screen md:h-screen flex-col md:flex-row md:overflow-hidden">
        <aside className="w-full border-r border-[#E2E8F0] bg-[#F9FBFF] md:fixed md:top-0 md:bottom-0 md:left-0 md:z-30 md:w-64 md:h-screen md:overflow-y-auto md:overflow-x-hidden md:flex md:flex-col md:justify-between">
          <div>
            <div className="flex items-center gap-2.5 px-5 py-4">
              <div className="relative h-[36px] w-[36px] rounded-[6px] bg-[linear-gradient(48.1deg,#2B50EC_27.45%,#61D3F9_94.96%)]">
                <Image src={brandMarkSvg} alt="Consistency AI" width={20} height={20} className="absolute left-[8px] top-[8px]" />
              </div>
              <div>
                <p className="text-[15px] leading-6 tracking-tight text-[#0F172A]">Consistency AI</p>
                <span className="inline-flex rounded-full bg-[rgba(43,80,236,0.1)] px-2 py-0.5 text-[9px] uppercase leading-[12px] text-[#2B50EC]">
                  FREE ACCESS
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-1 px-3 pb-3 pt-1">
              {navItems.map((item) => {
                const isActive = item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex h-9 w-full items-center justify-between rounded-lg px-2.5 py-1.5 transition-colors ${
                      isActive ? "bg-[#2B50EC] text-white" : "text-[#64748B] hover:bg-[#EEF2FF]"
                    } ${!isActive && item.locked ? "opacity-60" : ""}`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Image
                        src={item.icon}
                        alt=""
                        width={15}
                        height={15}
                        className={isActive ? "brightness-0 invert" : ""}
                      />
                      <span className="text-[13px] leading-5">{item.name}</span>
                    </span>
                    {item.locked && !isActive && (
                      <Image src={iconLockSvg} alt="Locked" width={8} height={10} />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 p-3">
            <div className="relative rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[rgba(43,80,236,0.05)]" />
              <div className="relative z-10">
                <div className="mb-[6px] flex h-7 w-7 items-center justify-center rounded-md bg-[rgba(43,80,236,0.1)]">
                  <Image src={iconBoltSvg} alt="Upgrade" width={10} height={12} />
                </div>
                <p className="pt-1.5 text-[12px] leading-4 text-[#0F172A]">Upgrade for More</p>
                <p className="pb-2.5 text-[10px] leading-[15px] text-[#64748B]">
                  Unlock AI Mentor, Projects,<br />
                  Certificates &amp; more.
                </p>
                <button className="w-full rounded-lg border border-[rgba(43,80,236,0.2)] bg-[rgba(43,80,236,0.05)] px-1 py-[7px] text-[11px] leading-4 text-[#2B50EC] transition-colors hover:bg-[rgba(43,80,236,0.08)]">
                  Upgrade Now
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("isOnboarded");
                router.push("/login");
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white py-2 text-[12px] leading-4 text-[#475569] transition-colors hover:bg-[#FEF2F2] hover:text-[#EF4444] hover:border-[#FECACA] group"
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

        <div className="flex min-h-screen md:h-screen flex-1 flex-col bg-[#F9FBFF] md:ml-64 md:overflow-hidden">
          <header className="flex min-h-[76px] items-center justify-between border-b border-[#E2E8F0] bg-white px-6 py-3.5 md:px-8">
            <div>
              <h1 className="text-[18px] md:text-[20px] leading-7 text-[#0F172A]">Good morning, Santhosh 👋</h1>
              <p className="text-[13px] md:text-[14px] leading-5 text-[#64748B]">Let&apos;s learn, build and grow together.</p>
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
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_100%)] text-[12px] leading-[18px] text-white">
                  RK
                </div>
                <div>
                  <p className="text-[13px] leading-[13px] text-[#0F172A]">Rahul K</p>
                  <p className="text-[11px] leading-[11px] text-[#64748B]">rahul.k@gmail.com</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
