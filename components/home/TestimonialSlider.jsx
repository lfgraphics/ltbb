"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialsCard from "./TestimonialsCard";
import { homeTestimonialsData } from "@/constants/homeTestimonialsData";
export default function TestimonialSlider() {
  return (
    <div className="flex justify-between gap-8 py-10 testimonials">
      <Swiper
        spaceBetween={30}
        loop={true}
        breakpoints={{
          600: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {homeTestimonialsData?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <TestimonialsCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
