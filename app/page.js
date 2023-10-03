import React from "react";
import Banner from "@/components/home/Banner";
import AnimatedShape from "@/components/service/AnimatedShape";
import HomeAchievements from "@/components/home/HomeAchievements";
import LegalSolutions from "@/components/home/LegalSolutions";
import HowWeWork from "@/components/home/HowWeWork";
import OurMissionAndVisions from "@/components/home/OurMissionAndVisions";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <HomeAchievements />
      <LegalSolutions />
      <HowWeWork />
      <OurMissionAndVisions />
      <BlogSection />
      <Testimonials />
      <ContactSection/>
    </React.Fragment>
  );
}
