"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CounsellingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 2600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="mx-auto max-w-[760px] pb-8">
      <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-0 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        {isLoading ? (
          <div className="px-5 py-6 sm:px-6">
            <div className="mx-auto w-full max-w-[560px] rounded-[24px] border border-[#E6E9EE] bg-[#F7F8FA] p-5 sm:p-7">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[6px] border-[#dfe8ff] bg-[#eef4ff]">
                <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-[#2B50EC] border-t-transparent" />
              </div>

              <h2 className="mt-7 text-center text-[20px] font-semibold leading-[30px] text-[#0F172A]">
                Booking Your Session...
              </h2>

              <p className="mt-2 text-center text-[14px] leading-[21px] text-[#64748B]">
                Please wait while we confirm your session with the counsellor.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    <span>Duration</span>
                  </div>
                  <span className="font-medium text-[#0F172A]">30 minutes</span>
                </div>

                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 9.5h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Fee</span>
                  </div>
                  <span className="font-medium text-[#0F172A]">Free</span>
                </div>

                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9.5" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Counsellor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f7d7c4_0%,#d1a58a_100%)] text-[10px] font-bold text-[#1f2937]">
                      SK
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-[#0F172A]">Santhosh Kumar</div>
                      <div className="text-[11px] text-[#64748B]">Senior Career Counsellor</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div className="h-full w-[70%] rounded-full bg-[#2B50EC]" />
                </div>
                <p className="mt-3 text-center text-[12px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
                  Confirming your slot...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-5 py-6 sm:px-6">
            <div className="mx-auto w-full max-w-[560px] rounded-[24px] border border-[#E6E9EE] bg-[#F7F8FA] p-5 sm:p-7">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#DFF7EE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" className="h-9 w-9" aria-hidden="true">
                  <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h2 className="mt-7 text-center text-[20px] font-semibold leading-[30px] text-[#0F172A]">
                Session Booked Successfully!
              </h2>

              <p className="mt-2 text-center text-[14px] leading-[21px] text-[#64748B]">
                Your session has been confirmed. You will receive a confirmation email shortly.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    <span>Duration</span>
                  </div>
                  <span className="font-medium text-[#0F172A]">30 minutes</span>
                </div>

                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 9.5h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Fee</span>
                  </div>
                  <span className="font-medium text-[#0F172A]">Free</span>
                </div>

                <div className="flex items-center justify-between gap-4 text-[14px] text-[#475569]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[#2B50EC]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9.5" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Counsellor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f7d7c4_0%,#d1a58a_100%)] text-[10px] font-bold text-[#1f2937]">
                      SK
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-[#0F172A]">Santhosh Kumar</div>
                      <div className="text-[11px] text-[#64748B]">Senior Career Counsellor</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[#2B50EC] text-[16px] font-semibold text-white shadow-[0_6px_12px_rgba(43,80,236,0.25)] transition-colors hover:bg-[#1E3BB3]"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto mt-8 w-full max-w-[560px] rounded-[22px] border border-[#E2E8F0] bg-[#F7F8FA] p-5 sm:p-6">
        <h3 className="text-center text-[20px] font-semibold leading-[30px] text-[#0F172A]">
          Prepare for Your Session
        </h3>

        <div className="mt-6 space-y-4">
          {[
            {
              icon: "🧭",
              title: "Update Your Profile",
              text: "Complete your profile for a personalized career recommendation.",
            },
            {
              icon: "📝",
              title: "Prepare Questions",
              text: "Write down your career goals, doubts, and specific questions.",
            },
            {
              icon: "🎯",
              title: "Join 5 Mins Early",
              text: "Test your audio, video, and internet connection before joining.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 rounded-[14px] bg-[#EEF2F7] p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white text-lg shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-semibold leading-[21px] text-[#0F172A]">{item.title}</div>
                <div className="text-[12px] leading-[18px] text-[#64748B]">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-[12px] leading-[18px] text-[#64748B]">
        Need to reschedule? You can modify or cancel your booking up to 24 hours before the
        session.
      </p>
    </div>
  );
}

