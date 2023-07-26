import './globals.css'
import React from 'react'
import { Varela } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import ParticlesBg from 'particles-bg'

const inter = Varela({ subsets: ['latin'],weight:'400' })

export const metadata = {
  title: 'The Legal Base',
  description: 'The Legal Base LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        {/* <ParticlesBg color="#1E293B" num={200} type="circle" bg={true} /> */}
        </body>
    </html>
  )
}
