import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import CoreAspects from './CoreAspects';
import OurProducts from './OurProducts';
import OurOfferings from './ourOffering/OurOfferings';
import Testimonial from './Testimonial';
import GetInTouch from '../../../components/forAll/GetInTouch';
// Background Images
import mountains from '../../../images/mountains.png';
import bridge from '../../../images/bridge.png';
import hub from '../../../images/hub.png';
// Clients Logo Images
import agricultureBank from '../../../images/clientsLogo/Agriculture Development Bank Ltd.png';
import citizensBank from '../../../images/clientsLogo/Citizens Bank International Ltd.png';
import everestBank from '../../../images/clientsLogo/Everest Bank Ltd 1.png';
import excelBank from '../../../images/clientsLogo/Excel Development Bank Ltd 1.png';
import globalBank from '../../../images/clientsLogo/Global IME Bank Ltd.png';
import greenBank from '../../../images/clientsLogo/Green Development Bank Ltd.png';
import icfcFinance from '../../../images/clientsLogo/ICFC Finance Ltd.png';
import jyotiBank from '../../../images/clientsLogo/Jyoti Bikash Bank Ltd.png';
import kamanaBank from '../../../images/clientsLogo/Kamana Sewa Bikas Bank Ltd.png';
import laxmiBank from '../../../images/clientsLogo/Laxmi Bank Ltd.png';
import lumbiniBank from '../../../images/clientsLogo/Lumbini Bikas Bank Ltd.png';
import machhapuchhreBank from '../../../images/clientsLogo/Machhapuchhre Bank Ltd.png';

import { BiPlay } from 'react-icons/bi';

const Home = ({ ourClients, ourOfferingsBiskitData }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [sliceClientNumber, setSliceClientNumber] = useState(12);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);
	useEffect(() => {
		windowWidth > 1250
			? setSliceClientNumber(12)
			: windowWidth <= 1250 && windowWidth > 1020
			? setSliceClientNumber(10)
			: windowWidth <= 1020 && windowWidth > 809
			? setSliceClientNumber(8)
			: windowWidth <= 808 && windowWidth > 620
			? setSliceClientNumber(6)
			: windowWidth <= 620 && setSliceClientNumber(4);
	}, [windowWidth]);

	const navigate = useNavigate();
	return (
		<div className="home-page">
			<div className="blur-gradient-1"></div>
			<div className="blur-gradient-2"></div>
			<div className="banner-section">
				<div className="banner-wrapper">
					<div
						className="banner-image"
						style={{ backgroundImage: `url(${mountains})` }}
					></div>
				</div>
				<img className="hub-illustration" src={hub} alt="hub-foto" />
				<div className="caption-wrapper">
					<h1 className="caption">
						Digital solutions for industries <br /> across the globe
					</h1>
					<p className="slogan">
						We take care of the tech, you focus on growing your business.
					</p>
					<Button className="play-button">
						Contact Us
						<BiPlay className="play-icon" />
					</Button>
				</div>
			</div>
			<div className="about-section">
				<img
					src="https://uploads-ssl.webflow.com/603d48021c4d3f9a76f3f408/63100c22376c40ac70d9ce1d_Digital%20Payments%20for%20Business%20Startups%20What%20are%20the%20Pros%20and%20Cons.jpg"
					alt="payment-foto"
					className="payment-img"
				/>
				<div className="text-wrapper">
					<h1 className="title">About DigiHub</h1>
					<span className="discription">
						<p className="paragraph">
							Digihub Pvt. Ltd is an umbrella organization supported by national
							and international stakeholders established to bring together
							companies, people, and technologies with a unified objective of
							digital transformation of organizations all over the world with a
							special focus on digital banking services. The group of companies
							under DigiHub provide an ecosystem of products and services to
							accelerate the adoption of digital payments and lead the way for
							open banking.
						</p>
					</span>
				</div>
			</div>
			<div className="our-clients-section">
				<div className="clients-banner-wrapper">
					<div
						className="banner-image"
						style={{ backgroundImage: `url(${bridge})` }}
					></div>
				</div>
				<div className="elements-wrapper">
					<h1 className="title">Our Valuable Clients</h1>
					<div className="clients-logo-wrapper">
						{ourClients.slice(0, `${sliceClientNumber}`).map((item) => {
							const { id, img, name } = item;
							return (
								<div className="logo" key={id}>
									<div className="logo-img-wrapper">
										<img src={img} alt="logo" className="logo-image" />
									</div>
									<p className="client-name">{name}</p>
								</div>
							);
						})}
					</div>
					<Button
						className="see-more-btn"
						onClick={() => {
							navigate('/ourValuableClients');
						}}
					>
						See More
					</Button>
				</div>
			</div>
			<div className="big-container">
				<CoreAspects />
				<OurProducts />
				<OurOfferings ourOfferingsBiskitData={ourOfferingsBiskitData} />
				<Testimonial />
				{/* <Slider /> */}
				<div className="get-in-touch-section">
					<GetInTouch className="get-in-touch-comp" />
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;

Home.defaultProps = {
	ourClients: [
		{
			id: 0,
			img: agricultureBank,
			name: 'Agriculture Development Bank Ltd.',
		},
		{
			id: 1,
			img: citizensBank,
			name: 'Citizens Bank International Ltd.',
		},
		{
			id: 2,
			img: everestBank,
			name: 'Everest Bank Ltd.',
		},
		{
			id: 3,
			img: excelBank,
			name: 'Excel Development Bank Ltd.',
		},
		{
			id: 4,
			img: globalBank,
			name: 'Global IME Bank Ltd.',
		},
		{
			id: 5,
			img: greenBank,
			name: 'Green Development Bank Ltd.',
		},
		{
			id: 6,
			img: icfcFinance,
			name: 'ICFC Finance Ltd.',
		},
		{
			id: 7,
			img: jyotiBank,
			name: 'Jyoti Bikash Bank Ltd.',
		},
		{
			id: 8,
			img: kamanaBank,
			name: 'Kamana Sewa Bikas Bank Ltd.',
		},
		{
			id: 9,
			img: laxmiBank,
			name: 'Laxmi Bank Ltd.',
		},
		{
			id: 10,
			img: lumbiniBank,
			name: 'Lumbini Bikas Bank Ltd.',
		},
		{
			id: 11,
			img: machhapuchhreBank,
			name: 'Machhapuchhre Bank Ltd.',
		},
	],
	ourOfferingsBiskitData: [
		{
			id: 0,
			title: 'BANKING & LENDING',
			type: 'bankingAndLending',
			successfulDepolyments: ['30+', 'Banks'],
			tam: ['120BFIs', '(Class A, B, C & D)'],
		},
		{
			id: 1,
			title: 'PAYMENT & APIs',
			type: 'paymentAndAPIs',
			successfulDepolyments: ['5 PSPs/', '1 Bank'],
			tam: ['15 PSPs/', '1 BFIs'],
		},
		{
			id: 2,
			title: 'INVENSTMENTs',
			type: 'investments',
			successfulDepolyments: ['38 BROKERS'],
			tam: ['63 Brokers', 'inc. new'],
		},
		{
			id: 3,
			title: 'ONBOARDING',
			type: 'onboarding',
			successfulDepolyments: ['1 International', 'Telco'],
			tam: '',
		},
	],
};
