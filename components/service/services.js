import React from "react";
import "./style.css";
import Link from "next/link";
import AnimatedShape from "./AnimatedShape";
const services = () => {
  const servicesData = [
    {
      title: "Case Intake Services",
      desc: "The Legal Base LPO is a leading legal intake service provider and has helped several attorneys and practices grow their businesses and be successful in the competitive marketplace. We provide high-quality legal intake solutions that are customised to your exact needs and requirements.",
      href: "/caseintakeservices",
    },
    {
      title: "Contract Management",
      desc: "Contract lifecycle management (CLM) service refers to the management of contracts throughout their entire lifecycle, from creation and negotiation to execution, renewal, and termination. CLM services involve the use of software, tools, and processes to streamline and automate various contract management activities.",
      href: "/contractmanagement",
    },
    {
      title: "Deposition Summary Services",
      desc: "Deposition summary services are professional services that provide concise summaries of legal depositions. A deposition is a sworn out-of-court testimony given by a witness or a party to a lawsuit, typically recorded by a court reporter. These depositions are an essential part of the discovery process in litigation, as they allow both sides to gather information and evidence.",
      href: "/depositionsummaryservices",
    },
    {
      title: "Estate Planning Services",
      desc: "Estate planning services are professional services provided by attorneys, financial advisors, or estate planners to help individuals and families plan for the management and distribution of their assets upon death or incapacity. Estate planning involves making important decisions regarding the transfer of wealth, minimizing taxes, protecting assets, and ensuring that the wishes of the individual are carried out.",
      href: "/estateplanning",
    },
    {
      title: "Family Law Services",
      desc: "Outsourced family law services refer to the practice of engaging external professionals or organizations to provide family law-related services on behalf of individuals or entities. Instead of hiring in-house legal staff, outsourcing to TLB allows law firms or attorneys to access specialized expertise and resources.",
      href: "/familylawservices",
    },
    {
      title: "Global Immigration Management Services",
      desc: "Global Immigration Management Services refers to the comprehensive range of services provided by specialized companies or organizations to assist individuals, families, and businesses with their immigration and mobility needs on a global scale. These services encompass various aspects of the immigration process, including legal, administrative, and logistical support.",
      href: "/globalimmigration",
    },
    {
      title: "Global IP Research And Consultation Services",
      desc: "Our diverse team combines depth of expertise with cutting-edge technological knowledge to give our clients the greatest overall package. Our intellectual property advisors have excellent technical credentials as well as considerable legal and business expertise. Our team members, comprising of Patent Agents and Patent Attorneys, are highly trained and certified in a variety of technological fields.",
      href: "/href",
    },
    {
      title: "Legal Research Services",
      desc: "TLB offers multinational organizations and law firms like yours personalized and cost-effective legal research solutions. Our legal research outsourcing services help you make critical business choices, and we are dedicated to acting as an extension of your legal departments. Essentially, becoming a one-stop shop for all of your legal research needs.",
      href: "/legalresearch",
    },
    {
      title: "Litigation Support",
      desc: "Our litigation support experts provide you with optimum solutions and ensure the highest accuracy levels in the assignments. The litigation support services can vary from assisting the attorneys, law firms, and general counsels in their day-to-day tasks like records retrieval process, e-discovery process, data processing, and data management or supporting them with technical assistance, marketing, or advertising.",
      href: "/litigationsupport",
    },
    {
      title: "M&A Diligence Services",
      desc: "M&A diligence services can provide businesses with a deeper understanding of a potential acquisition target, enabling them to make more informed decisions about the deal and potentially negotiate more favourable terms.",
      href: "/href",
    },
    {
      title: "Managed Document Review Services",
      desc: "A managed document review service is a professional service that assists law firms, corporations, or legal departments in reviewing large volumes of documents for litigation, regulatory compliance, investigations, or other legal purposes. It involves the systematic analysis and categorization of documents to identify relevant information and determine their significance to a particular case or matter.",
      href: "/manageddocumentreviewservice",
    },
    {
      title: "Paralegal Services",
      desc: "Paralegal services involve the assistance and support provided by paralegals to lawyers, law firms, and legal departments in various legal tasks. Paralegals, also known as legal assistants, are trained professionals who work under the supervision of lawyers to help them with legal work, research, and administrative tasks. While paralegals cannot provide legal advice or represent clients in court, they play a crucial role in the legal process and contribute significantly to the efficiency and effectiveness of legal services.",
      href: "/paralegalservices",
    },
    {
      title: "Personal Injury Services",
      desc: "Outsourced personal injury support services involve engaging third-party providers like TLB to assist law firms and attorneys in handling various tasks and responsibilities related to personal injury cases. These services are designed to streamline processes, improve efficiency, and enhance the overall management of personal injury claims.",
      href: "/personalinjury",
    },
  ];
  return (
    <React.Fragment>
      <AnimatedShape isBg />

      <section className="lj tp kr">
        {/* Section Title Start */}
        <div x-data="{ sectionTitle: `We Offer The Best Quality Service for You`, sectionTitleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}">
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            >
              We Offer The Best Quality Service for You
            </h2>
            {/* <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" /> */}
            {/* <p className="bb on/5 wo/5 hq">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p> */}
          </div>
        </div>
        {/* Section Title End */}
        <div className="bb ze ki xn yq mb en">
          <div className="wc qf pn xo ng">
            {/* Service Item */}

            {servicesData.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="animate_top  sg oi pi zq ml il am cn _m shadow-lg hover:shadow-xl cursor-pointer h-80 mt-6 ">
                  <img src={`images/icon-04.svg`} alt="Icon" />
                  <h4 className="ek zj kk wm nb _b">{service.title}</h4>
                  <p>{service.desc.slice(0, 100)}...</p>
                </div>
              </Link>
            ))}
            {/* Service Item */}

            {/* Service Item */}

            {/* Service Item */}

            {/* Service Item */}

            {/* Service Item */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default services;
