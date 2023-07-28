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
      title: "Divorce",
      details: [
        `Divorce is a legal process that terminates a marriage. TLB’s Family law attorneys provide representation and guidance for individuals seeking a divorce, including issues related to property division, alimony, and child custody. We can help clients understand the laws in their state and the process for obtaining a divorce and can assist with negotiations and court appearances.`
        
      ]
    },
    {
      title: "Child custody and support",
      details: [
        `Child custody and support are two of the most contentious issues that can arise during a divorce. Legal representation for parents in child custody and support cases is important. Our attorneys can help parents understand their rights and responsibilities, develop a parenting plan, and negotiate child support payments. We can also represent parents in court if necessary.`
      ]
    },
    {
      title: "Adoption",
      details: [
       `Adoption is the legal process of becoming the legal parent of a child who is not your biological child. Legal representation for individuals and families seeking to adopt a child is important, as the process can be complex and time-consuming. TLB’s attorneys can help navigate the adoption process, ensure that all legal requirements are met, and represent clients in court.`
      ]
    },
    {
      title: "Domestic violence",
      details: [
       `Domestic violence is a serious issue that affects many families. Legal representation and guidance for individuals who are victims of domestic violence is important, as they may need to obtain restraining orders and pursue criminal charges against the abuser. Our attorneys can help clients understand their rights and the legal process and can provide representation in court.
`
      ]
    },
    {
      title: "Paternity",
      details: [
       `Paternity is the legal determination of the father of a child. Legal representation for individuals seeking to establish paternity is important, as it can have significant legal consequences. Our attorneys can help with DNA testing and establishing legal rights and responsibilities.`
      ]
    },
    {
      title: "Mediation",
      details: [
       `Mediation is a process of resolving disputes with the help of a neutral third party. We provide legal representation and guidance for individuals participating in mediation to resolve family law disputes and help them to reach a mutually beneficial agreement.`
      ]
    },
    {
      title: "Modification of orders",
      details: [
       `Legal representation for individuals seeking to modify existing court orders is important, as it can help them to adjust to changing circumstances. Our attorneys can help clients understand the process and requirements for modifying orders and can represent them in court if necessary.`
      ]
    },
    {
      title: "Guardianship",
      details: [
       `Guardianship is the legal process of appointing someone to take care of a child or incapacitated adult. TLB provides legal representation for individuals seeking to be appointed as a guardian. We understand the process can be complex and emotionally charged and hence make sure to make the process as smooth and comforting as possible.`
      ]
    },
    {
      title: "Name change",
      details: [
       `Legal representation for individuals seeking to change their name or the name of a minor child is a complex process. Our attorneys at TLB can help you make the entire process smooth by assisting with the paperwork and court appearances.
`
      ]
    },
    {
      title: "Premarital agreements",
      details: [
       `Premarital agreements are legal agreements that are made between two people before they get married. Legal representation for individuals seeking to draft or review premarital agreements is crucial, as it can help them to address potential issues that may arise in the future. Our attorneys at TLB can help with the drafting, negotiation, and review of agreements to ensure they are fair and legally binding.`
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

                  <p className="text-3xl font-bold text-black  dark:hover:text-white-500">
                    TLB’s Family Law Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2">

              <p className="mt-2 lg:px-14 sm:px-12 px-0 text-black font-semibold ">
                TLB’s Family law services include legal representation for divorce, child custody, support, adoption, domestic violence, paternity, mediation, modification of court orders, guardianship, name change and premarital agreements. Our services are provided by industry-experienced family law attorneys to help clients navigate legal processes, understand their rights, and reach a fair resolution.

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
