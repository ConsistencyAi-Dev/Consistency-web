'use client';

import React, { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    quote: "Whenever a new technology becomes popular, I switch to it. Now I know a little of everything and nothing deeply.",
    author: "Engineering student",
    subtext: "Paraphrased from recurring learner discussions",
    avatar: "bg-blue-100 text-blue-600",
  },
  {
    quote: "Learning alone is difficult because nobody notices when you disappear.",
    author: "Self-paced learner",
    subtext: "Paraphrased from online study communities",
    avatar: "bg-orange-100 text-orange-600",
  },
  {
    quote: "I keep starting new courses, but after a few weeks I lose momentum and stop.",
    author: "Online learner",
    subtext: "Paraphrased from recurring forum discussions",
    avatar: "bg-orange-200 text-orange-700",
  },
  {
    quote: "I don't need more content. I need a routine and someone to keep me accountable.",
    author: "Online student",
    subtext: "Paraphrased from recurring community feedback",
    avatar: "bg-gray-800 text-white",
  },
  {
    quote: "When there's no deadline or person checking on me, I keep postponing the work.",
    author: "Self-paced learner",
    subtext: "Paraphrased from online study communities",
    avatar: "bg-blue-50 text-blue-500",
  },
  {
    quote: "Sir I am a student and I preparing for a competitive exam for last 3 year...in every time I think I give my best and after some days I lost my discipline and some times I feel don't do anything...not scrolling, not studying even I know that this is not good for me.. also I don't control myself... please give me a suggestion",
    author: "Shivansut",
    subtext: "2 months ago",
    avatar: "bg-red-500 text-white",
  },
  {
    quote: "Honestly I've been having this feeling recently that I've not been productive when I code at work, sometimes tasks are so complicated and huge that they seem almost scary. I know you should never look at the size of the task and instead should break it down into small pieces but it still is complicated sometimes, but as you said we're not machines and we must sometimes step back and remember that",
    author: "XyZarx",
    subtext: "1 year ago",
    avatar: "bg-green-500 text-white",
  },
  {
    quote: "I've bought several courses, but I still haven't completed one properly.",
    author: "College student",
    subtext: "Paraphrased from recurring struggles",
    avatar: "bg-gray-900 text-white",
  },
  {
    quote: "I still haven't finished a course I signed up for back in 2021. lol...",
    author: "decantool48",
    subtext: "5 months ago",
    avatar: "bg-purple-500 text-white",
  }
];

const radius = 320; // Tighter radius for a smaller ball arrangement

