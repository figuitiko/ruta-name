"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  LoginFormSchema,
  LoginFormSchemaType,
} from "@/lib/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { signIn } from "@/lib/auth/auth";
import {
  SUBMIT,
  USER_NAME,
  USER_NAME_DESCRIPTION,
} from "@/constants/components/login-form";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormSchemaType) => {
    startTransition(async () => {
      // Call your auth function here
      signIn(data);
    });
  };
  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full md:w-1/2"
      >
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{USER_NAME}</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>{USER_NAME_DESCRIPTION}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormDescription>{USER_NAME_DESCRIPTION}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">
          {SUBMIT}
        </Button>
      </form>
    </Form>
  );
};
