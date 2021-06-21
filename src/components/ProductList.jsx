import React from "react";
import Product from "./Product";

import SliderContainer from "./SliderContainer";
import "./ProductListGrid.css";

const ProductList = ({ products, displayClassName, slider }) => {
	return (
		<div className={displayClassName}>
			{slider ? (
				<SliderContainer products={products} />
			) : (
				products.slice(0, 6).map((product) => {
					return <Product displayProduct='productInGrid' {...product} />;
				})
			)}
		</div>
	);
};

export default ProductList;
