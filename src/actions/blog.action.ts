"use server";

import { blogServices } from "@/services/blog.services";

export const BlogPost = async () => {
  return await blogServices.getBlogPosts({});
};
