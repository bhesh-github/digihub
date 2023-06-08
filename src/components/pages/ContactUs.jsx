import React from 'react';
import GetInTouch from '../forAll/GetInTouch';

const ContactUs = () => {
	return (
		<div className="contact-us-page">
			<div className="wrapper">
				<GetInTouch />
			</div>
			<div className="map-container">
				<iframe
					title="google-map"
					className="google-map"
					src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d403468.4381890566!2d84.0847737765562!3d27.528059359770225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.731558399999997!2d85.3573632!4m5!1s0x3994b0337772df43%3A0xafa1603d5d63a217!2schitwan%20national%20park!3m2!1d27.519285!2d84.31353179999999!5e0!3m2!1sen!2snp!4v1684228620028!5m2!1sen!2snp"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="map"></div>
		</div>
	);
};

export default ContactUs;
