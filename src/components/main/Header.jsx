import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';

import Logo from '../../images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoHome } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';
const Header = () => {
	const [sidebarClass, setSidebarClass] = useState('none');
	sidebarClass === 'block'
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto');
	return (
		<div className="header">
			<div className="menu-bar">
				<img src={Logo} alt="logo" className="logo" />
				<span className="company-name">DigiHub</span>
				<span className="item">Home</span>
				<span className="item">About</span>
				<span className="item">Services</span>
				<span className="item">Contact Us</span>
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
				<div className="item">
					<GoHome className="item-icon" />
					Home
				</div>
				<div className="item">
					<InfoOutlinedIcon className="item-icon" />
					About
				</div>
				<div className="item">
					<GoHome className="item-icon" />
					Services
				</div>
				<div className="item">
					<PermPhoneMsgOutlinedIcon className="item-icon" />
					Contact Us
				</div>
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
