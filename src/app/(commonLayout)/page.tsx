import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.services";

export default async function Home() {
  const session = await userService.getSession();

  console.log(session.data, "user and session information");
  return (
    <div>
      <Button variant="outline">Button Ui Components</Button>
    </div>
  );
}
