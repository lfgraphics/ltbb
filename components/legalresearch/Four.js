"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';


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
      title: "Legal Research and Drafting",
      details: [
        `TLB team has extensive expertise dealing with every major legal research platform. They are taught how to discover relevant keywords in order to produce the most effective research findings. We also have access to hundreds of legal databases that most attorneys do not have, spanning a wide range of legal topics, subjects, and specialties. Nobody in the area understands legal research like we do.`,
        `Our key features in legal research and drafting:`,
        `Conduct legal research on legislation addressing concerns raised by the client, whether they are related to litigation or not.`,
        `Draft a legal memorandum outlining and identifying legislation that address the client's concerns.`,
        `Compliance support`

      ]
    },
    {
      title: "Pre-Compliance Monitoring",
      details: [
        `We may undertake both surface and in-depth legal research, which can be utilized for a specific reason, such as strengthening a case that is already in litigation, or for a broader aim, such as developing theories, specific causes of action, or defenses in a case.`,
        'Our key features in Pre-compliance monitoring:',
        'Conduct legal research to keep track of federal, state, and municipal legislations, as well as laws pertaining to banking, trust, securities trading, real estate, and other fields of law in the United States and throughout the world.',
        "Track legislative activities / legislation affecting the client's existing and new businesses / operations in the United States and throughout the world."
      ]
    },
    {
      title: "Compliance Implementation",
      details: [
        `We make safer decisions by determining whether your product development choices are legally compliant. Our attorneys and lawyers are well-versed in all of the world's main jurisdictions.`,
        'Our key features in Compliance implementation',
        `Identify, assess, and record requirements included in current, revised, and/or new legislation to make changes to the client's plan policies, procedures, forms, and communications.`,
        'Review forms and other legal eDiscovery documents given by the client in the required format for meeting compliance with laws of specific jurisdiction(s) and document-related requirements (s)',
        'Perform legal research to ensure contract compliance.'
      ]
    },
    {
      title: "Multi-Jurisdiction / Risk-Assessment Surveys",
      details: [
        `Our legal analysis enables us to find relevant themes, areas of law, and keywords to use while conducting risk-assessment surveys and assures the accuracy of any advice or conclusion we make. Our team's knowledge, gleaned from decades of real-world practice in countries all over the world, assures that you will receive the best quality legal analysis that can be anticipated from seasoned counsel.`,
        'Our key features in multi-jurisdiction / risk-assessment surveys',
        'Conduct multi - jurisdictional surveys, including 50 U.S.state law surveys and foreign law surveys.',
        'Conduct legal surveys to identify possible risk sources.',
        'Conduct legal surveys to ascertain responsibilities and duties.'
      ]
    }
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

                  <p className="text-3xl font-bold text-black  dark:hover:text-white-500">
                    TLB’s Legal Research Services
                  </p>
                </div>
              </span>

            </div>
            {/* <div className="mt-2">

              <p className="mt-2 lg:px-14 sm:px-12 px-0 text-black font-semibold ">
                TLB’s Family law services include legal representation for divorce, child custody, support, adoption, domestic violence, paternity, mediation, modification of court orders, guardianship, name change and premarital agreements. Our services are provided by industry-experienced family law attorneys to help clients navigate legal processes, understand their rights, and reach a fair resolution.

              </p>
            </div> */}



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
