import React from "react";
import productImage from "../assets/PM-Run-It-Back-Tee-Front.png";
import "./Product.css";

const Product = ({ title, price, description }) => {
	return (
		<div className='product'>
			<img className='product__image' src={productImage} alt='productImage' />
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
