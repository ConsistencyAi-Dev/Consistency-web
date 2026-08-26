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
  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers as Record<string, string>),
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const json: ApiEnvelope<T> = await response.json();

    if (!response.ok || !json.success) {
      throw new Error(json.message || `HTTP Request failed with status ${response.status}`);
    }

    return json;
  } catch (error: any) {
    console.error(`[HttpClient Error] ${endpoint}:`, error.message || error);
    throw error;
  }
}
