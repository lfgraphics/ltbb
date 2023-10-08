"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/home/Banner";
import HomeAchievements from "@/components/home/HomeAchievements";
import LegalSolutions from "@/components/home/LegalSolutions";
import HowWeWork from "@/components/home/HowWeWork";
import OurMissionAndVisions from "@/components/home/OurMissionAndVisions";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 500,
    });
  });
  return (
    <section className="overflow-hidden">
      <Banner />
      <HomeAchievements />
      <LegalSolutions />
      <HowWeWork />
      <OurMissionAndVisions />
      <BlogSection />
      <Testimonials />
      <ContactSection />
    </section>
  );
}
