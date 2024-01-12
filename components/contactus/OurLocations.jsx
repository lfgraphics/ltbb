"use client"
import React from 'react'
import { MoveLeft, MoveRight } from 'lucide-react';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import LocationImageBlock from './LocationImageBlock'
import LocationInfo from './LocationInfo'
import Country from "./assets/country.json"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

export default function OurLocations() {

    return (
        <div className='relative'>
            <Swiper
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{ nextEl: ".arrow-right-1", prevEl: ".arrow-left-1" }}
                autoHeight={true}
            >
                {Country?.map(({ id, img, name, email, phone, address }, i) => (
                    <SwiperSlide key={id}>
                        <div className='flex flex-col md:flex-row gap-6' data-aos="zoom-in" data-aos-delay={i + 1 * 200}>
                            <LocationImageBlock imgURL={img} country={name} />
                            <LocationInfo address={address} email={email} phone={phone} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="arrow-left-1 z-10  absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[150px] md:top-[40%] translate-y-1/2  -left-6">
                <MoveLeft />
            </button>
            <button className="arrow-right-1 z-10   absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[150px] md:top-[40%] translate-y-1/2 -right-6">
                <MoveRight />
            </button>
        </div>
    )
}
