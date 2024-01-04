'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


const data = [
  {
    title: "Financial Due Diligence",
    details: [
      "We review the target's financial records, including balance sheets, income statements, and cash flow statements, to ensure that the company is financially stable and has accurate financial reporting."
    ],
  },
  {
    title: "Operational Due Diligence",
    details: [
      "We assess the target's operational efficiency and effectiveness by reviewing key processes, systems, and personnel. This helps identify any operational issues or inefficiencies that could impact the success of the deal."
    ],
  },
  {
    title: "Legal Due Diligence",
    details: [
      "We review the target's legal compliance and identify any potential liabilities or outstanding legal issues. This includes investigating any pending lawsuits, regulatory compliance, and intellectual property rights."
    ],
  },
  {
    title: "Tax Due Diligence",
    details: [
      "We review the target's tax compliance, identifying any potential tax liabilities or issues that could impact the deal."
    ],
  },
  {
    title: "Valuation",
    details: [
      "We help our clients to determine the fair market value of the target by analyzing financial data, industry trends, and other relevant information."
    ],
  },
  {
    title: "Integration planning",
    details: [
      "We help our clients to develop a comprehensive plan to integrate the target into the acquirer's operations and achieve synergies."
    ],
  },
];

const Four = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
    });
  }, []);


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
                      TLB’s M&A Diligence Services
                  </p>
                </div>
              </span>
            </div>
            <p className="mt-6 ml-8"> At TLB, we offer a wide range of M&A (mergers and acquisitions) diligence services to help businesses
              evaluate potential acquisition targets and make informed decisions about their transactions. Our
              services include:</p>
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
                          <div
                              className="flex items-center gap-4   p-2 shadow-lg rounded-t-lg hover:rounded-t-xl hover:shadow-xl">
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
