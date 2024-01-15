import React from 'react'
import FaqBlock from '../UI/FAQ';

export const Faq = () => {
  return (
    <FaqBlock data={faqData} subtitle="HOW IT WORKS" title="Frequently Asked Questions" />
  )
}


const faqData = [
  {
    question: "Are your paralegal experts trustable?",
    answer: "At TLB, we pride ourselves on the expertise of our paralegal team. We understand that entrusting your legal matters to someone else can be a difficult decision, which is why we offer a no-risk, post-pay trial period. This allows you to see for yourself the high level of skill and proficiency our paralegals possess before committing to a long-term partnership. And you don't need to take our word for it, just give it a try and see the difference it makes to your business."
  },
  {
    question: "What is the payment model that TLB follows?",
    answer: "We believe in transparency and fairness, which is why we offer a free trial period, post-pay. This means that you only pay for the work that has been completed after the trial period and only if you're satisfied with it. Once you've decided to continue working with us, you'll pre-pay for your chosen expert(s)."
  },
  {
    question: "How easy is it to scale up or down?",
    answer: "At TLB, we understand that your business needs may change, which is why we make it easy for you to scale up or down as needed. All you need to do is shoot us an email or contact your client account manager (CAM) with your new requirements. We'll arrange more interviews, and you can take on new experts as needed. Downsizing is just as simple, just let us know and we'll take care of the rest."
  },
  {
    question: "Does TLB offer any free trial? If yes, for how long?",
    answer: "Our free trial period is a week-long, with no strings attached. You don't pay a cent for a week's worth of work, and you're free to walk away if you're not satisfied with the results. Your payment begins only when you sign a contract for a long-term relationship."
  },
  {
    question: "Can I first test the paralegal expert before I hire them?",
    answer: "We understand the importance of finding the right fit for your business, which is why we offer the opportunity to test our experts before deciding. We can arrange video calls or tests for you to evaluate their skills, expertise, and language proficiency."
  },
  {
    question: "Will my data be safe with TLB?",
    answer: "At TLB, we take data security very seriously. We have a robust system in place that complies with the EU's GDPR, Canada's PIPEDA, and the US ECPA. Additionally, all our employees sign a mandatory non-disclosure agreement (NDA) to ensure the protection of your sensitive information. Rest assured that with TLB, your data is in safe hands."
  }
];



export default Faq;