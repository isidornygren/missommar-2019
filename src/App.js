import React from 'react';
import './App.css';
import NavBar from './navbar';
import Info from './pages/info';
import Carousel from './pages/carousel';
import Filmer from './pages/filmer';
import Kontakt from './pages/kontakt';
import CountDown from './pages/countdown';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './footer';

function App() {
	return (
		<ParallaxProvider>
			<NavBar />
			<div className="app">
				<CountDown />
				<Info />
				<Carousel />
				<Filmer />
				<Kontakt />
			</div>
			<Footer />
		</ParallaxProvider>
	);
}

export default App;
