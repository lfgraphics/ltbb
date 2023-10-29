import TestimonialsCard from "./TestimonialsCard";
import { homeTestimonialsData } from "@/constants/homeTestimonialsData";


export default function TestimonialSlider() {
  return (
    <div className="relative mt-8 px-[5%]">
      <div className="relative w-full sm:w-[90%] lg:w-[95%] mx-auto flex gap-6 flex-wrap">
        {homeTestimonialsData?.map((item, i) => {
          return (
            <TestimonialsCard key={item.id} data={item} animationDelay={i * 150} />
          );
        })}
      </div>
    </div>
  );
}