'use client';
import { useEffect, useState } from 'react';
import BannerContent from './BannerContent';
import BannerVideo from './BannerVideo';
export default function Banner() {
  const [bannerIndex, setBannerIndex] = useState(3);
	const bannerHeading = {
		1: {
			title: 'LEADING GLOBAL LPO',
			content:
				'The Legal Base LPO is a global outsourcing partner which works closely with law firms, attorneys and legal departments of corporations to deliver complex and innovative legal solutions.',
		},
    2: {
      title: 'title 2',
      content: 'content 2'
    },
    3: {
      title: 'title 3',
      content: 'content 3'
    }
	};

  useEffect(() => {
    let intervalID = setTimeout(() => {
      console.log('here')
      setBannerIndex(prev => {
        if(prev === 3) return 1;
        return prev+1
      })
    },2000);

    return () => {
      clearInterval(intervalID);
    }
  })

	return (
		<div className='min-h-[85vh] sm:min-h-[75vh] py-10 bg-homeBg homeClipPath px-[5%]'>
			<div className='flex flex-col-reverse sm:flex-row gap-12 items-center h-full md:pt-10'>
				<BannerContent content={bannerHeading[bannerIndex]}/>
				<BannerVideo />
			</div>
			<div className='border-white border-2 flex justify-center gap-3'>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
}
