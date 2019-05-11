import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import background from '../images/bg_1.jpg';
import Header from './header';

export default class NavBar extends React.PureComponent {
	render() {
		return (
			<div>
				<ParallaxBanner
					layers={[
						{
							image: background,
							amount: 0.5
						},
						{
							amount: 0.0,
							children: <Header />
						}
					]}
				/>
			</div>
		);
	}
}
