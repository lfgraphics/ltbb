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
              Global Immigration Management Services

            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Global Immigration Management Services refers to the comprehensive range of services provided by specialized companies or organizations to assist individuals, families, and businesses with their immigration and mobility needs on a global scale. These services encompass various aspects of the immigration process, including legal, administrative, and logistical support.
              <br>
              </br>
              With the rise in immigrating individuals around the world, the need to have exceptional immigration consultants is vital, however, it is an extremely hectic and time-consuming process for attorneys and consultants to always keep themselves updated with the current immigration laws. Outsourcing immigration requirements to TLB eases out the hectic task of your attorneys saving them plenty of time.

              <br>
              </br>

            </p>
            <SubscribeForm />
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] object-cover h-62 w-124"
              src="/Immigration/pexels-nataliya-vaitkevich-8830665.jpg"
              alt=""
            />
          </div>
        </div>
      </div>




    </React.Fragment>
  )
}

export default Hero