import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import background from './images/bg_1.jpg';

export default class NavBar extends React.PureComponent {
	render() {
		return (
			<div>
				<ParallaxBanner
					layers={[
						{
							image: background,
							amount: 0.5
						}
					]}
				/>
				<h1>Missömmar 2019</h1>
			</div>
		);
	}
}
