"use client"
import React from 'react'
import SubscribeForm from '../UI/SubscribeForm'

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative  sm:w-5/6 w-full md:w-5/6 lg:5/6  mx-auto bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-top px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-2 lg:py-1 xl:col-span-6" >
            <div className="mt-4 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Want&apos; Solution</p>
              </div>
              <p className="text-sm font-medium">Get in touch with us →</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Outsourced Paralegal Services

            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Outsourced paralegal services involve contracting with a third-party provider like TLB to handle various legal support tasks and responsibilities typically performed by in-house paralegals. TLB is a specialized firm that employ paralegals with expertise in different areas of law.
              <br>
              </br>


            </p>
            <SubscribeForm />
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] object-cover h-62 w-124"
              src="/Paralegal Services/pexels-sora-shimazaki-5668802.jpg"
              alt=""
            />
          </div>
        </div>
      </div>




    </React.Fragment>
  )
}

export default Hero