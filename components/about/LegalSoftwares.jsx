import Image from 'next/image'
import React from 'react'
import ReadMoreText from './ReadMoreText'

const logos = [
    {
        id: 1,
        image: '/about/logos/lexis.png',
        company: "LexisNexis"
    },
    {
        id: 2,
        image: '/about/logos/jarvis.png',
        company: "Jarvis Legal"
    },
    {
        id: 3,
        image: '/about/logos/leap.png',
        company: "Leap"
    },
    {
        id: 4,
        image: '/about/logos/thomson.png',
        company: "Thomas Returns"
    },
    {
        id: 5,
        image: '/about/logos/clio.png',
        company: "Clio"
    },
    {
        id: 6,
        image: '/about/logos/mycase.png',
        company: "MyCase"
    },
    {
        id: 7,
        image: '/about/logos/filevine.png',
        company: "Filevine"
    },
    {
        id: 8,
        image: '/about/logos/practice-panther.png',
        company: "Practice Panther"
    },
    {
        id: 9,
        image: '/about/logos/cosmolex.png',
        company: "CosmoLex"
    },
]

export default function LegalSoftwares() {
    return (
        <section className='bg-[#F0F3FA] px-[9%] py-12'>
            <div className='text-center flex flex-col gap-4 mx-auto max-w-2xl'>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>We’re well versed with all legal softwares</h2>
                <ReadMoreText
                    text="Our highly efficient lawyers and attorneys are well versed with the latest technological advancement in the legal sector. Our technical knowledge leverages complex cases helping lawfirms meet client deadlines."
                    aos="fade-left"
                    delay="200"
                    className='text-[#79808A]'
                />
            </div>
            {/* Logos */}
            <div className="flex gap-10 justify-center flex-wrap mt-8">
                {
                    logos?.map((item) => (
                        <Image key={item.id} src={item.image} width={170} height={100} alt={item.company} data-aos="zoom-in" data-aos-delay={item.id * 100} className='object-contain w-24 md:w-36 lg:w-44' />
                    ))
                }
            </div>
        </section>
    )
}
