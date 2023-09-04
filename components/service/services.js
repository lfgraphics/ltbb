import React from 'react';
import './style.css';
import Link from 'next/link';
import {tlbServicesData} from '../../app/data/tlbServices'

const services = () => {
	return (
		<React.Fragment>
			<section className='i pg ji gp uq'>
				{/* Bg Shapes */}
				<span className='rc h s r vd fd/5 fh rm' />
				<img src='images/shape-08.svg' alt='Shape Bg' className='h q r' />
				<img src='images/shape-09.svg' alt='Shape' className='of h y z/2' />
				<img src='images/shape-10.svg' alt='Shape' className='h _ aa' />
				<img src='images/shape-11.svg' alt='Shape' className='of h m ba' />
				{/* Section Services Start */}

				{/* Section Services End */}
			</section>

			<section className='lj tp kr'>
				{/* Section Title Start */}
				<div x-data='{ sectionTitle: `We Offer The Best Quality Service for You`, sectionTitleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}'>
					<div className='animate_top bb ze rj ki xn vq'>
						<h2
							x-text='sectionTitle'
							className='fk vj pr kk wm on/5 gq/2 bb _b'
						>
							We Offer The Best Quality Service for You
						</h2>
						{/* <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" /> */}
						<p className='bb on/5 wo/5 hq'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
							convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
							ante in maximus.
						</p>
					</div>
				</div>
				{/* Section Title End */}
				<div className='bb ze ki xn yq mb en'>
					<div className='wc qf pn xo ng'>
						{/* Service Item */}

						{tlbServicesData.map((service, index) => (
							<Link key={index} href={service.href}>
								<div className='animate_top  sg oi pi zq ml il am cn _m shadow-lg hover:shadow-xl cursor-pointer h-80 mt-6 '>
									<img src={`images/icon-04.svg`} alt='Icon' />
									<h4 className='ek zj kk wm nb _b'>{service.title}</h4>
									<p>{service.desc.slice(0, 100)}...</p>
								</div>
							</Link>
						))}
						{/* Service Item */}

						{/* Service Item */}

						{/* Service Item */}

						{/* Service Item */}

						{/* Service Item */}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default services;
