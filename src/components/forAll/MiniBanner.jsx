import React from 'react';
import miniBannerImg from '../../images/forAll/mini-banner.png';
const MiniBanner = ({ caption }) => {
	return (
		<div className="mini-banner-comp">
			<img
				src={miniBannerImg}
				className="mini-img"
				style={{ width: '100%', height: '100%' }}
			/>
			<h1 className="caption">{caption}</h1>
		</div>
	);
};

export default MiniBanner;
