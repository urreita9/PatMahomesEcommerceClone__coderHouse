import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CartDisplay from "./CartDisplay";
import "./ProductCard.css";

const ProductCard = ({ id, title, img, price, stock, description }) => {
	const [stockDecrement, setStockDecrement] = useState(0);
	const [outOfStock, setOutOfStock] = useState(false);
	const {
		cartCounter,
		setCartCounter,
		setOpenCart,
		openCart,
		productsAddedToCart,
		setProductsAddedToCart,
	} = useContext(CartContext);

	console.log(stockDecrement);
	console.log(stock);

	// In this function we have to see:
	// 1) Is there any Stock? Is the Cart empty? Ok, add product to cart or else, theres no more stock
	// 2) If it isn´t empty, then we have to verify if the product is already added to de cart.
	// If it so, just add one more item of the same product without duplicating it. If it isn´t inside, then add it and deploy it.
	// 3) Then, there´s no more stock.
	const addToCart = () => {
		if (
			stockDecrement <= stock &&
			stock !== 0 &&
			productsAddedToCart.length === 0
		) {
			setCartCounter(cartCounter + 1);
			setStockDecrement(stockDecrement + 1);
			setProductsAddedToCart((products) => [
				...products,
				{
					id,
					title,
					img,
					price,
				},
			]);
			setOpenCart(true);
			console.log("hola");
		} else if (
			stockDecrement <= stock &&
			stock !== 0 &&
			productsAddedToCart.length > 0
		) {
			const alreadyOnCart = productsAddedToCart.filter(
				(product) => product.id === id
			);
			if (alreadyOnCart.length > 0) {
				setCartCounter(cartCounter + 1);
				setStockDecrement(stockDecrement + 1);
				setOpenCart(true);
			} else {
				setCartCounter(cartCounter + 1);
				setStockDecrement(stockDecrement + 1);
				setProductsAddedToCart((products) => [
					...products,
					{
						id,
						title,
						img,
						price,
					},
				]);
				setOpenCart(true);
			}
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
					{openCart ? <CartDisplay /> : null}
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
