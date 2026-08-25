"use client";

import React, { useState } from "react";
import { Post } from "./CommunityPostCard";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostCreated: (post: Post) => void;
}

export default function CreatePostModal({
  isOpen,
  onClose,
  onPostCreated,
}: CreatePostModalProps) {
  const [text, setText] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(["#GenAI", "#Consistency"]);
  const [hasImage, setHasImage] = useState(false);
  const [imageTitle, setImageTitle] = useState("");

  if (!isOpen) return null;

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      let formatted = tagInput.trim();
      if (!formatted.startsWith("#")) formatted = "#" + formatted;
      if (!tags.includes(formatted)) {
        setTags([...tags, formatted]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      name: "Santhosh",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      badge: "Pro Member",
      meta: "Full Stack Cohort · Just now",
      text: text.trim(),
      tags: tags.length > 0 ? tags : ["#Discussion"],
      image: hasImage,
      imageTitle: imageTitle || "Project screenshot",
      upvotes: 1,
      hearts: 1,
      claps: 0,
      insights: 0,
      commentsCount: 0,
      sharesCount: 0,
      bookmarksCount: 0,
      comments: [],
      isExpanded: false,
    };

    onPostCreated(newPost);
    setText("");
    setHasImage(false);
    setImageTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white border border-[#E2E8F0] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Avatar"
              className="w-9 h-9 rounded-full object-cover border border-[#F1F5F9]"
            />
            <div>
              <h3 className="text-sm font-bold text-[#0F172A]">Create Community Post</h3>
              <p className="text-[11px] text-[#94A3B8]">Share progress, ask questions, or find teammates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#F1F5F9] text-[#64748B] flex items-center justify-center text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <textarea
            rows={4}
            placeholder="What project are you building or working on? Share details..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2B50EC] resize-none"
            required
          />

          {/* Image Toggle */}
          <div className="flex flex-col gap-2 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-semibold text-[#334155] flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Attach Project Screenshot Preview
              </span>
              <input
                type="checkbox"
                checked={hasImage}
                onChange={(e) => setHasImage(e.target.checked)}
                className="w-4 h-4 accent-[#2B50EC] rounded cursor-pointer"
              />
            </label>

            {hasImage && (
              <input
                type="text"
                placeholder="Screenshot label (e.g., 'RAG Architecture Diagram')"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                className="mt-1 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC]"
              />
            )}
          </div>

          {/* Hashtags Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#475569]">Tags (press Enter to add)</label>
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-[#EEF2FF] border border-[#C7D2FE] text-[#2B50EC] text-xs font-semibold rounded-full flex items-center gap-1.5"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-red-500 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add a hashtag (e.g. #GenAI)..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC]"
            />
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E2E8F0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#E2E8F0] text-[#475569] text-xs font-semibold rounded-xl hover:bg-[#F8FAFC]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!text.trim()}
              className="px-5 py-2 bg-[#2B50EC] text-white text-xs font-semibold rounded-xl hover:bg-[#1E40AF] disabled:opacity-40 transition-colors"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
