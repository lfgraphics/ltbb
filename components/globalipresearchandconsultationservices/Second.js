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
								Why outsource IP Research and Consultation services to TLB?
							</h2>
							{/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Here are some common paralegal services which are typically outsourced to TLB.</p> */}
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
										<h4 className="text-lg font-medium leading-6">Highly efficient experts:
										</h4>
										<p className="mt-2 dark:text-gray-400">Our IP Consultation professionals contribute extensive subject and industry knowledge to each engagement, as well as access to TLB's substantial intellectual capital. Our innovative approach to technology-powered legal solutions, along with a broad range of service options, puts us ahead of the competition.</p>
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
											<h4 className="text-lg font-medium leading-6">Reliable

											</h4>
											<p className="mt-2 dark:text-gray-400">When it comes to picking a relationship, trust is crucial. We realize this and make every effort to deliver on our promises to you. Our IP Consultation professionals understand your need for confidentiality and ensure the greatest degree of confidentiality.

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
											<h4 className="text-lg font-medium leading-6">Globally optimized solutions

											</h4>
											<p className="mt-2 dark:text-gray-400">Our professionals have extensive R&D experience, advanced scientific and engineering degrees, and a track record of producing cross-domain solutions. Our advanced educational credentials enable us to deliver vital technological research, paralegal services, and tools to IP law firms in order for them to present their clients with a globally optimal solution.

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
											<h4 className="text-lg font-medium leading-6">Creative

											</h4>
											<p className="mt-2 dark:text-gray-400">We combine the art of search with tried-and-true approaches like TRIZ to identify the most innovative and optimal solutions for your needs and budget. Our IP Consultation professionals ensure that your legal company receives the finest service available.

											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
								<img src="/IP/pexels-timson-foox-2182863.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
							</div>
						</div>
						<div>
							<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
								<div className="lg:col-start-2">

									<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-right">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">Appointment Scheduling:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist in scheduling initial consultations or appointments between potential clients and
												attorneys. TLB can manage calendars, coordinate availability, and communicate with both
												parties to ensure smooth scheduling.
											</p>
										</div>
									</div>



									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" >
											<div className="flex-shrink-0" data-aos="fade-left">
												<div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4" data-aos="fade-left">
												<h4 className="text-lg font-medium leading-6">Customer focused services
												</h4>
												<p className="mt-2 dark:text-gray-400">We collaborate with you as an extension of your team, and each solution is tailored to the specific demands of the customer. We will not stop till you have found what you are looking for. Our committed support team is always on the lookout for the best potential solutions to your service-related issues.

												</p>
											</div>
										</div>
										{/*<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-left">*/}
										{/*	<div className="flex-shrink-0">*/}
										{/*		<div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">*/}
										{/*			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">*/}
										{/*				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>*/}
										{/*			</svg>*/}
										{/*		</div>*/}
										{/*	</div>*/}
										{/*	<div className="ml-4">*/}
										{/*		<h4 className="text-lg font-medium leading-6">Data Management and Reporting:*/}
										{/*		</h4>*/}
										{/*		<p className="mt-2 dark:text-gray-400">TLB can employ case management software or databases to capture and organize the intake*/}
										{/*			data. TLB can generate reports and provide analytics related to case intake volume, case types,*/}
										{/*			conversion rates, or other relevant metrics to help law firms assess their performance and make*/}
										{/*			data-driven decisions.*/}
										{/*		</p>*/}
										{/*	</div>*/}
										{/*</div>*/}
										{/* <div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-left"> */}
										{/* <div className="flex-shrink-0">
												<div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div> */}
										{/*
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6">Immigration Support: </h4>
												<p className="mt-2 dark:text-gray-400">TLB Paralegals can provide support in immigration matters, including completing immigration forms, gathering supporting documentation, and assisting with visa applications or petitions.
												</p>
											</div>
											*/}
										{/* </div> */}
									</div>
								</div>
								<div className="mx-auto rounded-lg shadow-lg object-filllg:col-start-1 lg:row-start-1" data-aos="fade-right">
									<img src="/Case Intake/pexels-karolina-grabowska-5387261.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
								</div>
							</div>
						</div>
					</div>
				</section>



				{/*<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">*/}
				{/*	<div className="container flex flex-col mx-auto lg:flex-row">*/}
				{/*		<div*/}
				{/*			className="w-full lg:w-1/3 rounded-lg object-fill"*/}
				{/*			style={{*/}
				{/*				backgroundImage: 'url("/Case Intake/pexels-mikhail-nilov-7731326.jpg")',*/}
				{/*				backgroundPosition: "center center",*/}
				{/*				backgroundSize: "cover",*/}
				{/*				// height: '640px',*/}
				{/*				// width: '480px'*/}
				{/*			}}*/}
				{/*		/>*/}
				{/*		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">*/}

				{/*			<h2 className="text-xl font-semibold leading-loose">*/}
				{/*				Outsourcing case intake services can bring several benefits, including increased efficiency in*/}
				{/*				handling inquiries, improved client experience during the initial contact phase, streamlined data*/}
				{/*				management, and the ability to focus on core legal work. It allows law firms to ensure proper*/}
				{/*				evaluation and prioritization of potential cases while optimizing their resources.*/}
				{/*			</h2>*/}



				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
			</div>
		</React.Fragment>
	)
}

export default Second