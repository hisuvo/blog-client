import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const getSession = await authClient.getSession();

  console.log("session information", getSession);

  return (
    <div>
      <Button variant="outline">Button Ui Components</Button>
    </div>
  );
}
