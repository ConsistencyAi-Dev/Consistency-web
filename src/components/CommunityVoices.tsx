'use client';

import React from 'react';
import { globeGif } from '@/assets';

export default function CommunityVoices() {
  return (
    <section className="py-24 bg-[#FCFCFC] overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-3">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Voices of the Community</h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-8">
            Hear from self-paced learners and students about the hurdles of consistency and how they navigate their learning journeys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-8 py-3.5 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>Join 50,000+ members</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-8 py-3.5 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Verified community reviews</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={globeGif.src} alt="Community voices globe" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
