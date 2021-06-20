import React from "react";
import { Link } from "react-router-dom";
// import productImage from "../assets/PM-Run-It-Back-Tee-Front.png";
import "./Product.css";
import SumAndSubstractFromCart from "./SumAndSubstractFromCart";

const Product = ({
	id,
	displayProduct,
	title,
	price,
	img,
	description,
	stock,
	cartCounter,
	setCartCounter,
	slider,
}) => {
	return (
		<div className={displayProduct}>
			<Link to={`/product/${id}`}>
				<img className='product__image' src={img} alt='productImage' />
			</Link>
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
