import React from 'react';
import Header from '../main/Header';
// Clients Logo Images
import agricultureBank from '../../images/clientsLogo/Agriculture Development Bank Ltd.png';
import citizensBank from '../../images/clientsLogo/Citizens Bank International Ltd.png';
import everestBank from '../../images/clientsLogo/Everest Bank Ltd 1.png';
import excelBank from '../../images/clientsLogo/Excel Development Bank Ltd 1.png';
import globalBank from '../../images/clientsLogo/Global IME Bank Ltd.png';
import greenBank from '../../images/clientsLogo/Green Development Bank Ltd.png';
import icfcFinance from '../../images/clientsLogo/ICFC Finance Ltd.png';
import jyotiBank from '../../images/clientsLogo/Jyoti Bikash Bank Ltd.png';
import kamanaBank from '../../images/clientsLogo/Kamana Sewa Bikas Bank Ltd.png';
import laxmiBank from '../../images/clientsLogo/Laxmi Bank Ltd.png';
import lumbiniBank from '../../images/clientsLogo/Lumbini Bikas Bank Ltd.png';
import machhapuchhreBank from '../../images/clientsLogo/Machhapuchhre Bank Ltd.png';
import MiniBanner from '../forAll/MiniBanner';

const OurClients = ({ ourClients }) => {
	return (
		<>
			<Header />
			<MiniBanner caption="Our Valuable Clients" />
			<div className="our-clients-page">
				{/* <h1 className="heading">Our Valuable Clients</h1> */}
				<div className="clients-logo-wrapper">
					{ourClients.map((item) => {
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
			</div>
		</>
	);
};

export default OurClients;

OurClients.defaultProps = {
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
};
