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
      title: "Paradigm shift",
      description: "A paradigm change has occurred in the delivery approach for legal process outsourcing services. With law firms and corporate legal departments looking to save costs, gain greater flexibility, and boost in-house productivity, Legal Process Outsourcing has become the norm. As a result, it makes excellent commercial sense for law firms to outsource legal research services to skilled and dependable suppliers.",
    },
    {
      title: "Time-consuming process",
      description: "Legal research is a time-consuming procedure since it involves lawyers and attorneys to read through a large number of legal papers. Since conducting legal research is such an important process in law firms to handle cases, it is typically a very time-consuming work.",
    },
    {
      title: "Excess workload on attorneys and lawyers",
      description: "Lawyers and attorneys are extremely busy as they have other tasks that need to be done such as going to court, giving legal counsel, and representing their cases etc. Lawyers and attorneys often are seen to be handling multiple clients at a time which practically gets very tiring and tends to reduce the productivity of the attorneys. ",
    },
    {
      title: "Cost-Efficient",
      description: "Outsource your legal research and contract management services to TLB and receive the best legal research services while saving up to 50% on these time-consuming but crucial areas of litigation.",
    }
  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Legal Research Services?
          </h2>
          {/* <p className="dark:text-gray-400">
            Outsourcing your <strong>IP Research and Consultation Service </strong> requirements can do wonders for your firm. Today it's a proven fact that firms that have outsourced their legal requirements to reliable partners have witnessed fruitful results and the potential to take in more client projects has only increased over the years.
            <br></br>
            <br></br>
            Outsourcing your IP Research and Consultation Service requirements can do wonders for your firm. Today it's a proven fact that firms that have outsourced their legal requirements to reliable partners have witnessed fruitful results and the potential to take in more client projects has only increased over the years.
            <br></br>
            <br></br>
            <ul>
              <li>Achieve compelling cost reductions and faster turnaround times,</li>
              <li>Free up scarce in-house resources</li>
              <li>Focus on more strategic and higher-value activities, </li>
              <li>Refocus the company's energies on its core business activities. </li>
            </ul>
          </p> */}
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
