"use client"
import React, { useState } from 'react';
import FaqBlock from '../UI/FAQ';

const ipAnalyticsData = [
    {
        question: "What do we offer in IP Analytics?",
        lists: [
            "Prior Art Search",
            "Patentability Analysis",
            "Patent Infringement & Analysis",
            "Patent Mapping",
            "Patent Drafting & Prosecution",
            "IP Due Diligence & IP Audit"
        ]
    },
    {
        question: "What do we offer in Prior Art Search",
        lists: [
            "Patentability Search",
            "State of Art Search",
            "Patent Invalidation Search",
            "Infringement Search",
            "Freedom to Operate"
        ]
    },
    {
        question: "What do we offer in Patent Watch?",
        answer: "There is an irrational desire to keep a close eye on whether any of the rivals have introduced a product that infringes on the client's patents. It is also critical to investigate what other rivals are doing to innovate. Changes in the office actions of strong rival patents can sometimes help the client prepare strong post-grant opposition filings.\n",
    },
    {
        question: "What do we offer in Patent Drafting, Illustrations & Translation?",
        answer: "Using the standardized invention disclosure form template, the domain expert collects the inventor's invention information. The domain expert then develops the patent application in accordance with PTO criteria. The casual sketches/photographs are transformed into precise and professional AutoCAD drawings that adhere to patent office rules. After that, the patent application is filed with the PTO. The patent's renewals are monitored throughout its existence. From the time the patent is filed until it expires, all communications (office activities) with the patent office are managed."
    },
    {
        question: "What do we offer in IP consulting services?",
        lists: [
            "IP Strategy & Policy Formulation",
            "IP Portfolio Creation & Management",
            "IP Valuation & Licensing"
        ]
    },
    {
        question: "What do we offer in Landscape analysis services?",
        answer: "\n" +
            "It gathers business intelligence from technological activity occurring in a certain technological domain. Among the projected areas are innovation trends, R&D regions, and possible markers. It is possible to identify strong rival patents. Possibilities for purchase can also be found.\n"
    },
    {
        question: "What do we offer in Patent Portfolio Analysis, Patent Licensing & Monetization services?",
        answer: "The licensing approach can unlock monetary value from IP assets. Patent licensing provides firms with a consistent way to boost the bottom lines of their separate technology business divisions. Patent licensing is possible in several locations. Consultants from TLB have aided technology leaders in effectively completing inter-company and intra-company license agreements.",
    },
    {
        question: "What do we offer in Open-Source License Compliance?",
        answer: "Software firms all around the world have been employing a variety of third-party open-source libraries to accelerate the delivery of their products. However, there are some hazards associated with this. There are several open-source licenses, and firms must follow the terms and conditions of these licensing agreements.\n" +
            "\n",
    },
    {
        question: "What do we offer in docketing and administrative support?\n",
        answer: "Through its Certified systems and procedures, TLB’s IP professionals provides end-to-end docketing and administrative assistance. Data saved on IPMS is utilized for decision-making purposes including renewals, M&A, and overall IP protection. It is vital that this information be correct and up to date. Our team provides extra external support to your IP administration staff in order to assist them in managing all IP-related administrative responsibilities.\n"
    }
];


const Faq = () => {
    return (
        <FaqBlock data={ipAnalyticsData} subtitle="HOW IT WORKS" title="Frequently Asked Questions" />
    )
}

export default Faq;