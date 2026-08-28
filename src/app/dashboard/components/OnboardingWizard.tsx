"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import GoalsStep from "./GoalsStep";
import ProfileStep from "./ProfileStep";
import QuizStep from "./QuizStep";
import OnboardingHeader from "./OnboardingHeader";
import OnboardingTransition from "./OnboardingTransition";
import { updateProfileApi, submitQuizApi } from "@/lib/api";

interface OnboardingWizardProps {
  onComplete: () => void;
}

export default function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isFinishing, setIsFinishing] = useState(false);
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

  // Load registered user from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("auth_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.mobile) setMobile(parsed.mobile);
        if (parsed.location) setLocation(parsed.location);
        if (parsed.bio) setBio(parsed.bio);
      }
    } catch (e) {
      console.error("Error reading auth_user from localStorage", e);
    }
  }, []);


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


  const handleFinish = async () => {
    setIsFinishing(true);

    try {
      const stored = localStorage.getItem("auth_user");
      const token = localStorage.getItem("auth_token") || undefined;
      let userId = "usr_1";
      let parsedUser: any = {};
      if (stored) {
        parsedUser = JSON.parse(stored);
        userId = parsedUser.id || userId;
      }

      // Calculate final profile strength
      const calculatedStrength = getProfileStrength();

      const onboardingGoals = {
        mainGoal,
        timeline,
        currentStatus,
        yearsCoding,
        targetRoles,
      };

      // 1. Update user profile, source, goals, and isOnboarded in PostgreSQL DB
      const updateRes = await updateProfileApi(
        userId,
        {
          name: name || undefined,
          mobile: mobile || undefined,
          location: location || undefined,
          bio: bio || undefined,
          linkedinUrl: linkedinUrl || undefined,
          resumeFile: resumeFile || undefined,
          profileStrength: calculatedStrength,
          isOnboarded: true,
          source: source || undefined,
          goals: onboardingGoals,
        },
        token
      );

      // 2. Submit quiz assessment answers to DB
      if (Object.keys(quizAnswers).length > 0) {
        try {
          await submitQuizApi({
            userId,
            answers: quizAnswers,
            timeSpentSeconds: 120,
          });
        } catch (quizErr) {
          console.error("Quiz submission error:", quizErr);
        }
      }

      // 3. Update local storage auth_user with completed profile, goals, and strength
      const finalStrength = updateRes?.data?.profileStrength || calculatedStrength;
      const updated = {
        ...parsedUser,
        name: name || parsedUser.name,
        email: email || parsedUser.email,
        mobile: mobile || parsedUser.mobile,
        location: location || parsedUser.location,
        bio: bio || parsedUser.bio,
        linkedinUrl: linkedinUrl || parsedUser.linkedinUrl,
        resumeFile: resumeFile || parsedUser.resumeFile,
        profileStrength: finalStrength,
        isOnboarded: true,
        source: source || parsedUser.source,
        quizAttempted: Object.keys(quizAnswers).length > 0,
        goals: onboardingGoals,
      };
      localStorage.setItem("auth_user", JSON.stringify(updated));
      localStorage.setItem("isOnboarded", "true");
    } catch (err) {
      console.error("Failed to sync onboarding data to backend DB:", err);
      // Fallback update to localStorage
      try {
        const stored = localStorage.getItem("auth_user");
        const parsed = stored ? JSON.parse(stored) : {};
        localStorage.setItem(
          "auth_user",
          JSON.stringify({
            ...parsed,
            name: name || parsed.name,
            mobile,
            location,
            bio,
            linkedinUrl,
            resumeFile,
            isOnboarded: true,
            source,
            profileStrength: getProfileStrength(),
            goals: { mainGoal, timeline, currentStatus, yearsCoding, targetRoles },
          })
        );
        localStorage.setItem("isOnboarded", "true");
      } catch (e) {}
    }
  };

  if (isFinishing) {
    return <OnboardingTransition userName={name} onComplete={onComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
      {/* Onboarding Header */}
      <OnboardingHeader step={step} quizState={quizState} />

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
              onComplete={handleFinish}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
