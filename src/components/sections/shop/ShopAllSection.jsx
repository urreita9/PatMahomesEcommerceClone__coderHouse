import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShopAllSection.css";
import backgroundImage2 from "../../../assets/mahomes.jpg";
import { CartContext } from "../../context/CartContext";

const ShopAllSection = () => {
	const { backToShop } = useContext(CartContext);

	useEffect(() => {
		backToShop();
	}, []);
	return (
		<div className='shopAll__container'>
			<h2 className='shopAll__Title'>
				<Link to='/all'>SHOP ALL</Link>
			</h2>
			<div className='shopAll__image__container'>
				<img
					className='topCointainer__backgroundImage2'
					src={backgroundImage2}
					alt=''
					style={{ maxWidth: "100%" }}
				/>
			</div>
		</div>
	);
};

export default ShopAllSection;
