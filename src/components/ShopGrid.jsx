import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getData } from "../helpers/getData";

import "./ShopGrid.css";

const ShopGrid = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getData().then((data) => setProducts(data));
	}, []);
	return (
		<div className='shop__section__container'>
			<h1 className='shop__section__title animate__animated animate__fadeIn'>
				<span className='shop__section__title__span'>SHOP ALL</span> PRODUCTS
			</h1>
			<div className='shop__grid__container'>
				{products.map((product) => {
					return (
						<Product displayProduct='shop__products__inGrid' {...product} />
					);
				})}
			</div>
			<div className='shop__image'>
				<img
					src='/images/shop_image_section.png'
					alt='Pat_Mahomes'
					style={{ maxWidth: "100%" }}
				/>
			</div>
		</div>
	);
};

export default ShopGrid;
