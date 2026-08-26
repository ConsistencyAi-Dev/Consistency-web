const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export interface SendOtpPayload {
  email: string;
  purpose?: 'FORGOT_PASSWORD' | 'VERIFY_EMAIL';
  name?: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
  purpose?: 'FORGOT_PASSWORD' | 'VERIFY_EMAIL';
}

export interface ResetPasswordPayload {
  email: string;
  resetToken: string;
  newPassword: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  errors?: string[];
}

export async function sendOtpApi(payload: SendOtpPayload): Promise<ApiResponse<{ email: string; purpose: string; expiresInSeconds: number }>> {
  const res = await fetch(`${API_BASE_URL}/auth/send-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      purpose: payload.purpose || 'FORGOT_PASSWORD',
      name: payload.name,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to send verification code');
  }
  return data;
}

export async function verifyOtpApi(payload: VerifyOtpPayload): Promise<ApiResponse<{ verified: boolean; email: string; resetToken?: string }>> {
  const res = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      otp: payload.otp,
      purpose: payload.purpose || 'FORGOT_PASSWORD',
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Invalid verification code');
  }
  return data;
}

export async function resetPasswordApi(payload: ResetPasswordPayload): Promise<ApiResponse<{ success: boolean; email: string }>> {
  const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to reset password');
  }
  return data;
}

export async function loginApi(emailVal: string, passwordVal: string): Promise<ApiResponse<{ user: any; token: string; refreshToken: string }>> {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailVal,
      password: passwordVal,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Invalid email or password');
  }
  return data;
}

export async function registerApi(payload: {
  name: string;
  email: string;
  password: string;
  mobile?: string;
  location?: string;
  bio?: string;
  linkedinUrl?: string;
}): Promise<ApiResponse<{ user: any; token: string; refreshToken: string }>> {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Registration failed');
  }
  return data;
}

export async function getProfileApi(token?: string, userId?: string): Promise<ApiResponse<any>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const url = userId 
    ? `${API_BASE_URL}/users/${userId}` 
    : `${API_BASE_URL}/users/profile`;

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to fetch user profile');
  }
  return data;
}

export async function updateProfileApi(userId: string, updates: any, token?: string): Promise<ApiResponse<any>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(updates),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to update user profile');
  }
  return data;
}

export async function submitQuizApi(payload: {
  userId: string;
  answers: Record<number, string>;
  timeSpentSeconds?: number;
}): Promise<ApiResponse<any>> {
  const res = await fetch(`${API_BASE_URL}/quiz/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to submit quiz assessment');
  }
  return data;
}

export async function getProfileStrengthApi(userId?: string, token?: string): Promise<ApiResponse<{
  user: { id: string; name: string; email: string; avatarUrl?: string };
  overallStrength: number;
  level: string;
  levelBadge: string;
  breakdown: {
    profileScore: number;
    profileMax: number;
    profilePercentage: number;
    quizScore: number;
    quizMax: number;
    quizPercentage: number;
    isQuizCompleted: boolean;
  };
  fieldStatus: Array<{ field: string; completed: boolean; score: number; max: number; description: string }>;
  quizStats: {
    attempted: boolean;
    scorePercent: number;
    correctCount: number;
    totalQuestions: number;
    overallLevel: string;
    strengths: string[];
    toImprove: Array<{ topic: string; scorePercent: number }> | string[];
    recommendation: string;
    submittedAt?: string;
  };
  recommendations: Array<{ title: string; pointsGain: string; impact: string; action: string }>;
}>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const url = userId ? `${API_BASE_URL}/users/${userId}/strength` : `${API_BASE_URL}/users/profile/strength`;

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to fetch profile strength');
  }
  return data;
}

export async function getScoreProfileApi(userId: string): Promise<ApiResponse<any>> {
  const res = await fetch(`${API_BASE_URL}/quiz/score-profile/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || 'Failed to fetch score profile');
  }
  return data;
}


