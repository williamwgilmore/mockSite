import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<div className='contactBackground'>
				<div className='row'>
					<div className='col-md-6 col-md-offset-3 text-center'>
						<h4 className='contactText'><a href='mailto:briana.lane246@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a></h4>&bull;
						<h4 className='contactText'><a href='https://https://www.linkedin.com/in/briana-indahl-4505a6105/' target='_blank' rel='noopener noreferrer'>Linkedin</a></h4>&bull;
						<h4 className='contactText'><a href='https://github.com/BrianaLane' target='_blank' rel='noopener noreferrer'>GitHub</a></h4>
					</div>
				</div>
			</div>
		);
	}
}