import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./SumAndSubstractFromCart.css";

const SumAndSubstractFromCart = ({ cartCounter, setCartCounter, stock }) => {
	const [thisProductAmount, setThisProductAmount] = useState(0);
	const [outOfStock, setOutOfStock] = useState(false);
	return (
		<div className='buttons__container'>
			<button
				onClick={() => {
					if (thisProductAmount > 0) {
						setOutOfStock(false);
						setThisProductAmount(thisProductAmount - 1);
						setCartCounter(cartCounter - 1);
					}
				}}
			>
				<RemoveIcon fontSize='small' />
			</button>
			<span> {thisProductAmount}</span>
			<button
				onClick={() => {
					if (thisProductAmount <= stock) {
						setOutOfStock(false);
						setThisProductAmount(thisProductAmount + 1);
						setCartCounter(cartCounter + 1);
					} else {
						setOutOfStock(true);
					}
				}}
			>
				<AddIcon fontSize='small' />
			</button>
			{outOfStock ? <span>Out of Stock. More coming soon!</span> : null}
		</div>
	);
};

export default SumAndSubstractFromCart;
