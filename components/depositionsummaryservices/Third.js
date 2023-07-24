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
      title: "Expertise:",
      description: `Outsourcing deposition summary services to TLB allows access to professionals who are experienced in legal research, summarization, and understanding the intricacies of deposition transcripts. These experts are skilled in extracting key information and presenting it in a clear and concise manner.`,
    },
    {
      title: "Timesaving:",
      description: `Deposition transcripts can be lengthy and time-consuming to review. By engaging with TLB’s deposition summarization process, legal professionals can save valuable time and focus on other critical aspects of their cases.`,
    },
    {
      title: "Cost-effectiveness: ",
      description: `Outsourcing deposition summary services to TLB can be cost-effective compared to hiring additional in-house staff or allocating existing resources to handle deposition summaries. It eliminates the need for training and managing staff solely for this task.`,
    },
    {
      title: "Scalability:",
      description: `Outsourcing to TLB provides flexibility in managing workload fluctuations. Law firms can easily adjust the volume of work assigned to the deposition summary service provider based on their current needs.`,
    },
    {
      title: "Quality and Accuracy:",
      description: `TLB’s specialized deposition summary service has rigorous quality control measures in place to ensure accuracy and attention to detail in their summaries. We are familiar with legal terminology and the specific requirements of deposition summaries.\n\nWhen considering outsourcing deposition summary services, it is essential to select a reputable and reliable service provider. Conducting due diligence, checking reviews or testimonials, and evaluating the provider's expertise and track record can help ensure a successful outsourcing partnership.`,
    }

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Deposition Summary Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Outsourced deposition summary services refer to the practice of hiring an external service provider to handle the task of creating deposition summaries. Instead of handling the task in-house, law firms and legal professionals outsource this work to specialized companies or freelance professionals who specialize in deposition summarization.
            <br></br>
            There are several reasons why outsourcing deposition summary services may be beneficial:

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

        {/* <div className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article data-aos="flip-down">
              <h2 className="text-xl font-bold text-center mb-2">It&apos;s important</h2>
              <p className="font-semibold text-md">
                &quot;It&apos;s important to note that outsourcing paralegal support does not replace the need for qualified attorneys. Rather, it complements legal expertise by providing additional support and resources, enabling legal professionals to operate more efficiently and effectively.&quot;
              </p>

              <p className="mt-4 text-gray-400"></p>
            </article>
          </div>
        </div> */}

      </div>
    </>
  );
}
