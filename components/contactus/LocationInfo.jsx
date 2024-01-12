import React from 'react'
import Link from 'next/link'

export default function LocationInfo({ address, email, phone }) {
    return (
        <div className='bg-[rgba(24,28,49,0.13)] px-8 py-6 rounded-[32px] flex-1 flex flex-col gap-6 md:justify-between'>
            <div className='flex flex-col gap-2'>
                <label className='text-[#909396] text-base font-thin' htmlFor="address">Address</label>
                <div className='text-lg lg:text-xl font-semibold'>{address}</div>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-[#909396] text-base font-thin' htmlFor="email">Email</label>
                <div className='text-lg lg:text-xl font-semibold'>{email}</div>
            </div>
            {phone && <div className='flex flex-col gap-2'>
                <label className='text-[#909396] text-base font-thin' htmlFor="phone">Phone</label>
                <div className='text-lg lg:text-xl font-semibold'>{phone}</div>
            </div>}
            <div className='flex items-center gap-3'>
                <Link href="https://twitter.com/thelegalbase" className='w-12 h-12 rounded-full bg-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.71 10.62L20.41 3H18.83L13 9.62L8.36 3H3L10.03 13L3 21H4.59L10.73 14.01L15.64 21H21L13.71 10.62ZM11.54 13.1L10.83 12.1L5.16 4.17H7.6L12.17 10.57L12.88 11.57L18.83 19.89H16.39L11.54 13.09V13.1Z" fill="#212833" />
                    </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/thelegalbase/" className='w-12 h-12 rounded-full bg-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.06078 8.6H6.43078V21.75H2.06078V8.59V8.6ZM4.27078 2.25C2.77078 2.25 1.80078 3.23 1.80078 4.52C1.80078 5.78 2.75078 6.8 4.22078 6.8H4.24078C5.77078 6.8 6.72078 5.78 6.72078 4.52C6.69078 3.23 5.77078 2.25 4.27078 2.25ZM17.1708 8.28C16.3775 8.24822 15.5906 8.43467 14.8959 8.81905C14.2012 9.20343 13.6253 9.771 13.2308 10.46V8.59H8.85078C8.91078 9.83 8.85078 21.75 8.85078 21.75H13.2308V14.4C13.2308 14 13.2508 13.62 13.3708 13.33C13.6908 12.55 14.4108 11.73 15.6108 11.73C17.2008 11.73 17.8308 12.94 17.8308 14.71V21.75H22.2008V14.21C22.2008 10.16 20.0508 8.28 17.1708 8.28Z" fill="#212833" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
