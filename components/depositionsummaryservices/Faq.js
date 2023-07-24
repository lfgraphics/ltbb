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
            TLB’s Deposition Summary Services
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
    question: "What is a deposition summary?",
    answer: "A deposition summary is a written document that summarizes the key points and testimony from a deposition, which is a formal statement given by a witness under oath in a legal proceeding."
  },
  {
    question: "Why do I need a deposition summary?",
    answer: 'A deposition summary can be useful for a variety of purposes, such as:\n Reviewing the testimony of a witness in preparation for a court case \nUnderstanding the key points and arguments made during a deposition \nProviding an overview of a deposition for people who were not present at the time it was taken'
  },
  {
    question: "How do you prepare a deposition summary?",
    answer: "Our team of legal professionals reviews the transcript of the deposition and extracts the key points and testimony. We then organize this information in a logical and coherent manner and prepare a written summary of the deposition. We review and edit the summary to ensure that it is accurate and complete before providing it to the client."
  },
  {
    question: "How long does it take to prepare a deposition summary?",
    answer: "The length of time it takes to prepare a deposition summary depends on the length and complexity of the deposition. In general, the longer and more complex the deposition, the longer it will take to prepare the summary."
  },
  {
    question: "What format do you provide the deposition summary in?",
    answer: "We can provide the deposition summary in a variety of formats, including as a written document, an electronic file (such as a PDF or Word document), or in another format as requested by the client."
  },
  {
    question: "Is the information in the deposition summary confidential?",
    answer: "Yes, the information in the deposition summary is confidential and will only be shared with the client."
  }
];


export default Faq;