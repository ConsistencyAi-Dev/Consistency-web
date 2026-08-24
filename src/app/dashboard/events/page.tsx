"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  avatarAlexChenPng, avatarSarahJenkinsPng,
  iconFeaturedSvg, iconCalendarRangeSvg, iconPrizeSvg, iconRegisteredSvg,
  hackathonHeroPng, avatarCommunity1Png, avatarCommunity2Png,
  iconClockSmallSvg, iconSpeakerSvg,
} from "@/assets";

type EventCard = {
  title: string;
  type: string;
  typeClass: string;
  date: string;
  time: string;
  description: string[];
  registerClass: string;
  speaker?: {
    name: string;
    role: string;
    avatar: StaticImageData;
  };
  community?: boolean;
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All Events");

  const filters = ["All Events", "Workshops", "Meetups", "Career"];

  const events: EventCard[] = [
    {
      title: "Mastering System Design",
      type: "Workshop",
      typeClass: "bg-[#DAE2FD] text-[#2B50EC]",
      date: "Sat, 24 May",
      time: "10:00 AM PST",
      description: [
        "Learn how to architect scalable",
        "systems from scratch. We&apos;ll cover load",
        "balancing, caching, and database",
        "sharding with practical examples.",
      ],
      speaker: {
        name: "Alex Chen",
        role: "Senior Eng @ TechCorp",
        avatar: avatarAlexChenPng,
      },
      registerClass: "bg-[#2B50EC] text-white hover:bg-[#1E3BB3] border border-transparent",
    },
    {
      title: "Frontend Weekly Sync",
      type: "Community Meetup",
      typeClass: "bg-[#FFDBCF] text-[#892900]",
      date: "Wed, 28 May",
      time: "5:00 PM PST",
      description: [
        "Join our casual weekly meetup to",
        "discuss the latest in React, Vue, and",
        "CSS. Bring your questions and side",
        "projects to share.",
      ],
      community: true,
      registerClass: "bg-white text-[#2B50EC] hover:bg-[#F8FAFC] border border-[#2B50EC]",
    },
    {
      title: "Acing the AI Interview",
      type: "Career Talk",
      typeClass: "bg-[#E6E8EA] text-[#191C1E]",
      date: "Fri, 02 Jun",
      time: "12:00 PM PST",
      description: [
        "Insider tips on navigating technical",
        "interviews for Machine Learning and AI",
        "engineering roles at top tech",
        "companies.",
      ],
      speaker: {
        name: "Sarah Jenkins",
        role: "AI Recruiter",
        avatar: avatarSarahJenkinsPng,
      },
      registerClass: "bg-[#2B50EC] text-white hover:bg-[#1E3BB3] border border-transparent",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6 text-left">
      <h2 className="text-[40px] leading-10 tracking-[-0.32px] text-[#191C1E]">Upcoming Events &amp; Hackathons</h2>

      <section className="relative overflow-hidden rounded-2xl bg-[#2B50EC] p-8 text-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45),rgba(255,255,255,0)_70%)] opacity-20" />

        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-1 rounded bg-[rgba(255,255,255,0.2)] px-2 py-1 text-[12px] leading-4">
              <Image src={iconFeaturedSvg} alt="Featured" width={11} height={11} />
              Featured Hackathon
            </span>

            <h3 className="pt-2 text-[48px] leading-[56px] tracking-[-0.96px]">
              Consistency AI Global Hackathon
              <br />
              2024
            </h3>

            <p className="pt-2 text-[18px] leading-7 text-[#D9DDFF]">
              Build the future of AI learning tools. Compete globally, win prizes, and get recognized.
            </p>

            <div className="flex flex-wrap items-center gap-8 py-4 text-[14px] leading-4 tracking-[0.14px]">
              <span className="inline-flex items-center gap-2">
                <Image src={iconCalendarRangeSvg} alt="Date" width={18} height={20} />
                Oct 15 - Oct 22
              </span>
              <span className="inline-flex items-center gap-2">
                <Image src={iconPrizeSvg} alt="Prize" width={22} height={16} />
                $10,000 Prize Pool
              </span>
              <span className="inline-flex items-center gap-2">
                <Image src={iconRegisteredSvg} alt="Registered" width={22} height={16} />
                1.2k+ Registered
              </span>
            </div>

            <button className="h-11 rounded-2xl bg-white px-6 text-[14px] leading-4 tracking-[0.14px] text-[#2B50EC] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#F8FAFC]">
              Register Now
            </button>
          </div>

          <div className="relative h-64 w-64 shrink-0">
            <Image src={hackathonHeroPng} alt="Hackathon visual" fill className="object-contain" sizes="256px" />
          </div>
        </div>
      </section>

      <div className="border-b border-[#C4C5D8] pb-px">
        <div className="flex items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`border-b-2 px-2 pb-[14px] pt-[0.5px] text-[14px] leading-4 tracking-[0.14px] transition-colors ${
                  isActive
                    ? "border-[#2B50EC] text-[#2B50EC]"
                    : "border-transparent text-[#444655] hover:text-[#1F2937]"
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.slice(0, 2).map((event) => (
              <article key={event.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-[21px]">
                <div className="flex items-start justify-between pb-3">
                  <span className={`rounded px-2 py-1 text-[12px] leading-4 ${event.typeClass}`}>{event.type}</span>
                  <div className="text-right text-[12px] leading-4 text-[#444655]">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                  </div>
                </div>

                <h4 className="pb-2 text-[24px] leading-8 text-[#191C1E]">{event.title}</h4>

                <p className="pb-4 text-[14px] leading-5 text-[#444655]">
                  {event.description.map((line, idx) => (
                    <React.Fragment key={`${event.title}-${idx}`}>
                      <span dangerouslySetInnerHTML={{ __html: line }} />
                      {idx < event.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                <div className="pb-6">
                  {event.community ? (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Image
                          src={avatarCommunity1Png}
                          alt="Community member"
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white"
                        />
                        <Image
                          src={avatarCommunity2Png}
                          alt="Community member"
                          width={32}
                          height={32}
                          className="-ml-2 rounded-full border-2 border-white"
                        />
                        <span className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E3E5] text-[10px] leading-[15px] text-[#444655]">
                          +12
                        </span>
                      </div>
                      <p className="text-[12px] leading-4 text-[#444655]">Consistency Community</p>
                    </div>
                  ) : (
                    event.speaker && (
                      <div className="flex items-center gap-3">
                        <Image src={event.speaker.avatar} alt={event.speaker.name} width={32} height={32} className="rounded-full" />
                        <div>
                          <p className="text-[12px] leading-4 text-[#191C1E]">{event.speaker.name}</p>
                          <p className="text-[10px] leading-[15px] text-[#444655]">{event.speaker.role}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <button className={`h-9 w-full rounded-2xl text-[14px] leading-4 tracking-[0.14px] ${event.registerClass}`}>
                  Register
                </button>
              </article>
            ))}

            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-[21px] md:col-span-1">
              {(() => {
                const event = events[2];
                return (
                  <>
                    <div className="flex items-start justify-between pb-3">
                      <span className={`rounded px-2 py-1 text-[12px] leading-4 ${event.typeClass}`}>{event.type}</span>
                      <div className="text-right text-[12px] leading-4 text-[#444655]">
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                      </div>
                    </div>

                    <h4 className="pb-2 text-[24px] leading-8 text-[#191C1E]">{event.title}</h4>

                    <p className="pb-4 text-[14px] leading-5 text-[#444655]">
                      {event.description.map((line, idx) => (
                        <React.Fragment key={`${event.title}-${idx}`}>
                          {line}
                          {idx < event.description.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>

                    <div className="pb-6">
                      {event.speaker && (
                        <div className="flex items-center gap-3">
                          <Image src={event.speaker.avatar} alt={event.speaker.name} width={32} height={32} className="rounded-full" />
                          <div>
                            <p className="text-[12px] leading-4 text-[#191C1E]">{event.speaker.name}</p>
                            <p className="text-[10px] leading-[15px] text-[#444655]">{event.speaker.role}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button className={`h-9 w-full rounded-2xl text-[14px] leading-4 tracking-[0.14px] ${event.registerClass}`}>
                      Register
                    </button>
                  </>
                );
              })()}
            </article>
          </div>
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-4">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-[21px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[14px] leading-4 tracking-[0.14px] text-[#191C1E]">My Registered Events</h4>
              <button className="text-[12px] leading-4 text-[#2B50EC]">View all</button>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {[
                { month: "MAY", day: "18", title: "Resume Building Workshop", time: "11:00 AM", active: true },
                { month: "JUN", day: "05", title: "Intro to Python for Data", time: "2:00 PM", active: false },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className={`flex h-12 w-12 flex-col items-center justify-center rounded ${
                      item.active ? "bg-[#DAE2FD] text-[#2B50EC]" : "bg-[#E6E8EA] text-[#444655]"
                    }`}
                  >
                    <span className="text-[10px] leading-[15px] uppercase">{item.month}</span>
                    <span className="text-[24px] leading-6">{item.day}</span>
                  </div>

                  <div className="pt-[3px]">
                    <p className="text-[14px] leading-4 tracking-[0.14px] text-[#191C1E]">{item.title}</p>
                    <p className="mt-[3px] inline-flex items-center gap-1 text-[12px] leading-[18px] text-[#444655]">
                      <Image src={iconClockSmallSvg} alt="Time" width={12} height={12} />
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border-2 border-dashed border-[#C4C5D8] bg-[#F2F4F6] px-[22px] pb-6 pt-[22px] text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#DEE1FF]">
              <Image src={iconSpeakerSvg} alt="Speaker" width={20} height={16} />
            </div>

            <h4 className="pt-3 text-[14px] leading-4 tracking-[0.14px] text-[#191C1E]">Want to host an event?</h4>

            <p className="pt-2 text-[14px] leading-5 text-[#444655]">
              Share your knowledge with the
              <br />
              Consistency AI community.
            </p>

            <button className="pt-[13.5px] text-[12px] leading-4 text-[#2B50EC]">Apply to be a speaker</button>
          </section>
        </aside>
      </div>
    </div>
  );
}
