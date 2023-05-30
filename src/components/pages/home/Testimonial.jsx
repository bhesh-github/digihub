import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ReactComponent as DotOutline } from '../../../images/dots/dot-outline.svg';
import { ReactComponent as DotFill } from '../../../images/dots/dot-fill.svg';
//
import jennyCarter from '../../../images/testimonial/jenny-carter.jpg';
import Gowen from '../../../images/testimonial/user-img.png';
const Testimonial = ({ testimonialData }) => {
	const [testimonialCardStack, setTestimonialCardStack] =
		useState(testimonialData);
	const handleCardClick = (item, idx) => {
		idx !== 1 && console.log(item, idx);
	};
	const testimonialCard = testimonialCardStack.map((item, idx) => {
		const overlayClass = idx === 1 ? '' : '';
		const uncheckedCard = idx !== 1 ? 'cursor' : 'cursor';
		return (
			<div
				className={`card ${uncheckedCard} `}
				key={item.id}
				onClick={() => {
					handleCardClick(item, idx);
				}}
			>
				{<div className={`${overlayClass}`}></div>}
				<p className="text">{item.message}</p>
				<div className="name-and-img">
					<img src={item.userImage} alt="user" className="user-image" />
					<div className="name-and-position-wrapper">
						<p className="user-name">{item.userName}</p>
						<p className="user-position">{item.position}</p>
					</div>
				</div>
			</div>
		);
	});
	//
	const CustomDot = ({ onMove, index, onClick, active }) => {
		// onMove means if dragging or swiping in progress.
		// active is provided by this lib for checking if the item is active or not.
		return (
			<li className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
				{active ? (
					<DotFill className="custom-dot" />
				) : (
					<DotOutline className="custom-dot" />
				)}
			</li>
		);
	};

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2.5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="testimonial-section">
			<h1 className="heading">What our users say?</h1>
			<div className="carousel">
				<Carousel
					responsive={responsive}
					customTransition="all .5s"
					infinite={true}
					removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
					draggable={true}
					itemClass="style-me"
					showDots={true}
					dotListClass="custom-dot-list-style"
					renderDotsOutside={true}
					containerClass="carousel-container"
					customDot={<CustomDot />}
					// centerMode={true}
				>
					{testimonialCard}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonial;

Testimonial.defaultProps = {
	testimonialData: [
		{
			id: 0,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'John carter',
			position: 'Role, Company',
		},
		{
			id: 1,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'Gowen carter',
			position: 'Role, Company',
		},
		{
			id: 2,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'Peter carter',
			position: 'Role, Company',
		},
		{
			id: 3,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'Beater carter',
			position: 'Role, Company',
		},
		{
			id: 4,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'Adele carter',
			position: 'Role, Company',
		},
		{
			id: 5,
			message:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”',
			userImage: Gowen,
			userName: 'Richard carter',
			position: 'Role, Company',
		},
	],
};
