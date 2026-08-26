"use client";

import React, { useState } from "react";
import { Comment } from "./CommunityPostCard";

interface PostCommentsThreadProps {
  comments: Comment[];
  onCommentLike: (commentId: string) => void;
  onAddComment: (text: string) => void;
  onAddNestedReply: (commentId: string, text: string) => void;
}

export default function PostCommentsThread({
  comments,
  onCommentLike,
  onAddComment,
  onAddNestedReply,
}: PostCommentsThreadProps) {
  const [replyInput, setReplyInput] = useState("");
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [nestedReplyText, setNestedReplyText] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim()) return;
    onAddComment(replyInput.trim());
    setReplyInput("");
  };

  const handleSendNested = (commentId: string) => {
    if (!nestedReplyText.trim()) return;
    onAddNestedReply(commentId, nestedReplyText.trim());
    setNestedReplyText("");
    setActiveReplyId(null);
  };

  return (
    <div className="self-stretch pl-4 flex-col justify-start items-start gap-4 flex pt-2">
      {comments.map((comment) => (
        <div key={comment.id} className="self-stretch flex justify-start items-start gap-3">
          <div className="w-[2px] bg-[#E2E8F0] rounded-full self-stretch flex-shrink-0" />

          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                style={{ width: "28px", height: "28px", borderRadius: "9999px" }}
                src={comment.avatar}
                alt={comment.name}
                className="object-cover border border-[#F1F5F9]"
              />
              <div className="flex items-center gap-2">
                <span className="text-[#0F172A] text-xs font-bold">
                  {comment.name}
                </span>
                <span className="text-[#94A3B8] text-[11px] font-normal">
                  {comment.timeAgo}
                </span>
              </div>
            </div>

            <div className="text-[#475569] text-xs font-normal leading-[18px] pl-9 -mt-1">
              {comment.text}
            </div>

            <div className="flex items-center gap-4 pl-9 pt-1">
              <button
                onClick={() => onCommentLike(comment.id)}
                className={`flex items-center gap-1.5 text-xs transition-colors ${
                  comment.isLiked ? "text-[#EF4444] font-semibold" : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                <svg className={`w-3.5 h-3.5 ${comment.isLiked ? "text-[#EF4444] fill-[#EF4444]" : "text-[#64748B]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                <span className="text-xs font-medium text-[#475569]">
                  {comment.likes}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveReplyId(activeReplyId === comment.id ? null : comment.id);
                  setNestedReplyText("");
                }}
                className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#2B50EC] transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-xs font-medium text-[#475569]">
                  Reply
                </span>
              </button>
            </div>

            {activeReplyId === comment.id && (
              <div className="pl-9 pr-2 w-full mt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Reply to ${comment.name}...`}
                  value={nestedReplyText}
                  onChange={(e) => setNestedReplyText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendNested(comment.id);
                  }}
                  className="flex-1 px-3 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC]"
                />
                <button
                  onClick={() => handleSendNested(comment.id)}
                  className="px-3 py-1.5 bg-[#2B50EC] text-white rounded-lg text-xs font-semibold hover:bg-[#1E40AF] transition-colors cursor-pointer"
                >
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Add New Comment Box */}
      <form onSubmit={handleSubmitComment} className="w-full pt-1 flex items-center gap-2 pl-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
          alt="You"
          className="w-7 h-7 rounded-full object-cover border border-[#E2E8F0]"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          value={replyInput}
          onChange={(e) => setReplyInput(e.target.value)}
          className="flex-1 px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2B50EC] transition-colors"
        />
        <button
          type="submit"
          disabled={!replyInput.trim()}
          className="px-4 py-2 bg-[#2B50EC] text-white text-xs font-semibold rounded-xl disabled:opacity-40 hover:bg-[#1E40AF] transition-colors cursor-pointer"
        >
          Comment
        </button>
      </form>
    </div>
  );
}
