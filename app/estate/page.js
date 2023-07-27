"use client"
import React from 'react';
import Hero from '@/components/estate/Hero';
import Second from '@/components/estate/Second';
import Third from '@/components/estate/Third';
import Third2 from '@/components/estate/Third2';
import Four from '@/components/estate/Four';
import Faq from '@/components/estate/Faq';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    <Second></Second>
    <Third></Third>
    <Four></Four>
    <Third2></Third2>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page