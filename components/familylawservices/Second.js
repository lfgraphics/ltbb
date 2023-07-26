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
								Key aspects of family law services typically outsourced to TLB
							</h2>
							{/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Here are some common paralegal services which are typically outsourced to TLB.</p> */}
						</div>
						<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
							<div>

								<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">

									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leading-6">
											Legal Representation:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											Outsourcing family law services to TLB will help hiring external law firms or attorneys to provide legal representation in family law matters. TLB’s family law experts handle cases related to divorce, child custody, spousal support, adoption, and other family-related legal issues.
										</p>
									</div>
								</div>
								<div className="mt-12 space-y-12">
									<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-[100] rounded-md dark:bg-violet-400 dark:text-gray-900">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">
												Legal Consultation and Advice:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Individuals or businesses can outsource family law services to obtain legal consultation and advice on various family law matters. TLB’s legal professionals can offer guidance, explain legal rights and obligations, and help clients understand the legal implications of their decisions.
											</p>
										</div>
									</div>
									<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">
												Mediation and Alternative Dispute Resolution:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourced family law services to TLB may include engaging external professionals who specialize in mediation and alternative dispute resolution. TLB’s experts facilitate negotiations and help parties reach mutually acceptable resolutions without going to court.
											</p>
										</div>
									</div>
									<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">
												Document Preparation and Review:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB family law experts can assist with drafting, reviewing, and finalizing legal documents related to family law matters. This may include agreements, contracts, parenting plans, settlement offers, and other legal paperwork.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mt-10 lg:mt-0 " data-aos="fade-left">
								<img src="/Case Intake/pexels-mikhail-nilov-7735702.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
							</div>
						</div>
						<div>
							<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
								<div className="lg:col-start-2">

									<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-medium leading-6">
												Legal Research:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourcing family law services to TLB can involve engaging external researchers to conduct legal research on specific family law issues. This helps clients and their legal teams gather relevant information, understand precedents, and support their legal arguments.
											</p>
										</div>
									</div>



									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" >
											<div className="flex-shrink-0" data-aos="fade-left">
												<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4" data-aos="fade-left">
												<h4 className="text-lg font-medium leading-6">
													Case Management and Administration:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													TLB can offer case management and administrative support for family law matters by assisting in organizing case files, maintaining documentation, managing deadlines, and ensuring compliance with legal procedures.
												</p>
											</div>
										</div>
										<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left">
											<div className="flex-shrink-0">
												<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6">
													Cost Efficiency:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													Outsourcing family law services to TLB can often be more cost-effective compared to maintaining an in-house legal team. By engaging TLB, individuals or businesses can access specialized expertise on an as-needed basis, avoiding the costs associated with hiring, training, and retaining dedicated legal staff.
												</p>
											</div>
										</div>
										<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left">
											<div className="flex-shrink-0">
												<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6">
													Access to Specialized Expertise:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													Outsourcing to TLB allows clients to tap into the specialized expertise and experience of external family law professionals. These professionals stay up to date with the latest legal developments, have a deep understanding of family law regulations, and can offer valuable insights and strategies for handling complex family law cases.
												</p>
											</div>
										</div>
										
									</div>
								</div>
								<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="fade-right">
									<img src="/Case Intake/pexels-karolina-grabowska-5387261.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
								</div>
							</div>
						</div>
					</div>
				</section>



				<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
					<div className="container flex flex-col mx-auto lg:flex-row">
						<div
							className="w-full lg:w-1/3"
							style={{
								backgroundImage: 'url("/Case Intake/pexels-mikhail-nilov-7731326.jpg")',
								backgroundPosition: "center center",
								backgroundSize: "cover",
								// height: '640px',
								// width: '480px'
							}}
						/>
						<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

							<h2 className="text-xl font-semibold leading-loose">
								Outsourcing case intake services can bring several benefits, including increased efficiency in
								handling inquiries, improved client experience during the initial contact phase, streamlined data
								management, and the ability to focus on core legal work. It allows law firms to ensure proper
								evaluation and prioritization of potential cases while optimizing their resources.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second