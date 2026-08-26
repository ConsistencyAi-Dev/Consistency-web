"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!inView) {
      setVisible(false);
      return;
    }
    setVisible(true);
    let resetTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      resetTimeout = setTimeout(() => setVisible(true), 400);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, [inView]);

  return { ref, visible };
}

export function ProgressBar({
  percent,
  color,
  visible,
  delay = 0,
}: {
  percent: number;
  color: string;
  visible: boolean;
  delay?: number;
}) {
  return (
    <div className="self-stretch h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ease-out ${color}`}
        style={{
          width: visible ? `${percent}%` : "0%",
          transitionDelay: visible ? `${delay}ms` : "0ms",
          transitionDuration: visible ? "700ms" : "200ms",
        }}
      />
    </div>
  );
}

export const AVATAR_POSITIONS = [
  { left: 84, top: -1, active: false },
  { left: 116.52, top: 5.47, active: false },
  { left: 144.1, top: 23.9, active: false },
  { left: 162.53, top: 51.47, active: false },
  { left: 169, top: 84, active: false },
  { left: 162.53, top: 116.53, active: false },
  { left: 144.1, top: 144.1, active: false },
  { left: 116.52, top: 162.53, active: false },
  { left: 84, top: 169, active: false },
  { left: 51.47, top: 162.53, active: false },
  { left: 23.89, top: 144.1, active: false },
  { left: 5.47, top: 116.53, active: false },
  { left: -1, top: 84, active: true },
  { left: 5.47, top: 51.47, active: true },
  { left: 23.89, top: 23.9, active: true },
  { left: 51.47, top: 5.47, active: true },
];

export const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
];

export function FeatureCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={`flex-1 min-w-0 bg-white rounded-3xl shadow-[0px_12px_24px_0px_rgba(107,114,128,0.05)] ring-[5px] ring-white flex flex-col overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function IllustrationArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-56 sm:h-64 lg:h-72 px-4 bg-gradient-to-b from-slate-50 to-white flex flex-col justify-center items-center relative overflow-hidden">
      {children}
    </div>
  );
}

export function CardText({
  badge,
  badgeColor,
  title,
  description,
  sub,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  sub: string;
}) {
  return (
    <div className="p-6 flex flex-col gap-3">
      <span
        className={`self-start px-2.5 py-1 rounded-full text-[10px] font-bold font-sans ${badgeColor}`}
      >
        {badge}
      </span>
      <h3 className="text-gray-900 text-lg font-bold font-sans">{title}</h3>
      <p className="text-gray-500 text-xs leading-5 font-sans">{description}</p>
      <p className="text-zinc-400 text-xs leading-4 font-sans">{sub}</p>
    </div>
  );
}
