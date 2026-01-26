import { Badge } from "@/components/ui/badge";
import { blogServices } from "@/services/blog.services";
import { Blog } from "@/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await blogServices.getBlogPosts({});

  return data?.data?.map((item: Blog) => ({ slug: item.id })).slice(0, 3);
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { data } = await blogServices.getBlogById(slug);

  return (
    <div className="max-w-4xl mx-auto border m-4 p-4 space-y-4">
      <h2 className="text-4xl">{data.title}</h2>
      <p>{data.content}</p>
      <p>My post slug is : {slug}</p>
      <div className="flex gap-3">
        Stack:
        {data.tags.map((tag: string, indx: string) => (
          <Badge key={indx} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <p>views:{data.views}</p>
      <div className="mt-2">
        <h2>Comment:{data._count.comments}</h2>
      </div>
    </div>
  );
};

export default BlogPage;
