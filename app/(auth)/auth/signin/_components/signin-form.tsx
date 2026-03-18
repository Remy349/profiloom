"use client";

import { BookmarkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import Link from "next/link";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { EmailInput } from "@/components/ui/email-input";
import { PasswordInput } from "@/components/ui/password-input";
import { Spinner } from "@/components/ui/spinner";
import { sileo } from "sileo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SignInForm() {
  const form = useForm();

  const formId = useId();

  const onSubmit = async () => {
    sileo.success({
      title: "Signed in successfully",
      description: "Welcome back to Profiloom!",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
            <BookmarkIcon className="size-5 text-primary" />
          </div>
        </Link>
      </div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome to Profiloom</CardTitle>
          <CardDescription>
            Sign in with your email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <EmailInput
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="example@email.com"
                      autoComplete="off"
                      disabled={form.formState.isSubmitting}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <PasswordInput
                      {...field}
                      id="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      disabled={form.formState.isSubmitting}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field>
            <Button
              form={formId}
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? <Spinner /> : "Sign In"}
            </Button>
            <FieldDescription className="text-center">
              Don't have an account? <Link href="/auth/signup">Sign up</Link>
            </FieldDescription>
          </Field>
        </CardFooter>
      </Card>
      <FieldDescription className="px-6 text-center">
        © 2026 Profiloom. All rights reserved.
        <br />
        Developed by{" "}
        <Link href="https://github.com/Remy349" target="_blank">
          Remy349
        </Link>
      </FieldDescription>
    </div>
  );
}
