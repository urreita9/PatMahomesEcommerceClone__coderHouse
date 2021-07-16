import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import CartPoduct from "./CartPoduct";
import { CartContext } from "./context/CartContext";
import { useForm } from "../hooks/useForm";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./CartScreen.css";

const CartScreen = () => {
	const [buyer, setBuyer] = useState({});
	const { cartTotal } = useContext(CartContext);
	const [inputValues, handleInputChange, reset] = useForm({
		name: "",
		phone: "",
		email: "",
		adress: "",
	});

	const { name, phone, email, adress } = inputValues;
	const { productsAddedToCart, multiplyPartial } = useContext(CartContext);
	useEffect(() => {
		multiplyPartial();
	}, [productsAddedToCart]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || phone === "" || adress === "") return;
		setBuyer({
			name: name,
			phone: phone,
			email: email,
			adress: adress,
		});

		reset();
	};
	console.log(buyer, productsAddedToCart);
	return (
		<>
			<h1 className='cartScreen__title'>CART CHECKOUT</h1>
			<div className='cartScreen__container'>
				{cartTotal > 0 ? (
					<form onSubmit={(e) => handleSubmit(e)} className='cartScreen__form'>
						<label>Name</label>
						<input
							type='text'
							placeholder='Enter your Name...'
							style={{ display: "block" }}
							value={name}
							name='name'
							onChange={handleInputChange}
							autoComplete='off'
						/>
						<label>Phone</label>
						<input
							type='tel'
							placeholder='Enter your Phone...'
							style={{ display: "block" }}
							value={phone}
							name='phone'
							onChange={handleInputChange}
							autoComplete='off'
						/>
						<label>Email</label>
						<input
							type='email'
							placeholder='Enter your Email...'
							style={{ display: "block" }}
							value={email}
							name='email'
							onChange={handleInputChange}
							autoComplete='off'
						/>
						<label>Delivery Adress</label>
						<input
							type='text'
							placeholder='Enter your Adress...'
							style={{ display: "block" }}
							value={adress}
							name='adress'
							onChange={handleInputChange}
							autoComplete='off'
						/>
						<button type='submit' className='cartSreen__formButton'>
							FINISH PURCHASE
						</button>
					</form>
				) : (
					// <h2 className='shopAll__Title'>
					// 	<Link to='/all'>SHOP ALL</Link>
					// </h2>
					<Redirect to='/all' />
				)}

				<div className='cartScreen__products total'>
					{" "}
					<span
					// style={{
					// 	display: "flex",
					// 	flexDirection: "row",
					// 	alignItems: "center",
					// }}
					>
						TOTAL
					</span>
					<AttachMoneyIcon fontSize='inherit' />
					<span> {cartTotal}</span>
				</div>
				<div className='cartScreen__products'>
					{productsAddedToCart.map((product) => {
						return (
							// <div key={product.id}>
							// 	<h5>{product.title}</h5>
							// 	<img src={product.img} alt='' />
							// </div>
							<CartPoduct {...product} checkout={true} />
						);
					})}
				</div>
			</div>
		</>
	);
};

export default CartScreen;
