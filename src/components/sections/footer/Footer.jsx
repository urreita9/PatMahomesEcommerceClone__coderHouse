import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { CartContext } from "../../context/CartContext";
import validator from "validator";

import "./Footer.css";

const Footer = () => {
	const [error, setError] = useState("");
	const [contactMade, setContactMade] = useState(false);
	const { isMenuClicked, createContactEmail } = useContext(CartContext);
	const [inputValues, handleInputChange, reset] = useForm({ email: "" });

	const { email } = inputValues;

	return (
		<div className={`footer__container ${isMenuClicked ? "hide" : "show"}`}>
			<div className='footer__container__info'>
				<h1 className='footer__container__info__title'>SHOWTIME</h1>
				<div className='footer__contact'>
					<p>
						Hey visitor! My name is{" "}
						<span>
							<Link to='/about'>Francisco Urrea</Link>
						</span>
						. This is a React Clone I made for CoderHouse Dev School.
					</p>
					<p>
						Always looking for new job oportunities, so if you like what you
						see...
					</p>
					<h3>Contact Me!</h3>
					{error && <span style={{ color: "yellow" }}>{error}</span>}
					{contactMade && (
						<span style={{ color: "yellow" }}>
							Thanks! Email recieved. I will contact you soon.
						</span>
					)}
					<input
						type='email'
						placeholder='your@email.com'
						onChange={handleInputChange}
						name='email'
						value={email}
						autoComplete='off'
					/>
					<button
						onClick={() => {
							if (!validator.isEmail(email)) {
								setError("Please write a valid email");
								setContactMade(false);
							} else {
								setError("");
								createContactEmail(email);
								setContactMade(true);
								reset();
							}
						}}
					>
						SEND
					</button>
				</div>
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
