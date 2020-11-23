import React, { Component } from 'react';
export default class Award extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: [
				{
					year: '2020',
					company: 'GeekSynergy Technologies Pvt. Ltd.',
					companyLocation: 'Bangalore, India',
					image: require('../../assets/award/UNMATCHED_DEDICATION_AWARD.png'),
					name: 'Unmatched Dedication Award',
				},
			],
		};
	}
	ExperienceComponent = ({ awardResult }) => {
		return (
			<div>
				<h6 className={'experience_year'}>{awardResult.name + ' ( ' + awardResult.year + ' ) '}</h6>
				<h6 className={'experience_company'}>{awardResult.company}</h6>
				<h6 className={'experience_company_location'}>{awardResult.companyLocation}</h6>
				<img
					src={awardResult.image}
					alt={awardResult.name}
					style={{ width: '100%', paddingRight: '20px', maxHeight: '400px' }}
				></img>
			</div>
		);
	};
	render() {
		return (
			<div className={'experience_area'}>
				<h1 className={'experience_title'}>Award</h1>
				{this.state.experience.map((awardResult, experienceResultIndex) => (
					<this.ExperienceComponent key={experienceResultIndex} awardResult={awardResult} />
				))}
			</div>
		);
	}
}
