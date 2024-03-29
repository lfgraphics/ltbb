"use client"
import React from 'react'
import SubscribeForm from '../UI/SubscribeForm'

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative  sm:w-5/6 w-full md:w-5/6 lg:5/6  mx-auto bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-2 lg:py-1 xl:col-span-6" >
            <div className="mt-4 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Want&apos; Solution</p>
              </div>
              <p className="text-sm font-medium">Get in touch with us →</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Outsourced Litigation Support Services

            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Litigation procedures can be confusing and difficult to understand. The procedures involved might take a lot of time, thus lawyers and legal firms frequently need help. At TLB our legal professionals in litigation are best suited to help in this situation.
              <br></br>
              <br></br>
              Our litigation support experts provide you with optimum solutions and ensure the highest accuracy levels in the assignments. The litigation support services can vary from assisting the attorneys, law firms, and general counsels in their day-to-day tasks like records retrieval process, e-discovery process, data processing, and data management or supporting them with technical assistance, marketing, or advertising.
              <br>
              </br>

            </p>
            <SubscribeForm />
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] object-cover h-62 w-124"
              src="/Litigation Support/pexels-colin-lloyd-3751006.jpg"
              alt=""
            />
          </div>
        </div>
      </div>




    </React.Fragment>
  )
}

export default Hero