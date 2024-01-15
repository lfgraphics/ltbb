"use client"
import React, { useState } from 'react';

const FaqBlock = ({ data, title, subtitle }) => {
    const [expanded, setExpanded] = useState(Array(data.length).fill(false));

    const toggleExpand = (index) => {
        const newArr = [];
        expanded.forEach((item, i) => {
            if (i === index) {
                newArr.push(!item);
            } else {
                newArr.push(false);
            }
        })
        setExpanded(newArr);
    };


    return (
        <React.Fragment>
            <section className="bg-[#1E293B] text-gray-100 mt-4 mx-auto w-full">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        {subtitle}
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        {title}
                    </h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {data?.map((item, index) => (
                            <div key={index} className=" ">
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="flex items-center justify-between w-full p-2 text-left bg-transparent hover:bg-[#1b2636] rounded-md focus:outline-none"
                                >
                                    <span className="w-[90%] md:w-auto text-sm font-medium">{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 ${expanded[index] ? "transform rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {expanded[index] && (
                                    <div className="mt-1 p-4 bg-transparent hover:bg-[#1b2636] rounded-md text-sm">
                                        {item.answer}
                                        {item?.lists && <ul className="flex flex-col gap-2 list-disc ml-4">
                                            {
                                                item?.lists.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))
                                            }
                                        </ul>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};


export default FaqBlock;
