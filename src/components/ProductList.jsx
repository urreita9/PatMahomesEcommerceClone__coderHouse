import React from "react";
import Product from "./Product";
import ProductSkeleton from "./PoductSkeleton";

import SliderContainer from "./SliderContainer";
import "./ProductListGrid.css";

const ProductList = ({ products, displayClassName, slider, imageLoaded }) => {
	return (
		<div className={displayClassName}>
			{slider ? (
				<SliderContainer products={products} imageLoaded={imageLoaded} />
			) : imageLoaded ? (
				products.slice(0, 6).map((product) => {
					return (
						<Product
							imageLoaded={imageLoaded}
							displayProduct='productInGrid'
							{...product}
							key={product.id}
						/>
					);
				})
			) : (
				[1, 2, 3, 4, 5, 6].map((key) => (
					<ProductSkeleton key={key} displayProduct='productInGrid' />
				))
			)}
		</div>
	);
};

export default ProductList;
