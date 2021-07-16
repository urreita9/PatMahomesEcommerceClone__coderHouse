import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import CartPoduct from "./CartPoduct";
import { CartContext } from "./context/CartContext";
import { useForm } from "../hooks/useForm";
import validator from "validator";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./CartScreen.css";

const CartScreen = () => {
	const {
		cartTotal,
		productsAddedToCart,
		multiplyPartial,
		createOrder,
		updateStock,
	} = useContext(CartContext);
	const [inputValues, handleInputChange, reset] = useForm({
		name: "",
		phone: "",
		email: "",
		adress: "",
	});

	const { name, phone, email, adress } = inputValues;

	useEffect(() => {
		multiplyPartial();
	}, [productsAddedToCart]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || phone === "" || adress === "") return;

		createOrder(name, phone, email, adress, productsAddedToCart, cartTotal);
		updateStock(productsAddedToCart);
		reset();
	};

	return (
		<>
			<h1 className='cartScreen__title animate__animated animate__fadeIn'>
				CART CHECKOUT
			</h1>
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
					<Redirect to='/all' />
				)}

				<div className='cartScreen__products total'>
					{" "}
					<span>TOTAL</span>
					<AttachMoneyIcon fontSize='inherit' />
					<span> {cartTotal}</span>
				</div>
				<div className='cartScreen__products'>
					{productsAddedToCart.map((product) => {
						return <CartPoduct {...product} checkout={true} key={product.id} />;
					})}
				</div>
			</div>
		</>
	);
};

export default CartScreen;
