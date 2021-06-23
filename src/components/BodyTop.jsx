import React from "react";
import Marquee from "./Marquee";
import backgroundImage from "../assets/background_image.png";
import mobile_background_image from "../assets/1--mobile.png";
import "./BodyTop.css";

const BodyTop = () => {
	return (
		<div className='body__topCointainer'>
			<img
				className='body__topCointainer__backgroundImage'
				src={
					// Debería de poder elevar el state screenWidth desde Header hasta App,
					// y desde App hasta acá
					window.innerWidth > 799 ? backgroundImage : mobile_background_image
				}
				alt='PatMahomes_backgroundImage'
			/>
			<h1 className='body__topContainer__title animate__animated animate__fadeIn'>
				<span>PATRICK</span> MAHOMES II
			</h1>

			{/*  Marquesina */}
			<Marquee
				marqueeContainerClassName='body__topContainer__marquee'
				marqueeTextClassName='body__topContainer__marquee__text'
				dataText='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
            STORE OF PATRICK MAHOMES • SHOWTIME •'
			/>
		</div>
	);
};

export default BodyTop;
