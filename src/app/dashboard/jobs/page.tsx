"use client";

import React from "react";
import ComingSoon from "../components/ComingSoon";

export default function JobsPage() {
  return <ComingSoon title="Jobs & Opportunities" description="Personalized job recommendations, application tracking, and internships are coming soon." />;
}

/*
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react";
import {
  search18Svg, featuredStarSvg, arrowRight12Svg, featuredRolePng,
  logoDataAnalystPng, logoUxuiPng, logoFrontendGenericSvg, profileMatchIconSvg,
} from "@/assets";

type Job = {
  title: string;
  company: string;
  location: string;
  tags: string[];
  posted: string;
  logo: StaticImageData;
  faded: boolean;
};

export function OriginalJobsPage() {
  const [activeFilter, setActiveFilter] = useState("All Roles");

  const filters = ["All Roles", "Remote", "Full-time", "Internship"];

  const recommendedJobs: Job[] = [
    {
      title: "Data Analyst",
      company: "Quantify Analytics",
      location: "Remote",
      tags: ["Full-time", "Entry Level", "$70k - $90k"],
      posted: "Posted 2d ago",
      logo: logoDataAnalystPng,
      faded: false,
    },
    {
      title: "UX/UI Designer Intern",
      company: "CreativeForge",
      location: "New York, NY (On-site)",
      tags: ["Internship", "High Match"],
      posted: "Posted 5h ago",
      logo: logoUxuiPng,
      faded: false,
    },
    {
      title: "Junior Frontend Developer",
      company: "WebScale Inc.",
      location: "Austin, TX (Hybrid)",
      tags: ["Full-time", "React / Tailwind"],
      posted: "Posted 1w ago",
      logo: logoFrontendGenericSvg,
      faded: true,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6 text-left">
      <h2 className="text-[36px] leading-[56px] tracking-[-0.96px] text-[#191C1E]">Find your dream role</h2>

      <div className="flex flex-col items-center gap-2 md:flex-row">
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Search jobs, skills, or companies..."
            className="h-11 w-full rounded-lg border border-[#C4C5D8] bg-white py-3 pl-[33px] pr-4 text-[16px] leading-normal text-[#6B7280] outline-none"
          />
          <Image src={search18Svg} alt="Search" width={18} height={18} className="absolute left-2 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex w-full items-center gap-1 overflow-auto md:w-auto">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`h-9 shrink-0 rounded-lg border px-[17px] pb-[10.5px] pt-[9.5px] text-[14px] tracking-[0.14px] transition-colors ${
                  isActive
                    ? "border-transparent bg-[#DAE2FD] text-[#0035CE]"
                    : "border-[#E0E3E5] bg-white text-[#444655] hover:bg-[#F8FAFC]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <section className="relative flex items-center gap-6 overflow-hidden rounded-2xl border border-[#E0E3E5] bg-white p-[33px]">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[rgba(218,226,253,0.3)] blur-[32px]" />

            <div className="flex-1">
              <div className="flex items-center gap-1">
                <Image src={featuredStarSvg} alt="Featured" width={17} height={16} />
                <span className="text-[12px] uppercase tracking-[0.6px] text-[#0035CE]">FEATURED OPPORTUNITY</span>
              </div>

              <h3 className="pt-1 text-[24px] leading-8 text-[#191C1E]">Software Engineering Intern</h3>

              <div className="flex gap-2 pt-1 text-[16px] leading-6">
                <p className="pr-[60px] text-[#191C1E]">
                  TechNova
                  <br />
                  Systems
                </p>
                <p className="text-[#444655]">
                  • San Francisco, CA
                  <br />
                  (Hybrid)
                </p>
              </div>

              <div className="flex gap-2 pb-5 pt-3">
                <span className="rounded-lg bg-[#ECEEF0] px-2 py-1 text-[12px] leading-4 text-[#444655]">Summer 2024</span>
                <span className="rounded-lg bg-[#ECEEF0] px-2 py-1 text-[12px] leading-4 text-[#444655]">$45-55/hr</span>
              </div>

              <button className="inline-flex h-11 items-center gap-1 rounded-lg bg-[#2B50EC] px-6 text-[14px] tracking-[0.14px] text-white transition-colors hover:bg-[#1E3BB3]">
                Apply Now
                <Image src={arrowRight12Svg} alt="Arrow" width={12} height={12} />
              </button>
            </div>

            <div className="h-48 w-48 overflow-hidden rounded-lg border border-[#C4C5D8] bg-[#F7F9FB]">
              <Image src={featuredRolePng} alt="Featured role" width={192} height={192} className="h-full w-full object-cover" />
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h4 className="text-[24px] leading-8 text-[#191C1E]">Recommended Roles</h4>

            {recommendedJobs.map((job) => (
              <article
                key={job.title}
                className={`flex items-center gap-6 rounded-2xl border border-[#E0E3E5] bg-white p-[25px] ${job.faded ? "opacity-70" : ""}`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#C4C5D8] bg-[#F7F9FB]">
                  <Image src={job.logo} alt={job.title} width={48} height={48} className="max-h-12 max-w-12" />
                </div>

                <div className="min-w-0 flex-1">
                  <h5 className="text-[20px] leading-[25px] text-[#191C1E]">{job.title}</h5>
                  <p className="text-[14px] leading-5 text-[#444655]">
                    {job.company} • {job.location}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-lg px-2 py-1 text-[12px] leading-4 ${
                          tag === "High Match" ? "bg-[#DAE2FD] text-[#0035CE]" : "bg-[#ECEEF0] text-[#444655]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="text-[12px] leading-4 text-[#444655]">{job.posted}</p>
                  <button className="h-9 rounded-lg border border-[#C4C5D8] px-[17px] pb-[10.5px] pt-[9.5px] text-[14px] leading-4 tracking-[0.14px] text-[#191C1E] transition-colors hover:bg-[#F8FAFC]">
                    View Details
                  </button>
                </div>
              </article>
            ))}

            <button className="w-full rounded-lg border border-[#E0E3E5] bg-white py-[17px] text-[14px] leading-4 tracking-[0.14px] text-[#191C1E] transition-colors hover:bg-[#F8FAFC]">
              Load More Jobs
            </button>
          </section>
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-4">
          <section className="rounded-2xl border border-[#E0E3E5] bg-white p-[25px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] leading-[27px] text-[#191C1E]">Application Tracker</h4>
              <button className="text-[12px] leading-4 text-[#0035CE]">View All</button>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  role: "Frontend Intern",
                  company: "TechNova Systems",
                  dot: "bg-[#2B50EC]",
                  status: "Interviewing",
                  pill: "bg-[#DAE2FD] text-[#0035CE]",
                },
                {
                  role: "Data Science Fellow",
                  company: "Quantify Analytics",
                  dot: "bg-[#C4C5D8]",
                  status: "Applied",
                  pill: "bg-[#ECEEF0] text-[#444655]",
                },
                {
                  role: "QA Tester",
                  company: "WebScale Inc.",
                  dot: "bg-[#10B981]",
                  status: "Offer",
                  pill: "bg-[#D1FAE5] text-[#047857]",
                },
              ].map((item) => (
                <div key={item.role} className="flex items-center gap-4">
                  <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                  <div className="flex-1">
                    <p className="text-[14px] leading-4 tracking-[0.14px] text-[#191C1E]">{item.role}</p>
                    <p className="text-[14px] leading-5 text-[#444655]">{item.company}</p>
                  </div>
                  <span className={`rounded-lg px-2 py-1 text-[12px] leading-4 ${item.pill}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6">
            <div className="flex items-center gap-2">
              <Image src={profileMatchIconSvg} alt="Profile Match" width={22} height={22} />
              <h4 className="text-[18px] leading-[27px] text-[#191C1E]">Profile Match</h4>
            </div>

            <p className="mt-4 text-[14px] leading-5 text-[#444655]">
              Your profile is missing 2 key skills
              <br />
              often requested for Frontend roles.
            </p>

            <div className="mt-4 flex gap-1">
              {["TypeScript", "GraphQL"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#C4C5D8] bg-[#E0E3E5] px-[9px] py-[5px] text-[12px] leading-4 text-[#444655] line-through opacity-60"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="mt-4 h-9 w-full rounded-lg border border-[#C4C5D8] bg-white pb-[10.5px] pt-[9.5px] text-[14px] leading-4 tracking-[0.14px] text-[#0035CE] transition-colors hover:bg-[#F8FAFC]">
              Update Skills
            </button>
          </section>

          <section className="rounded-2xl border border-[#E0E3E5] bg-white p-[25px]">
            <h4 className="text-[14px] uppercase leading-4 tracking-[0.7px] text-[#191C1E]">CAREER TIP OF THE DAY</h4>
            <p className="mt-2 text-[14px] font-light leading-5 text-[#444655]">
              &quot;Tailor your resume for every
              <br />
              application. Highlight the projects that
              <br />
              directly correlate with the job
              <br />
              description to pass ATS filters.&quot;
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
*/
