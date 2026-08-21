"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import GoalsStep from "./GoalsStep";
import ProfileStep from "./ProfileStep";
import QuizStep from "./QuizStep";

interface OnboardingWizardProps {
  onComplete: () => void;
}

export default function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(4);
  const [name, setName] = useState("");
  const [source, setSource] = useState("");

  // Step 2 States: Goals Assessment
  const [mainGoal, setMainGoal] = useState("Get a Job in 6 months");
  const [timeline, setTimeline] = useState(6);
  const [currentStatus, setCurrentStatus] = useState<"Student" | "Working Professional">("Student");
  const [yearsCoding, setYearsCoding] = useState("1-2y");
  const [targetRoles, setTargetRoles] = useState<string[]>(["AI/ML"]);

  // Step 3 States: Profile Setup
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [resumeFile, setResumeFile] = useState<string | null>(null);

  const [isParsing, setIsParsing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [quizState, setQuizState] = useState<"landing" | "quiz" | "loading" | "results">("landing");
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizLoadingText, setQuizLoadingText] = useState("Analyzing quiz performance...");

  // Profile strength calculation based on fields filled
  const getProfileStrength = () => {
    let strength = 25;
    if (name.trim() !== "") strength += 10;
    if (email.trim() !== "") strength += 15;
    if (mobile.trim() !== "") strength += 15;
    if (location.trim() !== "") strength += 15;
    if (bio.trim() !== "") strength += 10;
    if (resumeFile !== null) strength += 15;
    if (linkedinUrl.trim() !== "") strength += 15;
    return Math.min(strength, 100);
  };

  const handleParseProfile = () => {
    if (isParsing) return;
    setIsParsing(true);
    setTimeout(() => {
      setName("Rahul Kumar");
      setEmail("rahul.kumar@email.com");
      setMobile("+91 98765 43210");
      setLocation("Bengaluru, India");
      setBio("Aspiring Full-Stack developer with 1-2 years of coding experience. Passionate about building web applications and learning new technologies.");
      setLinkedinUrl("linkedin.com/in/rahulkumar");
      setIsParsing(false);
    }, 1500);
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUploading) return;
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    setTimeout(() => {
      setResumeFile(file.name);
      setIsUploading(false);
    }, 1200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (isUploading) return;
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setResumeFile(file.name);
        setIsUploading(false);
      }, 1200);
    }
  };

  // Timer for Step 4 Loading simulation
  useEffect(() => {
    if (quizState !== "loading") return;

    const timer1 = setTimeout(() => {
      setQuizLoadingText("Calibrating custom learning path...");
    }, 1200);

    const timer2 = setTimeout(() => {
      setQuizLoadingText("Done! Preparing your dashboard...");
    }, 2400);

    const timer3 = setTimeout(() => {
      setQuizState("results");
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [quizState]);

  // Initials generator
  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0 || parts[0] === "") return "?";
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const toggleTargetRole = (role: string) => {
    setTargetRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const getTimelineWeeksPill = () => {
    const weeks = Math.round(timeline * 4.3);
    return `${timeline} months - ${weeks} weeks roadmap`;
  };

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3 | 4);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
      {/* Onboarding Header */}
      <header className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between shrink-0 shadow-sm">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <img src="/logo.png" alt="Consistency AI" className="w-5.5 h-5.5 object-contain" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-gray-900 tracking-tight text-base sm:text-lg">
              Consistency AI
            </span>
            <span className="text-[9px] tracking-widest font-extrabold text-[#0055FF] uppercase">
              Onboarding
            </span>
          </div>
        </div>

        {/* Right Side: Step Progress */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold">
            <span className={step === 1 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
              Welcome
            </span>
            <span className="text-gray-300">/</span>
            <span className={step === 2 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
              Goals
            </span>
            <span className="text-gray-300">/</span>
            <span className={step === 3 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
              Profile
            </span>
            <span className="text-gray-300">/</span>
            <span className={step === 4 ? "text-[#0055FF]" : "text-gray-400 transition-colors"}>
              Quiz
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1.5 w-16 sm:w-24 bg-gray-100 rounded-full overflow-hidden border border-gray-100/20 shadow-inner">
              <motion.div
                className="h-full bg-gray-900"
                animate={{
                  width: `${step === 4 && quizState === "quiz"
                      ? 90
                      : step === 4 && quizState === "loading"
                        ? 100
                        : ((step - 0.2) / 4) * 100
                    }%`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              />
            </div>
            <span className="text-xs font-bold text-gray-500 tabular-nums">
              Step {step} of 4
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 bg-[#F8F9FC]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <WelcomeStep
              name={name}
              setName={setName}
              source={source}
              setSource={setSource}
              onNext={handleNext}
              getInitials={getInitials}
            />
          )}

          {step === 2 && (
            <GoalsStep
              mainGoal={mainGoal}
              setMainGoal={setMainGoal}
              timeline={timeline}
              setTimeline={setTimeline}
              currentStatus={currentStatus}
              setCurrentStatus={setCurrentStatus}
              yearsCoding={yearsCoding}
              setYearsCoding={setYearsCoding}
              targetRoles={targetRoles}
              toggleTargetRole={toggleTargetRole}
              onNext={handleNext}
              onBack={handleBack}
              getTimelineWeeksPill={getTimelineWeeksPill}
            />
          )}

          {step === 3 && (
            <ProfileStep
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              mobile={mobile}
              setMobile={setMobile}
              location={location}
              setLocation={setLocation}
              bio={bio}
              setBio={setBio}
              linkedinUrl={linkedinUrl}
              setLinkedinUrl={setLinkedinUrl}
              resumeFile={resumeFile}
              isParsing={isParsing}
              isUploading={isUploading}
              isDragging={isDragging}
              handleParseProfile={handleParseProfile}
              handleResumeUpload={handleResumeUpload}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              getProfileStrength={getProfileStrength}
              getInitials={getInitials}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {step === 4 && (
            <QuizStep
              quizState={quizState}
              setQuizState={setQuizState}
              quizQuestionIndex={quizQuestionIndex}
              setQuizQuestionIndex={setQuizQuestionIndex}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              quizAnswers={quizAnswers}
              setQuizAnswers={setQuizAnswers}
              quizLoadingText={quizLoadingText}
              handleBack={handleBack}
              onComplete={onComplete}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
