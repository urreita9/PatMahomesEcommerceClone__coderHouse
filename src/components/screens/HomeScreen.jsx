import React, { useEffect } from "react";
import "../../App.css";
import Body from "../sections/body/Body";
import Header from "../sections/header/Header";

const HomeScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='App'>
			<Header />
			<Body />
		</div>
	);
};

export default HomeScreen;
