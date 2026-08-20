"use client";

import Image from "next/image";
import React, { useState } from "react";

type ProjectCard = {
  title: string;
  descriptionLines: string[];
  badges: string[];
  student: string;
  preview: string;
  avatar: string;
  featured?: boolean;
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projectCards: ProjectCard[] = [
    {
      title: "Studynotion - An Edtech...",
      descriptionLines: [
        "It is an education platform",
        "similar to udemy, Coursera etc.",
        "I had used technologies like...",
      ],
      badges: ["HTML", "CSS", "JavaScript"],
      student: "Neelesh Kumawat",
      preview: "/assets/images/figma-projects/project-studynotion.png",
      avatar: "/assets/images/figma-projects/avatar-neelesh.png",
    },
    {
      title: "Spendsavvy",
      descriptionLines: [
        "Developed a Finance",
        "Management Application using",
        "NextJS, with voice assistant to",
      ],
      badges: ["CSS", "JavaScript", "Node"],
      student: "Ankit Kommalapati",
      preview: "/assets/images/figma-projects/project-spendsavvy.png",
      avatar: "/assets/images/figma-projects/avatar-ankit.png",
      featured: true,
    },
  ];

  const visibleCards = [...projectCards, ...projectCards];

  return (
    <div className="flex w-full flex-col gap-6 text-left">
      <div>
        <h2 className="text-[32px] leading-6 text-[#191C1E]">Explore Student&apos;s Projects</h2>
        <p className="mt-3 text-[16px] leading-6 text-[#444655]">
          Mobile and web applications, innovative dashboards and more - all built by students like you
        </p>
      </div>

      <div className="mt-1 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          {["All Projects", "Trending", "Newest"].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-[16px] py-[9px] text-[16px] leading-6 transition-colors ${
                  isActive
                    ? "border-[#2B50EC] bg-[#2B50EC] text-[#D9DDFF]"
                    : "border-[#C4C5D8] bg-[#ECEEF0] text-[#444655] hover:bg-[#E1E4E8]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {visibleCards.map((project, idx) => (
                <article key={`${project.title}-${idx}`} className="flex flex-col overflow-hidden rounded-xl border border-[#E0E3E5] bg-white">
                  <div className="relative h-48 bg-[#ECEEF0]">
                    {project.featured && (
                      <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-[#FDE047] bg-[#FEF08A] px-[13px] py-[7px] text-[16px] leading-6 text-[#444655] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                        <Image src="/assets/images/figma-projects/internship-icon.svg" alt="Internship" width={11} height={11} />
                        Internship at Siemens
                      </span>
                    )}

                    <Image src={project.preview} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />

                    {!project.featured && (
                      <span className="absolute left-3 top-3 z-10 inline-flex h-[35px] w-[30px] items-center justify-center">
                        <Image src="/assets/images/figma-projects/badge-star.svg" alt="Featured" width={30} height={35} />
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.badges.map((tag) => (
                        <span key={tag} className="rounded bg-[rgba(222,225,255,0.5)] px-2 py-1 text-[16px] leading-6 text-[#0032C4]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="pb-2 text-[16px] leading-6 text-[#191C1E]">{project.title}</h3>
                    <p className="pb-6 text-[16px] leading-6 text-[#444655]">
                      {project.descriptionLines.map((line, lineIndex) => (
                        <React.Fragment key={`${project.title}-line-${lineIndex}`}>
                          {line}
                          {lineIndex < project.descriptionLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>

                    <div className="flex items-center gap-3 border-t border-[rgba(196,197,216,0.5)] pt-[17px]">
                      <Image src={project.avatar} alt={project.student} width={40} height={40} className="rounded-full border border-[#C4C5D8]" />
                      <p className="text-[16px] leading-6 text-[#191C1E]">{project.student}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <section className="relative overflow-hidden rounded-xl bg-[#0035CE] p-6 text-white shadow-[0px_12px_32px_0px_rgba(43,80,236,0.2)]">
              <div className="pointer-events-none absolute -right-[43px] -top-16 h-32 w-32 rounded-full bg-[rgba(255,255,255,0.1)] blur-[20px]" />
              <div className="pointer-events-none absolute -bottom-[32.5px] -left-8 h-24 w-24 rounded-full bg-[rgba(178,56,0,0.3)] blur-[12px]" />

              <h4 className="text-[16px] leading-6">Project Ecosystem</h4>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-[13px] backdrop-blur-[2px]">
                  <p className="text-[16px] leading-6 text-[#DEE1FF]">Total<br />Projects</p>
                  <p className="mt-1 text-[16px] leading-6">1,248</p>
                </div>
                <div className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-[13px] backdrop-blur-[2px]">
                  <p className="text-[16px] leading-6 text-[#DEE1FF]">Active<br />Mentees</p>
                  <p className="mt-1 text-[16px] leading-6">892</p>
                </div>
              </div>
            </section>

            <section className="h-[438px] rounded-xl border border-[#E0E3E5] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2">
                <Image src="/assets/images/figma-projects/fire-icon.svg" alt="Project of the Month" width={16} height={19} />
                <h4 className="text-[16px] leading-6 text-[#191C1E]">Project of the Month</h4>
              </div>

              <div className="relative mt-4 h-32 overflow-hidden rounded-lg bg-[#ECEEF0]">
                <Image
                  src="/assets/images/figma-projects/project-supply-chain.png"
                  alt="Global Supply Chain Tracker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent p-3 flex items-end">
                  <span className="text-[16px] leading-6 text-white">Global Supply Chain Tracker</span>
                </div>
              </div>

              <p className="mt-4 text-[16px] leading-6 text-[#444655]">
                An exceptional implementation
                <br />of real-time logistics tracking
                <br />utilizing WebSockets and
                <br />interactive maps. Mentored by
                <br />Senior Engineer at
                <br />LogisticsCorp.
              </p>

              <button className="mt-4 w-full rounded-lg border-2 border-[#0035CE] px-2 py-[10px] text-[16px] leading-6 text-[#0035CE] transition-colors hover:bg-[#EEF2FF]">
                View Case Study
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
