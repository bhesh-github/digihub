import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillCrown } from 'react-icons/ai';

import { useRef } from 'react';
const ServicesNew = ({ service }) => {
	const { id, name, discription } = service;
	const contentRef = useRef();
	const handleContentClick = (gotId) => {
		id !== gotId
			? contentRef.current.classList.toggle('content')
			: contentRef.current.classList.toggle('content-active');
	};
	return (
		<div
			className="services-new"
			onClick={() => {
				handleContentClick(id);
			}}
		>
			<div className="contents-wrapper">
				<div className="content" ref={contentRef}>
					<div className="text-wrapper">
						<div className="title">
							<AiFillCrown className="icon" />
							{name}
						</div>
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
