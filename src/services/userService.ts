import { httpClient } from "@/lib/httpClient";
import { siteConfig } from "@/config/site";
import { UserProfile } from "@/types";

export const userService = {
  async getProfile(): Promise<UserProfile> {
    const res = await httpClient<UserProfile>(siteConfig.endpoints.users.profile, {
      method: "GET",
    });
    return res.data;
  },

  async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    const res = await httpClient<UserProfile>(siteConfig.endpoints.users.profile, {
      method: "PATCH",
      body: JSON.stringify(updates),
    });
    return res.data;
  },

  async getUsers(params: { page?: number; limit?: number; search?: string; sortBy?: string } = {}) {
    const query = new URLSearchParams({
      page: String(params.page || 1),
      limit: String(params.limit || 20),
      ...(params.search && { search: params.search }),
      ...(params.sortBy && { sortBy: params.sortBy }),
    }).toString();

    const res = await httpClient<{ pagination: any; users: UserProfile[] }>(
      `${siteConfig.endpoints.users.list}?${query}`,
      { method: "GET" }
    );
    return res.data;
  },
};
