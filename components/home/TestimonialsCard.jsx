"use client";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsCard({ data, animationDelay }) {
  const { review, name, designation, image, background } = data;
  const [showMore, setShowMore] = useState(false);

  const handleReview = () => {
    if (review.length > 40) {
      setShowMore(!showMore);
    }
  };
  return (
    <div
      className={`py-6 px-8 rounded-xl  flex flex-col justify-center md:flex-1 min-w-[45%] h-auto`}
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
      style={{ background: background }}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-[50%] bg-[#E6E4FF] relative overflow-hidden">
          <Image src={image} className="object-contain" fill />
        </div>
        <div className="flex-1">
          <h4 className="text-lg">{name}</h4>
          <h4
            className={`text-gray-500 text-base  ${showMore ? "line-clamp-none" : "line-clamp-1"
              }`}
          >
            {designation}
          </h4>
        </div>
      </div>
      <p
        className={`${showMore ? "line-clamp-none" : "line-clamp-2"
          } mt-3  transition-all duration-300`}
      >
        {review}
      </p>
      <span className="text-gray-400 cursor-pointer" onClick={handleReview}>
        {showMore ? "Show Less" : "Read More"}
      </span>
    </div>
  );
}
