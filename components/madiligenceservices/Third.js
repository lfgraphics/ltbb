"use client"
import React from "react";
import ThreeDCard from "../UI/ThreeDCards";


const data = [
  {
    title: "Amped-up Accuracy",
    description: "At TLB, we take a data-driven approach to potential deals and negotiations, thereby giving you the upper hand in making successful Mergers & Acquisitions. Our team of experts analyses financial data, industry trends, and other relevant information to help you make informed decisions."
  },
  {
    title: "Zero Tribunal",
    description: "We take great pride in our track record of having a high success rate and a growing track record of protecting our clients from tribunals and litigation. Our team is well-versed in legal and regulatory compliance, and we work tirelessly to ensure that our clients are protected from any potential legal issues."
  },
  {
    title: "360-degree Support",
    description: "No matter the magnitude of the risk associated with the deal, our team is capable of coming up with a strategy or a slight adjustment to make it work. We provide end-to-end support from the initial consultation to post-closing, ensuring that you have all the support you need to make your M&A transaction a success."
  },
  {
    title: "Proven Experience",
    description: "Our team has decades of combined experience in the M&A field, having successfully completed numerous M&A transactions. We bring that experience to every engagement, providing our clients with a deep understanding of the M&A process and best practices."
  },
  {
    title: "Cost-effective Solutions",
    description: "We understand the importance of keeping costs low during the M&A process. We work with our clients to understand their budget constraints and provide cost-effective solutions that deliver value without breaking the bank."
  },
  {
    title: "Transparent Communication",
    description: "We believe in transparent communication throughout the M&A process. Our team will keep you informed every step of the way, providing regular updates on our progress and answering any questions you may have."
  }
];

export default function Third() {

  return (
    <>
      <ThreeDCard cardData={data} title="Why outsource M&A Diligence Services to TLB" description="Our team of experienced professionals has the expertise and knowledge necessary to conduct a thorough and comprehensive M&A due diligence investigation. We work closely with our clients to understand their specific needs and tailor our services accordingly. Contact us today to learn more about how we can help you make informed decisions about your next M&A transaction." />
    </>
  );
}
