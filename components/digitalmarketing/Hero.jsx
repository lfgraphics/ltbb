import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative  w-full px-[5%] bg-white">
      <div className="mx-auto w-full flex flex-col lg:flex-row lg:gap-6 lg:items-center lg:px-8">
        <div className="flex-[2] py-10 flex flex-col gap-6 ">
          <h1 className=" text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Outsourced Digital Marketing Services
          </h1>
          <p className="mt text-lg text-gray-700">
            The Legal Base is a well-established digital marketing service
            provider staffed with highly skilled industry specialists. Our
            digital marketing team is dedicated to assisting legal organizations
            in achieving their objectives through bespoke plans and
            purpose-driven campaigns.
          </p>
          <Link
            href="#"
            type="button"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black max-w-fit"
          >
            Get In Touch
          </Link>
        </div>
        <div className="flex-1 relative">
        <Image
          src="/digital-marketing/digital-marketing-banner.webp"
          alt="Digital Marketing"
          width={400}
          height={400}
          priority
          className="relative w-full"
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
