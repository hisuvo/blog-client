"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Some thing went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
