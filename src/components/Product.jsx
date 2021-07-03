import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./Product.css";
import { CartContext } from "./CartContext";

const Product = ({ id, displayProduct, title, price, img, imageLoaded }) => {
	const { setOutOfStock } = useContext(CartContext);
	return (
		<div className={displayProduct}>
			<Link to={`/product/${id}`}>
				<img
					className='product__image'
					src={img}
					alt='productImage'
					onClick={() => setOutOfStock(false)}
				/>
			</Link>

			<div className='product__info'>
				<p>
					{title}
					<span>
						<AttachMoneyIcon fontSize='inherit' /> {price}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Product;
