import { env } from "@/env";

const APP_URL = env.API_URL;

export const blogServices = {
  getBlogPosts: async () => {
    try {
      const res = await fetch(`${APP_URL}/posts`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something wants error" } };
    }
  },
};
