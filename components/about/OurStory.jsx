import React, { useState } from 'react'
import Image from 'next/image'

export default function OurStory() {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <section className='bg-[#F0F3FA] px-[9%] py-12 flex-col md:flex-row flex gap-8 lg:gap-20 min-h-[70vh]'>
            <div className="flex-[3] flex flex-col gap-4 text-[#181C31]">
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>Our Story</h2>
                <p data-aos="fade-left" data-aos-delay="200" className={`${showMore ? "line-clamp-none" : "line-clamp-5"}  md:line-clamp-none`}>The Legal Base is the trading name of Omnifix Technology Solutions Private Limited. Incepted with a view to be a one-stop shop for law firms , corporate legal departments and single attorneys, TLB is led by seasoned legal professionals with a wealth of experience in working with clients from US , UK, Canada , Australia and New Zealand.</p>
                {!showMore && <span className='md:hidden underline' data-aos="fade-up" data-aos-delay="250" onClick={handleShowMore}>Read More</span>}
                {showMore && <p data-aos="fade-right" data-aos-delay="300">
                    At TLB, we believe in delivering value and competitive advantage to our clients at every stage of the legal service delivery process, ensuring superior long-term returns for our clients. We pride ourselves on being a trusted and long-standing partner to our clients, offering customized and bespoke solutions that help deliver tangible cost savings.
                </p>}
                <p data-aos="fade-right" data-aos-delay="300" className='hidden md:block'>
                    At TLB, we believe in delivering value and competitive advantage to our clients at every stage of the legal service delivery process, ensuring superior long-term returns for our clients. We pride ourselves on being a trusted and long-standing partner to our clients, offering customized and bespoke solutions that help deliver tangible cost savings.
                </p>
                {showMore && <span className='md:hidden underline' data-aos="fade-up" data-aos-delay="350" onClick={handleShowMore}>Read Less</span>}
            </div>
            <div data-aos="fade-left" data-aos-delay="400" className="flex-1 min-h-[30vh] sm:min-h-[40vh] relative rounded-xl  lg:rounded-2xl overflow-hidden">
                <Image src="/about/our-story.webp" fill alt="Our Story" className='object-cover' />
            </div>
        </section>
    )
}
