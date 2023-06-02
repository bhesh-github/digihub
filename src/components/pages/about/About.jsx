import React from 'react';
import MemberCard from './MemberCard';
import { AiOutlineAim } from 'react-icons/ai';
import groupPhoto from '../../../images/about/group-photo.jpg';
import fotoA from '../../../images/about/memberPhoto/foto0.jpg';
import fotoB from '../../../images/about/memberPhoto/foto1.jpg';
import fotoC from '../../../images/about/memberPhoto/foto2.jpg';
import fotoD from '../../../images/about/memberPhoto/foto3.jpg';
import fotoE from '../../../images/about/memberPhoto/foto4.jpg';
import fotoF from '../../../images/about/memberPhoto/foto5.jpg';
import managerFoto from '../../../images/about/manager-foto.jpg';
const About = ({ teamMembers }) => {
	return (
		<div className="about-page">
			<div className="blue-container">
				<div className="about-section">
					<h1 className="title">About Us</h1>
					<p className="discription">
						Digihub Pvt. Ltd is an umbrella organization supported by national
						and international stakeholders established to bring together
						companies, people, and technologies with a unified objective of
						digital transformation of organizations all over the world with a
						special focus on digital banking services. The group of companies
						under DigiHub provide an ecosystem of products and services to
						accelerate the adoption of digital payments and lead the way for
						open banking.
					</p>
					<div className="picture">
						<img src={groupPhoto} alt="foto" className="group-photo" />
					</div>
				</div>
				<div className="message-from-director-section">
					<h1 className="title">Message From Managing Director</h1>
					<div className="contents">
						<div className="text">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. <br />
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. <br />
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages. <br />
							<br />- Managing Director
						</div>
						<img
							src={managerFoto}
							alt="manager"
							className="manager-image"
						/>
					</div>
				</div>
				<div className="mission-and-vision-section">
					<div className="mission-card">
						<AiOutlineAim className="icon" />
						<h1 className="title">Vision</h1>
						<p className="discription">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</p>
					</div>
					<div className="mission-card">
						<AiOutlineAim className="icon" />
						<h1 className="title">Mission</h1>
						<p className="discription">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</p>
					</div>
				</div>
			</div>
			<div className="our-team-section">
				<h1 className="title">Meet Our Team</h1>
				<p className="short-intro">
					Our expert team is made up of creatives members, who thinks out of the
					box, and developers who push innovation.
				</p>
				<div className="member-card-wrapper">
					{teamMembers.map((item) => {
						const { id, image, name, position, socialLinks } = item;
						return (
							<MemberCard
								key={id}
								image={image}
								name={name}
								position={position}
								socialLinks={socialLinks}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;

About.defaultProps = {
	teamMembers: [
		{
			id: 0,
			image: fotoA,
			name: 'Harry Styles',
			position: 'Software Engineer',
			socialLinks: ['', '', ''],
		},
		{
			id: 1,
			image: fotoB,
			name: 'Harriet Watson',
			position: 'UI/UX Designer',
			socialLinks: ['', '', ''],
		},

		{
			id: 2,
			image: fotoC,
			name: 'Robort Winner',
			position: 'UI/UX Designer',
			socialLinks: ['', '', ''],
		},
		{
			id: 3,
			image: fotoD,
			name: 'Gowen Walter',
			position: 'Developer',
			socialLinks: ['', '', ''],
		},
		{
			id: 4,
			image: fotoE,
			name: 'Gowen Walter',
			position: 'Developer',
			socialLinks: ['', '', ''],
		},
		{
			id: 5,
			image: fotoF,
			name: 'Harry Styles',
			position: 'Software Engineer',
			socialLinks: ['', '', ''],
		},

		{
			id: 6,
			image: fotoA,
			name: 'Harriet Watson',
			position: 'UI/UX Designer',
			socialLinks: ['', '', ''],
		},

		{
			id: 7,
			image: fotoC,
			name: 'Robort Winner',
			position: 'UI/UX Designer',
			socialLinks: ['', '', ''],
		},
	],
};
