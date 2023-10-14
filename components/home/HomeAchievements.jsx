import { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { homeAchievementData } from '@/constants/homeAchievementsData';
export default function HomeAchievements() {
	const bannerRef = useRef();
	const { ref: inViewRef, inView } = useInView();

	const setRefs = useCallback(
		(node) => {
			bannerRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);
	return (
		<section className='py-16 px-[5%] bg-white'>
			<div className='text-center'>
				<h2
					className='text-2xl md:text-3xl lg:text-4xl font-bold text-black'
					data-aos='fade-right'
				>
					TLB’S ACHIEVEMENTS
				</h2>
			</div>
			<div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between text-base text-black max-w-4xl mx-auto mt-6 text-center'>
				{homeAchievementData?.map(({ id, title, numbers }, i) => {
					return (
						<div
							key={id}
							className={`flex-1 border-r-0 md:border-r-2 border-[#EAECF0] ${
								id === homeAchievementData.length && 'border-none'
							}`}
						>
							<div
								className='text-3xl font-extrabold text-homeCTA'
								ref={setRefs}
							>
								{inView && (
									<CountUp
										start={0}
										end={numbers}
										delay={i * 0.2}
										separator=''
									/>
								)}
								{i !== homeAchievementData.length - 1 && '+'}
							</div>
							<div>{title}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
