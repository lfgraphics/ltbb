"use client"
import React from 'react'

// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/outline'


const features = [
    {
        description: `TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client. We mainly focus on the following services:`,
    },
    {
        description: `Organizing the information: Our expert deposition summary service providers organize the information from the deposition in a logical and coherent manner.`,
    },
    {
        description: `Preparing the summary: Our expert deposition summary service providers prepare a written summary of the deposition, highlighting the most important points and testimony.`,
    },
    {
        description: `Reviewing and editing the summary: Our expert deposition summary service providers review and edit the summary to ensure that it is accurate and complete.`,
    },
    {
        description: `Providing the summary: Our expert deposition summary service providers give the summary to the client in the format requested (e.g., as a written document, an electronic file, etc.).`,
    },
]
// const indexedFeatures = features.map((feature, index) => ({ ...feature, index }));
const des2 = <div>
    <ul>
        A deposition summary can be useful for a variety of purposes, such as:
        <li>○	Reviewing the testimony of a witness in preparation for a court case</li>
        <li>○	Understanding the key points and arguments made during a deposition</li>
        <li>○	Providing an overview of a deposition for people who were not present at the time it was taken</li>
    </ul>
</div>;
const Glossarys = [
    {
        name: `What is a deposition summary?`,
        description: `TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client. We mainly focus on the following services:`,
    },
    {
        name: `Why do I need a deposition summary?`,
        description: des2,
    },
    {
        name: `How do you prepare a deposition summary?`,
        description: `Our team of legal professionals reviews the transcript of the deposition and extracts the key points and testimony. We then organize this information in a logical and coherent manner and prepare a written summary of the deposition. We review and edit the summary to ensure that it is accurate and complete before providing it to the client.`,
    },
    {
        name: `How long does it take to prepare a deposition summary?`,
        description: `The length of time it takes to prepare a deposition summary depends on the length and complexity of the deposition. In general, the longer and more complex the deposition, the longer it will take to prepare the summary.`,
    },
    {
        name: `What format do you provide the deposition summary in?`,
        description: `We can provide the deposition summary in a variety of formats, including as a written document, an electronic file (such as a PDF or Word document), or in another format as requested by the client.`,
    },
    {
        name: `Is the information in the deposition summary confidential?`,
        description: `Yes, the information in the deposition summary is confidential and will only be shared with the client.`,
    },
]
// const indexedGlossarys = Glossarys.map((glossry, index) => ({ ...glossry, index }));


export default function New() {
    return (
        <React.Fragment>
            <div className="bg-white py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            TLB’s Deposition Summary Services
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client. We mainly focus on the following services:
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature, index) => (
                                <div key={feature.description} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <span className="h-6 w-6 text-white text-center" aria-hidden="true">{index + 1}</span>
                                        </div>
                                        {/* {feature.name} */}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Glossary - TLB’s Deposition Summary Services
                        </p>
                        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                            TLB’s goal with deposition summary services is to provide a concise and accurate summary of the key points and testimony from a deposition, in a format that is easily understandable and useful to the client. We mainly focus on the following services:
                        </p> */}
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {Glossarys.map((glossry, index) => (
                                <div key={glossry.description} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <span className="h-6 w-6 text-white text-center" aria-hidden="true">{index + 1}</span>
                                        </div>
                                        {glossry.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{glossry.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}