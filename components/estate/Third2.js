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

export default function Third2() {
  const cardData = [
    {
      title: "Expertise:",
      description: "Estate planning involves complex legal, financial, and tax considerations. By outsourcing to TLB’s specialized estate planning professionals, law firms and attorneys can tap into their expertise and knowledge to create a comprehensive and effective estate plan.",
    },
    {
      title: "Personalized Solutions:",
      description: "TLB’s estate planning professionals can tailor the estate plan to suit the individual's unique needs and goals. They can provide personalized advice and recommend appropriate strategies based on the individual's financial situation, family dynamics, and long-term objectives.",
    },
    {
      title: "Time-Saving:",
      description: "Estate planning can be a time-consuming process, especially for those who are not familiar with the legal and financial intricacies involved. By outsourcing to TLB, law firms and attorneys can delegate the tasks to experts, allowing them to focus on other important aspects of their life and business.",
    },
    {
      title: "Minimize Errors and Omissions:",
      description: "Estate planning mistakes can lead to legal disputes, tax issues, or unintended distribution of assets. TLB’s estate planning professionals who specialize in estate planning can help minimize the risk of errors and ensure that the plan is legally valid and effective.",
    },
    {
      title: "Keeping Up with Changing Laws:",
      description: "Estate planning laws and regulations are subject to change. TLB’s estate planning professionals stay up-to-date with the latest legal developments, ensuring that the estate plan remains compliant with current laws.",
    },
    {
      title: "Objective Advice:",
      description: "TLB can provide an objective perspective on sensitive family matters and financial decisions, helping to mediate potential conflicts and ensuring fairness in the distribution of assets.",
    },
    {
      title: "Confidentiality and Privacy:",
      description: "Estate planning involves sharing personal and financial information. By outsourcing to TLB’s estate planning professionals, law firms and attorneys can maintain a higher level of confidentiality and privacy compared to sharing sensitive details with multiple parties.",
    },
    {
      title: "Continuity and Support:",
      description: "TLB can offer ongoing support, periodically reviewing and updating the plan as circumstances change, such as changes in tax laws, family situations, or financial status.",
    },
    {
      title: "Cost-Effective: ",
      description: "Outsourcing can be more cost-effective than hiring a full-time in-house estate planner, especially for individuals with relatively straightforward estate planning needs.",
    },
    {
      title: "Specialized Services: ",
      description: "TLB offers a wide range of specialized services, including tax planning, trust administration, and business succession planning, providing a comprehensive approach to estate planning.",
    },

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why choose TLB’s Estate Planning Services?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing estate planning services to TLB can be beneficial for several reasons:
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
