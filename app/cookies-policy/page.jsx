import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: "Cookies Policy | TLB",
    description: "TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations",
}

export default function CookiesPolicy() {
    return (
        <section className='max-w-6xl mb-4 mx-auto p-4'>
            <div className="relative rounded-2xl bg-[rgba(0,0,0,0.6)] h-60 lg:h-80 overflow-hidden flex justify-center items-center">
                <Image src="/madiligenceservices/pexels-edmond-dantès-4342493.webp" alt="Cookies BG" fill className="absolute -z-10 object-cover object-bottom" priority />
                <div className="max-w-[80%]  mx-auto text-center text-white leading-8">
                    <h2 className="py-10 text-3xl lg:text-5xl">
                        Cookies Policy
                    </h2>
                </div>
            </div>

            <div class="leading-8 mt-4">
                <p>
                    We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.
                </p>
                <p>
                    We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services
                </p>
            </div>
        </section>
    )
}


