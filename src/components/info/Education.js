import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			education: [
				{
					year: '08/2015 - 06/2018',
					degree: `Master's Degree (MCA)`,
					institutionName: 'Presidency College',
					institutionLocation: 'Bangalore, India',
					courses: ['Computer Application'],
					percentage: '75.87%',
				},
				{
					year: '08/2012 - 05/2015',
					degree: `Bachelor's Degree (BCA)`,
					institutionName: 'BIMS',
					institutionLocation: 'Burdwan, India',
					courses: ['Computer Application'],
					percentage: '65.85%',
				},
				{
					year: '05/2010 - 04/2012',
					degree: `High Secondary (WBCHSE - 12)`,
					institutionName: 'Raj Collegiate School',
					institutionLocation: 'Burdwan, India',
					courses: ['Pure Science'],
					percentage: '53%',
				},
				{
					year: '05/2009 - 04/2010',
					degree: `Secondary (WBBSE - 10)`,
					institutionName: 'Burdwan C.M.S School',
					institutionLocation: 'Burdwan, India',
					courses: [],
					percentage: '66.88%',
				},
			],
		};
	}
	EducationComponent = ({ educationResult }) => {
		return (
			<div className={'mb-3'} style={{ marginRight: '20px' }}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={10} xs={10}>
						<h6 className={'education_degree'}>{educationResult.degree}</h6>
						<h6 className={'education_institutionName'}>{educationResult.institutionName}</h6>
						<h6 className={'education_institution_location'}>{educationResult.institutionLocation}</h6>
						<p className={'education_year m-0'}>{educationResult.year}</p>
						{educationResult.courses.length > 0 ? (
							<div>
								<h6 className={'education_course'}>Courses:- </h6>
								<ul>
									{educationResult.courses.map((course, courseIndex) => (
										<li key={courseIndex}>{course}</li>
									))}
								</ul>
							</div>
						) : (
							<div />
						)}
					</Col>
					<Col xl={2} lg={2} md={2} sm={2} xs={2} className={'align-self-center'}>
						<p className={'education_percentage'}>{educationResult.percentage}</p>
					</Col>
				</Row>
			</div>
		);
	};
	render() {
		return (
			<div className={'education_area'}>
				<h1 className={'education_title'}>Education</h1>
				{this.state.education.map((educationResult, educationResultIndex) => (
					<this.EducationComponent key={educationResultIndex} educationResult={educationResult} />
				))}
			</div>
		);
	}
}
