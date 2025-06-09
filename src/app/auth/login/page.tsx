"use client";
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
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import WidthWrapper from "@/components/WidthWrapper";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle the form submission
    // For example, sending the data to your API
  }
  return (
    <WidthWrapper>
      <div className="flex justify-between items-center h-[70vh] md:h-[90vh] my-4 md:my-0">
        <div className="hidden md:block md:w-1/2 h-full">
          <Image
            src="/traveler.jpg"
            alt="Traveler"
            height={400}
            width={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 h-full">
          <div className="h-full w-full flex flex-col justify-center items-center">
            {/* header  */}
            <div className="mb-6 space-y-2">
              <h2 className="text-3xl font-semibold text-center">
                Welcome, Back
              </h2>

              <p className="text-center text-gray-500">
                Enter your valid credentials to continue.
              </p>
            </div>

            {/* form   */}

            <div className="w-full max-w-sm mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
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
                            placeholder="you@example.com"
                            {...field}
                            className="py-5 shadow-none border-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Create a secure password"
                            {...field}
                            className="py-5 shadow-none border-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end text-sm underline text-gray-700 font-medium">
                    <Link href="/auth/forgot-password" >Forgot Password?</Link>
                  </div>

                  <div className="flex flex-col">
                    <Button type="submit" className="w-full py-5">
                      Login
                    </Button>

                    <div className="flex items-center justify-center gap-x-4 py-1">
                      <Separator className="flex-1" />
                      <span>or</span>
                      <Separator className="flex-1" />
                    </div>

                    <Button
                      variant={"outline"}
                      type="submit"
                      className="w-full py-5"
                    >
                      Google
                    </Button>
                  </div>

                  <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/auth/signup"
                      className="underline font-semibold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}
