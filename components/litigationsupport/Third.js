"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { MdHeight } from "react-icons/md";

export default function Third() {
  // const des =

  let des1 = (
    <p>
      Our expert document reviewers will evaluate your document set for
      relevance, privilege, and secrecy using our technological partnerships and
      our quality assurance methodology.
      <br></br>How do we help?
      <br></br>● Our dedicated litigation support team thoroughly reviews all
      your documents with set timelines.<br></br>● Based on the document review
      our litigation support team prepares feedback and makes sure that said
      changes are made within the timeline.<br></br>● We use advantace
      technologies to meet your needs.
    </p>
  );

  let des2 = (
    <p>
      We pull the needed paperwork out of client portals, connect it to your
      accounts, and then check it to see if it complies with firm, venue, and
      case type specifications. If not, a document request is made. The finished
      file is examined by a lawyer.
      <br></br>
      How do we help?
      <br></br>● Collect all the required documents and connect it to your
      accounts.
      <br></br>● Review all the documents to see if it complies with your
      organization’s needs.
      <br></br>● Prepare a document request if needed.
      <br></br>● And at last, our expert lawyers cross check all the finalized
      files to make sure of no discrepancy.
    </p>
  );

  let des3 = (
    <p>
      We will narrow down your document set to only those that are most likely
      to be relevant to your case using cognitive analytics and AI technologies,
      which will save hosting costs and quicken the review process.
      <br></br>
      How do we help?
      <br></br>● We use advanced technologies like machine learning, data mining
      to come up with the most relevant documents that are best suited for your
      cases.
      <br></br>● We use statistical algorithms, predictive modeling, artificial
      intelligence to predict the likelihood of future outcomes.
      <br></br>● Our technological advancement and highly efficient staff help
      your organization not only cut down cost but also quickens the whole
      review process.
    </p>
  );
  let des4 = (
    <p>
      We assess accounts after a demanding time has passed to make sure they are
      suitable for litigation. We create a complete suit packet, including
      paperwork, exhibits, and media, for final attorney review following a
      thorough review.
      <br></br>
      How do we help:
      <br></br>● We do a thorough study and preparation for an effective
      litigation process.
      <br></br>● Thorough review of the final suit by attorneys and subject
      matter experts
      <br></br>● Effective use of technology and workforce to provide you with
      litigation support at the best cost and within a time limit.
    </p>
  );
  let des5 = (
    <p>
      When both parties to a class action lawsuit decide, they do not wish to
      pursue the claims made in the complaint and instead choose to settle it,
      usually with a financial benefit to the class, a class action settlement
      is achieved. However, it is important to note that Class action lawsuits
      don't need to be more costly or time-consuming after they've been settled.
      <br></br>
      How do we help?
      <br></br>● We'll confirm the number of eligible claimants and settlement
      sums so you can concentrate on your client's other requirements.
      <br></br>● Effective use of technology and workforce to provide you with
      litigation support at the best cost and time.
    </p>
  );
  const cardData = [
    {
      title: `Document Review and Management`,
      description: des1,
    },
    {
      title: "Document Processing",
      description: des2,
    },
    {
      title: "Predictive Data Analysis:",
      description: des3,
    },
    {
      title: "Review and Preparation of Suits",
      description: des4,
    },
    {
      title: "Settlement of Class Actions:",
      description: des5,
    },
    {
      title: "Legal Drafting and Summarization of Records",
      description: (
        <p>
          You can count on the specialists at TLB to assist your company in
          creating common discovery affidavits, claims, reports, and more.
          <br></br>
          How do we help?
          <br></br>● Contract review, data abstraction, summarization, and
          contract enforcement
          <br></br>● Regulatory review, analysis, and repapering
          <br></br>● M&A due diligence-driven contract review
          <br></br>● Discovery affidavits, claims, reports, and more.
          <br></br>● Litigation document analysis
        </p>
      ),
    },
    {
      title: "Legal Research",
      description: (
        <p>
          Easily craft out a winning legal strategy by hiring TLB’s team of
          attorneys and paralegals to conduct legal research for you. To offer
          the best strategy, we'll sift through relevant verdicts and cases from
          various jurisdictions. We make sure to provide you with the best
          litigation support service possible.
          <br></br>
          How do we help you?
          <br></br>● Effective legal research done by subject matter experts,
          team of attorneys and paralegals.
          <br></br>● If needed, we'll sift through relevant verdicts and cases
          from various jurisdictions.
          <br></br>● Our team of attorneys and paralegals through extensive
          research craft out effective legal strategies to help you excel in
          your cases.
        </p>
      ),
    },
    {
      title: "Process-Serving Support",
      description: (
        <p>
          In addition to serving by publication, we can assist in facilitating
          service to a single party for collection litigation, several parties
          for a foreclosure, or registered agents for a corporation.
          Additionally, we can assist by sending documents to your process
          servers, entering data from those servers, examining returns of
          service to make sure the amount of service was appropriate for the
          case, and filing those returns.
          <br></br>
          How do we help?
          <br></br>● serving by publication, foreclosure, collection litigation
          <br></br>● we can assist by sending documents to your process servers.
          <br></br>● examining returns of service to make sure the amount of
          service was appropriate.
          <br></br>● Filing returns
        </p>
      ),
    },
    {
      title: `eDiscovery`,
      description: `Electronic discovery involves the identification, preservation, collection, review, and production of electronically stored information (ESI) as part of the discovery process in litigation. Litigation support professionals from TLB assist in managing and organizing electronic documents, conducting searches, and ensuring compliance with legal requirements.`,
    },
    {
      title: `Case Management`,
      description: `TLB’s litigation support services assist in the management of case files, deadlines, and court schedules. This may involve maintaining a centralized database, tracking key dates, and ensuring all necessary documents and filings are organized and up to date.`,
    },
    {
      title: `Trial Preparation`,
      description: `TLB’s litigation support professionals assist in preparing for trial by organizing and coordinating trial exhibits, creating visual aids, and developing trial presentation strategies. They may also assist with witness preparation, document review, and the creation of trial binders.`,
    },
    {
      title: `Forensic Services`,
      description: `TLB’s forensic experts provide specialized services, such as forensic accounting, computer forensics, or forensic investigation, to analyze and interpret complex financial data, digital evidence, or other information crucial to the litigation process.`,
    },
    {
      title: `Expert Witness Coordination`,
      description: `TLB’s litigation support professionals assist with the identification, selection, and coordination of expert witnesses. This includes researching and vetting potential experts, managing communication, and scheduling, and ensuring that the experts are properly prepared to provide testimony.`,
    },
    {
      title: `Deposition and Transcript Services`,
      description: `Assistance with deposition preparation, including organizing exhibits, summarizing depositions, and creating deposition digests. TLB’s litigation support services may also include obtaining and managing court transcripts and providing real-time transcription services during depositions or court proceedings.`,
    },
    {
      title: `Trial Presentation`,
      description: `Creating and delivering effective trial presentations using technology and visual aids. TLB’s litigation support professionals help develop and deliver compelling presentations to present evidence, timelines, graphics, and demonstratives in the courtroom.`,
    },
    {
      title: `Settlement and Mediation Support`,
      description: `Assistance in settlement negotiations and mediation, including data analysis, valuation, and financial modeling. TLB’s litigation support services can also help in preparing settlement agreements and analyzing potential outcomes.`,
    },
    {
      title: `Post-Judgment Support`,
      description: (
        <p>
          With bank and wage garnishments, real estate liens, and receiverships,
          we help your business ease out the litigation process even
          post-judgment. Additionally, we assist with post-garnishment motions
          such as turnover orders, orders for continuing liens, and orders to
          condemn monies as well as asset location and verification. We assist
          with real estate sales by managing sheriff's deeds, title insurance,
          scheduling, and approving appraisals, and coordinating auctions.
          <br></br>
          How do we help?
          <br></br>● Judgment entry
          <br></br>● Garnishment preparation and filing
          <br></br>● Garnishment answer review
          <br></br>● Judgment review and validation for placed accounts
          <br></br>● Property sale for foreclosure
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6 mb-8">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            TLB’s Litigation Support Services
          </h2>
          <p className="dark:text-gray-400">
            Our highly experienced and technologically sound document reviewers,
            data scientists, paralegals, and lawyers help you secure a favorable
            outcome for your case. So, no matter where you stand in your case,
            TLB can help you with our Litigation support services at every stage
            of your proceedings. </p>
          <br></br>
          <br></br>
          <div>
            <table className="mx-auto d-block text-center">
              <thead>
                <tr>
                  <th>PRE-JUDGMENT</th>
                  <th>POST-JUDGMENT </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-left">
                  <td>
                    <li>Pre-attorney suit review</li>
                    <li>Suit assembly</li>
                    <li>Default request</li>
                    <li>Stipulations</li>
                    <li>Alias preparation</li>
                    <li>Service follow-up and review</li>
                    <li>Electronic filing</li>
                  </td>
                  {/* </tr> */}
                  <td className="text-left pl-6">
                    {/* <td> */}
                    <li>Judgment entry</li>
                    <li>Garnishment preparation and filing</li>
                    <li>Garnishment answer review</li>
                    <li>
                      Judgment review and validation for placed accounts
                    </li>
                    <li>Property sale for foreclosure</li>
                    {/* </td> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            shadow: true,
          }}
          pagination={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper space-y-2"
        >
          {/* Step 2: Map the card data to the SwiperSlides */}
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white tiles rounded-b-xl shadow-gray-700 shadow-xl rounded-t-lg p-8 ">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-4">{card.title}</h3>
                </div>
                <div className="text-gray-700">{card.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-4">It&apos;s Important</h2>
              <p className="text-lg">
                Overall, outsourcing personal injury support services to TLB will allow law firms and
                attorneys to leverage specialized expertise, increase efficiency, reduce costs, and focus
                on delivering high-quality legal services to their clients. It enables them to streamline
                operations, enhance productivity, and improve the overall management of personal
                injury cases
              </p>

              <p className="mt-4 text-gray-400"></p>
              <div className="flex items-center mt-8 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                <div>
                  <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                  <time datetime="2021-02-18" className="text-sm text-gray-400">Feb 18th 2021</time>
                </div>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </>
  );
}
