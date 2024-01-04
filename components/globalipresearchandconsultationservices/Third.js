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
    title: "Highly efficient experts",
    description: "Our IP Consultation professionals contribute extensive subject and industry knowledge to each engagement, as well as access to TLB's substantial intellectual capital. Our innovative approach to technology-powered legal solutions, along with a broad range of service options, puts us ahead of the competition."
  },
  {
    title: "Reliable",
    description: "When it comes to picking a relationship, trust is crucial. We realize this and make every effort to deliver on our promises to you. Our IP Consultation professionals understand your need for confidentiality and ensure the greatest degree of confidentiality."
  },
  {
    title: "Globally optimized solutions",
    description: "Our professionals have extensive R&D experience, advanced scientific and engineering degrees, and a track record of producing cross-domain solutions. Our advanced educational credentials enable us to deliver vital technological research, paralegal services, and tools to IP law firms in order for them to present their clients with a globally optimal solution."
  },
  {
    title: "Creative",
    description: "We combine the art of search with tried-and-true approaches like TRIZ to identify the most innovative and optimal solutions for your needs and budget. Our IP Consultation professionals ensure that your legal company receives the finest service available."
  },
  {
    title: "Customer focused services",
    description: "We collaborate with you as an extension of your team, and each solution is tailored to the specific demands of the customer. We will not stop till you have found what you are looking for. Our committed support team is always on the lookout for the best potential solutions to your service-related issues.\n"
  },
];


export default function Third() {
  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">
        <div className="container mx-auto p-6 my-6 space-y-2  mt-4 bg-w mb-4 bg-[#1E293B] text-white rounded-2xl">
          <h2 className="text-3xl font-bold">
            Why Outsource IP Research and Consultation Services?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing your <strong>IP Research and Consultation Service </strong> requirements can do wonders for your
            firm. Today it's a proven fact that firms that have outsourced their legal requirements to reliable partners
            have witnessed fruitful results and the potential to take in more client projects has only increased over
            the years.
          </p>
          <br />
          <p> If you are wondering whether to outsource your IP Research and Consultation service requirements to TLB or not, you must consider the following benefits that you will get upon outsourcing.</p>
          <ul className="list-disc  ml-4">
            <li>Achieve compelling cost reductions and faster turnaround times,</li>
            <li>Free up scarce in-house resources</li>
            <li>Focus on more strategic and higher-value activities,</li>
            <li>Refocus the company's energies on its core business activities.</li>
          </ul>
        </div>

        <div className="container mx-auto p-4 my-6 space-y-2  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold text-center">
            Why outsource IP Research and Consultation services to TLB?
          </h2>
          <p className="dark:text-gray-400 text-center">
            TLB is a renowned intellectual property and technology consulting firm. We provide our clients with a 'One-Stop' solution for all of their IP needs, providing vital support at each stage of the patent lifecycle, from producing and protecting IP to commercializing IP.
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
      </div>
    </>
  );
}
