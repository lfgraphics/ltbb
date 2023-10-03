import Hero from "@/components/digitalmarketing/Hero";
import Image from "next/image";
import React from "react";

export default function DigitalMarketing() {
  return (
    <section className="bg-white pb-20">
      <Hero />
      <section className="bg-white px-[5%]">
        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row items-center mb-4">
          <div className="w-full lg:w-2/4 rounded-lg">
            <Image
              src="/digital-marketing/digital-marketing-1.webp"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-2/4">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-loose">
              Why Outsource Digital Marketing Services to TLB?
            </h2>
            <p>
              We offer legal industry specific and custom solutions that help
              take your law firm or legal practice to the next level.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row-reverse items-center ">
          <div className="w-full lg:w-1/4 rounded-lg">
            <Image
              src="/digital-marketing/digital-marketing-2.webp"
              width={700}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4">
            <p>
              At TLB, we take the time to research our clients, their
              industries, and their competition. We do this because we want our
              client’s law firm to get relevant and industry-tailored digital
              marketing solutions that will benefit them the most. We can assist
              law firms and attorney practice in organically growing their
              client base and achieving 5-star internet evaluations.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row items-center ">
          <div className="w-full lg:w-1/4 rounded-lg ">
            <Image
              src="/digital-marketing/digital-marketing-5.webp"
              width={700}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-loose">
              TLB’s Digital Marketing Services
            </h2>
            <p>
              Lawyers and attorneys at law firms frequently lack the time and
              resources to negotiate the complex and time-consuming realm of
              digital marketing. At TLB, we appreciate the necessity for law
              firms to concentrate on their cases. That is why we provide
              all-in-one solutions to assist clients in increasing their online
              presence, attracting quality leads, and growing their income.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl lg:text-3xl">
            How we make Digital Marketing strategies for law firms
          </h2>
          <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row-reverse items-center">
            <div className="w-full relative lg:w-1/4 rounded-lg h-full">
              <Image
                src="/digital-marketing/digital-marketing-6.webp"
                className="object-cover absolute inset-0"
                fill
              />
            </div>
            <div className="flex flex-col w-full lg:w-3/4">
              <p>
                It may be difficult for attorneys to know where to begin with
                their digital marketing plan. There are several digital
                marketing methods to explore, including website optimization,
                social media marketing, search engine optimization (SEO), and
                paid digital advertisements. The most successful law firms focus
                their efforts on a few areas that make the most sense for their
                practice areas, company, and customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
