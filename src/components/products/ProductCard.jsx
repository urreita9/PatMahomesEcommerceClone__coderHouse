import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartDisplay from "../cart/CartDisplay";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import "./ProductCard.css";

const ProductCard = ({ id, title, img, price, stock, description }) => {
	const {
		openCart,
		productsAddedToCart,
		outOfStock,
		cartTotal,
		multiplyPartial,
		addToCart,
		removeFromCart,
	} = useContext(CartContext);

	useEffect(() => {
		multiplyPartial();
	}, [productsAddedToCart]);

	return (
		<div className='productCard__card__container'>
			<div className='productCard__image'>
				<img
					src={img}
					alt={title}
					className='productCard__image__img'
					onLoad={() => {
						console.log("loaded");
					}}
				/>
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
							<AttachMoneyIcon fontSize='inherit' />
							{price}
						</span>
					</div>
				</div>
				<div className='productCard__info__bottomContainer'>
					<button
						className='productCard__info__addToCart'
						onClick={() => addToCart(id, stock, title, img, price)}
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
