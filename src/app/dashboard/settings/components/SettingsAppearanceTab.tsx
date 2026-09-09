"use client";

import React, { useState } from "react";

export default function SettingsAppearanceTab() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [accentColor, setAccentColor] = useState("#2B50EC");
  const [compactMode, setCompactMode] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  const accents = [
    { name: "Consistency Blue", hex: "#2B50EC" },
    { name: "Sky Cyan", hex: "#0EA5E9" },
    { name: "Electric Violet", hex: "#8B5CF6" },
    { name: "Emerald", hex: "#10B981" },
  ];

  return (
    <div className="space-y-6">
      {/* Theme Preference */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-4 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Theme Mode</h4>
          <p className="text-[11px] text-[#64748B]">Select how Consistency AI looks on your device</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            {
              id: "light" as const,
              label: "Light",
              desc: "Crisp & Clean",
              bg: "bg-[#F9FBFF] border-[#2B50EC]",
              icon: "☀️",
            },
            {
              id: "dark" as const,
              label: "Dark",
              desc: "Coming Soon",
              bg: "bg-[#0F172A] border-[#334155]",
              icon: "🌙",
            },
            {
              id: "system" as const,
              label: "System",
              desc: "Match OS",
              bg: "bg-gradient-to-r from-[#F9FBFF] to-[#0F172A]",
              icon: "💻",
            },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                theme === item.id
                  ? "border-[#2B50EC] bg-[#F5F8FF] ring-2 ring-[#2B50EC]/20 shadow-xs"
                  : "border-[#E2E8F0] bg-white hover:bg-[#F8FAFC]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center ${
                    theme === item.id ? "border-[#2B50EC] bg-[#2B50EC]" : "border-[#CBD5E1]"
                  }`}
                >
                  {theme === item.id && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F172A]">{item.label}</div>
                <div className="text-[10px] text-[#64748B]">{item.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-3 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Accent Color</h4>
          <p className="text-[11px] text-[#64748B]">Choose the primary highlight color for buttons and active states</p>
        </div>

        <div className="flex items-center gap-3 pt-1">
          {accents.map((acc) => (
            <button
              key={acc.name}
              type="button"
              onClick={() => setAccentColor(acc.hex)}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-transform cursor-pointer ${
                accentColor === acc.hex ? "ring-3 ring-offset-2 ring-[#2B50EC] scale-105" : "hover:scale-105"
              }`}
              style={{ backgroundColor: acc.hex }}
              title={acc.name}
            >
              {accentColor === acc.hex && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Display & Layout Options */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 space-y-4 shadow-xs">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Display &amp; Motion</h4>
          <p className="text-[11px] text-[#64748B]">Customize interface compactness and motion</p>
        </div>

        <div className="divide-y divide-[#F1F5F9]">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Compact Interface</p>
              <p className="text-[11px] text-[#64748B]">Reduce padding for denser learning views</p>
            </div>
            <button
              type="button"
              onClick={() => setCompactMode(!compactMode)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                compactMode ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  compactMode ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Subtle Animations</p>
              <p className="text-[11px] text-[#64748B]">Enable smooth transitions and micro-interactions</p>
            </div>
            <button
              type="button"
              onClick={() => setEnableAnimations(!enableAnimations)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                enableAnimations ? "bg-[#2B50EC]" : "bg-[#E2E8F0]"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  enableAnimations ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
