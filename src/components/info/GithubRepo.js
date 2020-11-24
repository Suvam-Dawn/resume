import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import APIRequest from '../../utils/APIRequest';
export default class GithubRepo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gitRepoDetails: [],
		};
	}
	UNSAFE_componentWillMount = () => {
		APIRequest.request('GET', 'https://api.github.com/users/suvam-dawn/repos', '').then((result) => {
			this.setState({ gitRepoDetails: result });
		});
	};
	GitRepoDetailsComponent = ({ gitRepoResult }) => {
		return (
			<Row className={'mb-4 gitRepoDetails'} onClick={() => window.open(gitRepoResult.html_url)}>
				<Col xl={12} lg={12} md={12} sm={12} xs={12}>
					<h5 className={'gitRepo_name'}>{gitRepoResult.name}</h5>
					<h6 className={'gitRepo_description'}>
						{gitRepoResult.description !== undefined && gitRepoResult.description !== null
							? gitRepoResult.description
							: '-'}
					</h6>
					{/* <span>
						<FaStar size={15} />
					</span>
					<p>{gitRepoResult.watchers.forks}</p> */}
				</Col>
			</Row>
		);
	};
	render() {
		return (
			<div className={'gitRepo_area'}>
				<h1 className={'skills_title'}>Github Repo</h1>
				{this.state.gitRepoDetails.map((gitRepoResult, gitRepoIndex) => {
					return gitRepoResult.name !== 'resume' ? (
						<this.GitRepoDetailsComponent key={gitRepoIndex} gitRepoResult={gitRepoResult} />
					) : (
						<div />
					);
				})}
			</div>
		);
	}
}
