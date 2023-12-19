"use client"
import React, { useState } from 'react';

const ipAnalyticsData = [
    {
        category: "IP Analytics",
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
        category: "Prior Art Searches",
        description: "A broad, in-depth investigation of patentability, state-of-the-art, patent invalidation, infringement, and freedom to operate.",
        services: [
            "Patentability Search",
            "State of Art Search",
            "Patent Invalidation Search",
            "Infringement Search",
            "Freedom to Operate"
        ]
    },
    {
        category: "Patent Watch",
        description: "Periodic and thorough monitoring of competitor product launches for infringement.",
        services: ["Competitor Product Launch Monitoring"]
    },
    {
        category: "Patent Drafting, Illustrations & Translation",
        description: "Our IP Consultation professionals prepare and convert standard designs to AUTOCAD in accordance with PTO requirements.",
        services: [
            "Invention Disclosure Form Collection",
            "Patent Application Development",
            "AutoCAD Drawing Transformation",
            "Patent Application Filing",
            "Patent Renewal Monitoring"
        ]
    },
    {
        category: "IP Consulting",
        description: "Analyzing and identifying intellectual property portfolios, optimizing potential, and integrating IP strategy with business.",
        services: [
            "IP Strategy & Policy Formulation",
            "IP Portfolio Creation & Management",
            "IP Valuation & Licensing"
        ]
    },
    {
        category: "Landscape Analysis",
        description: "Forecasting trends and activities in any technological domain.",
        services: ["Technological Domain Analysis"]
    },
    {
        category: "Patent Portfolio Analysis, Patent Licensing & Monetization",
        description: "Using successful licensing to convert intellectual property assets to monetary value.",
        services: ["Licensing for Monetization"]
    },
    {
        category: "Open-Source License Compliance",
        description: "Completing compliance with open-source licensing agreements.",
        services: ["Open-Source License Compliance"]
    },
    {
        category: "End-to-End Docketing and Administrative Support",
        description: "Providing end-to-end docketing support in all IP-related administrative chores.",
        services: [
            "Data Administration",
            "Data Verification",
            "Timetable Tracking",
            "Reminders",
            "External Support for IP Administration"
        ]
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
                                            item?.services.map((item,i)=>(
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