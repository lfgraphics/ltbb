import LegalSearchSlider from "./LegalSearchSlider";

export default function LegalSolutions() {
  return (
    <section className="bg-homeBg homeClipPath py-10 md:py-20 md:min-h-[60vh] px-[5%]">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white">
        Legal solutions{" "}
      </h2>
      <LegalSearchSlider />
    </section>
  );
}
