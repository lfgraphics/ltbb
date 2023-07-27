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
      description: "Estate planning involves complex legal and financial considerations. By outsourcing to TLB estate planning professionals, law firms and attorneys can benefit from their expertise and knowledge in this specific field. Our estate planning professionals stay updated with current laws, regulations, and strategies, ensuring that your estate plan is comprehensive and effective.",
    },
    {
      title: "Time and Convenience:",
      description: "Estate planning can be a time-consuming and intricate process. By outsourcing to TLB, law firms and attorneys can delegate the tasks to professionals who can efficiently handle the paperwork, legal documentation, financial analysis, and other administrative aspects. This frees up time for law firms and attorneys to focus on other priorities in their lives.",
    },
    {
      title: "Customized Solutions:",
      description: "TLB’s estate planning professionals can tailor an estate plan to meet specific needs, goals, and circumstances. They can provide personalized advice, recommend appropriate strategies, and help law firms and attorneys to make informed decisions based on their unique situation. This personalized approach ensures that the estate plan is comprehensive and aligned with the objectives.",
    },
    {
      title: "Risk Mitigation:",
      description: "Estate planning mistakes or oversights can have significant consequences, both legally and financially. By outsourcing to TLB estate planning professionals, law firms and attorneys can minimize the risk of errors or omissions in their estate plan. TLB’s estate planning professionals have the knowledge and experience to identify potential pitfalls, ensure compliance with legal requirements, and provide guidance to protect assets and minimize tax liabilities.",
    },
    {
      title: "Confidentiality and Privacy: ",
      description: "Estate planning often involves sensitive and confidential information about an individual's assets, beneficiaries, and family dynamics. By working with TLB’s trusted and professional estate planning professionals, law firms and attorneys can maintain a higher level of confidentiality and privacy compared to handling the estate planning process in-house.",
    },
    {
      title: "Cost-Effectiveness: ",
      description: "While outsourcing estate planning services involves costs, it can be more cost-effective than hiring full-time professionals or relying on general practitioners who may not have specialized expertise in estate planning. By paying for the services on an as-needed basis, law firms and attorneys can access professional advice and assistance without incurring the ongoing expenses associated with maintaining an in-house team.",
    },
    {
      title: "Continuity:",
      description: "Estate planning is an ongoing process that requires periodic review and adjustments. By establishing a relationship with TLB’s estate planning professionals, law firms and attorneys can benefit from their long-term support and guidance. TLB’s estate planning professionals can help keep the estate plan up to date, adapt it to changing circumstances, and assist with any future changes or challenges.",
    }
  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Estate Planning Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            There are several reasons why law firms and attorneys might choose to outsource estate planning services to TLB:
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

        {/* <div  data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-2">It&apos;s important</h2>
              <p className="font-semibold text-md">
                Overall, outsourcing case intake services to TLB will allows law firms to improve client service,
                increase efficiency, reduce costs, and focus on their core legal work. By leveraging the expertise
                and scalability TLB, firms can effectively manage the initial contact and evaluation process,
                ensuring that potential cases are properly assessed and directed to the appropriate legal teams.
              </p>

              <p className="mt-4 text-gray-400"></p>
              
            </article>
          </div>
        </div> */}

      </div>
    </>
  );
}
