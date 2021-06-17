import React from "react";
// import productImage from "../assets/PM-Run-It-Back-Tee-Front.png";
import "./Product.css";
import SumAndSubstractFromCart from "./SumAndSubstractFromCart";

const Product = ({
	title,
	price,
	img,
	description,
	stock,
	cartCounter,
	setCartCounter,
}) => {
	console.log(img);
	return (
		<div className='product'>
			<img className='product__image' src={img} alt='productImage' />
			<div className='product__info'>
				<p>
					{title}
					<span> $ {price}</span>
				</p>
				<SumAndSubstractFromCart
					stock={stock}
					cartCounter={cartCounter}
					setCartCounter={setCartCounter}
				/>
			</div>
		</div>
	);
};

export default Product;
