import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServicesNew from './ServicesNew';

const Services = ({ service }) => {
	return (
		<div className="cover">
			<div className="blur-gradient-4"></div>
			<div className="services-page">
				{/* <div className="services-section">
				<h1 className="heading">What We Offer ?</h1>
				<div className="services-wrapper">
					{service.map((item) => {
						const { id, name, discription } = item;
						return (
							<ServiceCard name={name} discription={discription} key={id} />
						);
					})}
				</div>
			</div> */}
				<div className="services-new-section">
					<div className="heading">
						<div className="head">
							What Services <br /> We're Offering
						</div>
						<p className="dis">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
					{service.map((item) => (
						<ServicesNew
							service={item}
							key={item.id}
							// handleContentClick={handleContentClick}
							// contentCardClass={contentCardClass}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;

Services.defaultProps = {
	service: [
		{
			id: 0,
			name: 'APIMS',
			discription:
				"One Point APIMS is one of the unique product that enables various Financial Institutions to centrally control and manage all internal and external API's required for them. APIMS comes with reusable API component and self coding methodology which helps BFI's to bring any digital products into the market 5x faster than traditional methods.",
		},
		{
			id: 1,
			name: 'Credit X',
			discription:
				'Credit X automates credit origination, appraisal and disbursement with fully automated risk classifications and differential pricing for customers. With seamless connection with credit bureaus, alternate data sources, and with all stakeholders involved in the lending lifecycle, the turnaround time for lending is reduced by more than half. ',
		},
		{
			id: 2,
			name: 'Insta Loan',
			discription:
				'InstaLoan is one of a kind automated micro-lending solution that is integrated with rich data sources to offer credit to customers at events like shopping, emergencies or missed payday. With advanced AI & auto-calibration to lower the default rates, banks can now disburse instant loans while significantly increasing the overall revenue. ',
		},
		{
			id: 3,
			name: 'Digital Remittance Platform',
			discription:
				'Digital Remittance Platform (DRP) is an approach from Digihub to help current remittance players to provide their services in digital manner 24 x 7. It comes with modern and global fin-tech approach of digital remittances and completely revisits the traditional remittance ways',
		},
		{
			id: 4,
			name: 'Wallet X',
			discription:
				"It is an internationally scalable white-label e-wallet that increases engagement with a localized experience while enhancing users' financial lives. With a focus on local commerce and built on a microservice architecture, it comes packed with features suited for the modern users of today.",
		},
		{
			id: 5,
			name: 'Business Process Management',
			discription:
				"Save more than 60% of your time with smart automation. Digi BPM takes care of all your business automation needs like workflows, IT operations, lending automation with our AI-enabled solution. Discover how leading BFI's are taking advantage of the solution.",
		},
	],
};
