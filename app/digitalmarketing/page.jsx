import React from 'react';
import Hero from '@/components/digitalmarketing/Hero';
import Second from '@/components/digitalmarketing/Second';
import Third from '@/components/digitalmarketing/Third';
import Four from '@/components/digitalmarketing/Four';
import Faq from '@/components/digitalmarketing/Faq';

export const metadata = {
  title: "Digital Marketing Services | TLB",
  description: " TLB’s outsourced digital marketing services allow law firms and attorneys in achieving their social media and digital footprint objectives through bespoke plans and purpose-driven campaigns."
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

export default page;