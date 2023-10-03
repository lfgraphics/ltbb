export default function BannerVideo() {
	return (
		<div className='flex-1 w-full h-full max-h-80'>
			<div className='border-2 mx-auto rounded-lg min-h-[250px] md:min-h-[360px] w-full max-w-xs md:max-w-lg border-gray-400 h-full relative'>
				<div className='absolute h-full w-full flex justify-center items-center'>
					<video
						className='w-full h-full relative object-center object-cover rounded-lg -left-3 -top-3'
						loop
						autoPlay
						muted
					>
						<source
							src='https://thelegalbase.com/wp-content/uploads/2022/07/My-Movie_Website.mp4'
							type='video/mp4'
						/>
					</video>
				</div>
			</div>
		</div>
	);
}
