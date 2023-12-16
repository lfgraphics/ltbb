"use client"
import React, { useState } from 'react';

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
                        {faqData.map((item, index) => (
                            <details
                                key={index}
                                open={index === openQuestionIndex}
                                onToggle={() => handleQuestionToggle(index)}
                            >
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    {item.question}
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>{item.answer}</p>
                                    <ul className='mt-3 ml-4'>
                                        {item?.features?.map((item, i) => (
                                            <li className="list-disc list-inside" key={i}>
                                                {item}
                                            </li>
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
};

const faqData = [
    {
        question: "How does one go about creating bespoke legal management software?",
        answer: "To create your specific solutions, we use the agile development technique at The Legal Base. This way, you'll always be up to know on the status of your project at each step of development. Our development procedure entails:",
        features: [
            "Analysis of requirements",
            "MVP development",
            "QA and testing for software/app development.",
            "Deployment",
            "Maintenance and support"
        ]
    },
    {
        question: "What are the prices for legal IT services?",
        answer: "Many factors influence your software development cost, including the number of people engaged, testing approach, functionality, and technology stack. As a result, in order to receive an accurate price for your project, you must specify all of your requirements and ideas. You may schedule a free 30-minute consultation with one of our specialists to evaluate your ideas and receive an accurate quotation tailored to your company's needs."
    },
    {
        question: "How much time will it take to create a custom legal solution?",
        answer: "The development time is generally determined by crucial aspects such as features, technology stack, customization, and so on. You may discuss your needs with our skilled business analyst team and schedule a free consultation. In addition to assessing your proposal, our specialists will assist you to examine its viability, identifying areas for development, and executing a best-in-class solution for your organization."
    },
    {
        question: "What additional services do you provide in addition to legal IT?",
        answer: "From concept validation and technology consulting services through UI/UX, product prototyping, cloud integration, testing, data transfer, technology upgrades, and much more, you receive a comprehensive range of professional development services for your company."
    },
    {
        question: "Can you transform my current legal website into a legal mobile app?",
        answer: "We can turn your website into a fully working mobile app with your preferred features, technology stack, and APIs. By collaborating with us for legal app development, you can also establish a custom mobile application outfitted with cutting-edge technology and resources."
    },
    {
        question: "Will TLB keep my data safe?",
        answer: "Absolutely. We ensure that all of your data and sensitive information is kept secure. We sign an NDA to ensure that none of our management or staff discloses your sensitive information."
    }
];


export default Faq;