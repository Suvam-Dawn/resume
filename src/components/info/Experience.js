import React, { Component } from 'react';
export default class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: [
				{
					year: '2018-Present',
					company: 'GeekSynergy Technologies Pvt. Ltd.',
					companyLocation: 'Bangalore, India',
					responsibilities: [
						'Managing a client’s requirements, system analysis, and functional specifications.',
						'Defining best practices for project support, & documentation.',
						'Actively participates & engages with development team & testing team to provide quality services, system stability, and best solutions.',
						'Proposed solutions for complex architectural challenges for new features.',
						'Testing, problem-solving, troubleshooting, & debugging of the applications.',
						'Managing, & integrated app-based solutions with databases, backend, security, data facilitation, file systems, & cloud based systems.',
						'Implement company SEO plans, and create road map for accomplishments.',
						'Monitor effectiveness of SEO, and marketing programmers in terms of traffic.',
					],
				},
				{
					year: '02/2018 – 07/2018 ( Intern )',
					company: 'GeekSynergy Technologies Pvt. Ltd.',
					companyLocation: 'Bangalore, India',
					responsibilities: [
						'Android UI & UX design.',
						'Testing, problem-solving, troubleshooting, and debugging of the applications.',
					],
				},
			],
		};
	}
	ExperienceResponsibilities = ({ responsibility }) => {
		return <li>{responsibility}</li>;
	};
	ExperienceComponent = ({ experienceResult }) => {
		return (
			<div>
				<h6 className={'experience_year'}>{experienceResult.year}</h6>
				<h6 className={'experience_company'}>{experienceResult.company}</h6>
				<h6 className={'experience_company_location'}>{experienceResult.companyLocation}</h6>
				<ul className={''}>
					{experienceResult.responsibilities.map((responsibility, responsibilityIndex) => (
						<this.ExperienceResponsibilities key={responsibilityIndex} responsibility={responsibility} />
					))}
				</ul>
			</div>
		);
	};
	render() {
		return (
			<div className={'experience_area'}>
				<h1 className={'experience_title'}>Experience</h1>
				{this.state.experience.map((experienceResult, experienceResultIndex) => (
					<this.ExperienceComponent key={experienceResultIndex} experienceResult={experienceResult} />
				))}
			</div>
		);
	}
}
