import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ClearIcon from "@material-ui/icons/Clear";
import "./CartDisplay.css";
import { CartContext } from "./CartContext";
import CartProduct from "./CartPoduct";

const CartDisplay = ({
	onClickAddToCart,
	onClickRemoveFromCart,
	cartTotal,
	// setOutOfStock,
}) => {
	const { setOpenCart, openCart, productsAddedToCart } =
		useContext(CartContext);
	const handleCartClick = () => {
		setOpenCart(false);
	};
	console.log(productsAddedToCart);
	return (
		<div
			className={openCart ? "cart__display__container" : "no__cart__display"}
		>
			<div className='cart__display__margin'>
				<div>
					<div className='cart__display__header'>
						<div>
							<h1 className='cart__display__header__title'> RED ZONE</h1>
							<p className='cart__display__p'>
								YOUR CART -{" "}
								<span>
									{productsAddedToCart.length > 0
										? "GOOD PICKS :)"
										: "IS EMPTY"}
								</span>
							</p>
						</div>
						<div className='cart__display__clearIcon' onClick={handleCartClick}>
							<ClearIcon />
						</div>
					</div>
					<div className='cart__display__body'>
						{productsAddedToCart.map((productAdded) => (
							<CartProduct
								{...productAdded}
								// hola={productAdded}
								// outOfStock={outOfStock}
								// setOutOfStock={setOutOfStock}
								onClickAddToCart={onClickAddToCart}
								onClickRemoveFromCart={onClickRemoveFromCart}
							/>
						))}
						{console.log(productsAddedToCart)}
					</div>
				</div>
				<div className='cart__display__footer__container'>
					{productsAddedToCart.length > 0 ? (
						<div className='cart__display__footer__totalPrice__container'>
							<span>TOTAL :</span>
							<span>
								$ <strong>{cartTotal}</strong>
							</span>
						</div>
					) : null}

					<div className='cart__display__btn__container'>
						<button
							className='cart__display__btn'
							style={{
								backgroundColor: "transparent",
								color: "white",
								fontWeight: "lighter",
							}}
						>
							{productsAddedToCart.length > 0 ? (
								"CHECKOUT"
							) : (
								<Link to='/all' className='link'>
									<span>GO SHOPPING</span>
								</Link>
							)}
						</button>
					</div>
					<div className='cart__display__footer'>
						<div>
							<span>PATRICK MAHOMES / QB</span>
						</div>
						<div></div>
						<div>
							<span>OFFICIAL MERCH STORE</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDisplay;
