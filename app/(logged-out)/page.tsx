import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={40} className="text-primary" />
        Dashboard
      </h1>
      <p>
        React Js Dashboard Created By{" "}
        <a
          className="text-primary"
          href="https://www.davoodjavidi.ir/"
          target="_blank"
        >
          davood Javidi
        </a>
      </p>
      <div className="flex space-x-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
