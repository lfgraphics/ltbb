"use client"
import React from 'react';
import Hero from '@/components/familylawservices/Hero';
import Second from '@/components/familylawservices/Second';
import Third from '@/components/familylawservices/Third';
import Four from '@/components/familylawservices/Four';
import Faq from '@/components/familylawservices/Faq';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    <Second></Second>
    <Third></Third>
    <Four></Four>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page