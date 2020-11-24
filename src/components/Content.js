import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Login from './Login';
// import FormSample from './FormSample';
import About from './info/About';
import Experience from './info/Experience';
import Skills from './info/Skills';
import Award from './info/Award';
import Education from './info/Education';
import Contact from './info/Contact';
export default class Content extends Component {
	render() {
		return (
			<Switch>
				{/* <Route exact path={['/formSample']} component={FormSample} />
        <Route exact path={['/login']} component={Login} />*/}
				<Route exact path={['/about']} component={About} />
				<Route exact path={['/experience']} component={Experience} />
				<Route exact path={['/skills']} component={Skills} />
				<Route exact path={['/award']} component={Award} />
				<Route exact path={['/education']} component={Education} />
				<Route exact path={['/contact']} component={Contact} />
				<Route render={() => <h3 style={{ color: '#fff' }}>Coming soon.</h3>} />
			</Switch>
		);
	}
}
