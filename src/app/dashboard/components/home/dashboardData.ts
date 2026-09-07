export interface LearningPathStep {
  num: number;
  name: string;
  duration: string;
}

export interface CohortItem {
  title: string;
  match: string;
  duration: string;
  rating: string;
  students: string;
  skills: string[];
  mentor: string;
  mentorTitle: string;
  mentorAvatar: string;
  price: string;
  originalPrice: string;
  startDate: string | null;
  disabled: boolean;
  gradient: string;
  badgeBg: string;
  badgeTextColor: string;
  showSpark: boolean;
}

export interface MentorItem {
  name: string;
  rating: string;
  title: string;
  initial: string;
  color: string;
}

export interface WorkshopItem {
  type: string;
  date: string;
  title: string;
  author: string;
}

export interface ComparisonFeature {
  name: string;
  free: boolean;
  pro: boolean;
}

export const LEARNING_PATH_STEPS: LearningPathStep[] = [
  { num: 1, name: "Foundations", duration: "4w" },
  { num: 2, name: "DSA", duration: "3w" },
  { num: 3, name: "System Design", duration: "2w" },
  { num: 4, name: "AI/ML", duration: "4w" },
  { num: 5, name: "Interview Prep", duration: "2w" },
];

export const COHORTS_DATA: CohortItem[] = [
  {
    title: "Gen AI  Cohort",
    match: "BEST MATCH 98%",
    duration: "1 Year",
    rating: "4.9",
    students: "240",
    skills: ["React", "Node.js", "PostgreSQL"],
    mentor: "Alex Morgan",
    mentorTitle: "Ex-Google, Staff Eng",
    mentorAvatar: "A",
    price: "₹35,000",
    originalPrice: "₹40,000",
    startDate: null,
    disabled: false,
    gradient: "linear-gradient(170deg, #2B50EC 0%, #8B9EFF 100%)",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#2B50EC]",
    showSpark: true,
  },
  {
    title: "DSA + System Design Cohort",
    match: "92% MATCH",
    duration: "6 Months",
    rating: "4.8",
    students: "180",
    skills: ["DSA", "System Design", "Mock Interviews"],
    mentor: "Priya Singh",
    mentorTitle: "Ex-Meta, Senior Staff",
    mentorAvatar: "P",
    price: "₹28,000",
    originalPrice: "₹35,000",
    startDate: "Sep 25, 2026",
    disabled: true,
    gradient: "linear-gradient(170deg, #0F172A 0%, #334155 100%)",
    badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
    badgeTextColor: "text-white",
    showSpark: false,
  },
  {
    title: "Full Stack Developer",
    match: "85% MATCH",
    duration: "1 Year",
    rating: "4.7",
    students: "120",
    skills: ["Next.js", "Tailwind", "Framer Motion"],
    mentor: "David Chen",
    mentorTitle: "Ex-Vercel, Design Eng",
    mentorAvatar: "D",
    price: "₹21,000",
    originalPrice: "₹28,000",
    startDate: "Oct 10, 2026",
    disabled: true,
    gradient: "linear-gradient(170deg, #F59E0B 0%, #EC4899 100%)",
    badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
    badgeTextColor: "text-white",
    showSpark: false,
  },
];

export const MENTORS_DATA: MentorItem[] = [
  { name: "Alex Morgan", rating: "4.9", title: "Staff Engineer @ Linear • 2.1k students", initial: "AM", color: "bg-[#2B50EC]" },
  { name: "Priya Singh", rating: "4.9", title: "Senior SWE @ Meta • 1.8k students", initial: "PS", color: "bg-[#0F172A]" },
  { name: "David Chen", rating: "4.8", title: "Design Engineer @ Vercel • 1.2k students", initial: "DC", color: "bg-[#F59E0B]" },
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    type: "Career",
    date: "Tomorrow, 7 PM IST",
    title: "How to crack FAANG in 90 days",
    author: "by Alex Morgan",
  },
  {
    type: "Live Build",
    date: "Sat, 11 AM IST",
    title: "System Design Live: Design YouTube",
    author: "by Priya Singh",
  },
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  { name: "AI Learning Path", free: true, pro: true },
  { name: "Cohort Access (Live + Recorded)", free: false, pro: true },
  { name: "Mentor 1:1 Sessions", free: false, pro: true },
];
