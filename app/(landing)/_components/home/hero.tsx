import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <Badge variant="outline" className="px-3 py-1 text-[0.625rem]">
          Work in progress · new features rolling out steadily
        </Badge>
        <div className="flex flex-col gap-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Craft a GitHub profile that feels uniquely yours
          </h1>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            Profiloom helps developers create, customize, and share polished
            GitHub profile READMEs through reusable templates and a community
            gallery.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/templates">Get started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/Remy349/profiloom" target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
