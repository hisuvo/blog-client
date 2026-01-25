import { BlogCard } from "@/components/modules/homepage/BlogCard";
import { blogServices } from "@/services/blog.services";
import { Blog } from "@/types";

export default async function Home() {
  const { data } = await blogServices.getBlogPosts();

  console.log(data);
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data.map((post: Blog) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
