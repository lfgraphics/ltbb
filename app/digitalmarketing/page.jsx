import Hero from "@/components/digitalmarketing/Hero";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import PhoneCarousel from "./PhoneCarousel";


export default function DigitalMarketing() {
  return (
    <section className="bg-white pb-20">
      <Hero />
      <section className="bg-white px-[5%]">
        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row items-center mb-4 lg:gap-32 md:items-center">
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
        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row-reverse items-center lg:gap-32">
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

        <div className="flex flex-col gap-6 mt-16 md:flex-row items-stretch lg:gap-32">
          <img
            src="/digital-marketing/digital-marketing-3.webp"
            className="w-full h-[425px] lg:h-auto lg:max-h-[calc(100vh-20vh)] grow object-cover rounded-xl"
          />
          <div className="flex flex-col justify-evenly grow gap-2 md:gap-6 lg:gap-10">
            <div
              className="w-full rounded-lg lg:rounded-2xl flex gap-5 md:p-8 md:py-10 xl:py-16 p-4 lg:gap-8"
              style={{ boxShadow: " -1px 1px 9px 0px rgba(0,0,0,0.75)" }}
            >
              <div className="w-[200px]  ">
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] " />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold leading-none text-start">
                  Client-Centric Service
                </h2>
                <p className="lg:text-2xl mt-2 lg:mt-5">
                  We give our clients constant consultation by giving them a
                  professional account manager to handle all of their needs. To
                  maintain seamless communication, our clients will always have
                  direct contact with our digital marketing staff.
                </p>
              </div>
            </div>

            <div
              className="w-full rounded-lg lg:rounded-2xl mt-3 flex gap-5 md:p-8 md:py-10 xl:py-16 p-4 lg:gap-8"
              style={{ boxShadow: " -1px 1px 9px 0px rgba(0,0,0,0.75)" }}
            >
              <div className="w-[200px]  ">
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] " />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold leading-none text-start">
                  Data-Driven Strategies
                </h2>
                <p className="lg:text-2xl mt-2 lg:mt-5">
                  In most of our efforts, we depend on research and in-depth
                  data analysis. Data,for us, may provide vital information that
                  few organizations in your sector have access to. In addition,
                  we think that data and research are essential for developing
                  effective digital marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-5 lg:mt-16 md:flex-row items-stretch lg:gap-32">
          <img
            src="/digital-marketing/digital-marketing-4.webp"
            className="w-full h-[425px] lg:h-auto lg:max-h-[calc(100vh-20vh)] grow object-cover rounded-xl order-2"
          />
          <div className="flex flex-col justify-evenly grow gap-2 md:gap-6 lg:gap-10 order-1">
            <div
              className="w-full rounded-lg lg:rounded-2xl flex gap-5 md:p-8 md:py-10 xl:py-16 p-4 lg:gap-8"
              style={{ boxShadow: " -1px 1px 9px 0px rgba(0,0,0,0.75)" }}
            >
              <div className="w-[200px]">
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] " />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold leading-none text-start">
                  Transparency
                </h2>
                <p className="lg:text-2xl mt-2 lg:mt-5">
                  For our clients, we never hide or change information. Honesty
                  and integrity are two of our core principles at Thrive, and we
                  live up to them in our daily operations.
                </p>
              </div>
            </div>

            <div
              className="w-full rounded-lg lg:rounded-2xl mt-3 flex gap-5 md:p-8 md:py-10 xl:py-16 p-4 lg:gap-8"
              style={{ boxShadow: " -1px 1px 9px 0px rgba(0,0,0,0.75)" }}
            >
              <div className="w-[200px]  ">
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] " />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold leading-none text-start">
                  Innovative Approach
                </h2>
                <p className="lg:text-2xl mt-2 lg:mt-5">
                  We all know that the marketing sector is always evolving. TLB
                  encourages new approaches and is not afraid to test them to
                  discover whether they are better than what we are currently
                  doing. Our creative approach has resulted in the creation of
                  our most successful campaigns to date.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full rounded-lg lg:rounded-2xl flex gap-5 mt-12 md:p-8 md:py-10 xl:py-16 p-4 lg:gap-8"
          style={{ boxShadow: " -1px 1px 9px 0px rgba(0,0,0,0.75)" }}
        >
          <div className="w-[200px] ">
            <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] " />
          </div>
          <div>
            <h2 className="text-xl lg:text-3xl font-semibold leading-none">
              On-Time Delivery
            </h2>
            <p className="lg:text-2xl mt-2 lg:mt-5">
              We are dedicated to providing the finest possible service to our
              clients. This involves always adhering to their timetables and
              deadlines. Our teams collaborate and use powerful project
              management technologies to track and complete tasks on time.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-6 mt-12 md:flex-row items-center lg:gap-32">
          <div className="w-full lg:w-1/4 rounded-lg ">
            <Image
              src="/digital-marketing/digital-marketing-5.webp"
              width={700}
              height={600}
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4 lg:gap-10">
            <h2 className="text-xl lg:text-3xl font-semibold leading-loose">
              TLB’s Digital Marketing Services
            </h2>
            <p className="lg:text-2xl">
              Lawyers and attorneys at law firms frequently lack the time and
              resources to negotiate the complex and time-consuming realm of
              digital marketing. At TLB, we appreciate the necessity for law
              firms to concentrate on their cases. That is why we provide
              all-in-one solutions to assist clients in increasing their online
              presence, attracting quality leads, and growing their income.
            </p>
          </div>
        </div>

        <div className="hidden sm:block w-full sm:h-[780px] lg:h-[880px] p-10 mt-24 overflow-x-hidden">
          <Carousel/>
        </div>
        <div className="w-full p-2 mt-8 block sm:hidden">
          <PhoneCarousel/>
        </div>

        <div className="flex flex-col-reverse gap-6 mt-[40px] xl:mt-14 md:flex-row items-center lg:gap-32">
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
                their digital marketing plan. There are several digital
                marketing methods to explore, including website optimization,
                social media marketing, search engine optimization (SEO), and
                paid digital advertisements. The most successful law firms focus
                their efforts on a few areas that make the most sense for their
                practice areas, company, and customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <div className="flex gap-5 items-center">
          <img
              src="/digital-marketing/icons/market-research 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">1. Conduct market research on your intended audience.</p>
          </div>
          <div className="flex gap-5 items-center">
          <img
              src="/digital-marketing/icons/goal 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">2. Establish your digital marketing objectives.</p>
          </div>
          <div className="flex gap-5 items-center">
          <img
              src="/digital-marketing/icons/social-media 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">3. Which marketing channels are most effective for lawyers?</p>
          </div>
          <div className="flex gap-5 items-center">
          <img
              src="/digital-marketing/icons/profit 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">4. Design an SEO-friendly legal office website that turns visitors into clients.</p>
          </div>
          <div className="flex gap-5 items-center">
          <img
              src="/digital-marketing/icons/evaluation (1) 1.png"
              className="h-[65px] w-[65px] lg:h-[100px] lg:w-[100px]"
            />
            <p className="text-lg lg:text-2xl">5. Evaluate the effectiveness of your digital marketing plan.</p>
          </div>
        </div>

        
      </section>
    </section>
  );
}
