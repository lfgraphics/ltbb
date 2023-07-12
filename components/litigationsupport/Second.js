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
								Why Outsource Litigation Support Services to TLB?
							</h2>
							<p>
								Outsourcing litigation support services can offer several advantages for law firms and legal professionals. Here are some reasons why outsourcing these services is commonly practiced:
							</p>
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
											Cost Savings:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											Outsourcing litigation support services to TLB can be a cost-effective solution compared to maintaining an in-house support team. By outsourcing to TLB, law firms can avoid the costs associated with hiring, training, and retaining additional staff members. Instead, they can access the necessary support on an as-needed basis, paying only for the services utilized.
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
												Access to Specialized Expertise:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB has specialized expertise and experience in specific areas, such as eDiscovery, forensic analysis, or trial graphics. By outsourcing to TLB, law firms can tap into this expertise, benefiting from the knowledge and skills of professionals who specialize in these areas. It ensures that the tasks are handled efficiently and effectively by individuals with the necessary technical proficiency.
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
												Scalability and Flexibility:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourcing litigation support services to TLB provides law firms with flexibility in managing their workload. During busy periods or complex cases, firms can quickly scale up their support by and conversely, during slower periods, they can scale down the outsourcing arrangements, avoiding the need to maintain a large in-house support team when not required.
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
												Enhanced Efficiency and Productivity:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourcing to TLB allows lawyers to focus on their core legal tasks, such as case strategy, client representation, and court appearances. By offloading time-consuming tasks like document review, legal research, or trial preparation to experienced support professionals, lawyers can allocate their time and energy more efficiently, resulting in increased productivity and improved client service.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mt-10 lg:mt-0 " data-aos="fade-left">
								<img src="https://source.unsplash.com/random/360x800" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
							</div>
						</div>
						<div>
							<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
								<div className="lg:col-start-2">

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
												Access to Advanced Technology and Resources:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB has access to state-of-the-art technology, specialized software, and resources that may be costly for law firms to acquire and maintain. By outsourcing to TLB, law firms can leverage these advanced tools and resources without the need for significant upfront investments. This can lead to more efficient and accurate data management, document review, and trial presentation.
											</p>
										</div>
									</div>



									<div className="mt-12 space-y-12">
										<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left">
											<div className="flex-shrink-0" data-aos="fade-left">
												<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6">
													Focus on Core Competencies:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													Outsourcing litigation support services to TLB enables law firms to focus on their core competencies, such as legal strategy, client advocacy, and relationship building. It allows lawyers to spend more time on tasks that directly impact case outcomes and client satisfaction, while leaving specialized support tasks to external professionals who excel in those areas.
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
													Time Savings:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													Litigation support tasks can be time-consuming and labor-intensive. By outsourcing these tasks, to TLB law firms can save valuable time that can be allocated to other critical aspects of the case or used to handle a higher volume of cases.
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
													Increased Accuracy and Quality:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													Outsourcing litigation support services to TLB can result in increased accuracy and quality of work. Litigation support experts of TLB are often well-versed in best practices, quality control measures, and compliance standards, ensuring that the tasks are performed with precision and attention to detail.
												</p>
											</div>

										</div>
									</div>
								</div>
								<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="fade-right">
									<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
								</div>
							</div>
						</div>
					</div>
				</section>



				{/* <section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
					<div className="container flex flex-col mx-auto lg:flex-row">
						<div
							className="w-full lg:w-1/3"
							style={{
								backgroundImage: 'url("https://source.unsplash.com/random/640x480")',
								backgroundPosition: "center center",
								backgroundSize: "cover"
							}}
						/>
						<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

							<h2 className="text-xl font-semibold leading-loose">
								By outsourcing personal injury support services to TLB, law firms and attorneys can benefit from
								specialized expertise, increased efficiency, reduced administrative burden, and improved case
								management. It allows legal professionals to focus on strategic aspects of the case, such as
								client advocacy, while delegating time-consuming tasks to qualified support providers.
							</h2>



						</div>
					</div>
				</section> */}
			</div>
		</React.Fragment>
	)
}

export default Second