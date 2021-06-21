import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductCard.css";

const ProductCard = ({ title, img, price, stock, description }) => {
	const [stockDecrement, setStockDecrement] = useState(0);
	const [outOfStock, setOutOfStock] = useState(false);
	const { cartCounter, setCartCounter } = useContext(CartContext);

	const addToCart = () => {
		if (stockDecrement <= stock && stock !== 0) {
			setCartCounter(cartCounter + 1);
			setStockDecrement(stockDecrement + 1);
			console.log(stock);
			console.log(stockDecrement);
		} else {
			setOutOfStock(true);
		}
	};

	return (
		<div className='productCard__card__container'>
			<div className='productCard__image'>
				<img src={img} alt={title} className='productCard__image__img' />
			</div>
			<div className='productCard__info'>
				<div className='productCard__info__topContainer'>
					<div className='productCard__info__topContainer__title'>
						<h1 className='productCard__info__topContainer__title__h1'>
							{title}
						</h1>
					</div>
					<div className='productCard__info__topContainer__price'>
						<span className='productCard__info__topContainer__title__span'>
							$ {price}
						</span>
					</div>
				</div>
				<div className='productCard__info__bottomContainer'>
					<button className='productCard__info__addToCart' onClick={addToCart}>
						ADD TO CART
					</button>
					{outOfStock && (
						<span style={{ color: "#fcee21" }}>
							No stock available. More coming soon!!!
						</span>
					)}
					<p className='productCard__info__description'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
