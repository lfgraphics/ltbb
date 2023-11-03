import LegalSearchSlider from "./ServicesSlider";
import { legalSearchData } from "@/constants/legalSearchData";

export default function LegalSolutions() {
  return (
    <section className="bg-homeBg py-10 md:py-20 md:min-h-[60vh] text-black">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center  px-[5%]">
        Legal Services{" "}
      </h2>
      <LegalSearchSlider data={legalSearchData} />
    </section>
  );
}
