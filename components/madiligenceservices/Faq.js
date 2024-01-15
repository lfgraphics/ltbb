import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
  return (
    <FaqBlock data={faqData} subtitle="HOW IT WORKS" title="FREQUENTLY ASKED QUESTIONS" />
  )
}
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