import React from 'react';
import { SiZapier } from 'react-icons/si';

const serviceCard = ({ name, discription }) => {
	
	return (
		<div className="service-card" id='card'>
			<SiZapier className="icon" />
			<h3 className="title">{name}</h3>
			<p className="dis">{discription}</p>
		</div>
	);
};

export default serviceCard;
