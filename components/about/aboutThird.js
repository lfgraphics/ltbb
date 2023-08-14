import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const aboutThird = () => {
  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  return (
   <React.Fragment>
    <section className="bg-white dark:bg-gray-900" data-aos="fade-left">
  <div className="relative flex">
    <div className="min-h-screen lg:w-1/3" />
    <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block" />
    <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
      {/* <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        What our <span className="text-blue-500">customers</span> <br /> are
        saying
      </h1> */}
      <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
        <img
          className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div className="mt-8 lg:px-10 lg:mt-0">
          {/* <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
            Help us improve our productivity
          </h1> */}
          <p className="max-w-lg mt-6 text-black-600 dark:text-gray-400">
          At The Legal Base, we are driven by a relentless pursuit of excellence and the desire to constantly elevate the standard of legal service delivery. We are dedicated to delivering value and a competitive edge at every stage of the process, ensuring that our clients see superior long-term returns on their investment. Our focus is always on protecting our client's interests and delivering results that exceed their expectations. We believe that by going above and beyond, we can build lasting partnerships and help our clients achieve their goals.
          </p>
          {/* <h3 className="mt-6 text-lg font-medium text-blue-500">
            Ronik Ederson
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Marketing Manager at Stech
          </p> */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-12 lg:justify-start">
      
     
      </div>
    </div>
  </div>
</section>

   </React.Fragment>
  )
}

export default aboutThird