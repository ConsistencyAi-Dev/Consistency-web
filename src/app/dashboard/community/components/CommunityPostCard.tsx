"use client";

import React, { useState } from "react";

export interface Comment {
  id: string;
  name: string;
  avatar: string;
  timeAgo: string;
  text: string;
  likes: number;
  isLiked?: boolean;
}

export interface Post {
  id: string;
  name: string;
  avatar: string;
  badge?: string;
  meta: string;
  text: string;
  tags: string[];
  image?: boolean;
  imageTitle?: string;
  upvotes: number;
  hearts: number;
  claps: number;
  insights: number;
  commentsCount: number;
  sharesCount: number;
  bookmarksCount: number;
  comments: Comment[];
  isExpanded?: boolean;
}

interface CommunityPostCardProps {
  post: Post;
  onUpdatePost?: (updatedPost: Post) => void;
}

export default function CommunityPostCard({ post }: CommunityPostCardProps) {
  const [isExpanded, setIsExpanded] = useState(post.isExpanded ?? false);
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const [hearts, setHearts] = useState(post.hearts);
  const [isHearted, setIsHearted] = useState(true); // Red heart in reference image

  const [claps, setClaps] = useState(post.claps);
  const [isClapped, setIsClapped] = useState(false);

  const [insights, setInsights] = useState(post.insights);
  const [isInsightful, setIsInsightful] = useState(false);

  const [bookmarks, setBookmarks] = useState(post.bookmarksCount);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [replyInput, setReplyInput] = useState("");
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [nestedReplyText, setNestedReplyText] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvotes((prev) => prev - 1);
      setIsUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      setIsUpvoted(true);
    }
  };

  const handleHeart = () => {
    if (isHearted) {
      setHearts((prev) => prev - 1);
      setIsHearted(false);
    } else {
      setHearts((prev) => prev + 1);
      setIsHearted(true);
    }
  };

  const handleClap = () => {
    if (isClapped) {
      setClaps((prev) => prev - 1);
      setIsClapped(false);
    } else {
      setClaps((prev) => prev + 1);
      setIsClapped(true);
    }
  };

  const handleInsight = () => {
    if (isInsightful) {
      setInsights((prev) => prev - 1);
      setIsInsightful(false);
    } else {
      setInsights((prev) => prev + 1);
      setIsInsightful(true);
    }
  };

  const handleBookmark = () => {
    if (isBookmarked) {
      setBookmarks((prev) => prev - 1);
      setIsBookmarked(false);
    } else {
      setBookmarks((prev) => prev + 1);
      setIsBookmarked(true);
    }
  };

  const handleCommentLike = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const isLiked = !c.isLiked;
          return {
            ...c,
            isLiked,
            likes: isLiked ? c.likes + 1 : c.likes - 1,
          };
        }
        return c;
      })
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: "Santhosh (You)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      timeAgo: "Just now",
      text: replyInput.trim(),
      likes: 0,
      isLiked: false,
    };

    setComments((prev) => [...prev, newComment]);
    setReplyInput("");
    setIsExpanded(true);
  };

  const handleAddNestedReply = (commentId: string) => {
    if (!nestedReplyText.trim()) return;

    const targetComment = comments.find((c) => c.id === commentId);
    const targetName = targetComment ? `@${targetComment.name.split(" ")[0]} ` : "";

    const newComment: Comment = {
      id: Date.now().toString(),
      name: "Santhosh (You)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      timeAgo: "Just now",
      text: targetName + nestedReplyText.trim(),
      likes: 0,
      isLiked: false,
    };

    setComments((prev) => [...prev, newComment]);
    setNestedReplyText("");
    setActiveReplyId(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToast(true);
    setShowMenu(false);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  return (
    <article className="w-full p-6 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05),0px_8px_18px_-8px_rgba(0,0,0,0.04)] rounded-2xl border border-[#E2E8F0] flex flex-col justify-start items-start gap-4 transition-all duration-200 hover:border-[#CBD5E1]">
      {/* Header Row */}
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{ width: "40px", height: "40px", borderRadius: "9999px" }}
            src={post.avatar}
            alt={post.name}
            className="object-cover border border-[#F1F5F9]"
          />
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-[#0F172A] text-sm font-bold tracking-tight">
                {post.name}
              </div>
              {post.badge && (
                <div className="px-2 py-0.5 bg-[rgba(43,80,236,0.10)] rounded-full border border-[rgba(43,80,236,0.20)] justify-start items-start flex">
                  <div className="text-[#2B50EC] text-[10px] font-bold uppercase leading-[15px]">
                    {post.badge}
                  </div>
                </div>
              )}
            </div>
            <div className="text-[#94A3B8] text-xs font-normal leading-[18px]">
              {post.meta}
            </div>
          </div>
        </div>

        {/* Options Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] text-[#64748B] transition-colors"
            title="Options"
          >
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-[13.33px] h-[1.67px] bg-[#64748B] rounded-full shadow-[0_-4px_0_0_#64748B,0_4px_0_0_#64748B]" />
            </div>
          </button>

          {showMenu && (
            <div className="absolute right-0 top-9 w-40 bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-20 py-1 text-xs font-medium text-[#475569]">
              <button
                onClick={handleCopyLink}
                className="w-full text-left px-3.5 py-2 hover:bg-[#F8FAFC] flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
              <button
                onClick={handleBookmark}
                className="w-full text-left px-3.5 py-2 hover:bg-[#F8FAFC] flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {isBookmarked ? "Remove Saved" : "Save Post"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post Text Content */}
      <div className="self-stretch text-[#475569] text-base font-normal leading-6">
        {post.text}
      </div>

      {/* Project Screenshot / Media Box (when present) */}
      {post.image && (
        <div className="self-stretch h-[220px] relative bg-[#0B1020] overflow-hidden rounded-xl border border-[#E2E8F0] flex flex-col justify-end items-start group">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2B50EC_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              <span className="ml-2 text-[11px] font-mono text-[#94A3B8]">rag_pipeline.py — Vector Store Search</span>
            </div>
            <span className="text-[10px] font-mono bg-[#1E293B] text-[#38BDF8] px-2 py-0.5 rounded border border-[#334155]">Pinecone + LangChain</span>
          </div>

          <div className="absolute inset-x-4 top-12 bottom-16 bg-[#0F172A]/90 rounded-lg p-3 border border-[#1E293B] text-xs font-mono text-[#E2E8F0] overflow-hidden">
            <p className="text-[#38BDF8]">&gt; initialize_embeddings(model=&quot;text-embedding-3-small&quot;)</p>
            <p className="text-[#A7F3D0] mt-1">&gt; vectorstore = PineconeVectorStore.from_existing_index()</p>
            <p className="text-[#94A3B8] mt-1">&gt; retriever = vectorstore.as_retriever(search_kwargs=&#123;&quot;k&quot;: 5&#125;)</p>
            <p className="text-[#FDE047] mt-1">&gt; response = rag_chain.invoke(&quot;Explain RAG vector retrieval&quot;)</p>
          </div>

          <div className="w-full h-14 px-3 py-2.5 bg-black/40 backdrop-blur-md flex flex-col justify-start items-start relative z-10 border-t border-white/10">
            <div className="text-white text-xs font-semibold">
              {post.imageTitle || "Project screenshot"}
            </div>
          </div>
        </div>
      )}

      {/* Tags Row */}
      <div className="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
        {post.tags.map((tag) => (
          <div
            key={tag}
            className="px-2.5 py-1 bg-[#EEF2FF] rounded-full border border-[#C7D2FE] justify-start items-start flex cursor-pointer hover:bg-[#E0E7FF] transition-colors"
          >
            <div className="text-[#2B50EC] text-xs font-semibold">
              {tag}
            </div>
          </div>
        ))}
      </div>

      {/* Interaction Bar (Reactions Left | Vertical Separator | Actions Right) */}
      <div className="self-stretch px-4 py-2.5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] justify-between items-center inline-flex flex-wrap gap-2">
        {/* Left Reactions Group */}
        <div className="justify-start items-center gap-4 flex">
          {/* Reaction 1: Gray Heart 32 */}
          <button
            onClick={handleUpvote}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Like"
          >
            <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {upvotes}
            </span>
          </button>

          {/* Reaction 2: Red Filled Heart 9 */}
          <button
            onClick={handleHeart}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Heart"
          >
            <svg className="w-[18px] h-[18px] text-[#EF4444] fill-[#EF4444]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {hearts}
            </span>
          </button>

          {/* Reaction 3: Gray Heart 7 */}
          <button
            onClick={handleClap}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Love"
          >
            <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {claps}
            </span>
          </button>

          {/* Reaction 4: Gray Heart 5 */}
          <button
            onClick={handleInsight}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Insight"
          >
            <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {insights}
            </span>
          </button>
        </div>

        {/* Separator Line */}
        <div className="w-px h-5 bg-[#E2E8F0] hidden sm:block" />

        {/* Right Actions Group */}
        <div className="justify-start items-center gap-4 flex">
          {/* Comments Count */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Comments"
          >
            <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {comments.length > 0 ? comments.length : post.commentsCount}
            </span>
          </button>

          {/* Share Count */}
          <button
            onClick={handleCopyLink}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Share"
          >
            <svg className="w-[18px] h-[18px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {post.sharesCount}
            </span>
          </button>

          {/* Bookmark Count */}
          <button
            onClick={handleBookmark}
            className="justify-start items-center gap-1.5 flex hover:opacity-80 transition-opacity"
            title="Bookmark"
          >
            <svg className={`w-[18px] h-[18px] ${isBookmarked ? "text-[#2B50EC] fill-[#2B50EC]" : "text-[#64748B]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-[#475569] text-xs font-medium">
              {bookmarks}
            </span>
          </button>
        </div>
      </div>

      {/* Copy Toast Alert */}
      {copiedToast && (
        <div className="w-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between">
          <span>Link copied to clipboard!</span>
        </div>
      )}

      {/* EXPANDED COMMENT THREAD (Matching exact reference screenshot layout) */}
      {isExpanded && (
        <div className="self-stretch pl-4 flex-col justify-start items-start gap-4 flex pt-2">
          {comments.map((comment) => (
            <div key={comment.id} className="self-stretch flex justify-start items-start gap-3">
              {/* Left Vertical Line Connector */}
              <div className="w-[2px] bg-[#E2E8F0] rounded-full self-stretch flex-shrink-0" />

              {/* Comment Body */}
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

                {/* Comment Actions (Heart + Count & Reply) */}
                <div className="flex items-center gap-4 pl-9 pt-1">
                  <button
                    onClick={() => handleCommentLike(comment.id)}
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
                    className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#2B50EC] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-xs font-medium text-[#475569]">
                      Reply
                    </span>
                  </button>
                </div>

                {/* Nested Reply Input */}
                {activeReplyId === comment.id && (
                  <div className="pl-9 pr-2 w-full mt-2 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={`Reply to ${comment.name}...`}
                      value={nestedReplyText}
                      onChange={(e) => setNestedReplyText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddNestedReply(comment.id);
                      }}
                      className="flex-1 px-3 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#2B50EC]"
                    />
                    <button
                      onClick={() => handleAddNestedReply(comment.id)}
                      className="px-3 py-1.5 bg-[#2B50EC] text-white rounded-lg text-xs font-semibold hover:bg-[#1E40AF] transition-colors"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add New Comment Box */}
          <form onSubmit={handleAddComment} className="w-full pt-1 flex items-center gap-2 pl-4">
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
              className="px-4 py-2 bg-[#2B50EC] text-white text-xs font-semibold rounded-xl disabled:opacity-40 hover:bg-[#1E40AF] transition-colors"
            >
              Comment
            </button>
          </form>
        </div>
      )}
    </article>
  );
}
