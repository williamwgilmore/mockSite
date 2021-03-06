import React, { Component } from 'react';

export default class Bio extends Component {
	constructor(props){
		super(props);

		this.animate = this.animate.bind(this);
		this.state = {
			bioClass: 'bioText alignText',
		};
	}

    componentDidMount() {
       window.addEventListener('scroll', this.animate, true);
    }

	animate(){
		this.setState({ 
			bioClass: 'bioText alignText slideInLeft',
		});
	}

	render() {
		return (
			<div id='About'>
				<div className='row'>
					<div className='col-md-8 col-md-offset-2'>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 col-md-offset-2'>				
						<div className={this.state.bioClass}>
							
						</div>
					</div>
					<div className='col-md-4 text-center'>
						<div className='bioImage'></div>
					</div>
				</div>
			</div>
		);
	}
}