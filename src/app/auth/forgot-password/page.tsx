"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import WidthWrapper from "@/components/WidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ForgotPassword = () => {
  // const [isLoading,setIsLoading] = useState<boolean>(useState);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Send reset email logic here
  }

  return (
    <WidthWrapper>
      <div className="flex flex-col items-center justify-center my-10 md:h-[75vh] max-w-sm mx-auto w-full px-4 text-center">
        <div className="flex justify-start items-start w-full">
          {/* Back button */}
          <Link
            href="/auth/login"
            className="inline-flex items-start text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to login
          </Link>
        </div>
        <div className="mb-6">
          <div className="h-44 w-44 mx-auto rounded-full bg-gray-50 overflow-hidden">
            <Image
              src="/message-sent.svg"
              alt="Illustration of message being sent"
              width={400}
              height={400}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-2">Forgot your password?</h1>
        <p className="text-sm text-gray-600 mb-6">
          Please enter your valid email address. We will send you a password
          reset link.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </Form>
      </div>
    </WidthWrapper>
  );
};

export default ForgotPassword;
