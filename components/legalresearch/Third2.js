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
      title: "Flexibility",
      description: "TLB Legal Research team is flexible and puts extra efforts beyond their working hours to deliver assignments on time.",
    },
    {
      title: "Process",
      description: "The team speeds up the process by adapting to the best of the technologies. The team does two-levels of quality checks before delivering the assignments.",
    },
    {
      title: "Result-oriented services",
      description: "We produce accurate findings that match the quality criteria specified by the customer since we adopt a step-by-step strategy in the execution of our research and contract management.",
    },
    {
      title: "Research pool",
      description: "The foremost advantage of TLB is the variety of resources in this pool, like doctors, forensic experts, attorneys, law graduates, pharmacologists, and regular graduates that ensures case-relevant information is reviewed and information is properly placed or filed and prioritized.",
    },
    {
      title: "Reliable decision makers",
      description: "TLB legal research team takes guidance from real time law practitioners of the Supreme Court and High Courts of India, to uncover relevant cases and verdicts to support your legal decision-making. The team has experience of working on doctrinal, analytical, historical, comparative, and philosophical methods with various law firms and attorneys across jurisdictions and across continents.",
    },
    {
      title: "Cost Effective",
      description: "Outsource your legal research and contract management services to TLB and receive the best legal research services while saving up to 50% on these time-consuming but crucial areas of litigation.",
    },
    {
      title: "Time Saving",
      description: "Spending time on legal research and contract management at various stages can be exceedingly time-consuming. By using TLB outsourcing services, you may save money and time while focusing on developing your business.",
    },
  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Legal Research Services?
          </h2>
          <p className="dark:text-gray-400">
            Legal research services have undergone a revolutionary change relating to their functioning and can be simply defined as the procedure of discovering effective legal research solutions to a legal question or checking for a legal precedent that can be quoted in an appeal or during the trial. TLB’s Legal Research team can help you in providing accurate solutions, analyze statutes and case studies to ensure that all your legal issues are taken care of accordingly.
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
