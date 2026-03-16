import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col space-y-4 items-center justify-center">
      <h1 className="font-bold text-xl">
        Work in progress. Please check back later for updates.
      </h1>
      <Button asChild>
        <Link href="https://github.com/Remy349/profiloom" target="_blank">
          View on GitHub
        </Link>
      </Button>
    </div>
  );
}
