import { BsArrowRightShort } from 'react-icons/bs';
import { useRef, useEffect } from 'react';
const ServicesNew = ({ service }) => {
	const { id, name, discription } = service;

	const contentRef = useRef('');

	const handleContentClick = () => {
		contentRef.current = 'content-clicked';
	};
	console.log(contentRef.current)
	// const handleContentClick = () => {
	// 	// service.map((item) =>
	// 	// 	item.id === clickedId
	// 	// 		? setContentCardClass('clicked-content')
	// 	// 		: setContentCardClass('unclicked-content')
	// 	// );
	// 	setContentCardClass('clicked-content');
	// };
	// card.addEventListener('click', () => {
	// 	card.classList.toggle('clicked-content');
	// });
	return (
		<div className="services-new">
			<div className="contents-wrapper">
				<div
					className={`content ${contentRef.current}`}
					ref={contentRef}
					onClick={() => {
						handleContentClick();
					}}
				>
					<div className="text-wrapper">
						<div className="title">{name}</div>
						<p className="dis">{discription}</p>
						<BsArrowRightShort className="icon-arrow" />
					</div>
					<hr className="hr-line" />
				</div>
			</div>
		</div>
	);
};

export default ServicesNew;
