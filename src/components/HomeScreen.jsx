import React from "react";
import "../App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const HomeScreen = () => {
	return (
		<div className='App'>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default HomeScreen;
