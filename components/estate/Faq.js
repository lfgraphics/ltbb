import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
  return (
    <FaqBlock data={faqData} subtitle="HOW IT WORKS" title="FREQUENTLY ASKED QUESTIONS" />
  )
}
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
