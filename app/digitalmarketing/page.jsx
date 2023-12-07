"use client"
import React from 'react';
import Hero from '@/components/digitalmarketing/Hero';
import Second from '@/components/digitalmarketing/Second';
import Third from '@/components/digitalmarketing/Third';
import Four from '@/components/digitalmarketing/Four';
import Faq from '@/components/digitalmarketing/Faq';
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