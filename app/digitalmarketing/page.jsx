"use client";
import Hero from "@/components/digitalmarketing/Hero";
import Image from "next/image";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import PhoneCarousel from "./PhoneCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalMarketing() {
  useEffect(() => {
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000,
    });
  });
  return (
    <section className="bg-white pb-20">
      <Hero />
      <section className="bg-white px-[5%]">
        <div
          className="flex flex-col-reverse gap-6 mt-12 md:flex-row items-center mb-4 lg:gap-32 md:items-center"
          data-aos="zoom-in"
        >
          <div className="w-full lg:w-2/4 rounded-lg">
            <Image
              src="/digital-marketing/digital-marketing-1.webp"
              width={800}
              height={600}
              className="w-full lg:w-[80%]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-2/4 lg:gap-8 gap-2">
            <h2 className="text-xl lg:text-3xl font-semibold">
              Why Outsource Digital Marketing Services to TLB?
            </h2>
            <p className="lg:text-2xl">
              We offer legal industry specific and custom solutions that help
              take your law firm or legal practice to the next level.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col-reverse gap-6 mt-12 md:flex-row-reverse items-center lg:gap-32"
          data-aos="zoom-in"
        >
          <div className="w-full lg:w-1/4 rounded-lg">
            <Image
              src="/digital-marketing/digital-marketing-2.webp"
              width={700}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4">
            <p className="lg:text-2xl">
              At TLB, we take the time to research our clients, their
              industries, and their competition. We do this because we want our
              client’s law firm to get relevant and industry-tailored digital
              marketing solutions that will benefit them the most. We can assist
              law firms and attorney practice in organically growing their
              client base and achieving 5-star internet evaluations.
            </p>
          </div>
        </div>

        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <div className="mt-12 space-y-12">
                  <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md">
                    <div className="flex-shrink-0" data-aos="fade-left">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4" data-aos="fade-left">
                      <h4 className="text-lg font-medium leading-6">
                        Client-Centric Service:
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        We give our clients constant consultation by giving them
                        a professional account manager to handle all of their
                        needs. To maintain seamless communication, our clients
                        will always have direct contact with our digital
                        marketing staff.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
                    data-aos="fade-left"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6">
                        Data-Driven Strategies:
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        In most of our efforts, we depend on research and
                        in-depth data analysis. Data,for us, may provide vital
                        information that few organizations in your sector have
                        access to. In addition, we think that data and research
                        are essential for developing effective digital marketing
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mx-auto rounded-lg shadow-lg object-filllg:col-start-1 lg:row-start-1"
                data-aos="fade-right"
              >
                <img
                  src="/digital-marketing/digital-marketing-3.webp"
                  alt=""
                  style={{ maxHeight: "800px" }}
                  className="mx-auto rounded-lg shadow-lg object-fill"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div
                  className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
                  data-aos="fade-right"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Transparency:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      For our clients, we never hide or change information.
                      Honesty and integrity are two of our core principles at
                      Thrive, and we live up to them in our daily operations.
                    </p>
                  </div>
                </div>
                <div
                  className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
                  data-aos="fade-right"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Innovative Approach:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      We all know that the marketing sector is always evolving.
                      TLB encourages new approaches and is not afraid to test
                      them to discover whether they are better than what we are
                      currently doing. Our creative approach has resulted in the
                      creation of our most successful campaigns to date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="mx-auto rounded-lg shadow-lg object-fill"
              data-aos="fade-left"
            >
              <img
                src="/digital-marketing/digital-marketing-4.webp"
                alt=""
                style={{ maxHeight: "800px" }}
                className="mx-auto rounded-lg shadow-lg object-fill"
              />
            </div>
          </div>
        </div>

        <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md">
          <div className="flex-shrink-0" data-aos="fade-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ml-4" data-aos="fade-left">
            <h4 className="text-lg font-medium leading-6">On-Time Delivery:</h4>
            <p className="mt-2 dark:text-gray-400">
              We are dedicated to providing the finest possible service to our
              clients. This involves always adhering to their timetables and
              deadlines. Our teams collaborate and use powerful project
              management technologies to track and complete tasks on time.
            </p>
          </div>
        </div>

        <section
          className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4 mt-4"
          data-aos="zoom-in"
          style={{ marginTop: "80px" }}
        >
          <div className="container flex flex-col mx-auto lg:flex-row">
            <div
              className="w-full lg:w-1/3 rounded-lg object-fill"
              style={{
                backgroundImage:
                  'url("/digital-marketing/digital-marketing-5.webp")',
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            />
            <div className="flex flex-col w-full py-6 px-1 lg:w-2/3 md:p-8 lg:p-12">
              <p className="text-3xl font-bold leading-loose">
                TLB’s Digital Marketing Services
              </p>
              <h2 className="text-xl font-semibold leading-loose mt-2 md:mt-0">
                Lawyers and attorneys at law firms frequently lack the time and
                resources to negotiate the complex and time-consuming realm of
                digital marketing. At TLB, we appreciate the necessity for law
                firms to concentrate on their cases. That is why we provide
                all-in-one solutions to assist clients in increasing their
                online presence, attracting quality leads, and growing their
                income.
              </h2>
            </div>
          </div>
        </section>

        <div className="hidden sm:block w-full sm:h-[800px] lg:h-[920px] p-8 mt-24">
          <Carousel />
        </div>
        <div className="w-full p-2 mt-8 block sm:hidden">
          <PhoneCarousel />
          <div className="flex w-full justify-center items-center gap-2">
            <FontAwesomeIcon
              icon={faArrowLeft}
              fixedWidth
              className="h-[14px] w-[14px] mt-2"
            />
            <p className="text-sm font-semibold text-center mt-2">
              {" "}
              Swipe for more{" "}
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              fixedWidth
              className="h-[14px] w-[14px] mt-2"
            />
          </div>
        </div>

        <div
          className="flex flex-col-reverse gap-6 mt-[40px] xl:mt-14 md:flex-row items-center lg:gap-32"
          data-aos="zoom-in"
        >
          <div className="w-full lg:w-1/4 rounded-lg order-2">
            <Image
              src="/digital-marketing/digital-marketing-6.webp"
              width={700}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4 lg:gap-8 order-1">
            <h2 className="text-xl lg:text-3xl font-semibold leading-loose">
              How we make Digital Marketing strategies for law firms
            </h2>
            <p className="text-lg lg:text-2xl">
              It may be difficult for attorneys to know where to begin with
              their digital marketing plan. There are several digital marketing
              methods to explore, including website optimization, social media
              marketing, search engine optimization (SEO), and paid digital
              advertisements. The most successful law firms focus their efforts
              on a few areas that make the most sense for their practice areas,
              company, and customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <div className="flex gap-5 items-center">
            <img
              src="/digital-marketing/icons/market-research 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">
              1. Conduct market research on your intended audience.
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="/digital-marketing/icons/goal 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">
              2. Establish your digital marketing objectives.
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="/digital-marketing/icons/social-media 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">
              3. Which marketing channels are most effective for lawyers?
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="/digital-marketing/icons/profit 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">
              4. Design an SEO-friendly legal office website that turns visitors
              into clients.
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="/digital-marketing/icons/evaluation (1) 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">
              5. Evaluate the effectiveness of your digital marketing plan.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
