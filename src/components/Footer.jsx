import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import "./Footer.css";

const Footer = () => {
	const { isMenuClicked } = useContext(CartContext);
	return (
		<div className={`footer__container ${isMenuClicked ? "hide" : "show"}`}>
			<div className='footer__container__info'>
				<h1 className='footer__container__info__title'>SHOWTIME</h1>
				<h3>SIGN UP FOR UPDATES</h3>
			</div>
			<div className='footer__container__image'>
				<img
					src='/images/footer_image_section.png'
					alt='Pat Mahomes Back'
					style={{ maxWidth: "110%" }}
				/>
			</div>
		</div>
	);
};

export default Footer;
