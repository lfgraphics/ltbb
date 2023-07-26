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
      title: "Expertise and specialization:",
      description: "Family law is a complex and specialized field that requires in-depth knowledge of various legal aspects such as divorce, child custody, adoption, and domestic violence. By outsourcing family law services to TLB’s experienced professionals, law firms and attorneys can gain access to their expertise and specialization in this specific area, ensuring that their legal matters are handled by professionals who understand the nuances of family law.",
    },
    {
      title: "Cost-effectiveness:",
      description: "Outsourcing to TLB can be a cost-effective solution compared to hiring and maintaining in-house legal professionals. By outsourcing family law services to TLB, law firms and attorneys can avoid the expenses associated with full-time salaries, benefits, office space, and training. Additionally, outsourcing to TLB allows to pay for services on an as-needed basis, reducing costs during periods of low caseload.",
    },
    {
      title: "Focus on core competencies:",
      description: "For law firms, outsourcing family law services to TLB can allow them to focus on their core competencies and areas of practice where they have the most expertise. This enables them to allocate their internal resources more efficiently and effectively, leading to improved client service and satisfaction.",
    },
    {
      title: "Increased flexibility and scalability: ",
      description: "Outsourcing family law services to TLB provides flexibility and scalability in handling fluctuating workloads. During peak periods or when faced with complex cases, outsourcing allows law firms to quickly ramp up resources by engaging external professionals or firms. Conversely, during slower periods, law firms can reduce outsourcing arrangements to match the demand, avoiding the need for unnecessary overhead.",
    },
    {
      title: "Access to advanced technology and resources:",
      description: "Outsourcing family law services to TLB often grants access to advanced legal technology and resources that may not be readily available in-house. This can include case management systems, legal research tools, document automation, and other specialized software, enhancing the efficiency and effectiveness of legal processes.",
    },
    {
      title: "Confidentiality and impartiality:",
      description: "In sensitive family law matters, outsourcing to TLB can provide an added layer of confidentiality and impartiality. Working with external professionals or firms can ensure that sensitive information is handled discreetly and impartially, helping to maintain the privacy and dignity of the parties involved.",
    }

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Family Law Services to TLB?
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
