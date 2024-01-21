import './globals.css';
import React from 'react';
import { Varela } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Varela({ subsets: ['latin'], weight: '400' })

export const metadata = {
  metadataBase: new URL("https://tlb-ten.vercel.app/"),
  title: 'TLB',
  description: 'TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations',
  openGraph: {
    type: 'website',
    url: 'https://tlb-ten.vercel.app/',
    description: 'TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations',
    images: {
      type: "image/png",
      url: '/TlbLogoY.png',
      width: 256,
      height: 256,
      alt: 'The Legal Base',
      itemprop: "image"
    },
    site_name: 'The Legal Base',
  },
  alternates: {
    canonical: "/"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        {/* <ParticlesBg color="#1E293B" num={200} type="circle" bg={true} /> */}
      </body>
    </html>
  )
}
