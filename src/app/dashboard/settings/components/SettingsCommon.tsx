import React from "react";

export function SettingsSection({
  number,
  title,
  children,
  badge,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-xs font-semibold text-[#0F172A]">
          {number}
        </span>
        <span>{title}</span>
        {badge && (
          <span className="rounded-md bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 text-[10px] font-semibold text-[#2B50EC]">
            {badge}
          </span>
        )}
      </h3>
      <div className="space-y-4 rounded-2xl border border-[#E2E8F0] p-5 bg-white shadow-xs">
        {children}
      </div>
    </section>
  );
}

export function InputField({
  label,
  value,
  onChange,
  badge,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  badge?: string;
}) {
  return (
    <label className="block text-xs text-[#475569]">
      <span className="flex items-center gap-2 mb-1.5 font-semibold text-[#475569]">
        {label}
        {badge && (
          <span className="rounded-md bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-semibold text-[#059669]">
            {badge}
          </span>
        )}
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-xs font-normal text-[#0F172A] bg-white focus:outline-none focus:border-[#2B50EC] transition-colors"
      />
    </label>
  );
}
