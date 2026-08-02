import AnimatedNumber from "./AnimatedNumber";
import BlurText from "./BlurText";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm border border-gray-100 mb-6">
            The Real Problem
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111827] mb-4">
            The Real Problem Isn’t Learning <br />
            <span className="text-[#2563EB]">Its Finishing</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg max-w-2xl">
            Students doesn't have a learning-access problem. It has a consistency problem.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex-1 rounded-[2.5rem] bg-linear-to-b from-white via-white to-transparent p-[4px] shadow-[0_-10px_30px_rgba(0,0,0,0.03)] flex flex-col relative">
              <div className="flex-1 rounded-[2.3rem] p-6 md:p-8 flex flex-col justify-between bg-linear-to-b from-[#4669FA] from-10% via-[#6B8DFF]/80 via-35% to-[#F9F9F9] to-60%">
                <h3 className="text-[6.5rem] lg:text-[7rem] font-bold text-white leading-none mb-6 tracking-tighter drop-shadow-sm">
                  <AnimatedNumber value={10} startValue={100} suffix="%" />
                </h3>
                
                <div className="mt-auto">
                  <BlurText
                    text="of students actually complete the online courses they enroll in."
                    className="text-[#111827] font-medium text-[17px] leading-[1.35] mb-5 tracking-tight"
                    delay={400}
                  />
                  <BlurText
                    text="REF: GLOBAL EDUCATION BENCHMARK, 2024"
                    className="text-[10px] text-gray-400/80 font-medium tracking-widest uppercase"
                    delay={600}
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 rounded-[2.5rem] bg-linear-to-b from-white via-white to-transparent p-[4px] shadow-[0_-10px_30px_rgba(0,0,0,0.03)] flex flex-col relative">
              <div className="flex-1 rounded-[2.3rem] p-6 md:p-8 flex flex-col justify-between bg-linear-to-b from-[#4669FA] from-10% via-[#6B8DFF]/80 via-35% to-[#F9F9F9] to-60%">
                <h3 className="text-[6.5rem] lg:text-[7rem] font-bold text-white leading-none mb-6 tracking-tighter drop-shadow-sm">
                  <AnimatedNumber value={4} startValue={1} suffix="/10" />
                </h3>
                
                <div className="mt-auto">
                  <div className="text-[11px] font-medium text-gray-600 tracking-widest uppercase mb-4 flex items-center gap-1.5">
                    <span>·</span> SKILLS GAP
                  </div>
                  <BlurText
                    text="recent graduates report lacking the practical skills demanded by modern industry."
                    className="text-[#111827] font-medium text-[17px] leading-[1.35] mb-5 tracking-tight"
                    delay={400}
                  />
                  <BlurText
                    text="SOURCE: ECONOMIC FORUM OUTLOOK"
                    className="text-[10px] text-gray-400/80 font-medium tracking-widest uppercase"
                    delay={600}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (Video) */}
          <div className="lg:h-auto min-h-[400px] rounded-[2.5rem] overflow-hidden relative shadow-md">
            <video
              src="/assets/video/v1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <div className="flex-1 rounded-[2.5rem] bg-linear-to-b from-white via-white to-transparent p-[4px] shadow-[0_-10px_30px_rgba(0,0,0,0.03)] flex flex-col relative">
              <div className="flex-1 rounded-[2.3rem] p-6 md:p-8 flex flex-col justify-between bg-linear-to-b from-[#4669FA] from-10% via-[#6B8DFF]/80 via-35% to-[#F9F9F9] to-60%">
                <h3 className="text-[6.5rem] lg:text-[7rem] font-bold text-white leading-none mb-6 tracking-tighter drop-shadow-sm">
                  <AnimatedNumber value={52} startValue={1} suffix="%" />
                </h3>
                
                <div className="mt-auto">
                  <div className="text-[11px] font-medium text-gray-600 tracking-widest uppercase mb-4 flex items-center gap-1.5">
                    <span>·</span> ZERO TRACTION
                  </div>
                  <BlurText
                    text="of paid online courses are never even opened by the purchaser."
                    className="text-[#111827] font-medium text-[17px] leading-[1.35] mb-5 tracking-tight"
                    delay={400}
                  />
                  <BlurText
                    text="SOURCE: LEARNER ENGAGEMENT DATA REPORT"
                    className="text-[10px] text-gray-400/80 font-medium tracking-widest uppercase"
                    delay={600}
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex-1 rounded-[2.5rem] bg-linear-to-b from-white via-white to-transparent p-[4px] shadow-[0_-10px_30px_rgba(0,0,0,0.03)] flex flex-col relative">
              <div className="flex-1 rounded-[2.3rem] p-6 md:p-8 flex flex-col justify-between bg-linear-to-b from-[#4669FA] from-10% via-[#6B8DFF]/80 via-35% to-[#F9F9F9] to-60%">
                <h3 className="text-[6.5rem] lg:text-[7rem] font-bold text-white leading-none mb-6 tracking-tighter drop-shadow-sm">
                  <AnimatedNumber value={1} startValue={100} prefix="#" />
                </h3>
                
                <div className="mt-auto">
                  <div className="text-[11px] font-medium text-gray-600 tracking-widest uppercase mb-4 flex items-center gap-1.5">
                    <span>·</span> ATTITUDE GAP
                  </div>
                  <BlurText
                    text="The learning attitude gap remains the single largest barrier to student success."
                    className="text-[#111827] font-medium text-[17px] leading-[1.35] mb-5 tracking-tight"
                    delay={400}
                  />
                  <BlurText
                    text="SOURCE: UNIVERSITY BEHAVIORAL STUDY"
                    className="text-[10px] text-gray-400/80 font-medium tracking-widest uppercase"
                    delay={600}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
