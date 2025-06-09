"use client";
import { CheckCircle, Globe, Users, Clock } from "lucide-react";
import WidthWrapper from "./WidthWrapper";

const WhyUs = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <WidthWrapper>
        <div className="flex flex-col justify-center items-center text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">
            WHY US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why travelers prefer Flyme?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            We&apos;ve helped thousands of travelers experience seamless
            journeys with our premium service and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-12">
          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-6">
              <Users className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">3k+</h3>
            <p className="text-lg font-medium text-gray-700">
              Happy customers who trust our services every month
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-6">
              <Globe className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">150+</h3>
            <p className="text-lg font-medium text-gray-700">
              Destinations worldwide with premium local partnerships
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-6">
              <Clock className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">99%</h3>
            <p className="text-lg font-medium text-gray-700">
              On-time performance with guaranteed satisfaction
            </p>
          </div>
        </div>

        <div className="p-4 md:p-10 border border-gray-200 rounded-2xl bg-gray-50 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Flyme Difference
              </h3>
              <p className="text-gray-700 mb-6">
                We go beyond just booking flights. Our comprehensive travel
                service ensures you have a seamless experience from planning to
                arrival.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 dedicated customer support",
                  "Flexible booking and cancellation policies",
                  "Exclusive partner hotel discounts",
                  "Personalized travel itineraries",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Customer Satisfaction
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-gray-700 h-2.5 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4 py-2">
                &quot;Flyme made our family vacation completely stress-free.
                Their attention to detail and responsive support team exceeded
                our expectations.&quot;
              </blockquote>

              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default WhyUs;
