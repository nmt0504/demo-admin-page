import React from 'react';
import { Sidebar } from 'react-adminlte-dash';

const SideBar = () => ([
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


export default SideBar
