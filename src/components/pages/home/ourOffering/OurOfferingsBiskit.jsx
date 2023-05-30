import { useMemo } from 'react';
// Our offerings Images
import bankingAndLending from '../../../../images/ourOfferings/icon _bank_.png';
import paymentAndAPIs from '../../../../images/ourOfferings/Rest API.png';
import investments from '../../../../images/ourOfferings/Growing Money.png';
import onboarding from '../../../../images/ourOfferings/Handshake.png';
const OurOfferingsBiskit = ({ data }) => {
	const { id, title, type, successfulDepolyments, tam } = data;
	const conditions = {
		bankingAndLending: <img src={bankingAndLending} alt="banking" />,
		paymentAndAPIs: <img src={paymentAndAPIs} alt="payment" />,
		investments: <img src={investments} alt="investments" />,
		onboarding: <img src={onboarding} alt="onboarding" />,
	};
	const selectedIcon = conditions[type];
	return (
		<div className="biskit-wrapper" key={id}>
			<div className="biskit">
				<div className="blue-part">
					<span className="title">{title}</span>
					<span className="down-triangle"></span>
				</div>
				<div className="white-part">
					<span className="successful-deployments">
						<p>{successfulDepolyments[0]}</p>
						<p>
							{successfulDepolyments[1] ? (
								successfulDepolyments[1]
							) : (
								<span className="hidden-text">Hidden</span>
							)}
						</p>
					</span>
					<span className="tam">
						{tam === '' ? (
							<>
								{/* <p className="empty-line"> */}
								<hr className="empty-line" />
								{/* </p> */}
								<p className="hidden-text">Hidden</p>
							</>
						) : (
							<>
								<p className="first">
									{tam[0] ? (
										tam[0]
									) : (
										<span className="hidden-text">Hidden</span>
									)}
								</p>
								{title === 'BANKING & LENDING' ? (
									<p className="second thin">
										{tam[1] ? (
											tam[1]
										) : (
											<span className="hidden-text">Hidden</span>
										)}
									</p>
								) : (
									<p className="second">
										{tam[1] ? (
											tam[1]
										) : (
											<span className="hidden-text">Hidden</span>
										)}
									</p>
								)}
							</>
						)}
					</span>
				</div>
			</div>
			<div className="top-left-icon">{selectedIcon}</div>
		</div>
	);
};

export default OurOfferingsBiskit;
