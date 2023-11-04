"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
import AboutHero from '@/components/about/AboutHero'
import OurStory from "@/components/about/OurStory";
import Operations from "@/components/about/Operations";
import LegalSoftwares from "@/components/about/LegalSoftwares";
const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 500,
    });
  });
  return (
    <>
      <AboutHero />
      <OurStory />
      <Operations />
      <LegalSoftwares />
    </>
  )
}

export default page