"use client";

import { BlogPost } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await BlogPost();
      setData(data);
      setError(error);
    })();
  }, []);

  if (error) {
    console.log(error);
  }

  console.log(data);
  console.log(error);

  return (
    <div>
      <h2>This is Contact Page</h2>
    </div>
  );
}
