"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import BlurText from "./BlurText";

/* ==========================================================================
   Glowing AI Face/Core Graphic
   ========================================================================== */
function AiMentorFace({ lookingDirection = "center" }: { lookingDirection?: "center" | "left" | "right" }) {
  const eyeX = lookingDirection === "left" ? -10 : lookingDirection === "right" ? 10 : 0;
  const mouthX = lookingDirection === "left" ? -5 : lookingDirection === "right" ? 5 : 0;
  const headRotate = lookingDirection === "left" ? -8 : lookingDirection === "right" ? 8 : 0;

  return (
    <div className="relative w-64 h-64 flex items-center justify-center group">
      {/* Glowing blue blur underneath */}
      <div className="absolute w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Futuristic Orbit Rings */}
      {/* Outer Orbit */}
      <motion.div 
        className="absolute inset-0 rounded-full border border-dashed border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle Orbit */}
      <motion.div 
        className="absolute inset-6 rounded-full border border-dashed border-sky-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner Ring (Head) */}
      <motion.div 
        animate={{ rotate: headRotate }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="absolute inset-12 rounded-full border border-blue-600/30 bg-neutral-950 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.05)]"
      >
        {/* Cybernetic glowing eyes container */}
        <motion.div 
          animate={{ x: eyeX }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="flex gap-10 relative"
        >
          {/* Left Eye */}
          <div className="relative w-4 h-6">
            <div className="absolute inset-0 bg-linear-to-b from-blue-600 to-sky-500 rounded-[5px] shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
            <motion.div 
              className="absolute inset-0 bg-white/40 rounded-[5px] filter blur-xs"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Right Eye */}
          <div className="relative w-4 h-6">
            <div className="absolute inset-0 bg-linear-to-b from-blue-600 to-sky-500 rounded-[5px] shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
            <motion.div 
              className="absolute inset-0 bg-white/40 rounded-[5px] filter blur-xs"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Glowing Mouth Line */}
          <motion.div 
            animate={{ x: mouthX }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-10 h-[2px]"
          >
            <div className="w-full h-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] rounded-full" />
            {/* Voice pulse indicator */}
            <motion.div 
              className="absolute -inset-x-2 -inset-y-1 bg-sky-400/20 blur-xs rounded-full"
              animate={{ scaleX: [1, 1.4, 1], scaleY: [1, 2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating status marker */}
      <div className="absolute -bottom-12 bg-blue-950/80 ring-1 ring-blue-500/30 text-[9px] text-blue-400 font-bold font-mono tracking-widest px-2.5 py-1 rounded-full uppercase shadow-lg">
        Neural Core v1.2
      </div>
    </div>
  );
}

/* ==========================================================================
   Feature Card component
   ========================================================================== */
function MentorFeatureCard({
  num,
  title,
  text,
  delay = 0,
  className = "",
  column = "left",
  isActive = false,
}: {
  num: string;
  title: string;
  text: string;
  delay?: number;
  className?: string;
  column?: "left" | "right" | "center";
  isActive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      data-column={column}
      data-num={num}
      className={`w-full bg-linear-to-b backdrop-blur-md rounded-[30px] p-8 ring-1 flex flex-col gap-2 group transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ${className}
        ${isActive 
          ? "from-neutral-900/90 to-blue-950/40 ring-blue-500/40 opacity-100! scale-[1.02] shadow-[0_12px_40px_rgba(37,99,235,0.15)]" 
          : "from-neutral-900/40 to-blue-950/10 ring-white/5 opacity-30! scale-[0.98]"
        }`}
    >
      <span className={`text-3xl font-normal font-sans leading-10 transition-colors duration-500
        ${isActive ? "text-cyan-400" : "text-cyan-400/40"}`}>
        {num}
      </span>
      <h3 className={`text-3xl font-normal font-sans leading-10 transition-colors duration-500
        ${isActive ? "text-white" : "text-slate-200/50"}`}>
        {title}
      </h3>
      <p className={`text-base font-normal font-sans leading-6 mt-1 transition-colors duration-500
        ${isActive ? "text-neutral-200" : "text-neutral-300/30"}`}>
        {text}
      </p>
    </motion.div>
  );
}

/* ==========================================================================
   Main MentorSection component
   ========================================================================== */
export default function MentorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lookingDirection, setLookingDirection] = useState<"center" | "left" | "right">("center");
  const [activeCardNum, setActiveCardNum] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Set up scroll progress tracking using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Check screen width for responsive pinning behavior
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Compute cards vertical translation on desktop based on scroll progress
  const scrollYTranslation = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["0vh", "-140vh"] : ["0vh", "0vh"]
  );

  // Bind active card state and Robo looking direction to scroll progress on desktop
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
    if (latest < 0.2) {
      setActiveCardNum("01.");
      setLookingDirection("left");
    } else if (latest < 0.4) {
      setActiveCardNum("02.");
      setLookingDirection("right");
    } else if (latest < 0.6) {
      setActiveCardNum("03.");
      setLookingDirection("left");
    } else if (latest < 0.8) {
      setActiveCardNum("04.");
      setLookingDirection("right");
    } else {
      setActiveCardNum("05.");
      setLookingDirection("left");
    }
  });

  // Mobile scroll tracking fallback using viewport center calculations
  useEffect(() => {
    if (isDesktop) return;

    const handleScroll = () => {
      const cards = document.querySelectorAll(".mentor-card");
      if (cards.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestCard: any = null;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestCard = card;
        }
      });

      if (closestCard && minDistance < 350) {
        const col = closestCard.getAttribute("data-column");
        const num = closestCard.getAttribute("data-num");
        setActiveCardNum(num);
        if (col === "left" || col === "right" || col === "center") {
          setLookingDirection(col);
        }
      } else {
        setLookingDirection("center");
        setActiveCardNum(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <div ref={containerRef} className="relative lg:h-[450vh] bg-black text-white ">
      <section
        id="mentor"
        className="sticky top-0 lg:h-screen w-full overflow-hidden flex flex-col justify-center py-20 lg:py-0 "
      >
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none " />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-3xl pointer-events-none " />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col justify-center lg:h-full ">
          
          {/* Header */}
          <div className="mb-12 lg:mb-8 max-w-4xl lg:mt-6">
            <div className="inline-block bg-neutral-900 ring-1 ring-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 ">
              AI Assistant
            </div>
            <h2 className="text-[2.5rem] md:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6 font-sans ">
              <BlurText 
                text="A mentor that" 
                delay={0} 
                animateBy="words" 
                direction="top" 
                className="inline-block mr-[0.25em] "
              />
              <BlurText 
                text="never sleeps." 
                delay={300} 
                animateBy="words" 
                direction="top" 
                className="inline-block text-[#2563EB]"
              />
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-7 font-sans ">
              The AI Mentor unblocks you instantly at 2 AM, tracks your daily progress patterns, and tells your human mentor exactly where you need guidance.
            </p>
          </div>

          {/* Interactive Scroll zone */}
          <div className="relative w-full lg:h-[45vh] lg:flex lg:items-center  ">

            {/* Desktop Background Sticky Robo Face (hidden on mobile, stays vertically centered in the cards container) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <div className="h-full flex items-center justify-center">
                <AiMentorFace lookingDirection={lookingDirection} />
              </div>
            </div>

            {/* Mobile Inline Robo Face (hidden on desktop) */}
            <div className="lg:hidden flex justify-center mb-12 relative z-10">
              <AiMentorFace lookingDirection={lookingDirection} />
            </div>

            {/* Desktop Top/Bottom masks for cards fading out */}
            <div className="hidden lg:block absolute top-[-12vh] left-0 right-0 h-[10vh]  pointer-events-none" />
            <div className="hidden lg:block absolute bottom-[-12vh] left-0 right-0 h-[10vh] bg-linear-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />

            {/* Scrolling Cards grid container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative z-10 items-start w-full lg:h-full lg:overflow-visible">
              
              {/* Left Column (Cards 01, 03, 05) */}
              <div className="lg:col-span-5 lg:col-start-1 lg:h-full lg:overflow-visible flex flex-col justify-center">
                <motion.div style={{ y: scrollYTranslation }} className="flex flex-col gap-8 lg:gap-[35vh]">
                  <MentorFeatureCard
                    num="01."
                    title="Instant Doubt Support"
                    text="“The moment confusion hits, we're there.” Our neural engine analyzes interaction pauses and query patterns to intervene exactly when friction is detected."
                    delay={100}
                    className="mentor-card"
                    column="left"
                    isActive={activeCardNum === "01."}
                  />
                  <MentorFeatureCard
                    num="03."
                    title="Progress Awareness"
                    text="“Turning abstract effort into visual milestones.” We translate complex data points into actionable insights that empower student agency and pride."
                    delay={300}
                    className="mentor-card"
                    column="left"
                    isActive={activeCardNum === "03."}
                  />
                  <MentorFeatureCard
                    num="05."
                    title="Human Handover"
                    text="“Closing the loop when it matters most.” When deep intervention is needed, the system orchestrates a seamless handoff to human mentors with full contextual briefing."
                    delay={500}
                    className="mentor-card"
                    column="left"
                    isActive={activeCardNum === "05."}
                  />
                </motion.div>
              </div>

              {/* Right Column (Cards 02, 04) - staggered lower */}
              <div className="lg:col-span-5 lg:col-start-8 lg:h-full lg:overflow-visible flex flex-col justify-center">
                <motion.div style={{ y: scrollYTranslation }} className="flex flex-col gap-8 lg:gap-[35vh] lg:mt-[35vh]">
                  <MentorFeatureCard
                    num="02."
                    title="Daily Check-ins"
                    text="“Building momentum through neural consistency.” Small, habit-forming interactions keep students aligned without the burden of heavy administration."
                    delay={200}
                    className="mentor-card"
                    column="right"
                    isActive={activeCardNum === "02."}
                  />
                  <MentorFeatureCard
                    num="04."
                    title="Risk Detection"
                    text="“Identifying patterns of disengagement in real-time.” Behavioral shifts that signal burnout or drop-out risk are flagged before they become irreversible."
                    delay={400}
                    className="mentor-card"
                    column="right"
                    isActive={activeCardNum === "04."}
                  />
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
