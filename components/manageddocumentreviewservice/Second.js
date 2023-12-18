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
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl dark:text-gray-50 ">Here are some key aspects of managed document review services
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
										<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Team of Review Professionals:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB employs a team of attorneys, paralegals, or legal professionals who are experienced in document review. These professionals undergo training to understand the specific requirements of the review project and apply consistent and accurate review protocols.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Technology-Assisted Review:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB often utilizes advanced technology tools, such as eDiscovery software, predictive coding, machine learning, and artificial intelligence, to streamline and enhance the document review process. These technologies can help expedite the identification of relevant documents and improve overall efficiency.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Project Management:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB manages the entire document review process, including planning, organizing, and executing the review project. TLB allocates resources, set timelines, and ensure quality control to meet the client's requirements.
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Scalability and Flexibility:

											</h4>
											<p className="mt-2 dark:text-gray-400">TLB offers scalability to handle projects of various sizes. TLB can quickly scale up or down the review team based on the volume of documents, project deadlines, or changing requirements.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
								<img src="/Document Review/pexels-vanessa-garcia-6325900.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
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
											<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cost Efficiency:
											</h4>
											<p className="mt-2 dark:text-gray-400">Working with TLB can be cost-effective compared to conducting the review in-house. It eliminates the need for additional staffing, infrastructure, and software investment. TLB operates on a per-hour or per-document pricing model, providing cost predictability.

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
												<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Quality Control and Consistency:
												</h4>
												<p className="mt-2 dark:text-gray-400">TLB implements robust quality control processes to ensure accuracy, consistency, and adherence to review protocols. TLB employs senior reviewers or quality control specialists to oversee and validate the work of the review team.
												</p>
											</div>
										</div>
										<div className="flex shadow-lg p-4 hover:shadow-2xl  border-solid  rounded-md" data-aos="fade-left">
											<div className="flex-shrink-0">
												<div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-700">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div>
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6 dark:text-gray-50">
													Regulatory Compliance:

												</h4>
												<p className="mt-2 dark:text-gray-400">TLB is familiar with regulatory requirements and can help ensure compliance during the review process. TLB understands the importance of maintaining confidentiality, data privacy, and legal privilege protections.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mx-auto rounded-lg shadow-lg object-filllg:col-start-1 lg:row-start-1" data-aos="fade-right">
									<img src="/Document Review/pexels-vanessa-garcia-6325904.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
								</div>
							</div>
						</div>
					</div>
				</section>



				<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
					<div className="container flex flex-col mx-auto lg:flex-row">
						<div
							className="w-full lg:w-1/3 rounded-lg object-fill"
							style={{
								backgroundImage: 'url("/Document Review/pexels-jess-bailey-designs-2002217.jpg")',
								backgroundPosition: "center center",
								backgroundSize: "cover"
							}}
						/>
						<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

							<h2 className="text-xl font-semibold leading-loose">
								By outsourcing paralegal services to TLB, law firms and legal departments can access specialized expertise, scale their resources as needed, reduce costs, and increase efficiency. It allows attorneys to focus on core legal work while leveraging the support of qualified paralegals for various legal tasks.

							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second