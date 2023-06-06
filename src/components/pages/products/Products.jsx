import React from 'react';
import { SiConsul } from 'react-icons/si';

const Products = ({ products }) => {
	return (
		<div className="products-page">
			<div className="products-section">
				<h1 className="heading">Our Offerings</h1>
				<div className="cards-wrapper">
					{/* {products.map((item) => {
						const { id, productName, note, list } = item;
						return (
							<div className="card" key={id} id={'card-' + id}>
								<h2 className="title">{productName}</h2>
								<p className="note">{note}</p>
								<div className="content-cards-wrapper">
									{list.map((item) => {
										const { id, title, discription, discriptionList } = item;
										return (
											<div className="content-card" key={id}>
												<div className="icon-wrapper">
													<SiConsul className="icon" />
												</div>
												<div className="dis">
													<h5 className="my-title">{title}</h5>
													<p className="dis">{discription}</p>
													<ul className="discription-list">
														{discriptionList &&
															discriptionList.map((item) => <li>{item}</li>)}
													</ul>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})} */}
					<div className="new-cards-wrapper">
						{products.map((item) => {
							const { id, productName, note, list } = item;
							return (
								<div className="new-card" key={id}>
									<div className="title-intro">
										<h2 className="title">{productName}</h2>
										<p className="note">{note}</p>
									</div>
									<div className="contents">
										{list.map((item) => {
											const { id, title, discription, discriptionList } = item;
											return (
												<div className="content" key={id}>
													<div className="icon-wrapper">
														<SiConsul className="icon" />
													</div>
													<div className='text'>
														<h6 className='title'>{title}</h6>
														<p className="dis">{discription}</p>
														<ul className="dis-list">
															{discriptionList &&
																discriptionList.map((item) => <li>{item}</li>)}
														</ul>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;

Products.defaultProps = {
	products: [
		{
			id: 0,
			productName: 'Banking & Lending',
			note: 'Included but not limited to Mobile Banking, Credit X and InstaFund',
			list: [
				{
					id: 0,
					title: 'Mobile Banking',
					discription:
						'Our mobile banking service provides a secure and convenient way for users to access and manage their bank accounts on-the-go.',
				},
				{
					id: 1,
					title: 'Loan Origination System',
					discription:
						'Credit X streamlines the loan process, offers paperless appraisals and document management, and provides customizable features for financial institutions.',
				},
				{
					id: 2,
					title: 'Micro Loan Engine',
					discription:
						'Insta Loan is a data-driven micro-credit solution that simplifies lending with powerful features for low-ticket, high-volume loans.',
				},
			],
		},
		{
			id: 1,
			productName: 'PAYMENTs & APIs',
			note: 'Included but not limited to E-Wallet, Channel Manager, IBFT Switch and QR Switch.',
			list: [
				{
					id: 0,
					title: 'Channel Manager',
					discription:
						'Channel Manager integrates applications and services through an Open API infrastructure, simplifying the integration process and enhancing efficiency and scalability.',
				},
				{
					id: 1,
					title: 'IBFT & QR Switch',
					discription:
						'A non card switch that connects and manages transaction and settlement among all the participants.',
					discriptionList: [
						'payment gateway',
						'link-based payment collection tool',
						'schedule payments cardless withdrawal',
						'merchant management,',
					],
				},
				{
					id: 2,
					title: 'E-wallet',
					discription:
						'Our ewallet solution offers a variety of features including agile architecture to accommodate local requirements, support for Card and Non-Card APIs, P2P, M2P, and P2M modes, a multi-tier agent model, multi-currency support, and QR and NFC payment capabilities.',
				},
			],
		},
		{
			id: 2,
			productName: 'INVESTMENTs',
			note: 'Included but not limited to Broker Back-Office System & Reconciliation, Portfolio Management System & Trade Management System.',
			list: [
				{
					id: 0,
					title: 'Broker Back Office',
					discription:
						"Broker Back Office streamlines stock brokers' operations from onboarding to settlements with real-time reconciliations and deep integration with trade management.",
				},
				{
					id: 1,
					title: 'Portfolio Mgmt System',
					discription:
						'Real-time dashboard with charts and alerts, allowing for easy portfolio monitoring and management.',
				},
				{
					id: 2,
					title: 'Trade Mgmt System',
					discription:
						'Digihub & IRONEONE TECHNOLOGIES partnered to offer an alternative TMS solution approved by NEPSE.',
				},
			],
		},
		{
			id: 3,
			productName: 'ONBOARDING',
			note: 'Included but not limited to Sim-management (Telcos) & E-KYC for BFIs & NBFIs.',
			list: [
				{
					id: 0,
					title: 'Sim Registration & Management ',
					discription:
						'Automated onboarding and SIM activation /deactivation solution, utilizing Face Match, Liveliness Detection, and OCR technologies for seamless security. Partner APIs enable SIM management, agent and customer management, and direct access to Government ID APIs.',
				},
				{
					id: 1,
					title: 'EKYC',
					discription:
						"150+ countries' Passports Supported, World-class Face match and liveliness detection, Ready Infrastructure to consume secondary government sources, Most economic market rate",
				},
			],
		},
	],
};
