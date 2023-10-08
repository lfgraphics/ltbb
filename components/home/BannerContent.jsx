import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerContent({ content }) {
  const { title, content: bannerContent, link } = content;
  const variants = {
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
  return (
    <div className="flex flex-1 w-full flex-col gap-3 text-white">
      <motion.div
        key={title}
        variants={variants}
        animate={"show"}
        initial="hide"
        className="min-h-fit"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-gray-300 h-36 md:h-20 mt-4">{bannerContent}</p>
      </motion.div>
      <Link
        href={link}
        className="bg-homeCTA rounded-xl py-2 px-6 hover:opacity-90 max-w-fit"
      >
        Enquire Now
      </Link>
    </div>
  );
}
