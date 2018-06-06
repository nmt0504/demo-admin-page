import React from 'react';
import { Header } from 'react-adminlte-dash';
import userAvatar from '../../assets/images/avatar.png';

const username = localStorage.getItem('username') ? localStorage.getItem('username') : '';

const MyHeader = (onLogOut) => ([
	<Header.UserMenu key="1" image={userAvatar} name={username} signOutAction={onLogOut}/>
]);

export default MyHeader;
