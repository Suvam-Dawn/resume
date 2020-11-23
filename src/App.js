import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import General from './components/General';
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import LocalStorage from './config/LocalStorage';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'dark',
		};
		this.toggletheme = this.toggletheme.bind(this);
	}
	UNSAFE_componentWillMount = () => {
		//Theme change control local storage
		var theme = localStorage.getItem('theme');
		if (theme === undefined || theme === null) {
			localStorage.setItem('theme', LocalStorage.theme);
		} else {
			this.setState({ theme: theme }, () => {
				this.toggletheme();
			});
		}
	};
	toggletheme = () => {
		const theme = this.state.theme === 'dark' ? 'dark' : 'light';
		document.documentElement.classList.add('color-theme-in-transition');
		this.setState({ theme });
		document.documentElement.setAttribute('data-theme', theme);
		window.setTimeout(() => {
			document.documentElement.classList.remove('color-theme-in-transition');
		}, 1000);
	};
	render() {
		return (
			<div style={rootStyle} className={'rootDiv'}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/about" />} />
						<Route
							exact
							path={['/about', '/experience', '/skills', '/education', '/contact', '/download', '/award']}
							component={General}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
const rootStyle = {
	overflowX: 'hidden',
};
