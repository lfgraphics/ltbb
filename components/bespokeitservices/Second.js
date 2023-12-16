"use client"

import "./styles.css";

const cardData = [
	{
		title: "Improve Your Time-to-Value",
		description: "Use blueprints to automate app deployment and lifecycle management to accelerate retail initiatives.",
	},
	{
		title: "Ensure Business Continuity",
		description: "Ensure important data availability with configurable DR solutions across local, distant, and cloud locations while maintaining centralized management.",
	},
	{
		title: "Reduce TCO by 60%",
		description: "Reduce capital and operating costs by increasing capacity and optimizing resources.",
	},
	{
		title: "Maintain Compliance",
		description: "Accelerate accreditation while ensuring continuous compliance with automated tests and self-healing."
	},
	{
		title: "Enhance the App's Performance",
		description: "By speeding essential legal workloads, you may provide quicker data analysis for eDiscovery and more.",
	},
	{
		title: "Low-cost offers",
		description: "TLB is your one-stop shop for excellent legal IT services at reasonable prices. Contact us right away for a free quotation!"
	}

];
export default function Third2() {

	return (
		<>
			<div className="bg-transparent mx-auto w-5/6">

				<div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
					<h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="100">
						Why choose TLB’s Legal IT Services?
					</h2>
					<p className="dark:text-gray-400 max-w-4xl mx-auto" data-aos="fade-left" data-aos-delay="200">
						Gain the ability to run any program on any cloud, as well as the ability to create new ways to support corporate development. For crucial business applications, provide seamless performance and predictable scalability.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8">
					{/* Step 2: Map the card data to the SwiperSlides */}
					{cardData.map((card, i) => (
						<div
							key={i}
							data-aos="zoom-in"
							data-aos-delay={(i + 1) * 150}
							className={`bg-white tiles p-6 flex-1 w-full min-w-[300px] rounded-xl md:max-w-[50%] xl:max-w-[400px] border-[1px] border-[#E4E4E7]`}
						>
							<div className="flex flex-col ">
								<div className="w-12 h-12 flex">
									<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="36" height="36" rx="6" fill="#374151" />
										<path d="M9.83594 19.1665L14.5026 23.8332L26.1693 12.1665" stroke="white" strokeWidth="2.33333"
											strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<h3 className="text-xl font-semiblod">{card.title}</h3>
							</div>
							<p className="text-gray-700">{card.description}</p>
						</div>
					))}
				</div>

			</div>
		</>
	);
}