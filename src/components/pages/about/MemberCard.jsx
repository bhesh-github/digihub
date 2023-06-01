import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';
import { RiLinkedinFill } from 'react-icons/ri';

const MemberCard = ({ id, image, name, position, socialLinks }) => {
	return (
		<div className="member-card">
			<div
				className="member-img"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className="text-wrapper">
				<h3 className="name">{name}</h3>
				<p className="position">{position}</p>
				<span className="icons">
					<GrFacebookOption className="icon fb"  />
					<SiGithub className="icon github" />
					<RiLinkedinFill className="icon linkedin" />
				</span>
			</div>
		</div>
	);
};

export default MemberCard;
