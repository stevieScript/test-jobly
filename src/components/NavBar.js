import {NavLink} from 'react-router-dom';
import React, {useContext} from 'react';
import UserContext from '../auth/UserContext';

function NavBar() {
	const {currentUser, handleLogout} = useContext(UserContext);

	function loggedInNav() {
		return (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item mr-4'>
					<NavLink className='nav-link' to='/companies'>
						Companies
					</NavLink>
				</li>
				<li className='nav-item mr-4'>
					<NavLink className='nav-link' to='/jobs'>
						Jobs
					</NavLink>
				</li>
				<li className='nav-item mr-4'>
					<NavLink className='nav-link' to='/profile'>
						Profile
					</NavLink>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/' onClick={handleLogout}>
						Log out {currentUser && (currentUser.firstName || currentUser.username)}
					</a>
				</li>
			</ul>
		);
	}

	function loggedOutNav() {
		return (
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item mr-4'>
					<NavLink className='nav-link' to='/login'>
						Login
					</NavLink>
				</li>
				<li className='nav-item mr-4'>
					<NavLink className='nav-link' to='/signup'>
						Sign Up
					</NavLink>
				</li>
			</ul>
		);
	}

	return (
		<nav className='Navigation navbar navbar-expand-md'>
			<NavLink className='navbar-brand' to='/'>
				Jobly
			</NavLink>
			{currentUser ? loggedInNav() : loggedOutNav()}
		</nav>
	);
}

export default NavBar;

