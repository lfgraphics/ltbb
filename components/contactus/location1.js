import React from 'react'
import Country from './assets/country'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const location1 = () => {

  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  return (
    <React.Fragment>
   
  {/* component */}
  <div className="flex flex-col justify-center shadow-lg hover:shadow-xl border-solid " data-aos="fade-right ">
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src={Country[0].img}
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">

        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
          {Country[0].name}
        </h3>
        <p className="md:text-lg text-gray-700 font-bold text-base">
         {Country[0].address}
        </p>
        <p className="text-xl font-black text-gray-800">
         {Country[0].phone}

        </p>
        <p className="text-xl font-black text-gray-800">
         {Country[0].email}

        </p>
      </div>
    </div>
  </div>


    </React.Fragment>
  )
}

export default location1