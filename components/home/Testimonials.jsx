import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  return (
    <section className="bg-homeBg  py-10 md:py-20 md:min-h-[50vh] px-[5%]">
      <div className="text-black">
        <h2 className="text-2xl md:text-3xl font-extrabold ">Testimonials</h2>
        <p className="">What our clients says </p>
      </div>
      <TestimonialSlider />
    </section>
  );
}
