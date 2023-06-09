import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServicesNew from './ServicesNew';
import Header from '../../main/Header';
import MiniBanner from '../../forAll/MiniBanner';
// ------------------------------------------------------------
import apims from '../../../images/services/servicesIcons/APIMS@4x-8.png';
import business from '../../../images/services/servicesIcons/Business process management@4x-8.png';
import creditX from '../../../images/services/servicesIcons/Credit X@4x-8.png';
import digitalRemittance from '../../../images/services/servicesIcons/Digital remittance platfrom@4x-8.png';
import instaLoan from '../../../images/services/servicesIcons/Insta loan@4x-8.png';
import walletX from '../../../images/services/servicesIcons/Wallet X@4x-8.png';
const Services = ({ service }) => {
	return (
		<>
			<Header  />
			<div className="cover">
				{/* <div className="blur-gradient-4"></div> */}
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
					<MiniBanner caption="What Services We're Offering"/>
					<div className="services-new-section">
						<div className="heading">
							{/* <div className="head">What Services We're Offering</div> */}
						</div>
						<div className="service-wrapper">
							{service.map((item, idx) => {
								return <ServicesNew service={item} idx={idx} key={item.id} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;

Services.defaultProps = {
	service: [
		{
			id: 0,
			name: 'APIMS',
			img: apims,
			discription:
				"One Point APIMS is one of the unique product that enables various Financial Institutions to centrally control and manage all internal and external API's required for them. APIMS comes with reusable API component and self coding methodology which helps BFI's to bring any digital products into the market 5x faster than traditional methods.",
		},
		{
			id: 1,
			name: 'Credit X',

			img: creditX,
			discription:
				'Credit X automates credit origination, appraisal and disbursement with fully automated risk classifications and differential pricing for customers. With seamless connection with credit bureaus, alternate data sources, and with all stakeholders involved in the lending lifecycle, the turnaround time for lending is reduced by more than half. ',
		},
		{
			id: 2,
			name: 'Insta Loan',
			img: instaLoan,
			discription:
				'InstaLoan is one of a kind automated micro-lending solution that is integrated with rich data sources to offer credit to customers at events like shopping, emergencies or missed payday. With advanced AI & auto-calibration to lower the default rates, banks can now disburse instant loans while significantly increasing the overall revenue. ',
		},
		{
			id: 3,
			name: 'Digital Remittance Platform',
			img: digitalRemittance,
			discription:
				'Digital Remittance Platform (DRP) is an approach from Digihub to help current remittance players to provide their services in digital manner 24 x 7. It comes with modern and global fin-tech approach of digital remittances and completely revisits the traditional remittance ways',
		},
		{
			id: 4,
			name: 'Wallet X',
			img: walletX,
			discription:
				"It is an internationally scalable white-label e-wallet that increases engagement with a localized experience while enhancing users' financial lives. With a focus on local commerce and built on a microservice architecture, it comes packed with features suited for the modern users of today.",
		},
		{
			id: 5,
			name: 'Business Process Management',
			img: business,
			discription:
				"Save more than 60% of your time with smart automation. Digi BPM takes care of all your business automation needs like workflows, IT operations, lending automation with our AI-enabled solution. Discover how leading BFI's are taking advantage of the solution.",
		},
	],
	// service: [
	// 	{
	// 		id: 0,
	// 		name: 'APIMS',
	// 		img: apims,
	// 		discription:
	// 			"One Point APIMS is one of the unique product that enables various Financial Institutions to centrally control and manage all internal and external API's required for them. APIMS comes with reusable API component and self coding methodology which helps BFI's to bring any digital products into the market 5x faster than traditional methods.",
	// 	},
	// 	{
	// 		id: 1,
	// 		name: 'Credit X',

	// 		img: creditX,
	// 		discription:
	// 			'Credit X automates credit origination, appraisal and disbursement with fully automated risk classifications and differential pricing for customers. With seamless connection with credit bureaus, alternate data sources, and with all stakeholders involved in the lending lifecycle, the turnaround time for lending is reduced by more than half. ',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Insta Loan',
	// 		img: instaLoan,
	// 		discription:
	// 			'InstaLoan is one of a kind automated micro-lending solution that is integrated with rich data sources to offer credit to customers at events like shopping, emergencies or missed payday. With advanced AI & auto-calibration to lower the default rates, banks can now disburse instant loans while significantly increasing the overall revenue. ',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Digital Remittance Platform',
	// 		img: digitalRemittance,
	// 		discription:
	// 			'Digital Remittance Platform (DRP) is an approach from Digihub to help current remittance players to provide their services in digital manner 24 x 7. It comes with modern and global fin-tech approach of digital remittances and completely revisits the traditional remittance ways',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Wallet X',
	// 		img: walletX,
	// 		discription:
	// 			"It is an internationally scalable white-label e-wallet that increases engagement with a localized experience while enhancing users' financial lives. With a focus on local commerce and built on a microservice architecture, it comes packed with features suited for the modern users of today.",
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Business Process Management',
	// 		img: business,
	// 		discription:
	// 			"Save more than 60% of your time with smart automation. Digi BPM takes care of all your business automation needs like workflows, IT operations, lending automation with our AI-enabled solution. Discover how leading BFI's are taking advantage of the solution.",
	// 	},
	// ],
};
