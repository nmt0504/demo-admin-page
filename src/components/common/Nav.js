import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash'

const user = JSON.parse(localStorage.getItem('user'));

const a = () => {};
const b = () => {};

const nav = () => ([
	<Header.Item href="/some/link" key="1" />,
	<Header.UserMenu key="2" name={user.username} profileAction={a} signOutAction={b}/>
]);

const sb = () => ([
	<Sidebar.Menu header="NAVIGATION" key="1">
		<Sidebar.Menu.Item
			title="Staff"
			href="#/staff"
		/>
		<Sidebar.Menu.Item
			title="Categories"
			href="#/categories"
		/>
	</Sidebar.Menu>
]);

class Nav extends Component {
	render() {
		return (
			<div id="wrapper">
				<Dashboard
					navbarChildren={nav()}
					sidebarChildren={sb()}
					theme="skin-blue"
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

export default Nav;
