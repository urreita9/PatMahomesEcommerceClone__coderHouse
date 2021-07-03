import React, { useState } from "react";
// import SumAndSubstractFromCart from "./SumAndSubstractFromCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./SumAndSubstractFromCart.css";
import "./CartProducts.css";

const CartPoduct = ({
	id,
	img,
	title,
	amountAdded,
	stock,
	price,
	// setOutOfStock,
	onClickAddToCart,
	onClickRemoveFromCart,
}) => {
	const [outOfStock, setOutOfStock] = useState(false);
	return (
		<div className='cartProducts__container'>
			<div className='cartProducts__container__ImageTitle'>
				<div className='cartProducts__container__image__container'>
					<img
						src={img}
						alt='product_image'
						className='cartProducts__container__image__container__image'
					/>
				</div>
				<div className='cartProducts__titlePrice__container'>
					<h2>{title}</h2>
					<p className='title__price'>
						<AttachMoneyIcon fontSize='inherit' /> <span>{price}</span>
					</p>
				</div>
			</div>

			{/* <SumAndSubstractFromCart
				id={id}
				amountAdded={amountAdded}
				stock={stock}
				onClickAddToCart={onClickAddToCart}
				onClickRemoveFromCart={onClickRemoveFromCart}
			/> */}
			<div className='buttons__container'>
				<span> {amountAdded}</span>
				<button
					onClick={() =>
						amountAdded < stock ? onClickAddToCart(id) : setOutOfStock(true)
					}
				>
					<AddIcon fontSize='small' />
				</button>
				<button
					onClick={() => {
						onClickRemoveFromCart(id);
						setOutOfStock(false);
					}}
				>
					<RemoveIcon fontSize='small' />
				</button>
				{outOfStock ? <span>Out of Stock. More coming soon!</span> : null}
			</div>
		</div>
	);
};

export default CartPoduct;
