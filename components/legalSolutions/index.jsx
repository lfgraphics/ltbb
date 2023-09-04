import { tlbServicesData } from '@/app/data/tlbServices';
import ServiceCard from '../cards/Services/ServiceCard';

const LegalSolutions = () => {
	return (
		<div className='flex flex-col items-center gap-12 p-8 mt-8'>
			<span className='text-xl font-semibold tracking-wide'>LEGAL SOLUTIONS</span>
			<div className='flex justify-center w-11/12 flex-wrap gap-2'>
				{tlbServicesData.map((service) => (
					<ServiceCard
						key={service.title}
						route={service.href}
						hoverData={service.desc}
						title={service.title}
            url={service.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default LegalSolutions;
