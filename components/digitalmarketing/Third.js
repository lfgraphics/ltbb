"use client"
import React,{useState} from "react";
import Image from "next/image";
import {AiOutlineArrowDown} from "react-icons/ai";

const cardData = [
  {
    title: "Targeted email marketing campaigns",
    description: "At TLB we believe targeting emails to prospective leads can do wonders for a law firm. Through targeted emails, you can run personalized campaigns that will connect your leads or clients to your law firm. Targeted email marketing is something that’s rigorously practiced in all kinds of businesses to get desired clients to connect to the decision-makers of a business.",
    subtitle:"What we offer in targeted email marketing campaigns",
    features:["Personalized email templates ","Complete handling of email campaigns ","Scheduling and rescheduling of emails as per the requirements.","Follow-ups with the interested leads"],
    images:"/digital-marketing/digital-marketing-1.webp"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Search engine optimization (SEO) is included in TLB’s digital marketing services to ensure online exposure on search engines for the clients. TLB can help increase the number of quality visitors to client’s website by creating optimized content that focuses on important keywords that define the brand. ",
    subtitle:"What we offer in SEO",
    features:["Link building ","User-friendly and search engine-friendly content ","Well researched keywords.","Content optimization","On-page SEO","Quality leads","Digital growth","Building a better reputation for your firm"],
    images:"/digital-marketing/digital-marketing-3.webp"
  },
  {
    title: "Website Optimization and Development",
    description: "Web design and development are included as part of TLB’s digital marketing services. Our digital marketing professionals include creative and efficient web designers who work with clients to create a perfect website. TLB provides optimized content along with a beautiful, functional website with the assistance of our SEO professionals.",
    subtitle: "What we offer in Website optimization and development",
    features: [
      "Custom WordPress Web Design",
      "Optimized for Search Engines",
      "User-Friendly Navigation",
      "Responsive Web Design for All Devices",
      "ADA-Compliance to Improve Accessibility"
    ],
    images:"/digital-marketing/digital-marketing-5.webp"
  },
  {
    title: "Social Media Optimization",
    description: "When it comes to engaging social media followers, TLB’s digital marketing team produces outstanding outcomes. From developing a content strategy to conducting advertising campaigns, our social media team can assist clients in developing the ideal social media initiatives that will increase their online presence and produce more leads for their law practice.",
    subtitle: "What we offer in Social Media optimization:",
    features: [
      "Optimization and management of Linkedin, Facebook, Instagram, Twitter, Youtube"
    ],
     images:"/digital-marketing/digital-marketing-4.webp"
  },
  {
    title: "Pay-Per-Click",
    description: "If clients need results quickly, TLB’s digital marketing services include pay-per-click (PPC) advertising. We walk the clients through the ins and outs of online advertising so they can maximize return on investment (ROI) with high-converting ads. Google Ads-certified marketers with extensive expertise operating lucrative PPC campaigns are among TLB’s digital marketing professionals.",
    subtitle: "What we offer in PPC:",
    features: [
      "Targeted Advertising",
      "Increased Website Traffic",
      "Improve Conversions from Qualified Visitors",
      "Increased Recognition and Awareness",
      "Campaigns Tailored to Any Budget"
    ],
     images:"/digital-marketing/digital-marketing-6.webp"
  },
  {
    title: "Logo Design and Rebranding",
    description: "It's never too late to step up your game in the market and with TLB. Our Digital Marketing services for law firms offer custom logo design solutions and complete rebranding. A unique logo and relevant logo will help your clients to connect better with what you serve. Rebranding and a relevant logo are integral parts of a successful business.",
    subtitle: "What we offer in logo design and rebranding:",
    features: [
      "Custom logo design that fits your firm",
      "Market research to better understand your clients.",
      "Rebranding as per the requirement"
    ],
     images:"/Estate Planning/pexels-mikhail-nilov-7731330.jpg"
  },
  {
    title: "Blogging, Case Studies, White Papers, and Articles",
    description: "Gain visibility among your desired audience with relevant blogs and articles. TLB has experienced and highly qualified content writers that are proficient in writing blogs, articles, case studies, and white papers for law firms.",
    subtitle: "What we offer in Blogging, Case Studies, White Papers and Articles:",
    features: [
      "Relevant and trending legal blogs and articles",
      "Well-researched and detailed case studies of your projects",
      "Well-crafted and researched white papers."
    ],
    images:"/Immigration/pexels-sheila-731217.jpg"
  },
  {
    title: "Legal Content Writing",
    description: "Every marketing campaign requires a captivating copy. TLB’s digital marketing professionals include talented copywriters who create strategic material for your website, blog posts, emails, and social media updates. For the greatest results, we ensure that clients' digital marketing tactics are supported with optimized and conversion-focused content.",
    subtitle: "What we offer in legal content writing:",
    features: [
      "Well-researched and SEO-friendly website content",
      "Blog posts and email templates",
      "Social media posts",
      "Optimized and conversion-focused content."
    ],
     images:"/Legal Research/pexels-vlada-karpovich-4050312.jpg"
  },
  {
    title: "Business Listing and Award Rankings",
    description: "TLB helps legal firms get their businesses listed with highly accredited platforms. We help our clients get better client reviews and a better reputation in the market which helps them to better their award rankings.",
    subtitle: "What we offer in business listing and award rankings:",
    features: [
      "Business listing",
      "Helping you get more awards.",
      "Better reputation and clientele"
    ],
     images:"/Personal Injury/pexels-rdne-stock-project-6520179.jpg"
  },
  {
    title: "Targeted Email Marketing Campaigns",
    description: "At TLB, we believe targeting emails to prospective leads can do wonders for a law firm. Through targeted emails, you can run personalized campaigns that will connect your leads or clients to your law firm. Targeted email marketing is something that’s rigorously practiced in all kinds of businesses to get desired clients to connect to the decision-makers of a business.",
    subtitle: "What we offer in targeted email marketing campaigns",
    features: [
      "Personalized email templates",
      "Complete handling of email campaigns",
      "Scheduling and rescheduling of emails as per the requirements.",
      "Follow-ups with the interested leads"
    ],
     images:"/Paralegal Services/pexels-sora-shimazaki-5668802.jpg"
  }
];

