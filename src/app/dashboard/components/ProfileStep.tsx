"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProfileStepProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  mobile: string;
  setMobile: (mobile: string) => void;
  location: string;
  setLocation: (loc: string) => void;
  bio: string;
  setBio: (bio: string) => void;
  linkedinUrl: string;
  setLinkedinUrl: (url: string) => void;
  resumeFile: string | null;
  isParsing: boolean;
  isUploading: boolean;
  isDragging: boolean;
  handleParseProfile: () => void;
  handleResumeUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: () => void;
  handleDrop: (e: React.DragEvent) => void;
  getProfileStrength: () => number;
  getInitials: (name: string) => string;
  onNext: () => void;
  onBack: () => void;
}

export default function ProfileStep({
  name,
  setName,
  email,
  setEmail,
  mobile,
  setMobile,
  location,
  setLocation,
  bio,
  setBio,
  linkedinUrl,
  setLinkedinUrl,
  resumeFile,
  isParsing,
  isUploading,
  isDragging,
  handleParseProfile,
  handleResumeUpload,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  getProfileStrength,
  getInitials,
  onNext,
  onBack,
}: ProfileStepProps) {
  return (
    <motion.div
      key="step-3"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-gray-100/60 shadow-xl shadow-gray-200/50 p-8 sm:p-10 max-w-[620px] w-full flex flex-col relative overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="flex justify-between items-center w-full mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Basic Profile
            </h2>
            <span className="bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-extrabold py-1 px-2.5 rounded-full uppercase tracking-wider">
              +{getProfileStrength()}% strength
            </span>
          </div>
          
          <button
            type="button"
            onClick={onBack}
            className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors shadow-sm flex items-center gap-1"
          >
            ← Back
          </button>
        </div>

        {/* Avatar section */}
        <div className="w-full flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-black shadow-sm">
              {getInitials(name)}
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">Avatar - Initials</h4>
              <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                {getInitials(name)} – premium initials only
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled
            className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-400 rounded-xl text-xs font-bold cursor-not-allowed"
          >
            Upload disabled
          </button>
        </div>

        {/* Basic details inputs */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile number"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Bio text field */}
        <div className="w-full mb-6">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Bio - e.g. Aspiring Full-Stack dev, 1-2y coding, love building..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] rounded-2xl text-[14px] font-semibold text-black bg-white transition-all outline-none shadow-sm resize-none placeholder-gray-400"
          />
        </div>

        {/* Resume & LinkedIn Section Header */}
        <div className="w-full flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gray-150 flex items-center justify-center text-[11px] font-extrabold text-gray-700">
            3
          </div>
          <h3 className="font-extrabold text-xs text-gray-800 tracking-tight uppercase">
            Resume / LinkedIn
          </h3>
        </div>

        {/* Resume Upload & LinkedIn Parsing boxes */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Upload Resume Box */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`p-5 rounded-2xl border-2 border-dashed flex flex-col justify-between transition-all ${
              isDragging
                ? "border-[#0055FF] bg-blue-50/10"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">Upload Resume</h4>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5 max-w-[160px] truncate">
                  {resumeFile ? resumeFile : "PDF - Drag & drop simulation"}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <label className="relative cursor-pointer">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                <div className="w-full bg-gray-900 hover:bg-black text-white py-2.5 px-4 rounded-xl text-xs font-bold text-center transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5">
                  {isUploading ? (
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : null}
                  <span>{resumeFile ? "Change file" : "Choose file"}</span>
                </div>
              </label>
            </div>
          </div>

          {/* LinkedIn Parsing Box */}
          <div className="p-5 rounded-2xl border border-gray-200 bg-white flex flex-col justify-between">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-800">LinkedIn URL</h4>
                <input
                  type="text"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="linkedin.com/in/rahulkumar"
                  className="w-full mt-2 border-b border-gray-200 focus:border-[#0055FF] text-[11px] font-semibold text-black bg-white transition-all outline-none py-1 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={handleParseProfile}
                disabled={isParsing}
                className="w-full border border-gray-200 hover:bg-gray-50 text-gray-800 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isParsing ? (
                  <svg className="animate-spin h-3.5 w-3.5 text-gray-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : null}
                <span>{isParsing ? "Parsing..." : "Parse profile"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Continue to Quiz button */}
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-[#0055FF] hover:bg-[#0044EE] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        >
          Continue to Quiz →
        </button>
      </div>
    </motion.div>
  );
}
