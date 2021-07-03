import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import ProductSkeleton from "./PoductSkeleton";
import { getData } from "../helpers/getData";

import "./ShopGrid.css";

const ShopGrid = () => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const [products, setProducts] = useState([]);
	useEffect(() => {
		getData().then((data) => setProducts(data));
		setImageLoaded(true);
	}, []);
	return (
		<div className='shop__section__container'>
			<h1 className='shop__section__title animate__animated animate__fadeIn'>
				<span className='shop__section__title__span'>SHOP ALL</span> PRODUCTS
			</h1>
			<div
				className={`shop__grid__container ${
					imageLoaded || "skeleton__grid__container"
				}`}
			>
				{imageLoaded
					? products.map((product) => {
							return (
								<Product displayProduct='shop__products__inGrid' {...product} />
							);
					  })
					: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
							return (
								<ProductSkeleton
									key={key}
									displayProduct='shop__products__inGrid skeleton__inFlex'
								/>
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
