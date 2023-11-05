import Image from 'next/image'
import React from 'react'

const missionAndVisionData = [
    {
        id: 1,
        title: "Vision",
        desc: "Establish itself as a “trusted partner” for corporates, law firms and attorneys whilst professionally delivering outsourced legal service and  operating as a “seamless extension” of their teams. "
    },
    {
        id: 2,
        title: "Mission",
        desc: "Build and deliver “value add” outsouced legal services and “innovative solutions” to our clients thereby generating “competitive advantage” for them in legal landscape."
    }
]

export default function MissionAndVision() {
    return (
        <section className='px-[9%] py-8 bg-[#F0F3FA] '>
            <div className="flex gap-8 flex-wrap">
                {
                    missionAndVisionData.map((item) => {
                        return (
                            <div key={item.id} data-aos="zoom-in" data-aos-delay={item.id * 150} className="bg-white p-6 rounded-xl w-full md:w-[48%] flex md:flex-1 flex-col gap-4 text-center">
                                <h2 className=' text-2xl md:text-3xl lg:text-4xl'>{item.title}</h2>
                                <Image src="/about/icons/quote-open.png" alt='Quote' width={30} height={30} />
                                <p className='text-[#79808A]'>{item.desc}</p>
                                <Image src="/about/icons/quote-close.png" alt='Quote' width={30} height={30} className='ml-auto' />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
