"use client"
import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


import ContactForm from "./ContactForm";
import OurLocations from "./OurLocations";
import Banner from "./Banner";

const Form = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000,
    });
  });
  return (
    <>
      <Banner />
      <div className="bg-white w-full p-10 flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold text-gray-800  mt-5 p-4" data-aos="fade-right" data-aos-delay="100">
          OUR LOCATIONS
        </h1>
        <OurLocations />
      </div>
    </>
  );
};

export default Form;
