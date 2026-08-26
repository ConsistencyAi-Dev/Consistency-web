import { useState, useCallback } from "react";
import { quizService } from "@/services/quizService";
import { Question, ScoreProfile, QuizSubmitPayload } from "@/types";

export function useQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [scoreProfile, setScoreProfile] = useState<ScoreProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestions = useCallback(async (topic?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await quizService.getQuestions(topic);
      setQuestions(data);
      return data;
    } catch (err: any) {
      setError(err.message || "Failed to load quiz questions");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const submitQuiz = useCallback(async (payload: QuizSubmitPayload) => {
    setLoading(true);
    setError(null);
    try {
      const result = await quizService.submitQuiz(payload);
      setScoreProfile(result);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to submit quiz");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    questions,
    scoreProfile,
    loading,
    error,
    fetchQuestions,
    submitQuiz,
  };
}
