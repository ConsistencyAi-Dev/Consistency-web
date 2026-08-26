"use client";

import React from "react";

interface PostInteractionBarProps {
  upvotes: number;
  hearts: number;
  claps: number;
  insights: number;
  commentsCount: number;
  sharesCount: number;
  bookmarksCount: number;
  isBookmarked: boolean;
  onUpvote: () => void;
  onHeart: () => void;
  onClap: () => void;
  onInsight: () => void;
  onToggleComments: () => void;
  onShare: () => void;
  onBookmark: () => void;
}

export default function PostInteractionBar({
  upvotes,
  hearts,
  claps,
  insights,
  commentsCount,
  sharesCount,
  bookmarksCount,
  isBookmarked,
  onUpvote,
  onHeart,
  onClap,
  onInsight,
  onToggleComments,
  onShare,
  onBookmark,
}: PostInteractionBarProps) {
  return (
    <div className="self-stretch px-4 py-2.5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] justify-between items-center inline-flex flex-wrap gap-2">
      {/* Left Reactions Group */}
      <div className="justify-start items-center gap-4 flex">
        <button
          onClick={onUpvote}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Like"
        >
          <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{upvotes}</span>
        </button>

        <button
          onClick={onHeart}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Heart"
        >
          <svg className="w-[18px] h-[18px] text-[#EF4444] fill-[#EF4444]" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{hearts}</span>
        </button>

        <button
          onClick={onClap}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Love"
        >
          <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{claps}</span>
        </button>

        <button
          onClick={onInsight}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Insight"
        >
          <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{insights}</span>
        </button>
      </div>

      <div className="w-px h-5 bg-[#E2E8F0] hidden sm:block" />

      {/* Right Actions Group */}
      <div className="justify-start items-center gap-4 flex">
        <button
          onClick={onToggleComments}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Comments"
        >
          <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{commentsCount}</span>
        </button>

        <button
          onClick={onShare}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Share"
        >
          <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{sharesCount}</span>
        </button>

        <button
          onClick={onBookmark}
          className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity cursor-pointer"
          title="Bookmark"
        >
          <svg className={`w-[18px] h-[18px] ${isBookmarked ? "text-[#2B50EC] fill-[#2B50EC]" : "text-[#64748B]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <span className="text-[#475569] text-xs font-medium">{bookmarksCount}</span>
        </button>
      </div>
    </div>
  );
}
