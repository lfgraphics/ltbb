export default function OurMissionsAndVisionsCard({
	title,
	desc,
	animationType,
	textAlign
}) {
	return (
		<div
			className={`flex-1 flex flex-col gap-2 p-4 ${textAlign} relative`}
			data-aos={animationType}
		>
			{textAlign === "text-end" ? <div className="absolute right-0 w-1 rounded-lg h-[90%] bg-[#4E6BFF]"></div> : <div className="absolute left-0 w-1 rounded-lg  h-[90%] bg-[#4E6BFF]"></div>}
			<h2 className='text-xl md:text-2xl lg:text-3xl'>{title}</h2>
			<p>{desc}</p>
		</div>
	);
}
