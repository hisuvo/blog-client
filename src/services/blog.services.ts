import { env } from "@/env";

const APP_URL = env.API_URL;

interface GetBlogParmas {
  isFeatured?: boolean;
  search?: string;
}

interface ServicesOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogServices = {
  getBlogPosts: async (params: GetBlogParmas, options?: ServicesOptions) => {
    try {
      const url = new URL(`${APP_URL}/posts`);

      // console.log(Object.entries(params));
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, value);
        }
      });

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      console.log("config is ->", config);

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something wants error" } };
    }
  },

  getBlogById: async (id: string) => {
    try {
      const res = await fetch(`${APP_URL}/posts/${id}`);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Some thing went error" } };
    }
  },
};

//* Notes
//* ------

// * No Dynamic or No {cache:"no-store"} -> SSG (static page)
// const res = await fetch(`${APP_URL}/posts`);
// * {cache:"no-store"} -> SSR (dynamic page)
// const res = await fetch(`${APP_URL}/posts`, { cache: "no-store" });
// *  next:{revalidate: 10} -> ISR (Mix both static and dynamic)
// const res = await fetch(`${APP_URL}/posts`, { next: { revalidate: 10 } });
