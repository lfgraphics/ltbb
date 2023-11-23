import React, { useState } from 'react'

export default function ReadMoreText({ text, aos, delay, className }) {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div data-aos={aos} data-aos-delay={delay} className={className}>
            <p className={`${showMore ? "line-clamp-none" : "line-clamp-5"}  md:line-clamp-none`}>{text}</p>
            {!showMore && <span className='md:hidden underline' onClick={handleShowMore}>Read More</span>}
            {showMore && <span className='md:hidden underline' onClick={handleShowMore}>Read Less</span>}
        </div>
    )
}
