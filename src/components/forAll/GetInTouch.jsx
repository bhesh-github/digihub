import { useMemo } from 'react';
import Button from '@mui/material/Button';
import { ReactComponent as MessageIcon } from '../../images/getInTouch/mail-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/getInTouch/phone-icon.svg';
import { ReactComponent as LocationIcon } from '../../images/getInTouch/location-icon.svg';

const GetInTouch = ({ addressData }) => {
	const formObj = [
		{ id: 0, label: 'NAME', placeholder: 'Full Name', inputType: 'text' },
		{
			id: 1,
			label: 'EMAIL',
			placeholder: 'email@example.com',
			inputType: 'email',
		},
		{ id: 2, label: 'COMPANY', placeholder: 'Company Name', inputType: 'text' },
		{
			id: 3,
			label: 'SUBJECT',
			placeholder: 'How can we help?',
			inputType: 'text',
		},
		{
			id: 4,
			label: 'MESSAGE',
			placeholder: 'Your Message',
			inputType: 'textarea',
		},
	];
	const filteredFormInputs = formObj.filter(
		(item) => item.inputType !== 'textarea'
	);
	const filteredMessageInput = formObj.filter(
		(item) => item.inputType === 'textarea'
	);

	const iconType = {
		message: <MessageIcon className="svg-icon" />,
		phone: <PhoneIcon className="svg-icon" />,
		location: <LocationIcon className="svg-icon" />,
	};
	const flagType = {
		nepal: (
			<img
				src="https://flagcdn.com/np.svg"
				width="30"
				alt="Nepal"
				className="country-flag"
			/>
		),
		usa: (
			<img
				src="https://flagcdn.com/us.svg"
				width="30"
				alt="United States"
				className="country-flag"
			/>
		),
	};

	const address = addressData.map((item) => {
		const { id, icon, details } = item;
		const selectedIcon = iconType[icon];
		const selectedFlagForOne =
			details.one.flagIcon && flagType[details.one.flagIcon];
		const selectedFlagForTwo =
			details.two.flagIcon && flagType[details.two.flagIcon];
		const detailClass = icon === 'location' ? 'add-margin' : '';
		const detailClassMore =
			details.one.text === 'Head office:' ? 'more-margin' : '';
		return (
			<div className="address" key={id}>
				{/* <span className='svg-icon'></span> */}
				<span className="svg-icon-wrapper">{selectedIcon}</span>
				{/* {iconType['phone']} */}
				{/* <LocationIcon className="svg-icon" /> */}
				<span className="details">
					<p className={`detail one ${detailClass} ${detailClassMore}`}>
						{selectedFlagForOne}
						{details.one.text}
					</p>
					<p className={`detail two ${detailClass} ${detailClassMore}`}>
						{selectedFlagForTwo}
						{details.two.text}
					</p>
				</span>
			</div>
		);
	});
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="get-in-touch">
			<div className="blur-gradient-3"></div>
			<div className="contents">
				<h1 className="heading">Get in touch</h1>
				<div className="alignment">
					<form
						className="form"
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<div className="type-text">
							{filteredFormInputs.map((item) => (
								<div className="label-and-input-wrapper" key={item.id}>
									<label htmlFor="name" className="label">
										<span className="label-text">{item.label}</span> <br />
									</label>
									<input
										name="name"
										placeholder={item.placeholder}
										className="input-type-text"
										input={item.inputType}
									/>
								</div>
							))}
						</div>
						<div className="type-textarea">
							{filteredMessageInput.map((item) => (
								<div className="label-and-textarea-wrapper" key={item.id}>
									<label htmlFor="name" className="label">
										<span className="label-text">{item.label}</span> <br />
									</label>
									<textarea
										name="name"
										placeholder={item.placeholder}
										className="input-type-textarea"
										input={item.inputType}
										rows="4"
									/>
								</div>
							))}
						</div>
						<Button type='submit' className='submit-btn'>
							SEND MESSAGE
						</Button>
					</form>

					<div className="information">
						<h4 className="info-heading">Want to reach us directly?</h4>
						<div className="brief">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
							pharetra elementum sit id sagittis non donec egestas.
						</div>
						<div className="address-wrapper">{address}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;

GetInTouch.defaultProps = {
	addressData: [
		{
			id: 0,
			icon: 'message',
			details: {
				one: { flagIcon: 'nepal', text: 'enquiry@dghub.io' },
				two: { flagIcon: 'usa', text: 'mailto:contact@digihubusa.com' },
			},
		},
		{
			id: 1,
			icon: 'phone',
			details: {
				one: { flagIcon: 'nepal', text: '+977-1-4258304' },
				two: { flagIcon: 'nepal', text: '+4591400568' },
			},
		},
		{
			id: 2,
			icon: 'location',
			details: {
				one: { text: 'Head office:' },
				two: { text: 'Rubinsteinsvej 03, 2450 Copenhagen SV, Denmark' },
			},
		},
		{
			id: 3,
			icon: 'location',
			details: {
				one: { text: 'Nepal office:' },
				two: { text: 'Charkhal Rd, Kathmandu 44605' },
			},
		},
		{
			id: 4,
			icon: 'location',
			details: {
				one: { text: 'USA office:' },
				two: { text: '550 Reserve St, Southlake, TX 76092' },
			},
		},
	],
};
