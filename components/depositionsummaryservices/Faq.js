"use client"
import React, { useState } from 'react';

const Faq = () => {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const toggleExpand = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };


  return (
    <React.Fragment>
      <section className="bg-[#1E293B] text-gray-100 mt-4 mx-auto w-full">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            TLB’s Deposition Summary Services
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            {faqData.map((item, index) => (
              <div key={index} className=" ">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between w-full p-2 text-left bg-transparent hover:bg-[#1b2636] rounded-md focus:outline-none"
                >
                  <span className="w-[90%] md:w-auto text-base lg:text-lg font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 ${expanded[index] ? "transform rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expanded[index] && (
                  <div className="mt-2 p-4 bg-transparent hover:bg-[#1b2636] rounded-md">
                    <p className="text-sm lg:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const faqData = [
  {
    question: "What is a deposition summary?",
    answer:
      "A deposition summary is a written document that summarizes the key points and testimony from a deposition, which is a formal statement given by a witness under oath in a legal proceeding.",
  },
  {
    question: "Why do I need a deposition summary?",
    answer:
      "A deposition summary can be useful for a variety of purposes, such as:\n Reviewing the testimony of a witness in preparation for a court case \nUnderstanding the key points and arguments made during a deposition \nProviding an overview of a deposition for people who were not present at the time it was taken",
  },
  {
    question: "How do you prepare a deposition summary?",
    answer:
      "Our team of legal professionals reviews the transcript of the deposition and extracts the key points and testimony. We then organize this information in a logical and coherent manner and prepare a written summary of the deposition. We review and edit the summary to ensure that it is accurate and complete before providing it to the client.",
  },
  {
    question: "How long does it take to prepare a deposition summary?",
    answer:
      "The length of time it takes to prepare a deposition summary depends on the length and complexity of the deposition. In general, the longer and more complex the deposition, the longer it will take to prepare the summary.",
  },
  {
    question: "What format do you provide the deposition summary in?",
    answer:
      "We can provide the deposition summary in a variety of formats, including as a written document, an electronic file (such as a PDF or Word document), or in another format as requested by the client.",
  },
  {
    question: "Is the information in the deposition summary confidential?",
    answer:
      "Yes, the information in the deposition summary is confidential and will only be shared with the client.",
  },
];

export default Faq;
