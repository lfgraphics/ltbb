'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceCard = ({ route, title, hoverData, url }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.div
			className='w-52 h-72 relative rounded-xl flex justify-center items-center shadow-slate-500 border-2 cursor-default bg-white text-center overflow-hidden'
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>

			{isHovered ? (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }}
					transition={{ duration: 0.9 }}
					className='text-start p-2'
				>
					{hoverData}
				</motion.p>
			) : (
				<>
					<span className='text-lg font-semibold z-10 p-2'>{title}</span>
					<Image src={url} preload fill alt="card background image" sizes="100%" style={{opacity: 0.4}}/>
				</>
			)}
		</motion.div>
	);
};

export default ServiceCard;
