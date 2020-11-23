import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
export default class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [
				{
					name: 'ReactJs',
					percentage: 85,
				},
				{
					name: 'Redux',
					percentage: 75,
				},
				{
					name: 'JavaScript',
					percentage: 90,
				},
				{
					name: 'NodeJs',
					percentage: 90,
				},
				{
					name: 'ExpressJs',
					percentage: 92,
				},
				{
					name: 'MongoDB',
					percentage: 85,
				},
				{
					name: 'MySQL',
					percentage: 80,
				},
				{
					name: 'PostgreSQL',
					percentage: 40,
				},
				{
					name: 'SQLite',
					percentage: 70,
				},
				{
					name: 'Android',
					percentage: 85,
				},
				{
					name: 'React-native',
					percentage: 65,
				},
				{
					name: 'Html',
					percentage: 95,
				},
				{
					name: 'Bootstrap',
					percentage: 90,
				},
				{
					name: 'CSS',
					percentage: 90,
				},
				{
					name: 'SASS',
					percentage: 80,
				},
				{
					name: 'jQuery',
					percentage: 95,
				},
				{
					name: 'Ajax',
					percentage: 95,
				},
				{
					name: 'Java',
					percentage: 85,
				},
				{
					name: 'Spring boot',
					percentage: 90,
				},
				{
					name: 'Hibernate',
					percentage: 75,
				},
				{
					name: 'Nginx',
					percentage: 65,
				},
			],
		};
	}
	SkillsComponent = ({ skillsResult }) => {
		return (
			<Row className={'mb-3'}>
				<Col xl={6} lg={6} md={6} sm={6} xs={6}>
					<h6 className={'skills_name'}>{skillsResult.name}</h6>
				</Col>
				<Col>
					<h6 className={'skills_percentage'}>{skillsResult.percentage}%</h6>
				</Col>
				<Col xl={12} lg={12} md={12} sm={12} xs={12}>
					<ProgressBar animated variant="success" now={skillsResult.percentage} />
				</Col>
			</Row>
		);
	};
	render() {
		return (
			<div className={'skills_area'}>
				<h1 className={'skills_title'}>Skills</h1>
				{this.state.skills.map((skillsResult, skillsIndex) => (
					<this.SkillsComponent key={skillsIndex} skillsResult={skillsResult} />
				))}
			</div>
		);
	}
}
