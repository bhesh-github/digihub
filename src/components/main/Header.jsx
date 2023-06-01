import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';

import Logo from '../../images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoHome } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';
import { FaServicestack } from 'react-icons/fa';
const Header = () => {
	const [sidebarClass, setSidebarClass] = useState('none');
	sidebarClass === 'block'
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = 'auto');
	// document.body.style.overflowX = 'hidden';
	return (
		<div className="header">
			<div className="menu-bar">
				<NavLink to="./" className="logo">
					<img src={Logo} alt="logo" />
				</NavLink>
				<NavLink to="./" className="company-name">
					DigiHub
				</NavLink>
				<NavLink to="./" className="item">
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
				<div className="item">
					<NavLink to="./home">
						<GoHome className="item-icon" />
						Home
					</NavLink>
				</div>
				<div className="item">
					<NavLink to="./about">
						<InfoOutlinedIcon className="item-icon" />
						About
					</NavLink>
				</div>
				<div className="item">
					{/* <GoHome className="item-icon" /> */}
					<FaServicestack className="item-icon" />
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
