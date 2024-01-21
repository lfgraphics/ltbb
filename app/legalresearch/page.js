import React from 'react';
import Hero from '@/components/legalresearch/Hero';
// import Second from '@/components/legalresearch/Second';
import Third from '@/components/legalresearch/Third';
import Third2 from '@/components/legalresearch/Third2';
import Four from '@/components/legalresearch/Four';
import Faq from '@/components/legalresearch/Faq';

export const metadata = {
  title: "Legal Research Services for Law Firms | TLB",
  description: "TLB’s Legal Research team can help you in providing accurate solutions, analyze statutes and case studies to ensure that all your legal issues are taken care of accordingly.",
  alternates: {
    canonical: "/legalresearch"
  },
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      {/* <Second></Second> */}
      {/* <Third></Third> */}
      <Third2></Third2>
      <Four></Four>
      <Faq></Faq>
    </React.Fragment>
  )
}

export default page