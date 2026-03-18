import type { Metadata } from "next";
import { SignUpForm } from "./_components/signup-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignInPage() {
  return <SignUpForm />;
}
