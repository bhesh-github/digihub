import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { BiAnalyse } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const ServicesDetail = ({ service }) => {
	const [contentState, setContentState] = useState({});
	// const [activeBtnClass, setActiveBtnClass] = useState();

	let { slug } = useParams();

	useEffect(() => {
		setContentState(service[slug]);
		// setActiveContent(slug);
	}, []);
	const filterContent = (sentId) => {
		const c = service.find((item) => item.id === sentId);
		setContentState(c);
	};
	// console.log(activeContent);
	const navButton = service.map((item) => {
		const { id, name } = item;
		const activeBtnClass = contentState.id === id && 'active-btn' 
		// contentState.id === id && setActiveBtnClass('active-btn')
		return (
			<Button
				className={`nav-button ${activeBtnClass}`}
				key={id}
				onClick={() => {
					setContentState(id);
					filterContent(id);
				}}
			>
				{name}
			</Button>
		);
	});

	return (
		<div className="services-detail-page">
			<h1 className="heading">Our Services</h1>
			<div className="contents-wrapper">
				<div className="contents-nav">{navButton}</div>
				{/* {content} */}
				<div key={contentState.id} className="content">
					<div className="c-icon">
						<BiAnalyse className="icon" />
					</div>
					<div>
						<h2 className="title">{contentState.name}</h2>
						<p className="description">{contentState.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesDetail;

ServicesDetail.defaultProps = {
	service: [
		{
			id: 0,
			name: 'APIMS',
			description:
				"One Point APIMS is one of the unique product that enables various Financial Institutions to centrally control and manage all internal and external API's required for them. APIMS comes with reusable API component and self coding methodology which helps BFI's to bring any digital products into the market 5x faster than traditional methods.",
		},
		{
			id: 1,
			name: 'Credit X',
			description:
				'Credit X automates credit origination, appraisal and disbursement with fully automated risk classifications and differential pricing for customers. With seamless connection with credit bureaus, alternate data sources, and with all stakeholders involved in the lending lifecycle, the turnaround time for lending is reduced by more than half. ',
		},
		{
			id: 2,
			name: 'Insta Loan',
			description:
				'InstaLoan is one of a kind automated micro-lending solution that is integrated with rich data sources to offer credit to customers at events like shopping, emergencies or missed payday. With advanced AI & auto-calibration to lower the default rates, banks can now disburse instant loans while significantly increasing the overall revenue. ',
		},
		{
			id: 3,
			name: 'Digital Remittance Platform',
			description:
				'Digital Remittance Platform (DRP) is an approach from Digihub to help current remittance players to provide their services in digital manner 24 x 7. It comes with modern and global fin-tech approach of digital remittances and completely revisits the traditional remittance ways',
		},
		{
			id: 4,
			name: 'Wallet X',
			description:
				"It is an internationally scalable white-label e-wallet that increases engagement with a localized experience while enhancing users' financial lives. With a focus on local commerce and built on a microservice architecture, it comes packed with features suited for the modern users of today.",
		},
		{
			id: 5,
			name: 'Business Process Management',
			description:
				"Save more than 60% of your time with smart automation. Digi BPM takes care of all your business automation needs like workflows, IT operations, lending automation with our AI-enabled solution. Discover how leading BFI's are taking advantage of the solution.",
		},
	],
};

// const content = service.map(({ id, name, description }) => {
// 	return (
// 		<div key={id} className="content">
// 			<AiFillDatabase className="c-icon" />
// 			<div>
// 				<h2 className="title">{name}</h2>
// 				<p className="description">{description}</p>
// 			</div>
// 		</div>
// 	);
// });
