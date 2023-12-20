"use client"
import React, { useState } from 'react';

const ipAnalyticsData = [
    {
        category: "What do we offer in IP Analytics?",
        services: [
            "Prior Art Search",
            "Patentability Analysis",
            "Patent Infringement & Analysis",
            "Patent Mapping",
            "Patent Drafting & Prosecution",
            "IP Due Diligence & IP Audit"
        ]
    },
    {
        category: "What do we offer in Prior Art Search",
        services: [
            "Patentability Search",
            "State of Art Search",
            "Patent Invalidation Search",
            "Infringement Search",
            "Freedom to Operate"
        ]
    },
    {
        category: "What do we offer in Patent Watch?",
        description: "There is an irrational desire to keep a close eye on whether any of the rivals have introduced a product that infringes on the client's patents. It is also critical to investigate what other rivals are doing to innovate. Changes in the office actions of strong rival patents can sometimes help the client prepare strong post-grant opposition filings.\n",
    },
    {
        category: "What do we offer in Patent Drafting, Illustrations & Translation?",
        description:"Using the standardized invention disclosure form template, the domain expert collects the inventor's invention information. The domain expert then develops the patent application in accordance with PTO criteria. The casual sketches/photographs are transformed into precise and professional AutoCAD drawings that adhere to patent office rules. After that, the patent application is filed with the PTO. The patent's renewals are monitored throughout its existence. From the time the patent is filed until it expires, all communications (office activities) with the patent office are managed."
    },
    {
        category: "What do we offer in IP consulting services?",
        services: [
            "IP Strategy & Policy Formulation",
            "IP Portfolio Creation & Management",
            "IP Valuation & Licensing"
        ]
    },
    {
        category: "What do we offer in Landscape analysis services?",
        description: "\n" +
            "It gathers business intelligence from technological activity occurring in a certain technological domain. Among the projected areas are innovation trends, R&D regions, and possible markers. It is possible to identify strong rival patents. Possibilities for purchase can also be found.\n"
    },
    {
        category: "What do we offer in Patent Portfolio Analysis, Patent Licensing & Monetization services?",
        description: "The licensing approach can unlock monetary value from IP assets. Patent licensing provides firms with a consistent way to boost the bottom lines of their separate technology business divisions. Patent licensing is possible in several locations. Consultants from TLB have aided technology leaders in effectively completing inter-company and intra-company license agreements.",
    },
    {
        category: "What do we offer in Open-Source License Compliance?",
        description: "Software firms all around the world have been employing a variety of third-party open-source libraries to accelerate the delivery of their products. However, there are some hazards associated with this. There are several open-source licenses, and firms must follow the terms and conditions of these licensing agreements.\n" +
            "\n",
    },
    {
        category: "What do we offer in docketing and administrative support?\n",
        description: "Through its Certified systems and procedures, TLB’s IP professionals provides end-to-end docketing and administrative assistance. Data saved on IPMS is utilized for decision-making purposes including renewals, M&A, and overall IP protection. It is vital that this information be correct and up to date. Our team provides extra external support to your IP administration staff in order to assist them in managing all IP-related administrative responsibilities.\n"
    }
];


const Faq = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleQuestionToggle = (index) => {
        setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <React.Fragment>
            <section className="bg-[#1E293B] text-gray-100 mt-4 mx-auto w-full">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        How it works
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {ipAnalyticsData.map((item, index) => (
                            <details
                                key={index}
                                open={index === openQuestionIndex}
                                onToggle={() => handleQuestionToggle(index)}
                            >
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    {item.category}
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>{item.description}</p>
                                    <ul className="flex flex-col gap-2 list-disc ml-4">
                                        {
                                            item?.services?.map((item,i)=>(
                                                <li key={i}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Faq;