import React from 'react';
import moment from 'moment';

export default class Filmer extends React.PureComponent {
	_daysLeft() {
		return moment('20-06-2019', 'DD-MM-YYYY').diff(moment(), 'days');
	}

	render() {
		return (
			<div className="banner-text">
				<h2>{this._daysLeft()} Dagar kvar</h2>
			</div>
		);
	}
}
