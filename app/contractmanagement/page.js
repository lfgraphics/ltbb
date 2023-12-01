import React from 'react';
import Hero from '@/components/contractmanagement/Hero';
import Second from '@/components/contractmanagement/Second';
import Third from '@/components/contractmanagement/Third';
import Third1 from '@/components/contractmanagement/Third1';
import Four from '@/components/contractmanagement/Four';
import Faq from '@/components/contractmanagement/Faq';

export const metadata = {
  title: ' Contract Lifecycle Management | TLB',
  description: 'TLB LPO provides you with the best contract lifecycle management services by assisting you in achieving your objectives and shortening your time-to-contract. ',
}
const page = () => {
  return (
    <>
      <Hero />
      <Second />
      <Third />
      <Third1 />
      <Four />
      <Faq />
    </>
  )
}

export default page