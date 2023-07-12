import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import Image from 'next/image';


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
      title: "Contract Abstraction, and Summarization",
      details: [
        "Our Contract Management experts are attorneys, law graduates, and software experts who have a better understanding of the laws associated with contracts.We can easily handle your data abstraction and summarization, set up templates, and assist inautomating workflows that match your law firm's or company's playbook",
      ]
    },
    {
      title: "How do we help?",
      details: [
        'Contract review, data abstraction, summarization, and contract enforcement',
        'Regulatory review, analysis, and repapering(e.g., GDPR, Brexit, CCPA, MiFID II, LIBOR)',
        'M & A due diligence - driven contract review',
        'Post - acquisition contract portfolio integration',
        'Internal contract portfolio audits',
        'Contract portfolio analysis',
      ]
    },
    {
      title: "Contract Redlining and Execution",
      details: [
        "Contract redlining is done to edit a contract during negotiation between two or more parties with the aim to produce a single document that suits everyone's requirements. Contract redlining is a vital part when executing a contract as any slight errors can result in heavy losses that is why it is important to work with a reliable contract management service provider",
      ]
    },
    {
      title: "How do we help?",
      details: [
        'We have editors that are well versed with the latest technologies and can easily carry out the processes of file conversions, compilations, formatting, editing, etc.',
        'We set up an easy - to - access system for the negotiating parties involved for better project execution.',
        'Customizable workflow templates restraining you from repetitive redline revisions',
      ]
    },
    {
      title: "Contract Drafting and Negotiations",
      details: [
        "Our contract drafting and negotiating experts come with decades of rich experience of working with both law firms and corporations of varied sizes.",
      ]
    },
    {
      title: "Deposition Services",
      details: [
        'Contract review, drafting, remediation, negotiation, abstraction, and summarization',
        'Contract compliance and global regulations analysis',
        'Remediation of “deficient” agreements and issuing amendments',
        'Management of ongoing contractual rights and obligations',
        'Managing procurement, sales contracts, IP licenses, and internal agreements',
        'Contract - related administrative support',
      ]
    },


    {
      title: "Contract Amendment",
      details: [
        "Contract management is a dynamic domain, so our highly skilled contract lawyers make sure that the requisite amendments to the contracts are done in a timely manner whilst keeping the essence of the original agreement substantially intact.The team ensures your business deals keep moving irrespective of the size of the project.",
      ]
    },
    {
      title: "Contract Renewals",
      details: [
        "Our Contract experts maintain a calendar for all the contracts and are ready with the updates much ahead of time.They visit the standard clauses and terms and address potential issues with the previous contract.They have mastered the process of organizing voluminous documents, electronic correspondences, and spreadsheets.",
      ]
    },
    {
      title: "Contract Migration",
      details: [
        "It is rare for businesses to come to the sharp understanding that maintaining a good contract management system is essential until revenues are lost, opportunities are missed, or milestones are missed as a result of subpar contract management.Our contract migration services are specifically developed to outcome this limitation by migrating your contracts to a better and more advanced CLM platform.",
      ]
    },
    {
      title: "How do we help?",
      details: [
        'Set up templates and assist in automating workflows that match your law firm’s or company’s playbook.',
        'Perform risk analysis deviation from standard terms, regulatory compliance, revenue recognition, and liability exposure.',
        'Advanced artificial intelligence tools for a better contract migration',
      ]
    },
    {
      title: "Contract Execution and Approval",
      details: [
        'Our subject matter experts prepare and disseminate all relevant paperwork to secure contract execution and internal approvals.',
      ]
    },
    {
      title: "How do we help?",
      details: [
        'Abstract and upload contracts into the contract repository with supporting documentation.',
        'Perform contract repository management – create files, alerts, renewals, and generate reports.',
        'Document, track and report contractual obligations.',
        'Perform risk analysis deviation from standard terms, regulatory compliance, revenue recognition, and liability exposure.',
        'Due diligence around merger and acquisition(M & A).',
      ]
    },
    {
      title: "Contract Administration and Analysis",
      details: [
        'We administer and analyze every aspect of your contracts from the initial stages to its successful execution.',
      ]
    },
    {
      title: "How do we help?",
      details: [
        'Administer the integration of incoming contracts with systems, processes, and standards.',
        'Conduct analysis for renegotiation',
      ]
    },
    {
      title: "CLM Process and Technology Support",
      details: [
        "Our CLM specialists offer a personalized path for achieving a best-in-class function while taking your organization's budget, time constraints, and willingness to embrace change into account.Our CLM team examines the state of your organization's contractual ecosystem and offers practical ideas to turn it into a center of excellence.",
      ]
    },
    {
      title: "How do we help?",
      details: [
        'Contract lifecycle assessment, consulting, process engineering, and playbook design',
        'CLM, contract analytics, contract workflow technology identification, assessment, selection, and implementation',
        'Implementation of administrative support including database foldering, tracking, and populating',
        'Pre and post - implementation legal resourcing and staffing',
        'CLM platform migration support',
      ]
    },

  ];


  return (
    <React.Fragment>
      <div className='mx-auto  sm:w-5/6 w-full md:w-5/6 lg:5/6'>
        <div className='m-4 space-y-3'>




          <div className="max-w-full px-8 py-4 bg-[#f8fafc] rounded-lg shadow-gray-400   cursor-pointer" data-aos="fade-down">
            <div className="flex items-center justify-between">
              <span className="text-md font-bold text-black ">
                <div className='flex items-center justify-between'>
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  />

                  <p className="text-xl font-bold text-black  dark:hover:text-white-500">
                    TLB’s Contract Management Lifecycle Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2">

              <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                TLB has a dedicated contract lifecycle management services team that
                delivers customized solutions to law firms, corporates and even to contract
                management companies that helps in cutting down costs, reducing risks, and delivering
                quality outputs for their clients
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* <a
      href="#"
      className="text-blue-600 dark:text-blue-400 hover:underline"
      tabIndex={0}
      role="link"
    >
      Read more
    </a> */}
              <div className="flex items-center">


              </div>
            </div>

            {/* ============================================================== */}

            <section className="bg-[#f8fafc] dark:bg-white-90 mt-4">
              <div className="container px-6 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {data.map((item, index) => (

                    <article
                      key={index} data-aos="zoom-in-down"
                      className="rounded-xl bg-white-050 shadow-xl border-t-2 border-gray-100 hover:shadow-2xl  h-80  "
                    >

                      <div className='w-full'>
                        <div className="flex items-center gap-4   p-2 shadow-lg rounded-t-lg hover:rounded-t-xl hover:shadow-xl" >
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



                      <div className=' w-full h-48   overflow-auto  shadow-sm  '>
                        <ul className="mt-4 space-y-2  mx-auto w-full  ">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="">
                              <a
                                href="#"
                                className="block h-full rounded-xl  p-2 "
                              >
                                {/* <strong className="font-medium text-black">
                          {idx + 1}
                        </strong> */}
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
