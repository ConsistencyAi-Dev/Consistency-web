"use client";

import React, { useState } from "react";
import PostInteractionBar from "./PostInteractionBar";
import PostCommentsThread from "./PostCommentsThread";

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
  const [isHearted, setIsHearted] = useState(true);
  const [claps, setClaps] = useState(post.claps);
  const [isClapped, setIsClapped] = useState(false);
  const [insights, setInsights] = useState(post.insights);
  const [isInsightful, setIsInsightful] = useState(false);
  const [bookmarks, setBookmarks] = useState(post.bookmarksCount);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [showMenu, setShowMenu] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const handleUpvote = () => {
    setUpvotes((prev) => (isUpvoted ? prev - 1 : prev + 1));
    setIsUpvoted(!isUpvoted);
  };

  const handleHeart = () => {
    setHearts((prev) => (isHearted ? prev - 1 : prev + 1));
    setIsHearted(!isHearted);
  };

  const handleClap = () => {
    setClaps((prev) => (isClapped ? prev - 1 : prev + 1));
    setIsClapped(!isClapped);
  };

  const handleInsight = () => {
    setInsights((prev) => (isInsightful ? prev - 1 : prev + 1));
    setIsInsightful(!isInsightful);
  };

  const handleBookmark = () => {
    setBookmarks((prev) => (isBookmarked ? prev - 1 : prev + 1));
    setIsBookmarked(!isBookmarked);
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

  const handleAddComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      name: "Santhosh (You)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      timeAgo: "Just now",
      text,
      likes: 0,
      isLiked: false,
    };
    setComments((prev) => [...prev, newComment]);
    setIsExpanded(true);
  };

  const handleAddNestedReply = (commentId: string, text: string) => {
    const targetComment = comments.find((c) => c.id === commentId);
    const targetName = targetComment ? `@${targetComment.name.split(" ")[0]} ` : "";
    const newComment: Comment = {
      id: Date.now().toString(),
      name: "Santhosh (You)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      timeAgo: "Just now",
      text: targetName + text,
      likes: 0,
      isLiked: false,
    };
    setComments((prev) => [...prev, newComment]);
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
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] text-[#64748B] transition-colors cursor-pointer"
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
                className="w-full text-left px-3.5 py-2 hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
              <button
                onClick={handleBookmark}
                className="w-full text-left px-3.5 py-2 hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
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

      {/* Media Box */}
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
            <div className="text-[#2B50EC] text-xs font-semibold">{tag}</div>
          </div>
        ))}
      </div>

      {/* Interaction Bar */}
      <PostInteractionBar
        upvotes={upvotes}
        hearts={hearts}
        claps={claps}
        insights={insights}
        commentsCount={comments.length > 0 ? comments.length : post.commentsCount}
        sharesCount={post.sharesCount}
        bookmarksCount={bookmarks}
        isBookmarked={isBookmarked}
        onUpvote={handleUpvote}
        onHeart={handleHeart}
        onClap={handleClap}
        onInsight={handleInsight}
        onToggleComments={() => setIsExpanded(!isExpanded)}
        onShare={handleCopyLink}
        onBookmark={handleBookmark}
      />

      {copiedToast && (
        <div className="w-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between">
          <span>Link copied to clipboard!</span>
        </div>
      )}

      {/* Expanded Comments Thread */}
      {isExpanded && (
        <PostCommentsThread
          comments={comments}
          onCommentLike={handleCommentLike}
          onAddComment={handleAddComment}
          onAddNestedReply={handleAddNestedReply}
        />
      )}
    </article>
  );
}
