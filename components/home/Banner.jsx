"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import BannerContent from "./BannerContent";
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
    <section className="relative mt-8 h-[70vh] lg:h-[85vh] w-[90%] mx-auto  ">
      <video className="w-full object-cover rounded-xl h-full " autoPlay muted loop>
        <source
          src="https://thelegalbase.com/wp-content/uploads/2022/07/My-Movie_Website.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-[5%] rounded-xl">
        <div className="px-[5%]">
          <div className="flex-1 max-w-2xl" ref={setRefs}>
            <BannerContent content={bannerHeading[bannerIndex]} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-3 absolute bottom-8">
        {Array(3)
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
  );
}
