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
								The contract lifecycle typically includes the following stages:
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
										<h4 className="text-lg font-medium leading-6">
											Contract Creation:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											This stage involves drafting, reviewing, and finalizing the contract terms and conditions.
											TLB CLM services can help standardize contract templates, facilitate collaboration
											between stakeholders, and ensure compliance with legal and regulatory requirements.

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
											<h4 className="text-lg font-medium leading-6">
												Contract Negotiation:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												During this stage, parties negotiate the terms of the contract, including pricing, delivery
												schedules, and other key provisions. TLB CLM services can provide workflow tools and
												automation to streamline the negotiation process, track changes, and enable real-time
												collaboration among stakeholders.
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
											<h4 className="text-lg font-medium leading-6">
												Contract Execution:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Once the contract is agreed upon, it needs to be signed and executed by all parties
												involved. TLB CLM services can facilitate electronic signatures, automate the execution
												process, and capture the necessary documentation to ensure legal validity.
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
											<h4 className="text-lg font-medium leading-6">
												Contract Monitoring and Compliance:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												After execution, TLB CLM services help monitor contract obligations, track key dates
												and milestones, and ensure compliance with the contract terms. They can provide alerts
												and notifications for upcoming renewals, deadlines, or any deviations from agreed-upon
												terms.

											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
								<img src="/Contract Management/pexels-sora-shimazaki-5668839.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
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
											<h4 className="text-lg font-medium leading-6">
												Contract Renewal or Terminatio
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB CLM services assist in managing contract renewals or terminations. They can
												automate the renewal process, track notice periods, facilitate renegotiation, or facilitate
												the termination process while ensuring compliance with contract requirements.
												<br></br>
												TLB CLM services leverage technology, such as contract management software, to
												centralize contract data, streamline workflows, and provide visibility into the contract
												lifecycle. These services aim to improve efficiency, reduce manual errors, enhance
												collaboration, and enable organizations to effectively manage and maximize the value
												of their contracts throughout their lifecycle.
												<br></br>

											</p>
										</div>
									</div>
								</div>
								{/* <div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
									<img src="/Contract Management/pexels-sora-shimazaki-5668839.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
								</div> */}
							</div>
						</div>
					</div>

				</section>



				<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
					<div className="container flex flex-col mx-auto lg:flex-row">
						<div
							className="w-full lg:w-1/3 rounded-lg object-fill"
							style={{
								backgroundImage: 'url("/Contract Management/pexels-yan-krukau-7793675.jpg")',
								backgroundPosition: "center center",
								backgroundSize: "cover"
							}}
						/>
						<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

							<h2 className="text-xl font-semibold leading-loose">
								<strong>TLB</strong> provides you with the best contract lifecycle management services by assisting you
								in achieving your objectives, including enforcing compliance, taking advantage of
								volume discounts, successfully managing commitments, decreasing contract risks and
								litigation risks, and shortening your time-to-contract.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second