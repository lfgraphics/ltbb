import { legalServicesData, managedServicesData } from '@/constants/aboutServicesData'
import React from 'react'
import ServicesCard from './ServicesCard'

export default function Operations() {
    return (
        <section className='bg-white px-[9%] py-12 '>
            <div className='text-center flex flex-col gap-4'>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>TLB Operates in Multiple Functional Verticals</h2>
                <p data-aos="fade-left" data-aos-delay="200">Each of these functional verticals are supported by a vetted team of legal associates , quality check experts, team leads, operational delivery managers and head of operations. We understand the importance of personalisation and that's why we also have a dedicated client relationship team that acts as a single point of contact for all our clients supported by our pre and post sales teams. With its offshore delivery center based in Noida and Lucknow in India, TLB offers extended support to its clients.</p>
            </div>
            {/* Legal Services */}
            <div className="mt-8 text-center">
                <h3 data-aos="fade-right" data-aos-delay="100" className='text-xl md:text-2xl lg:text-3xl'>Legal Services</h3>
                <div className="flex gap-6 flex-wrap mt-8 justify-center">
                    {
                        legalServicesData?.map((item) => {
                            return <ServicesCard key={item.id} data={...item} animationDuration={item.id * 150} />
                        })
                    }
                </div>
            </div>
            {/* Managed Services */}
            <div className="mt-8 text-center">
                <h3 data-aos="fade-right" data-aos-delay="100" className='text-xl md:text-2xl lg:text-3xl'>Managed Services</h3>
                <div className="flex gap-6 flex-wrap mt-8 justify-center">
                    {
                        managedServicesData?.map((item) => {
                            return <ServicesCard key={item.id} data={...item} animationDuration={item.id * 150} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
