import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// Our Products Images
import { ReactComponent as SnakeyLine } from '../../../images/ourProducts/snakey-line.svg';
import { ReactComponent as BankIcon } from '../../../images/ourProducts/bank-icon.svg';
import { ReactComponent as CoinsIcon } from '../../../images/ourProducts/coins-icon.svg';
import { ReactComponent as HandIcon } from '../../../images/ourProducts/hand-icon.svg';
import { ReactComponent as WalletIcon } from '../../../images/ourProducts/wallet-icon.svg';
const OurProducts = () => {
	const navigate = useNavigate();
	return (
		<div className="our-products">
			<h1 className="heading">Our Products </h1>
			<p className="sub-heading">
				Converges into a powerful End-to-End Fintech Solution
			</p>
			<div className="outer">
				<SnakeyLine className="snakey-line" />
				<div className="content-wrapper">
					<div className="banking-wrapper ">
						<div className="banking">
							<h5 className="title">BANKING</h5>
							<p className="sub-title">400+ Financial APIs</p>
						</div>
						<div className="logo-bg clickable-icon">
							<BankIcon className="bank-icon" />
						</div>
					</div>
					<div className="capital-wrapper">
						<div className="logo-bg clickable-icon">
							<CoinsIcon className="coins-icon" />
						</div>
						<div className="capital">
							<h5 className="title">CAPITAL</h5>
							<p className="sub-title">Replacement of existing TMS of Nepal</p>
						</div>
					</div>
					<div className="lending-wrapper">
						<div className="lending">
							<h5 className="title">LENDING</h5>
							<p className="sub-title">Over $5 Billion Loan Disbursed</p>
						</div>

						<div className="logo-bg clickable-icon">
							<HandIcon className="hand-icon" />
						</div>
					</div>
					<div className="delivery-channel-wrapper">
						<div className="logo-bg clickable-icon">
							<WalletIcon className="wallet-icon" />
						</div>
						<div className="delivery-channel">
							<h5 className="title">DELIVERY CHANNEL</h5>
							<p className="sub-title">150+ Integrated Services</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurProducts;
