"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { arrowRight14Svg } from "@/assets";
import { COHORTS_DATA } from "./components/home/dashboardData";
import DashboardHeroBanner from "./components/home/DashboardHeroBanner";
import LearningPathCard from "./components/home/LearningPathCard";
import CohortCard from "./components/home/CohortCard";
import UpcomingWorkshopsCard from "./components/home/UpcomingWorkshopsCard";
import FreeVsProCard from "./components/home/FreeVsProCard";
import DashboardSidebarWidgets from "./components/home/DashboardSidebarWidgets";

export default function DashboardPage() {
  const [userName, setUserName] = useState("John");
  const [userGoal, setUserGoal] = useState("Get a Job in 6 months");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("auth_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.name) {
          setUserName(parsed.name.split(" ")[0]);
        }
        if (parsed.goals?.mainGoal) {
          setUserGoal(parsed.goals.mainGoal);
        }
      }
    } catch (e) {}
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 text-left">
      {/* Top Welcome Banner */}
      <DashboardHeroBanner userName={userName} userGoal={userGoal} />

      {/* Main Grid: Left content (2 cols), Right sidebar (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-start">
        {/* Left Column contents */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Card 1: AI Learning Path */}
          <LearningPathCard />

          {/* Card 2: Top Cohorts Grid */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-800 tracking-tight">Top Cohorts For You</h3>
              <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2B50EC] hover:text-[#1E3BB3] transition-colors cursor-pointer">
                <span>View all</span>
                <Image src={arrowRight14Svg} alt="Arrow" width={14} height={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {COHORTS_DATA.map((cohort, idx) => (
                <CohortCard key={idx} cohort={cohort} />
              ))}
            </div>
          </div>

          {/* Card 3: Upcoming Free Workshops */}
          <UpcomingWorkshopsCard />

          {/* Card 4: Free vs Pro comparison table */}
          <FreeVsProCard />
        </div>

        {/* Right Column sidebar widgets */}
        <DashboardSidebarWidgets />
      </div>
    </div>
  );
}
