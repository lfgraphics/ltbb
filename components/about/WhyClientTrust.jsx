
import Image from 'next/image'
import React from 'react'

const whyClientData = [
    {
        id: 1,
        image: "/about/icons/creative-approach.png",
        title: "Creative Approach",
        desc: "We work with clients to find the best solutions to their issues.",
    },
    {
        id: 2,
        image: "/about/icons/flexible.png",
        title: "Flexible",
        desc: "If needed, we correct the plan and add needed changes to scope.",
    },
    {
        id: 3,
        image: "/about/icons/client-oriented.png",
        title: "Client Oriented",
        desc: "It is very important to satisfy our clients and meet their needs.",
    },
    {
        id: 4,
        image: "/about/icons/affordable-price.png",
        title: "Affordable Price",
        desc: "Our services are affordable and we provide flexible pricing.",
    },
    {
        id: 5,
        image: "/about/icons/planning.png",
        title: "Planning",
        desc: "Our services are affordable and we provide flexible pricing.",
    },
    {
        id: 6,
        image: "/about/icons/support.png",
        title: "Support 24/7",
        desc: "We provide a high-quality support for each client 24/7.",
    },
]

export default function WhyClientTrust() {
    return (
        <section className='px-[9%] py-8 bg-[#F0F3FA] mt-12'>
            <div className='text-center flex flex-col gap-4 '>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>Why do clients trust us?</h2>
                <p data-aos="fade-left" data-aos-delay="200" className='text-[#79808A]'>At The Legal Base, we are driven by a relentless pursuit of excellence and the desire to constantly elevate the standard of legal service delivery. We are dedicated to delivering value and a competitive edge at every stage of the process, ensuring that our clients see superior long-term returns on their investment. Our focus is always on protecting our client's interests and delivering results that exceed their expectations. we believe that by going above and beyond, we can build lasting partnerships and help our clients achieve their goals.</p>
            </div>
            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center">
                {
                    whyClientData?.map((item) => {
                        return (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={item.id * 100} className="w-full sm:w-[47%] lg:w-[30%] flex flex-col items-center justify-center gap-4 p-4 text-center">
                                <Image width={50} height={50} src={item.image} alt={item.title} />
                                <h3 className='text-xl md:text-2xl'>{item.title}</h3>
                                <p className='text-[#79808A]'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
