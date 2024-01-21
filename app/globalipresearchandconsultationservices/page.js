import React from 'react';
import Hero from '@/components/globalipresearchandconsultationservices/Hero';
import Second from '@/components/globalipresearchandconsultationservices/Second';
import Third from '@/components/globalipresearchandconsultationservices/Third';
import Four from '@/components/globalipresearchandconsultationservices/Four';
import Faq from '@/components/globalipresearchandconsultationservices/Faq';


export const metadata = {
  title: " IP Research and Consultation services | TLB",
  description: " TLB is a one-stop-shop for all your IP Research and Consultation needs providing vital support at each stage of the patent lifecycle.",
  alternates: {
    canonical: "/globalipresearchandconsultationservices"
  },
}
const page = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Second></Second>
      <Third></Third>
      {/*<Four></Four>*/}
      <Faq></Faq>
    </React.Fragment>
  )
}

export default page