export default function Third() {

  const [showCards,setShowCards] = useState(3);
  const displayCards = cardData.slice(0, showCards);

  const handleCards = ()=>{
    if(showCards === cardData.length)return;
    setShowCards((prev)=>prev+3);
  }

  const handleCardLess = ()=>{
    setShowCards(3)
  }

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="100">
            TLB’s Digital Marketing Services
          </h2>
          <p className="dark:text-gray-400 max-w-4xl mx-auto" data-aos="fade-left" data-aos-delay="200">
            Lawyers and attorneys at law firms frequently lack the time and resources to negotiate the complex and time-consuming realm of digital marketing. At TLB, we appreciate the necessity for law firms to concentrate on their cases. That is why we provide all-in-one solutions to assist clients in increasing their online presence, attracting quality leads, and growing their income.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10 flex-wrap px-[5%]">
          {
            displayCards?.map((item,i)=> {
              const {title,description,subtitle,features,images} = item;
              return (
                  < div
                      key={i}
                      data-aos="zoom-in" data-aos-delay={(i+1)*100}
              className = "flex-1  w-full min-w-[300px] xl:max-w-[350px] rounded-md p-4 bg-white drop-shadow-md" >
                  < div
              className = "relative w-full h-56" >
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
                    features.map((item,i)=>{
                      return(
                          <div key={i} className="flex gap-3 items-center">
                           <Image src="/digital-marketing/icons/correct-icon.png" alt="Correct" width={25} height={25} className="min-w-[26px] max-w-[25px]"/>
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
        { displayCards.length !== cardData.length &&
          <button
            className="mt-6 mx-auto bg-[#DDE2FB] text-[#4E6BFF] p-4 rounded flex items-center gap-2 hover:opacity-80"
            onClick={handleCards}><AiOutlineArrowDown/> Load More</button>
        }
        { displayCards.length === cardData.length &&
          <button
            className="mt-6 mx-auto bg-[#DDE2FB] text-[#4E6BFF] p-4 rounded flex items-center gap-2 hover:opacity-80"
            onClick={handleCardLess}><AiOutlineArrowDown/> Show Less</button>
        }

      </div>
    </>
  );
}
