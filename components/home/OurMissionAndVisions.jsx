import Image from "next/image";
import OurMissionsAndVisionsCard from "./OurMissionsAndVisionsCard";

export default function OurMissionAndVisions() {
  return (
    <section className="flex flex-col sm:flex-row gap-3 bg-white pb-10 px-[5%] ">
      <div className="flex-1 relative min-h-[250px]">
        <Image src="/ourMissionAndVision.webp" className="object-cover" fill alt="Our Mission and Vision" />
      </div>
      <div className="flex-1 flex flex-col text-black gap-3 sm:gap-28">
        <OurMissionsAndVisionsCard
          title="Our Vision"
          desc="The Legal Base was founded with a vision to establish itself as a
          “trusted partner” for corporates, law firms, and attorneys worldwide
          whilst professionally delivering legal services, process consulting to
          them, and operating as a seamless extension of their teams."
          animationType="fade-right"
          textAlign="text-start"
        />
        <OurMissionsAndVisionsCard
          title="Our Mission"
          desc="The Legal Base strives to build and deliver value add along with
          competitive advantage at each stage of the legal service delivery
          process in order to generate superior long-term returns, while
          continuously focusing on protecting our client’s interests."
          animationType="fade-left"
          textAlign="text-end"
        />
      </div>
    </section>
  );
}
