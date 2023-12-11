import React from 'react';
import Hero from '@/components/personalinjury/Hero';
import Second from '@/components/personalinjury/Second';
import Third from '@/components/personalinjury/Third';
import Four from '@/components/personalinjury/Four';
import Faq from '@/components/personalinjury/Faq';

export const metadata = {
  title: "Outsourced Personal Injury Services | TLB",
  description: "TLB LPO is a trusted service provider to personal injury law firms, offering outsourced personal injury support services. "
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