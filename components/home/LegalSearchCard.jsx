import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState

export default function LegalSearchCard({ data }) {
  const { title, desc, learnMore } = data;
  const [isHovered, setIsHovered] = useState(false); // Use state to track hover

  return (
    <div
      className="flex-1 relative h-80 w-full sm:max-w-xs lg:max-w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src="/legal-solutions.png"
          fill
          className=" object-cover"
          alt={title}
        />
      </div>
      <div className="relative text-white h-full text-center flex flex-col justify-end py-2 legalOverlay px-2">
        <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <div
          className={`legalSearchCard ${
            isHovered ? "-bottom-0 opacity-100" : "-bottom-full opacity-0"
          } transition-all duration-300 ease-in-out flex flex-col gap-2 absolute left-0 text-start p-2 bg-[#0009]`}
        >
          <p className="text-gray-300">{desc}</p>
          <Link
            href={learnMore}
            className="p-2 bg-homeCTA max-w-fit rounded-md hover:opacity-80"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
