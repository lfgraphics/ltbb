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

const cardData = [
  {
    title: "Amped-up Accuracy",
    description: "At TLB, we take a data-driven approach to potential deals and negotiations, thereby giving you the upper hand in making successful Mergers & Acquisitions. Our team of experts analyses financial data, industry trends, and other relevant information to help you make informed decisions."
  },
  {
    title: "Zero Tribunal",
    description: "We take great pride in our track record of having a high success rate and a growing track record of protecting our clients from tribunals and litigation. Our team is well-versed in legal and regulatory compliance, and we work tirelessly to ensure that our clients are protected from any potential legal issues."
  },
  {
    title: "360-degree Support",
    description: "No matter the magnitude of the risk associated with the deal, our team is capable of coming up with a strategy or a slight adjustment to make it work. We provide end-to-end support from the initial consultation to post-closing, ensuring that you have all the support you need to make your M&A transaction a success."
  },
  {
    title: "Proven Experience",
    description: "Our team has decades of combined experience in the M&A field, having successfully completed numerous M&A transactions. We bring that experience to every engagement, providing our clients with a deep understanding of the M&A process and best practices."
  },
  {
    title: "Cost-effective Solutions",
    description: "We understand the importance of keeping costs low during the M&A process. We work with our clients to understand their budget constraints and provide cost-effective solutions that deliver value without breaking the bank."
  },
  {
    title: "Transparent Communication",
    description: "We believe in transparent communication throughout the M&A process. Our team will keep you informed every step of the way, providing regular updates on our progress and answering any questions you may have."
  }
];

export default function Third() {

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6 mt-14">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why outsource M&A Diligence Services to TLB
          </h2>
          <p className="dark:text-gray-400">
            Our team of experienced professionals has the expertise and knowledge necessary to conduct a thorough and comprehensive M&A due diligence investigation. We work closely with our clients to understand their specific needs and tailor our services accordingly. Contact us today to learn more about how we can help you make informed decisions about your next M&A transaction.
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

      </div>
    </>
  );
}
