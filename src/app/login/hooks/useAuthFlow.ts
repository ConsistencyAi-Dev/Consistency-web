"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  sendOtpApi,
  verifyOtpApi,
  resetPasswordApi,
  loginApi,
  registerApi,
} from "@/lib/api";
import { useToast } from "@/hooks/useToast";

export type AuthMode =
  | "login"
  | "signup"
  | "forgot-email"
  | "forgot-code"
  | "forgot-success"
  | "reset-password"
  | "reset-loading";

export function useAuthFlow() {
  const router = useRouter();
  const { toast } = useToast();

  // State Machine Mode
  const [mode, setMode] = useState<AuthMode>("login");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Forgot Password verification states
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [countdown, setCountdown] = useState(59);
  const [isResending, setIsResending] = useState(false);
  const [verificationError, setVerificationError] = useState(false);

  // Check for existing session or OAuth redirect tokens/errors in URL params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      const userStr = params.get("user");
      const isNewUserParam = params.get("isNewUser");
      const err = params.get("error");

      if (err) {
        const decoded = decodeURIComponent(err);
        setError(decoded);
        toast.error(decoded);
        window.history.replaceState({}, document.title, window.location.pathname);
        setIsCheckingAuth(false);
      } else if (token) {
        localStorage.setItem("auth_token", token);
        localStorage.setItem("access_token", token);
        document.cookie = `auth_token=${token}; path=/; max-age=604800; SameSite=Lax`;
        let parsedUser: any = null;
        if (userStr) {
          try {
            parsedUser = JSON.parse(decodeURIComponent(userStr));
            localStorage.setItem("auth_user", JSON.stringify(parsedUser));
          } catch (e) {
            localStorage.setItem("auth_user", userStr);
          }
        }

        // If user is new (via isNewUser param or missing onboarding details), show OnboardingWizard!
        const isNew = isNewUserParam === "true" || parsedUser?.isNewUser === true || (!parsedUser?.mobile && !parsedUser?.location && !parsedUser?.isOnboarded);
        if (isNew) {
          localStorage.removeItem("isOnboarded");
        } else {
          localStorage.setItem("isOnboarded", "true");
        }

        // Clean URL params and trigger portal loading animation before redirecting
        window.history.replaceState({}, document.title, window.location.pathname);
        setMode("reset-loading");
      } else {
        // Check if user is already authenticated
        const existingToken = localStorage.getItem("auth_token") || localStorage.getItem("access_token");
        if (existingToken) {
          // Sync cookie for Next.js middleware and show loading portal before redirecting
          document.cookie = `auth_token=${existingToken}; path=/; max-age=604800; SameSite=Lax`;
          setMode("reset-loading");
          return;
        }
        setIsCheckingAuth(false);
      }
    }
  }, [router]);

  // Reset notifications on mode transition
  useEffect(() => {
    setError(null);
    setSuccessMsg(null);
    setVerificationError(false);
  }, [mode]);

  // Resend code countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mode === "forgot-code" && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, countdown]);

  // Verification success redirects to reset page after 2.5s
  useEffect(() => {
    if (mode === "forgot-success") {
      const timer = setTimeout(() => {
        setMode("reset-password");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  const handleLoginSubmit = async (emailVal: string, passwordVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setIsLoading(true);

    try {
      const res = await loginApi(emailVal, passwordVal);
      if (res.data?.token) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("access_token", res.data.token);
        document.cookie = `auth_token=${res.data.token}; path=/; max-age=604800; SameSite=Lax`;
        if (res.data.user) {
          localStorage.setItem("auth_user", JSON.stringify(res.data.user));
        }
        window.dispatchEvent(new Event("auth_state_changed"));
        
        // Only consider user onboarded if the backend explicitly says so,
        // OR if they have BOTH mobile and location filled in (meaningful profile data).
        // Do NOT use profileStrength as a proxy — new users start at 20-25 which is > 20.
        const hasCompletedProfile = Boolean(
          res.data.user?.isOnboarded ||
          (res.data.user?.mobile && res.data.user?.location)
        );

        if (hasCompletedProfile) {
          localStorage.setItem("isOnboarded", "true");
        } else {
          localStorage.removeItem("isOnboarded");
        }
      }
      setIsLoading(false);
      setMode("reset-loading");
    } catch (err: any) {
      setIsLoading(false);
      const msg = err.message || "Invalid email or password. Please try again.";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleSignUpSubmit = async (
    fullName: string,
    emailVal: string,
    passwordVal: string,
    confirmVal: string,
    agree: boolean
  ) => {
    setError(null);
    setSuccessMsg(null);

    if (passwordVal !== confirmVal) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("You must agree to the terms and privacy policy.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await registerApi({
        name: fullName,
        email: emailVal,
        password: passwordVal,
      });
      if (res.data?.token) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("access_token", res.data.token);
        document.cookie = `auth_token=${res.data.token}; path=/; max-age=604800; SameSite=Lax`;
        if (res.data.user) {
          localStorage.setItem("auth_user", JSON.stringify(res.data.user));
        }
        localStorage.removeItem("isOnboarded");
        window.dispatchEvent(new Event("auth_state_changed"));
      }
      setIsLoading(false);
      setMode("reset-loading");
    } catch (err: any) {
      setIsLoading(false);
      const msg = err.message || "Registration failed. Please try again.";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleForgotEmailSubmit = async (emailVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setIsLoading(true);
    setForgotEmail(emailVal);

    try {
      await sendOtpApi({ email: emailVal, purpose: "FORGOT_PASSWORD" });
      setIsLoading(false);
      setMode("forgot-code");
      setCountdown(59);
      const msg = "Verification code sent to your email!";
      setSuccessMsg(msg);
      toast.info(msg);
    } catch (err: any) {
      setIsLoading(false);
      const msg = err.message || "Failed to send verification code. Please check your email.";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleResendCode = async () => {
    if (!forgotEmail) return;
    setIsResending(true);
    setError(null);
    setVerificationError(false);

    try {
      await sendOtpApi({ email: forgotEmail, purpose: "FORGOT_PASSWORD" });
      setIsResending(false);
      setCountdown(59);
      const msg = "A new verification code was sent to your email!";
      setSuccessMsg(msg);
      toast.info(msg);
    } catch (err: any) {
      setIsResending(false);
      const msg = err.message || "Failed to resend verification code.";
      setError(msg);
      toast.error(msg);
    }
  };

  const handleVerifyCodeSubmit = async (codeVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setVerificationError(false);

    if (codeVal.length < 6) {
      setError("Please enter the complete 6-digit code.");
      setVerificationError(true);
      return;
    }

    setIsLoading(true);
    try {
      const res = await verifyOtpApi({ email: forgotEmail, otp: codeVal, purpose: "FORGOT_PASSWORD" });
      setIsLoading(false);
      if (res.data?.resetToken) {
        setResetToken(res.data.resetToken);
      }
      setMode("forgot-success");
    } catch (err: any) {
      setIsLoading(false);
      const msg = err.message || "Invalid verification code. Please try again.";
      setError(msg);
      toast.error(msg);
      setVerificationError(true);
    }
  };

  const handleResetPasswordSubmit = async (passwordVal: string, confirmVal: string) => {
    setError(null);
    setSuccessMsg(null);
    setVerificationError(false);

    if (passwordVal !== confirmVal) {
      setError("Passwords do not match.");
      return;
    }

    if (passwordVal.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      await resetPasswordApi({
        email: forgotEmail,
        resetToken,
        newPassword: passwordVal,
      });
      setIsLoading(false);
      toast.success("Password reset successfully! Redirecting...");
      setMode("reset-loading");
    } catch (err: any) {
      setIsLoading(false);
      const msg = err.message || "Failed to reset password. Please try again.";
      setError(msg);
      toast.error(msg);
    }
  };

  return {
    mode,
    setMode,
    isLoading,
    isCheckingAuth,
    error,
    successMsg,
    forgotEmail,
    countdown,
    isResending,
    verificationError,
    router,
    handleLoginSubmit,
    handleSignUpSubmit,
    handleForgotEmailSubmit,
    handleResendCode,
    handleVerifyCodeSubmit,
    handleResetPasswordSubmit,
  };
}
