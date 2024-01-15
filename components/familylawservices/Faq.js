import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
    return (
        <FaqBlock data={faqData} subtitle="FREQUENTLY ASKED QUESTIONS" title="TLB’s Family Law Services" />
    )
}

const faqData = [
    {
        question: "What types of family law services do you offer?",
        answer: "We offer a wide range of family law services including divorce, child custody, support, adoption, domestic violence, paternity, mediation, modification of court orders, guardianship, name change and premarital agreements."
    },
    {
        question: "How can outsourcing family law services benefit my law firm?",
        answer: "Outsourcing family law services can benefit your law firm by providing access to specialized knowledge and expertise in these areas, allowing you to focus on your core competencies, and providing cost-effective solutions for managing your workload."
    },
    {
        question: "How do you ensure the quality of the work provided by your attorneys? ",
        answer: "We ensure the quality of the work provided by our attorneys through regular training and professional development, performance evaluations and a quality control process. We also have a team of senior attorneys who review and supervise the work of our junior attorneys."
    },
    {
        question: "How do you handle communication and coordination with my law firm? ",
        answer: `We handle communication and coordination with your law firm through regular phone and email updates, as well as in-person meetings and video conferencing as needed. Our team will also work closely with your firm to establish clear expectations and timelines for the work that we will be doing.`
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
        answer: "We handle disputes or issues that may arise during the outsourcing process by communicating openly and honestly with our clients, and by working together to find a resolution that is fair for all parties involved."
    },
    {
        question: "How can I get started with outsourcing my law firm's family law services to your company? How can I get started with outsourcing my law firm's family law services to your company? ",
        answer: "You can get started by contacting us to schedule a consultation. During the consultation, we will discuss your needs and the specific services that you require, and we will provide you with a proposal and a detailed quote for our services."
    },
];


export default Faq;