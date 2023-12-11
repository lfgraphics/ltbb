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
      title: "Marketing to Potential Clients",
      details: [
        "Digital/ Social Media Marketing campaigns",
        'Mass e - mail campaigns',
        'Estate Planning Webinar campaigns',
        'Marketing reports(ROI, Conversion Ratio)',
        'Data entry in your system(Prospect Data entry)',
        'Initial consultation appointment management',
        "Creating client letters(Birthdays, Anniversaries etc.)"
      ]
    },
    {
      title: "Estate Planning Document Creation",
      details: [
        "Initial documentation(service agreement)  ",
        "Revocable Living Trusts",
        "Wills",
        "Power of Attorney",
        "Health Care Power of Attorney  ",
        "Living Will",
        "HIPAA Document",
        "Medicaid Planning Document",
        "Irrevocable Trust",
        "Insurance Trust  ",
        "Gifting Trust",
        "Business Documents(LLC or LP creation)",
        "Funding Letters",
        "Deed creation",
        "Supporting document / legal forms creation for Probate and Trust Administration process",
        "Calendar management  ",
        "Client retention operation"
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

                  <p className="text-3xl font-bold text-black  dark:hover:text-white-500">
                    TLB’s Estate Planning Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2 px-4">

              <p className="mt-2 lg:px-14 sm:px-12 px-0 text-black font-semibold ">
                TLB estate planning team can guide clients on the estate planning trusts and prepare all the relevant documents associated with them. The team is also well versed and has created many real estate planning models that can be easily accessed from a repository. The TLB estate planning lawyers can jot down all prospective points for the executor of the Will of Estate of a client so that there is no dispute in the future.
                <br></br>
                <br></br>
                Here are some of TLB’s outsourced estate planning services:
              </p>
            </div>



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
