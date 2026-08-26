import { httpClient } from "@/lib/httpClient";
import { siteConfig } from "@/config/site";
import { Question, ScoreProfile, QuizSubmitPayload } from "@/types";

export const quizService = {
  async getQuestions(topic?: string): Promise<Question[]> {
    const query = topic ? `?topic=${encodeURIComponent(topic)}` : "";
    const res = await httpClient<{ total: number; questions: Question[] }>(
      `${siteConfig.endpoints.quiz.questions}${query}`,
      { method: "GET" }
    );
    return res.data.questions;
  },

  async submitQuiz(payload: QuizSubmitPayload): Promise<ScoreProfile> {
    const res = await httpClient<ScoreProfile>(siteConfig.endpoints.quiz.submit, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return res.data;
  },

  async getScoreProfile(userId: string): Promise<ScoreProfile> {
    const res = await httpClient<ScoreProfile>(
      `${siteConfig.endpoints.quiz.scoreProfile}/${encodeURIComponent(userId)}`,
      { method: "GET" }
    );
    return res.data;
  },
};
