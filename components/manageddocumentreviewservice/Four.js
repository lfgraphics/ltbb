'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Four = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
    });
  }, []);

  const data = [
    {
      title: "Document Organization",
      details: [
        "TLB organizes the documents in a structured manner, creating a framework for efficient review. This may involve categorizing documents based on subject matter, date range, author, or any other relevant criteria."
      ],
    },
    {
      title: "Review Team",
      details: [
        "TLB employs a team of attorneys, paralegals, or legal professionals who are trained and experienced in document review. These professionals conduct a thorough review of the documents, applying legal standards, review protocols, and client-specific guidelines.",
      ],
    },
    {
      title: "Technology-Assisted Review",
      details: [
        "TLB  leverage technology tools, such as eDiscovery software and machine learning algorithms, to expedite the review process. These tools can help identify potentially relevant documents, categorize them, and prioritize the review based on relevance.",
      ],
    },
    {
      title: "Quality Control",
      details: [
        "TLB implements quality control processes to ensure accuracy, consistency, and adherence to review protocols. TLB has senior reviewers or quality control specialists who review the work of the review team, validate decisions, and maintain high-quality standards.",
      ],
    },
    {
      title: "Reporting and Analytics",
      details: [
        "TLB provides detailed reports and analytics on the reviewed documents. These reports can include metrics such as the number of documents reviewed, categorized, and flagged as relevant, providing valuable insights into the progress and outcomes of the review process.\n",
      ],
    },
    {
      title: "Regulatory Compliance",
      details: [
        "TLB is knowledgeable about regulatory requirements and legal standards. TLB ensures compliance during the review process, including data privacy, confidentiality, and legal privilege protections.",
      ],
    },
    {
      title: "Project Management",
      details: [
        "TLB manages the entire document review project, including planning, resource allocation, timelines, and communication. TLB works closely with the client to understand the specific requirements and objectives of the review and ensure that the project is executed efficiently.",
      ],
    },
    {
      title: "Legal Compliance",
      details: [
        "In certain industries, such as finance and healthcare, TLB can help comply with laws and regulations that necessitate the collection, preservation, and review of electronic data.",
      ],
    },
    {
      title: "Litigation Support",
      details: [
        "In the event of a lawsuit or legal dispute, TLB can help review and produce relevant documents as evidence. Document review and eDiscovery services can help identify, collect, and review these documents in a timely and efficient manner.\n",
      ],
    },
    {
      title: "Risk Management",
      details: [
        "By conducting regular document reviews and eDiscovery, TLB can help identify and address potential legal issues before they escalate into more significant problems.",
      ],
    },
    {
      title: "Records Management",
      details: [
        "TLB’s document review and eDiscovery services can help a business organize and manage its electronic data, making it easier to locate and retrieve information when needed.",
      ],
    },
    {
      title: " Data Privacy",
      details: [
        "Businesses can make use of TLB’s document review and eDiscovery services to ensure that they are in compliance with data privacy regulations such as GDPR, HIPAA, and other similar laws.\n",
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="mx-auto sm:w-5/6 w-full md:w-5/6 lg:5/6 mt-2">
        <div className="m-1 lg:m-4 space-y-3">
          <div
            className="max-w-full px-0 lg:px-8 py-4 bg-[#f8fafc] rounded-lg shadow-gray-400   cursor-pointer"
            data-aos="fade-down"
          >
            <div className="flex items-center justify-between px-4">
              <span className="text-md font-bold text-black ">
                <div className="flex items-center justify-between">
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  />
                  <p className="text-3xl font-bold text-black  dark:hover:text-white-500  ">
                      TLB’s Managed Document Review Services
                  </p>
                </div>
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center"></div>
            </div>

            {/* ============================================================== */}

            <section className="bg-[#f8fafc] dark:bg-white-90 mt-4">
              <div className="container px-6 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {data.map((item, index) => (
                    <article
                      key={index}
                      data-aos="zoom-in-down"
                      className="rounded-xl bg-white-050 shadow-xl border-t-2 border-gray-100 hover:shadow-2xl  h-80  "
                    >
                      <div className="w-full">
                        <div className="flex items-center gap-4   p-2 shadow-lg rounded-t-lg hover:rounded-t-xl hover:shadow-xl">
                          <img
                            alt="Developer"
                            src="/law.png"
                            className="h-16 w-16 rounded-full object-cover"
                          />

                          <div>
                            <h3 className="text-lg  font-medium text-black">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className=" w-full h-48   overflow-auto  shadow-sm  ">
                        <ul className="mt-4 space-y-2  mx-auto w-full  ">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="">
                              <a
                                href="#"
                                className="block h-full rounded-xl  p-2 "
                              >
                                <p className="mt-1 text-xs font-medium text-black">
                                  {detail}
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Four;
