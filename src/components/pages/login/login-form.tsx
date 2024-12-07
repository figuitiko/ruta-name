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
  HEADING_1,
  HEADING_2,
  SESSION_HEADING,
  SUBMIT,
  USER_NAME,
  USER_NAME_ERROR_REQUIRED,
  USER_PASSWORD,
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
        className="w-full  flex flex-col gap-4 p-12 max-w-[720px]"
      >
        <div className="flex flex-col">
          <div className="flex gap-3">
            <h3 className="text-headings-main text-[42px] font-bold">
              {HEADING_1}
            </h3>
            <h3 className="text-headings-secondary text-[42px] font-bold">
              {HEADING_2}
            </h3>
          </div>
          <h4 className="text-headings-secondary text-2xl font-bold">
            {SESSION_HEADING}
          </h4>
        </div>
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{USER_NAME}</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>{USER_NAME_ERROR_REQUIRED}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{USER_PASSWORD}</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormDescription>{USER_NAME_ERROR_REQUIRED}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-8">
          <Button
            className="w-full bg-buttons-main"
            disabled={isPending}
            type="submit"
          >
            {SUBMIT}
          </Button>
        </div>
      </form>
    </Form>
  );
};
