"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
function Carousel() {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleRadioChange = (event) => {
    setActiveSlide(parseInt(event.target.id.substring(1)));
  };

  useEffect(() => {
    handleRadioChange({ target: { id: "s2" } });
  }, []);


  return (
    <div
      className="w-full h-full flex justify-center items-center flex-col"
      style={{ transformStyle: "preserve-3d" }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <input
          key={index}
          type="radio"
          name="slider"
          className="d-none"
          id={`s${index + 1}`}
          checked={activeSlide === index + 1}
          onChange={handleRadioChange}
        />
      ))}

      <div className="cards relative w-full h-full mb-5">
        {Array.from({ length: 5 }, (_, index) => (
          <label
            className="absolute w-[420px] max-w-[90%] h-fit left-0 
            right-0 m-auto cursor-pointer transition-transform duration-550
            ease-in-out"
            key={index}
            htmlFor={`s${index + 1}`}
            id={`slide${index + 1}`}
          >
            <div className="card px-4 py-2 lg:px-12 lg:py-6">
              <div className="image">
                <img
                  src={`/digital-marketing/digital-marketing-${index + 1}.webp`}
                  alt={`Slide ${index + 1}`}
                  className="rounded w-full h-[160px] object-cover"
                />
              </div>
              <p className="text-xl lg:text-3xl mt-4 font-semibold">
                Targeted email marketing campaigns
              </p>
              <p className="text-lg mt-5 font-medium text-gray-500">
                At TLB we believe targeting emails to perspective leads can do
                wonders for a law firm. Through targeted emails, you can run
                personalized campaigns that will connect your leads or clients
                to your law firm. Targeted email marketing is something that’s
                rigorously practiced in all kinds of businesses to get desired
                clients to connect to the decision-makers of a business.
              </p>
              <p className="text-xl mt-8 font-semibold">
                What we offer in targeted email marketing campaigns
              </p>
              <ol className="list-disc px-2">
                <li>Personalized email templates.</li>
                <li> Complete handling of email campaigns. </li>
                <li>
                  Scheduling and rescheduling of emails as per the requirements.
                </li>
                <li>Follow-ups with the interested leads.</li>
              </ol>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Carousel;