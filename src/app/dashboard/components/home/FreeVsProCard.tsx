"use client";

import React from "react";
import { COMPARISON_FEATURES } from "./dashboardData";

export default function FreeVsProCard() {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-1">
        <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">
          Free vs Pro – what changes after enrollment?
        </h3>
        <button className="text-[#2B50EC] hover:text-[#1E3BB3] text-[13px] font-medium transition-colors whitespace-nowrap">
          Upgrade anytime
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              <th className="pb-3 w-full">Feature</th>
              <th className="pb-3 text-center px-6">Free</th>
              <th className="pb-3 text-center px-4">Pro</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {COMPARISON_FEATURES.map((row, idx) => (
              <tr key={idx} className="text-[13px]">
                <td className="py-3.5 font-normal text-gray-800">{row.name}</td>
                <td className="py-3.5 text-center px-6">
                  {row.free ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-emerald-400">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-gray-200">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  )}
                </td>
                <td className="py-3.5 text-center px-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2B50EC]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
