import Image from "next/image";
import { useState } from "react"; // Import useState

export default function ProjectsCard({ data }) {
    const { id, title, image, desc } = data;
    const [isHovered, setIsHovered] = useState(false); // Use state to track hover

    return (
        <div
            className="flex-1 relative h-80 lg:h-96 min-w-full sm:min-w-[48%] sm:max-w-[48%] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="zoom-in"
            data-aos-delay={id * 150}
        >
            <div
                className={`absolute inset-0 ${isHovered && "scale-110"
                    } transition duration-300 ease-in-out`}
            >
                <Image src={image} fill className="object-cover" alt={title} priority />
            </div>
            <div className="relative text-white h-full text-center flex flex-col justify-end py-2 legalOverlay px-2">
                <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
                    {title}
                </h3>
                <div
                    className={`legalSearchCard ${isHovered ? "-bottom-0 opacity-100 h-full" : "-bottom-full opacity-0"
                        } transition-all duration-300 ease-in-out flex flex-col gap-2 absolute left-0 right-0 text-start p-4  bg-[#1C213D]`}
                >        <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
                        {title}
                    </h3>
                    <p className="text-white">{desc}</p>

                </div>
            </div>
        </div>
    );
}
