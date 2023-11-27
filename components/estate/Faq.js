import React, { useState } from "react";

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
              <div key={index} className="hover:bg-[#1b2636]">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between w-full p-2 text-left bg-transparent rounded-md focus:outline-none"
                >
                  <span className="w-[90%] md:w-auto text-base lg:text-lg font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 ${
                      expanded[index] ? "transform rotate-180" : ""
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

const ans2 = (
  <div>
    <p>
      The most fundamental step in estate planning is to draft a will. Other
      important estate planning activities include:
    </p>
    <br></br>
    <br></br>
    <ul>
      <li>
        Setting up trust funds in the names of beneficiaries to limit estate
        taxes.
      </li>
      <li>Setting up a guardian for live dependents</li>
      <li>
        appointing an executor of the estate to supervise the will's terms.
      </li>
      <li>
        Adding or changing beneficiaries on life insurance, IRAs, and 401(k)s
      </li>
      <li>Making funeral arrangements</li>
      <li>
        To lower the taxable estate, make yearly gifts to recognized charity and
        non-profit organizations.
      </li>
      <li>
        Creating a lasting power of attorney (POA) to direct other assets and
        investments
      </li>
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
