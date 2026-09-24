export type CountryCode = 'IN' | 'OTHER';

export interface CohortPricingTier {
  currency: 'INR' | 'USD';
  symbol: '₹' | '$';
  originalPrice: number;
  offeredPrice: number;
  discount: number;
  formattedOriginal: string;
  formattedOffered: string;
  formattedDiscount: string;
}

export interface CohortConfig {
  id: string;
  title: string;
  shortName: string;
  badge: string;
  duration: string;
  sessionsCount: string;
  mentor: string;
  mentorRole: string;
  rating: string;
  studentsCount: string;
  skills: string[];
  features: string[];
  gradient: string;
  pricing: {
    IN: CohortPricingTier;
    OTHER: CohortPricingTier;
  };
}

export const COHORTS_CATALOG: Record<string, CohortConfig> = {
  'genai-1yr': {
    id: 'genai-1yr',
    title: 'Gen AI Cohort — 1 Year',
    shortName: 'Gen AI 1 Year',
    badge: 'FLAGSHIP COHORT',
    duration: '1 Year',
    sessionsCount: '384 Live Sessions',
    mentor: 'Bhavanidevi Manyala',
    mentorRole: 'Data Analyst & AI Engineer',
    rating: '4.9',
    studentsCount: '180+ enrolled',
    skills: ['Python', 'Deep Learning', 'Transformers', 'RAG', 'LangChain', 'MLOps', 'Deployment'],
    features: [
      '384 Live Sessions + Recordings',
      '100 GPU Hours on Cloud',
      '8 Real-world End-to-End Projects',
      '2x 1:1 Mentorship per week',
      'FAANG Mock Interviews & Placement Support',
      'Verified Certificate & GitHub Portfolio',
    ],
    gradient: 'from-[#2B50EC] to-[#7C3AED]',
    pricing: {
      IN: {
        currency: 'INR',
        symbol: '₹',
        originalPrice: 55000,
        offeredPrice: 44999,
        discount: 10001,
        formattedOriginal: '₹55,000',
        formattedOffered: '₹44,999',
        formattedDiscount: 'Save ₹10,001 (18% OFF)',
      },
      OTHER: {
        currency: 'USD',
        symbol: '$',
        originalPrice: 2000,
        offeredPrice: 1800,
        discount: 200,
        formattedOriginal: '$2,000',
        formattedOffered: '$1,800',
        formattedDiscount: 'Save $200 (10% OFF)',
      }
    }
  },
  'genai-6mo': {
    id: 'genai-6mo',
    title: 'Gen AI Cohort — 6 Months',
    shortName: 'Gen AI 6 Months',
    badge: 'ACCELERATOR',
    duration: '6 Months',
    sessionsCount: '192 Live Sessions',
    mentor: 'Bhavanidevi Manyala',
    mentorRole: 'Data Analyst & AI Engineer',
    rating: '4.9',
    studentsCount: '140+ enrolled',
    skills: ['Python', 'LLMs', 'Prompt Engineering', 'Vector DBs', 'RAG Agents', 'Fine-tuning'],
    features: [
      '192 Live Sessions + Recordings',
      '50 GPU Hours on Cloud',
      '5 Real-world AI Projects',
      'Weekly 1:1 Doubt Clearing',
      'Resume & AI Portfolio Building',
      'Verified Certificate',
    ],
    gradient: 'from-[#0F172A] to-[#2563EB]',
    pricing: {
      IN: {
        currency: 'INR',
        symbol: '₹',
        originalPrice: 45000,
        offeredPrice: 35000,
        discount: 10000,
        formattedOriginal: '₹45,000',
        formattedOffered: '₹35,000',
        formattedDiscount: 'Save ₹10,000 (22% OFF)',
      },
      OTHER: {
        currency: 'USD',
        symbol: '$',
        originalPrice: 1500,
        offeredPrice: 1399,
        discount: 101,
        formattedOriginal: '$1,500',
        formattedOffered: '$1,399',
        formattedDiscount: 'Save $101 (7% OFF)',
      }
    }
  },
  'dsa-system': {
    id: 'dsa-system',
    title: 'DSA + System Design Cohort — 4 to 6 Months',
    shortName: 'DSA + System Design',
    badge: 'INTERVIEW MASTERY',
    duration: '4-6 Months',
    sessionsCount: '160 Live Sessions',
    mentor: 'Bhavanidevi Manyala',
    mentorRole: 'Data Analyst & AI Engineer',
    rating: '4.9',
    studentsCount: '210+ enrolled',
    skills: ['Advanced DSA', 'System Design (HLD + LLD)', 'Concurrency', 'Microservices', 'Mock Interviews'],
    features: [
      '160 Live Problem Solving & Design Sessions',
      '300+ Curated LeetCode Patterns',
      'HLD & LLD Real Production Case Studies',
      'Weekly Live Mock Technical Interviews',
      'FAANG Referral Support',
      'Lifetime Resource Access',
    ],
    gradient: 'from-[#1E293B] to-[#4338CA]',
    pricing: {
      IN: {
        currency: 'INR',
        symbol: '₹',
        originalPrice: 50000,
        offeredPrice: 40000,
        discount: 10000,
        formattedOriginal: '₹50,000',
        formattedOffered: '₹40,000',
        formattedDiscount: 'Save ₹10,000 (20% OFF)',
      },
      OTHER: {
        currency: 'USD',
        symbol: '$',
        originalPrice: 1800,
        offeredPrice: 1699,
        discount: 101,
        formattedOriginal: '$1,800',
        formattedOffered: '$1,699',
        formattedDiscount: 'Save $101 (6% OFF)',
      }
    }
  }
};

export const DEFAULT_COHORT_ID = 'genai-1yr';
