import React from 'react';
//Three Core Aspects Images
import handMobile from '../../../images/threeCoreAspects/hand-mobile.png';
import aspiration from '../../../images/threeCoreAspects/Aspiration.png';
import goalOrientedFocus from '../../../images/threeCoreAspects/Goal Oriented Focus.png';
import tenacity from '../../../images/threeCoreAspects/Tenacity.png';
const CoreAspects = () => {
	return (
		<div className="core-aspects-section">
			<span className="ellipse">
				<img src={handMobile} alt="hand-mobile" className="hand-mobile" />
			</span>
			<div className="headings-wrapper">
				<h1 className="heading">
					<span className="name">DigiHub's</span> Three Core Aspects
				</h1>
				<p className="sub-heading">
					We work how our customer wants us to, world leader loves us. See our
					Core Three Aspects.
				</p>
			</div>
			<div className="aspiration-wrapper">
				<span className="aspiration-img-bg">
					<img src={aspiration} alt="aspiration" className="aspiration-img" />
				</span>
				<span className="text-wrapper">
					<p className="title">Aspiration</p>
					<p className="brief">
						DigiHub aspires to digitize payment for all sector economies,
						banking, and non-banking financial institutions alongside the public
						and private sector all across Nepal. It works to introduce the
						finest fintech offerings and exists to be a sole solution pivot.
					</p>
				</span>
			</div>
			<div className="aim-wrapper">
				<span className="aim-img-bg">
					<img src={goalOrientedFocus} alt="aim" className="aim-img" />
				</span>
				<span className="text-wrapper">
					<p className="title">Aim</p>
					<p className="brief">
						DigiHub aims beyond miniature online banking offerings with minimum
						hassle and maximum delight. With the innovative fintech position, it
						seeks to improvise and automate the delivery and use of financial
						services.
					</p>
				</span>
			</div>
			<div className="mission-wrapper">
				<span className="mission-img-bg">
					<img src={tenacity} alt="aim" className="aim-img" />
				</span>
				<span className="text-wrapper">
					<p className="title">Mission</p>
					<p className="brief">
						DigiHub sets a mission to move towards financial literacy alongside
						the availability of high-quality services. It focuses on long term
						financial growth through clear trust between members, partners, and
						customers.
					</p>
				</span>
			</div>
			<div className="for-mobile-view-wrapper">
				<div className="for-mobile-view">
					<div className="aspiration-wrap">
						<span className="aspiration-img-wrap">
							<img
								src={aspiration}
								alt="aspiration"
								className="aspiration-img"
							/>
						</span>
						<span className="text-wrap">
							<p className="title-">Aspiration</p>
							<p className="brief-">
								DigiHub aspires to digitize payment for all sector economies,
								banking, and non-banking financial institutions alongside the
								public and private sector all across Nepal. It works to
								introduce the finest fintech offerings and exists to be a sole
								solution pivot.
							</p>
						</span>
					</div>
					<div className="aim-wrap">
						<span className="aim-img">
							<img src={goalOrientedFocus} alt="aim" className="img" />
						</span>
						<span className="text-wrap">
							<p className="title-">Aim</p>
							<p className="brief-">
								DigiHub aims beyond miniature online banking offerings with
								minimum hassle and maximum delight. With the innovative fintech
								position, it seeks to improvise and automate the delivery and
								use of financial services.
							</p>
						</span>
					</div>
					{/* <div className="mission-wrap">
					<span className="mission-img">
						<img src={tenacity} alt="aim" className="img-" />
					</span>
					<span className="text-wrap">
						<p className="title-">Mission</p>
						<p className="brief-">
							DigiHub sets a mission to move towards financial literacy
							alongside the availability of high-quality services. It focuses on
							long term financial growth through clear trust between members,
							partners, and customers.
						</p>
					</span>
				</div> */}
					<div className="mission-wrap">
						<span className="mission-img">
							<img src={tenacity} alt="aim" className="img" />
						</span>
						<span className="text-wrap">
							<p className="mission-title">Mission</p>
							<p className="brief-">
								DigiHub sets a mission to move towards financial literacy
								alongside the availability of high-quality services. It focuses
								on long term financial growth through clear trust between
								members, partners, and customers.
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreAspects;
