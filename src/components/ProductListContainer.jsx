import React, { useContext } from "react";
import ProductList from "./ProductList";
import { CartContext } from "./context/CartContext";

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
