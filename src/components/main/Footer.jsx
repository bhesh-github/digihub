import React from 'react';
import Button from '@mui/material/Button';
import companyLogo from '../../images/logo.png';
import { ReactComponent as FacebookIcon } from '../../images/footer/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/footer/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../images/footer/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../images/footer/github.svg';

const Footer = () => {
	return (
		<div className="footer">
			<div className="contents">
				<div className="digihub-intro-column">
					<img src={companyLogo} className="company-logo" />
					<p className="text">
						Digihub is the fintech point for disruptive payment, lending,
						digital automation process and financial inclusion that works to
						cover all your digitization needs.
					</p>
					<span className="icons">
						<FacebookIcon />
						<TwitterIcon />
						<LinkedinIcon />
						<GithubIcon />
					</span>
				</div>
				<div className="quick-links-column">
					<h6 className="head-element">Quick Links</h6>
					<span className="links">
						<span>Home</span>
						<span>About Us</span>
						<span>Services</span>
						<span>Contact Us</span>
					</span>
				</div>
				<div className="subscribe-column">
					<h6 className="head-element">Subscribe Us</h6>
					<input
						name="email"
						type="email"
						placeholder="example@digihub.com"
						className="email-input"
					/>
					<Button className="subscribe-button">Subscribe</Button>
					
					<p className="note-text">We wont spam you ever.</p>
				</div>
			</div>
			<div className="copyright">
				Copyright © DigiHub 2023. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
