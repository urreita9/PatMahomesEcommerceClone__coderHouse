import React from "react";
import Header from "./Header";
import "./AboutScreen.css";

const AboutScreen = () => {
	return (
		<>
			<h1 className='about__title'>ABOUT</h1>
			<div className='about__container'>
				<Header />
			</div>
		</>
	);
};

export default AboutScreen;
