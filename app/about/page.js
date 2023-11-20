"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
import AboutHero from '@/components/about/AboutHero'
import OurStory from "@/components/about/OurStory";
import Operations from "@/components/about/Operations";
import LegalSoftwares from "@/components/about/LegalSoftwares";
import HowYourProjectsDone from "@/components/about/HowYourProjectsDone";
import WhyClientTrust from "@/components/about/WhyClientTrust";
import LeaderShipTeam from "@/components/about/LeaderShipTeam";
import OurMissionAndVisions from "@/components/home/OurMissionAndVisions";
const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 500,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <Operations />
      <LegalSoftwares />
      <div className="pt-10 bg-white">
        <OurMissionAndVisions />
      </div>
      <HowYourProjectsDone />
      <WhyClientTrust />
      <LeaderShipTeam />
    </div>
  )
}

export default page