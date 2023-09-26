import React from 'react'
import Banner from '@/components/home/Banner'
import AnimatedShape from '@/components/service/AnimatedShape'
import HomeAchievements from '@/components/home/HomeAchievements'
import LegalSolutions from '@/components/home/LegalSolutions'
import HowWeWork from '@/components/home/HowWeWork'

export default function Home() {
  return (
    <React.Fragment >
      <Banner/>
      <AnimatedShape background="#EFF2FF"/>
      <HomeAchievements/>
      <LegalSolutions/>
      <HowWeWork/>
    </React.Fragment>
  )
}
 