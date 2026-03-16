import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Profiloom",
    template: "%s | Profiloom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans antialiased", outfit.variable)}>
      <body>{children}</body>
    </html>
  );
}
