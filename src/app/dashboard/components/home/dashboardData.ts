export interface LearningPathStep {
  num: number;
  name: string;
  duration: string;
}

export interface CohortItem {
  id?: string;
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
  backgroundImage?: string;
  liveRecorded?: boolean;
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
    id: "genai-1yr",
    title: "Gen AI Cohort — 1 Year",
    match: "BEST MATCH 96%",
    duration: "1 Year",
    rating: "4.9",
    students: "180+",
    skills: ["Python", "Transformers", "RAG", "MLOps"],
    mentor: "Bhavanidevi Manyala",
    mentorTitle: "Data Analyst & AI Engineer",
    mentorAvatar: "B",
    price: "₹44,999",
    originalPrice: "₹55,000",
    startDate: "Oct 15, 2026",
    disabled: false,
    gradient: "linear-gradient(170deg, #2B50EC 0%, #8B9EFF 100%)",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#2B50EC]",
    showSpark: true,
    backgroundImage: "/images/cohorts/cohort_3.jpg",
    liveRecorded: true,
  },
  {
    id: "genai-6mo",
    title: "Gen AI Cohort — 6 Months",
    match: "94% MATCH",
    duration: "6 Months",
    rating: "4.9",
    students: "140+",
    skills: ["LLMs", "Prompt Eng", "Vector DBs", "RAG"],
    mentor: "Bhavanidevi Manyala",
    mentorTitle: "Data Analyst & AI Engineer",
    mentorAvatar: "B",
    price: "₹35,000",
    originalPrice: "₹45,000",
    startDate: "Nov 1, 2026",
    disabled: false,
    gradient: "linear-gradient(170deg, #0F172A 0%, #334155 100%)",
    badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
    badgeTextColor: "text-white",
    showSpark: false,
    backgroundImage: "/images/cohorts/cohort_2.jpg",
    liveRecorded: true,
  },
  {
    id: "dsa-system",
    title: "DSA + System Design",
    match: "91% MATCH",
    duration: "4 to 6 Months",
    rating: "4.8",
    students: "210+",
    skills: ["DSA Patterns", "HLD + LLD", "Mock Interviews"],
    mentor: "Priya Singh",
    mentorTitle: "Ex-Meta, Senior SWE",
    mentorAvatar: "P",
    price: "₹40,000",
    originalPrice: "₹50,000",
    startDate: "Oct 20, 2026",
    disabled: false,
    gradient: "linear-gradient(170deg, #1E293B 0%, #4338CA 100%)",
    badgeBg: "bg-black/20 text-white backdrop-blur-[4px] outline outline-[1px] outline-white/20 -outline-offset-[1px]",
    badgeTextColor: "text-white",
    showSpark: false,
    backgroundImage: "/images/cohorts/cohort_1.jpg",
    liveRecorded: true,
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
