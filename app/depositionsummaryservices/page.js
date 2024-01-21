
import React from 'react';
import Hero from '@/components/depositionsummaryservices/Hero';
// import Second from '@/components/depositionsummaryservices/Second';
// import New from '@/components/depositionsummaryservices/New';
import Third from '@/components/depositionsummaryservices/Third';
import Four from '@/components/depositionsummaryservices/Four';
import Faq from '@/components/depositionsummaryservices/Faq';

export const metadata = {
  title: "Outsourced Deposition Summary Services | TLB",
  description: "TLB LPO’s deposition summaries are a penned outline of the transcripts that make it easy for attorneys and law firms to gain access to the relevant information that increases the possibility of winning a case.",
  alternates: {
    canonical: "/depositionsummaryservices"
  },
}

const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Third></Third>
      <Four></Four>
      <Faq></Faq>
    </React.Fragment>
  )
}

export default page