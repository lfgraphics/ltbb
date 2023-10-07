"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function PhoneCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      loop={true}
      pagination={true}
      style={{
        boxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.75)",
        WebkitBoxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.75)",
        borderRadius: "25px",
        padding: "20px 0px",
      }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <SwiperSlide className="w-full" key={index}>
          <div className="px-4 py-2 lg:px-12 lg:py-6">
            <div className="image">
              <img
                src={`/digital-marketing/digital-marketing-${index + 1}.webp`}
                alt={`Slide ${index + 1}`}
                className="rounded w-full h-[160px] object-cover"
              />
            </div>
            <p className="text-xl lg:text-3xl mt-4 font-semibold">
              Targeted email marketing campaigns
            </p>
            <p className="text-lg mt-5 font-medium text-gray-500">
              At TLB we believe targeting emails to perspective leads can do
              wonders for a law firm. Through targeted emails, you can run
              personalized campaigns that will connect your leads or clients to
              your law firm. Targeted email marketing is something that’s
              rigorously practiced in all kinds of businesses to get desired
              clients to connect to the decision-makers of a business.
            </p>
            <p className="text-xl mt-8 font-semibold">
              What we offer in targeted email marketing campaigns
            </p>
            <ol className="list-disc px-2 list-inside">
              <li>Personalized email templates.</li>
              <li> Complete handling of email campaigns. </li>
              <li>
                Scheduling and rescheduling of emails as per the requirements.
              </li>
              <li>Follow-ups with the interested leads.</li>
            </ol>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PhoneCarousel;
