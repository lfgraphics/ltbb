import OurMissionsAndVisionsCard from "./OurMissionsAndVisionsCard";

export default function OurMissionAndVisions() {
  return (
    <div className="flex flex-col md:flex-row mb-10 justify-between items-start px-[5%] text-black gap-3 md:gap-6">
      <OurMissionsAndVisionsCard
        title="Our Vision"
        desc="The Legal Base was founded with a vision to establish itself as a
          “trusted partner” for corporates, law firms, and attorneys worldwide
          whilst professionally delivering legal services, process consulting to
          them, and operating as a seamless extension of their teams."
        animationType="fade-right"
      />
      <OurMissionsAndVisionsCard
        title="Our Mission"
        desc="The Legal Base strives to build and deliver value add along with
          competitive advantage at each stage of the legal service delivery
          process in order to generate superior long-term returns, while
          continuously focusing on protecting our client’s interests."
        animationType="fade-left"
      />
    </div>
  );
}
