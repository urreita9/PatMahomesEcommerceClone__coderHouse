import React, { useContext } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import "./CartDisplay.css";
import { CartContext } from "./CartContext";
import CartProducts from "./CartPoducts";

const CartDisplay = () => {
	const { setOpenCart, openCart, productsAddedToCart, setProductsAddedToCart } =
		useContext(CartContext);
	const handleCartClick = () => {
		setOpenCart(false);
	};
	return (
		<div
			className={openCart ? "cart__display__container" : "no__cart__display"}
		>
			<div className='cart__display__margin'>
				<div className='cart__display__header'>
					<div>
						<h1 className='cart__display__header__title'> RED ZONE</h1>
						<p className='cart__display__p'>
							YOUR CART - <span>IS EMPTY</span>
						</p>
					</div>
					<div className='cart__display__clearIcon' onClick={handleCartClick}>
						<ClearIcon />
					</div>
				</div>
				<div className='cart__display__body'>
					{productsAddedToCart.length > 0
						? productsAddedToCart.map((productAdded) => (
								<CartProducts {...productAdded} />
						  ))
						: null}
				</div>
				<div className='cart__display__footer__container'>
					<div className='cart__display__btn__container'>
						<button
							className='cart__display__btn'
							style={{
								backgroundColor: "transparent",
								color: "white",
								fontWeight: "lighter",
							}}
						>
							GO SHOPPING
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
