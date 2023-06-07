import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillCrown, AiFillExperiment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const ServicesNew = ({ service, idx }) => {
	const { id, name, discription } = service;
	// const contentRef = useRef();
	// const handleContentClick = (gotId) => {
	// 	id !== gotId
	// 		? contentRef.current.classList.toggle('content')
	// 		: contentRef.current.classList.toggle('content-active');
	// };
	const navigate = useNavigate();

	const reminder = idx % 2;
	const c = reminder === 0 ? true : false;

	return (
		<div
			className="services-a"
			key={id}
			onClick={() => {
				navigate(`/services-detail/${id}`);
			}}
		>
			{c ? (
				<div className="contents-wrapper">
					<div className="content">
						{/* <div className="graphic"> */}
						<AiFillExperiment className="graphic" />
						{/* </div> */}
						<div className="text-wrapper">
							<div className="title">
								{/* <AiFillCrown className="icon" /> */}
								{name}
							</div>
							<p className="dis">{discription}</p>
						</div>
					</div>
				</div>
			) : (
				<div className="contents-wrapper">
					<div className="content">
						<div className="text-wrapper">
							<div className="title">
								{/* <AiFillCrown className="icon" /> */}
								{name}
							</div>
							<p className="dis">{discription}</p>
						</div>
						{/* <div className="graphic"></div> */}
						<AiFillExperiment className="graphic" />
					</div>
				</div>
			)}
		</div>
		// <div
		// 	className="services-new"
		// 	onClick={() => {
		// 		handleContentClick(id);
		// 	}}
		// >
		// 	<div className="contents-wrapper">
		// 		<div className="content" ref={contentRef}>
		// 			<div className="text-wrapper">
		// 				<div className="title">
		// 					<AiFillCrown className="icon" />
		// 					{name}
		// 				</div>
		// 				<p className="dis">{discription}</p>
		// 				<BsArrowRightShort className="icon-arrow" />
		// 			</div>
		// 			<hr className="hr-line" />
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ServicesNew;
