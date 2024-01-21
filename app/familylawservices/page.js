import React from 'react';
import Hero from '@/components/familylawservices/Hero';
import Second from '@/components/familylawservices/Second';
import Third from '@/components/familylawservices/Third';
import Four from '@/components/familylawservices/Four';
import Faq from '@/components/familylawservices/Faq';

export const metadata = {
  title: "Outsourced Family Law Services | TLB",
  description: "TLB LPO provides you with experienced and skilled specialist resources working in your time zone to deliver cost savings and better efficiency by sharing your workload on Family Law cases.",
  alternates: {
    canonical: "/familylawservices"
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