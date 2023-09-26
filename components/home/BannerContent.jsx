import React from "react";
import Link from "next/link";

export default function BannerContent() {
  return (
    <div className="flex flex-1 w-full flex-col gap-3 text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        LEADING GLOBAL LPO
      </h1>
      <p className="opacity-80">
        The Legal Base LPO is a global outsourcing partner which works closely
        with law firms , attorneys and legal departments of corporations to
        deliver complex and innovative legal solutions.
      </p>
      <Link href="#" className="bg-homeCTA rounded-xl py-2 px-6 hover:opacity-90 max-w-fit">
        Enquire Now
      </Link>
    </div>
  );
}
