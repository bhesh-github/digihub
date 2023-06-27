import React from 'react';
import miniBannerImg from '../../images/forAll/mini-banner.png';
const MiniBanner = ({ caption }) => {
	return (
		<div className="mini-banner-comp">
			<img
				src={miniBannerImg}
				className="mini-img"
				style={{ height: '17em', width: '100%', objectFit: 'cover' }}
			/>
			<h1 className="caption">{caption}</h1>
		</div>
	);
};

export default MiniBanner;
