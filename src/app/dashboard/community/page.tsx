"use client";

import React, { useState } from "react";
import CommunityPostCard, { Post } from "./components/CommunityPostCard";
import CreatePostModal from "./components/CreatePostModal";

const initialPosts: Post[] = [
  {
    id: "post-1",
    name: "Rahul Kumar",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    badge: "Pro Member",
    meta: "AI/ML Mastery Cohort · 3 hours ago",
    text: "Just completed my RAG Chatbot project! Used LangChain + Pinecone for vector storage. Took 3 weeks but learned so much about embeddings and retrieval. Check it out on the Projects portal!",
    image: true,
    imageTitle: "Project screenshot",
    tags: ["#GenAI", "#RAG", "#LangChain"],
    upvotes: 47,
    hearts: 12,
    claps: 8,
    insights: 6,
    commentsCount: 12,
    sharesCount: 18,
    bookmarksCount: 9,
    isExpanded: false,
    comments: [
      {
        id: "c-1",
        name: "Vikram Singh",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        timeAgo: "2h ago",
        text: "Awesome work Rahul! How did you handle document chunking for long PDFs?",
        likes: 5,
      },
    ],
  },
  {
    id: "post-2",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    badge: "Pro Member",
    meta: "Frontend + UI/UX · 5 hours ago",
    text: "What's everyone's strategy for the upcoming Global Hackathon? Looking for teammates who are strong in backend/ML. I can handle the frontend and UI/UX side.",
    tags: ["#Hackathon", "#TeamUp"],
    upvotes: 32,
    hearts: 9,
    claps: 7,
    insights: 5,
    commentsCount: 28,
    sharesCount: 11,
    bookmarksCount: 6,
    isExpanded: true, // Matches expanded section 2 in prompt
    comments: [
      {
        id: "c-priya-1",
        name: "Amit Verma",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        timeAgo: "2h ago",
        text: "I'm strong in Python/ML backends! Let's team up. DMing you now.",
        likes: 14,
      },
      {
        id: "c-priya-2",
        name: "Sneha Reddy",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
        timeAgo: "1h ago",
        text: "Count me in for UI! I've been working with Next.js and Tailwind.",
        likes: 9,
      },
    ],
  },
  {
    id: "post-3",
    name: "Arjun Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    badge: "Pro Member",
    meta: "DSA Intensive · 1 day ago",
    text: "Stuck on Week 4 of DSA Intensive - can someone explain the sliding window pattern for substring problems? The editorial wasn't clicking for me.",
    tags: ["#DSA", "#SlidingWindow"],
    upvotes: 19,
    hearts: 4,
    claps: 12,
    insights: 15,
    commentsCount: 14,
    sharesCount: 5,
    bookmarksCount: 8,
    isExpanded: false,
    comments: [],
  },
];

const sidebarSections = [
  {
    title: "Community Stats",
    rows: [
      { label: "Members", value: "12,847" },
      { label: "Posts This Week", value: "342" },
      { label: "Active Discussions", value: "89" },
      { label: "Study Groups", value: "24" },
    ],
  },
  {
    title: "Trending Topics",
    rows: [
      { label: "#GenAI", value: "156 posts" },
      { label: "#DSA", value: "134 posts" },
      { label: "#SystemDesign", value: "98 posts" },
      { label: "#Hackathon", value: "87 posts" },
      { label: "#InterviewPrep", value: "78 posts" },
    ],
  },
  {
    title: "Active Study Groups",
    rows: [
      { label: "DSA Daily Challenge", value: "45 members · Active now" },
      { label: "ML Paper Reading Club", value: "28 members · Next Saturday" },
      { label: "System Design Weekly", value: "32 members · Next Sunday" },
    ],
  },
];

const contributors = [
  ["Rahul Kumar", "2,480 pts", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"],
  ["Priya Sharma", "2,120 pts", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"],
  ["Sneha Reddy", "1,890 pts", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"],
  ["Amit Verma", "1,670 pts", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"],
  ["Vikram Singh", "1,450 pts", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"],
] as const;

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("All Posts");
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostCreated = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = posts.filter((post) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = post.text.toLowerCase().includes(q);
      const matchName = post.name.toLowerCase().includes(q);
      const matchTags = post.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchText && !matchName && !matchTags) return false;
    }

    if (activeTab === "Discussions") return post.tags.includes("#DSA") || post.tags.includes("#SlidingWindow");
    if (activeTab === "Show & Tell") return post.image || post.tags.includes("#RAG") || post.tags.includes("#GenAI");
    if (activeTab === "Help Needed") return post.text.includes("Stuck") || post.text.includes("explain");
    if (activeTab === "Study Groups") return post.tags.includes("#TeamUp") || post.tags.includes("#Hackathon");
    return true;
  });

  return (
    <div className="flex w-full flex-col gap-6 text-left pb-10">
      {/* Banner */}
      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#2B50EC] via-[#3B82F6] to-[#5174FF] px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Consistency AI Community</h2>
          <p className="mt-1 text-xs sm:text-sm text-white/90">
            Connect with 12,000+ learners, share your progress, and grow together
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#2B50EC] shadow-md hover:bg-slate-50 transition-transform active:scale-95 flex items-center gap-1.5"
        >
          <span className="text-base leading-none">+</span> Create Post
        </button>
      </section>

      {/* Main Grid */}
      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Posts Feed Column */}
        <div className="flex flex-col gap-5">
          {/* Navigation Filter Tabs & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {["All Posts", "Discussions", "Show & Tell", "Help Needed", "Study Groups"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                      activeTab === tab
                        ? "border-[#2B50EC] bg-[#2B50EC] text-white shadow-sm"
                        : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Filter Search Input */}
            <div className="relative min-w-[200px]">
              <input
                type="text"
                placeholder="Search posts or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-1.5 pl-8 bg-white border border-[#E2E8F0] rounded-full text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2B50EC]"
              />
              <svg
                className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-2.5 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Posts List */}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <CommunityPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="p-12 text-center bg-white border border-[#E2E8F0] rounded-2xl">
              <p className="text-sm font-semibold text-[#475569]">No posts match your search or filter.</p>
              <button
                onClick={() => {
                  setActiveTab("All Posts");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-semibold text-[#2B50EC] underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Widgets */}
        <aside className="flex flex-col gap-4">
          {sidebarSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
            >
              <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                {section.title}
              </h3>
              <div className="space-y-2.5 text-xs">
                {section.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-3 items-center py-0.5 border-b border-[#F8FAFC] last:border-0"
                  >
                    <span className="text-[#334155] font-medium">{row.label}</span>
                    <span className="text-right text-[#2B50EC] font-semibold text-[11px]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <section className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-[#0F172A]">Top Contributors</h3>
            <div className="flex flex-col gap-3">
              {contributors.map(([name, points, avatar], index) => (
                <div key={name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 text-xs font-semibold text-[#475569]">{index + 1}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatar} alt={name} width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
                    <span className="text-[13px] font-medium text-[#0F172A]">{name}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#2B50EC]">{points}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-[#0F172A]">Community Guidelines</h3>
            <p className="text-[13px] leading-5 text-[#64748B]">Be respectful, stay on topic, no spam. Help others grow.</p>
            <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[#2B50EC] hover:underline">
              Read Full Guidelines
              <svg className="w-3.5 h-3.5 text-[#2B50EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </section>
        </aside>
      </div>

      {/* Modal for creating a post */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
}