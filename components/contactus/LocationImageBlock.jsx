import Image from 'next/image'
import React from 'react'

export default function LocationImageBlock({ imgURL, country }) {
    return (
        <div className='flex-1 md:flex-[2] min-h-[340px] md:h-[500px] relative overflow-hidden rounded-2xl md:rounded-[32px]'>
            <Image src={imgURL} fill alt='Location' className='absolute inset-0 ' />
            <div class="absolute bottom-0 w-full h-0 md:h-60 rounded-b-lg bg-gradient-to-b from-transparent to-black"></div>
            <h2 className='text-white text-lg lg:text-5xl font-bold absolute bottom-8 left-10'>{country}</h2>
        </div>
    )
}
