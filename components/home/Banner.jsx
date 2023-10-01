"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import BannerContent from "./BannerContent";
import BannerVideo from "./BannerVideo";
import { bannerHeading } from "@/constants/bannerContentData";
export default function Banner() {
  const [bannerIndex, setBannerIndex] = useState(1);
  const bannerRef = useRef();
  const { ref: inViewRef, inView } = useInView();

  const setRefs = useCallback(
    (node) => {
      bannerRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  useEffect(() => {
    let intervalID;
    if (inView) {
      intervalID = setInterval(() => {
        setBannerIndex((prev) => (prev === 3 ? 1 : prev + 1));
      }, 2000);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [inView, bannerIndex]);

  const handleContentChange = (index) => {
    setBannerIndex(index + 1);
  };

  return (
    <div className="min-h-[85vh] sm:min-h-[75vh] py-10 flex flex-col justify-between bg-homeBg homeClipPath px-[5%]">
      <div className="flex flex-col-reverse sm:flex-row gap-12 items-center h-full md:pt-10">
        <div className="flex-1" ref={setRefs}>
          <BannerContent content={bannerHeading[bannerIndex]} />
        </div>
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
