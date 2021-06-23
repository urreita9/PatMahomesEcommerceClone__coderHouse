import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./CartProducts.css";

const CartPoducts = ({ id, img, title, stock, price }) => {
	const { setProductsAddedToCart } = useContext(CartContext);
	console.log(title);
	return (
		<div className='cartProducts__container'>
			<div className='cartProducts__container__image__container'>
				<img
					src={img}
					alt='product_image'
					className='cartProducts__container__image__container__image'
				/>
			</div>
			<div>
				<h2>{title}</h2>
				<p>
					$ <span>{price}</span>
				</p>
			</div>
			<div className='cartProducts__counter'>
				<span>01</span>
				<span>+</span>
				<span>-</span>
			</div>
		</div>
	);
};

export default CartPoducts;
