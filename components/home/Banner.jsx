"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BannerContent from "./BannerContent";
import BannerVideo from "./BannerVideo";
import { homeBannerData } from "@/constants/homeBannerData";

export const variants = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  hide: {
    opacity: 0,
  },
};

export default function Banner() {
  const [bannerActive, setBannerActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerActive((prev) =>
        prev >= homeBannerData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-homeBg homeClipPath flex flex-col justify-between relative min-h-fit gap-12 lg:gap-16 pt-20 px-[5%]">
      <div className="justify-center relative flex items-center">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-12 items-center h-full">
          <AnimatePresence wait>
            <motion.div
              key={bannerActive}
              variants={variants}
              animate="show"
              initial="hide"
              // exit="hide"
              className="flex-1"
            >
              <BannerContent data={homeBannerData[bannerActive]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex-1 w-full h-full max-h-80">
            <BannerVideo />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center mb-[10%]">
        {homeBannerData?.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setBannerActive(index)}
            className={`w-4 h-4 rounded-full ${
              index === bannerActive ? "bg-homeCTA" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

