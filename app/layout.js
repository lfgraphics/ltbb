import './globals.css';
import React from 'react';
import { Varela } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Varela({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'TLB',
  description: 'TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations',
  openGraph: {
    title: "TLB",
    type: 'website',
    url: 'https://thelegalbase.com',
    description: 'TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations',
    images: ['/TlbLogoY.png'],
    site_name: 'The Legal Base',
    imageWidth: 1000,
    imageHeight: 1000,
  },
  conical: "https://kaifkhan.com"
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
