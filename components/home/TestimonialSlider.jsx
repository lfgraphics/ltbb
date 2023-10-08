import { MoveLeft, MoveRight } from "lucide-react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialsCard from "./TestimonialsCard";
import { homeTestimonialsData } from "@/constants/homeTestimonialsData";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function TestimonialSlider() {
  return (
    <div className="relative mt-8 px-[5%]">
      <div className="relative w-full sm:w-[90%] lg:w-[95%] mx-auto">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            600: { slidesPerView: 1 },
           700: { slidesPerView: 2 },
           1024: { slidesPerView: 3 },
          }}
          watchSlidesVisibility={true}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          autoHeight={true}
          loop
        >
          {homeTestimonialsData?.map((item, i) => {
            return (
              <SwiperSlide key={item.id}>
                <TestimonialsCard data={item} animationDelay={i * 150} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <button className="arrow-left hidden sm:block absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[40%] translate-y-1/2  left-4">
        <MoveLeft />
      </button>
      <button className="arrow-right hidden sm:block absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[40%] translate-y-1/2 right-4">
        <MoveRight />
      </button>

      <div className="flex justify-center gap-6 sm:hidden mt-6">
        <button className="arrow-left bg-[#4E6BFF] rounded-full p-2 text-white">
          <MoveLeft />
        </button>
        <button className="arrow-right  bg-[#4E6BFF] rounded-full p-2 text-white">
          <MoveRight />
        </button>
      </div>
    </div>
  );
}
