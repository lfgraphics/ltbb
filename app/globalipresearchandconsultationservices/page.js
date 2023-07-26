"use client"
import React from 'react';
import Hero from '@/components/globalipresearchandconsultationservices/Hero';
import Second from '@/components/globalipresearchandconsultationservices/Second';
import Third from '@/components/globalipresearchandconsultationservices/Third';
import Four from '@/components/globalipresearchandconsultationservices/Four';
import Faq from '@/components/globalipresearchandconsultationservices/Faq';
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