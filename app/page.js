import React from 'react';

export default function Home() {
	return (
		<>
			<video
				autoPlay
				muted
				playsInline
				loop
				className='object-cover h-screen w-full'
			>
				<source
					src='https://thelegalbase.com/wp-content/uploads/2022/07/My-Movie_Website.mp4'
					type='video/mp4'
				/>
			</video>
		</>
	);
}
