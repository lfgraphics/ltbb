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
      title: "Summarization",
      details: [
        "Deposition summary services specialize in reviewing and summarizing deposition transcripts. They extract essential facts, statements, and arguments presented during the deposition process."
      ]
    },
    {
      title: "Highlighting Key Information",
      details: [
        "These services focus on identifying and highlighting key points, significant testimony, and important exhibits or evidence referenced during the deposition. This helps attorneys quickly grasp the crucial details without having to review the entire transcript."
      ]
    },
    {
      title: "Customization",
      details: [
        "Deposition summaries can be customized to meet specific requirements. Attorneys can request summaries that align with their preferred format, level of detail, and organization style."
      ]
    },
    {
      title: "Time and Cost Savings",
      details: [
        "Dealing with lengthy deposition transcripts can be time-consuming and labor-intensive. TLB’s legal professionals can save valuable time and allocate their resources more efficiently. It can also be cost-effective compared to hiring additional in-house staff or allocating existing resources for this task."
      ]
    },
    {
      title: "Case Preparation",
      details: [
        "Deposition summaries play a vital role in case preparation. They provide attorneys with a clear overview of the deposition testimony, aiding in case strategy development, identifying strengths and weaknesses, and preparing for trial or settlement negotiations."
      ]
    },
    {
      title: "Improved Collaboration",
      details: [
        "Deposition summaries facilitate effective collaboration among legal teams. Attorneys can easily share and discuss the key points and important information extracted from the depositions, enhancing communication and coordination."
      ]
    },
    {
      title: "Reviewing the transcript of the deposition",
      details: [
        "Our expert deposition summary service providers review the transcript of the deposition and extract the key points and testimony."
      ]
    }
  ];


  return (
    <React.Fragment>
      <div className='mx-auto sm:w-5/6 w-full md:w-5/6 lg:5/6 mt-2'>
        <div className='m-1 lg:m-4 space-y-3'>
          <div className="max-w-full px-0 lg:px-8 py-4 bg-[#f8fafc] rounded-lg shadow-gray-400   cursor-pointer" data-aos="fade-down">
            <div className="flex items-center justify-between px-4">
              <span className="text-md font-bold text-black ">
                <div className='flex items-center justify-between'>
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  />

                  <p

                    className="text-3xl font-bold text-black  dark:hover:text-white-500  "

                  >
                    TLB’s Deposition Summary Services

                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2  px-4">

              <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client.
                <br></br>
                We mainly focus on the following services -
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
