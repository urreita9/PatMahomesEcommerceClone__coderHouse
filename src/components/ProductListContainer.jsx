import React, { useEffect, useContext, useState } from "react";
import ProductList from "./ProductList";
import { getData } from "../helpers/getData";
import { CartContext } from "./context/CartContext";
// import { productsFromFile } from "../productsData";

const ProductListContainer = ({ slider }) => {
	const { products, imageLoaded, loading } = useContext(CartContext);

	return (
		<>
			<ProductList
				loading={loading}
				products={products}
				displayClassName={
					slider
						? "slider__container"
						: `body__productGrid ${imageLoaded || "heightSkeleton"}`
				}
				slider={slider}
			/>
		</>
	);
};

export default ProductListContainer;
