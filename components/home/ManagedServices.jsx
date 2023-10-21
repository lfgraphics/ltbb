import LegalServicesSlider from "./ServicesSlider";
import { ManagedServicesData } from "@/constants/managedServicesData";

export default function ManagedServices() {
    return (
        <section className="bg-homeBg py-10 md:py-20 md:min-h-[60vh] text-black">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center  px-[5%]">
                Managed Services{" "}
            </h2>
            <LegalServicesSlider data={ManagedServicesData} />
        </section>
    );
}
