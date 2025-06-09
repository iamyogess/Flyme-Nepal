import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import WidthWrapper from "@/components/WidthWrapper";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="w-full my-5 lg:py-5">
        <WidthWrapper>
          <div className="flex flex-col md:flex-row lg:gap-10">
            {/* Contact Info */}
            <div className="md:w-2/5 flex flex-col">
              <div className="rounded p-6 border border-gray-300">
                {/* Call Section */}
                <div className="flex items-center gap-x-4">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-primary">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-lg font-medium">Call To Us</h2>
                </div>
                <p className="my-4 text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm">
                  Phone:{" "}
                  <Link href="tel:+8801611112222" className="text-primary">
                    +880 161 111 2222
                  </Link>
                </p>

                <Separator className="my-6" />

                {/* Email Section */}
                <div className="flex items-center gap-x-4">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-primary">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-lg font-medium">Write to Us</h2>
                </div>
                <p className="my-4 text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm">
                  Email:{" "}
                  <Link
                    href="mailto:customer@exclusive.com"
                    className="text-primary"
                  >
                    customer@exclusive.com
                  </Link>
                </p>
                <p className="text-sm mt-1">
                  Email:{" "}
                  <Link
                    href="mailto:support@exclusive.com"
                    className="text-primary"
                  >
                    support@exclusive.com
                  </Link>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 mt-6 md:mt-0 border border-gray-300 rounded p-6">
              <h2 className="text-xl font-medium mb-6">Send Us A Message</h2>
              <form className="flex flex-col space-y-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex flex-col gap-y-2 w-full">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 w-full">
                    <label htmlFor="phoneNo" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phoneNo"
                      type="tel"
                      placeholder="Your contact number"
                      className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary resize-none"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </WidthWrapper>
        {/* map */}
        <WidthWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.89174002536!2d85.30271367530118!3d27.720628676174854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e49431ef75%3A0x16d1e9dadf6a2e2a!2sFelt%20%26%20Yarn%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1745083059928!5m2!1sen!2snp"
            height="450"
            loading="lazy"
            className="w-full mt-10 md:mt-14 lg:mt-20"
          ></iframe>
        </WidthWrapper>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
