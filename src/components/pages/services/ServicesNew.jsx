import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillCrown, AiFillExperiment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import graphic from '../../../images/dg-vector.png';
const ServicesNew = ({ service, idx }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { id, name, img, discription } = service;
	const navigate = useNavigate();

	const reminder = idx % 2;
	const checking = reminder === 0 ? true : false;

	useEffect(() => {
		// console.log(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		// setWindowWidth(window.innerWidth);
	}, []);
	console.log(windowWidth);
	return (
		<div
			className="services-a"
			key={id}
			onClick={() => {
				navigate(`/services-detail/${id}`);
			}}
		>
			{windowWidth <= 800 ? (
				<div className="content-wrapper">
					<div className="content">
						<div className="text-wrapper">
							<div className="number">{idx + 1}</div>
							<div className="title">
								{name}
							</div>
							<p className="dis">{discription}</p>
						</div>
						<img src={img} className="graphic" />
					</div>
				</div>
			) : (
				<>
					{checking ? (
						<div className="content-wrapper">
							<div className="content">
								<img src={img} className="graphic" />
								<div className="text-wrapper">
									<div className="number">{idx + 1}</div>
									<div className="title">

										{name}
									</div>
									<p className="dis">{discription}</p>
								</div>
							</div>
						</div>
					) : (
						<div className="content-wrapper">
							<div className="content">
								<div className="text-wrapper">
									<h1 className="number">{idx + 1}</h1>
									<div className="title">
										{name}
									</div>
									<p className="dis">{discription}</p>
								</div>
								<img src={img} className="graphic" />{' '}
							</div>
						</div>
					)}
				</>
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
