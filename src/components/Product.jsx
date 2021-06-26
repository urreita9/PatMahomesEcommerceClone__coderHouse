import React from "react";
import { Link } from "react-router-dom";
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
			</div>
		</div>
	);
};

export default Product;
