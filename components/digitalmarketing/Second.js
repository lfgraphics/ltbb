"use client"

import "./styles.css";

const cardData = [
	{
		title: "Client-Centric Service",
		description: "We give our clients constant consultation by giving them a professional account manager to handle all of their needs. To maintain seamless communication, our clients will always have direct contact with our digital marketing staff.",
	},
	{
		title: "Data-Driven Strategies",
		description: "In most of our efforts, we depend on research and in-depth data analysis. Data, for us, may provide vital information that few organizations in your sector have access to. In addition, we think that data and research are essential for developing effective digital marketing strategies.",
	},
	{
		title: "Transparency",
		description: "For our clients, we never hide or change information. Honesty and integrity are two of our core principles at Thrive, and we live up to them in our daily operations.",
	},
	{
		title: "Innovative Approach",
		description: "We all know that the marketing sector is always evolving. TLB encourages new approaches and is not afraid to test them to discover whether they are better than what we are currently doing. Our creative approach has resulted in the creation of our most successful campaigns to date.\n"
	},
	{
		title: "On-Time Delivery",
		description: "We are dedicated to providing the finest possible service to our clients. This involves always adhering to their timetables and deadlines. Our teams collaborate and use powerful project management technologies to track and complete tasks on time.\n",
	}

];
export default function Third2() {

	return (
		<>
			<div className="bg-transparent mx-auto w-5/6 overflow-hidden">

				<div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4 overflow-hidden">
					<h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="100">
						Why Outsource Digital Marketing Services to TLB?
					</h2>
					<p className="dark:text-gray-400 max-w-4xl mx-auto" data-aos="fade-left" data-aos-delay="200">
						At TLB, we take the time to research our clients, their industries, and their competition. We do this because we want our client’s law firm to get relevant and industry-tailored digital marketing solutions that will benefit them the most. We can assist law firms and attorney practice in organically growing their client base and achieving 5-star internet evaluations.
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