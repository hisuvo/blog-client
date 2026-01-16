import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="space-x-2">
        <Button variant={"outline"} asChild>
          <Link href="/dashboard/analytics/weekly">Weekly</Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href="/dashboard/analytics/monthly">monthly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
