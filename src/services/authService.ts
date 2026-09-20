import { httpClient } from "@/lib/httpClient";
import { siteConfig } from "@/config/site";
import { AuthResponse, RegisterPayload, LoginPayload } from "@/types";

export const authService = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const res = await httpClient<AuthResponse>(siteConfig.endpoints.auth.register, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (res.data.token && typeof window !== "undefined") {
      localStorage.setItem("access_token", res.data.token);
      localStorage.setItem("auth_token", res.data.token);
      if (res.data.user) {
        localStorage.setItem("auth_user", JSON.stringify(res.data.user));
      }
      document.cookie = `auth_token=${res.data.token}; path=/; max-age=604800; SameSite=Lax`;
      window.dispatchEvent(new Event("auth_state_changed"));
    }
    return res.data;
  },

  async login(payload: LoginPayload): Promise<AuthResponse> {
    const res = await httpClient<AuthResponse>(siteConfig.endpoints.auth.login, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (res.data.token && typeof window !== "undefined") {
      localStorage.setItem("access_token", res.data.token);
      localStorage.setItem("auth_token", res.data.token);
      if (res.data.user) {
        localStorage.setItem("auth_user", JSON.stringify(res.data.user));
      }
      document.cookie = `auth_token=${res.data.token}; path=/; max-age=604800; SameSite=Lax`;
      window.dispatchEvent(new Event("auth_state_changed"));
    }
    return res.data;
  },

  async verify(): Promise<{ userId: string; email: string }> {
    const res = await httpClient<{ userId: string; email: string }>(
      siteConfig.endpoints.auth.verify,
      { method: "GET" }
    );
    return res.data;
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      localStorage.removeItem("isOnboarded");
      document.cookie = "auth_token=; path=/; max-age=0; SameSite=Lax";
      window.dispatchEvent(new Event("auth_state_changed"));
    }
  },
};
