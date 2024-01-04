import React from 'react';
import Hero from '@/components/madiligenceservices/Hero';
import Second from '@/components/madiligenceservices/Second';
import Third from '@/components/madiligenceservices/Third';
import Four from '@/components/madiligenceservices/Four';
import Faq from '@/components/madiligenceservices/Faq';
export const metadata = {
  title: "M&A Due Diligence Services | TLB\n",
  description: "\n" +
      "Our team of experienced professionals at TLB has the expertise and knowledge necessary to conduct a thorough and comprehensive M&A due diligence investigation. We work closely with our clients to understand their specific needs and tailor our services accordingly. \n"
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Second></Second>
      <Third></Third>
      <Four></Four>
        <Faq/>
    </React.Fragment>
  )
}

export default page