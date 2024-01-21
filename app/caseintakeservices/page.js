import React from 'react';
import Hero from '@/components/caseintakeservices/Hero';
import Second from '@/components/caseintakeservices/Second';
import Third from '@/components/caseintakeservices/Third';
import Four from '@/components/caseintakeservices/Four';
import Faq from '@/components/caseintakeservices/Faq';


export const metadata = {
  title: ' Outsourced Case Intake Services | The Legal Base',
  description: 'The Legal Base LPO has a team of experts who have rich experience of providing case intake services to law firms and attorneys. ',
  alternates: {
    canonical: "/caseintakeservices"
  },
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Second></Second>
      <Third></Third>
      <Four></Four>
      <Faq></Faq>
    </React.Fragment>
  )
}

export default page