import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import { userActions } from "../../_actions/users.action";
import { Dashboard } from 'react-adminlte-dash';
import {connect} from "react-redux";

const logoLg = () => (
	<span><b>AdminDashboard</b></span>
);

const logoSm = () => (
	<span><b>ADB</b></span>
);

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	onLogOut = () => {
		const { dispatch } = this.props;
		dispatch(userActions.logout());
	};

	render() {
		return (
			<div id="wrapper">
				<Dashboard
					navbarChildren={Header(this.onLogOut)}
					sidebarChildren={SideBar(this.props.location.pathname)}
					footerChildren={Footer()}
					logoLg={logoLg()}
					logoSm={logoSm()}
					theme="skin-blue"
					sidebarMini
				>
					{this.props.children}
				</Dashboard>
			</div>
		)
	}
}

Nav.defaultProps = {
	children: null
};

Nav.propTypes = {
	children: PropTypes.node
};

function mapStateToProps(state) {
	const { user } = state.authentication;
	return {
		user
	};
}

const connectedNav = connect(mapStateToProps)(Nav);

export default connectedNav;
