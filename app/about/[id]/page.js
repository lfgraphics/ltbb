"use client"
import React from "react"

import AboutProfile from "@/components/about/aboutProfile"
export default function Home({ params }) {
 

    





    return (
        <React.Fragment>
          
          {/* <AboutThird id={params.id}></AboutThird> */}
          <AboutProfile id={params.id}></AboutProfile>
       {/* <RigisterWorkshop params={params.id}></RigisterWorkshop> */}
        </React.Fragment>
    )
}
