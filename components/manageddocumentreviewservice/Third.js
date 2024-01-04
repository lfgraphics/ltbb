"use client"
import React from "react";

import ThreeDCard from "../UI/ThreeDCards";


const data = [
  {
    title: "Expertise and Specialization",
    description: "TLB specializes in document review processes and has expertise in handling large volumes of documents. They have experienced professionals who are trained in efficient review techniques, legal standards, and relevant technologies. Outsourcing to TLB ensures that the document review is conducted by knowledgeable experts who can accurately identify relevant information and make informed determinations."
  },
  {
    title: "Scalability and Flexibility",
    description: "Document review needs can vary significantly from case to case. Outsourcing to TLB allows for easy scalability and flexibility in resource allocation. Service providers can quickly assemble a team of reviewers or adjust the team size based on the volume and urgency of the documents to be reviewed. This scalability ensures that the review process is efficient and completed within the required timelines."
  },
  {
    title: "Cost Efficiency",
    description: "Outsourcing managed document review to TLB can be cost-effective compared to conducting the review in-house. It eliminates the need for law firms or legal departments to invest in additional staff, technology infrastructure, or software licenses. TLB operates on a project-based or per-document pricing model, allowing for better cost predictability."
  },
  {
    title: "Access to Advanced Technologies",
    description: "TLB typically leverages advanced eDiscovery technologies, such as predictive coding and machine learning, to streamline the review process. These technologies can help identify relevant documents more accurately and efficiently, saving time and resources."
  },
  {
    title: "Focus on Core Competencies",
    description: "By outsourcing document review to TLB, legal professionals can focus on their core competencies, such as case strategy, client representation, or legal analysis. Outsourcing the time-consuming and resource-intensive document review process allows them to dedicate more time and energy to higher-value tasks that require their specialized expertise."
  },
  {
    title: "Quality Control and Consistency",
    description: "TLB has established quality control processes and protocols to ensure accuracy, consistency, and adherence to legal standards. They employ senior reviewers or quality control specialists to oversee the review work and ensure the highest level of quality and compliance."
  },
  {
    title: "Risk Mitigation",
    description: "Outsourcing the document review process to TLB can help mitigate the risk of errors or omissions. They are experienced in navigating complex legal requirements, ensuring compliance, and maintaining confidentiality and data privacy."
  }
];
export default function Third() {


  return (
    <>
      <ThreeDCard cardData={data} title="            Why Outsource Document Review Services to TLB?" description="            Outsourcing a managed document review service can offer several advantages for law firms, corporations, or legal departments. Here are some key reasons why outsourcing this service is beneficial:" />
    </>
  );
}
