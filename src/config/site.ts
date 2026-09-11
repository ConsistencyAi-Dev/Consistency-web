/**
 * Global Site & Application Configuration
 */

export const siteConfig = {
  name: "Consistency AI",
  description: "Consistent learning, skill assessment, and AI-driven career roadmaps.",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  endpoints: {
    auth: {
      register: "/api/v1/auth/register",
      login: "/api/v1/auth/login",
      verify: "/api/v1/auth/verify",
      refresh: "/api/v1/auth/refresh-token",
    },
    users: {
      profile: "/api/v1/users/profile",
      list: "/api/v1/users",
    },
    quiz: {
      questions: "/api/v1/quiz/questions",
      submit: "/api/v1/quiz/submit",
      scoreProfile: "/api/v1/quiz/score-profile",
    },
    payments: {
      cohorts: "/api/v1/payments/cohorts",
      createOrder: "/api/v1/payments/create-order",
      verifyOrder: "/api/v1/payments/order",
    },
  },
};
