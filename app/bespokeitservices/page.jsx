import React from 'react';
import Hero from '@/components/bespokeitservices/Hero';
import Fifth from "@/components/bespokeitservices/Fifth"
import Second from '@/components/bespokeitservices/Second';
import Third from '@/components/bespokeitservices/Third';
import Four from '@/components/bespokeitservices/Four';
import Faq from '@/components/bespokeitservices/Faq';

export const metadata = {
    title: "Outsourced Legal IT Services | TLB",
    description: "TLB is a one-stop shop for all your IT requirements. We have an expert team of IT professionals who can assist you at every phase of the bespoke software delivery.",
    alternates: {
        canonical: "/bespokeitservices"
    },
}

const page = () => {
    return (
        <React.Fragment>
            <Hero />
            <Fifth />
            <Second />
            <Third />
            <Four />
            <Faq />
        </React.Fragment>
    )
}

export default page;