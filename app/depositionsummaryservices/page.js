"use client"
import React from 'react';
import Hero from '@/components/depositionsummaryservices/Hero';
// import Second from '@/components/depositionsummaryservices/Second';
// import New from '@/components/depositionsummaryservices/New';
import Third from '@/components/depositionsummaryservices/Third';
import Four from '@/components/depositionsummaryservices/Four';
import Faq from '@/components/depositionsummaryservices/Faq';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    {/* <Second></Second>
    <New></New> */}
    <Third></Third>
    <Four></Four>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page