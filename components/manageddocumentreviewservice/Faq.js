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
    question: "What is eDiscovery and how does it work?",
    answer: "eDiscovery, short for electronic discovery, is the process of identifying, collecting, and reviewing electronic data for use in legal proceedings. This can include emails, documents, and other forms of electronic data. The eDiscovery process typically begins with a preservation and collection phase, followed by a review and analysis phase, and ends with the production of relevant documents as evidence."
  },
  {
    question: "What types of data can be included in an eDiscovery process?",
    answer: "eDiscovery can include a wide range of electronic data, such as emails, documents, images, audio and video files, social media posts, and other forms of electronic data."
  },
  {
    question: "How does eDiscovery differ from traditional document review?",
    answer: "Traditional document review typically involves manually reviewing physical documents, while eDiscovery involves the review of electronic data. eDiscovery also usually involves more advanced technology, such as software for processing and analyzing large amounts of data, and may involve a broader range of data types."
  },
  {
    question: "How can I be sure that my electronic data is secure during the eDiscovery process?",
    answer: "At TLB, we take the security of your electronic data extremely seriously. We use the latest security measures and protocols to ensure that your data is protected at all times."
  },
  {
    question: "How long does an eDiscovery process typically take?",
    answer: "The length of an eDiscovery process can vary depending on the complexity of the case and the amount of data to be reviewed. However, our goal is to deliver results as quickly as possible while ensuring the accuracy of the process."
  },
  {
    question: "How much does an eDiscovery process typically cost?",
    answer: "The cost of an eDiscovery process can vary depending on the complexity of the case and the amount of data."
  }
];


export default Faq;