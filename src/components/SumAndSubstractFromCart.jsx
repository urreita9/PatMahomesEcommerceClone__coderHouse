import React, { useState, useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./SumAndSubstractFromCart.css";
import { CartContext } from "./CartContext";

const SumAndSubstractFromCart = ({
	id,
	stock,
	onClickAddToCart,
	onClickRemoveFromCart,
	amountAdded,
}) => {
	const [outOfStock, setOutOfStock] = useState(false);
	const { productsAddedToCart } = useContext(CartContext);
	return (
		<div className='buttons__container'>
			<span> {amountAdded}</span>
			<button
				onClick={(id) => {
					if (amountAdded <= stock) {
						onClickAddToCart(id);
					} else {
						setOutOfStock(true);
					}
				}}
			>
				<AddIcon fontSize='small' />
			</button>
			<button
				onClick={(id) => {
					onClickRemoveFromCart(id);
				}}
			>
				<RemoveIcon fontSize='small' />
			</button>
			{console.log(id)}
			{outOfStock ? <span>Out of Stock. More coming soon!</span> : null}
		</div>
	);
};

export default SumAndSubstractFromCart;
