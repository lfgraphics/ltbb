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

  const handleContentChange = (index) => {
    setBannerIndex(index + 1);
  };

  useEffect(() => {
    let intervalID;
    if (inView) {
      intervalID = setInterval(() => {
        setBannerIndex((prev) => (prev === 3 ? 1 : prev + 1));
      }, 4000);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [inView, bannerIndex]);

  return (
    <div className="lg:min-h-[85vh] md:min-h-[60vh] sm:min-h-[75vh] py-10 flex flex-col xl:min-h-fit justify-center gap-20 bg-homeBg homeClipPath px-[5%]">
      <div className="flex flex-col-reverse sm:flex-row gap-12 items-center h-full md:pt-10">
        <div className="flex-1" ref={setRefs}>
          <BannerContent content={bannerHeading[bannerIndex]} />
        </div>
        <BannerVideo />
      </div>
      <div className="flex mb-0 md:mb-8 justify-center gap-3 mt-10 lg:mt-0">
        {Array(3)
          .fill(1)
          .map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => handleContentChange(i)}
                className={`md:w-3 md:h-3 md:rounded-full w-2 h-2 rounded-lg ${
                  i === bannerIndex - 1 ? "bg-homeCTA" : "bg-gray-300"
                }`}
              ></button>
            );
          })}
      </div>
    </div>
  );
}
