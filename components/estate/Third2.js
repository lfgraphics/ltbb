"use client"

import "./styles.css";

const cardData = [
  {
    title: "Expertise:",
    description: "Estate planning involves complex legal, financial, and tax considerations. By outsourcing to TLB’s specialized estate planning professionals, law firms and attorneys can tap into their expertise and knowledge to create a comprehensive and effective estate plan.",
  },
  {
    title: "Personalized Solutions:",
    description: "TLB’s estate planning professionals can tailor the estate plan to suit the individual's unique needs and goals. They can provide personalized advice and recommend appropriate strategies based on the individual's financial situation, family dynamics, and long-term objectives.",
  },
  {
    title: "Time-Saving:",
    description: "Estate planning can be a time-consuming process, especially for those who are not familiar with the legal and financial intricacies involved. By outsourcing to TLB, law firms and attorneys can delegate the tasks to experts, allowing them to focus on other important aspects of their life and business.",
  },
  {
    title: "Minimize Errors and Omissions:",
    description: "Estate planning mistakes can lead to legal disputes, tax issues, or unintended distribution of assets. TLB’s estate planning professionals who specialize in estate planning can help minimize the risk of errors and ensure that the plan is legally valid and effective.",
  },
  {
    title: "Keeping Up with Changing Laws:",
    description: "Estate planning laws and regulations are subject to change. TLB’s estate planning professionals stay up-to-date with the latest legal developments, ensuring that the estate plan remains compliant with current laws.",
  },
  {
    title: "Objective Advice:",
    description: "TLB can provide an objective perspective on sensitive family matters and financial decisions, helping to mediate potential conflicts and ensuring fairness in the distribution of assets.",
  },
  {
    title: "Confidentiality and Privacy:",
    description: "Estate planning involves sharing personal and financial information. By outsourcing to TLB’s estate planning professionals, law firms and attorneys can maintain a higher level of confidentiality and privacy compared to sharing sensitive details with multiple parties.",
  },
  {
    title: "Continuity and Support:",
    description: "TLB can offer ongoing support, periodically reviewing and updating the plan as circumstances change, such as changes in tax laws, family situations, or financial status.",
  },
  {
    title: "Cost-Effective: ",
    description: "Outsourcing can be more cost-effective than hiring a full-time in-house estate planner, especially for individuals with relatively straightforward estate planning needs.",
  },
  {
    title: "Specialized Services: ",
    description: "TLB offers a wide range of specialized services, including tax planning, trust administration, and business succession planning, providing a comprehensive approach to estate planning.",
  },

];
export default function Third2() {

  const shouldAddBorderRight = (i) => {
    return (i !== 1 && i !== 3 && i !== 5 && i !== 7 && i !== 9);
  };

  const shouldAddBorderRightXL = (i) => {
    return (i !== 2 && i !== 5 && i !== 8 && i !== 9);
  };

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why choose TLB’s Estate Planning Services?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing estate planning services to TLB can be beneficial for several reasons:
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {/* Step 2: Map the card data to the SwiperSlides */}
          {cardData.map((card, i) => (
            <div
              key={i}
              className={`bg-white tiles p-8 flex-1 w-full min-w-[300px] border-b-[1px] md:border-b-0 md:max-w-[50%] xl:max-w-[400px]
                ${shouldAddBorderRight(i) && "md:border-r-[1px]"} 
                ${shouldAddBorderRight(i) && !shouldAddBorderRightXL(i) && "xl:border-r-0"}
                ${shouldAddBorderRightXL(i) && "xl:border-r-[1px]"}
                border-[#E4E4E7]`}
            >
              <div className="flex flex-col mb-6">
                <div className="w-12 h-12 flex">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="6" fill="#374151" />
                    <path d="M9.83594 19.1665L14.5026 23.8332L26.1693 12.1665" stroke="white" strokeWidth="2.33333"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <h3 className="text-xl font-semiblod">{card.title}</h3>
              </div>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}