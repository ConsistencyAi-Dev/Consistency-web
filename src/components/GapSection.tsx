"use client";

import BlurText from "./BlurText";

const STAR_POSITIONS = [
  { top: "14%", left: "18%", size: 3 },
  { top: "22%", left: "72%", size: 2 },
  { top: "34%", left: "42%", size: 2 },
  { top: "48%", left: "84%", size: 3 },
  { top: "58%", left: "12%", size: 2 },
  { top: "68%", left: "58%", size: 2 },
  { top: "78%", left: "28%", size: 3 },
  { top: "20%", left: "50%", size: 2 },
  { top: "84%", left: "76%", size: 2 },
];

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden ring-[5px] ring-white shadow-[0px_12px_24px_0px_rgba(107,114,128,0.08)]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-blue-600 group-hover:text-blue-300 font-semibold transition-colors duration-500">
      {children}
    </span>
  );
}

function GapCard({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="group relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden ring-[5px] ring-white shadow-[0px_12px_24px_0px_rgba(107,114,128,0.05)] hover:shadow-[0px_12px_24px_0px_rgba(37,99,235,0.3)] transition-shadow duration-500">
      {/* Dark blue hover background */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 group-hover:bg-gradient-to-b group-hover:from-[#0B1030] group-hover:via-[#152363] group-hover:to-[#2563EB]" />
      {/* Stars, only visible on hover */}
      {STAR_POSITIONS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-500"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            transitionDelay: `${i * 40}ms`,
          }}
        />
      ))}

      <div className="relative z-10 h-full p-6 flex flex-col justify-between gap-3">
        <h3 className="text-gray-900 group-hover:text-white text-2xl font-bold font-sans transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-500 group-hover:text-blue-100/80 text-lg leading-6 font-sans transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function GapSection() {
  return (
    <section id="gap" className="py-14 sm:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-4 sm:mb-6">
            The Quiet Cost
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] font-sans">
            <BlurText
              text="The Same Gap."
              delay={100}
              animateBy="words"
              direction="top"
              className="inline-block mr-[0.3em]"
            />
            <BlurText
              text="Three People Paying For It."
              delay={300}
              animateBy="words"
              direction="top"
              className="inline-block"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <PhotoCard
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Students studying together"
          />
          <GapCard
            title="The Parents"
            description={
              <>
                Feels It As <Highlight>Fees Paid</Highlight>{" "}
                For Courses That Never Turned Into An Outcome.
              </>
            }
          />
          <PhotoCard
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Industry professionals in a meeting"
          />

          <GapCard
            title="The Students"
            description={
              <>
                Feels It As <Highlight>Guilt</Highlight>{" "}
                — And Slowly, As The Belief That You&apos;re Just &quot;Not A
                Finisher.&quot;
              </>
            }
          />
          <PhotoCard
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
            alt="Graduate celebrating with family"
          />
          <GapCard
            title="The Industry"
            description={
              <>
                Feels It As <Highlight>A Million Open Roles</Highlight>{" "}
                It Can&apos;t Fill With Consistent, Job-Ready People.
              </>
            }
          />
        </div>

        <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto font-sans">
          Every Restart Costs More Than The Course Fee. It Quietly Spends Your Time,
          Your Money, And Your Confidence That You Can Finish Anything At All.
        </p>
      </div>
    </section>
  );
}
