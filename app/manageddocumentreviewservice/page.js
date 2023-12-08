import React from 'react';
import Hero from '@/components/manageddocumentreviewservice/Hero';
import Second from '@/components/manageddocumentreviewservice/Second';
import Third from '@/components/manageddocumentreviewservice/Third';
import Four from '@/components/manageddocumentreviewservice/Four';
export const metadata = {
  title: "Outsourced Managed Doc Review Services | TLB",
  description: " TLB LPO’s legal consulting solutions include eDiscovery and document review services to help legal teams navigate the complex world of electronic data. "
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