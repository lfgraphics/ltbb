import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Pause, Play } from 'lucide-react';

export default function AboutHero() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='px-[9%] pt-4 pb-20 bg-white'>
            <div className='text-center max-w-3xl mx-auto mt-8' >
                <h1 data-aos-delay="100" className='text-2xl md:text-3xl lg:text-5xl font-semibold' data-aos="fade-left">Your  Legal Outsourced  Partner!</h1>
                <p data-aos-delay="200" className="mt-5 text-[#79808A]" data-aos="fade-right">Legal outsourced partner for single attorneys, law firms and corporate legal departments. Navigate complexities confidently with our dedicated legal expert team and experience the elevated legal service delivery with TLB.
                </p>
            </div>
            <div className="flex mt-8 items-center gap-3 lg:gap-6 flex-wrap lg:h-[40vh]">
                <div data-aos="fade-right" data-aos-delay="300" className="relative h-full w-full hidden lg:flex lg:flex-1 rounded-xl lg:rounded-3xl overflow-hidden">
                    <Image fill src="/about/about-01.webp" alt="About Hero" className='object-cover' />
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" className="relative h-[25vh] md:h-[30vh] lg:h-full lg:flex-[2] rounded-xl lg:rounded-3xl overflow-hidden w-full">
                    <button
                        onClick={handlePlay}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-6 pl-1 w-12 h-12 rounded-full  z-10 flex justify-center items-center bg-gray-300 text-[#6366F1] cursor-pointer'
                    >
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <video
                        ref={videoRef}
                        className={`w-full object-cover rounded-xl h-full`}
                    >
                        <source src='/TLB Services.mp4' type='video/mp4' />
                    </video>
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className="relative h-[20vh] md:h-[25vh] lg:h-full flex-1 lg:hidden rounded-3xl overflow-hidden">
                    <Image fill src="/about/about-01.webp" alt="About Hero" className='object-cover' />
                </div>
                <div data-aos="fade-left" data-aos-delay="400" className="relative h-[20vh] md:h-[25vh] lg:h-full flex-1 rounded-xl lg:rounded-3xl overflow-hidden">
                    <Image fill src="/about/about-02.webp" alt="About Hero" className=' object-center object-cover' />
                </div>
            </div>
        </div>
    )
}
