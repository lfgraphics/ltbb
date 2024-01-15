import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function LeaderShipTeamCard({ data }) {
    const { id, name, designation, linkedin, image } = data;
    return (
        <div data-aos="fade-up" data-aos-delay={id * 150} className='relative w-full sm:w-[45%] md:flex-1 h-[65vh] rounded-xl overflow-hidden '>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)] z-10"></div>
            <Image src={image} fill alt={name} className='object-cover' />
            <div className="absolute bottom-0 left-0 right-0 z-10 text-white p-4 ">
                <h3 className='text-xl'>{name}</h3>
                <div className="flex justify-between items-center">
                    <p className='text-gray-300'>{designation}</p>
                    <div className="flex gap-3">
                        <Link href={linkedin} className="hover:text-gray-400">
                            <i className="fab fa-linkedin text-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
