'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServiceCard = ({ route, title, hoverData, url }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.div
			className='w-52 h-72 hover:h-72 rounded-xl flex justify-center items-center shadow-slate-500 border-2 cursor-default bg-white text-center overflow-hidden'
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>

			{isHovered ? (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }}
					transition={{ duration: 0.9 }}
					className='text-sm text-start p-2'
				>
					{hoverData}
				</motion.p>
			) : (
				<div className="h-full w-full flex align-center items-center bg-cover bg-opacity-50" style={{backgroundImage: `url(${url})`}}>
					<span className='text-lg p-2'>{title}</span>
				</div>
			)}
		</motion.div>
	);
};

export default ServiceCard;
