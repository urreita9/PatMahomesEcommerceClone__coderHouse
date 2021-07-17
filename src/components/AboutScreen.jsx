import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./AboutScreen.css";

const AboutScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='about__container'>
				<Header />
				<h1 className='about__title animate__animated animate__fadeIn'>
					ABOUT ME
				</h1>
				<div className='about__info__container'>
					<p>
						<span className='first__span'>My name: </span>
						<span className='second__span'>FRANCISCO URREA</span>
					</p>
					<p>
						<span className='first__span'>country: </span>
						<span className='second__span'>ARGENTINA</span>
					</p>
					<p>
						<span className='first__span'>Language: </span>
						<span className='second__span'>SPANISH - ENGLISH</span>
					</p>
					<p>
						<span className='first__span'>TECHS: </span>
						<span className='second__span'>HTML-CSS/SASS-JS-REACT JS</span>
					</p>
					<p>
						<span className='first__span'>CURRENTLY: </span>
						<span className='second__span'>NODE JS-EXPRESS-MONGO DB</span>
					</p>
					<p>
						<span className='first__span'>NEXT STOP: </span>
						<span className='second__span'>MERN FULL STACK</span>
					</p>
					<p>
						<span className='first__span'>AFTER THAT: </span>
						<span className='second__span'>REACT NATIVE-MOBILE APPS</span>
					</p>

					<p>
						<span className='first__span'>VANILLA JS PROJECT - SPANISH:</span>
						<span className='second__span'>
							<a
								href='https://urreita9.github.io/giphos/index.html'
								style={{ color: "yellow" }}
							>
								GIPHOS
							</a>
						</span>
					</p>
					<p>
						<span className='first__span'>PASSION: </span>
						<span className='second__span'>
							LEARNING NEW STUFF. ALL THE TIME
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutScreen;
