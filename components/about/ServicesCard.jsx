import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesCard({ data, animationDuration }) {
    const { title, image, learnMore } = data;
    return (
        <div data-aos="zoom-in" data-aos-duration={animationDuration} className='bg-[#F0F3FA] px-4 py-3 text-start flex flex-col rounded-xl w-[45%] justify-center sm:w-[30%] md:w-[22%] lg:w-[13%]'>
            <Image src={image} width={30} height={30} alt={title} />
            <Link href={learnMore} className='mt-2 text-lg'>{title}</Link>
        </div>
    )
}
