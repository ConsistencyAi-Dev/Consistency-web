import { siteConfig } from "@/config/site";
import { ApiEnvelope } from "@/types";

/**
 * Generic HTTP Client Wrapper for fetch operations
 */
export async function httpClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiEnvelope<T>> {
  const url = `${siteConfig.apiUrl}${endpoint}`;
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("auth_token") || localStorage.getItem("access_token")
      : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers as Record<string, string>),
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const text = await response.text();
    let json: any = null;
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        json = { message: text };
      }
    }

    if (!response.ok || !json?.success) {
      if (response.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("access_token");
        localStorage.removeItem("auth_user");
        document.cookie = "auth_token=; path=/; max-age=0; SameSite=Lax";
      }
      throw new Error(json?.message || `HTTP Request failed with status ${response.status}`);
    }

    return json as ApiEnvelope<T>;
  } catch (error: any) {
    console.error(`[HttpClient Error] ${endpoint}:`, error.message || error);
    throw error;
  }
}
