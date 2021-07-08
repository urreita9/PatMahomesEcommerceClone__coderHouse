import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./Product.css";
import { CartContext } from "./context/CartContext";

const Product = ({ id, displayProduct, title, price, img }) => {
	const { setOutOfStock, imageLoaded, setImageLoaded } =
		useContext(CartContext);
	return (
		<div className={displayProduct}>
			<Link to={`/product/${id}`}>
				<img
					className='product__image'
					src={img}
					alt='productImage'
					onClick={() => setOutOfStock(false)}
					onLoad={() => {
						setImageLoaded(true);
					}}
					style={{ visibility: imageLoaded ? "visible" : "hidden" }}
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
