import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ClearIcon from "@material-ui/icons/Clear";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./CartDisplay.css";
import { CartContext } from "./context/CartContext";
import CartPoduct from "./CartPoduct";

const CartDisplay = ({
	cartTotal,
	// setOutOfStock,
}) => {
	const { openCart, productsAddedToCart, handleCartClick } =
		useContext(CartContext);

	return (
		<div
			className={
				openCart
					? "cart__display__container animate__animated animate__fadeInRight"
					: "no__cart__display"
			}
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
							<CartPoduct
								{...productAdded}
								// hola={productAdded}
								// outOfStock={outOfStock}
								// setOutOfStock={setOutOfStock}

								key={productAdded.id}
							/>
						))}
						{console.log(productsAddedToCart)}
					</div>
				</div>
				<div className='cart__display__footer__container'>
					{productsAddedToCart.length > 0 ? (
						<div className='cart__display__footer__totalPrice__container'>
							<span>TOTAL</span>
							<span className='totalPrice'>
								<AttachMoneyIcon fontSize='inherit' />{" "}
								<strong>{cartTotal}</strong>
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
								<Link to='/cart'>
									<span>CHECKOUT</span>
								</Link>
							) : (
								<Link to='/all' onClick={handleCartClick}>
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
