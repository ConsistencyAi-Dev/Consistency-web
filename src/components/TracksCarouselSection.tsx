'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import img1 from '@/assets/banners/img1.png';
import img2 from '@/assets/banners/img2.png';
import img3 from '@/assets/banners/img3.png';

type Track = {
  title: string;
  image: StaticImageData;
  href: string;
};

const TRACKS: Track[] = [
  { title: 'Full Stack Developer', image: img1, href: '/full-stack-developer' },
  { title: 'AI/ML Course', image: img2, href: '/aiml' },
  { title: 'Data Analyst', image: img3, href: '/data-analyst' },
];

const AVATARS = [11, 12, 18, 32];

const N = TRACKS.length;

export default function TracksCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getOffset = (i: number) => {
    let diff = i - activeIndex;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    return diff;
  };

  const getCardStyle = (offset: number): React.CSSProperties => {
    const translateX = offset * 108;
    const scale = offset === 0 ? 1 : 0.93;

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex: offset === 0 ? 30 : 10 - Math.abs(offset),
      transition: 'transform 0.9s cubic-bezier(0.65, 0, 0.35, 1)',
      WebkitMaskImage:
        offset < 0
          ? 'linear-gradient(to right, black 45%, transparent 95%)'
          : offset > 0
          ? 'linear-gradient(to left, black 45%, transparent 95%)'
          : undefined,
      maskImage:
        offset < 0
          ? 'linear-gradient(to right, black 45%, transparent 95%)'
          : offset > 0
          ? 'linear-gradient(to left, black 45%, transparent 95%)'
          : undefined,
    };
  };

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Available Tracks</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-[#111827]">Pick one path. </span>
          <span className="text-blue-600">Commit for a year.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg mb-14">
          Mastery needs time. We select students for the long run.
        </p>

        {/* Mobile: simple full-width stacked cards, one by one */}
        <div className="flex flex-col gap-6 sm:hidden">
          {TRACKS.map((track) => (
            <div
              key={track.title}
              className="relative w-full h-[260px] rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-md"
            >
              <Image
                src={track.image}
                alt={track.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/85 via-black/50 to-transparent p-5 flex flex-col justify-end text-left">
                <h3 className="text-white font-bold text-base leading-tight uppercase font-sans tracking-wide">
                  {track.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/tablet: coverflow carousel */}
        <div className="hidden sm:flex relative h-[380px] items-center justify-center">
          {TRACKS.map((track, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            return (
              <div
                key={track.title}
                className={`absolute cursor-pointer transition-[width] duration-500 ease-out ${
                  isActive ? 'w-140' : 'w-120'
                }`}
                style={getCardStyle(offset)}
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className={`relative w-full h-[340px] rounded-2xl overflow-hidden border-2 transition-all duration-500 bg-white ${
                    isActive
                      ? 'border-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.25)] scale-[1.03]'
                      : 'border-gray-200 shadow-md'
                  }`}
                >
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    sizes="560px"
                    className="object-cover object-top"
                  />
                  <div className={`absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/85 via-black/45 to-transparent p-6 flex flex-col justify-end text-left transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`}>
                    <h3 className="text-white font-bold text-lg leading-tight uppercase font-sans tracking-wide">
                      {track.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="hidden sm:flex items-center justify-center gap-2.5 mt-6">
          {TRACKS.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-12 mb-10 text-gray-500 text-sm sm:text-base">
          <div className="flex -space-x-2.5">
            {AVATARS.map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/100?img=${id}`}
                alt="Student"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span>
            Joined by <span className="font-bold text-blue-600">12,000+ students</span>, Avg streaks{' '}
            <span className="font-bold text-blue-600">47 days</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={TRACKS[activeIndex].href} className="bg-[#3B82F6] bg-linear-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-[0.5px] transition-all shadow-sm text-[16px] cursor-pointer">
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="4"/>
              <path d="M8 12h8"/>
              <path d="m12 8 4 4-4 4"/>
            </svg>
          </Link>
          <Link href={TRACKS[activeIndex].href} className="border border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB]/5 px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-sm hover:-translate-y-[0.5px] text-[16px] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            view curriculum
          </Link>
        </div>
      </div>
    </section>
  );
}
