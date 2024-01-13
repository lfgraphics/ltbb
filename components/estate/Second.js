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
			<div className='bg-white    sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto overflow-hidden'>
				<section className="dark:bg-white bg-white">
					<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
						<div data-aos="fade-down">
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl">
								Here are some common estate planning services:
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
											Wills and Trusts:
										</h4>
										<p className="mt-2 dark:text-gray-400">
											TLB’s estate planning professionals can help create a last will and testament, which outlines how assets will be distributed after client’s death. They can also assist in establishing trusts, such as revocable living trusts or irrevocable trusts, to manage and protect assets during client’s lifetime and beyond.
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
												Power of Attorney:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB’s estate planning services can help you designate a power of attorney, a legal document that grants someone the authority to make financial or healthcare decisions on your behalf in case you become incapacitated.

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
												Advance Healthcare Directives:

											</h4>
											<p className="mt-2 dark:text-gray-400">
												These documents, including a living will and a healthcare power of attorney, allow you to express your healthcare wishes and appoint a healthcare agent to make medical decisions for you if you are unable to do so.
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
												Beneficiary Designations:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB’s estate planning professionals can assist in ensuring that your beneficiary designations on retirement accounts, life insurance policies, and other assets are up to date and aligned with overall estate plan.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div aria-hidden="true" className="mx-auto rounded-lg shadow-lg object-fill" data-aos="fade-left">
								<img src="/Estate Planning/pexels-ekaterina-bolovtsova-6077961.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
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
												Tax Planning:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB’s estate planning services can help minimize estate taxes, gift taxes, and income taxes through various strategies and tools, such as gifting strategies, charitable giving, and utilizing tax-efficient vehicles like trusts.

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
												<h4 className="text-lg font-medium leading-6">
													Business Succession Planning:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													If you own a business, TLB’s estate planning services can guide you in creating a plan for the smooth transition of ownership and management to the next generation or a chosen successor.

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
												<h4 className="text-lg font-medium leading-6">
													Asset Protection:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													TLB’s Estate planning professionals can help you protect your assets from potential creditors, lawsuits, or other risks through techniques such as the creation of trusts or the use of legal structures.

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
												<h4 className="text-lg font-medium leading-6">
													Probate and Estate Administration:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													In the event of your death, TLB’s estate planning services can provide guidance and assistance to your family or designated representatives in navigating the probate process or administering your estate.
												</p>
											</div>
										</div>
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
									<img src="/Estate Planning/pexels-kindel-media-7578984.jpg" alt="" className="mx-auto rounded-lg shadow-lg object-fill" />
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
								backgroundImage: 'url("/Estate Planning/pexels-mikhail-nilov-7731330.jpg")',
								backgroundPosition: "center center",
								backgroundSize: "cover",
								// height: '640px',
								// width: '480px'
							}}
						/>
						<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

							<h2 className="text-xl font-normal leading-loose">
								Estate planning is essential for everyone, regardless of the magnitude of their possessions. Wills and estate preparation may be a difficult and time-consuming practice since each client has distinct demands and requires various tactics. We can assist your in-house staff in providing world-class services to your end customer with any difficult will preparation assignment, as well as construct their family estate plans.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second