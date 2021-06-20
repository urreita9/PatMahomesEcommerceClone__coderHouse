import React from "react";
// import "./ProductCard.css";

const ProductCard = ({ title, img, price, stock, description }) => {
	return (
		<div className='product__card__container'>
			<div className='product__image'>
				<img src={img} alt={title} className='product__image__img' />
			</div>
			<div className='product__info'>
				<div className='product__info__topContainer'>
					<div className='product__info__topContainer__title'>
						<h1>{title}</h1>
					</div>
					<div className='product__info__topContainer__price'>
						<span>$ {price}</span>
					</div>
				</div>
				<div className='product__info__bottomContainer'>
					<button className='product__info__addToCart'>ADD TO CART</button>
					<p className='product__info__description'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
