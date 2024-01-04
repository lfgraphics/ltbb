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
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination])

const cardData = [
  {
    title: "Cost efficiency:",
    description: "Outsourcing contract lifecycle management (CLM) services can be more cost-effective than hiring and maintaining an in-house team.Outsourcing to TLB eliminates the need for recruitment, training, salaries, benefits, office space, and other overhead costs associated with an internal team.",
  },
  {
    title: "Expertise and specialized skills:",
    description: "Outsourcing to TLB allows companies to leverage the expertise and specialized skills of a dedicated team.Contract lifecycle management requires knowledge of legal, regulatory, and compliance frameworks, as well as experience in managing contracts throughout their lifecycle.Outsourcing to TLB ensures efficient and accurate management of contracts.",
  },
  {
    title: "Focus on core competencies:",
    description: "Contract management may not be a core competency of every company. By outsourcing this function, organizations can free up their internal resources to focus ontheir core business activities and strategic initiatives, allowing them to allocate their time and resources more effectively.",
  },
  {
    title: "Scalability and flexibility:",
    description: "Outsourcing to TLB provides scalability and flexibility to adapt to changing business needs.TLB can quickly scale their resources up or down based on the volume of contracts or the complexity of the organization's requirements. This flexibility is particularly beneficial for companies with fluctuating contract volumes or those undergoing periods of growth or change",
  },
  {
    title: "Access to advanced technology and tools:",
    description: "TLB leverages from advanced contract management software and tools that streamline and automate the contract lifecycle.Outsourcing to TLB enables companies to benefit from these technologies without investing in expensive software licenses or infrastructure.",
  },
  {
    title: "Improved compliance and risk management:",
    description: "Effective contract lifecycle management helps mitigate risks and ensures compliance with regulatory requirements.Outsourcing CLM services to TLB which has extensive knowledge and experience in contract compliance and risk management can enhance an organization's ability to navigate complex legal and regulatory landscapes. .",
  },
  {
    title: "Enhanced efficiency and productivity:",
    description: "Outsourcing to TLB can improve operational efficiency and productivity. TLB can implement standardized processes, best practices, and automation, reducing the time and effort required for contract creation, negotiation, execution, and monitoring.",
  },

];
export default function Third() {

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Contract Lifecycle Management Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Companies often choose to outsource contract lifecycle management services for
            several reasons:
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

        <div data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-2">It&apos;s Important</h2>
              <p className="text-lg">
                Overall, outsourcing contract lifecycle management services offers companies
                numerous advantages, including cost savings, access to expertise, scalability, flexibility,
                and improved efficiency, allowing them to focus on their core business objectives.
              </p>

              <p className="mt-4 text-gray-400"></p>
              {/* <div className="flex items-center mt-8 space-x-4">
			<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">Leroy Jenkins</h3>
				<time datetime="2021-02-18" className="text-sm text-gray-400">Feb 18th 2021</time>
			</div>
		</div> */}
            </article>
          </div>
        </div>

      </div>
    </>
  );
}
