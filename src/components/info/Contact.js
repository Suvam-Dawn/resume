/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
export default class Contact extends Component {
	render() {
		return (
			<div className={'contact_area'}>
				<h1 className={'contact_title'}>Contact</h1>
				<div>
					<Row>
						<Col xl={1} lg={1} md={1} sm={1} xs={1} className={'mb-2'}>
							<MdEmail size={20} style={{ color: 'var(--menuButton)' }} />
						</Col>
						<Col xl={11} lg={11} md={11} sm={11} xs={11} className={'mb-2'}>
							<a href="mailto:suvamdawn94@gmail.com" title="Suvam Dawn Mail ID">
								suvamdawn94@gmail.com
							</a>
						</Col>
					</Row>
					<Row>
						<Col xl={1} lg={1} md={1} sm={1} xs={1} className={'mb-2'}>
							<MdLocalPhone size={20} style={{ color: 'var(--menuButton)' }} />
						</Col>
						<Col xl={11} lg={11} md={11} sm={11} xs={11} className={'mb-2'}>
							<a
								href="https://web.whatsapp.com/send?phone=917407620534"
								target="_blank"
								title="Suvam Dawn WhatsApp Number"
							>
								(+91) 7407620534
							</a>
						</Col>
					</Row>
					<Row>
						<Col xl={1} lg={1} md={1} sm={1} xs={1} className={'mb-2'}>
							<MdLocalPhone size={20} style={{ color: 'var(--menuButton)' }} />
						</Col>
						<Col xl={11} lg={11} md={11} sm={11} xs={11} className={'mb-2'}>
							<a href="tel:+918436758250" target="_blank" title="Suvam Dawn Contact Number">
								(+91) 8436758250
							</a>
						</Col>
					</Row>
					<Row>
						<Col xl={1} lg={1} md={1} sm={1} xs={1} className={'mb-2'}>
							<GrLinkedinOption size={20} style={{ color: 'var(--menuButton)' }} />
						</Col>
						<Col xl={11} lg={11} md={11} sm={11} xs={11} className={'mb-2'}>
							<a
								href="https://www.linkedin.com/in/suvamdawn"
								target="_blank"
								title="Suvam Dawn Linkedin Profile"
							>
								https://www.linkedin.com/in/suvamdawn
							</a>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
