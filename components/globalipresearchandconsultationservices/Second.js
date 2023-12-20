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
		<React.Fragment>
			<div className='bg-white    sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto'>
				<section className="dark:bg-white bg-white">
					<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
						<div data-aos="fade-down">
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl">
								TLB’s IP Research and Consultation Services
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
										<h4 className="text-lg font-medium leading-6">IP Analytics
										</h4>
										<p className="mt-2 dark:text-gray-400"> We aid and advise inventors and the research and development community in developing and crystallizing their ideas into patented innovations. We help our clients gain the most competitive advantage possible from the proper utilization and preservation of their intellectual assets. We assist our clients in determining market potential and business trends. </p>
									</div>
								</div>
								<div className="mt-12 space-y-12">
									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
										 data-aos="fade-right">
										<div className="flex-shrink-0">
											<div
												className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
													 stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														  d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">Prior Art Searches

											</h4>
											<p className="mt-2 dark:text-gray-400"> A broad, in-depth investigation of
												patentability, state-of-the-art, patent invalidation, infringement, and
												freedom to operate.
											</p>
										</div>
									</div>
									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
										 data-aos="fade-right">
										<div className="flex-shrink-0">
											<div
												className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
													 stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														  d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">Patent Watch

											</h4>
											<p className="mt-2 dark:text-gray-400">Periodic and thorough monitoring of
												competitor product launches for infringement.

											</p>
										</div>
									</div>
									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
										 data-aos="fade-right">
										<div className="flex-shrink-0">
											<div
												className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
													 stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														  d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">Patent Drafting, Illustrations
												& Translation

											</h4>
											<p className="mt-2 dark:text-gray-400">Our IP Consultation professionals
												prepare and convert standard designs to AUTOCAD in accordance with PTO
												requirements.

											</p>
										</div>
									</div>
									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md">
											<div className="flex-shrink-0" data-aos="fade-left">
												<div
													className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														 viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round"
															  strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4" data-aos="fade-left">
												<h4 className="text-lg font-medium leading-6">Patent Portfolio Analysis,
													Patent Licensing & Monetization
												</h4>
												<p className="mt-2 dark:text-gray-400">Our IP Consultation professionals
													use successful licensing that converts intellectual property assets
													to monetary value.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill"
								 data-aos="fade-left">
								<img src="/IP/pexels-timson-foox-2182863.jpg" alt=""
									 className="mx-auto rounded-lg shadow-lg object-fill"/>
							</div>
						</div>
						<div>
							<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
								<div className="lg:col-start-2">
									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
										 data-aos="fade-right">
										<div className="flex-shrink-0">
											<div
												className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
													 stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														  d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">Landscape Analysis
											</h4>
											<p className="mt-2 dark:text-gray-400">Our IP Consultation professionals can
												forecast trends and activities in any technological domain.

											</p>
										</div>
									</div>


									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md">
											<div className="flex-shrink-0" data-aos="fade-left">
												<div
													className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														 viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round"
															  strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4" data-aos="fade-left">
												<h4 className="text-lg font-medium leading-6">
													Open-Source License Compliance
												</h4>
												<p className="mt-2 dark:text-gray-400">Our IP Consultation professionals
													complete compliance with open-source licensing agreements.
												</p>
											</div>
										</div>
									</div>
									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md">
											<div className="flex-shrink-0" data-aos="fade-left">
												<div
													className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														 viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round"
															  strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4" data-aos="fade-left">
												<h4 className="text-lg font-medium leading-6">End-to-End docketing and
													administrative support

												</h4>
												<p className="mt-2 dark:text-gray-400">Our approved system and methods
													provide end-to-end docketing support in all IP-related
													administrative chores, including data administration, data
													verification, timetable tracking, and reminders.
												</p>
											</div>
										</div>
									</div>
									<div className="mt-12 space-y-12">
									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md"
										 data-aos="fade-right">
										<div className="flex-shrink-0">
											<div
												className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
													 stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														  d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">IP Consulting
											</h4>
											<p className="mt-2 dark:text-gray-400">Today's key difficulty for businesses
												is to analyze and identify their intellectual property portfolio, and
												then optimize its latent potential. Our Intellectual Property
												Consultants create plans for preserving and increasing revenue from
												patents, trademarks, and copyrights. We aim to integrate our clients' IP
												strategy with their companies by providing IP consultancy services. We
												attempt to find areas for significant improvement in the organization's
												business performance through adjustments or enhancements in IP
												procedures and the protection of current IP. We also assist our clients
												in developing worldwide portfolios that position the client firm well in
												the international market.

											</p>
										</div>
									</div>
									</div>
								</div>
								<div className="mx-auto rounded-lg shadow-lg object-filllg:col-start-1 lg:row-start-1"
									 data-aos="fade-right">
									<img src="/Case Intake/pexels-karolina-grabowska-5387261.jpg" alt=""
										 className="mx-auto rounded-lg shadow-lg object-fill"/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second