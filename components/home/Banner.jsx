"use client";
import { useEffect, useState } from "react";
import BannerContent from "./BannerContent";
import BannerVideo from "./BannerVideo";
import { bannerHeading } from "@/constants/bannerContentData";
export default function Banner() {
  const [bannerIndex, setBannerIndex] = useState(1);

  useEffect(() => {
    let intervalID = setTimeout(() => {
      setBannerIndex((prev) => {
        if (prev === 3) return 1;
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [bannerIndex]);

  const handleContentChange = (index) => {
    setBannerIndex(index + 1);
  };

  return (
    <div className="min-h-[85vh] sm:min-h-[75vh] py-10 flex flex-col justify-between bg-homeBg homeClipPath px-[5%]">
      <div className="flex flex-col-reverse sm:flex-row gap-12 items-center h-full md:pt-10">
        <BannerContent content={bannerHeading[bannerIndex]} />
        <BannerVideo />
      </div>
      <div className="flex md:mb-8 justify-center gap-3">
        {Array(3)
          .fill(1)
          .map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => handleContentChange(i)}
                className={`w-4 h-4 rounded-full ${
                  i === bannerIndex - 1 ? "bg-homeCTA" : "bg-gray-300"
                }`}
              ></button>
            );
          })}
      </div>
    </div>
  );
}
