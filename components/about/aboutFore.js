import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const aboutFore = () => {
  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  return (
<React.Fragment>
<section className="bg-white " data-aos="fade-up-right">
  <div className="max-w-6xl px-6 py-10 mx-auto">
    {/* <p className="text-xl font-medium text-blue-500 ">Testimonials</p>
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      What clients saying
    </h1> */}
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl" />
      <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <img
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
          src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="client photo"
        />
        <div className="mt-2 md:mx-6">
          <div>
            {/* <p className="text-xl font-medium tracking-tight text-white">
              Ema Watson
            </p> */}
            <p className="text-blue-200 "></p>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
         
            The Legal Base was born from a desire to be more than just another legal services provider. Our founders envisioned a company that would be a true partner to corporates, law firms, and attorneys around the globe - a trusted extension of their teams that would deliver legal services and process consulting with the highest level of professionalism. We strive to be a valued and integral part of our client's operations, always working alongside them to achieve their goals and objectives.
          </p>
          <div className="flex items-center justify-between mt-6 md:justify-start">
           
           
          </div>
        </div>
      </div>
    </main>
  </div>
</section>

</React.Fragment>
  )
}

export default aboutFore