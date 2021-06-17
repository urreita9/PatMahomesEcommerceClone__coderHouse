import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getData } from "../helpers/getData";
// import { productsFromFile } from "../productsData";

const ProductListContainer = ({ cartCounter, setCartCounter }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getData().then((data) => setProducts(data));
	}, []);
	return (
		<>
			<ProductList
				products={products}
				cartCounter={cartCounter}
				setCartCounter={setCartCounter}
			/>
		</>
	);
};

export default ProductListContainer;
