"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination])


export default function ThreeDCard({ cardData, title, description }) {
    return (
        <>
            <div className="bg-transparent mx-auto w-5/6">

                <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
                    <h2 className="text-3xl font-bold">
                        {title}
                    </h2>
                    <p className="dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop
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
