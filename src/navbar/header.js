import React from 'react';
import './header.css';

export default class Header extends React.PureComponent {
	render() {
		return (
			<div className="header">
				<div>
					<h1>Missömmar 2019</h1>
					<h2>20 - 29 Juni / Björka</h2>
				</div>
			</div>
		);
	}
}
