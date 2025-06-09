"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters.",
    }),
    termsAndConditions: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
    privacyPolicy: z.boolean().refine((val) => val === true, {
      message: "You must agree to the privacy policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
      privacyPolicy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle the form submission
    // For example, sending the data to your API
  }
  return (
    <WidthWrapper>
      <div className="flex justify-between items-center md:h-[90vh] my-4 md:my-0">
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
                Join Merofly
              </h2>
              <div className="flex justify-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div
                      key={index}
                      className="h-8 w-8 rounded-full border border-gray-200 -ml-2 first:ml-0 flex justify-center items-center bg-gray-50"
                      aria-hidden="true"
                    >
                      {index}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-500">11, 172 have already joined</p>
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
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

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm your password"
                            {...field}
                            className="py-5 shadow-none border-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="termsAndConditions"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <Link href="#" className="underline">
                                Terms & Conditions
                              </Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyPolicy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <Link href="#" className="underline">
                                Privacy Policy
                              </Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Button type="submit" className="w-full py-5">
                      Create Account
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
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className="underline font-semibold"
                    >
                      Log In
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
