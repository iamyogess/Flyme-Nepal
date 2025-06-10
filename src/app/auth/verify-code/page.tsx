"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import WidthWrapper from "@/components/WidthWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  verificationCode: z
    .string()
    .min(6, {
      message: "Please enter the complete 6-digit verification code.",
    })
    .max(6, {
      message: "Verification code must be exactly 6 digits.",
    }),
});

const VerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const onSubmit = async () => {
    setIsLoading(false);
    setIsResending(false)
    console.log("hello");
  };

  return (
    <WidthWrapper>
      <div className="min-h-[80vh] flex justify-center items-center py-12 px-4 mx-auto w-full">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link
            href="/auth/forgot-password"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to forgot password
          </Link>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="mx-auto w-18 h-18 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                  <Image src="/message-received.svg" alt="message received" height={400} width={400} />
                </div>
                <h1 className="text-3xl font-semibold text-gray-900">
                  Check Your Email
                </h1>
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm">
                    We&apos;ve sent a 6-digit verification code to
                  </p>
                  <p className="font-medium text-gray-900 text-sm">
                    {/* {maskEmail(email)} */}
                  </p>
                </div>
              </div>

              {/* OTP Input Field */}
              <FormField
                control={form.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem className="space-y-4 w-full">
                    <FormLabel className="sr-only">
                      Enter verification code
                    </FormLabel>
                    <FormControl>
                      <div className="flex justify-center items-center w-full">
                        <InputOTP
                          maxLength={6}
                          disabled={isLoading}
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <InputOTPGroup className="flex gap-x-1">
                            {[0, 1, 2].map((index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                className="md:md:w-10 md:h-10 w-9 h-9 text-lg font-medium border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              />
                            ))}
                          </InputOTPGroup>

                          <InputOTPSeparator className="mx-1 flex justify-center items-center">
                            <div className="w-3 h-0.5 bg-gray-300 rounded-full" />
                          </InputOTPSeparator>

                          <InputOTPGroup className="flex gap-x-1">
                            {[3, 4, 5].map((index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                className="md:w-10 md:h-10 w-9 h-9 text-lg font-medium border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="w-full flex justify-center items-center">
                <Button
                  type="submit"
                  className="max-w-xs w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify Email"}
                </Button>
              </div>
              {/* Resend Link */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Didn&apos;t receive the code?
                </p>
                <button
                  type="button"
                  disabled={isLoading || isResending}
                  className="text-primary hover:text-primary/90 font-medium hover:underline focus:outline-none focus:underline cursor-pointer"
                >
                  {isResending ? "Resending..." : "Resend verification code"}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default VerifyCode;
