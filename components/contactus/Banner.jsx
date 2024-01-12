import React from 'react'

import Image from 'next/image'
import ContactForm from './ContactForm'

export default function Banner() {
    return (
        <div className="w-screen min-h-screen h-full relative">
            <Image
                src="/contact-banner.webp"
                fill
                alt="Contact Banner"
                className="absolute hidden md:block inset-0 -z-10 object-cover max-h-80 md:max-h-full"
            />

            <div className="text-white relative w-full flex flex-col text-center justify-end pb-20  h-80 md:hidden">
                <Image
                    src="/contact-banner.webp"
                    fill
                    alt="Contact Banner"
                    className="absolute block md:hidden inset-0 -z-10 object-cover max-h-full"
                />
                <h1 className="text-2xl md:text-4xl font-bold" data-aos="zoom-in" data-aos-delay="100">Contact Us</h1>
                <h3 className="md:text-xl" data-aos="zoom-in" data-aos-delay="200">
                    Getting in touch with TLB is as simple as 1 2 3{" "}
                </h3>
                <div class="absolute bottom-0 w-full h-60 -z-10 md:h-0 rounded-b-lg bg-gradient-to-b from-transparent to-black"></div>
            </div>

            <div className="hidden md:block text-white md:absolute z-10 md:left-[10%]  md:top-[70%]">
                <h1 className="text-2xl md:text-4xl font-bold" data-aos="fade-right" data-aos-delay="100">Contact Us</h1>
                <h3 className="md:text-xl" data-aos="fade-right" data-aos-delay="200">
                    Getting in touch with TLB is as simple as 1 2 3{" "}
                </h3>
            </div>

            <div className="relative md:absolute px-4 -top-[60px] md:top-auto flex justify-center md:justify-end w-full mx-auto md:right-[10%] md:bottom-[10%] z-10" data-aos="zoom-in" data-aos-delay="300">
                <ContactForm message="Getting in touch with TLB is as simple as" />
            </div>
            <div class="absolute bottom-0 w-full h-0 md:h-60 rounded-b-lg bg-gradient-to-b from-transparent to-black"></div>
        </div>
    )
}
