import React from 'react';
import NukaCarousel from 'nuka-carousel';
// import image1 from '../images/2018/1.jpg';

// const image1 = require('../images/2018/2.jpg');

export default class Carousel extends React.PureComponent {
	constructor(props) {
		super(props);
		const images = [ 1, 2, 3, 4, 5, 6, 7 ];
		this.state = {
			images: images.map((idx) => require(`../images/2018/${idx}.jpg`))
		};
	}

	render() {
		return (
			<NukaCarousel autoplay dragging={false} withoutControls wrapAround>
				{this.state.images.map((image, i) => <img key={i} src={image} />)}
			</NukaCarousel>
		);
	}
}
