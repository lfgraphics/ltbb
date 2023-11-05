import React from 'react'
import LeaderShipTeamCard from './LeaderShipTeamCard'

const leaderShipTeamData = [
    {
        id: 1,
        name: "Yajuvendra.V.Singh",
        designation: "CEO",
        twitter: "#",
        linkedin: "#",
        image: "/about/CEO.webp",
    },
    {
        id: 2,
        name: "Anshu Gautam",
        designation: "Director",
        twitter: "#",
        linkedin: "#",
        image: "/about/Director.webp",
    },
    {
        id: 3,
        name: "Shashi Shekhar",
        designation: "Principal Advisor",
        twitter: "#",
        linkedin: "#",
        image: "/about/principal-advisor.webp",
    },
]

export default function LeaderShipTeam() {
    return (
        <section className='px-[9%] py-16 bg-white'>
            <div className='text-center flex flex-col gap-4 '>
                <h2 data-aos="fade-right" data-aos-delay="100" className='text-2xl md:text-3xl lg:text-4xl'>Meet our leadership team</h2>
                <p data-aos="fade-left" data-aos-delay="200" className='text-[#79808A]'>The Legal Base was born from a desire to be more than just another legal services provider. Our founders envisioned a company that would be a true partner to corporations, law firms, and attorneys around the globe - a trusted extension of their teams that would deliver legal services and process consulting with the highest level of professionalism. We strive to be a valued and integral part of our client's operations, always working alongside them to achieve their goals and objectives. Our leadership team are global legal and professional services industry experts who have over 20 years of international experience.</p>
            </div>
            {/* Team Card */}
            <div className="flex gap-8 mt-12 max-w-5xl mx-auto flex-wrap">
                {
                    leaderShipTeamData.map((item) => (
                        <LeaderShipTeamCard key={item.id} data={...item} />
                    ))
                }
            </div>
        </section>
    )
}
