"use client"
import React from 'react';
import Hero from '@/components/litigationsupport/Hero';
import Second from '@/components/litigationsupport/Second';
import Third from '@/components/litigationsupport/Third';
// import Four from '@/components/litigationsupport/Four';
// import Faq from '@/components/litigationsupport/Faq';
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