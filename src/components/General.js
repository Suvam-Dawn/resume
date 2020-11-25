import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Content from './Content';
import { Helmet } from 'react-helmet';
import SideMenu from './SideMenu';
import SummeryInfo from './SummeryInfo';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { FaGithub, FaCloudDownloadAlt, FaUserAlt, FaUserGraduate, FaAward } from 'react-icons/fa';
import { MdWork, MdSettings, MdContacts } from 'react-icons/md';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Link } from '@material-ui/core';
const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

export default class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			drawerStatus: false,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	};

	componentWillUnmount = () => {
		this.updateWindowDimensions();
		window.removeEventListener('resize', this.updateWindowDimensions);
	};

	updateWindowDimensions = () => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};
	getStyles() {
		const styles = {};
		if (this.state.width < 991) {
			styles.paddingTop = '0px';
			styles.height = `${this.state.height}px`;
			styles.leftMenuMarginTop = '0px';
		} else {
			styles.height = `${this.state.height - this.state.height * 0.1}px`;
			styles.paddingTop = `${this.state.height * 0.03}px`;
			styles.leftMenuMarginTop = '40px';
		}

		return styles;
	}
	drawerStatusUpdate = () => {
		this.setState({ drawerStatus: !this.state.drawerStatus });
	};
	render() {
		return (
			<div className="content_div">
				<Helmet
					style={[
						{
							cssText: `
            .container{
                min-height: ${this.getStyles().height};
                max-height: ${this.getStyles().height};
                height: ${this.getStyles().height};
            },
            .rootDiv{
                min-height: ${this.getStyles().height};
                max-height: ${this.getStyles().height};
                height: ${this.getStyles().height};
            }            
        `,
						},
					]}
				/>
				<div className={'container height-100'}>
					<Row className={'h-100'}>
						<Col xl={4} lg={4} md={4} sm={4} xs={4} className={'p-0 content_div_left'}>
							<div className={'content_div__head'}>
								<SideMenu drawerStatusUpdate={this.drawerStatusUpdate} />
								<SummeryInfo />
							</div>
						</Col>
						<Col xl={8} lg={8} md={8} sm={8} xs={8} className={'content_div__details'}>
							<Content />
						</Col>
					</Row>
					<Drawer anchor={'left'} open={this.state.drawerStatus} onClose={() => this.drawerStatusUpdate()}>
						<div className={'drawerUserInfo'}>
							<Box bgcolor="background.paper" p={1} className={'userInfoBoxDrawer'}>
								<StyledBadge
									overlap="circle"
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									variant="dot"
								>
									<Avatar
										className={'userImageDrawer'}
										alt="User Logo"
										src={require('../assets/suvam_dawn.webp')}
									/>
								</StyledBadge>
								<div bgcolor="background.paper" p={1} className={'userInfoBoxDrawer'}>
									<div component="span" color="text.primary" ml={1} className={'userNameDrawer'}>
										<Link href="#/about">Suvam Dawn</Link>
									</div>
									<h6 className={'about_path'}>
										3 Years <span> / </span>
										Full-Stack Developer
									</h6>
								</div>
							</Box>
						</div>

						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/about');
							}}
						>
							<ListItemIcon>
								<FaUserAlt size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								About
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/experience');
							}}
						>
							<ListItemIcon>
								<MdWork size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Experience
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/skills');
							}}
						>
							<ListItemIcon>
								<MdSettings size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Skills
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/education');
							}}
						>
							<ListItemIcon>
								<FaUserGraduate size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Education
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/award');
							}}
						>
							<ListItemIcon>
								<FaAward size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Award
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/contact');
							}}
						>
							<ListItemIcon>
								<MdContacts size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Contact
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								this.props.history.replace('/githubrepo');
							}}
						>
							<ListItemIcon>
								<FaGithub size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Github Repo
							</Typography>
						</MenuItem>
						<MenuItem
							onClick={() => {
								this.drawerStatusUpdate();
								window.open(
									require('../assets/resume/Suvam_Dawn_Resume(7407620534_8436758250_suvamdawn94@gmail.com).pdf')
								);
							}}
						>
							<ListItemIcon>
								<FaCloudDownloadAlt size={25} />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Download Resume
							</Typography>
						</MenuItem>
					</Drawer>
				</div>
			</div>
		);
	}
}
