import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
  return (
    <FaqBlock data={faqData} subtitle="HOW IT WORKS" title="FREQUENTLY ASKED QUESTIONS" />
  )
}

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