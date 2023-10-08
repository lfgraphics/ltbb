"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LegalSearchCard from "./LegalSearchCard";
import { legalSearchData } from "@/constants/legalSearchData";
export default function LegalSearchSlider() {
  return (
    <div className="flex justify-between gap-8 py-10 ">
      <Swiper
        spaceBetween={30}
        loop={true}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {legalSearchData?.map((item, i) => {
          return (
            <SwiperSlide key={item.id}>
              <LegalSearchCard data={item} animationDelay={i * 150} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
