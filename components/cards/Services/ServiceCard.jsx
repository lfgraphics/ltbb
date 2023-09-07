'use client';

import Image from 'next/image';

const ServiceCard = ({ route, title, hoverData, url }) => {
	return (
			<div className='group h-72 w-72'>
				<div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] duration-500 group-hover:[transform:rotateY(180deg)]'>
					<div className='absolute inset-0 flex justify-center items-center'>
						<span className='text-lg font-semibold p-2 text-center z-10'>
							{title}
						</span>
						<Image
							src={url}
							alt='card background image'
							className='h-full w-full rounded-xl object-cover'
							priority
							fill
							sizes='100%'
							style={{ opacity: 0.5 }}
						/>
					</div>
					<div className='absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
						<div className='flex min-h-full flex-col items-center justify-center'>
							<div className='text-sm'>{hoverData}</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default ServiceCard;
