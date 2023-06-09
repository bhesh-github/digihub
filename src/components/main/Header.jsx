import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';

import Logo from '../../images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoHome } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';
import { FaServicestack } from 'react-icons/fa';
import { ReactComponent as ServiceIcon } from '../../images/forAll/services-icon.svg';
const Header = ({ isHomePage }) => {
	const [sidebarClass, setSidebarClass] = useState('none');
	const [diffHomeHeader, setDiffHomeHeader] = useState('');
	sidebarClass === 'block'
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = 'auto');
	// document.body.style.overflowX = 'hidden';
	useEffect(() => {
		!isHomePage && setDiffHomeHeader('other-page-header');
	}, []);
	return (
		<div className={`header ${diffHomeHeader}`}>
			<div className="menu-bar">
				<NavLink to="/" className="logo">
					<img src={Logo} alt="logo" />
				</NavLink>
				<NavLink to="/" className="company-name">
					DigiHub
				</NavLink>
				<NavLink to="/" className="item">
					Home
				</NavLink>
				<NavLink to="/about" className="item">
					About
				</NavLink>

				<NavLink to="/services" className="item">
					Services
				</NavLink>
				<NavLink to="/contactUs" className="item">
					Contact Us
				</NavLink>
				<RxHamburgerMenu
					className="hamburger"
					onClick={() => {
						setSidebarClass('block');
					}}
				/>
			</div>
			<div className="sidebar" style={{ display: `${sidebarClass}` }}>
				<div className="logo item">
					<img src={Logo} alt="logo" className="logo-img" />
					<span className="company-name">DigiHub</span>
					<VscChromeClose
						className="close-icon"
						onClick={() => {
							setSidebarClass('none');
						}}
					/>
				</div>
				<NavLink
					to="/"
					className="item"
					onClick={() => {
						setSidebarClass('none');
					}}
				>
					<GoHome className="item-icon" />
					Home
				</NavLink>
				<NavLink
					to="/about"
					className="item"
					onClick={() => {
						setSidebarClass('none');
					}}
				>
					<InfoOutlinedIcon className="item-icon" />
					About
				</NavLink>
				<NavLink
					to="/services"
					className="item"
					onClick={() => {
						setSidebarClass('none');
					}}
				>
					{/* <InfoOutlinedIcon className="item-icon" /> */}
					<ServiceIcon className="item-icon" />
					Services
				</NavLink>
				<NavLink
					to="/contactUs"
					className="item"
					onClick={() => {
						setSidebarClass('none');
					}}
				>
					<PermPhoneMsgOutlinedIcon className="item-icon" />
					Contact Us
				</NavLink>
			</div>
			{sidebarClass === 'block' && (
				<div
					className="back-overlay"
					onClick={() => {
						setSidebarClass('none');
					}}
				></div>
			)}
		</div>
	);
};

export default Header;
