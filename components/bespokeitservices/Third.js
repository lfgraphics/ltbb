"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

const cardData = [
  {
    title: "Legal Software Development Services",
    description: "TLB provides full-cycle software development services that adapt smoothly to your project requirements and business demands, from IT strategy advice and complete technological roadmaps through the end-to-end construction of scalable solutions.",
    services: [
      "Legal records management system",
      "Legal case management software",
      "Courtroom technology modules",
      "Legal mobile app development",
      "Litigation support software",
      "Legal firm billing software solutions",
      "Legal firm Analytics software",
      "Law firm software integration",
      "Virtual Law firm platforms",
      "Legal software maintenance services"
    ],
    images: "/bespoke-it-services/legal-software-dev.png"
  },
  {
    title: "App Development",
    description: "TLB provides complete application design, integration, and administration services. Whether it's a consumer-oriented app or a disruptive enterprise-class solution, the business oversees the full mobile app development process, from design to delivery and continuous maintenance.",
    services: [
      "Custom iOS and Android apps development",
      "Native and cross-platform solutions",
      "Second platform app development",
      "UI/UX design",
      "Consulting and prototyping",
      "Automated QA and testing",
      "Power management, notification and geofencing",
      "Embedded Android & AOSP customizations",
      "Maintenance and post-warranty support"
    ],
    images: "/bespoke-it-services/app-dev.png"
  },
  {
    title: "Web Development and SEO",
    description: "TLB’s website developers offer experienced web application development and web design services to our clients. TLB provides a wide range of website design and development services, from mobile web development solutions and responsive website designs to custom e-commerce and intranet experiences built with cutting-edge web technologies.",
    services: [
      "Custom web development",
      "Web design and re-design",
      "Laravel development",
      "eCommerce development",
      "Responsive designs",
      "Search engine optimization (SEO)"
    ],
    images: "/bespoke-it-services/web-dev.png"
  },
  {
    title: "Bot Development",
    description: "Chatbots are designed to be basic and minimalist, and we prefer to keep them that way. We create chatbots that are simple to connect with any platform and deliver exact replies to consumers with our chatbot creation services.",
    services: [
      "Chatbot Design",
      "Natural Language Processing",
      "Chatbot Architecture",
      "Chatbot Consultancy",
      "Sentiment analysis",
      "Multilingual capabilities",
      "Intent-Based Response",
      "Secure Customer Interaction"
    ],
    images: "/bespoke-it-services/bot-dev.jpeg"
  },
  {
    title: "Robotic Process Automation",
    description: "We create Legal Management Software that improves legal efficiency by streamlining operations with enhanced automation, real-time integrations, complete visibility and control, and extensive analytics.",
    services: [
      "Legal Spend Control",
      "Matter Management",
      "Accruals Management"
    ],
    images: "/bespoke-it-services/robotics-automation.jpeg"
  },
  {
    title: "Cloud Computing",
    description: "Our Cloud-Based Legal Management Solutions safeguard your law firm's operational procedures, records, and finances, enabling better collaboration, mobility, and automation.",
    services: [
      "Cloud-driven analytics",
      "Workflow automation",
      "Company-wide business intelligence",
      "Collaboration platforms and supplier portals",
      "Product designs",
      "New Product Development (NPD)",
      "ERP strategies",
      "Software-as-a-Service (SaaS)"
    ],
    images: "/bespoke-it-services/cloud-computing.webp"
  },
  {
    title: "Big Data",
    description: "Big data services assist businesses in maximizing data value and achieving business objectives through big data analysis. To assist clients, profit from the big data environment, TLB provides a variety of big data services such as consultation, implementation, support, and big data as a service.",
    services: [
      "Big data consulting",
      "Big data implementation",
      "Big data support",
      "Big data managed analytics services",
      "Analytics as a service (AaaS) framework"
    ],
    images: "/bespoke-it-services/big-data.webp"
  }
];


export default function Third() {

  const [showCards, setShowCards] = useState(3);
  const displayCards = cardData.slice(0, showCards);

  const handleCards = () => {
    if (showCards === cardData.length) return;
    setShowCards((prev) => prev + 3);
  }

  const handleCardLess = () => {
    setShowCards(3)
  }

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6 overflow-hidden">
        <div className="container mx-auto p-4 mt-12 space-y-2 text-center bg-w mb-4">
          <h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="100">
            TLB’s Legal IT Services
          </h2>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-10 flex-wrap px-[5%]">
          {
            displayCards?.map((item, i) => {
              const { title, description, subtitle, services, images } = item;
              return (
                < div
                  key={i}
                  data-aos="zoom-in" data-aos-delay={(i + 1) * 100}
                  className="flex-1  w-full min-w-[300px] xl:max-w-[350px] rounded-md p-4 bg-white drop-shadow-md" >
                  < div
                    className="relative w-full h-56" >
                    <Image
                      src={images}
                      fill
                      alt={title}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="text-black mt-4 flex flex-col gap-3">
                    <h3 className="text-lg md:text-xl ">
                      {title}
                    </h3>
                    <p className="line-clamp-none">{description}</p>
                    <h4 className="text-base">{subtitle}</h4>
                    <div className="flex flex-col gap-4 mt-4">
                      {
                        services.map((item, i) => {
                          return (
                            <div key={i} className="flex gap-3 items-center">
                              <Image src="/digital-marketing/icons/correct-icon.png" alt="Correct" width={25} height={25} className="min-w-[26px] max-w-[25px]" />
                              <span>{item}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {displayCards.length !== cardData.length &&
          <button
            className="mt-6 mx-auto bg-[#DDE2FB] text-[#4E6BFF] p-4 rounded flex items-center gap-2 hover:opacity-80"
            onClick={handleCards}><AiOutlineArrowDown /> Load More</button>
        }
        {displayCards.length === cardData.length &&
          <button
            className="mt-6 mx-auto bg-[#DDE2FB] text-[#4E6BFF] p-4 rounded flex items-center gap-2 hover:opacity-80"
            onClick={handleCardLess}><AiOutlineArrowDown /> Show Less</button>
        }

      </div>
    </>
  );
}
