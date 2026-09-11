"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { logoPng } from "@/assets";
import { COHORTS_CATALOG, CountryCode } from "@/config/cohorts";
import EnrollCheckoutView from "./components/EnrollCheckoutView";
import EnrollSuccessView from "./components/EnrollSuccessView";
import EnrollReceiptView from "./components/EnrollReceiptView";

function CohortEnrollContent() {
  const searchParams = useSearchParams();
  const cohortParam = searchParams.get("cohort") || "genai-1yr";

  const [selectedCohortId, setSelectedCohortId] = useState<string>(
    COHORTS_CATALOG[cohortParam] ? cohortParam : "genai-1yr"
  );
  const [country, setCountry] = useState<CountryCode>("IN");
  const [locationStatus, setLocationStatus] = useState<"detecting" | "detected" | "fallback">("detecting");
  const [view, setView] = useState<"checkout" | "success" | "receipt" | "loading">("checkout");
  const [paidOrderInfo, setPaidOrderInfo] = useState<any>(null);

  useEffect(() => {
    if (cohortParam && COHORTS_CATALOG[cohortParam]) {
      setSelectedCohortId(cohortParam);
    }
  }, [cohortParam]);

  useEffect(() => {
    const fallbackToLocale = () => {
      const locale = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
      setCountry(locale.endsWith("-in") || timezone.includes("calcutta") || timezone.includes("kolkata") ? "IN" : "OTHER");
      setLocationStatus("fallback");
    };

    if (!navigator.geolocation) {
      fallbackToLocale();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`,
            { headers: { Accept: "application/json" } }
          );
          const result = await response.json();
          setCountry(result.address?.country_code?.toLowerCase() === "in" ? "IN" : "OTHER");
        } catch {
          fallbackToLocale();
          return;
        }
        setLocationStatus("detected");
      },
      fallbackToLocale,
      { enableHighAccuracy: false, timeout: 7000, maximumAge: 300000 }
    );
  }, []);

  const handlePaySuccess = (orderInfo: any) => {
    setPaidOrderInfo(orderInfo);
    setView("success");
  };

  const currentCohort = COHORTS_CATALOG[selectedCohortId] || COHORTS_CATALOG["genai-1yr"];

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans antialiased text-gray-800 flex flex-col">
      {/* Header bar area */}
      <header className="bg-white border-b border-[#e5e7eb] px-6 sm:px-12 py-4 flex items-center justify-between shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 bg-white p-1 overflow-hidden shrink-0">
            <img src={logoPng.src} alt="Consistency AI" className="w-full h-full object-contain" />
          </div>
          <div className="text-left">
            <span className="font-extrabold text-gray-900 text-sm tracking-tight block">Consistency AI</span>
            <span className="text-[9px] font-bold text-gray-400 block -mt-1 uppercase">
              {currentCohort.title}
            </span>
          </div>
        </Link>

        {/* Stepper pills */}
        <div className="bg-gray-100/80 p-1 rounded-full flex items-center gap-1">
          <span
            className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
              view === "checkout" || view === "loading"
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-400"
            }`}
          >
            Checkout
          </span>
          <span
            className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
              view === "success" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"
            }`}
          >
            Success
          </span>
          <span
            className={`text-[10px] font-black px-3.5 py-1 rounded-full transition-all ${
              view === "receipt" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"
            }`}
          >
            Receipt
          </span>
        </div>
      </header>

      {/* Main Container contents */}
      <main
        className={`flex-1 max-w-[1100px] w-full mx-auto p-6 sm:p-10 flex flex-col ${
          view === "receipt" ? "justify-start" : "justify-center"
        }`}
      >
        {view === "loading" && (
          <div className="w-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative shadow-sm animate-pulse">
              <svg className="animate-spin h-6 w-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Processing secure payment with Cashfree...</h3>
            <p className="text-gray-400 text-xs font-semibold mt-1">Please do not refresh the page or click back.</p>
          </div>
        )}

        {view === "checkout" && (
          <EnrollCheckoutView
            selectedCohortId={selectedCohortId}
            country={country}
            locationStatus={locationStatus}
            onPay={handlePaySuccess}
          />
        )}

        {view === "success" && (
          <EnrollSuccessView
            onViewReceipt={() => setView("receipt")}
            orderInfo={paidOrderInfo}
            cohort={currentCohort}
            country={country}
          />
        )}

        {view === "receipt" && (
          <EnrollReceiptView
            onBackToSuccess={() => setView("success")}
            orderInfo={paidOrderInfo}
            cohort={currentCohort}
            country={country}
          />
        )}
      </main>

      {/* Footer stripe */}
      <footer className="bg-[#f1f5f9] border-t border-[#e2e8f0] py-5 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-[9px] font-bold text-[#64748b] mt-auto select-none shrink-0">
        <span>Payments secured by Cashfree Payments • 256-bit SSL • PCI DSS Compliant</span>
        <span>© 2026 Consistency AI • RBI Authorized Payment Gateway Partner</span>
      </footer>
    </div>
  );
}

export default function CohortEnrollPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-sm font-bold text-gray-500">Loading checkout...</div>}>
      <CohortEnrollContent />
    </Suspense>
  );
}
