"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import SwiperCore,{ FreeMode, Pagination,Autoplay } from "swiper";

SwiperCore.use([Autoplay])

export default function Third() {
  const cardData = [
    {
      title: "Expertise and Specialization",
      description: "TLB specializes in document review processes and has expertise in handling large volumes of documents. They have experienced professionals who are trained in efficient review techniques, legal standards, and relevant technologies. Outsourcing to TLB ensures that the document review is conducted by knowledgeable experts who can accurately identify relevant information and make informed determinations."
    },
    {
      title: "Scalability and Flexibility",
      description: "Document review needs can vary significantly from case to case. Outsourcing to TLB allows for easy scalability and flexibility in resource allocation. Service providers can quickly assemble a team of reviewers or adjust the team size based on the volume and urgency of the documents to be reviewed. This scalability ensures that the review process is efficient and completed within the required timelines."
    },
    {
      title: "Cost Efficiency",
      description: "Outsourcing managed document review to TLB can be cost-effective compared to conducting the review in-house. It eliminates the need for law firms or legal departments to invest in additional staff, technology infrastructure, or software licenses. TLB operates on a project-based or per-document pricing model, allowing for better cost predictability."
    },
    {
      title: "Access to Advanced Technologies",
      description: "TLB typically leverages advanced eDiscovery technologies, such as predictive coding and machine learning, to streamline the review process. These technologies can help identify relevant documents more accurately and efficiently, saving time and resources."
    },
    {
      title: "Focus on Core Competencies",
      description: "By outsourcing document review to TLB, legal professionals can focus on their core competencies, such as case strategy, client representation, or legal analysis. Outsourcing the time-consuming and resource-intensive document review process allows them to dedicate more time and energy to higher-value tasks that require their specialized expertise."
    },
    {
      title: "Quality Control and Consistency",
      description: "TLB has established quality control processes and protocols to ensure accuracy, consistency, and adherence to legal standards. They employ senior reviewers or quality control specialists to oversee the review work and ensure the highest level of quality and compliance."
    },
    {
      title: "Risk Mitigation",
      description: "Outsourcing the document review process to TLB can help mitigate the risk of errors or omissions. They are experienced in navigating complex legal requirements, ensuring compliance, and maintaining confidentiality and data privacy."
    }
  ];


  return (
    <>
      <div className="bg-transparent mx-auto w-5/6 mt-14">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Document Review Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing a managed document review service can offer several advantages for law firms, corporations, or legal departments. Here are some key reasons why outsourcing this service is beneficial:
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {/* Step 2: Map the card data to the SwiperSlides */}
          {cardData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="border h-fit lg:min-h-[340px] p-8 flex flex-col"
            >
              <div className="bg-white flex-1">
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
                <p className="text-gray-700">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*<div className="m-4 mt-8 mb-4">*/}
        {/*  <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >*/}
        {/*    <article data-aos="flip-down">*/}
        {/*      <h2 className="text-xl font-bold text-center mb-4">It&apos;s Important</h2>*/}
        {/*      <p className="text-lg">*/}
        {/*        &quot;It&apos;s important to note that outsourcing paralegal support does not replace the need for qualified attorneys. Rather, it complements legal expertise by providing additional support and resources, enabling legal professionals to operate more efficiently and effectively.&quot;*/}
        {/*      </p>*/}

        {/*      <p className="mt-4 text-gray-400"></p>*/}
        {/*    </article>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
    </>
  );
}
