"use client";
import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative  sm:w-5/6 w-full md:w-5/6 lg:5/6  mx-auto bg-white">
        <div className="mx-auto max-w-7xl lg:px-8 flex flex-wrap">
          <div className="flex flex-col justify-top px-4 pt-12 md:pt-16 lg:w-1/2 h-fit order-1">
            <div className="mt-4 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Want&apos; Solution</p>
              </div>
              <p className="text-sm font-medium">Get in touch with us →</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Outsourced Deposition Summary Services
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Deposition summary services are professional services that provide
              concise summaries of legal depositions. A deposition is a sworn
              out-of-court testimony given by a witness or a party to a lawsuit,
              typically recorded by a court reporter. These depositions are an
              essential part of the discovery process in litigation, as they
              allow both sides to gather information and evidence.
            </p>
            <p className="mt-8 text-lg text-gray-700">
              Deposition summary services aim to assist attorneys and legal
              professionals by condensing the lengthy and detailed deposition
              transcripts into more manageable summaries. These summaries
              highlight the key points, important facts, and significant
              statements made during the deposition. They may also include
              relevant exhibits or evidence referenced during the testimony.
            </p>
          </div>
          <div className="relative lg:w-1/2 h-fit lg:px-4 order-3 lg:order-2">
            <img
              className="aspect-[3/2] bg-gray-50 lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] object-cover h-62 w-124"
              src="/Deposition Summary/pexels-anete-lusina-4792282.jpg"
              alt=""
            />
          </div>
          <div className="px-4 mt-8 order-2 lg:order-3">
            <p className="text-lg text-gray-700">
              The purpose of deposition summaries is to provide attorneys with a
              clear overview of the deposition's content without having to
              review the entire transcript. This can save time and effort,
              allowing legal professionals to quickly identify relevant
              information and develop their case strategy accordingly.
            </p>
            <p className="mt-8 text-lg text-gray-700">
              Deposition summary services may be provided by specialized
              companies or by freelance legal professionals who have expertise
              in legal research and summarization. The summaries can be
              customized to meet specific requirements and can vary in length
              and level of detail depending on the client's needs.
            </p>
            <p className="mt-8 text-lg text-gray-700">
              Overall, deposition summary services streamline the review process
              for attorneys, making it easier to digest the information obtained
              during depositions and aiding in the preparation of cases for
              trial or settlement negotiations.
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <br></br>
                <p className="mt-2 text-sm text-gray-500"></p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
