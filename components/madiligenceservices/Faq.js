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
    question: "What is M&A due diligence?",
    answer: "M&A due diligence is a process of investigating a potential acquisition target to help the acquirer make informed decisions. This process can uncover potential issues, such as legal liabilities or operational inefficiencies, that may have a material impact on the target's value."
  },
  {
    question: "Why is M&A due diligence important?",
    answer: "M&A due diligence is important because it helps businesses identify potential risks and opportunities associated with an acquisition, as well as any issues that could impact the success of the deal. It also helps businesses determine the fair market value of the target and negotiate more favorable terms for the transaction."
  },
  {
    question: "What services do you offer for M&A due diligence?",
    answer: "We offer a wide range of M&A due diligence services, including financial, operational, legal, and tax due diligence, as well as valuation and integration planning."
  },
  {
    question: "How long does the M&A due diligence process take?",
    answer: "The length of the M&A due diligence process can vary depending on the size and complexity of the target company and the scope of the investigation. However, we work closely with our clients to ensure that the process is completed in a timely manner."
  },
  {
    question: "What is the cost of M&A due diligence services?",
    answer: "The cost of M&A due diligence services can vary depending on the scope of the investigation and the specific services required. We will provide you with a detailed proposal outlining the cost of services after the initial consultation."
  },
  {
    question: "How do you ensure the confidentiality of the information provided during the M&A due diligence process?",
    answer: "We understand the importance of maintaining the confidentiality of the information provided during the M&A due diligence process. We have strict security measures in place to protect the information provided by our clients. We also execute Non-Disclosure Agreements with our clients."
  },
  {
    question: "Can you provide references or case studies of previous M&A due diligence engagements you have completed?",
    answer: "Yes, we would be happy to provide references or case studies of previous M&A due diligence engagements we have completed. Please contact us for more information."
  },
];



export default Faq;