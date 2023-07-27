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
                        Frequently Asked Questions
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        TLB’s Legal Research Services
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
        question: "What is legal research?",
        answer: "The practice of seeking material to support your present case is known as legal research. This information might include existing laws that are important to the case or past instances that are comparable to the present case being worked on. It is usually done by the lawyer who took the case; however, it might be outsourced to someone who knows the law."
    },
    {
        question: "What is the purpose of legal research?",
        answer: 'Legal research is critical since it may "make or break" your case. It provides the attorneys with the knowledge they require to win their case.\n\n They can research current laws that are pertinent to the case so that they know how to exploit this legislation to their advantage. They can also research prior situations that are similar to the present ones, so they know what to do and what not to do.'
    },
    {
        question: "What are some helpful hints for enhancing your legal research?",
        answer: "One important advice for improving your legal research is to devote a significant amount of time to it. More time spent investigating equals more helpful knowledge. It also allows you to spend more time determining which sources are relevant and which are not, boosting the quality of your legal research.\n\nHowever, devoting too much time to legal study will be inconvenient. Outsourcing is the ideal option; it is a simple and quick approach to obtain high-quality legal research services."
    },
    {
        question: "What must I keep in mind while Outsourcing my Legal Research Services?",
        answer: `When outsourcing legal research services, it is critical to ensure that the provider is competent and trustworthy. Make certain that the firm you pick is capable of executing legal research work in a timely manner.\n\nFortunately, TLB has you covered! Our firm has various agents that excel in research and are well-versed in the law. Contact us right away if you need extra time to focus on other parts of working on a case.`
    },
    {
        question: `How do you ensure client confidentiality and attorney-client privilege? 
`,
        answer: `We ensure client confidentiality and attorney-client privilege by strictly adhering to the rules and regulations of the legal profession, including attorney-client privilege, and by implementing strict security measures to protect client information.
`
    },
    {
        question: "How do you handle billing and invoicing for your services? ",
        answer: "We handle billing and invoicing for our services on a monthly basis, and we are happy to work with your law firm to establish a billing schedule that works for you. We accept various forms of payment including credit cards, wire transfers and checks."
    },
    {
        question: "Are your attorneys licensed and insured?",
        answer: "Yes, our attorneys are licensed to practice in their respective states and are fully insured."
    },
    {
        question: "Can you provide references or case studies of previous clients?",
        answer: "Yes, we can provide references and case studies of previous clients upon request."
    },
    {
        question: "How do you handle disputes or issues that may arise during the outsourcing process?",
        answer: "How do you handle disputes or issues that may arise during the outsourcing process?"
    },
    {
        question: "How do you handle disputes or issues that may arise during the outsourcing process?",
        answer: "How do you handle disputes or issues that may arise during the outsourcing process?"
    },
    {
        question: "How can I get started with outsourcing my law firm's family law services to your company? How can I get started with outsourcing my law firm's family law services to your company? ",
        answer: "You can get started by contacting us to schedule a consultation. During the consultation, we will discuss your needs and the specific services that you require, and we will provide you with a proposal and a detailed quote for our services."
    },
];


export default Faq;