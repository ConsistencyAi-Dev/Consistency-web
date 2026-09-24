"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import GoalsStep from "./GoalsStep";
import ProfileStep from "./ProfileStep";
import QuizStep from "./QuizStep";
import OnboardingHeader from "./OnboardingHeader";
import OnboardingTransition from "./OnboardingTransition";
import { updateProfileApi, submitQuizApi, getProfileApi } from "@/lib/api";
import { useToast } from "@/hooks/useToast";

interface OnboardingWizardProps {
  onComplete: () => void;
}

const ONBOARDING_DRAFT_KEY = "onboarding_draft";

export default function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isFinishing, setIsFinishing] = useState(false);
  const [hasAttemptedContinue, setHasAttemptedContinue] = useState(false);

  const { showToast } = useToast();

  // Step 1 States: Welcome (Starts Empty)
  const [name, setName] = useState("");
  const [source, setSource] = useState("");

  // Step 2 States: Goals Assessment (No Pre-selected Defaults)
  const [mainGoal, setMainGoal] = useState("");
  const [timeline, setTimeline] = useState<number | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [yearsCoding, setYearsCoding] = useState("");
  const [targetRoles, setTargetRoles] = useState<string[]>([]);

  // Step 3 States: Profile Setup (Starts Empty / Filled from User Account)
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [resumeFile, setResumeFile] = useState<string | null>(null);

  const [isParsing, setIsParsing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Step 4 States: Quiz
  const [quizState, setQuizState] = useState<"landing" | "quiz" | "loading" | "results">("landing");
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizLoadingText, setQuizLoadingText] = useState("Analyzing quiz performance...");

  const isInitialMount = useRef(true);


  // Load existing details from localStorage & Backend API on mount
  useEffect(() => {
    const loadSavedState = async () => {
      let draftData: any = {};
      let userData: any = {};

      try {
        const storedDraft = localStorage.getItem(ONBOARDING_DRAFT_KEY);
        if (storedDraft) {
          draftData = JSON.parse(storedDraft);
        }
      } catch (e) {}

      try {
        const storedUser = localStorage.getItem("auth_user");
        if (storedUser) {
          userData = JSON.parse(storedUser);
        }
      } catch (e) {}

      // Fetch fresh profile from backend DB if token exists
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          const res = await getProfileApi(token);
          if (res.data) {
            userData = { ...userData, ...res.data };
          }
        } catch (err) {
          console.warn("Could not fetch remote profile for onboarding:", err);
        }
      }

      // Populate Step 1 states (Do not auto-populate source so new users always complete Step 1)
      const loadedName = draftData.name ?? userData.name ?? "";
      const loadedSource = draftData.source ?? userData.source ?? "";
      setName(loadedName);
      setSource(loadedSource);

      // Populate Step 2 states (Only populate if explicitly saved by user previously)
      if (draftData.goals || userData.goals) {
        const goals = draftData.goals || userData.goals;
        if (goals.mainGoal) setMainGoal(goals.mainGoal);
        if (goals.timeline) setTimeline(Number(goals.timeline));
        if (goals.currentStatus) setCurrentStatus(goals.currentStatus);
        if (goals.yearsCoding) setYearsCoding(goals.yearsCoding);
        if (Array.isArray(goals.targetRoles) && goals.targetRoles.length > 0) {
          setTargetRoles(goals.targetRoles);
        }
      } else {
        if (draftData.mainGoal) setMainGoal(draftData.mainGoal);
        if (draftData.timeline) setTimeline(Number(draftData.timeline));
        if (draftData.currentStatus) setCurrentStatus(draftData.currentStatus);
        if (draftData.yearsCoding) setYearsCoding(draftData.yearsCoding);
        if (Array.isArray(draftData.targetRoles) && draftData.targetRoles.length > 0) {
          setTargetRoles(draftData.targetRoles);
        }
      }

      // Populate Step 3 states
      const loadedEmail = draftData.email ?? userData.email ?? "";
      const loadedMobile = draftData.mobile ?? userData.mobile ?? "";
      const loadedLocation = draftData.location ?? userData.location ?? "";
      const loadedBio = draftData.bio ?? userData.bio ?? "";
      const loadedLinkedin = draftData.linkedinUrl ?? userData.linkedinUrl ?? "";
      const loadedResume = draftData.resumeFile ?? userData.resumeFile ?? null;

      setEmail(loadedEmail);
      setMobile(loadedMobile);
      setLocation(loadedLocation);
      setBio(loadedBio);
      setLinkedinUrl(loadedLinkedin);
      setResumeFile(loadedResume);

      // Populate Step 4 states
      if (draftData.quizAnswers) {
        setQuizAnswers(draftData.quizAnswers);
      }

      // Smart Step Selection: Find first incomplete step or restore saved step
      const isStep1Done = Boolean(loadedName.trim() && loadedSource.trim());

      // Check goals from both flat draft (saved by this wizard) AND nested userData.goals (from backend).
      // Goals can live in either place depending on whether the user completed Step 2 in this session.
      const goalsData = userData.goals || {};
      const isStep2Done = Boolean(
        (draftData.mainGoal || goalsData.mainGoal) &&
        (draftData.timeline || goalsData.timeline) &&
        (draftData.currentStatus || goalsData.currentStatus) &&
        (draftData.yearsCoding || goalsData.yearsCoding) &&
        (Array.isArray(draftData.targetRoles) && draftData.targetRoles.length > 0 ||
         Array.isArray(goalsData.targetRoles) && goalsData.targetRoles.length > 0)
      );

      const isStep3Done = Boolean(
        loadedName.trim() &&
        loadedEmail.trim() &&
        loadedMobile.trim() &&
        loadedLocation.trim() &&
        loadedBio.trim()
      );

      let targetInitialStep: 1 | 2 | 3 | 4 = 1;
      // Determine the smart step based on completion
      let smartStep: 1 | 2 | 3 | 4 = 1;
      if (!isStep1Done) {
        smartStep = 1;
      } else if (!isStep2Done) {
        smartStep = 2;
      } else if (!isStep3Done) {
        smartStep = 3;
      } else {
        smartStep = 4;
      }

      // Mark initial mount done BEFORE setStep so the save-draft effect
      // doesn't fire on the first re-render and overwrite the correct saved step.
      isInitialMount.current = false;

      // If Step 1 is not complete (e.g. new user hasn't selected source), always start at Step 1.
      // Otherwise, restore the user's furthest reached step.
      if (!isStep1Done) {
        targetInitialStep = 1;
      } else if (draftData.step && draftData.step >= smartStep && draftData.step <= 4) {
        targetInitialStep = draftData.step as 1 | 2 | 3 | 4;
      } else {
        targetInitialStep = smartStep;
      }

      setStep(targetInitialStep);
    };

    loadSavedState();
  }, []);

  // Save draft state to localStorage on every change
  useEffect(() => {
    if (isInitialMount.current) return;

    const draft = {
      step,
      name,
      source,
      mainGoal,
      timeline,
      currentStatus,
      yearsCoding,
      targetRoles,
      email,
      mobile,
      location,
      bio,
      linkedinUrl,
      resumeFile,
      quizAnswers,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(ONBOARDING_DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {}
  }, [
    step,
    name,
    source,
    mainGoal,
    timeline,
    currentStatus,
    yearsCoding,
    targetRoles,
    email,
    mobile,
    location,
    bio,
    linkedinUrl,
    resumeFile,
    quizAnswers,
  ]);

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

    const trimmedUrl = linkedinUrl.trim();

    // Check if URL was entered at all
    if (!trimmedUrl) {
      showToast("Please enter your LinkedIn profile URL before parsing.", "error");
      return;
    }

    // Validate it looks like a LinkedIn profile URL
    const isValidLinkedIn = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_%]+\/?/.test(trimmedUrl);
    if (!isValidLinkedIn) {
      showToast("Please enter a valid LinkedIn profile URL (e.g. linkedin.com/in/yourname).", "error");
      return;
    }

    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      showToast("LinkedIn URL saved! Fill in remaining fields manually (live parsing coming soon).", "info");
    }, 1000);
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUploading) return;
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    setTimeout(() => {
      setResumeFile(file.name);
      setIsUploading(false);
      showToast(`Resume uploaded: ${file.name}`, "success");
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
        showToast(`Resume uploaded: ${file.name}`, "success");
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
    if (!timeline) return "Select timeline";
    const weeks = Math.round(timeline * 4.3);
    return `${timeline} months - ${weeks} weeks roadmap`;
  };

  // Step Validation Logic
  const validateCurrentStep = (currentStepNum: 1 | 2 | 3 | 4): { valid: boolean; missingMsg: string } => {
    if (currentStepNum === 1) {
      if (!name.trim() && !source.trim()) {
        return { valid: false, missingMsg: "Please enter your name and select where you heard about us." };
      }
      if (!name.trim()) {
        return { valid: false, missingMsg: "Please enter your name to continue." };
      }
      if (!source.trim()) {
        return { valid: false, missingMsg: "Please select how you heard about Consistency AI." };
      }
    } else if (currentStepNum === 2) {
      const missingGoals: string[] = [];
      if (!mainGoal) missingGoals.push("Main Goal");
      if (!timeline) missingGoals.push("Timeline");
      if (!currentStatus) missingGoals.push("Current Status");
      if (!yearsCoding) missingGoals.push("Years of Coding");
      if (targetRoles.length === 0) missingGoals.push("at least 1 Target Role");

      if (missingGoals.length > 0) {
        return {
          valid: false,
          missingMsg: `Please select required details: ${missingGoals.join(", ")}`,
        };
      }
    } else if (currentStepNum === 3) {
      const missingFields: string[] = [];
      if (!name.trim()) missingFields.push("Full Name");
      if (!email.trim()) missingFields.push("Email");
      if (!mobile.trim()) missingFields.push("Mobile");
      if (!location.trim()) missingFields.push("Location");
      if (!bio.trim()) missingFields.push("Bio");

      if (missingFields.length > 0) {
        return {
          valid: false,
          missingMsg: `Please fill required fields: ${missingFields.join(", ")}`,
        };
      }
    }

    return { valid: true, missingMsg: "" };
  };

  // Intermediate background sync to Backend Database
  const syncProgressToBackend = async () => {
    try {
      const stored = localStorage.getItem("auth_user");
      const token = localStorage.getItem("auth_token") || undefined;
      let userId = "profile";
      if (stored) {
        try {
          const parsedUser = JSON.parse(stored);
          userId = parsedUser.id || parsedUser.userId || "profile";
        } catch (e) {}
      }

      const onboardingGoals = {
        mainGoal: mainGoal || undefined,
        timeline: timeline || undefined,
        currentStatus: currentStatus || undefined,
        yearsCoding: yearsCoding || undefined,
        targetRoles: targetRoles.length > 0 ? targetRoles : undefined,
      };

      await updateProfileApi(
        userId,
        {
          name: name || undefined,
          mobile: mobile || undefined,
          location: location || undefined,
          bio: bio || undefined,
          linkedinUrl: linkedinUrl || undefined,
          resumeFile: resumeFile || undefined,
          profileStrength: getProfileStrength(),
          source: source || undefined,
          goals: onboardingGoals,
        },
        token
      );
    } catch (err) {
      console.warn("Background onboarding sync note:", err);
    }
  };

  const handleNext = () => {
    const { valid, missingMsg } = validateCurrentStep(step);

    if (!valid) {
      setHasAttemptedContinue(true);
      showToast(missingMsg, "error");
      return;
    }

    setHasAttemptedContinue(false);

    // Background sync to backend so intermediate progress is saved
    syncProgressToBackend();

    if (step < 4) {
      setStep((step + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    setHasAttemptedContinue(false);
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleFinish = async () => {
    setIsFinishing(true);

    try {
      const stored = localStorage.getItem("auth_user");
      const token = localStorage.getItem("auth_token") || undefined;
      let userId = "profile";
      let parsedUser: any = {};
      if (stored) {
        try {
          parsedUser = JSON.parse(stored);
          userId = parsedUser.id || parsedUser.userId || "profile";
        } catch (e) {}
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
      localStorage.removeItem(ONBOARDING_DRAFT_KEY);
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
            email: email || parsed.email,
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
        localStorage.removeItem(ONBOARDING_DRAFT_KEY);
      } catch (e) {}
    }
  };

  if (isFinishing) {
    return <OnboardingTransition userName={name} onComplete={onComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col relative">

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
              hasAttemptedContinue={hasAttemptedContinue}
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
              hasAttemptedContinue={hasAttemptedContinue}
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
              hasAttemptedContinue={hasAttemptedContinue}
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
