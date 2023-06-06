import React from 'react';
import Button from '@mui/material/Button';
import companyLogo from '../../images/logo.png';
import { ReactComponent as FacebookIcon } from '../../images/footer/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/footer/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../images/footer/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../images/footer/github.svg';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();
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
						<FacebookIcon className="icon" />
						<TwitterIcon className="icon" />
						<LinkedinIcon className="icon" />
						<GithubIcon className="icon" />
					</span>
				</div>
				<div className="quick-links-column">
					<h6 className="head-element">Quick Links</h6>
					<span className="links">
						{/* <a href="/" className="link">
							Home
						</a>
						<a href="/about" className="link">
							About Us
						</a>
						<a href="/services" className="link">
							Services
						</a>
						<a href="/contactUs" className="link">
							Contact Us
						</a> */}
						<Link to="/" className="link">
							Home
						</Link>
						<Link to="/about" className="link">
							About Us
						</Link>
						<Link to="/services" className="link">
							Services
						</Link>
						<Link to="/contactUs" className="link">
							Contact Us
						</Link>
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
