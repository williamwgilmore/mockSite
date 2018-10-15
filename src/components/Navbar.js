import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<nav className='flex justify-between'>
				<a href='#About'>About</a>
				<a href='#Experience'>Experience</a>

			</nav>
		);
	}
}