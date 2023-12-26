import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState

export default function LegalSearchCard({ data, animationDelay }) {
  const { title, desc, learnMore, image } = data;
  const [isHovered, setIsHovered] = useState(false); // Use state to track hover

  return (
    <div
      className="flex-1 relative h-80 w-full sm:max-w-xs lg:max-w-full overflow-hidden rounded-md shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
    >
      <div
        className={`absolute inset-0 ${isHovered && "scale-110"
          } transition duration-300 ease-in-out`}
      >
        <Image src={image} fill className="object-cover" alt={title} priority />
      </div>
      <div className="relative text-white h-full text-center flex flex-col justify-center md:justify-end py-2 legalOverlay px-2">
        <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <div
          className={`legalSearchCard ${isHovered ? "-bottom-0 opacity-100 h-full" : "-bottom-full opacity-0"
            } transition-all duration-300 ease-in-out flex flex-col gap-2 absolute left-0 text-start p-4  bg-homeCTA`}
        >        <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
            {title}
          </h3>
          <p className="text-white">{desc}</p>
          <Link
            href={learnMore}
            className="p-2 text-gray-300 max-w-fit rounded-md hover:opacity-80"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
