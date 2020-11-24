import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdWork, MdSettings, MdContacts } from 'react-icons/md';
import { FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default class SideMenu extends Component {
	render() {
		let location = window.location.hash;
		return (
			<div className="left-menu">
				<div className={'menuBtn'} onClick={() => this.props.drawerStatusUpdate()}>
					<FiMenu size={25} />
				</div>
				<div className={'menuList'}>
					<Link to="/about" className={location.includes('/about') ? 'active' : ''}>
						<FaUserAlt size={25} />
					</Link>
					<Link to="/experience" className={location.includes('/experience') ? 'active' : ''}>
						<MdWork size={25} />
					</Link>
					<Link to="/skills" className={location.includes('/skills') ? 'active' : ''}>
						<MdSettings size={25} />
					</Link>
					<Link to="/education" className={location.includes('/education') ? 'active' : ''}>
						<FaUserGraduate size={25} />
					</Link>
					<Link to="/award" className={location.includes('/award') ? 'active' : ''}>
						<FaAward size={25} />
					</Link>
					<Link to="/contact" className={location.includes('/contact') ? 'active' : ''}>
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
