import React from 'react';
import Hero from '@/components/paralegalservices/Hero';
import Second from '@/components/paralegalservices/Second';
import Third from '@/components/paralegalservices/Third';
import Four from '@/components/paralegalservices/Four';

export const metadata = {
  title: " Outsourced Paralegal Services | TLB",
  description: "TLB LPO provides you with experienced and skilled paralegal resources working in your time zone to deliver cost savings and better efficiency by sharing your workload."
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Second></Second>
      <Third></Third>
      <Four></Four>
    </React.Fragment>
  )
}

export default page