export default function CommunityVoices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sphereRotation, setSphereRotation] = useState({ x: 0, y: 0 });
  const [isExploded, setIsExploded] = useState(false);

  // Rings defined by pitch angle and number of cards in that ring
  const rings = [
    { pitch: 0, count: 8 },      // Middle (reduced from 9 to increase spacing)
    { pitch: 30, count: 6 },     // Top
    { pitch: -30, count: 6 },    // Bottom
    { pitch: 60, count: 3 },     // Top Cap
    { pitch: -60, count: 3 },    // Bottom Cap
  ];
  
  const totalCards = rings.reduce((acc, ring) => acc + ring.count, 0);
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials].slice(0, totalCards);
  const N = allTestimonials.length;

  const getCardPosition = (i: number) => {
    let currentCount = 0;
    let ringIndex = 0;
    let indexInRing = 0;
    
    for (let r = 0; r < rings.length; r++) {
      if (i < currentCount + rings[r].count) {
        ringIndex = r;
        indexInRing = i - currentCount;
        break;
      }
      currentCount += rings[r].count;
    }
    
    const ring = rings[ringIndex];
    const pitchDeg = ring.pitch;
    
    // Offset yaw for rings so cards interleave smoothly
    const yawOffset = (ringIndex % 2 !== 0) ? (360 / ring.count / 2) : 0;
    const yawDeg = (indexInRing / ring.count) * 360 + yawOffset;
    
    return { pitchDeg, yawDeg };
  };

  // Handle activeIndex changes to rotate the sphere
  useEffect(() => {
    const pos = getCardPosition(activeIndex);
    
    setSphereRotation(prev => {
      let targetY = -pos.yawDeg;
      let currentY = prev.y;
      
      let diff = (targetY - currentY) % 360;
      // Shortest path logic for smooth rotation
      if (diff > 180) diff -= 360;
      else if (diff < -180) diff += 360;
      
      return {
        x: -pos.pitchDeg,
        y: currentY + diff
      };
    });
  }, [activeIndex]);

  // Interval for changing cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N);
    }, 5000); // 5 seconds per card to allow for smoother, longer transitions
    
    return () => clearInterval(interval);
  }, [N, activeIndex]);

  useEffect(() => {
    const explodeTimer = setTimeout(() => setIsExploded(true), 100);
    
    // Repeatedly bring all comments together and expand them
    const loopInterval = setInterval(() => {
      setIsExploded(false); // Collapse to miniature ball
      setTimeout(() => {
        setIsExploded(true); // Expand back out
      }, 2500); // Wait 2.5s in collapsed state before expanding again
    }, 12000); // Trigger this every 12 seconds
    
    return () => {
      clearTimeout(explodeTimer);
      clearInterval(loopInterval);
    };
  }, []);

  const getCardStyle = (i: number) => {
    const { pitchDeg, yawDeg } = getCardPosition(i);
    
    // When collapsed, they form a medium version of the ball
    const transform = isExploded 
      ? `translate(-50%, -50%) rotateY(${yawDeg}deg) rotateX(${pitchDeg}deg) translateZ(${radius}px) scale(1)`
      : `translate(-50%, -50%) rotateY(${yawDeg}deg) rotateX(${pitchDeg}deg) translateZ(160px) scale(0.5)`;
    
    return {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '240px',
      height: '130px',
      transform,
      transition: 'all 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      transformStyle: 'preserve-3d' as const,
      willChange: 'transform',
      opacity: isExploded ? 1 : 0.6, // Make the tiny ball visible
    };
  };

  return (
    <section className="py-24 bg-linear-to-b from-[#F2F4F8] to-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-3">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Voices of the Community</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-600 text-sm font-medium mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>Join 50,000+ members</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Verified community reviews</span>
            </div>
          </div>
          
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hear from self-paced learners and students about the hurdles of consistency and how they navigate their learning journeys.
          </p>
        </div>

        <div className="flex justify-center w-full h-[750px] mt-10 relative" style={{ perspective: '1600px' }}>
          <div 
            className="absolute top-1/2 left-1/2 w-0 h-0 transition-transform duration-[2500ms] ease-in-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${sphereRotation.x}deg) rotateY(${sphereRotation.y}deg)`,
              willChange: 'transform',
            }}
          >
            {allTestimonials.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={getCardStyle(i)}
                >
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformStyle: 'preserve-3d',
                      transform: isActive ? 'scale(1.15) translateZ(60px)' : 'scale(1) translateZ(0px)',
                      opacity: isActive ? 1 : 0.7, // Keep inactive cards highly visible to form the ball
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Front Face */}
                    <div 
                      className={`absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 p-4 flex flex-col justify-between ${
                        isActive 
                          ? 'shadow-2xl ring-2 ring-indigo-500/20' 
                          : 'shadow-xl hover:bg-gray-50'
                      }`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className={`flex-1 ${isActive ? 'overflow-y-auto pr-2 custom-scrollbar' : 'overflow-hidden'}`}>
                        <p className="text-gray-800 text-[10px] leading-relaxed" style={!isActive ? { display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' } : {}}>
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 shrink-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${t.avatar}`}>
                          {t.author.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-[10px] font-bold text-gray-900 truncate">{t.author}</p>
                          <p className="text-[8px] text-gray-500 truncate">{t.subtext}</p>
                        </div>
                      </div>
                    </div>

                    {/* Back Face (gives the sphere a solid, double-sided form) */}
                    <div 
                      className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
