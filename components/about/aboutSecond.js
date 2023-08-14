import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const aboutSecond = () => {
  useEffect(() => {
		AOS.init({
			offset: 300, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000,
		});
	});
  return (
  <React.Fragment>
    <section className="bg-white " data-aos="fade-right">
  <div className="max-w-6xl px-6 py-10 mx-auto">
    {/* <p className="text-xl font-medium text-blue-500 ">Testimonials</p>
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      What clients saying
    </h1> */}
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-blue-600 -z-10 md:h-full rounded-2xl" />
      <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <img
          className="h-32 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
          src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="client photo"
        />
        <div className="mt-2 md:mx-6">
          <div>
            <p className="text-xl font-medium tracking-tight text-white">
             
            </p>
            <p className="text-blue-200 ">
</p>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
          
            At TLB, we believe in delivering value and competitive advantage at every stage of the legal service process, ensuring superior long-term returns for our clients. We pride ourselves on being a trusted and long-standing partner to our clients, offering customized and bespoke solutions that help deliver tangible cost savings. Our team of legal industry experts, attorneys, and MDs have over 20 years of experience in various legal areas and are supported by law graduates from reputable universities, medico-legal experts, quality control experts, and IT solution delivery and support experts.
<br/>
            We understand the importance of personalisation and that's why we have a dedicated client relationship team that acts as a single point of contact for all our clients and caters to their unique requirements. Trust us to be your go-to legal solutions provider.
          </p>
          <div className="flex items-center justify-between mt-6 md:justify-start">
            {/* <button
              title="left arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button> */}
            {/* <button
              title="right arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </main>
  </div>
</section>

  </React.Fragment>
  )
}

export default aboutSecond