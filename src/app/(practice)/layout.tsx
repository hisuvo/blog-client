import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <nav className="space-x-2 py-4 text-2xl">
          <Button asChild>
            <Link href={"/development"}>Development</Link>
          </Button>
          <Button asChild>
            <Link href={"/test"}>Test</Link>
          </Button>
          <Button asChild>
            <Link href={"/marketing"}>Marketing</Link>
          </Button>
          <Button asChild>
            <Link href={"/marketing/setting"}>Setting</Link>
          </Button>
          <Button asChild>
            <Link href={"/sales"}>Sales</Link>
          </Button>
        </nav>
      </div>

      <div className="*:m-4">
        <div className="flex justify-between *:w-full">
          {marketingSlot}
          {salesSlot}
        </div>

        {children}
      </div>
    </div>
  );
}
