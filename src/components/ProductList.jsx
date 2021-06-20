import React from "react";
import Product from "./Product";

import SliderContainer from "./SliderContainer";
import "./ProductListGrid.css";

const ProductList = ({
	setCartCounter,
	cartCounter,
	products,
	displayClassName,
	slider,
}) => {
	return (
		<div className={displayClassName}>
			{slider ? (
				<SliderContainer
					setCartCounter={setCartCounter}
					cartCounter={cartCounter}
					products={products}
				/>
			) : (
				products.slice(0, 6).map((product) => {
					return (
						<Product
							displayProduct='productInGrid'
							key={product.id}
							id={product.id}
							img={product.img}
							title={product.title}
							price={product.price}
							description={product.description}
							stock={product.stock}
							cartCounter={cartCounter}
							setCartCounter={setCartCounter}
						/>
					);
				})
			)}
		</div>
	);
};

export default ProductList;
