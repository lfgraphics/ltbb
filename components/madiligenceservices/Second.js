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
				<section className="dark:bg-white dark:text-gray-100 bg-white">
					<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
						<div data-aos="fade-down">
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl dark:text-gray-50 ">Why Outsource M&A Diligence Services
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
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Evaluating potential risks and opportunities

										</h4>
										<p className="mt-2 dark:text-gray-400">M&A diligence services can help businesses thoroughly evaluate a potential acquisition target to identify any potential risks and opportunities associated with the deal. This can include assessing the target's financial health, legal compliance, and operational efficiency.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Identifying potential issues

											</h4>
											<p className="mt-2 dark:text-gray-400">M&A diligence services can also help businesses identify any potential issues that could impact the success of the deal. For example, an investigation into the target's financial records may reveal discrepancies or accounting irregularities.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Determining fair market value

											</h4>
											<p className="mt-2 dark:text-gray-400">M&A diligence services can help businesses determine the fair market value of an acquisition target. This can help businesses negotiate more favourable terms for the transaction.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Negotiating favourable terms


											</h4>
											<p className="mt-2 dark:text-gray-400">M&A diligence services can also provide businesses with valuable insights and information that can be used to negotiate more favourable terms for the transaction. For example, if a business knows that an acquisition target has significant liabilities, it may be able to negotiate a lower purchase price.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Due Diligence


											</h4>
											<p className="mt-2 dark:text-gray-400">M&A Due Diligence is a process of investigating a potential acquisition target to help the acquirer make informed decisions. This process can uncover potential issues, such as legal liabilities or operational inefficiencies, that may have a material impact on the target's value.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
								<img src="/madiligenceservices/pexels-edmond-dantès-4342493.webp" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
							</div>
						</div>
					</div>
				</section>

			</div>
		</React.Fragment>
	)
}

export default Second