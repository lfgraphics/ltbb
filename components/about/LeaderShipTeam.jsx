import React from 'react'
import LeaderShipTeamCard from './LeaderShipTeamCard'
import ReadMoreText from './ReadMoreText'

const leaderShipTeamData = [
    {
        id: 1,
        name: "Yajuvendra.V.Singh",
        designation: "CEO",
        linkedin: "https://www.linkedin.com/in/yaj-singh-tlb-global-lpo/",
        image: "/about/yaj.webp",
    },
    {
        id: 2,
        name: "Anshu Gautam",
        designation: "Director",
        linkedin: "https://www.linkedin.com/in/anshu-gautam-044b9930/",
        image: "/about/anshu.webp",
    },
    {
        id: 3,
        name: "Shashi Shekhar",
        designation: "Principal Advisor",
        linkedin: "https://www.linkedin.com/in/shashi-shekhar-pandey-a4553912/",
        image: "/about/sashi.webp",
    },
]

export default function LeaderShipTeam() {
    return (
        <section className='px-[9%] py-16 bg-white'>
            <div className='text-center flex flex-col gap-4 '>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>Meet our leadership team</h2>
                <ReadMoreText
                    text="The Legal Base was born from a desire to be more than just another legal services provider. Our founders envisioned a company that would be a true partner to corporations, law firms, and attorneys around the globe - a trusted extension of their teams that would deliver legal services and process consulting with the highest level of professionalism. We strive to be a valued and integral part of our client's operations, always working alongside them to achieve their goals and objectives. Our leadership team are global legal and professional services industry experts who have over 20 years of international experience."
                    aos="fade-left" delay="200" className='text-[#79808A]'
                />
            </div>
            {/* Team Card */}
            <div className="flex gap-8 mt-12 max-w-5xl mx-auto flex-wrap">
                {
                    leaderShipTeamData.map((item) => (
                        <LeaderShipTeamCard key={item.id} data={item} />
                    ))
                }
            </div>
        </section>
    )
}
