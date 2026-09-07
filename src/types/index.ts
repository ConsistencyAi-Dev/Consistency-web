/**
 * Centralized TypeScript Interfaces and Type Definitions
 */

// Generic API Response Wrapper
export interface ApiEnvelope<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

// User & Auth Types
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  location?: string;
  bio?: string;
  linkedinUrl?: string;
  resumeFile?: string;
  profileStrength: number;
  role?: 'USER' | 'ADMIN';
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: UserProfile;
  token: string;
  refreshToken?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  mobile?: string;
  location?: string;
  bio?: string;
  linkedinUrl?: string;
  resumeFile?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

// Quiz & Assessment Types
export interface Question {
  id: number;
  text: string;
  topic: string;
  topicCategory: string;
  topicTheme?: 'blue' | 'orange' | 'green' | 'purple';
  marks: number;
  options: string[];
  code?: string;
  codeTitle?: string;
}

export interface QuestionResultItem {
  questionId: number;
  text: string;
  topic: string;
  topicCategory: string;
  marks: number;
  userAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface ScoreProfile {
  userId: string;
  submittedAt: string;
  timeTakenSeconds: number;
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  totalMarks: number;
  obtainedMarks: number;
  scorePercent: number;
  overallLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  strengths: string[];
  toImprove: Array<{ topic: string; scorePercent: number }>;
  recommendation: string;
  detailedReview: QuestionResultItem[];
}

export interface QuizSubmitPayload {
  userId: string;
  answers: Record<number, string>;
  timeTakenSeconds?: number;
}
