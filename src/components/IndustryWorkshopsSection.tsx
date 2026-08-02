'use client';

import React from 'react';
import Image from 'next/image';

import experienceExchange from '@/assets/industry/image1.jpg';
import aiDay from '@/assets/industry/image2.jpg';
import promptWorkshop from '@/assets/industry/image3.jpg';
import meetTheMentor from '@/assets/industry/image4.jpg';
import workshopHackathon from '@/assets/industry/image5.jpg';

const SMALL_CARDS = [
  { src: promptWorkshop, alt: 'Prompt Engineering Workshop' },
  { src: meetTheMentor, alt: 'Meet the Mentor — AI/ML Domain' },
  { src: workshopHackathon, alt: 'AI Prompt Engineering Workshop & Hackathon' },
];

export default function IndustryWorkshopsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-[2rem] sm:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-[#111827] font-sans mb-10 max-w-2xl">
          Exclusive hands on workshops to keep you hand of the industry
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          {/* Left column: featured event + 3 workshop thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white w-fit h-fit">
              <Image
                src={experienceExchange}
                alt="The Experience Exchange — Founders x Students"
                width={640}
                height={360}
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {SMALL_CARDS.map((card) => (
                <div
                  key={card.alt}
                  className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white w-fit h-fit"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={200}
                    height={260}
                    className="w-full h-auto object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column: AI Day poster */}
          <div className="flex justify-center items-start lg:items-stretch">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white w-fit h-fit">
              <Image
                src={aiDay}
                alt="AI Day — Speakers and Mentors"
                width={640}
                height={960}
                className="w-auto max-h-190 sm:max-h-220 object-contain block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
