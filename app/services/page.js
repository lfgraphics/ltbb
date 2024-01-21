import React from 'react'
import Landing from '@/components/service/landing'

export const metadata = {
  title: "TLB",
  description: "TLB LPO is a global outsourcing partner which works closely with law firms , attorneys and legal departments of corporations",
  alternates: {
    canonical: "/services"
  },
}

const page = () => {
  return (
    <React.Fragment>
      <Landing></Landing>
    </React.Fragment>
  )
}

export default page