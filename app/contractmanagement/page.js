"use client"
import React from 'react';
import Hero from '@/components/contractmanagement/Hero';
import Second from '@/components/contractmanagement/Second';
import Third from '@/components/contractmanagement/Third';
import Third1 from '@/components/contractmanagement/Third1';
import Four from '@/components/contractmanagement/Four';
import Faq from '@/components/contractmanagement/Faq';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    <Second></Second>
    <Third></Third>
    <Third1></Third1>
    <Four></Four>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page