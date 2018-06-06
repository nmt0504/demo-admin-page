import React from 'react';
import { Sidebar } from 'react-adminlte-dash';

const MySideBar = (pathName) => ([
	<Sidebar.Search key="1" />,
	<Sidebar.Menu header="MAIN MENU" key="2">
		<Sidebar.Menu.Item
			active={pathName === '/home'}
			icon={{ className: 'fa fa-home' }}
			title="Home"
			href="#/home"
		/>
		<Sidebar.Menu.Item
			active={pathName === '/staff'}
			icon={{ className: 'fa fa-user' }}
			title="Staff"
			href="#/staff"
		/>
		<Sidebar.Menu.Item
			icon={{ className: 'fa fa-tasks' }}
			active={pathName === '/categories'}
			title="Categories"
			href="#/categories"
		/>
	</Sidebar.Menu>
]);

export default MySideBar
