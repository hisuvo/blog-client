import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/types";
import Image from "next/image";

export function BlogCard(post: Blog) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src="./next.svg"
        width={100}
        height={100}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <div className="px-4">
        {post.tags?.map((tag, indx) => (
          <Badge key={indx} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
        <CardDescription>{post?.content}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
