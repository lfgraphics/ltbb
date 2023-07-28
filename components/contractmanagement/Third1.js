"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Third() {
  const cardData = [
    {
      title: "Extensive Knowledge",
      description: `TLB chalks out bespoke contract management services to meet individual client
requirements. Our contract management team is proficient in reviewing contracts that
range from NDAs to complex documents involving mergers and acquisitions, sales and
procurement agreements, and financial agreements to name a few along with many
others.
`,
    },
    {
      title: `Cohesive Expertise`,
      description: `To whirl proficiency and optimize methodology, TLB incorporates high-level skills into its
customized solutions along with hyped-up luminosity skills into contract management
conformity. We provide unbiased and appropriate advice regarding the best available
solution that matches individual client needs as TLB indulges in providing the best
available solutions.`,
    },
    {
      title: "Analytical Functionality",
      description: `Our team gathers and promulgates on an expanded diversity of leading methodology in
conjunction with contract status, turnaround times, volumes, frequently negotiated
provisions, use of non-standard provisions, types of agreements, and much more. TLB’s
customized plans provide solutions that match individual client requirements.
`,
    },
    {
      title: "Analyzing Contracts",
      description: `TLB is known for organizing contracts and extracting vital information into customized
templates and reports so that the clients can generate a plan for effective business
functioning. Clients prefer TLB’s trained and skilled resources to carefully abstract all
important info from a contract into a customized template, quality checked by subject
matter experts for an error-free output.`,
    }
  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why choose TLB’s Contract Lifecycle Management Services?
          </h2>
          <p className="dark:text-gray-400">
            Amalgamation of years of hard-earned experience with the latest
            technology to cater to you the best contract lifecycle management services.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            shadow: true,
          }}
          pagination={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper space-y-2"
        >
          {/* Step 2: Map the card data to the SwiperSlides */}
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white tiles rounded-b-xl shadow-gray-700 shadow-xl rounded-t-lg    p-8 ">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-4">{card.title}</h3>
                </div>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-4">It&apos;s Important</h2>
              <p className="text-lg">
                Overall, outsourcing contract lifecycle management services offers companies
                numerous advantages, including cost savings, access to expertise, scalability, flexibility,
                and improved efficiency, allowing them to focus on their core business objectives.
              </p>

              <p className="mt-4 text-gray-400"></p>
              <div className="flex items-center mt-8 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                <div>
                  <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                  <time datetime="2021-02-18" className="text-sm text-gray-400">Feb 18th 2021</time>
                </div>
              </div>
            </article>
          </div>
        </div> */}

      </div>
    </>
  );
}
