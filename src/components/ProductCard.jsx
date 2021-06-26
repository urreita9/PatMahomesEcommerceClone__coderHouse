import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import CartDisplay from "./CartDisplay";
import "./ProductCard.css";

const ProductCard = ({ id, title, img, price, stock, description }) => {
	const [outOfStock, setOutOfStock] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const {
		cartCounter,
		setCartCounter,
		setOpenCart,
		openCart,
		productsAddedToCart,
		setProductsAddedToCart,
	} = useContext(CartContext);

	useEffect(() => {
		multiplyPartial();
	}, [productsAddedToCart]);

	const multiplyPartial = () => {
		const partials = productsAddedToCart.map(
			(element) => element.price * element.amountAdded
		);
		setCartTotal(
			partials.reduce((a, b) => {
				return a + b;
			}, 0)
		);
	};

	const addToCart = (id) => {
		const existInCart = productsAddedToCart.find(
			(product) => product.id === id
		);
		if (stock > 0) {
			if (existInCart) {
				setProductsAddedToCart(
					productsAddedToCart.map((product) =>
						product.id === id
							? {
									...existInCart,
									amountAdded: existInCart.amountAdded + 1,
									// cartPartial: existInCart.amountAdded * existInCart.price,
							  }
							: product
					)
				);
				setCartCounter(cartCounter + 1);
				setOpenCart(true);
			} else {
				setProductsAddedToCart([
					...productsAddedToCart,
					{
						id,
						title,
						img,
						price,
						stock,
						// cartPartial: price,
						amountAdded: 1,
					},
				]);
				setCartCounter(cartCounter + 1);
				setOpenCart(true);
			}
		} else {
			setOutOfStock(true);
		}
	};

	const removeFromCart = (id) => {
		const existInCart = productsAddedToCart.find(
			(product) => product.id === id
		);
		if (existInCart.amountAdded === 1) {
			setProductsAddedToCart(
				productsAddedToCart.filter((product) => product.id !== id)
			);
			setCartCounter(cartCounter - 1);
			// setOutOfStock(false);
		} else {
			setProductsAddedToCart(
				productsAddedToCart.map((product) =>
					product.id === id
						? { ...existInCart, amountAdded: existInCart.amountAdded - 1 }
						: product
				)
			);
			// setOutOfStock(false);
			setCartCounter(cartCounter - 1);
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
					<button
						className='productCard__info__addToCart'
						onClick={() => addToCart(id)}
					>
						ADD TO CART
					</button>
					{openCart ? (
						<CartDisplay
							// outOfStock={outOfStock}
							// setOutOfStock={setOutOfStock}
							cartTotal={cartTotal}
							onClickAddToCart={addToCart}
							onClickRemoveFromCart={removeFromCart}
						/>
					) : null}
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
