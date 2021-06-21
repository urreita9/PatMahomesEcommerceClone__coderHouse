import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getData } from "../helpers/getData";
// import { productsFromFile } from "../productsData";

const ProductListContainer = ({ slider }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getData().then((data) => setProducts(data));
	}, []);
	return (
		<>
			<ProductList
				products={products}
				displayClassName={slider ? "slider__container" : "body__productGrid"}
				slider={slider}
			/>
		</>
	);
};

export default ProductListContainer;
