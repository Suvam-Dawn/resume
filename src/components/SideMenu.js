import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdWork, MdSettings, MdContacts } from 'react-icons/md';
import { FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default class SideMenu extends Component {
	render() {
		return (
			<div className="left-menu">
				<div className={'menuBtn'}>
					<FiMenu size={25} />
				</div>
				<div className={'menuList'}>
					<Link to="/about">
						<FaUserAlt size={25} />
					</Link>
					<Link to="/experience">
						<MdWork size={25} />
					</Link>
					<Link to="/skills">
						<MdSettings size={25} />
					</Link>
					<Link to="/education">
						<FaUserGraduate size={25} />
					</Link>
					<Link to="/award">
						<FaAward size={25} />
					</Link>
					<Link to="/contact">
						<MdContacts size={25} />
					</Link>
				</div>
				<div className={'download'}>
					<AiOutlineCloudDownload
						size={45}
						onClick={() =>
							window.open(
								require('../assets/resume/Suvam_Dawn_Resume(7407620534_8436758250_suvamdawn94@gmail.com).pdf')
							)
						}
					/>
				</div>
			</div>
		);
	}
}
