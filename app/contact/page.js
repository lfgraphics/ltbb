import React from 'react';
import Contact from '@/components/contactus/contact'

export const metadata = {
  title: "Contact Us | The Legal Base",
  description: "TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations",
  alternates: {
    canonical: "/contact"
  },
}

const page = () => {
  return (
    <React.Fragment>
      <Contact />
    </React.Fragment>
  )
}

export default page;