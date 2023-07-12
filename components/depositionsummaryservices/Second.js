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
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl dark:text-gray-50 ">
								Why Outsource Deposition Summary Services?
							</h2>
							<p className='p-6 text-center mx-auto space-y-24 '>
								Outsourced deposition summary services refer to the practice of hiring an external service provider to handle the task of creating deposition summaries. Instead of handling the task in-house, law firms and legal professionals outsource this work to specialized companies or freelance professionals who specialize in deposition summarization.
								<br></br>
								There are several reasons why outsourcing deposition summary services may be beneficial:

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
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
											Expertise:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											Outsourcing deposition summary services to TLB allows access to professionals who are experienced in legal research, summarization, and understanding the intricacies of deposition transcripts. These experts are skilled in extracting key information and presenting it in a clear and concise manner.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Timesaving:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Deposition transcripts can be lengthy and time-consuming to review. By engaging with TLB’s deposition summarization process, legal professionals can save valuable time and focus on other critical aspects of their cases
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Cost-effectiveness:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourcing deposition summary services to TLB can be cost-effective compared to hiring additional in-house staff or allocating existing resources to handle deposition summaries. It eliminates the need for training and managing staff solely for this task.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Scalability:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Outsourcing to TLB provides flexibility in managing workload fluctuations. Law firms can easily adjust the volume of work assigned to the deposition summary service provider based on their current needs.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Quality and Accuracy:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB’s specialized deposition summary service has rigorous quality control measures in place to ensure accuracy and attention to detail in their summaries. We are familiar with legal terminology and the specific requirements of deposition summaries.
											</p>
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
				<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
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
								When considering outsourcing deposition summary services, it is essential to select a reputable and reliable service provider. Conducting due diligence, checking reviews or testimonials, and evaluating the provider's expertise and track record can help ensure a successful outsourcing partnership.
							</h2>
						</div>
					</div>
				</section>
			</div>

			{/* Third Section Starts here */}

			<div className='bg-white    sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto'>
				<section className="dark:bg-white dark:text-gray-100 bg-white">
					<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
						<div data-aos="fade-down">
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl dark:text-gray-50 ">
								TLB’s Deposition Summary Services
							</h2>
							<p className='p-6 text-center mx-auto space-y-24 '>
								TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client.
								We mainly focus on the following services -
							</p>
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
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
											Summarization:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											Deposition summary services specialize in reviewing and summarizing deposition transcripts. They extract essential facts, statements, and arguments presented during the deposition process.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Highlighting Key Information:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												These services focus on identifying and highlighting key points, significant testimony, and important exhibits or evidence referenced during the deposition. This helps attorneys quickly grasp the crucial details without having to review the entire transcript.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Customization:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Deposition summaries can be customized to meet specific requirements. Attorneys can request summaries that align with their preferred format, level of detail, and organization style.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Time and Cost Savings:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Dealing with lengthy deposition transcripts can be time-consuming and labor-intensive. TLB’s legal professionals can save valuable time and allocate their resources more efficiently. It can also be cost-effective compared to hiring additional in-house staff or allocating existing resources for this task.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Case Preparation:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Deposition summaries play a vital role in case preparation. They provide attorneys with a clear overview of the deposition testimony, aiding in case strategy development, identifying strengths and weaknesses, and preparing for trial or settlement negotiations.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
												Improved Collaboration:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												Deposition summaries facilitate effective collaboration among legal teams. Attorneys can easily share and discuss the key points and important information extracted from the depositions, enhancing communication and coordination.
											</p>
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
			</div>


		</React.Fragment>
	)
}

export default Second