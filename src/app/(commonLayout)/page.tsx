import { BlogCard } from "@/components/modules/homepage/BlogCard";
import { blogServices } from "@/services/blog.services";
import { Blog } from "@/types";

export default async function Home() {
  const { data } = await blogServices.getBlogPosts(
    {
      isFeatured: false,
      // search: "",
    },
    {
      cache: "no-store",
      // revalidate: 10,
    },
  );

  console.log(data);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data.map((post: Blog) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
