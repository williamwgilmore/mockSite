import React, { Component } from 'react';

export default class Welcome extends Component {
	render() {
		return (
			<div id='welcomeBackground'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-center centerHeight'>
							<h1 className='title mainTitle'><b>Briana Indahl</b></h1>
							<hr className='divider'/>
							<h2 className='title subTitle'>Doctor of Astronomy</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}