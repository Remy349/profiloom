import { Button } from "@/components/ui/button";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ToggleDarkMode } from "./toggle-dark-mode";
import { MobileMenu } from "./mobile-menu";

export const links = [
  { name: "Home", href: "/" },
  { name: "Templates", href: "/templates" },
  { name: "Changelog", href: "/changelog" },
];

export function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-background/80">
      <nav className="flex items-center mx-auto h-16 px-6 justify-between max-w-5xl">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-primary/10 p-1.5">
              <BookmarkIcon className="size-4 text-primary" />
            </div>
            <span className="font-bold text-sm">Profiloom</span>
          </Link>
        </div>
        <ul className="flex items-center max-md:hidden">
          {links.map((item) => (
            <li key={item.name}>
              <Button
                size="sm"
                className="font-medium text-foreground hover:text-primary/80"
                variant="link"
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-1">
          <Button size="icon-lg" variant="ghost" asChild>
            <Link
              href="https://x.com/Remy_349"
              target="_blank"
              aria-label="X/Twitter"
            >
              <BsTwitterX />
            </Link>
          </Button>
          <Button size="icon-lg" variant="ghost" asChild>
            <Link
              href="https://github.com/Remy349/profiloom"
              target="_blank"
              aria-label="GitHub repository"
            >
              <FaGithub />
            </Link>
          </Button>
          <ToggleDarkMode />
          <MobileMenu />
          <Button size="lg" variant="default" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

