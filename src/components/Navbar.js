import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<nav className='flex justify-between text-center'>
				<a href='#About'>About</a>&bull;
				<a href='#Experience'>Experience</a>
			</nav>
		);
	}
}