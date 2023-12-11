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

const ans2 = (
  <div>
    <p>
      The most fundamental step in estate planning is to draft a will. Other
      important estate planning activities include:
    </p>
    <br></br>
    <br></br>
    <ul>
      <li>Setting up trust funds in the names of beneficiaries to limit estate taxes.</li>
      <li>Setting up a guardian for live dependents</li>
      <li>appointing an executor of the estate to supervise the will's terms.</li>
      <li>Adding or changing beneficiaries on life insurance, IRAs, and 401(k)s</li>
      <li>Making funeral arrangements</li>
      <li>To lower the taxable estate, make yearly gifts to recognized charity and non-profit organizations.</li>
      <li>Creating a lasting power of attorney (POA) to direct other assets and investments</li>
    </ul>
  </div>
);

const faqData = [
  {
    question: "What is estate planning?",
    answer:
      "Estate planning is the preparation of activities to manage a person's asset base in the case of incapacity or death. The planning covers the distribution of assets to heirs as well as the payment of estate taxes. Most estate plans are created with the assistance of an estate law practitioner.\n\nHouses, automobiles, stocks, artwork, life insurance, pensions, and debt are examples of assets that might be included in an individual's estate. Individuals plan their estates for a variety of purposes, including maintaining family wealth, caring for a surviving spouse and children, supporting children's or grandchildren's education, or leaving a philanthropic legacy.",
  },
  {
    question: "What are the steps involved in Estate Planning?",
    answer: ans2,
  },
];

export default Faq;
