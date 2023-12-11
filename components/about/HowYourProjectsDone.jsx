import React from 'react'
import ProjectsCard from './ProjectsCard'
import ReadMoreText from './ReadMoreText'

const howYourProjectDoneData = [
    {
        id: 1,
        title: "Experience Staff",
        image: "/about/experience-staff.webp",
        desc: "The Legal Base boasts a team of highly-skilled professionals, hand-picked for their expertise and committed to delivering unparalleled legal services. We invest in their training and development to ensure they can tackle any challenge and offer an unmatched combination of expertise and scalability."
    },
    {
        id: 2,
        title: "Latest Technology",
        image: "/about/latest-technology.webp",
        desc: "The Legal Base is on the cutting-edge of legal technology, identifying and incorporating the best tools and applications to meet our client's unique needs. Our team of tech-savvy experts demystify the latest developments, assess risks and benefits, and help clients make informed decisions on new initiatives. From AI to industry standards, we know how to maximize the potential of legal technology to drive results."
    },
    {
        id: 3,
        title: "Uncompromising Security",
        image: "/about/uncompromising-security.webp",
        desc: "Data security and confidentiality are of paramount importance to The Legal Base. We ensure top confidentiality in each of our projects."
    },
    {
        id: 4,
        title: "Well Crafted Process",
        image: "/about/well-crafted-process.webp",
        desc: "TLB simplifies complex legal services with a streamlined, efficient process. Our Legal Quality Management System ensures predictable outcomes and a quality plan for each engagement, ensuring top-notch service and results."
    },
]

export default function HowYourProjectsDone() {
    return (
        <section className='px-[9%] py-20 bg-white '>
            <div className='text-center flex flex-col gap-4 '>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>How do we get your projects done?</h2>
                <ReadMoreText
                    text="The Legal Base was born from a desire to be more than just another legal services provider. Our founders
                    envisioned a company that would be a true partner to corporates, law firms, and attorneys around the
                    globe - a trusted extension of their teams that would deliver legal services and process consulting with the
                    highest level of professionalism. We strive to be a valued and integral part of our client's operations,
                    always working alongside them to achieve their goals and objectives."
                    aos="fade-left" delay="200" className='text-[#79808A]'
                />
            </div>
            {/* Projects Card */}
            <div className="flex flex-wrap justify-between mt-8 gap-4">
                {
                    howYourProjectDoneData?.map((item) => {
                        return (
                            <ProjectsCard key={item.id} data={...item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
