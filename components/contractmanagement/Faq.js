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
                        Glossary - TLB’s Contract Lifecycle Management Services
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
                                    <div>{item.answer}</div>
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
        question: "How will the contract management services help my firm profit from our portfolios of contracts?",
        answer: `It may be all too simple to lose sight of possible revenue-generating possibilities or
revenue-sapping concerns as your contract portfolio expands over time. Our contract
solutions help you check which suppliers you are overpaying, get rebates, prevent
missing deadlines, find high-risk terms that might cost you later, and much more.`
    },
    {
        question: "Will there be scope for customization in the CLM solution as per my business requirements?",
        answer: `Some firms require more than just a basic contract repository; others need to identify
contract data that is extremely relevant to their sector. The TLB team strives to make
sure our platform satisfies your needs and has the impact you're hoping for, whether it's
a straightforward point solution or an end-to-end contract analytics solution.`
    },
    {
        question: "How can I trust TLB with my valuable contracts?",
        answer: `Together with your subject matter experts, our technical experts and senior attorneys
will ensure that any solution we install provides reliable, legally pertinent data to guide
your organization. Our quality control team evaluates your results after implementation
to verify correctness and relevance. Following that, we'll keep an eye on, manage, fix
issues with, and support your contract solution.`
    },
];


export default Faq;