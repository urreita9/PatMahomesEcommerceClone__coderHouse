import React, { useEffect, useContext, useState } from "react";
import ProductList from "./ProductList";
import { getData } from "../helpers/getData";
import { CartContext } from "./context/CartContext";
// import { productsFromFile } from "../productsData";

const ProductListContainer = ({ slider }) => {
	// const [imageLoaded, setImageLoaded] = useState(false);
	const { products, imageLoaded } = useContext(CartContext);
	// useEffect(() => {
	// 	if (products.length > 0) {
	// 		setImageLoaded(true);

	// 		return;
	// 	} else {
	// 		getData().then((data) => {
	// 			setProducts(data);
	// 			setImageLoaded(true);
	// 		});
	// 	}
	// }, []);
	return (
		<>
			<ProductList
				imageLoaded={imageLoaded}
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
