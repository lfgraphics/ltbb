import React from 'react';
import Hero from '@/components/litigationsupport/Hero';
import Second from '@/components/litigationsupport/Second';
import Third from '@/components/litigationsupport/Third';
// import Four from '@/components/litigationsupport/Four';
// import Faq from '@/components/litigationsupport/Faq';

export const metadata = {
  title: "Outsourced Litigation Support Services | TLB",
  description: " TLB LPO’s dependable team of Litigation Support professionals work to guarantee that everything they do drives optimum efficiency to your law firm."
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Second></Second>
      <Third></Third>
      {/* <Four></Four> */}
      {/* <Faq></Faq> */}
    </React.Fragment>
  )
}

export default page