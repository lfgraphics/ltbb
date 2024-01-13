"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import Image from 'next/image';


const data = [
  {
    id: 1,
    title: 'Conduct market research on your intended audience.'
  },
  {
    id: 2,
    title: 'Establish your digital marketing objectives'
  },
  {
    id: 3,
    title: 'Which marketing channels are most effective for lawyers?'
  },
  {
    id: 4,
    title: 'Design an SEO-friendly legal office website that turns visitors into clients.'
  },
  {
    id: 4,
    title: 'Evaluate the effectiveness of your digital marketing plan.'
  }
]

const Four = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
    });
  }, []);


  return (
    <>
      <div className='mx-auto  sm:w-5/6 w-full md:w-5/6 lg:5/6 max-w-5xl mb-12 overflow-hidden'>
        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="100">
            How we make Digital Marketing strategies for law firms
          </h2>
          <p className="dark:text-gray-400 max-w-4xl mx-auto" data-aos="fade-left" data-aos-delay="200">
            It may be difficult for attorneys to know where to begin with their digital marketing plan. There are several digital marketing methods to explore, including website optimization, social media marketing, search engine optimization (SEO), and paid digital advertisements. The most successful law firms focus their efforts on a few areas that make the most sense for their practice areas, company, and customers
          </p>
        </div>
        <div className="flex gap-5 justify-center flex-wrap py-8 px-2">
          {
            data?.map(({ id, title }, i) => {
              return (
                <div
                  data-aos={"zoom-in"}
                  data-aos-delay={(i + 1) * 100}
                  key={id} className="flex flex-1 flex-col items-center text-center gap-3 rounded-xl border-[1px] p-6 justify-center min-w-full sm:min-w-[200px] md:min-w-[300px] sm:max-w-[300px]">
                  <div className="w-12 h-12 font-bold text-lg rounded-full bg-[#DDE2FB] flex justify-center items-center text-[#4E6BFF]">{i + 1}</div>
                  <h3 className="text-xl">{title}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Four;
