"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import BannerContent from "./BannerContent";
import { bannerHeading } from "@/constants/bannerContentData";
import BannerVideo from "./BannerVideo";
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
        setBannerIndex((prev) => (prev === 4 ? 1 : prev + 1));
      }, 4000);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [inView, bannerIndex]);

  return (
    <section className="bg-white py-8">
      <section className="relative h-[75vh] lg:h-[85vh] w-[90%] mx-auto">
        <BannerVideo />
        <div className="absolute  inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-[5%] rounded-xl">
          <div className="relative">
            <div className="max-w-2xl h-full" ref={setRefs}>
              <BannerContent content={bannerHeading[bannerIndex]} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-3 absolute bottom-8">
          {Array(4)
            .fill(1)
            .map((_, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleContentChange(i)}
                  className={`md:w-3 md:h-3 md:rounded-full w-2 h-2 rounded-lg ${i === bannerIndex - 1 ? "bg-homeCTA" : "bg-gray-300"
                    }`}
                ></button>
              );
            })}
        </div>
      </section>
    </section>
  );
}
