"use client"
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Second = () => {
    useEffect(() => {
        AOS.init({
            offset: 300, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000,
        });
    });
    return (
        <>
            <div className='bg-white sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto overflow-hidden'>
                <div className='my-12 text-start'>
                    <h2 className="text-lg font-semibold tracking-wide sm:text-5xl" data-aos="fade-right" data-aos-delay="100">Accelerate your firm's digital transformation with TLB’s <span className='text-[#4E6BFF]'> Legal IT Services</span></h2>
                    <p className='mt-4 max-w-5xl text-lg' data-aos="fade-left">Use TLB’s IT services to update your law firm's operations, resulting in drastically improved simplicity, security, and performance—and get the freedom to operate.</p>
                </div>
                <section className="">
                    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        <div data-aos="fade-down">
                            <h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl">
                                Why does your legal business require Outsourced Legal IT Services?
                            </h2>
                        </div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div>

                                <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">

                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6">Ensuring Security
                                        </h4>
                                        <p className="mt-2 dark:text-gray-400">Because legal records are so sensitive, keeping them safe is critical. Fortunately, contemporary electronic data management makes it easier to safeguard critical records than old paper files. Aside from papers governed by the government or other legal entities, a law firm can choose the level of protection necessary for a certain file. These specifications are easily customizable in the data management system.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-12 space-y-12">
                                    <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6">Contract Automation
                                            </h4>
                                            <p className="mt-2 dark:text-gray-400">Most of the legal activity takes place outside of the courtroom, where contracts are formed or renewed after a set length of time. Unfortunately, even in the digital age, many legal firms continue to do this procedure manually, squandering significant time and money. Furthermore, a competent law office handles a variety of legal disputes involving business law, family law, criminal law, and other areas. This categorization, together with the time-consuming contract renewal, can further complicate matters for a small business with limited resources.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6">Accurate Data Capture
                                            </h4>
                                            <p className="mt-2 dark:text-gray-400">The next apparent difficulty for law firms that goes hand in hand with automation is accurate data capture. It is critical to precisely collect and keep all facts during various stages of the legal process, such as client intake, eDiscovery, and court filings, so that they may be utilized or referenced later. Even a single case entails a large amount of documentation, and physically gathering this information and entering it into a database may be time-consuming for even the most skilled attorneys.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="mx-auto rounded-lg h-full object-fill relative grid items-center" data-aos="fade-left">
                                <img src="/bespoke-it-services/outsourced-bespoke.webp" alt="Be Spoke" className="mx-auto rounded-lg object-fill h-[90%] " />
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div className="lg:col-start-2">
                                    <div className="mt-12 space-y-12">
                                        <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6">Transparency
                                                </h4>
                                                <p className="mt-2 dark:text-gray-400">Quality customer service is one of the most important components in the success of any organization, and the legal area is no different. When it comes to documentation, communication, and other monetary issues, clients want total openness from legal firms. This is especially true for ordinary, non-corporate clients, who make up the majority of most legal firms' consumer base. While most law firms already do this to some level, performing redaction in a digital format will be considerably easier. As a result, digitizing material with certain security obstacles can help to improve the client-attorney connection.</p>
                                            </div>
                                        </div>
                                        <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6">Legal Document Management Cost
                                                </h4>
                                                <p className="mt-2 dark:text-gray-400">The expensive expenses of handling physical paper files and court papers are one of the key reasons for the push for digitalization. It may cost a legal company an arm and a leg to find storage space and arrange these mountains of information, let alone use couriers to get the papers when needed. Furthermore, tangible copies might be lost or destroyed during natural or man-made disasters. Finally, keeping track of the paper files and determining which ones should be kept and which should be eliminated is a work in and of itself.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto rounded-lg shadow-lg object-filllg:col-start-1 lg:row-start-1" data-aos="fade-right">
                                    <img src="/Case Intake/pexels-karolina-grabowska-5387261.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Second