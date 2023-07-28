"use client"
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative  sm:w-5/6 w-full md:w-5/6 lg:5/6  mx-auto bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div  className="flex flex-col justify-top px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-2 lg:py-1 xl:col-span-6" >
            <div className="mt-4 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Want&apos; Solution</p>
              </div>
              <p className="text-sm font-medium">Get in touch with us →</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Outsourced Family Law Services

            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Outsourced family law services refer to the practice of engaging external professionals or organizations to provide family law-related services on behalf of individuals or entities. Instead of hiring in-house legal staff, outsourcing to TLB allows law firms or attorneys to access specialized expertise and resources.
              <br>
              </br>

            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <br></br>
                <p className="mt-2 text-sm text-gray-500">


                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="/Family Law/pexels-kindel-media-7979431.jpg"
              alt=""
            />
          </div>
        </div>
      </div>




    </React.Fragment>
  )
}

export default Hero