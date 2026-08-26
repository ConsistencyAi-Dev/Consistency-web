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
    }
  },
};
