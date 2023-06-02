import React from 'react';
import OurOfferingsBiskit from './OurOfferingsBiskit';
const OurOfferings = ({ ourOfferingsBiskitData }) => {
	return (
		<div className="our-offerings-section">
			<div className="headings">
				<h1 className="heading">Our Offerings</h1>
				<p className="sub-heading">
					Converges into a powerful End-to-End Fintech Solution
				</p>
			</div>
			<div className="contents-wrapper">
				{/* <div className="types">
					<p className="successful-deployments">SUCCESSFUL DEPLOYMENTS</p>
					<p className="tam">TAM</p>
				</div> */}
				<div className="biskits-wrapper">
					{ourOfferingsBiskitData.map((item) => {
						return (
							<a href={`/products/#card-${item.id}`} className="link-tag">
								<OurOfferingsBiskit data={item} key={item.id} />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurOfferings;
